import type { Metadata } from "next"
import dynamic from "next/dynamic"
import Link from "next/link"
import { PiggyBank, Target, BarChart3, ShieldCheck, TrendingUp, CreditCard, ArrowLeftRight, ChevronRight } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Badge } from "@/components/ui/badge"

const SavingsGoalCalculator = dynamic(
  () => import("@/components/savings-goal-calculator"),
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
  title: `Calculadora de Meta de Ahorro ${new Date().getFullYear()} — ¿Cuánto necesito ahorrar al mes?`,
  description:
    "Calcula exactamente cuánto necesitas ahorrar cada mes para alcanzar tu meta financiera. Introduce tu objetivo, plazo e interés y obtén un plan de ahorro personalizado al instante. Gratis.",
  keywords: [
    "calculadora meta ahorro",
    "cuánto necesito ahorrar al mes",
    "calculadora ahorro mensual",
    "cuánto ahorrar para mi meta",
    "simulador ahorro objetivo",
    "planificador ahorro España",
    "calculadora fondo emergencia",
  ],
  alternates: {
    canonical: "https://www.finanzasdigitales.es/calculadoras/meta-ahorro",
  },
  openGraph: {
    title: "Calculadora de Meta de Ahorro — FinanzasPro",
    description: "Descubre cuánto necesitas ahorrar cada mes para alcanzar tu objetivo financiero.",
    url: "https://www.finanzasdigitales.es/calculadoras/meta-ahorro",
    type: "website",
  },
}

const steps = [
  { number: "01", title: "Define tu meta", desc: "El importe total que quieres tener ahorrado: fondo de emergencia, viaje, coche, entrada de piso..." },
  { number: "02", title: "Indica lo que ya tienes", desc: "Tu ahorro inicial actual. Si empiezas desde cero, ponlo en 0€." },
  { number: "03", title: "Ajusta plazo e interés", desc: "En cuántos meses quieres lograrlo y a qué tasa rentabilizarás el dinero mientras ahorras." },
]

const benefits = [
  { icon: Target, title: "Objetivos concretos", desc: "Transforma metas abstractas ('quiero ahorrar más') en planes exactos con fecha y cuota mensual." },
  { icon: BarChart3, title: "Tabla mes a mes", desc: "Ve cómo crece tu ahorro mes a mes y cuánto es aportación tuya vs intereses generados." },
  { icon: ShieldCheck, title: "Fondo de emergencia", desc: "La regla estándar son 3-6 meses de gastos. Calcula exactamente cuánto tiempo necesitas para construirlo." },
  { icon: PiggyBank, title: "Varios escenarios", desc: "Modifica el ahorro mensual y el plazo para encontrar el equilibrio que se adapta a tu situación actual." },
]

const faqs = [
  {
    q: "¿Cuánto debería ahorrar al mes?",
    a: "La regla más extendida es el 20% de tus ingresos netos (regla 50/30/20). Si ganas 1.800€ al mes, apunta a ahorrar 360€. Pero la cantidad exacta depende de tu situación: si tienes deudas de alto interés, prioriza pagarlas antes. Si ya tienes fondo de emergencia, destina más a inversión. Lo más importante es empezar con lo que puedas, aunque sea el 5%.",
  },
  {
    q: "¿Qué tasa de interés debo usar?",
    a: "Depende de dónde guardes los ahorros. Cuenta corriente: 0-0,1%. Depósito bancario: 1-2,5%. Fondo monetario (letras del Tesoro): 2,5-3%. Fondos indexados (largo plazo): 7-9% histórico. Para metas a menos de 2 años usa tasas conservadoras (0-2%). Para metas a más de 5 años puedes usar tasas más altas si inviertes en fondos diversificados.",
  },
  {
    q: "¿Cuánto dinero necesito en mi fondo de emergencia?",
    a: "La recomendación estándar es entre 3 y 6 meses de gastos fijos (alquiler, alimentación, suministros, transporte). Si tus gastos mensuales son 1.500€, tu fondo de emergencia debería ser entre 4.500€ y 9.000€. Si tienes trabajo estable y pareja con ingresos, 3 meses es suficiente. Si eres autónomo o tienes ingresos variables, apunta a 6 meses.",
  },
  {
    q: "¿Cómo puedo acelerar mi meta de ahorro?",
    a: "Tres palancas: (1) Aumentar ingresos con trabajo extra o monetizando habilidades. (2) Reducir gastos fijos revisando suscripciones, seguro del coche, tarifa móvil. (3) Mejorar la rentabilidad del ahorro: pasar de cuenta corriente a fondo monetario puede sumar 100-200€ extra al año sin esfuerzo.",
  },
  {
    q: "¿Debo ahorrar primero o pagar mi deuda?",
    a: "Regla general: si tu deuda tiene un interés superior al 6-7%, págala primero. Si es inferior (hipoteca al 3%, por ejemplo), ahorra e invierte en paralelo porque la rentabilidad esperada de las inversiones supera el coste de la deuda. Siempre mantén un pequeño fondo de emergencia (1.000-2.000€ mínimo) aunque estés pagando deuda.",
  },
]

