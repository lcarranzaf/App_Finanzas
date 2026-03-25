import type { Metadata } from "next"
import dynamic from "next/dynamic"
import Link from "next/link"
import { CreditCard, Flame, Calendar, TrendingDown, TrendingUp, PiggyBank, ArrowLeftRight, ChevronRight } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Badge } from "@/components/ui/badge"

const DebtPayoffCalculator = dynamic(
  () => import("@/components/debt-payoff-calculator"),
  {
    loading: () => (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center space-y-4">
          <div className="h-10 w-10 mx-auto animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-muted-foreground">Cargando calculadora...</p>
        </div>
      </div>
    ),
    ssr: false,
  }
)

export const metadata: Metadata = {
  title: `Calculadora de Pago de Deuda ${new Date().getFullYear()} — ¿Cuándo estarás libre de deudas?`,
  description:
    "Calcula en cuántos meses liquidarás tu deuda y cuánto dinero ahorras pagando más del mínimo. Tabla de amortización mensual completa. Gratis y sin registro.",
  keywords: [
    "calculadora pago deuda",
    "cuándo termino de pagar mi deuda",
    "tabla amortización préstamo",
    "calculadora préstamo personal",
    "liquidar deuda anticipadamente",
    "cuánto ahorras pagando más",
    "simulador deuda España",
  ],
  alternates: {
    canonical: "https://www.finanzasdigitales.es/calculadoras/pago-deuda",
  },
  openGraph: {
    title: "Calculadora de Pago de Deuda — FinanzasPro",
    description: "Descubre cuándo estarás libre de deudas y cuánto puedes ahorrar pagando un poco más cada mes.",
    url: "https://www.finanzasdigitales.es/calculadoras/pago-deuda",
    type: "website",
  },
}

const steps = [
  { number: "01", title: "Introduce el saldo actual", desc: "El importe total que debes hoy, ya sea de un préstamo personal, tarjeta de crédito o cualquier deuda." },
  { number: "02", title: "Añade el tipo de interés", desc: "La TAE o TIN anual de tu deuda. Lo encontrarás en tu contrato de préstamo o extracto de tarjeta." },
  { number: "03", title: "Indica tu pago mensual", desc: "Lo que pagas actualmente cada mes. Prueba a subir el importe y ve cuánto antes te liberas de la deuda." },
]

const benefits = [
  { icon: Flame, title: "Fecha exacta de liquidación", desc: "Sabe exactamente en qué mes y año estarás libre de esa deuda. Sin estimaciones vagas." },
  { icon: TrendingDown, title: "Cuánto ahorras pagando más", desc: "Calcula el ahorro real en intereses si aumentas tu pago mensual aunque sea 50€ más." },
  { icon: Calendar, title: "Tabla de amortización completa", desc: "Mes a mes: capital pendiente, intereses pagados y amortización de capital. Máximo detalle." },
  { icon: CreditCard, title: "Funciona para cualquier deuda", desc: "Préstamo personal, tarjeta de crédito, financiación de coche, préstamo estudiantil..." },
]

const faqs = [
  {
    q: "¿Cuánto puedo ahorrar pagando más del mínimo en mi tarjeta de crédito?",
    a: "Muchísimo. Las tarjetas de crédito con pago aplazado suelen tener TAEs del 20-26%. Si tienes una deuda de 3.000€ al 24% TAE y solo pagas el mínimo (el 2% del saldo), tardarás más de 15 años en liquidarla y pagarás más de 4.000€ en intereses. Si pagas 200€ fijos al mes, la liquidas en 18 meses y pagas solo unos 600€ en intereses. La diferencia es brutal.",
  },
  {
    q: "¿Qué deuda debo pagar primero si tengo varias?",
    a: "Hay dos estrategias principales: Método Avalancha (paga primero la de mayor interés — matemáticamente óptima, ahorras más dinero) y Método Bola de Nieve (paga primero la más pequeña — psicológicamente más motivadora). Si tienes disciplina financiera, usa Avalancha. Si necesitas victorias rápidas para mantenerte motivado, usa Bola de Nieve.",
  },
  {
    q: "¿Cuál es un tipo de interés normal en un préstamo personal en España?",
    a: "En España, los préstamos personales de bancos tradicionales oscilan entre el 6% y el 12% TAE para perfiles solventes. Los préstamos rápidos online pueden llegar al 20-30% TAE o más. Las tarjetas de crédito con pago aplazado suelen estar entre el 18% y el 26% TAE. El Banco de España publica estadísticas mensuales de tipos medios aplicados.",
  },
  {
    q: "¿Es mejor pagar la deuda o invertir el dinero extra?",
    a: "Depende del tipo de interés de la deuda. Si la deuda supera el 6-7% TAE (tarjetas, préstamos rápidos), págala primero: es la inversión más segura con esa rentabilidad garantizada. Si la deuda es barata (hipoteca al 3-4%), puede tener sentido invertir en paralelo porque la rentabilidad esperada de un fondo indexado (7-9%) supera el coste de la deuda.",
  },
  {
    q: "¿Qué es la tabla de amortización?",
    a: "Es un desglose mensual que muestra cuánto de cada pago va a reducir el capital (amortización) y cuánto va a intereses. Al inicio de un préstamo, la mayor parte del pago son intereses. Con el tiempo, cada vez más va a capital. La calculadora te muestra esta tabla completa para que veas exactamente cómo evoluciona tu deuda mes a mes.",
  },
]

