import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Términos y Condiciones | FinanzasPro",
  description: "Términos y condiciones de uso de FinanzasPro. Información sobre el uso del sitio y sus contenidos.",
  robots: "index, follow",
  alternates: {
    canonical: "https://app-finanzas-mu.vercel.app/terminos",
  },
}

export default function TerminosPage() {
  return (
    <article className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
            Términos y Condiciones
          </h1>
          <p className="text-lg text-muted-foreground">
            Última actualización: 17 de febrero de 2026
          </p>
        </div>

        <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-li:text-foreground prose-a:text-primary hover:prose-a:underline">
          <h2>1. Aceptación de los términos</h2>
          <p>
            Al acceder y utilizar FinanzasPro (en adelante &quot;el sitio&quot;), aceptas quedar vinculado por estos
            Términos y Condiciones. Si no estás de acuerdo con alguno de ellos, te pedimos que no uses el sitio.
          </p>

          <h2>2. Uso del sitio</h2>
          <p>
            FinanzasPro es una plataforma educativa de finanzas personales. Puedes usar el sitio para:
          </p>
          <ul>
            <li>Leer artículos y guías de educación financiera</li>
            <li>Utilizar las herramientas y calculadoras disponibles</li>
            <li>Explorar recursos y recomendaciones sobre finanzas personales</li>
          </ul>
          <p>Queda prohibido:</p>
          <ul>
            <li>Usar el sitio para fines ilegales o no autorizados</li>
            <li>Reproducir o distribuir el contenido sin autorización previa</li>
            <li>Intentar acceder a sistemas o datos no autorizados</li>
            <li>Realizar actividades que puedan dañar, sobrecargar o deteriorar el sitio</li>
          </ul>

          <h2>3. Descargo de responsabilidad financiera</h2>
          <p>
            El contenido de FinanzasPro tiene <strong>carácter exclusivamente educativo e informativo</strong>.
            La información publicada no constituye asesoramiento financiero, de inversión, fiscal o legal.
          </p>
          <p>
            Antes de tomar cualquier decisión financiera, te recomendamos consultar con un asesor financiero
            profesional debidamente registrado y certificado. FinanzasPro no se hace responsable de las
            decisiones financieras tomadas por los usuarios en base a la información publicada en el sitio.
          </p>
          <p>
            Las inversiones conllevan riesgos, incluyendo la posible pérdida del capital invertido. Los
            rendimientos históricos no garantizan rendimientos futuros.
          </p>

          <h2>4. Propiedad intelectual</h2>
          <p>
            Todo el contenido publicado en FinanzasPro, incluyendo textos, imágenes, gráficos, logotipos y
            herramientas, es propiedad de FinanzasPro o sus respectivos titulares, y está protegido por las
            leyes de propiedad intelectual aplicables.
          </p>
          <p>
            Queda permitida la cita o referencia de fragmentos del contenido siempre que se cite la fuente
            y se enlace al artículo original. No está permitida la reproducción íntegra sin autorización expresa.
          </p>

          <h2>5. Contenido de terceros y enlaces externos</h2>
          <p>
            El sitio puede contener enlaces a sitios web de terceros. FinanzasPro no controla ni es responsable
            del contenido, políticas de privacidad o prácticas de dichos sitios. Los enlaces se proporcionan
            únicamente para conveniencia del usuario.
          </p>
          <p>
            Las menciones de productos, servicios, brokers o plataformas financieras son con fines informativos.
            Algunos enlaces pueden ser de afiliados, lo que significa que podemos recibir una comisión si
            realizas una compra o registro a través de ellos, sin coste adicional para ti.
          </p>

          <h2>6. Publicidad</h2>
          <p>
            FinanzasPro utiliza Google AdSense para mostrar anuncios publicitarios. Estos anuncios son
            gestionados por Google y pueden ser relevantes a tus intereses según tu historial de navegación.
            Para más información, consulta la{" "}
            <Link href="/privacidad" className="text-primary hover:underline">
              Política de Privacidad
            </Link>
            .
          </p>

          <h2>7. Disponibilidad del servicio</h2>
          <p>
            FinanzasPro no garantiza que el sitio esté disponible de forma ininterrumpida o libre de errores.
            Nos reservamos el derecho de suspender, modificar o discontinuar el sitio o cualquiera de sus
            funciones en cualquier momento, con o sin previo aviso.
          </p>

          <h2>8. Limitación de responsabilidad</h2>
          <p>
            En la máxima medida permitida por la ley aplicable, FinanzasPro no será responsable de ningún
            daño directo, indirecto, incidental, especial o consecuente que resulte del uso o la imposibilidad
            de uso del sitio o su contenido.
          </p>

          <h2>9. Modificaciones de los términos</h2>
          <p>
            Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Los
            cambios entrarán en vigor desde su publicación en el sitio. El uso continuado del sitio tras la
            publicación de cambios implica la aceptación de los nuevos términos.
          </p>

          <h2>10. Legislación aplicable</h2>
          <p>
            Estos Términos y Condiciones se rigen por la legislación española vigente. Para cualquier
            controversia derivada del uso del sitio, las partes se someten a los juzgados y tribunales
            competentes según la normativa aplicable.
          </p>

          <h2>11. Contacto</h2>
          <p>
            Si tienes preguntas sobre estos Términos y Condiciones, puedes contactarnos:
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
            Estos Términos y Condiciones son conformes con la legislación española y el Reglamento General
            de Protección de Datos (RGPD) de la Unión Europea.
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
