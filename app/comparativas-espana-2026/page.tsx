import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Landmark, LineChart, PiggyBank, ShieldCheck } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Comparativas Financieras en Espana 2026 | Cuentas, Brokers y Pensiones",
  description:
    "Compara las mejores opciones financieras en Espana en 2026: cuentas remuneradas, fondos monetarios, brokers y planes de pensiones. Guias practicas para decidir mejor.",
  alternates: {
    canonical: "https://www.finanzasdigitales.es/comparativas-espana-2026",
  },
  openGraph: {
    title: "Comparativas Financieras en Espana 2026 | Finanzas Digitales",
    description:
      "Guias comparativas sobre cuentas remuneradas, fondos monetarios, brokers y planes de pensiones orientadas al mercado espanol.",
    url: "https://www.finanzasdigitales.es/comparativas-espana-2026",
    type: "website",
  },
}

const featuredComparisons = [
  {
    href: "/cuentas-remuneradas-espana-2026",
    icon: PiggyBank,
    badge: "Ahorro",
    title: "Mejores cuentas remuneradas en Espana 2026",
    description:
      "Para quien quiere rentabilidad sobre su liquidez sin perder acceso al dinero ni complicarse con productos complejos.",
    cta: "Ver comparativa",
  },
  {
    href: "/mejores-fondos-monetarios-espana-2026",
    icon: ShieldCheck,
    badge: "Liquidez",
    title: "Mejores fondos monetarios en Espana 2026",
    description:
      "La alternativa mas util para aparcar dinero a corto plazo con mejor eficiencia fiscal que una cuenta tradicional.",
    cta: "Explorar fondos",
  },
  {
    href: "/mejores-brokers-espana-2026",
    icon: LineChart,
    badge: "Inversion",
    title: "Mejores brokers en Espana 2026",
    description:
      "Comparativa orientada a ETFs, fondos indexados y acciones para elegir plataforma segun tu nivel y objetivos.",
    cta: "Comparar brokers",
  },
  {
    href: "/mejores-planes-de-pensiones-espana-2026",
    icon: Landmark,
    badge: "Jubilacion",
    title: "Mejores planes de pensiones en Espana 2026",
    description:
      "Una guia para entender si compensa un plan de pensiones, que mirar y cuando puede ser mejor un fondo indexado.",
    cta: "Ver guia",
  },
]

export default function ComparativasEspanaPage() {
  const comparisonHubSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://www.finanzasdigitales.es/comparativas-espana-2026",
    name: "Comparativas Financieras en Espana 2026",
    description:
      "Coleccion de comparativas financieras orientadas a Espana: brokers, cuentas remuneradas, fondos monetarios y planes de pensiones.",
    url: "https://www.finanzasdigitales.es/comparativas-espana-2026",
    inLanguage: "es",
    mainEntity: featuredComparisons.map((guide) => ({
      "@type": "Article",
      headline: guide.title,
      url: `https://www.finanzasdigitales.es${guide.href}`,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonHubSchema) }}
        suppressHydrationWarning
      />
      <div className="min-h-screen bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-6">
          <Breadcrumbs
            customItems={[
              { label: "Inicio", href: "/" },
              { label: "Comparativas 2026", href: "/comparativas-espana-2026", isActive: true },
            ]}
          />
        </div>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <Badge variant="secondary" className="mb-4">
                Seleccion para Espana
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Comparativas financieras en Espana para 2026
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Aqui reunimos las guias que mas ayudan a decidir bien en el mercado espanol: donde guardar tu liquidez,
                que broker elegir, que hacer con el ahorro a corto plazo y cuando un plan de pensiones puede tener sentido.
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <Button asChild size="lg">
                  <Link href="/inversiones">Ver inversiones</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/ahorro">Ver ahorro</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16 sm:pb-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2">
              {featuredComparisons.map((guide) => {
                const Icon = guide.icon

                return (
                  <Link
                    key={guide.href}
                    href={guide.href}
                    className="block rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40"
                  >
                    <Card className="group h-full border-border/70 hover:border-primary/40 hover:shadow-lg transition-all">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <Badge variant="outline" className="mb-2">
                              {guide.badge}
                            </Badge>
                            <CardTitle className="text-xl group-hover:text-primary transition-colors">
                              {guide.title}
                            </CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base leading-7 text-muted-foreground">
                          {guide.description}
                        </CardDescription>
                        <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
                          {guide.cta}
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
