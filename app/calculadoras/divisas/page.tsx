import type { Metadata } from "next"
import dynamic from "next/dynamic"
import Link from "next/link"
import { ArrowLeftRight, RefreshCw, Globe, Zap, TrendingUp, PiggyBank, CreditCard, ChevronRight } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Badge } from "@/components/ui/badge"

const CurrencyConverter = dynamic(
  () => import("@/components/currency-converter"),
  {
    loading: () => (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center space-y-4">
          <div className="h-10 w-10 mx-auto animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-muted-foreground">Cargando convertidor...</p>
        </div>
      </div>
    ),
    ssr: false,
  }
)

export const metadata: Metadata = {
  title: `Convertidor de Divisas ${new Date().getFullYear()} — Euro, Dólar, Libra y 20+ monedas en tiempo real`,
  description:
    "Convierte euros, dólares, libras, pesos y más de 20 monedas con tipos de cambio actualizados al instante. Calculadora de divisas gratis para viajeros, autónomos e inversores.",
  keywords: [
    "convertidor de divisas",
    "tipo de cambio euro dólar",
    "cambio euro libra hoy",
    "conversor monedas online",
    "calculadora divisas gratis",
    "tipo de cambio hoy España",
    "euro a peso mexicano",
    "cambio de moneda tiempo real",
  ],
  alternates: {
    canonical: "https://www.finanzasdigitales.es/calculadoras/divisas",
  },
  openGraph: {
    title: "Convertidor de Divisas Gratis — Euro, Dólar y 20+ monedas | FinanzasPro",
    description: "Tipos de cambio en tiempo real para más de 20 monedas. Perfecto para viajes, negocios e inversiones.",
    url: "https://www.finanzasdigitales.es/calculadoras/divisas",
    type: "website",
  },
}

const steps = [
  { number: "01", title: "Selecciona la moneda origen", desc: "Elige la moneda que tienes: euros, dólares, libras, pesos o cualquiera de las 20+ disponibles." },
  { number: "02", title: "Elige la moneda destino", desc: "La moneda a la que quieres convertir. Puedes cambiar el sentido de la conversión con un clic." },
  { number: "03", title: "Introduce el importe", desc: "Escribe la cantidad y obtén el resultado al instante con el tipo de cambio actualizado." },
]

const benefits = [
  { icon: RefreshCw, title: "Tipos de cambio actualizados", desc: "Los tipos de cambio se actualizan periódicamente para darte siempre un valor de referencia fiable." },
  { icon: Globe, title: "Más de 20 monedas", desc: "Euro, dólar, libra, yen, franco suizo, pesos latinoamericanos, real brasileño y más." },
  { icon: Zap, title: "Conversión instantánea", desc: "Resultado en tiempo real mientras escribes. Sin botones que pulsar, sin esperas." },
  { icon: ArrowLeftRight, title: "Conversión bidireccional", desc: "Invierte el sentido de la conversión con un solo clic. De EUR a USD o de USD a EUR en un segundo." },
]

