import type { Metadata } from "next"
import dynamic from "next/dynamic"
import Link from "next/link"
import { TrendingUp, CheckCircle, Clock, Zap, PiggyBank, CreditCard, ArrowLeftRight, ChevronRight } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Badge } from "@/components/ui/badge"

const ProjectionCalculator = dynamic(
  () => import("@/components/projection-calculator"),
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
  title: `Calculadora de Interés Compuesto Gratis ${new Date().getFullYear()} — Simula tus Inversiones`,
  description:
    "Calcula gratis cómo crece tu dinero con el interés compuesto. Simula aportes mensuales, tasas de retorno y plazos hasta 40 años. La herramienta más completa para planificar tu inversión en España.",
  keywords: [
    "calculadora interés compuesto",
    "interés compuesto calculadora",
    "simulador inversión",
    "calculadora inversiones España",
    "interés compuesto España",
    "calcular interés compuesto",
    "simulador interés compuesto",
    "calculadora rentabilidad inversión",
  ],
  alternates: {
    canonical: "https://www.finanzasdigitales.es/calculadoras/interes-compuesto",
  },
  openGraph: {
    title: "Calculadora de Interés Compuesto Gratis — Finanzas Digitales",
    description:
      "Simula cómo crece tu dinero con el interés compuesto. Aportes mensuales, tasas personalizadas y plazos hasta 40 años.",
    url: "https://www.finanzasdigitales.es/calculadoras/interes-compuesto",
    type: "website",
  },
}

const steps = [
  {
    number: "01",
    title: "Introduce tu capital inicial",
    desc: "El dinero que tienes disponible para invertir hoy. Puede ser desde 0€.",
  },
  {
    number: "02",
    title: "Añade tu aportación mensual",
    desc: "El importe que puedes destinar cada mes a tu inversión de forma constante.",
  },
  {
    number: "03",
    title: "Ajusta tasa y plazo",
    desc: "Elige la rentabilidad anual esperada y los años que dejarás crecer tu dinero.",
  },
]

const benefits = [
  {
    icon: TrendingUp,
    title: "Visualiza el poder del tiempo",
    desc: "Ve en un gráfico cómo el tiempo es tu mayor aliado: duplicar el plazo puede triplicar el resultado.",
  },
  {
    icon: Zap,
    title: "Resultados instantáneos",
    desc: "Cada cambio en los parámetros actualiza el resultado en tiempo real. Sin esperas.",
  },
  {
    icon: CheckCircle,
    title: "Gratis y sin registro",
    desc: "Sin suscripciones, sin correos, sin trampas. Usa la calculadora tantas veces como quieras.",
  },
  {
    icon: Clock,
    title: "Simula hasta 40 años",
    desc: "Planifica tu jubilación o metas a largo plazo con proyecciones de hasta 40 años.",
  },
]

const faqs = [
  {
    q: "¿Qué es el interés compuesto?",
    a: "El interés compuesto es el proceso por el que los intereses generados se suman al capital y generan más intereses en el siguiente período. Es decir, ganas intereses sobre los intereses. Albert Einstein lo llamó 'la octava maravilla del mundo' porque permite que el dinero crezca de forma exponencial con el tiempo.",
  },
  {
    q: "¿Qué tasa de retorno debo usar en la calculadora?",
    a: "Depende del activo. Para fondos indexados globales (MSCI World, S&P 500), la rentabilidad histórica a largo plazo es del 7-10% anual nominal. Para depósitos o fondos monetarios en España, entre el 2,5-3%. Para una estimación conservadora usa el 6%; para una moderada, el 8%. Recuerda que rentabilidades pasadas no garantizan resultados futuros.",
  },
  {
    q: "¿Con cuánto dinero puedo empezar a invertir?",
    a: "Con fondos indexados disponibles en España a través de plataformas como MyInvestor, Indexa Capital o Openbank puedes empezar desde 1€. Lo importante no es el capital inicial sino la constancia de las aportaciones mensuales. La calculadora te muestra cómo incluso aportaciones de 100€/mes generan resultados muy relevantes en 20-30 años.",
  },
  {
    q: "¿Cómo afectan los impuestos al resultado final?",
    a: "La calculadora muestra el resultado bruto antes de impuestos. En España, las ganancias de inversiones tributan como rentas del ahorro: 19% hasta 6.000€, 21% hasta 50.000€, 23% hasta 200.000€ y 27% por encima. Con fondos de inversión, puedes traspasar entre fondos sin tributar hasta el reembolso, lo que mejora significativamente la rentabilidad neta.",
  },
  {
    q: "¿Cuál es la diferencia entre interés simple e interés compuesto?",
    a: "Con interés simple, los intereses se calculan siempre sobre el capital inicial. Con interés compuesto, se calculan sobre el capital inicial más los intereses ya acumulados. Ejemplo: 10.000€ al 8% durante 20 años → interés simple: 26.000€ → interés compuesto: 46.610€. La diferencia crece exponencialmente con el tiempo.",
  },
]

const related = [
  { title: "Meta de Ahorro", href: "/calculadoras/meta-ahorro", icon: PiggyBank, color: "text-green-500", bg: "bg-green-500/10", desc: "¿Cuánto necesitas ahorrar cada mes?" },
  { title: "Pago de Deuda", href: "/calculadoras/pago-deuda", icon: CreditCard, color: "text-red-500", bg: "bg-red-500/10", desc: "Calcula cuándo estarás libre de deudas" },
  { title: "Divisas", href: "/calculadoras/divisas", icon: ArrowLeftRight, color: "text-yellow-500", bg: "bg-yellow-500/10", desc: "Convierte entre 20+ monedas al instante" },
]

