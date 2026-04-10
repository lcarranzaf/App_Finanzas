import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Aviso Legal | Finanzas Digitales",
  description:
    "Aviso legal de Finanzas Digitales. Información sobre el titular del sitio, condiciones de uso y legislación aplicable conforme a la LSSI-CE.",
  alternates: {
    canonical: "https://www.finanzasdigitales.es/aviso-legal",
  },
}

export default function AvisoLegalPage() {
  return (
    <article className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
            Aviso Legal
          </h1>
          <p className="text-lg text-muted-foreground">
            Última actualización: 9 de abril de 2026
          </p>
        </div>

        <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-li:text-foreground prose-a:text-primary hover:prose-a:underline">

          <h2>1. Datos identificativos del titular</h2>
          <p>
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de
            la Información y de Comercio Electrónico (LSSI-CE), se pone a disposición del usuario la siguiente
            información:
          </p>
          <ul>
            <li><strong>Nombre del sitio web:</strong> Finanzas Digitales</li>
            <li><strong>Dominio:</strong> www.finanzasdigitales.es</li>
            <li><strong>Correo electrónico:</strong>{" "}
              <a href="mailto:contacto@finanzasdigitales.es">contacto@finanzasdigitales.es</a>
            </li>
            <li><strong>País:</strong> España</li>
          </ul>

          <h2>2. Objeto y ámbito de aplicación</h2>
          <p>
            El presente Aviso Legal regula el acceso y uso del sitio web <strong>www.finanzasdigitales.es</strong>{" "}
            (en adelante, &quot;el sitio&quot;), titularidad de Finanzas Digitales. El acceso al sitio implica la
            aceptación plena y sin reservas de las condiciones establecidas en este Aviso Legal.
          </p>

          <h2>3. Actividad del sitio</h2>
          <p>
            Finanzas Digitales es un sitio web de <strong>educación financiera</strong> que ofrece:
          </p>
          <ul>
            <li>Artículos, guías y análisis sobre finanzas personales, ahorro, inversión y planificación financiera.</li>
            <li>Herramientas y calculadoras de uso gratuito (interés compuesto, ahorro, deuda, divisas).</li>
            <li>Comparativas informativas de productos financieros disponibles en España.</li>
            <li>Boletín informativo gratuito sobre finanzas personales.</li>
          </ul>

          <h2>4. Carácter informativo y no asesoramiento financiero</h2>
          <p>
            El contenido publicado en Finanzas Digitales tiene <strong>exclusivamente carácter educativo e
            informativo</strong> y no constituye asesoramiento financiero, fiscal, jurídico ni de inversión.
            Finanzas Digitales no está registrado como empresa de servicios de inversión ni asesor financiero
            independiente ante la Comisión Nacional del Mercado de Valores (CNMV).
          </p>
          <p>
            Las opiniones, análisis y comparativas publicadas reflejan la investigación editorial del equipo y
            no deben interpretarse como recomendaciones personalizadas. Antes de tomar cualquier decisión
            financiera, te recomendamos consultar con un profesional cualificado y regulado.
          </p>
          <p>
            Las rentabilidades pasadas no garantizan rentabilidades futuras. Toda inversión conlleva riesgos,
            incluida la posible pérdida del capital invertido.
          </p>

          <h2>5. Propiedad intelectual e industrial</h2>
          <p>
            Todos los contenidos del sitio —textos, imágenes, gráficos, logotipos, marcas, código fuente y
            cualquier otro elemento— son titularidad de Finanzas Digitales o de terceros que han autorizado
            su uso, y están protegidos por la legislación española e internacional sobre propiedad intelectual
            e industrial.
          </p>
          <p>
            Queda expresamente prohibida la reproducción total o parcial, distribución, comunicación pública
            o transformación de los contenidos sin autorización escrita previa del titular, salvo para uso
            personal y privado. Las citas con fines informativos están permitidas siempre que se indique la
            fuente y se incluya un enlace al artículo original.
          </p>

          <h2>6. Responsabilidad por el uso del sitio</h2>
          <p>
            Finanzas Digitales no se responsabiliza de:
          </p>
          <ul>
            <li>Las decisiones financieras tomadas por los usuarios basándose en el contenido del sitio.</li>
            <li>Los daños derivados de un uso incorrecto o inadecuado del sitio.</li>
            <li>La exactitud, actualidad o exhaustividad de los contenidos de terceros enlazados desde el sitio.</li>
            <li>Las interrupciones del servicio motivadas por causas técnicas o de fuerza mayor.</li>
          </ul>

          <h2>7. Política de enlaces (links)</h2>
          <p>
            El sitio puede contener enlaces a páginas web de terceros. Finanzas Digitales no controla ni se
            responsabiliza del contenido, veracidad o legalidad de dichos sitios. La presencia de un enlace
            no implica recomendación ni respaldo del sitio enlazado.
          </p>
          <p>
            Algunos enlaces a productos o servicios financieros pueden ser <strong>enlaces de afiliado</strong>,
            lo que significa que Finanzas Digitales puede recibir una comisión si contratas el producto a
            través de dicho enlace, sin coste adicional para ti. Esta circunstancia no influye en la
            evaluación editorial de los productos.
          </p>

          <h2>8. Publicidad</h2>
          <p>
            Este sitio web muestra publicidad a través de <strong>Google AdSense</strong>. Los anuncios son
            gestionados por Google LLC y sus socios publicitarios. Finanzas Digitales no es responsable del
            contenido de dichos anuncios. Para más información sobre el uso de cookies con fines publicitarios,
            consulta nuestra <Link href="/politica-de-cookies">Política de Cookies</Link>.
          </p>

          <h2>9. Modificaciones del aviso legal</h2>
          <p>
            Finanzas Digitales se reserva el derecho de modificar el presente Aviso Legal en cualquier momento.
            Los cambios entrarán en vigor desde el momento de su publicación en el sitio. Te recomendamos
            revisarlo periódicamente.
          </p>

          <h2>10. Legislación aplicable y jurisdicción</h2>
          <p>
            El presente Aviso Legal se rige por la legislación española. Para cualquier controversia derivada
            del acceso o uso del sitio, las partes se someten, con renuncia expresa a cualquier otro fuero,
            a los Juzgados y Tribunales del domicilio del titular del sitio, salvo que la normativa aplicable
            establezca otro fuero imperativo.
          </p>
          <p>Normativa de referencia aplicable:</p>
          <ul>
            <li>Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE).</li>
            <li>Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo (RGPD).</li>
            <li>Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y Garantía de los Derechos Digitales (LOPDGDD).</li>
            <li>Real Decreto Legislativo 1/1996, de 12 de abril, por el que se aprueba el Texto Refundido de la Ley de Propiedad Intelectual.</li>
          </ul>

          <h2>11. Contacto</h2>
          <p>
            Para cualquier consulta relacionada con este Aviso Legal:{" "}
            <a href="mailto:contacto@finanzasdigitales.es">contacto@finanzasdigitales.es</a>
          </p>

          <hr className="my-8" />
          <p className="text-sm text-muted-foreground">
            Aviso Legal elaborado conforme a la Ley 34/2002 (LSSI-CE), el RGPD y la LOPDGDD.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex gap-6 flex-wrap">
          <Link href="/privacidad" className="text-primary hover:underline">
            Política de Privacidad
          </Link>
          <Link href="/politica-de-cookies" className="text-primary hover:underline">
            Política de Cookies
          </Link>
          <Link href="/terminos" className="text-primary hover:underline">
            Términos y Condiciones
          </Link>
          <Link href="/" className="text-primary hover:underline">
            ← Volver a inicio
          </Link>
        </div>
      </div>
    </article>
  )
}
