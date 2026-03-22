import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PiggyBank, Target, Calculator, Zap, CheckCircle2 } from "lucide-react"
import type { Metadata } from "next"
import AdSense from "@/components/AdSense"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { FAQSection, type FAQItem } from "@/components/faq-section"
import { CategoryArticles } from "@/components/category-articles"

export const metadata: Metadata = {
  title: `Estrategias de Ahorro ${new Date().getFullYear()} - Métodos Probados para Ahorrar Dinero`,
  description:
    "Descubre cómo ahorrar dinero con el método 50/30/20, ahorro automático y el reto 52 semanas. Guía paso a paso para crear tu fondo de emergencia desde cero, incluso con ingresos bajos.",
  keywords: ["ahorro", "cómo ahorrar dinero", "método 50/30/20", "fondo de emergencia", "presupuesto personal", "estrategias de ahorro", "reto 52 semanas", "finanzas personales"],
  alternates: {
    canonical: "https://www.finanzasdigitales.es/ahorro",
  },
}

export default function AhorroPage() {
  const ahorroPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.finanzasdigitales.es/ahorro",
    name: "Estrategias de Ahorro - FinanzasPro",
    description:
      "Descubre cómo ahorrar dinero con el método 50/30/20, ahorro automático y el reto 52 semanas.",
    url: "https://www.finanzasdigitales.es/ahorro",
    inLanguage: "es",
    isPartOf: { "@id": "https://www.finanzasdigitales.es/#website" },
  }

  const savingMethods = [
    {
      title: "Método 50/30/20",
      icon: Calculator,
      description: "Divide tus ingresos en tres categorías",
      details: "50% necesidades, 30% deseos, 20% ahorros",
      benefit: "Fácil de implementar",
      color: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
    },
    {
      title: "Ahorro Automático",
      icon: Zap,
      description: "Configura transferencias el día de pago",
      details: "El dinero se ahorra antes de que lo veas",
      benefit: "No requiere disciplina",
      color: "bg-green-500/10",
      borderColor: "border-green-500/30",
    },
    {
      title: "Reto 52 Semanas",
      icon: Target,
      description: "Ahorra de forma progresiva cada semana",
      details: "Semana 1: $1, Semana 52: $52 = $1,378 total",
      benefit: "Gamificado y motivador",
      color: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
    },
    {
      title: "Presupuesto de Categorías",
      icon: PiggyBank,
      description: "Asigna límites a cada gasto",
      details: "Comida: $400, Entretenimiento: $100, etc.",
      benefit: "Control total de gastos",
      color: "bg-orange-500/10",
      borderColor: "border-orange-500/30",
    },
  ]

  const savingTips = [
    {
      icon: CheckCircle2,
      title: "Empieza pequeño",
      description: "No necesitas ahorrar mucho. Comienza con $20-50/mes. Lo importante es el hábito.",
    },
    {
      icon: CheckCircle2,
      title: "Automatiza todo",
      description: "Configura transferencias automáticas. Es más fácil ahorrar si no tienes que pensar en ello.",
    },
    {
      icon: CheckCircle2,
      title: "Reduce gastos pequeños",
      description: "Café diario ($4) = $120/mes. Esos pequeños gastos suman rápido.",
    },
    {
      icon: CheckCircle2,
      title: "Crea un fondo de emergencia",
      description: "Meta: $1,000-2,000. Evita usar deuda cuando surjan imprevistos.",
    },
    {
      icon: CheckCircle2,
      title: "Celebra milestones",
      description: "Primer $100, $500, $1,000. Cada hito merece reconocimiento.",
    },
    {
      icon: CheckCircle2,
      title: "No sacrifiques calidad de vida",
      description: "Ahorro inteligente ≠ austeridad. Busca balance, no privación.",
    },
  ]

  const progressStages = [
    {
      stage: "Mes 1-3",
      goal: "Crear el hábito",
      action: "Ahorra $50-100/mes automáticamente",
      milestone: "$300 acumulado",
    },
    {
      stage: "Mes 4-6",
      goal: "Fondo de emergencia básico",
      action: "Continúa ahorros automáticos",
      milestone: "$1,000 acumulado",
    },
    {
      stage: "Mes 7-12",
      goal: "Fondo de emergencia completo",
      action: "Aumenta a $150-200/mes si es posible",
      milestone: "$2,000 acumulado",
    },
    {
      stage: "Año 2+",
      goal: "Inversión y crecimiento",
      action: "Invierte en fondos indexados",
      milestone: "Crecimiento del 7-10% anual",
    },
  ]

  const ahorroFAQs: FAQItem[] = [
    {
      question: "¿Cuánto dinero debo ahorrar cada mes?",
      answer: "La regla general es ahorrar al menos el 20% de tus ingresos netos. Si ganas $2,000 al mes, intenta ahorrar $400. Sin embargo, si estás empezando, incluso $50-100 al mes es un excelente comienzo. Lo más importante es crear el hábito de ahorro consistente.",
    },
    {
      question: "¿Qué es un fondo de emergencia y cuánto necesito?",
      answer: "Un fondo de emergencia es dinero reservado para gastos inesperados como reparaciones del auto, facturas médicas o pérdida de empleo. Se recomienda tener entre 3 y 6 meses de gastos básicos. Para empezar, una meta de $1,000-2,000 es suficiente para cubrir la mayoría de emergencias menores.",
    },
    {
      question: "¿Cuál es el mejor método de ahorro para principiantes?",
      answer: "El método 50/30/20 es ideal para principiantes: destina 50% de tus ingresos a necesidades, 30% a deseos y 20% a ahorro. Combínalo con ahorro automático (transferencias programadas el día de pago) para que el dinero se ahorre antes de que lo veas.",
    },
    {
      question: "¿Dónde debo guardar mis ahorros?",
      answer: "Para tu fondo de emergencia, usa una cuenta de ahorros de alto rendimiento que ofrezca fácil acceso. Para ahorros a largo plazo (más de 1 año), considera certificados de depósito (CDs) o fondos del mercado monetario que ofrecen mejores tasas de interés.",
    },
    {
      question: "¿Cómo puedo ahorrar si gano poco dinero?",
      answer: "Empieza con montos pequeños: incluso $10-20 semanales suman $520-1,040 al año. Revisa tus suscripciones, reduce gastos hormiga (café diario, comida fuera), y busca ingresos extra. El reto de las 52 semanas es excelente para empezar poco a poco e ir incrementando.",
    },
    {
      question: "¿Ahorro o pago deudas primero?",
      answer: "Primero ahorra un mini fondo de emergencia de $500-1,000. Luego enfócate en pagar deudas con tasas de interés altas (tarjetas de crédito). Una vez eliminadas las deudas de alto interés, construye tu fondo de emergencia completo de 3-6 meses de gastos.",
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ahorroPageSchema) }}
        suppressHydrationWarning
      />
    <div className="flex flex-col">
      {/* Breadcrumbs */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-6">
        <Breadcrumbs />
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-blue-500/5 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center rounded-full bg-blue-500/10 px-4 py-2 mb-6 border border-blue-500/20">
              <PiggyBank className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-blue-600">Guía de Ahorro</span>
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl text-balance">
              Construye riqueza <span className="text-blue-600">ahorrando dinero</span>
            </h1>
            <p className="mt-8 text-xl leading-8 text-muted-foreground text-pretty">
              El ahorro es el primer paso hacia la libertad financiera. Aprende técnicas prácticas para empezar a
              ahorrar sin sacrificar tu calidad de vida.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="#metodos">Explorar Métodos</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/blog/presupuesto-personal-completo">Ver Presupuesto</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Save Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="text-lg">Tu Futuro Depende</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Ahorrar hoy significa tener opciones mañana. Viajes, educación, casa, retiro: todo comienza con ahorros.
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="text-lg">Poder del Tiempo</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                $100/mes × 10 años @ 7% = $18,000+. El tiempo magnifica tus ahorros exponencialmente.
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="text-lg">Paz Mental</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Un fondo de emergencia elimina estrés. Dormir sin preocupaciones es priceless.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Saving Methods */}
      <section id="metodos" className="py-16 sm:py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground">Métodos de Ahorro</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Elige el método que mejor se adapte a tu estilo de vida
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {savingMethods.map((method) => {
              const Icon = method.icon
              return (
                <Card key={method.title} className={`${method.color} border-0 hover:shadow-lg transition-all`}>
                  <CardHeader className="text-center pb-3">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-white/50 backdrop-blur">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-lg mt-4">{method.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm font-medium text-foreground">{method.description}</p>
                    <p className="text-sm text-muted-foreground">{method.details}</p>
                    <div className="pt-2 border-t border-foreground/10">
                      <p className="text-xs font-semibold text-primary">✨ {method.benefit}</p>
                    </div>
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
          <AdSense slot="7561827917" format="horizontal" />
        </div>
      </section>

      {/* Saving Tips */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground">6 Tips Prácticos</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Consejos que funcionan en la vida real
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {savingTips.map((tip) => {
              const Icon = tip.icon
              return (
                <Card key={tip.title} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 flex gap-4">
                    <Icon className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
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

      {/* Progress Timeline */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground">Tu Ruta de Ahorro</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Etapas realistas para empezar desde cero
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {progressStages.map((item, idx) => (
              <div key={item.stage} className="relative">
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-bold">
                        {idx + 1}
                      </div>
                      <CardTitle className="text-lg">{item.stage}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold text-primary mb-1">META</p>
                      <p className="text-sm font-medium text-foreground">{item.goal}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-primary mb-1">ACCIÓN</p>
                      <p className="text-sm text-muted-foreground">{item.action}</p>
                    </div>
                    <div className="pt-2 border-t border-foreground/10">
                      <p className="text-xs font-semibold text-green-600">🎯 {item.milestone}</p>
                    </div>
                  </CardContent>
                </Card>
                {idx < progressStages.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-1 bg-blue-200 z-10 transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AdSense */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AdSense slot="5745358955" format="horizontal" />
        </div>
      </section>

      {/* Artículos Relacionados */}
      <CategoryArticles
        category="Ahorro"
        title="Artículos sobre Ahorro"
        subtitle="Profundiza con nuestras guías y consejos prácticos"
        tags={["ahorro", "presupuesto", "fondo de emergencia", "gastos"]}
      />

      {/* FAQ Section */}
      <FAQSection
        title="Preguntas Frecuentes sobre Ahorro"
        subtitle="Resolvemos las dudas más comunes sobre cómo empezar a ahorrar"
        faqs={ahorroFAQs}
      />

      {/* CTA Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-lg bg-gradient-to-r from-blue-600/20 via-blue-600/10 to-transparent border border-blue-600/30 p-8 md:p-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-foreground mb-4">¿Listo para empezar a ahorrar?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                No necesitas ser perfecto, solo necesitas empezar. Descubre cómo crear un presupuesto realista y
                automatizar tus ahorros.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/blog/presupuesto-personal-completo">Crear Presupuesto</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/proyecciones">Calcular Proyecciones</Link>
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