const related = [
  { title: "Interés Compuesto", href: "/calculadoras/interes-compuesto", icon: TrendingUp, color: "text-blue-400", bg: "bg-blue-500/10", desc: "Simula el crecimiento de tus inversiones" },
  { title: "Meta de Ahorro", href: "/calculadoras/meta-ahorro", icon: PiggyBank, color: "text-green-500", bg: "bg-green-500/10", desc: "Calcula tu plan de ahorro mensual" },
  { title: "Divisas", href: "/calculadoras/divisas", icon: ArrowLeftRight, color: "text-yellow-500", bg: "bg-yellow-500/10", desc: "Convierte entre 20+ monedas al instante" },
]

export default function PagoDeudaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-950 via-background to-background py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-red-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="mx-auto max-w-4xl px-6 lg:px-8 relative">
          <Breadcrumbs
            customItems={[
              { label: "Inicio", href: "/" },
              { label: "Calculadoras", href: "/calculadoras" },
              { label: "Pago de Deuda", href: "/calculadoras/pago-deuda", isActive: true },
            ]}
          />
          <div className="mt-8 text-center">
            <div className="flex justify-center gap-2 mb-6">
              <Badge variant="secondary" className="text-xs px-3 py-1">✓ Gratis</Badge>
              <Badge variant="secondary" className="text-xs px-3 py-1">✓ Sin registro</Badge>
              <Badge variant="secondary" className="text-xs px-3 py-1">✓ Amortización mes a mes</Badge>
            </div>
            <div className="flex justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/15 border border-red-500/20">
                <CreditCard className="h-8 w-8 text-red-400" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance leading-tight">
              Calculadora de{" "}
              <span className="text-red-400">Pago de Deuda</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty max-w-2xl mx-auto">
              Descubre exactamente cuándo estarás libre de deudas y cuánto dinero ahorras
              si aumentas tu pago mensual. Tabla de amortización completa al instante.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg mx-auto">
              {[
                { value: "€000s", label: "Ahorros potenciales pagando más" },
                { value: "Mes a mes", label: "Desglose completo" },
                { value: "Cualquier", label: "Tipo de deuda" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border border-border bg-card/50 p-4">
                  <p className="text-xl font-bold text-foreground">{s.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CALCULADORA */}
      <DebtPayoffCalculator />

      {/* CÓMO USAR */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Cómo usar la calculadora</h2>
            <p className="mt-3 text-muted-foreground">Tres datos y verás tu fecha de libertad financiera</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div key={s.number} className="relative rounded-2xl border border-border bg-card p-6">
                <span className="text-5xl font-black text-primary/10 absolute top-4 right-4">{s.number}</span>
                <p className="text-sm font-bold text-red-500 mb-2">Paso {s.number}</p>
                <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">¿Por qué usar esta calculadora?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-4 rounded-xl border border-border bg-card p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-500/10">
                  <b.icon className="h-5 w-5 text-red-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Preguntas frecuentes sobre deudas</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground mb-3">{f.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OTRAS CALCULADORAS */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-xl font-bold text-foreground mb-6">Otras calculadoras financieras</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {related.map((r) => (
              <Link key={r.href} href={r.href} className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 hover:border-primary/50 hover:shadow-md transition-all">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${r.bg}`}>
                  <r.icon className={`h-5 w-5 ${r.color}`} />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-foreground text-sm">{r.title}</p>
                  <p className="text-xs text-muted-foreground truncate">{r.desc}</p>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground ml-auto shrink-0 group-hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
