import NewsletterForm from "@/components/newsletter-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Newsletter - FinanzasPro",
  description: "Suscríbete a nuestro newsletter semanal y recibe consejos financieros exclusivos.",
}

export default function NewsletterPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Newsletter FinanzasPro</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Únete a más de 10,000 suscriptores que reciben consejos semanales sobre finanzas personales, inversiones y
            estrategias para construir riqueza.
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          <NewsletterForm />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-foreground">Consejos Semanales</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Estrategias prácticas que puedes implementar inmediatamente
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-foreground">Análisis de Mercado</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Tendencias e insights sobre inversiones y mercados financieros
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-foreground">Recursos Exclusivos</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Plantillas, calculadoras y guías solo para suscriptores
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
