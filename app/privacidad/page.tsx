import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Política de Privacidad | FinanzasPro",
  description: "Política de privacidad de FinanzasPro. Cómo protegemos tus datos personales.",
  robots: "index, follow",
  alternates: {
    canonical: "https://app-finanzas-mu.vercel.app/privacidad",
  },
}

export default function PrivacyPage() {
  return (
    <article className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
            Política de Privacidad
          </h1>
          <p className="text-lg text-muted-foreground">
            Última actualización: 17 de febrero de 2026
          </p>
        </div>

        <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-li:text-foreground prose-a:text-primary hover:prose-a:underline">
          <h2>1. Introducción</h2>
          <p>
            En FinanzasPro (en adelante &quot;nosotros&quot; o &quot;el sitio&quot;), respetamos la privacidad de nuestros usuarios.
            Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos tu información
            cuando visitas nuestro sitio web.
          </p>

          <h2>2. Información que recopilamos</h2>
          <p>Recopilamos información de las siguientes maneras:</p>
          <ul>
            <li>
              <strong>Información que proporcionas voluntariamente:</strong> Si te suscribes a nuestro newsletter,
              completamos formularios de contacto o dejas comentarios, recopilamos esa información.
            </li>
            <li>
              <strong>Información recopilada automáticamente:</strong> Cookies, direcciones IP, tipo de navegador,
              páginas visitadas, y tiempo que pasaste en el sitio.
            </li>
            <li>
              <strong>Información de terceros:</strong> Google Analytics nos proporciona datos sobre comportamiento
              de usuarios.
            </li>
          </ul>

          <h2>3. Uso de la información</h2>
          <p>Usamos tu información para:</p>
          <ul>
            <li>Mejorar y personalizar tu experiencia en el sitio</li>
            <li>Enviar newsletters y contenido educativo (solo si te suscribiste)</li>
            <li>Analizar tendencias y diagnósticos de uso del sitio</li>
            <li>Detectar, prevenir y abordar fraudes y problemas técnicos</li>
            <li>Cumplir con obligaciones legales</li>
            <li>Mostrar publicidad personalizada mediante Google AdSense</li>
          </ul>

          <h2>4. Cookies y tecnologías similares</h2>
          <p>
            Utilizamos cookies para mejorar tu experiencia. Las cookies son pequeños archivos que se almacenan en tu
            dispositivo. Puedes controlar las cookies a través de la configuración de tu navegador.
          </p>
          <p>
            Google AdSense y Google Analytics también usan cookies para mostrar anuncios relevantes y recopilar datos
            de uso.
          </p>

          <h2>5. Google AdSense</h2>
          <p>
            Este sitio utiliza Google AdSense para mostrar anuncios. Google puede:
          </p>
          <ul>
            <li>Usar cookies para mostrar anuncios basados en tu historial de navegación</li>
            <li>Recopilar datos no personales sobre tu actividad</li>
            <li>Compartir información con socios publicitarios</li>
          </ul>
          <p>
            Puedes optar por no participar en la publicidad personalizada de Google visitando:{" "}
            <Link href="https://www.google.com/settings/ads" className="text-primary hover:underline">
              google.com/settings/ads
            </Link>
          </p>

          <h2>6. Google Analytics</h2>
          <p>
            Usamos Google Analytics para entender cómo los usuarios interactúan con nuestro sitio. Los datos se
            recopilan de forma anónima.
          </p>
          <p>
            Más información: <Link href="https://marketingplatform.google.com/about/analytics/" className="text-primary hover:underline">
              Google Analytics
            </Link>
          </p>

          <h2>7. Seguridad de datos</h2>
          <p>
            Implementamos medidas de seguridad razonables para proteger tu información personal, incluyendo:
          </p>
          <ul>
            <li>Conexión HTTPS para todas las páginas</li>
            <li>Encriptación de datos sensibles</li>
            <li>Políticas de acceso restringido a información personal</li>
          </ul>
          <p>
            Sin embargo, ningún método de transmisión por Internet es 100% seguro. Transmites información bajo tu
            propio riesgo.
          </p>

          <h2>8. Enlaces a terceros</h2>
          <p>
            Nuestro sitio puede contener enlaces a sitios web de terceros. No somos responsables de las prácticas de
            privacidad de estos sitios. Te recomendamos revisar sus políticas de privacidad antes de proporcionarles
            información.
          </p>

          <h2>9. Derechos del usuario</h2>
          <p>Tienes derecho a:</p>
          <ul>
            <li>Acceder a los datos personales que tenemos sobre ti</li>
            <li>Solicitar la corrección de datos inexactos</li>
            <li>Solicitar la eliminación de tus datos (derecho al olvido)</li>
            <li>Optar por no recibir comunicaciones de marketing</li>
            <li>Descargar tus datos en formato portátil</li>
          </ul>
          <p>
            Para ejercer estos derechos, contáctanos en: <strong>contacto@app-finanzas-mu.vercel.app</strong>
          </p>

          <h2>10. Retención de datos</h2>
          <p>
            Retenemos información personal solo durante el tiempo necesario para cumplir los propósitos descritos en
            esta política. Los datos de Analytics se retienen según la configuración de Google Analytics.
          </p>

          <h2>11. Cambios a esta política</h2>
          <p>
            Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Los cambios
            significativos se anunciarán en nuestro sitio. Tu uso continuado del sitio tras cambios indica tu
            aceptación.
          </p>

          <h2>12. Contacto</h2>
          <p>
            Si tienes preguntas o inquietudes sobre esta Política de Privacidad, contáctanos:
          </p>
          <ul>
            <li>
              <strong>Email:</strong> contacto@app-finanzas-mu.vercel.app
            </li>
            <li>
              <strong>Sitio web:</strong> https://app-finanzas-mu.vercel.app
            </li>
          </ul>

          <hr className="my-8" />

          <p className="text-sm text-muted-foreground">
            Esta Política de Privacidad es conforme con GDPR (General Data Protection Regulation) y CCPA (California
            Consumer Privacy Act).
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <Link href="/" className="text-primary hover:underline">
            ← Volver a inicio
          </Link>
        </div>
      </div>
    </article>
  )
}
