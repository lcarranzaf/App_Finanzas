"""
Bot de Telegram para convertir links de Udemy en páginas puente propias.

Flujo:
  1. Recibes un link de Udemy (con o sin cupón) en chat privado con el bot.
  2. El bot llama a la API de Next.js y genera la URL puente.
  3. El bot te responde con la URL generada.
  4. El bot publica automáticamente en tu grupo/canal de Telegram.

Formato de mensaje aceptado:
  - Solo link:
      https://www.udemy.com/course/nombre-del-curso/?couponCode=XXXX

  - Link con título personalizado (separado por |):
      https://www.udemy.com/course/nombre-del-curso/?couponCode=XXXX | Título del Curso

  - Link con título y descripción (segunda línea tras |):
      https://www.udemy.com/course/nombre-del-curso/?couponCode=XXXX | Título del Curso
      Descripción breve del curso aquí.
"""

import os
import re
import logging

import httpx
from dotenv import load_dotenv
from telegram import Update
from telegram.ext import Application, MessageHandler, filters, ContextTypes

load_dotenv()

logging.basicConfig(
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
    level=logging.INFO,
)
logger = logging.getLogger(__name__)

# Variables de entorno requeridas
BOT_TOKEN: str = os.environ["TELEGRAM_BOT_TOKEN"]
GROUP_CHAT_ID: str = os.environ["TELEGRAM_GROUP_ID"]   # Ej: -100123456789
API_URL: str = os.environ["NEXT_API_URL"]              # Ej: https://tudominio.com/api/crear-curso
API_SECRET_KEY: str = os.environ["API_SECRET_KEY"]

# Regex para detectar URLs de Udemy (captura la URL completa con parámetros)
UDEMY_PATTERN = re.compile(
    r"https?://(?:www\.)?udemy\.com/course/[^\s]+"
)


def parse_message(text: str) -> dict:
    """
    Extrae udemyUrl, title (opcional) y description (opcional) del texto.

    Formatos soportados:
      <url>
      <url> | Título
      <url> | Título\nDescripción
    """
    match = UDEMY_PATTERN.search(text)
    if not match:
        return {}

    udemy_url = match.group(0).rstrip(".,)")  # limpiar puntuación final accidental
    title = None
    description = None

    # Buscar el separador | después de la URL
    after_url = text[match.end():].strip()
    if after_url.startswith("|"):
        rest = after_url[1:].strip()
        lines = rest.split("\n", 1)
        title = lines[0].strip() or None
        if len(lines) > 1:
            description = lines[1].strip() or None

    return {"udemyUrl": udemy_url, "title": title, "description": description}


async def handle_private_message(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    """Procesa mensajes privados que contengan links de Udemy."""
    message = update.message
    if not message or not message.text:
        return

    parsed = parse_message(message.text)
    if not parsed:
        await message.reply_text(
            "No encontré ningún link de Udemy en tu mensaje.\n\n"
            "Envíame una URL como:\n"
            "https://www.udemy.com/course/nombre-del-curso/?couponCode=XXXX"
        )
        return

    await message.reply_text("Procesando el link...")

    # Llamar a la API de Next.js
    try:
        async with httpx.AsyncClient(timeout=15.0) as client:
            response = await client.post(
                API_URL,
                json=parsed,
                headers={"x-api-key": API_SECRET_KEY},
            )
            response.raise_for_status()
            data = response.json()
    except httpx.HTTPStatusError as e:
        logger.error("HTTP error al llamar a la API: %s", e)
        await message.reply_text(f"Error de la API ({e.response.status_code}). Revisa los logs.")
        return
    except Exception as e:
        logger.error("Error inesperado al llamar a la API: %s", e)
        await message.reply_text("No pude conectarme a la API. Intenta de nuevo.")
        return

    if not data.get("success"):
        error_msg = data.get("error", "Error desconocido")
        await message.reply_text(f"La API devolvió un error: {error_msg}")
        return

    bridge_url = data["bridgeUrl"]
    course_title = data["title"]

    # 1. Confirmar al remitente (tú)
    await message.reply_text(
        f"*{course_title}*\n\n"
        f"URL puente generada:\n{bridge_url}",
        parse_mode="Markdown",
    )

    # 2. Publicar en el grupo/canal
    texto_publicacion = (
        f"*{course_title}*\n\n"
        f"Cupón disponible — accede aqui:\n{bridge_url}"
    )
    await context.bot.send_message(
        chat_id=GROUP_CHAT_ID,
        text=texto_publicacion,
        parse_mode="Markdown",
    )

    logger.info("Publicado: %s → %s", course_title, bridge_url)


def main() -> None:
    app = Application.builder().token(BOT_TOKEN).build()

    # Solo escucha mensajes de texto en chats privados
    app.add_handler(
        MessageHandler(filters.TEXT & filters.ChatType.PRIVATE, handle_private_message)
    )

    logger.info("Bot iniciado. Esperando mensajes...")
    app.run_polling(allowed_updates=Update.ALL_TYPES)


if __name__ == "__main__":
    main()
