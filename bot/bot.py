"""
Bot de Telegram — FinanzasPro Cursos

El bot acepta DOS tipos de mensajes en privado:

  A) Link directo de Udemy (con o sin cupón):
     https://www.udemy.com/course/nombre/?couponCode=XXX

  B) Link de una página puente ajena (de otro grupo/canal):
     https://otrodominio.com/curso/algun-slug
     El bot visita esa página, extrae el link real de Udemy y crea la tuya.

  Formato extendido opcional (Shift+Enter para saltar línea):
     <url> | Título del Curso
     Descripción del curso.
     Instructor: Juan Pérez
     Nivel: Principiante
     Categoría: Desarrollo Web
     • Lo que aprenderás 1
     • Lo que aprenderás 2
"""

import os
import re
import logging
from urllib.parse import urlparse, parse_qs, unquote

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

# Detecta un link directo de Udemy en el mensaje
UDEMY_PATTERN = re.compile(r"https?://(?:www\.)?udemy\.com/course/[^\s]+")

# Detecta cualquier URL en el mensaje (para páginas puente ajenas)
ANY_URL_PATTERN = re.compile(r"https?://[^\s]+")

# Busca URLs directas de Udemy dentro del HTML de una página
UDEMY_DIRECT_IN_HTML = re.compile(r"https?://(?:www\.)?udemy\.com/course/[^\"'>\s\)\\]+")

# Busca URLs de tracking de Udemy (trk.udemy.com) dentro del HTML
UDEMY_TRACKING_IN_HTML = re.compile(r"https?://trk\.udemy\.com/[^\"'>\s\)\\]+")


def decode_tracking_url(tracking_url: str) -> str | None:
    """
    Extrae la URL real de Udemy desde un link de tracking (trk.udemy.com).
    El link real viene codificada en el parámetro ?u=
    Ejemplo: trk.udemy.com/c/xxx?u=https%3A%2F%2Fwww.udemy.com%2Fcourse%2F...
    """
    try:
        qs = parse_qs(urlparse(tracking_url).query)
        u_param = qs.get("u", [None])[0]
        if u_param:
            decoded = unquote(u_param)
            if "udemy.com/course/" in decoded:
                return decoded
    except Exception:
        pass
    return None


async def extract_udemy_from_page(url: str) -> str | None:
    """
    Visita una página puente ajena y extrae el link real de Udemy de su HTML.
    Soporta:
      - Links directos: udemy.com/course/...
      - Links de tracking: trk.udemy.com/c/...?u=<url codificada>
    """
    try:
        async with httpx.AsyncClient(timeout=10.0, follow_redirects=True) as client:
            response = await client.get(
                url,
                headers={"User-Agent": "Mozilla/5.0 (compatible; bot)"},
            )
            html = response.text

            # 1. Buscar link directo de Udemy
            match = UDEMY_DIRECT_IN_HTML.search(html)
            if match:
                return match.group(0).rstrip(".,)")

            # 2. Buscar link de tracking y decodificarlo
            match = UDEMY_TRACKING_IN_HTML.search(html)
            if match:
                tracking_url = match.group(0).rstrip(".,)\"'")
                # Decodificar entidades HTML (&amp; → &)
                tracking_url = tracking_url.replace("&amp;", "&")
                udemy_url = decode_tracking_url(tracking_url)
                if udemy_url:
                    return udemy_url

    except Exception as e:
        logger.error("Error al visitar página puente: %s", e)
    return None


