import type { Metadata } from "next"
import Link from "next/link"
import { Calculator, PiggyBank, CreditCard, TrendingUp, ArrowLeftRight, ChevronRight, Users, Star, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: `Calculadoras Financieras Gratuitas ${new Date().getFullYear()} — Interés Compuesto, Ahorro y Deuda`,
  description:
    "4 calculadoras financieras interactivas y gratuitas: interés compuesto, meta de ahorro, pago de deuda y divisas. Sin registro. Resultados en tiempo real para tomar mejores decisiones con tu dinero.",
  keywords: [
    "calculadoras financieras gratis",
    "calculadora interés compuesto",
    "calculadora ahorro",
    "calculadora deuda",
    "herramientas financieras online",
    "simulador financiero España",
    "convertidor divisas",
  ],
  alternates: {
    canonical: "https://www.finanzasdigitales.es/calculadoras",
  },
  openGraph: {
    title: "Calculadoras Financieras Gratuitas — Finanzas Digitales",
    description: "4 herramientas interactivas para simular inversiones, planificar ahorro, liquidar deudas y convertir divisas. Sin registro.",
    url: "https://www.finanzasdigitales.es/calculadoras",
    type: "website",
  },
}

const calculators = [
  {
    title: "Calculadora de Interés Compuesto",
    description: "Visualiza cómo crece tu inversión a lo largo del tiempo. Simula aportes mensuales, distintas tasas de retorno y plazos de hasta 40 años. La herramienta esencial para planificar tu jubilación.",
    href: "/calculadoras/interes-compuesto",
    icon: TrendingUp,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20 hover:border-blue-400/50",
    badge: "Más usada",
    badgeColor: "bg-blue-500/10 text-blue-400",
    tag: "Inversiones",
    features: ["Hasta 40 años", "Aportes mensuales", "Gráfico visual"],
  },
  {
    title: "Calculadora de Meta de Ahorro",
    description: "¿Cuánto necesitas ahorrar al mes para alcanzar tu objetivo? Introduce tu meta, el ahorro inicial y el plazo para obtener un plan de ahorro personalizado con tabla mes a mes.",
    href: "/calculadoras/meta-ahorro",
    icon: PiggyBank,
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20 hover:border-green-400/50",
    badge: "Planificación",
    badgeColor: "bg-green-500/10 text-green-400",
    tag: "Ahorro",
    features: ["Plan mes a mes", "Fondo emergencia", "Múltiples metas"],
  },
  {
    title: "Calculadora de Pago de Deuda",
    description: "Descubre exactamente cuándo estarás libre de deudas y cuánto ahorras pagando más del mínimo mensual. Tabla de amortización completa para préstamos y tarjetas de crédito.",
    href: "/calculadoras/pago-deuda",
    icon: CreditCard,
    color: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/20 hover:border-red-400/50",
    badge: "Libertad financiera",
    badgeColor: "bg-red-500/10 text-red-400",
    tag: "Deuda",
    features: ["Fecha de liquidación", "Ahorro en intereses", "Amortización"],
  },
  {
    title: "Convertidor de Divisas",
    description: "Convierte entre euro, dólar, libra, yen y más de 20 monedas con tipos de cambio actualizados en tiempo real. Imprescindible para viajes, negocios internacionales e inversiones en el extranjero.",
    href: "/calculadoras/divisas",
    icon: ArrowLeftRight,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20 hover:border-yellow-400/50",
    badge: "Tiempo real",
    badgeColor: "bg-yellow-500/10 text-yellow-400",
    tag: "Divisas",
    features: ["+20 monedas", "Tipo de cambio real", "Bidireccional"],
  },
]

const BASE = "https://www.finanzasdigitales.es"
const ORG_REF = { "@id": `${BASE}/#organization` }

