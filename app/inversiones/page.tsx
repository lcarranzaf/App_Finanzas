import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  TrendingUp,
  DollarSign,
  BarChart3,
  Briefcase,
  CheckCircle2,
  AlertCircle,
} from "lucide-react"
import type { Metadata } from "next"
import AdSense from "@/components/AdSense"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { FAQSection, type FAQItem } from "@/components/faq-section"
import { CategoryArticles } from "@/components/category-articles"
import { AffiliateDisclosure } from "@/components/affiliate-disclosure"

export const metadata: Metadata = {
  title: `Guía de Inversiones para Principiantes ${new Date().getFullYear()} - Fondos Indexados, ETFs y Acciones`,
  description:
    "Aprende a invertir desde cero con nuestra guía completa. Compara fondos indexados, ETFs, acciones y bonos. Descubre cuánto necesitas para empezar y qué estrategia se adapta a tu perfil de riesgo.",
  keywords: ["inversiones para principiantes", "fondos indexados", "ETFs", "acciones", "bonos", "cómo invertir", "bolsa de valores", "S&P 500", "inversión a largo plazo"],
  alternates: {
    canonical: "https://www.finanzasdigitales.es/inversiones",
  },
  openGraph: {
    title: "Guía de Inversiones para Principiantes — FinanzasPro",
    description: "Compara fondos indexados, ETFs, acciones y bonos. Estrategias de inversión adaptadas al mercado español y europeo.",
    url: "https://www.finanzasdigitales.es/inversiones",
    type: "website",
    locale: "es_ES",
    siteName: "FinanzasPro",
  },
}

