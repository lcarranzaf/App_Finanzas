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

export const metadata: Metadata = {
  title: "Guía de Inversiones - Comienza a Invertir tu Dinero",
  description:
    "Aprende a invertir desde cero. Fondos indexados, ETFs, acciones y bonos explicados de manera simple. Estrategias para principiantes.",
  keywords: "inversiones, fondos indexados, ETFs, acciones, bolsa, inversión principiantes",
}

export default function InversionesPage() {
  const investmentOptions = [
    {
      title: "Fondos Indexados",
      riskLevel: "Bajo-Medio",
      returns: "7-10% anual",
      minInvestment: "$100-500",
      description: "Replican índices de mercado como el S&P 500",
      pros: ["Diversificación automática", "Bajas comisiones", "Pasivo y automático"],
      cons: ["Retornos modestos", "Requiere paciencia"],
      icon: BarChart3,
      article: "/blog/invertir-fondos-indexados-principiantes",
    },
    {
      title: "ETFs",
      riskLevel: "Bajo-Medio",
      returns: "6-12% anual",
      minInvestment: "$100+",
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
      minInvestment: "$50-200",
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
      minInvestment: "$50-1000",
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
      description: "$1,000-2,000 debe estar en efectivo o ahorro antes de invertir en bolsa.",
    },
    {
      icon: CheckCircle2,
      title: "Entiende tu riesgo",
      description: "Si necesitas el dinero en 5 años: menos riesgo. Si no lo necesitas en 20 años: más riesgo está bien.",
    },
    {
      icon: CheckCircle2,
      title: "Diversifica siempre",
      description: "No pongas todo en una inversión. Reparte entre fondos, ETFs y acciones.",
    },
    {
      icon: CheckCircle2,
      title: "Compra y mantén",
      description: "El trading frecuente pierde dinero. Invierte a largo plazo y evita emociones.",
    },
    {
      icon: CheckCircle2,
      title: "Automatiza aportaciones",
      description: "Invierte $100/mes automáticamente. Es más efectivo que lump sums irregulares.",
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
      fondos: "$100-500",
      etfs: "$100+",
      acciones: "$50+",
      bonos: "$50+",
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
      investment: "$0",
    },
    {
      phase: "Fase 2",
      title: "Fondos Indexados",
      duration: "6-12 meses",
      focus: "Construir cartera de bajo riesgo",
      action: "Invierte $100/mes en S&P 500",
      investment: "$600-1,200",
    },
    {
      phase: "Fase 3",
      title: "Diversificar",
      duration: "1-2 años",
      focus: "Agregar ETFs y bonos",
      action: "70% fondos, 20% ETFs, 10% bonos",
      investment: "$2,000-5,000",
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

  return (
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
                $200/mes × 20 años @ 8% = $89,000+. El tiempo es tu mejor inversor.
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

      {/* CTA Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-lg bg-gradient-to-r from-emerald-600/20 via-emerald-600/10 to-transparent border border-emerald-600/30 p-8 md:p-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-foreground mb-4">¿Listo para invertir?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                No necesitas mucho dinero para empezar. Fondos indexados desde $100 son suficientes. El mejor momento
                para invertir fue ayer. El segundo mejor es hoy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/blog/invertir-primeros-pasos">Primeros Pasos</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/proyecciones">Calcular Crecimiento</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
