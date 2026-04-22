import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Landmark, Shield, TrendingUp } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { FAQSection, type FAQItem } from "@/components/faq-section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Mejores planes de pensiones en España 2026 | Comparativa, fiscalidad y alternativas",
  description:
    "Guía práctica para comparar planes de pensiones en España en 2026: comisiones, perfil de riesgo, ventaja fiscal y cuándo puede compensar frente a un fondo indexado.",
  alternates: {
    canonical: "https://www.finanzasdigitales.es/mejores-planes-de-pensiones-espana-2026",
  },
  openGraph: {
    title: "Mejores planes de pensiones en España 2026",
    description:
      "Qué mirar antes de contratar un plan de pensiones en España: comisiones, fiscalidad, liquidez y comparativa frente a fondos indexados.",
    url: "https://www.finanzasdigitales.es/mejores-planes-de-pensiones-espana-2026",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mejores planes de pensiones en España 2026",
    description:
      "Comparativa honesta de planes de pensiones en España con foco en comisiones, fiscalidad y alternativas de largo plazo.",
  },
}

const faqs: FAQItem[] = [
  {
    question: "¿Cuánto puedo aportar a un plan de pensiones en 2026?",
    answer:
      "Como referencia general, el límite individual en planes de pensiones sigue siendo reducido frente a otros vehículos de inversión. Antes de aportar, conviene revisar el límite fiscal vigente en la AEAT y si tu empresa ofrece un plan de empleo con condiciones mejores.",
  },
  {
    question: "¿Tributan los planes de pensiones al rescatarlos?",
    answer:
      "Sí. El rescate tributa como rendimiento del trabajo en el IRPF. Por eso no basta con mirar la ventaja fiscal al aportar: también hay que pensar en cómo y cuándo se va a rescatar el plan.",
  },
  {
    question: "¿Cuándo suele tener sentido un plan de pensiones?",
    answer:
      "Suele encajar mejor en perfiles con tipo marginal alto en el IRPF, horizonte largo y disciplina para mantener el dinero bloqueado. Si valoras más la liquidez o la simplicidad fiscal futura, un fondo indexado puede ser más flexible.",
  },
  {
    question: "¿Es mejor un plan de pensiones o un fondo indexado?",
    answer:
      "Depende de tu situación fiscal y de liquidez. El plan de pensiones puede dar ahorro fiscal inmediato; el fondo indexado suele ofrecer más liquidez, comisiones competitivas y una fiscalidad final más fácil de gestionar.",
  },
  {
    question: "¿Qué comisiones son razonables en un plan de pensiones?",
    answer:
      "En general, cuanto más bajas mejor. En productos de largo plazo, una diferencia pequeña en comisiones puede reducir de forma importante la rentabilidad final acumulada durante décadas.",
  },
]

const planCards = [
  {
    title: "Planes indexados de bajo coste",
    subtitle: "Para quien prioriza costes y gestión sencilla",
    bullets: [
      "Suelen ser la opción más interesante dentro de los planes de pensiones.",
      "Importa más la comisión total que el nombre de la entidad.",
      "Encajan mejor cuanto mayor sea tu horizonte temporal.",
    ],
  },
  {
    title: "Planes de banca tradicional",
    subtitle: "Convenientes solo si las condiciones son competitivas",
    bullets: [
      "La facilidad de contratación no compensa comisiones elevadas.",
      "Conviene revisar política de inversión y rentabilidad histórica con cautela.",
      "No todo plan conservador es bueno solo por parecer seguro.",
    ],
  },
  {
    title: "Plan de empleo",
    subtitle: "Muy relevante si tu empresa aporta",
    bullets: [
      "Si hay aportación empresarial, merece una revisión prioritaria.",
      "Puede ser una oportunidad mejor que contratar un producto individual.",
      "Hay que mirar vesting, costes y política de inversión.",
    ],
  },
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.finanzasdigitales.es" },
    { "@type": "ListItem", position: 2, name: "Inversiones", item: "https://www.finanzasdigitales.es/inversiones" },
    { "@type": "ListItem", position: 3, name: "Mejores planes de pensiones 2026", item: "https://www.finanzasdigitales.es/mejores-planes-de-pensiones-espana-2026" },
  ],
}

export default function MejoresPlanesPensionesPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        suppressHydrationWarning
      />
      <div className="min-h-screen bg-background">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <Breadcrumbs
            customItems={[
              { label: "Inicio", href: "/" },
              { label: "Inversiones", href: "/inversiones" },
              {
                label: "Mejores planes de pensiones 2026",
                href: "/mejores-planes-de-pensiones-espana-2026",
                isActive: true,
              },
            ]}
          />

          <header className="mt-6 mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">Jubilación</Badge>
              <Badge variant="outline">España</Badge>
              <Badge variant="outline">Comparativa 2026</Badge>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Mejores planes de pensiones en España en 2026
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Esta guía está pensada para comparar con criterio: costes, fiscalidad, liquidez y cuándo un plan de
              pensiones puede encajar mejor que otras alternativas de largo plazo.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Contenido educativo y orientativo. Antes de contratar, revisa las condiciones oficiales de la entidad y
              la normativa fiscal vigente.
            </p>
          </header>

          <Card className="mb-10 border-emerald-500/30 bg-emerald-500/5">
            <CardContent className="pt-6">
              <h2 className="text-lg font-semibold mb-3">Respuesta rápida</h2>
              <p className="text-sm text-muted-foreground leading-7">
                Un plan de pensiones no es mejor por sistema. Suele tener más sentido cuando la ventaja fiscal actual
                compensa la falta de liquidez y cuando eliges un producto con comisiones razonables. Si tu prioridad es
                flexibilidad, un fondo indexado puede ser más fácil de mantener y entender.
              </p>
            </CardContent>
          </Card>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Qué mirar antes de contratar un plan de pensiones</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Comisión total",
                  body: "En productos a muy largo plazo, unas décimas de diferencia importan mucho. Compara siempre costes totales y no solo el mensaje comercial.",
                },
                {
                  title: "Política de inversión",
                  body: "No es lo mismo un plan indexado global que uno conservador muy cargado de renta fija. Mira en qué invierte realmente.",
                },
                {
                  title: "Fiscalidad real",
                  body: "La ventaja al aportar puede ser interesante, pero el rescate tributa como rendimiento del trabajo. Hay que mirar el ciclo completo.",
                },
                {
                  title: "Liquidez",
                  body: "El dinero no está disponible como en un fondo de inversión. Si quieres más margen de maniobra, este punto pesa mucho.",
                },
              ].map((item) => (
                <Card key={item.title}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground leading-7">{item.body}</CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Comparativa de planes de pensiones en España 2026</h2>
            <p className="text-sm text-muted-foreground mb-5 leading-7">
              Datos orientativos basados en información pública de las gestoras. Comprueba siempre las condiciones vigentes en la entidad antes de contratar.
            </p>
            <div className="overflow-x-auto rounded-xl border">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="p-3 text-left border font-semibold">Plan</th>
                    <th className="p-3 text-left border font-semibold">Gestora</th>
                    <th className="p-3 text-center border font-semibold">Com. gestión</th>
                    <th className="p-3 text-center border font-semibold">Com. depósito</th>
                    <th className="p-3 text-center border font-semibold">Rent. hist. 3 años</th>
                    <th className="p-3 text-left border font-semibold">Ideal para</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { plan: "Plan Pensión Bolsa Mundial", gestora: "MyInvestor", gestion: "0,30%", deposito: "0%", rent: "~12,5%", ideal: "Bajo coste / principiantes" },
                    { plan: "Más Rentabilidad Bolsa", gestora: "Indexa Capital", gestion: "0,41%", deposito: "0%", rent: "~11,8%", ideal: "Gestión automatizada" },
                    { plan: "Naranja Estándar 100", gestora: "ING", gestion: "1,25%", deposito: "0,20%", rent: "~9,2%", ideal: "Clientes ING con descuento" },
                    { plan: "Ambición 100", gestora: "CaixaBank", gestion: "1,50%", deposito: "0,20%", rent: "~8,7%", ideal: "Clientes CaixaBank" },
                    { plan: "Plan Mixto", gestora: "BBVA", gestion: "1,30%", deposito: "0,20%", rent: "~7,3%", ideal: "Perfil moderado conservador" },
                  ].map((row, i) => (
                    <tr key={row.plan} className={i % 2 === 0 ? "" : "bg-muted/30"}>
                      <td className="p-3 border font-medium">{row.plan}</td>
                      <td className="p-3 border">{row.gestora}</td>
                      <td className="p-3 border text-center">{row.gestion}</td>
                      <td className="p-3 border text-center">{row.deposito}</td>
                      <td className="p-3 border text-center font-medium text-emerald-600 dark:text-emerald-400">{row.rent}</td>
                      <td className="p-3 border text-muted-foreground">{row.ideal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-3">Rentabilidad histórica a 3 años no garantiza resultados futuros. La comisión máxima legal de gestión es el 1,50% y de depósito el 0,20%.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Fiscalidad de los planes de pensiones en el IRPF 2026</h2>
            <Card className="border-blue-500/30 bg-blue-500/5 mb-5">
              <CardContent className="pt-5">
                <p className="text-sm leading-7 text-foreground font-medium mb-3">Límite de aportación deducible en 2026:</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong className="text-foreground">Plan individual:</strong> el menor entre 1.500€/año o el 30% de los rendimientos netos del trabajo y actividades económicas</li>
                  <li>• <strong className="text-foreground">Plan de empleo:</strong> hasta 8.500€ adicionales si la empresa aporta (total máximo 10.000€/año)</li>
                  <li>• <strong className="text-foreground">Cónyuge:</strong> hasta 1.000€ adicionales si sus ingresos son inferiores a 8.000€/año</li>
                </ul>
              </CardContent>
            </Card>
            <div className="overflow-x-auto rounded-xl border">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="p-3 text-left border font-semibold">Tramo IRPF</th>
                    <th className="p-3 text-center border font-semibold">Tipo marginal</th>
                    <th className="p-3 text-left border font-semibold">Ahorro fiscal por 1.500€ aportados</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { tramo: "Hasta 12.450€", tipo: "19%", ahorro: "285€" },
                    { tramo: "12.450€ – 20.200€", tipo: "24%", ahorro: "360€" },
                    { tramo: "20.200€ – 35.200€", tipo: "30%", ahorro: "450€" },
                    { tramo: "35.200€ – 60.000€", tipo: "37%", ahorro: "555€" },
                    { tramo: "Más de 60.000€", tipo: "45%", ahorro: "675€" },
                  ].map((row, i) => (
                    <tr key={row.tramo} className={i % 2 === 0 ? "" : "bg-muted/30"}>
                      <td className="p-3 border">{row.tramo}</td>
                      <td className="p-3 border text-center font-medium">{row.tipo}</td>
                      <td className="p-3 border text-emerald-600 dark:text-emerald-400 font-medium">{row.ahorro}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              <strong>Importante:</strong> El ahorro fiscal al aportar es un diferimiento, no una exención. Al rescatar el plan, el importe tributa íntegramente como rendimiento del trabajo. Planifica el rescate en años con menor renta para minimizar el impacto fiscal.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Tipos de opciones que más conviene revisar</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {planCards.map((card) => (
                <Card key={card.title} className="h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">{card.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{card.subtitle}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {card.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Plan de pensiones vs fondo indexado</h2>
            <div className="overflow-x-auto rounded-xl border">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="p-3 text-left border">Criterio</th>
                    <th className="p-3 text-left border">Plan de pensiones</th>
                    <th className="p-3 text-left border">Fondo indexado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border font-medium">Ventaja fiscal inicial</td>
                    <td className="p-3 border">Puede ser relevante</td>
                    <td className="p-3 border">No inmediata</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="p-3 border font-medium">Liquidez</td>
                    <td className="p-3 border">Limitada</td>
                    <td className="p-3 border">Alta</td>
                  </tr>
                  <tr>
                    <td className="p-3 border font-medium">Sencillez de seguimiento</td>
                    <td className="p-3 border">Media</td>
                    <td className="p-3 border">Alta</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="p-3 border font-medium">Uso típico</td>
                    <td className="p-3 border">Jubilación y optimización fiscal</td>
                    <td className="p-3 border">Ahorro e inversión a largo plazo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Errores frecuentes</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Contratar el producto del banco sin comparar costes ni política de inversión.",
                "Pensar solo en la deducción fiscal y olvidar cómo tributará el rescate.",
                "Elegir un plan demasiado conservador para un horizonte muy largo.",
                "Suponer que un plan de pensiones sustituye a toda tu estrategia de inversión.",
              ].map((item) => (
                <Card key={item}>
                  <CardContent className="pt-5 text-sm text-muted-foreground leading-7">{item}</CardContent>
                </Card>
              ))}
            </div>
          </section>

          <FAQSection title="Preguntas frecuentes sobre planes de pensiones" faqs={faqs} inArticle />

          <section className="mt-10 pt-8 border-t">
            <h2 className="text-xl font-bold mb-4">Siguiente paso</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Link href="/fondos-indexados" className="block rounded-xl border p-4 hover:border-primary/40 hover:bg-primary/5 transition-colors">
                <TrendingUp className="h-5 w-5 text-primary mb-2" />
                <p className="font-semibold text-foreground">Fondos indexados en España</p>
                <p className="mt-2 text-sm text-muted-foreground">La alternativa más flexible para largo plazo.</p>
              </Link>
              <Link href="/inversiones" className="block rounded-xl border p-4 hover:border-primary/40 hover:bg-primary/5 transition-colors">
                <Landmark className="h-5 w-5 text-primary mb-2" />
                <p className="font-semibold text-foreground">Centro de inversiones</p>
                <p className="mt-2 text-sm text-muted-foreground">Guías para construir una estrategia de inversión.</p>
              </Link>
              <Link href="/blog/plan-de-pensiones-espana-merece-la-pena" className="block rounded-xl border p-4 hover:border-primary/40 hover:bg-primary/5 transition-colors">
                <Shield className="h-5 w-5 text-primary mb-2" />
                <p className="font-semibold text-foreground">¿Merece la pena un plan?</p>
                <p className="mt-2 text-sm text-muted-foreground">Análisis más detallado con enfoque práctico.</p>
              </Link>
            </div>
          </section>

          <div className="mt-10 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 to-transparent p-6">
            <h3 className="text-xl font-bold text-foreground">Antes de decidir, compara el largo plazo</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-7">
              Usa la calculadora de interés compuesto para visualizar cuánto puede pesar una diferencia de costes y de
              rendimiento durante 20 o 30 años.
            </p>
            <Button asChild className="mt-5">
              <Link href="/calculadoras/interes-compuesto" className="inline-flex items-center gap-2">
                Ir a la calculadora
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