export default function InversionesPage() {
  const inversionesPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.finanzasdigitales.es/inversiones",
    name: "Guía de Inversiones para Principiantes - FinanzasPro",
    description:
      "Aprende a invertir desde cero: compara fondos indexados, ETFs, acciones y bonos. Estrategias para todos los perfiles de riesgo.",
    url: "https://www.finanzasdigitales.es/inversiones",
    inLanguage: "es",
    isPartOf: { "@id": "https://www.finanzasdigitales.es/#website" },
  }

  const investmentOptions = [
    {
      title: "Fondos Indexados",
      riskLevel: "Bajo-Medio",
      returns: "7-10% anual",
      minInvestment: "€100-500",
      description: "Replican índices de mercado como el MSCI World o S&P 500",
      pros: ["Diversificación automática", "Bajas comisiones", "Pasivo y automático"],
      cons: ["Retornos modestos", "Requiere paciencia"],
      icon: BarChart3,
      article: "/blog/invertir-fondos-indexados-principiantes",
    },
    {
      title: "ETFs",
      riskLevel: "Bajo-Medio",
      returns: "6-12% anual",
      minInvestment: "€100+",
      description: "Fondos negociados en bolsa, flexibles y transparentes",
      pros: ["Compra/venta fácil", "Bajo costo", "Amplia variedad"],
      cons: ["Requiere cuenta bursátil", "Volatilidad intradiaria"],
      icon: TrendingUp,
      article: "/blog/invertir-primeros-pasos",
    },
    {
      title: "Acciones Individuales",
      riskLevel: "Medio-Alto",
      returns: "Variable (10-30%+)",
      minInvestment: "€50-200",
      description: "Compra participación en empresas específicas",
      pros: ["Alto potencial", "Control total", "Aprendizaje continuo"],
      cons: ["Mayor riesgo", "Requiere investigación"],
      icon: Briefcase,
      article: "/blog/acciones-para-principiantes",
    },
    {
      title: "Bonos e Ingresos Fijos",
      riskLevel: "Muy Bajo",
      returns: "3-6% anual",
      minInvestment: "€50-1.000",
      description: "Préstamos con rendimiento garantizado",
      pros: ["Predecible", "Seguro", "Generador de ingresos"],
      cons: ["Retornos bajos", "Riesgo inflación"],
      icon: DollarSign,
      article: "/blog/bonos-para-principiantes",
    },
  ]

  const investmentTips = [
    {
      icon: CheckCircle2,
      title: "Empieza con fondo de emergencia",
      description: "1.000-2.000€ debe estar en efectivo o ahorro antes de invertir en bolsa.",
    },
    {
      icon: CheckCircle2,
      title: "Entiende tu riesgo",
      description: "Si necesitas el dinero en 5 años: menos riesgo. Si no lo necesitas en 20 años: más riesgo está bien.",
    },
    {
      icon: CheckCircle2,
      title: "Diversifica siempre",
      description: "No pongas todo en una inversión. Reparte entre fondos globales, ETFs y acciones.",
    },
    {
      icon: CheckCircle2,
      title: "Compra y mantén",
      description: "El trading frecuente pierde dinero. Invierte a largo plazo y evita emociones.",
    },
    {
      icon: CheckCircle2,
      title: "Automatiza aportaciones",
      description: "Invierte 100€/mes automáticamente. Es más efectivo que aportaciones irregulares.",
    },
    {
      icon: CheckCircle2,
      title: "Aprende siempre",
      description: "Lee sobre inversiones 15 mins/día. El conocimiento es tu mejor herramienta.",
    },
  ]

  const comparisonTable = [
    {
      factor: "Riesgo",
      fondos: "Bajo",
      etfs: "Bajo-Medio",
      acciones: "Medio-Alto",
      bonos: "Muy Bajo",
    },
    {
      factor: "Retorno Esperado",
      fondos: "7-10%",
      etfs: "6-12%",
      acciones: "Variable",
      bonos: "3-6%",
    },
    {
      factor: "Tiempo de Aprendizaje",
      fondos: "Mínimo",
      etfs: "Bajo",
      acciones: "Alto",
      bonos: "Bajo",
    },
    {
      factor: "Inversión Mínima",
      fondos: "€100-500",
      etfs: "€100+",
      acciones: "€50+",
      bonos: "€50+",
    },
    {
      factor: "Para Principiantes",
      fondos: "⭐⭐⭐⭐⭐",
      etfs: "⭐⭐⭐⭐",
      acciones: "⭐⭐⭐",
      bonos: "⭐⭐⭐",
    },
  ]

  const investmentPath = [
    {
      phase: "Fase 1",
      title: "Aprender",
      duration: "1-2 meses",
      focus: "Leer, entender conceptos básicos",
      action: "Lee 1 artículo/semana sobre inversiones",
      investment: "0€",
    },
    {
      phase: "Fase 2",
      title: "Fondos Indexados",
      duration: "6-12 meses",
      focus: "Construir cartera de bajo riesgo",
      action: "Invierte 100€/mes en MSCI World vía MyInvestor o Trade Republic",
      investment: "600-1.200€",
    },
    {
      phase: "Fase 3",
      title: "Diversificar",
      duration: "1-2 años",
      focus: "Agregar ETFs y bonos",
      action: "70% fondos globales, 20% ETFs europeos, 10% bonos",
      investment: "2.000-5.000€",
    },
    {
      phase: "Fase 4",
      title: "Optimizar",
      duration: "3+ años",
      focus: "Acciones selectivas si lo deseas",
      action: "90% pasivo, 10% acciones activas",
      investment: "Variable",
    },
  ]

  const inversionesFAQs: FAQItem[] = [
    {
      question: "¿Cuánto dinero necesito para empezar a invertir?",
      answer: "Puedes empezar a invertir con tan solo 50-100€. Plataformas disponibles en España como MyInvestor, Trade Republic, Degiro o Indexa Capital permiten invertir con importes mínimos. Lo importante no es la cantidad inicial sino la consistencia: invertir 100€ mensuales durante 20 años al 8% genera más de 58.000€.",
    },
    {
      question: "¿Qué son los fondos indexados y por qué son recomendados?",
      answer: "Los fondos indexados son fondos de inversión que replican un índice de mercado como el S&P 500. Son recomendados porque ofrecen diversificación automática (inviertes en cientos de empresas a la vez), tienen comisiones muy bajas (0.03-0.20% anual) y históricamente generan retornos del 7-10% anual a largo plazo.",
    },
    {
      question: "¿Cuál es la diferencia entre ETFs y fondos indexados?",
      answer: "Ambos ofrecen diversificación y bajas comisiones. La principal diferencia es que los ETFs se compran y venden como acciones durante el horario de mercado, mientras los fondos indexados se compran al precio de cierre del día. Para inversores a largo plazo, el resultado es prácticamente igual.",
    },
    {
      question: "¿Es seguro invertir en la bolsa de valores?",
      answer: "Toda inversión conlleva riesgos. Sin embargo, históricamente el mercado de valores ha generado retornos positivos a largo plazo (10+ años). La clave es diversificar tu cartera, invertir a largo plazo y no entrar en pánico durante las caídas. Los fondos indexados reducen el riesgo al distribuir tu inversión entre cientos de empresas.",
    },
    {
      question: "¿Debo invertir o ahorrar primero?",
      answer: "Primero construye un fondo de emergencia de 3-6 meses de gastos en una cuenta de ahorros. Una vez tengas esa base de seguridad, comienza a invertir el dinero adicional. El ahorro protege tu presente, la inversión construye tu futuro. Ambos son complementarios.",
    },
    {
      question: "¿Cuánto tiempo debo mantener mis inversiones?",
      answer: "El horizonte mínimo recomendado para inversiones en bolsa es de 5 años, pero idealmente 10-20+ años. A mayor plazo, menor riesgo de pérdidas. Históricamente, no ha existido un periodo de 20 años donde el S&P 500 haya dado rendimientos negativos. La paciencia es tu mejor aliada.",
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(inversionesPageSchema) }}
        suppressHydrationWarning
      />
    <div className="flex flex-col">
      {/* Breadcrumbs */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-6">
        <Breadcrumbs />
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-emerald-500/5 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center rounded-full bg-emerald-500/10 px-4 py-2 mb-6 border border-emerald-500/20">
              <TrendingUp className="h-5 w-5 text-emerald-600 mr-2" />
              <span className="text-sm font-medium text-emerald-600">Guía de Inversiones</span>
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl text-balance">
              Comienza a <span className="text-emerald-600">invertir tu dinero</span>
            </h1>
            <p className="mt-8 text-xl leading-8 text-muted-foreground text-pretty">
              Aprende a hacer crecer tu dinero con inversiones inteligentes. Desde fondos indexados hasta acciones,
              explora todas tus opciones.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="#opciones">Ver Opciones</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/blog/invertir-primeros-pasos">Primeros Pasos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer legal + Divulgación de afiliados */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-8 space-y-3">
        <div className="flex gap-3 rounded-lg border border-amber-500/30 bg-amber-500/5 p-4 text-sm text-amber-700 dark:text-amber-400">
          <span className="shrink-0 mt-0.5">⚠️</span>
          <p>
            <strong>Contenido exclusivamente educativo.</strong> La información de esta página no constituye
            asesoramiento financiero personalizado. Antes de tomar decisiones de inversión, consulta con un asesor
            financiero autorizado y registrado en la CNMV.
          </p>
        </div>
        <AffiliateDisclosure />
      </div>

      {/* Why Invest Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-emerald-500">
              <CardHeader>
                <CardTitle className="text-lg">Combate Inflación</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                3% inflación anual erosiona tu dinero. Invertir a 7%+ mantiene tu poder adquisitivo.
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="text-lg">Crecimiento Exponencial</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                200€/mes × 20 años @ 8% = 89.000€+. El tiempo es tu mejor inversor.
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="text-lg">Libertad Financiera</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Invierte ahora, retírate antes. Tu dinero trabaja para ti mientras duermes.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Options */}
      <section id="opciones" className="py-16 sm:py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground">Opciones de Inversión</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Cada inversión tiene riesgo, retorno y complejidad diferentes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {investmentOptions.map((option) => {
              const Icon = option.icon
              return (
                <Card key={option.title} className="hover:shadow-lg transition-all overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{option.title}</CardTitle>
                          <CardDescription>{option.description}</CardDescription>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Risk & Returns */}
                    <div className="grid grid-cols-2 gap-4 py-3 border-y border-foreground/10">
                      <div>
                        <p className="text-xs font-semibold text-primary mb-1">RIESGO</p>
                        <p className="text-sm font-medium text-foreground">{option.riskLevel}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-primary mb-1">RETORNO ESPERADO</p>
                        <p className="text-sm font-medium text-emerald-600">{option.returns}</p>
                      </div>
                    </div>

                    {/* Min Investment */}
                    <div>
                      <p className="text-xs font-semibold text-primary mb-1">MÍNIMO PARA EMPEZAR</p>
                      <p className="text-sm text-muted-foreground">{option.minInvestment}</p>
                    </div>

                    {/* Pros & Cons */}
                    <div className="space-y-2">
                      <div>
                        <p className="text-xs font-semibold text-primary mb-2">VENTAJAS</p>
                        <ul className="space-y-1">
                          {option.pros.map((pro) => (
                            <li key={pro} className="text-xs text-muted-foreground flex items-center gap-2">
                              <CheckCircle2 className="h-3 w-3 text-green-600 flex-shrink-0" />
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-primary mb-2">DESVENTAJAS</p>
                        <ul className="space-y-1">
                          {option.cons.map((con) => (
                            <li key={con} className="text-xs text-muted-foreground flex items-center gap-2">
                              <AlertCircle className="h-3 w-3 text-amber-600 flex-shrink-0" />
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Button className="w-full mt-4" asChild>
                      <Link href={option.article}>Aprender Más</Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* AdSense */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AdSense slot="1562571362" />
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground">Comparativa Rápida</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Visualiza las diferencias entre opciones de inversión
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-foreground/10">
                  <th className="px-4 py-3 text-left font-semibold text-foreground">Factor</th>
                  <th className="px-4 py-3 text-left font-semibold text-emerald-600">Fondos Indexados</th>
                  <th className="px-4 py-3 text-left font-semibold text-blue-600">ETFs</th>
                  <th className="px-4 py-3 text-left font-semibold text-purple-600">Acciones</th>
                  <th className="px-4 py-3 text-left font-semibold text-amber-600">Bonos</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((row) => (
                  <tr key={row.factor} className="border-b border-foreground/5 hover:bg-muted/50 transition-colors">
                    <td className="px-4 py-3 font-medium text-foreground">{row.factor}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.fondos}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.etfs}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.acciones}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.bonos}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Investment Tips */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground">6 Tips para Principiantes</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Consejos que evitarán tus errores costosos
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {investmentTips.map((tip) => {
              const Icon = tip.icon
              return (
                <Card key={tip.title} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 flex gap-4">
                    <Icon className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{tip.title}</h3>
                      <p className="text-sm text-muted-foreground">{tip.description}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Investment Path */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground">Tu Ruta de Inversión</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Etapas reales para convertirte en inversor
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {investmentPath.map((item, idx) => (
              <div key={item.phase} className="relative">
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white text-sm font-bold">
                        {idx + 1}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-primary">{item.phase}</p>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold text-primary mb-1">DURACIÓN</p>
                      <p className="text-sm text-muted-foreground">{item.duration}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-primary mb-1">ENFOQUE</p>
                      <p className="text-sm text-muted-foreground">{item.focus}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-primary mb-1">ACCIÓN</p>
                      <p className="text-sm font-medium text-foreground">{item.action}</p>
                    </div>
                    <div className="pt-2 border-t border-foreground/10">
                      <p className="text-xs font-semibold text-emerald-600">💰 {item.investment}</p>
                    </div>
                  </CardContent>
                </Card>
                {idx < investmentPath.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-1 bg-emerald-200 z-10 transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AdSense */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AdSense slot="9249489692" format="horizontal" />
        </div>
      </section>

      {/* Artículos Relacionados */}
      <CategoryArticles
        category="Inversiones"
        title="Artículos sobre Inversiones"
        subtitle="Guías completas para convertirte en inversor"
        tags={["inversiones", "fondos indexados", "ETFs", "acciones", "bolsa", "bonos"]}
      />

      {/* FAQ Section */}
      <FAQSection
        title="Preguntas Frecuentes sobre Inversiones"
        subtitle="Las dudas más comunes de quienes empiezan a invertir"
        faqs={inversionesFAQs}
      />

      {/* CTA Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-lg bg-gradient-to-r from-emerald-600/20 via-emerald-600/10 to-transparent border border-emerald-600/30 p-8 md:p-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-foreground mb-4">¿Listo para invertir?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                No necesitas mucho dinero para empezar. Fondos indexados desde 100€ son suficientes. El mejor momento
                para invertir fue ayer. El segundo mejor es hoy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/blog/invertir-primeros-pasos">Primeros Pasos</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/calculadoras/interes-compuesto">Calcular Crecimiento</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
