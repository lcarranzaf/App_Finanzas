import type { Metadata } from "next"
import dynamic from "next/dynamic"
import Link from "next/link"
import { Home, ChevronRight, Calculator, TrendingDown } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Badge } from "@/components/ui/badge"
import { FAQSection } from "@/components/faq-section"

const MortgageCalculator = dynamic(() => import("@/components/mortgage-calculator"), {
  ssr: false,
  loading: () => (
    <div className="py-20 flex items-center justify-center">
      <div className="text-muted-foreground text-sm">Cargando calculadora...</div>
    </div>
  ),
})

export const metadata: Metadata = {
  title: "Calculadora de Hipoteca España 2026 — Cuota, Amortización y Gastos",
  description:
    "Calcula tu cuota hipotecaria mensual, el total de intereses y la tabla de amortización completa. Simulador gratuito adaptado al mercado español: Euribor, gastos de compra y máximo financiable.",
  keywords: [
    "calculadora hipoteca españa",
    "calculadora cuota hipoteca",
    "simulador hipoteca",
    "tabla amortizacion hipoteca",
    "calculadora hipoteca variable",
    "calculadora hipoteca fija 2026",
    "cuota mensual hipoteca",
    "gastos compra vivienda españa",
    "euribor hipoteca",
    "calculadora prestamo hipotecario",
  ],
  alternates: {
    canonical: "https://www.finanzasdigitales.es/calculadoras/hipoteca",
  },
  openGraph: {
    title: "Calculadora de Hipoteca España 2026 — Cuota y Amortización",
    description:
      "Simula tu hipoteca: cuota mensual, intereses totales y tabla de amortización. Gratis, sin registro.",
    url: "https://www.finanzasdigitales.es/calculadoras/hipoteca",
    type: "website",
  },
}

