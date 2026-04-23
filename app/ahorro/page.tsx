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
  title: `Cómo Ahorrar Dinero en España ${new Date().getFullYear()} - Métodos Probados y Fondo de Emergencia`,
  description:
    "Aprende a ahorrar en España con el método 50/30/20 y ahorro automático. Crea tu fondo de emergencia desde cero, incluso con ingresos bajos. Cuentas remuneradas y más.",
  keywords: ["cómo ahorrar dinero", "ahorro España", "método 50/30/20", "fondo de emergencia España", "estrategias ahorro", "reto 52 semanas", "cuentas remuneradas", "ahorrar con poco dinero", "finanzas personales España"],
  alternates: {
    canonical: "https://www.finanzasdigitales.es/ahorro",
  },
  openGraph: {
    title: "Cómo Ahorrar Dinero en España — Métodos Probados y Fondo de Emergencia",
    description: "Aprende a ahorrar dinero en España con el método 50/30/20, ahorro automático y el reto 52 semanas. Crea tu fondo de emergencia desde cero.",
    url: "https://www.finanzasdigitales.es/ahorro",
    type: "website",
    locale: "es_ES",
    siteName: "Finanzas Digitales",
  },
}

export default function AhorroPage() {
  const ahorroPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.finanzasdigitales.es/ahorro",
    name: "Estrategias de Ahorro - Finanzas Digitales",
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
      details: "Semana 1: 1€, Semana 52: 52€ = 1.378€ total",
      benefit: "Gamificado y motivador",
      color: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
    },
    {
      title: "Presupuesto de Categorías",
      icon: PiggyBank,
      description: "Asigna límites a cada gasto",
      details: "Comida: 400€, Entretenimiento: 100€, etc.",
      benefit: "Control total de gastos",
      color: "bg-orange-500/10",
      borderColor: "border-orange-500/30",
    },
  ]

  const savingTips = [
    {
      icon: CheckCircle2,
      title: "Empieza pequeño",
      description: "No necesitas ahorrar mucho. Comienza con 20-50€/mes. Lo importante es el hábito.",
    },
    {
      icon: CheckCircle2,
      title: "Automatiza todo",
      description: "Configura transferencias automáticas. Es más fácil ahorrar si no tienes que pensar en ello.",
    },
    {
      icon: CheckCircle2,
      title: "Reduce gastos pequeños",
      description: "Café diario (2-3€) = 60-90€/mes. Esos pequeños gastos suman rápido.",
    },
    {
      icon: CheckCircle2,
      title: "Crea un fondo de emergencia",
      description: "Meta: 1.000-2.000€. Evita usar deuda cuando surjan imprevistos.",
    },
    {
      icon: CheckCircle2,
      title: "Celebra milestones",
      description: "Primer €100, €500, €1.000. Cada hito merece reconocimiento.",
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
      action: "Ahorra 50-100€/mes automáticamente",
      milestone: "300€ acumulados",
    },
    {
      stage: "Mes 4-6",
      goal: "Fondo de emergencia básico",
      action: "Continúa ahorros automáticos",
      milestone: "1.000€ acumulados",
    },
    {
      stage: "Mes 7-12",
      goal: "Fondo de emergencia completo",
      action: "Aumenta a 150-200€/mes si es posible",
      milestone: "2.000€ acumulados",
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
      answer: "La regla general es ahorrar al menos el 20% de tus ingresos netos. Si ganas 2.000€ al mes, intenta ahorrar 400€. Sin embargo, si estás empezando, incluso 50-100€ al mes es un excelente comienzo. Lo más importante es crear el hábito de ahorro consistente.",
    },
    {
      question: "¿Qué es un fondo de emergencia y cuánto necesito?",
      answer: "Un fondo de emergencia es dinero reservado para gastos inesperados como reparaciones del coche, facturas o pérdida de empleo. Se recomienda tener entre 3 y 6 meses de gastos básicos. Para empezar, una meta de 1.000-2.000€ es suficiente para cubrir la mayoría de emergencias menores.",
    },
    {
      question: "¿Cuál es el mejor método de ahorro para principiantes?",
      answer: "El método 50/30/20 es ideal para principiantes: destina 50% de tus ingresos a necesidades, 30% a deseos y 20% a ahorro. Combínalo con ahorro automático (transferencias programadas el día de pago) para que el dinero se ahorre antes de que lo veas.",
    },
    {
      question: "¿Dónde debo guardar mis ahorros en España?",
      answer: "En 2026 tienes buenas opciones sin riesgo: para el fondo de emergencia, una cuenta remunerada (Trade Republic ofrece ~3% TAE con liquidez inmediata). Para ahorros a medio plazo, un fondo monetario en MyInvestor o Indexa Capital (~3-4% anual). Para plazos fijos, compara los depósitos de Sabadell, BBVA u Openbank. Evita dejar grandes cantidades en una cuenta corriente sin remuneración.",
    },
    {
      question: "¿Cómo puedo ahorrar si gano poco dinero?",
      answer: "Empieza con montos pequeños: incluso 10-20€ semanales suman 520-1.040€ al año. Revisa tus suscripciones, reduce gastos hormiga (café diario, comida fuera), y busca ingresos extra. El reto de las 52 semanas es excelente para empezar poco a poco e ir incrementando.",
    },
    {
      question: "¿Ahorro o pago deudas primero?",
      answer: "Primero ahorra un mini fondo de emergencia de 500-1.000€. Luego enfócate en pagar deudas con tasas de interés altas (tarjetas de crédito). Una vez eliminadas las deudas de alto interés, construye tu fondo de emergencia completo de 3-6 meses de gastos.",
    },
  ]

  const ahorroFAQSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ahorroFAQs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  }
  const ahorroFAQBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.finanzasdigitales.es" },
      { "@type": "ListItem", position: 2, name: "Ahorro", item: "https://www.finanzasdigitales.es/ahorro" },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ahorroPageSchema) }}
        suppressHydrationWarning
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ahorroFAQSchema) }} suppressHydrationWarning />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ahorroFAQBreadcrumb) }} suppressHydrationWarning />
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
              Cómo ahorrar dinero en España: <span className="text-blue-600">métodos que funcionan de verdad</span>
            </h1>
            <p className="mt-8 text-xl leading-8 text-muted-foreground text-pretty">
              Aprende a ahorrar con técnicas probadas y adaptadas al contexto español. Desde el método 50/30/20 hasta las mejores cuentas remuneradas, te guiamos paso a paso.
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
                100€/mes × 10 años @ 7% = 18.000€+. El tiempo magnifica tus ahorros exponencialmente.
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

      {/* Links a guías de ahorro */}
      <section className="py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Guías de ahorro e inversión en España</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/cuentas-remuneradas-espana"
              className="block p-5 rounded-xl border hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-colors"
            >
              <p className="font-semibold mb-1">Mejores cuentas remuneradas en España 2026</p>
              <p className="text-sm text-muted-foreground">Comparativa con TAE real, condiciones y alternativas para tu liquidez.</p>
            </Link>
            <Link
              href="/mejores-fondos-monetarios-espana"
              className="block p-5 rounded-xl border hover:border-blue-500/50 hover:bg-blue-500/5 transition-colors"
            >
              <p className="font-semibold mb-1">Mejores fondos monetarios en España 2026</p>
              <p className="text-sm text-muted-foreground">Alternativa fiscal a cuentas y depósitos para liquidez a medio plazo.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Artículos Relacionados */}
      <CategoryArticles
        category="Ahorro"
        title="Artículos sobre Ahorro"
        subtitle="Profundiza con nuestras guías y consejos prácticos"
        tags={["ahorro", "presupuesto", "fondo de emergencia", "gastos"]}
      />

      {/* Cuentas remuneradas - sección SEO */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                ¿Dónde guardar tus ahorros en España?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                En 2026 hay opciones que dan rentabilidad real sin riesgo para tu fondo de emergencia
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  tipo: "Cuenta remunerada",
                  ejemplo: "Trade Republic (3% TAE), Revolut, N26",
                  ventaja: "Acceso inmediato + rentabilidad",
                  para: "Fondo de emergencia (1-6 meses de gastos)",
                },
                {
                  tipo: "Fondo monetario",
                  ejemplo: "MyInvestor, Indexa Capital",
                  ventaja: "3-4% anual, sin riesgo real",
                  para: "Ahorro a corto plazo (0-12 meses)",
                },
                {
                  tipo: "Depósito a plazo",
                  ejemplo: "Banco Sabadell, BBVA, Openbank",
                  ventaja: "Tipo fijo garantizado",
                  para: "Ahorro comprometido (6-24 meses)",
                },
              ].map((opt) => (
                <div key={opt.tipo} className="rounded-xl border border-border bg-card p-5">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">{opt.tipo}</p>
                  <p className="font-semibold text-foreground mb-1">{opt.ejemplo}</p>
                  <p className="text-sm text-green-600 font-medium mb-3">✓ {opt.ventaja}</p>
                  <p className="text-xs text-muted-foreground">Ideal para: {opt.para}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground text-center">
              * Tipos de interés orientativos para 2026. Comprueba siempre las condiciones actuales antes de contratar.
            </p>
          </div>
        </div>
      </section>

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
                  <Link href="/calculadoras/interes-compuesto">Calcular Proyecciones</Link>
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