const related = [
  { title: "Interés Compuesto", href: "/calculadoras/interes-compuesto", icon: TrendingUp, color: "text-blue-400", bg: "bg-blue-500/10", desc: "Simula el crecimiento de tus inversiones" },
  { title: "Pago de Deuda", href: "/calculadoras/pago-deuda", icon: CreditCard, color: "text-red-500", bg: "bg-red-500/10", desc: "Calcula cuándo liquidarás tu deuda" },
  { title: "Divisas", href: "/calculadoras/divisas", icon: ArrowLeftRight, color: "text-yellow-500", bg: "bg-yellow-500/10", desc: "Convierte entre 20+ monedas al instante" },
]

export default function MetaAhorroPage() {
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
      <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-background to-background py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="mx-auto max-w-4xl px-6 lg:px-8 relative">
          <Breadcrumbs
            customItems={[
              { label: "Inicio", href: "/" },
              { label: "Calculadoras", href: "/calculadoras" },
              { label: "Meta de Ahorro", href: "/calculadoras/meta-ahorro", isActive: true },
            ]}
          />
          <div className="mt-8 text-center">
            <div className="flex justify-center gap-2 mb-6">
              <Badge variant="secondary" className="text-xs px-3 py-1">✓ Gratis</Badge>
              <Badge variant="secondary" className="text-xs px-3 py-1">✓ Sin registro</Badge>
              <Badge variant="secondary" className="text-xs px-3 py-1">✓ Plan mes a mes</Badge>
            </div>
            <div className="flex justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/15 border border-green-500/20">
                <PiggyBank className="h-8 w-8 text-green-400" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance leading-tight">
              Calculadora de{" "}
              <span className="text-green-400">Meta de Ahorro</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty max-w-2xl mx-auto">
              Introduce tu objetivo financiero y calcula exactamente cuánto necesitas ahorrar cada mes
              para alcanzarlo. Con tabla de progreso mes a mes incluida.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg mx-auto">
              {[
                { value: "20%", label: "Ahorro recomendado de ingresos" },
                { value: "3–6m", label: "Meses para fondo emergencia" },
                { value: "0€", label: "Para empezar" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border border-border bg-card/50 p-4">
                  <p className="text-2xl font-bold text-foreground">{s.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CALCULADORA */}
      <SavingsGoalCalculator />

      {/* CÓMO USAR */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Cómo usar la calculadora</h2>
            <p className="mt-3 text-muted-foreground">Tu plan de ahorro en tres pasos</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div key={s.number} className="relative rounded-2xl border border-border bg-card p-6">
                <span className="text-5xl font-black text-primary/10 absolute top-4 right-4">{s.number}</span>
                <p className="text-sm font-bold text-green-500 mb-2">Paso {s.number}</p>
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
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-500/10">
                  <b.icon className="h-5 w-5 text-green-500" />
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
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Preguntas frecuentes sobre ahorro</h2>
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