const calculatorApps = [
  {
    id: "calc-interes-compuesto",
    name: "Calculadora de Interés Compuesto",
    description: "Calcula el crecimiento de tu inversión con el poder del interés compuesto. Introduce capital inicial, aportaciones, tipo de interés y plazo.",
    url: `${BASE}/calculadoras/interes-compuesto`,
  },
  {
    id: "calc-meta-ahorro",
    name: "Calculadora de Meta de Ahorro",
    description: "Descubre cuánto necesitas ahorrar cada mes para alcanzar tu objetivo financiero en el plazo que elijas.",
    url: `${BASE}/calculadoras/meta-ahorro`,
  },
  {
    id: "calc-pago-deuda",
    name: "Calculadora de Pago de Deuda",
    description: "Planifica la amortización de tus deudas y descubre cuánto tiempo tardarás en quedar libre de deudas.",
    url: `${BASE}/calculadoras/pago-deuda`,
  },
  {
    id: "calc-divisas",
    name: "Convertidor de Divisas",
    description: "Convierte entre las principales divisas del mundo en tiempo real.",
    url: `${BASE}/calculadoras/divisas`,
  },
]

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${BASE}/calculadoras#webpage`,
  name: "Calculadoras Financieras Gratuitas",
  description: "4 calculadoras financieras interactivas: interés compuesto, meta de ahorro, pago de deuda y divisas.",
  url: `${BASE}/calculadoras`,
  inLanguage: "es",
  isAccessibleForFree: true,
  publisher: ORG_REF,
  hasPart: calculatorApps.map((calc) => ({
    "@type": "SoftwareApplication",
    "@id": `${BASE}/calculadoras#${calc.id}`,
    name: calc.name,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    description: calc.description,
    url: calc.url,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    inLanguage: "es",
    provider: ORG_REF,
  })),
}

export default function CalculadorasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/40 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumbs
            customItems={[
              { label: "Inicio", href: "/" },
              { label: "Calculadoras", href: "/calculadoras", isActive: true },
            ]}
          />
          <div className="mt-8 mx-auto max-w-3xl text-center">
            <div className="flex justify-center gap-2 mb-6">
              <Badge variant="secondary" className="text-xs px-3 py-1">✓ 100% Gratis</Badge>
              <Badge variant="secondary" className="text-xs px-3 py-1">✓ Sin registro</Badge>
              <Badge variant="secondary" className="text-xs px-3 py-1">✓ Tiempo real</Badge>
            </div>
            <div className="flex justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20">
                <Calculator className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance leading-tight">
              Calculadoras Financieras{" "}
              <span className="text-primary">Gratuitas</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              4 herramientas interactivas para tomar mejores decisiones con tu dinero.
              Sin registros, sin trucos, sin coste. Solo resultados.
            </p>

            {/* Stats bar */}
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              {[
                { icon: Zap, text: "Resultados en tiempo real" },
                { icon: Star, text: "4 herramientas especializadas" },
                { icon: Users, text: "Para inversores y ahorradores" },
              ].map((s) => (
                <div key={s.text} className="flex items-center gap-2">
                  <s.icon className="h-4 w-4 text-primary" />
                  <span>{s.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CALCULADORAS GRID */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {calculators.map((calc) => (
              <Link
                key={calc.href}
                href={calc.href}
                className={`group relative flex flex-col rounded-2xl border bg-card p-6 transition-all duration-200 hover:shadow-lg ${calc.border}`}
              >
                {/* Tag + Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {calc.tag}
                  </span>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${calc.badgeColor}`}>
                    {calc.badge}
                  </span>
                </div>

                {/* Icon + Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${calc.bg}`}>
                    <calc.icon className={`h-6 w-6 ${calc.color}`} />
                  </div>
                  <h2 className="text-xl font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                    {calc.title}
                  </h2>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                  {calc.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {calc.features.map((f) => (
                    <span key={f} className="text-xs bg-muted text-muted-foreground px-2.5 py-1 rounded-full">
                      {f}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className={`flex items-center gap-2 text-sm font-semibold ${calc.color}`}>
                  Abrir calculadora
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl mb-4">
            ¿Por qué usar calculadoras financieras?
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
            Las decisiones financieras basadas en datos siempre superan a las basadas en intuición.
            Ver los números reales transforma la forma en que gestionas tu dinero.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "Elimina suposiciones", desc: "Saber exactamente cuánto necesitas ahorrar es muy diferente a 'intentar ahorrar más'." },
              { title: "Motiva la acción", desc: "Ver que en 15 años tendrás 200.000€ invirtiendo 300€/mes hace que empieces hoy." },
              { title: "Compara escenarios", desc: "¿Qué pasa si ahorro 100€ más al mes? ¿Y si invierto 5 años antes? Las respuestas están aquí." },
            ].map((b) => (
              <div key={b.title} className="rounded-xl border border-border bg-card p-5 text-left">
                <h3 className="font-semibold text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