def parse_text_fields(text: str, udemy_url: str) -> dict:
    """
    Extrae campos opcionales del texto del mensaje:
    título, descripción, instructor, nivel, categoría, highlights.
    """
    result: dict = {"udemyUrl": udemy_url}

    # Primera línea: puede tener | Título
    if "\n" in text:
        first_line = text[: text.index("\n")].strip()
        remaining = text.split("\n")[1:]
    else:
        first_line = text.strip()
        remaining = []

    if "|" in first_line:
        titulo = first_line.split("|", 1)[1].strip()
        if titulo:
            result["title"] = titulo

    description_lines = []
    highlights = []

    for line in remaining:
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
    Mensaje que se publica en el grupo/canal.
    Precio siempre $0, sin mostrar el código del cupón.
    """
    lines = [f"*{title}*"]

    if parsed.get("description"):
        lines.append(f"\n_{parsed['description']}_")

    # Detalles — precio siempre quemado en $0
    details = ["Precio: *$0* (gratis con cupón)"]
    if parsed.get("level"):
        details.append(f"Nivel: {parsed['level']}")
    if parsed.get("instructor"):
        details.append(f"Instructor: {parsed['instructor']}")
    if parsed.get("category"):
        details.append(f"Categoría: {parsed['category']}")

    lines.append("\n" + " · ".join(details))

    if parsed.get("highlights"):
        lines.append("\n*Aprenderás:*")
        for punto in parsed["highlights"][:4]:
            lines.append(f"• {punto}")

    lines.append(f"\nCupón disponible:\n{bridge_url}")

    return "\n".join(lines)


def extract_button_urls(message) -> list[str]:
    """
    Extrae todas las URLs de los botones inline del mensaje.
    Funciona con mensajes reenviados que tienen botones "Ver", "Ir al curso", etc.
    """
    urls = []
    if message.reply_markup and hasattr(message.reply_markup, "inline_keyboard"):
        for row in message.reply_markup.inline_keyboard:
            for button in row:
                if getattr(button, "url", None):
                    urls.append(button.url)
    return urls


async def handle_private_message(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    message = update.message
    if not message:
        return

    # Acepta texto plano Y mensajes con foto/video/caption (mensajes reenviados de canales)
    text = message.text or message.caption or ""

    # ── Paso 1: buscar link directo de Udemy en el texto ──
    udemy_match = UDEMY_PATTERN.search(text)

    if udemy_match:
        udemy_url = udemy_match.group(0).rstrip(".,)")
        parsed = parse_text_fields(text, udemy_url)

    else:
        # ── Paso 2: buscar URL en el texto o en los botones inline ──
        url_match = ANY_URL_PATTERN.search(text)
        button_urls = extract_button_urls(message)

        # Preferir URL del texto; si no hay, usar el primer botón inline
        bridge_url_ajena = None
        if url_match:
            bridge_url_ajena = url_match.group(0).rstrip(".,)")
        elif button_urls:
            bridge_url_ajena = button_urls[0]

        if not bridge_url_ajena:
            await message.reply_text(
                "No encontré ningún link.\n\n"
                "Puedes enviarme:\n"
                "• Un link directo de Udemy\n"
                "• El link o mensaje reenviado de una página puente ajena"
            )
            return

        await message.reply_text("Visitando la página para extraer el link de Udemy...")

        udemy_url = await extract_udemy_from_page(bridge_url_ajena)

        if not udemy_url:
            await message.reply_text(
                "No pude encontrar el link de Udemy en esa página.\n"
                "Prueba copiando el link de Udemy directamente."
            )
            return

        await message.reply_text(f"Link de Udemy encontrado:\n{udemy_url}")
        # Usar el caption/texto del mensaje reenviado como base para el título
        parsed = parse_text_fields(text, udemy_url)

    # ── Paso 3: llamar a la API de Next.js ──
    await message.reply_text("Creando tu página puente...")

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
        await message.reply_text("No pude conectarme a la API.")
        return

    if not data.get("success"):
        await message.reply_text(f"Error: {data.get('error', 'desconocido')}")
        return

    my_bridge_url = data["bridgeUrl"]
    course_title = data["title"]

    # ── Paso 4: confirmar al remitente ──
    await message.reply_text(
        f"*{course_title}*\n\nTu página puente:\n{my_bridge_url}",
        parse_mode="Markdown",
    )

    # ── Paso 5: publicar en el grupo ──
    group_text = build_group_message(course_title, my_bridge_url, parsed)
    await context.bot.send_message(
        chat_id=GROUP_CHAT_ID,
        text=group_text,
        parse_mode="Markdown",
    )

    logger.info("Publicado: %s → %s", course_title, my_bridge_url)


def main() -> None:
    app = Application.builder().token(BOT_TOKEN).build()
    # Escucha texto, fotos con caption y cualquier mensaje reenviado en privado
    app.add_handler(
        MessageHandler(
            filters.ChatType.PRIVATE & ~filters.COMMAND,
            handle_private_message,
        )
    )
    logger.info("Bot iniciado. Esperando mensajes...")
    app.run_polling(allowed_updates=Update.ALL_TYPES)


if __name__ == "__main__":
    main()
