"""
Bot de Telegram — FinanzasPro Cursos

Formato de mensaje (todo opcional excepto la URL):

  Mínimo:
    https://www.udemy.com/course/nombre/?couponCode=XXX

  Completo:
    https://www.udemy.com/course/nombre/?couponCode=XXX | Título del Curso
    Descripción breve del curso aquí.
    Instructor: Juan Pérez
    Nivel: Principiante
    Precio: $89.99
    Categoría: Desarrollo Web
    • Lo que aprenderás punto 1
    • Lo que aprenderás punto 2
    • Lo que aprenderás punto 3

Notas:
  - El cupón se extrae automáticamente de la URL.
  - El título va separado por | en la primera línea.
  - Instructor, Nivel, Precio, Categoría se detectan por su prefijo.
  - Los puntos con • son los highlights de qué aprenderás.
  - En Telegram usa Shift+Enter para saltos de línea sin enviar.
"""

import os
import re
import logging
from urllib.parse import urlparse, parse_qs

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

BOT_TOKEN: str = os.environ["TELEGRAM_BOT_TOKEN"]
GROUP_CHAT_ID: str = os.environ["TELEGRAM_GROUP_ID"]
API_URL: str = os.environ["NEXT_API_URL"]
API_SECRET_KEY: str = os.environ["API_SECRET_KEY"]

UDEMY_PATTERN = re.compile(r"https?://(?:www\.)?udemy\.com/course/[^\s]+")


def extract_coupon_from_url(url: str) -> str | None:
    """Extrae el couponCode de la query string de la URL de Udemy."""
    try:
        qs = parse_qs(urlparse(url).query)
        codes = qs.get("couponCode", [])
        return codes[0] if codes else None
    except Exception:
        return None


def parse_message(text: str) -> dict:
    """
    Extrae todos los campos del mensaje.
    Devuelve dict vacío si no hay URL de Udemy.
    """
    match = UDEMY_PATTERN.search(text)
    if not match:
        return {}

    udemy_url = match.group(0).rstrip(".,)")
    result: dict = {"udemyUrl": udemy_url}

    # Título: después del | en la primera línea
    if "\n" in text:
        first_line = text[: text.index("\n")].strip()
        remaining_lines = text.split("\n")[1:]
    else:
        first_line = text.strip()
        remaining_lines = []

    if "|" in first_line:
        titulo = first_line.split("|", 1)[1].strip()
        if titulo:
            result["title"] = titulo

    # Procesar líneas restantes
    description_lines = []
    highlights = []

    for line in remaining_lines:
        stripped = line.strip()
        if not stripped:
            continue

        lower = stripped.lower()

        if lower.startswith("instructor:"):
            result["instructor"] = stripped.split(":", 1)[1].strip()
        elif lower.startswith("nivel:"):
            result["level"] = stripped.split(":", 1)[1].strip()
        elif lower.startswith("precio:"):
            result["originalPrice"] = stripped.split(":", 1)[1].strip()
        elif lower.startswith("categoría:") or lower.startswith("categoria:"):
            result["category"] = stripped.split(":", 1)[1].strip()
        elif stripped.startswith("•") or stripped.startswith("-"):
            punto = stripped.lstrip("•- ").strip()
            if punto:
                highlights.append(punto)
        else:
            description_lines.append(stripped)

    if description_lines:
        result["description"] = " ".join(description_lines)
    if highlights:
        result["highlights"] = highlights[:6]

    return result


def build_group_message(title: str, bridge_url: str, parsed: dict) -> str:
    """
    Construye el mensaje que se publica en el grupo/canal.
    Incluye toda la info disponible de forma clara.
    """
    lines = [f"*{title}*"]

    # Descripción
    if parsed.get("description"):
        lines.append(f"\n_{parsed['description']}_")

    # Detalles en línea
    details = []
    coupon = extract_coupon_from_url(parsed.get("udemyUrl", ""))
    if coupon:
        details.append(f"Cupón: `{coupon}`")
    if parsed.get("originalPrice"):
        details.append(f"Precio original: {parsed['originalPrice']}")
    if parsed.get("level"):
        details.append(f"Nivel: {parsed['level']}")
    if parsed.get("instructor"):
        details.append(f"Instructor: {parsed['instructor']}")
    if parsed.get("category"):
        details.append(f"Categoría: {parsed['category']}")

    if details:
        lines.append("\n" + " · ".join(details))

    # Highlights
    if parsed.get("highlights"):
        lines.append("\n*Aprenderás:*")
        for punto in parsed["highlights"][:4]:  # máx 4 en el mensaje de grupo
            lines.append(f"• {punto}")

    # Link
    lines.append(f"\nAccede aquí:\n{bridge_url}")

    return "\n".join(lines)


async def handle_private_message(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    message = update.message
    if not message or not message.text:
        return

    parsed = parse_message(message.text)
    if not parsed:
        await message.reply_text(
            "No encontré ningún link de Udemy.\n\n"
            "Envíame una URL como:\n"
            "https://www.udemy.com/course/nombre/?couponCode=XXXX\n\n"
            "Formato completo (Shift+Enter para saltar línea):\n"
            "<url> | Título\nDescripción\nInstructor: Nombre\nNivel: Principiante\nPrecio: $X\n• Punto 1"
        )
        return

    await message.reply_text("Procesando...")

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
        logger.error("HTTP error: %s", e)
        await message.reply_text(f"Error de la API ({e.response.status_code}).")
        return
    except Exception as e:
        logger.error("Error inesperado: %s", e)
        await message.reply_text("No pude conectarme a la API. Intenta de nuevo.")
        return

    if not data.get("success"):
        await message.reply_text(f"Error: {data.get('error', 'desconocido')}")
        return

    bridge_url = data["bridgeUrl"]
    course_title = data["title"]

    # 1. Confirmar al remitente (privado)
    await message.reply_text(
        f"*{course_title}*\n\nURL generada:\n{bridge_url}",
        parse_mode="Markdown",
    )

    # 2. Publicar en el grupo con toda la info disponible
    group_text = build_group_message(course_title, bridge_url, parsed)
    await context.bot.send_message(
        chat_id=GROUP_CHAT_ID,
        text=group_text,
        parse_mode="Markdown",
    )

    logger.info("Publicado: %s → %s", course_title, bridge_url)


def main() -> None:
    app = Application.builder().token(BOT_TOKEN).build()
    app.add_handler(
        MessageHandler(filters.TEXT & filters.ChatType.PRIVATE, handle_private_message)
    )
    logger.info("Bot iniciado. Esperando mensajes...")
    app.run_polling(allowed_updates=Update.ALL_TYPES)


if __name__ == "__main__":
    main()
