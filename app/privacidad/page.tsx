import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Política de Privacidad | Finanzas Digitales",
  description:
    "Política de privacidad de Finanzas Digitales. Cómo recopilamos, usamos y protegemos tus datos personales conforme al RGPD.",
  alternates: {
    canonical: "https://www.finanzasdigitales.es/privacidad",
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
            Última actualización: 9 de abril de 2026
          </p>
        </div>

        <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-li:text-foreground prose-a:text-primary hover:prose-a:underline">

          <h2>1. Responsable del tratamiento</h2>
          <p>
            El responsable del tratamiento de los datos personales recogidos en este sitio web es el titular de{" "}
            <strong>Finanzas Digitales</strong> (en adelante, &quot;nosotros&quot; o &quot;el sitio&quot;), con correo electrónico de
            contacto: <a href="mailto:contacto@finanzasdigitales.es">contacto@finanzasdigitales.es</a>.
          </p>

          <h2>2. Información que recopilamos</h2>
          <p>Recopilamos información de las siguientes maneras:</p>
          <ul>
            <li>
              <strong>Información que proporcionas voluntariamente:</strong> nombre y dirección de correo electrónico
              cuando te suscribes a nuestro boletín o rellenas el formulario de contacto.
            </li>
            <li>
              <strong>Información recopilada automáticamente:</strong> dirección IP, tipo de navegador, sistema
              operativo, páginas visitadas, tiempo de permanencia y datos de navegación, a través de cookies y
              tecnologías similares.
            </li>
            <li>
              <strong>Datos proporcionados por terceros:</strong> Google Analytics nos facilita estadísticas agregadas
              sobre el comportamiento de los usuarios en el sitio.
            </li>
          </ul>

          <h2>3. Finalidad y base legal del tratamiento</h2>
          <p>Tratamos tus datos para las siguientes finalidades:</p>
          <ul>
            <li>Gestionar tu suscripción al boletín y enviarte contenido educativo sobre finanzas personales
              (base legal: consentimiento, art. 6.1.a RGPD).</li>
            <li>Responder a tus consultas a través del formulario de contacto
              (base legal: interés legítimo, art. 6.1.f RGPD).</li>
            <li>Analizar el uso del sitio para mejorar su funcionamiento y contenido
              (base legal: interés legítimo, art. 6.1.f RGPD).</li>
            <li>Mostrar publicidad personalizada y no personalizada a través de Google AdSense
              (base legal: consentimiento, art. 6.1.a RGPD).</li>
            <li>Cumplir con obligaciones legales aplicables
              (base legal: obligación legal, art. 6.1.c RGPD).</li>
          </ul>

          <h2>4. Cookies y tecnologías similares</h2>
          <p>
            Este sitio utiliza cookies propias y de terceros. Las cookies son pequeños ficheros que se almacenan
            en tu dispositivo cuando visitas una página web. Para información detallada sobre los tipos de cookies
            que usamos, su finalidad y cómo gestionarlas, consulta nuestra{" "}
            <Link href="/politica-de-cookies">Política de Cookies</Link>.
          </p>

          <h2>5. Publicidad de terceros: Google AdSense</h2>
          <p>
            Este sitio web utiliza <strong>Google AdSense</strong>, un servicio de publicidad gestionado por
            Google LLC. Google AdSense utiliza cookies para mostrar anuncios relevantes basados en tus visitas
            anteriores a este sitio y a otros sitios web en Internet.
          </p>
          <p>En concreto, Google y sus socios publicitarios pueden:</p>
          <ul>
            <li>Utilizar cookies de terceros (como la cookie de DoubleClick) para mostrar anuncios personalizados.</li>
            <li>Recopilar información sobre tu actividad de navegación para mostrar anuncios adaptados a tus intereses.</li>
            <li>Compartir estos datos con socios publicitarios de la Red de Display de Google.</li>
          </ul>
          <p>
            Puedes <strong>desactivar la publicidad personalizada</strong> de Google visitando{" "}
            <Link href="https://www.google.com/settings/ads">google.com/settings/ads</Link>, o gestionar las
            preferencias de publicidad de múltiples empresas a través de{" "}
            <Link href="https://www.youronlinechoices.com/es/">Your Online Choices</Link>.
          </p>
          <p>
            Más información sobre cómo Google utiliza los datos cuando usas sitios web de sus socios:{" "}
            <Link href="https://policies.google.com/technologies/partner-sites">
              policies.google.com/technologies/partner-sites
            </Link>.
          </p>

          <h2>6. Google Analytics</h2>
          <p>
            Utilizamos Google Analytics para obtener información estadística sobre el uso de nuestro sitio.
            Los datos se recopilan mediante cookies y se transfieren a servidores de Google LLC en Estados Unidos,
            país que cuenta con una Decisión de Adecuación de la Comisión Europea (Marco de Privacidad de Datos
            UE-EE. UU.). Google Analytics está configurado con anonimización de IP activada.
          </p>
          <p>
            Puedes optar por no ser rastreado por Google Analytics instalando el{" "}
            <Link href="https://tools.google.com/dlpage/gaoptout">complemento de inhabilitación</Link> para
            navegadores.
          </p>

          <h2>7. Transferencias internacionales de datos</h2>
          <p>
            Algunos de nuestros proveedores de servicios (Google LLC, Brevo SAS) pueden tratar datos en países
            fuera del Espacio Económico Europeo. En todo caso, estas transferencias se realizan con garantías
            adecuadas conforme al RGPD (cláusulas contractuales tipo o decisiones de adecuación de la Comisión
            Europea).
          </p>

          <h2>8. Conservación de datos</h2>
          <p>
            Conservamos tus datos personales únicamente durante el tiempo necesario para cumplir con los fines
            descritos en esta política:
          </p>
          <ul>
            <li>Datos de suscriptores: mientras mantengas la suscripción activa, más 2 años adicionales.</li>
            <li>Datos del formulario de contacto: 1 año desde la última comunicación.</li>
            <li>Datos de Analytics: según la configuración establecida en Google Analytics (máximo 26 meses).</li>
          </ul>

          <h2>9. Seguridad de los datos</h2>
          <p>
            Adoptamos medidas técnicas y organizativas adecuadas para proteger tu información, incluyendo
            conexión HTTPS en todas las páginas, acceso restringido a los datos personales y acuerdos de
            confidencialidad con proveedores. No obstante, ningún sistema de transmisión por Internet es
            completamente seguro.
          </p>

          <h2>10. Tus derechos</h2>
          <p>
            Conforme al RGPD y la LOPDGDD (Ley Orgánica 3/2018), tienes derecho a:
          </p>
          <ul>
            <li><strong>Acceso:</strong> obtener confirmación de si tratamos datos tuyos y, en su caso, acceder a ellos.</li>
            <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
            <li><strong>Supresión:</strong> solicitar la eliminación de tus datos (&quot;derecho al olvido&quot;).</li>
            <li><strong>Limitación:</strong> solicitar que restrinjamos el tratamiento de tus datos.</li>
            <li><strong>Portabilidad:</strong> recibir tus datos en formato estructurado y de uso común.</li>
            <li><strong>Oposición:</strong> oponerte al tratamiento basado en interés legítimo.</li>
            <li><strong>Retirar el consentimiento</strong> en cualquier momento, sin que afecte a la licitud del
              tratamiento previo.</li>
          </ul>
          <p>
            Para ejercer estos derechos, escríbenos a{" "}
            <a href="mailto:contacto@finanzasdigitales.es">contacto@finanzasdigitales.es</a>. Tienes también
            derecho a presentar una reclamación ante la{" "}
            <Link href="https://www.aepd.es">Agencia Española de Protección de Datos (AEPD)</Link>.
          </p>

          <h2>11. Menores de edad</h2>
          <p>
            Este sitio no está dirigido a menores de 14 años. No recopilamos conscientemente datos personales
            de menores. Si detectas que un menor nos ha facilitado datos sin consentimiento parental, contacta
            con nosotros para proceder a su eliminación.
          </p>

          <h2>12. Cambios en esta política</h2>
          <p>
            Podemos actualizar esta Política de Privacidad para reflejar cambios legislativos o en nuestros
            servicios. Publicaremos la fecha de la última actualización al inicio del documento. Te recomendamos
            revisarla periódicamente.
          </p>

          <h2>13. Contacto</h2>
          <p>
            Para cualquier consulta sobre esta Política de Privacidad:{" "}
            <a href="mailto:contacto@finanzasdigitales.es">contacto@finanzasdigitales.es</a>
          </p>

          <hr className="my-8" />
          <p className="text-sm text-muted-foreground">
            Esta Política de Privacidad cumple con el Reglamento (UE) 2016/679 (RGPD), la Ley Orgánica 3/2018
            de Protección de Datos Personales y Garantía de los Derechos Digitales (LOPDGDD) y la Ley 34/2002
            de Servicios de la Sociedad de la Información (LSSI-CE).
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex gap-6 flex-wrap">
          <Link href="/politica-de-cookies" className="text-primary hover:underline">
            Política de Cookies
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