export default function InteresCompuestoPage() {
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
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-background to-background py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="mx-auto max-w-4xl px-6 lg:px-8 relative">
          <Breadcrumbs
            customItems={[
              { label: "Inicio", href: "/" },
              { label: "Calculadoras", href: "/calculadoras" },
              { label: "Interés Compuesto", href: "/calculadoras/interes-compuesto", isActive: true },
            ]}
          />
          <div className="mt-8 text-center">
            <div className="flex justify-center gap-2 mb-6">
              <Badge variant="secondary" className="text-xs px-3 py-1">✓ Gratis</Badge>
              <Badge variant="secondary" className="text-xs px-3 py-1">✓ Sin registro</Badge>
              <Badge variant="secondary" className="text-xs px-3 py-1">✓ Resultados en tiempo real</Badge>
            </div>
            <div className="flex justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/15 border border-blue-500/20">
                <TrendingUp className="h-8 w-8 text-blue-400" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance leading-tight">
              Calculadora de{" "}
              <span className="text-blue-400">Interés Compuesto</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty max-w-2xl mx-auto">
              Descubre exactamente cuánto puede crecer tu dinero con el tiempo. Simula aportes mensuales,
              ajusta la tasa de retorno y visualiza tu patrimonio futuro en segundos.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg mx-auto">
              {[
                { value: "40", label: "Años simulables" },
                { value: "7–10%", label: "Retorno histórico MSCI" },
                { value: "100%", label: "Gratis y sin límites" },
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
      <ProjectionCalculator />

      {/* NOSCRIPT fallback */}
      <noscript>
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Ejemplos de proyecciones de inversión</h2>
          <p className="text-muted-foreground mb-6">Capital inicial 10.000€ + aportación mensual 200€</p>
          <table className="w-full border-collapse border border-border text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="border border-border px-4 py-2 text-left">Años</th>
                <th className="border border-border px-4 py-2 text-right">5% anual</th>
                <th className="border border-border px-4 py-2 text-right">8% anual</th>
                <th className="border border-border px-4 py-2 text-right">10% anual</th>
              </tr>
            </thead>
            <tbody>
              {[["5 años","26.413€","28.234€","29.523€"],["10 años","47.240€","56.731€","64.003€"],["20 años","98.894€","148.268€","196.694€"],["30 años","181.892€","347.097€","536.049€"]].map(([y,...vals])=>(
                <tr key={y}>
                  <td className="border border-border px-4 py-2">{y}</td>
                  {vals.map(v=><td key={v} className="border border-border px-4 py-2 text-right">{v}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </noscript>

      {/* CÓMO USAR */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Cómo usar la calculadora</h2>
            <p className="mt-3 text-muted-foreground">Tres pasos para ver el futuro de tu dinero</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div key={s.number} className="relative rounded-2xl border border-border bg-card p-6">
                <span className="text-5xl font-black text-primary/10 absolute top-4 right-4">{s.number}</span>
                <p className="text-sm font-bold text-primary mb-2">Paso {s.number}</p>
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
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10">
                  <b.icon className="h-5 w-5 text-blue-400" />
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
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Preguntas frecuentes</h2>
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

      {/* SECCIÓN EDUCATIVA - ejemplos reales para España */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Ejemplos reales: cuánto puedes acumular en España</h2>
            <p className="mt-3 text-muted-foreground">Proyecciones con fondos indexados MSCI World al 8% anual (tasa histórica moderada)</p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 border-b border-border">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-foreground">Aportación mensual</th>
                  <th className="px-4 py-3 text-right font-semibold text-foreground">10 años</th>
                  <th className="px-4 py-3 text-right font-semibold text-foreground">20 años</th>
                  <th className="px-4 py-3 text-right font-semibold text-foreground">30 años</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["50 €/mes", "9.147 €", "29.451 €", "74.518 €"],
                  ["100 €/mes", "18.295 €", "58.902 €", "149.036 €"],
                  ["200 €/mes", "36.589 €", "117.804 €", "298.072 €"],
                  ["300 €/mes", "54.884 €", "176.706 €", "447.108 €"],
                  ["500 €/mes", "91.473 €", "294.510 €", "745.180 €"],
                ].map(([aport, ...vals]) => (
                  <tr key={aport} className="hover:bg-muted/30 transition-colors">
                    <td className="px-4 py-3 font-medium text-foreground">{aport}</td>
                    {vals.map(v => <td key={v} className="px-4 py-3 text-right text-muted-foreground">{v}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-muted-foreground text-center">
            * Capital inicial 0 €. Rentabilidad del 8% anual. Valores brutos antes de impuestos. No garantiza resultados futuros.
          </p>
          <div className="mt-8 rounded-xl border border-blue-500/20 bg-blue-500/5 p-6">
            <p className="text-sm font-semibold text-foreground mb-2">¿Dónde invertir en fondos indexados en España?</p>
            <p className="text-sm text-muted-foreground mb-4">
              Para conseguir ese 8% anual históricamente, necesitas un fondo indexado MSCI World o S&P 500 de bajo costo. En España las plataformas más accesibles son <strong className="text-foreground">MyInvestor</strong> (fondos desde 1 €, sin custodia), <strong className="text-foreground">Indexa Capital</strong> (cartera automática desde 1.000 €) y <strong className="text-foreground">Trade Republic</strong> (ETFs desde 1 €/mes).
            </p>
            <Link
              href="/fondos-indexados"
              className="inline-flex items-center text-sm font-semibold text-blue-500 hover:underline"
            >
              Ver guía completa de fondos indexados en España →
            </Link>
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
