import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Política de Cookies | Finanzas Digitales",
  description:
    "Política de cookies de Finanzas Digitales. Qué cookies utilizamos, para qué y cómo puedes gestionarlas conforme al RGPD.",
  alternates: {
    canonical: "https://www.finanzasdigitales.es/politica-de-cookies",
  },
}

export default function CookiesPage() {
  return (
    <article className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
            Política de Cookies
          </h1>
          <p className="text-lg text-muted-foreground">
            Última actualización: 9 de abril de 2026
          </p>
        </div>

        <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-li:text-foreground prose-a:text-primary hover:prose-a:underline">

          <h2>1. ¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños ficheros de texto que los sitios web almacenan en tu navegador cuando los
            visitas. Permiten que el sitio recuerde tus preferencias, analice el tráfico y muestre publicidad
            relevante. Las cookies no contienen virus ni acceden a tu información personal almacenada en el
            dispositivo.
          </p>

          <h2>2. Tipos de cookies que utilizamos</h2>

          <h3>2.1 Cookies técnicas o estrictamente necesarias</h3>
          <p>
            Son imprescindibles para el funcionamiento básico del sitio. Sin ellas, algunas partes de la web no
            podrían funcionar correctamente. No requieren consentimiento.
          </p>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Cookie</th>
                  <th>Proveedor</th>
                  <th>Finalidad</th>
                  <th>Duración</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>__Secure-next-auth.session-token</td>
                  <td>Finanzas Digitales</td>
                  <td>Mantener la sesión del usuario</td>
                  <td>Sesión</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>2.2 Cookies analíticas</h3>
          <p>
            Nos permiten conocer cómo los usuarios interactúan con el sitio (páginas visitadas, tiempo de
            permanencia, fuente de tráfico) para mejorar su funcionamiento. Requieren tu consentimiento.
          </p>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Cookie</th>
                  <th>Proveedor</th>
                  <th>Finalidad</th>
                  <th>Duración</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>_ga</td>
                  <td>Google Analytics</td>
                  <td>Distinguir usuarios únicos</td>
                  <td>2 años</td>
                </tr>
                <tr>
                  <td>_ga_*</td>
                  <td>Google Analytics</td>
                  <td>Mantener el estado de la sesión</td>
                  <td>2 años</td>
                </tr>
                <tr>
                  <td>_gid</td>
                  <td>Google Analytics</td>
                  <td>Distinguir usuarios (sesión corta)</td>
                  <td>24 horas</td>
                </tr>
                <tr>
                  <td>_gat</td>
                  <td>Google Analytics</td>
                  <td>Limitar la tasa de solicitudes</td>
                  <td>1 minuto</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>2.3 Cookies publicitarias de terceros</h3>
          <p>
            Este sitio web utiliza <strong>Google AdSense</strong> para mostrar anuncios. Google AdSense y sus
            socios de la Red de Display utilizan cookies de terceros para:
          </p>
          <ul>
            <li>Mostrar anuncios basados en tus visitas anteriores a este y otros sitios web (publicidad personalizada).</li>
            <li>Medir la efectividad de los anuncios mostrados.</li>
            <li>Limitar el número de veces que ves el mismo anuncio.</li>
            <li>Ayudar a los anunciantes a entender el comportamiento de los usuarios que hacen clic en sus anuncios.</li>
          </ul>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Cookie</th>
                  <th>Proveedor</th>
                  <th>Finalidad</th>
                  <th>Duración</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>IDE</td>
                  <td>Google DoubleClick</td>
                  <td>Publicidad personalizada (registro de conversiones y remarketing)</td>
                  <td>13 meses</td>
                </tr>
                <tr>
                  <td>ANID</td>
                  <td>Google</td>
                  <td>Publicidad personalizada basada en intereses</td>
                  <td>13 meses</td>
                </tr>
                <tr>
                  <td>test_cookie</td>
                  <td>Google DoubleClick</td>
                  <td>Verificar que el navegador admite cookies</td>
                  <td>15 minutos</td>
                </tr>
                <tr>
                  <td>NID</td>
                  <td>Google</td>
                  <td>Preferencias del usuario y anuncios personalizados</td>
                  <td>6 meses</td>
                </tr>
                <tr>
                  <td>1P_JAR</td>
                  <td>Google</td>
                  <td>Estadísticas publicitarias y experiencia del usuario</td>
                  <td>30 días</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Más información sobre cómo Google usa las cookies en publicidad:{" "}
            <Link href="https://policies.google.com/technologies/ads">
              policies.google.com/technologies/ads
            </Link>
          </p>

          <h2>3. Base legal</h2>
          <p>
            El uso de cookies técnicas se ampara en el interés legítimo (art. 6.1.f RGPD) y en la excepción
            prevista en la Ley 34/2002 (LSSI-CE) para cookies estrictamente necesarias. Las cookies analíticas
            y publicitarias se basan en tu <strong>consentimiento expreso</strong> (art. 6.1.a RGPD), que puedes
            revocar en cualquier momento.
          </p>

          <h2>4. Cómo gestionar y desactivar las cookies</h2>

          <h3>4.1 Desde nuestro banner de cookies</h3>
          <p>
            Al entrar por primera vez en el sitio, verás un banner que te permite aceptar o rechazar los
            distintos tipos de cookies. Puedes cambiar tus preferencias en cualquier momento desde el enlace
            &quot;Gestionar cookies&quot; en el pie de página.
          </p>

          <h3>4.2 Desde tu navegador</h3>
          <p>
            Puedes configurar tu navegador para bloquear o eliminar cookies. Ten en cuenta que desactivar
            cookies puede afectar al funcionamiento de algunos elementos del sitio.
          </p>
          <ul>
            <li>
              <Link href="https://support.google.com/chrome/answer/95647">Google Chrome</Link>
            </li>
            <li>
              <Link href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias">
                Mozilla Firefox
              </Link>
            </li>
            <li>
              <Link href="https://support.apple.com/es-es/guide/safari/sfri11471/mac">Safari</Link>
            </li>
            <li>
              <Link href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d">
                Microsoft Edge
              </Link>
            </li>
          </ul>

          <h3>4.3 Publicidad personalizada de Google</h3>
          <p>
            Puedes desactivar la publicidad personalizada de Google en:{" "}
            <Link href="https://www.google.com/settings/ads">google.com/settings/ads</Link>
          </p>
          <p>
            También puedes gestionar las preferencias de publicidad de múltiples empresas en:{" "}
            <Link href="https://www.youronlinechoices.com/es/">Your Online Choices</Link>
          </p>

          <h2>5. Actualizaciones de esta política</h2>
          <p>
            Podemos actualizar esta Política de Cookies para reflejar cambios en los servicios que utilizamos
            o en la normativa aplicable. Publicaremos la fecha de la última actualización al inicio del
            documento.
          </p>

          <h2>6. Contacto</h2>
          <p>
            Para cualquier consulta sobre el uso de cookies en este sitio:{" "}
            <a href="mailto:contacto@finanzasdigitales.es">contacto@finanzasdigitales.es</a>
          </p>

          <hr className="my-8" />
          <p className="text-sm text-muted-foreground">
            Esta Política de Cookies cumple con el Reglamento (UE) 2016/679 (RGPD), la Ley Orgánica 3/2018
            (LOPDGDD) y la Ley 34/2002 de Servicios de la Sociedad de la Información y de Comercio Electrónico
            (LSSI-CE).
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex gap-6 flex-wrap">
          <Link href="/privacidad" className="text-primary hover:underline">
            Política de Privacidad
          </Link>
          <Link href="/aviso-legal" className="text-primary hover:underline">
            Aviso Legal
          </Link>
          <Link href="/" className="text-primary hover:underline">
            ← Volver a inicio
          </Link>
        </div>
      </div>
    </article>
  )
}