const faqs = [
  {
    question: "¿Cuánto necesito ahorrar para comprar una vivienda en España?",
    answer:
      "En España los bancos financian como máximo el 80% del valor de tasación. Necesitas al menos el 20% de entrada más un 10% adicional para gastos de compraventa (ITP o AJD, notaría, registro, gestoría). En total, prepara entre el 30% y el 32% del precio de la vivienda.",
  },
  {
    question: "¿Es mejor hipoteca fija o variable en 2026?",
    answer:
      "Con el Euribor alrededor del 2.5% en 2026, las hipotecas fijas a 20-30 años se ofertan entre el 3% y el 3.5% TIN. Si valoras la estabilidad y planeas quedarte muchos años, la fija ofrece más tranquilidad. Si el Euribor sigue bajando, la variable puede resultar más económica. Compara siempre la TAE de ambas opciones, no solo el TIN.",
  },
  {
    question: "¿Qué es el TIN y en qué se diferencia de la TAE?",
    answer:
      "El TIN (Tipo de Interés Nominal) es el interés puro del préstamo. La TAE (Tasa Anual Equivalente) incluye el TIN más todas las comisiones y productos vinculados (seguros de vida, seguro de hogar, cuenta corriente...). La ley obliga a los bancos a informar de la TAE. Compara siempre hipotecas por su TAE, no solo por el TIN.",
  },
  {
    question: "¿Qué porcentaje de mis ingresos debo destinar a la hipoteca?",
    answer:
      "El banco generalmente no concede hipotecas donde la cuota supere el 35% de los ingresos netos mensuales. Lo recomendable es no superar el 30%. Si ganas 2.500€/mes netos, tu cuota máxima recomendada sería de 750€.",
  },
  {
    question: "¿Qué gastos tiene la compra de una vivienda en España?",
    answer:
      "Los gastos de compraventa en España son: ITP (4%-10% según CCAA en vivienda de segunda mano) o AJD (0.5%-1.5% en vivienda nueva), notaría (~0.5%), registro de la propiedad (~0.2%), gestoría (~0.3%) y tasación (~0.1%). En total, entre el 8% y el 12% del precio de compra.",
  },
  {
    question: "¿Puedo amortizar anticipadamente mi hipoteca?",
    answer:
      "Sí. Desde la Ley Hipotecaria de 2019, la comisión por amortización anticipada en hipotecas variables es del 0.25% los 3 primeros años y 0% después. En hipotecas fijas, es del 2% los 10 primeros años y 1.5% después. Amortizar anticipadamente reduce considerablemente el total de intereses pagados.",
  },
  {
    question: "¿Qué pasa con mi hipoteca variable si sube el Euribor?",
    answer:
      "Con hipoteca variable, tu cuota se revisa cada 6 o 12 meses aplicando el Euribor vigente más el diferencial pactado con el banco. Si el Euribor sube, tu cuota sube. Usa esta calculadora con distintos tipos de interés para simular escenarios de subida y decidir si prefieres pasar a tipo fijo.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
}

export default function HipotecaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/40 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumbs
            customItems={[
              { label: "Inicio", href: "/" },
              { label: "Calculadoras", href: "/calculadoras" },
              { label: "Hipoteca", href: "/calculadoras/hipoteca", isActive: true },
            ]}
          />
          <div className="mt-8 mx-auto max-w-3xl text-center">
            <div className="flex justify-center gap-2 mb-6">
              <Badge variant="secondary" className="text-xs px-3 py-1">✓ Sin registro</Badge>
              <Badge variant="secondary" className="text-xs px-3 py-1">✓ Tabla amortización</Badge>
              <Badge variant="secondary" className="text-xs px-3 py-1">✓ Gastos de compra</Badge>
            </div>
            <div className="flex justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/10 border border-violet-500/20">
                <Home className="h-8 w-8 text-violet-400" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance leading-tight">
              Calculadora de{" "}
              <span className="text-violet-400">Hipoteca</span>{" "}
              en España 2026
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Simula tu cuota mensual, calcula el total de intereses y visualiza la tabla de amortización completa.
              Adaptada al mercado hipotecario español: Euribor, gastos de compraventa y máximo financiable.
            </p>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <MortgageCalculator />

      {/* HOW TO USE */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-10">Cómo usar la calculadora de hipoteca</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                icon: Home,
                title: "Introduce el precio",
                desc: "Escribe el precio de la vivienda y ajusta el porcentaje de entrada. Se recomienda mínimo un 20%.",
              },
              {
                step: "2",
                icon: Calculator,
                title: "Ajusta tipo e interés",
                desc: "Pon el TIN de tu oferta bancaria. Si no tienes oferta, usa 3.5% como referencia actual del mercado.",
              },
              {
                step: "3",
                icon: TrendingDown,
                title: "Analiza los resultados",
                desc: "Revisa la cuota mensual, el gráfico de evolución y la tabla de amortización mes a mes.",
              },
            ].map((s) => (
              <div key={s.step} className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-500/10 text-violet-400 font-bold text-lg mb-4 border border-violet-500/20">
                  {s.step}
                </div>
                <h3 className="font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATIONAL: fija vs variable */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Hipoteca fija vs variable en España 2026</h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-4 font-semibold">Característica</th>
                  <th className="text-left p-4 font-semibold text-violet-400">Fija</th>
                  <th className="text-left p-4 font-semibold text-blue-400">Variable (Euribor + diferencial)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Cuota mensual", "Siempre igual", "Cambia cada 6 o 12 meses"],
                  ["Tipo referencia 2026", "3.0% – 3.5% TIN", "Euribor ~2.5% + 0.5-1% diferencial"],
                  ["Riesgo de subida", "Ninguno", "Sube si el Euribor sube"],
                  ["Beneficio si Euribor baja", "No te beneficias", "Tu cuota baja automáticamente"],
                  ["Ideal para", "Estabilidad y largo plazo", "Quien asume riesgo o tiene plazo corto"],
                  ["Comisión amortización anticipada", "2% primeros 10 años / 1.5% después", "0.25% primeros 3 años / 0% después"],
                ].map(([feature, fixed, variable]) => (
                  <tr key={feature} className="hover:bg-muted/30">
                    <td className="p-4 font-medium">{feature}</td>
                    <td className="p-4 text-muted-foreground">{fixed}</td>
                    <td className="p-4 text-muted-foreground">{variable}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FAQSection faqs={faqs} inArticle />
        </div>
      </section>

      {/* RELATED CALCULATORS */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-xl font-bold mb-6 text-center">Otras calculadoras útiles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                href: "/calculadoras/interes-compuesto",
                title: "Interés Compuesto",
                desc: "Simula el crecimiento de tu inversión a largo plazo con aportaciones mensuales.",
              },
              {
                href: "/calculadoras/pago-deuda",
                title: "Pago de Deuda",
                desc: "Calcula cuánto tiempo tardarás en saldar un préstamo o tarjeta de crédito.",
              },
              {
                href: "/calculadoras/meta-ahorro",
                title: "Meta de Ahorro",
                desc: "Descubre cuánto necesitas ahorrar al mes para alcanzar tu objetivo financiero.",
              },
            ].map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group flex flex-col rounded-xl border border-border bg-card p-4 hover:border-violet-400/50 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold mb-1 group-hover:text-violet-400 transition-colors">{c.title}</h3>
                <p className="text-sm text-muted-foreground flex-1">{c.desc}</p>
                <div className="flex items-center gap-1 text-xs text-violet-400 mt-3 font-medium">
                  Abrir{" "}
                  <ChevronRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