const faqs = [
  {
    q: "¿Cuál es el tipo de cambio oficial del euro hoy?",
    a: "El Banco Central Europeo (BCE) publica diariamente el tipo de cambio de referencia del euro frente a las principales divisas. El convertidor usa tipos de cambio de referencia actualizados. Para transacciones financieras importantes, consulta siempre el tipo que aplica específicamente tu banco o proveedor de pagos, ya que suelen aplicar un margen sobre el tipo interbancario.",
  },
  {
    q: "¿Por qué el tipo de cambio que me da mi banco es diferente al de la calculadora?",
    a: "Los bancos y casas de cambio aplican un margen (spread) sobre el tipo de cambio interbancario. Este margen es su beneficio por el servicio. En bancos tradicionales el margen puede ser del 2-4%; en fintech como Wise, Revolut o N26 suele ser inferior al 1%. Para envíos internacionales o cambios de divisa frecuentes, considera usar estos servicios especializados.",
  },
  {
    q: "¿Cuándo es el mejor momento para cambiar divisas?",
    a: "El mercado de divisas (Forex) opera 24 horas durante la semana. Los tipos de cambio fluctúan constantemente en respuesta a datos económicos, decisiones de bancos centrales y eventos geopolíticos. Para viajes o compras puntuales, la diferencia entre el 'mejor' y el 'peor' momento raramente supera el 1-2% en divisas principales. Para montos grandes (>5.000€), sí puede valer la pena monitorizar el tipo de cambio.",
  },
  {
    q: "¿Cómo afecta el tipo de cambio a mis inversiones en mercados extranjeros?",
    a: "Si inviertes en fondos o ETFs en dólares desde España (en euros), el tipo de cambio EUR/USD afecta a tu rentabilidad real. Si el euro se aprecia frente al dólar, pierdes parte de la ganancia nominal. Si se deprecia, ganas. Para eliminar este riesgo existen fondos cubiertos de divisa (hedged), aunque suelen tener comisiones más altas. Para inversores a largo plazo, el riesgo de divisa tiende a neutralizarse.",
  },
  {
    q: "¿Cuáles son las formas más económicas de cambiar divisas en España?",
    a: "De más a menos económico: (1) Tarjetas fintech sin comisión de cambio (Revolut, Wise, N26) — aplican tipo interbancario o muy cercano. (2) Extraer en cajeros en el extranjero con tarjeta que no cobra comisión. (3) Casas de cambio especializadas (evita aeropuertos). (4) Bancos tradicionales — los más caros. (5) Cambio en destino en lugares turísticos — el peor tipo suele estar aquí.",
  },
]

const related = [
  { title: "Interés Compuesto", href: "/calculadoras/interes-compuesto", icon: TrendingUp, color: "text-blue-400", bg: "bg-blue-500/10", desc: "Simula el crecimiento de tus inversiones" },
  { title: "Meta de Ahorro", href: "/calculadoras/meta-ahorro", icon: PiggyBank, color: "text-green-500", bg: "bg-green-500/10", desc: "Calcula tu plan de ahorro mensual" },
  { title: "Pago de Deuda", href: "/calculadoras/pago-deuda", icon: CreditCard, color: "text-red-500", bg: "bg-red-500/10", desc: "Calcula cuándo liquidarás tu deuda" },
]

export default function DivisasPage() {
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
      <section className="relative overflow-hidden bg-gradient-to-br from-yellow-950 via-background to-background py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="mx-auto max-w-4xl px-6 lg:px-8 relative">
          <Breadcrumbs
            customItems={[
              { label: "Inicio", href: "/" },
              { label: "Calculadoras", href: "/calculadoras" },
              { label: "Divisas", href: "/calculadoras/divisas", isActive: true },
            ]}
          />
          <div className="mt-8 text-center">
            <div className="flex justify-center gap-2 mb-6">
              <Badge variant="secondary" className="text-xs px-3 py-1">✓ Gratis</Badge>
              <Badge variant="secondary" className="text-xs px-3 py-1">✓ +20 monedas</Badge>
              <Badge variant="secondary" className="text-xs px-3 py-1">✓ Tiempo real</Badge>
            </div>
            <div className="flex justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/15 border border-yellow-500/20">
                <ArrowLeftRight className="h-8 w-8 text-yellow-400" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance leading-tight">
              Convertidor de{" "}
              <span className="text-yellow-400">Divisas</span>{" "}
              Gratis
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty max-w-2xl mx-auto">
              Convierte entre euro, dólar, libra, yen y más de 20 monedas con tipos de cambio
              actualizados al instante. Ideal para viajes, negocios e inversiones internacionales.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg mx-auto">
              {[
                { value: "20+", label: "Monedas disponibles" },
                { value: "Real", label: "Tipos actualizados" },
                { value: "0€", label: "Coste por uso" },
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
      <CurrencyConverter />

      {/* CÓMO USAR */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Cómo usar el convertidor</h2>
            <p className="mt-3 text-muted-foreground">Convierte cualquier divisa en tres pasos</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div key={s.number} className="relative rounded-2xl border border-border bg-card p-6">
                <span className="text-5xl font-black text-primary/10 absolute top-4 right-4">{s.number}</span>
                <p className="text-sm font-bold text-yellow-500 mb-2">Paso {s.number}</p>
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
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">¿Por qué usar este convertidor?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-4 rounded-xl border border-border bg-card p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-500/10">
                  <b.icon className="h-5 w-5 text-yellow-500" />
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
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Preguntas frecuentes sobre divisas</h2>
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
