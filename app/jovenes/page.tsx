import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Briefcase, Home, Car } from "lucide-react"
import type { Metadata } from "next"
import AdSense from "@/components/AdSense"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { FAQSection, type FAQItem } from "@/components/faq-section"
import { CategoryArticles } from "@/components/category-articles"

export const metadata: Metadata = {
  title: "Finanzas para Jóvenes 2025 - Guía para Estudiantes y Primer Sueldo",
  description:
    "Guía financiera completa para jóvenes, estudiantes y recién graduados. Aprende a manejar tu primer sueldo con la regla 50/30/20, construir historial crediticio y empezar a invertir desde $50 al mes.",
  keywords: ["finanzas para jóvenes", "primer sueldo", "estudiantes universitarios", "recién graduados", "cómo ahorrar siendo joven", "historial crediticio", "inversión jóvenes"],
  alternates: {
    canonical: "https://app-finanzas-mu.vercel.app/jovenes",
  },
}

export default function JovenesPage() {
  const lifeStages = [
    {
      title: "Estudiante Universitario",
      description: "Gestiona tu presupuesto estudiantil y evita deudas innecesarias",
      icon: GraduationCap,
      tips: [
        "Usa apps gratuitas para presupuesto",
        "Evita tarjetas de crédito hasta tener ingresos estables",
        "Busca trabajos de medio tiempo",
        "Aprovecha descuentos estudiantiles",
      ],
    },
    {
      title: "Primer Trabajo",
      description: "Cómo manejar tu primer sueldo de forma inteligente",
      icon: Briefcase,
      tips: [
        "Aplica la regla 50/30/20",
        "Abre tu primera cuenta de ahorros",
        "Comienza a construir historial crediticio",
        "Invierte aunque sea $50 mensuales",
      ],
    },
    {
      title: "Independencia",
      description: "Planifica tu mudanza y gastos de vivienda",
      icon: Home,
      tips: [
        "Calcula todos los gastos de vivienda",
        "Mantén un fondo de emergencia",
        "Considera roommates para reducir costos",
        "Negocia tu salario regularmente",
      ],
    },
    {
      title: "Grandes Compras",
      description: "Estrategias para auto, casa y otros objetivos importantes",
      icon: Car,
      tips: [
        "Ahorra el 20% de enganche",
        "Compara opciones de financiamiento",
        "Considera autos usados certificados",
        "No comprometas más del 28% de ingresos en vivienda",
      ],
    },
  ]

  const jovenesFAQs: FAQItem[] = [
    {
      question: "¿A qué edad debo empezar a ahorrar e invertir?",
      answer: "Lo ideal es empezar lo antes posible, incluso desde los 18 años. Si inviertes $100 mensuales desde los 20 años al 7% anual, tendrás más de $400,000 a los 65. Si empiezas a los 30, tendrás menos de $200,000. Cada año que esperas tiene un costo significativo por el efecto del interés compuesto.",
    },
    {
      question: "¿Cómo manejar mi primer sueldo correctamente?",
      answer: "Aplica la regla 50/30/20: destina 50% a gastos esenciales (renta, comida, transporte), 30% a gastos personales (entretenimiento, ropa) y 20% a ahorro e inversión. Automatiza las transferencias de ahorro el mismo día que recibes tu pago para no gastar ese dinero.",
    },
    {
      question: "¿Necesito una tarjeta de crédito siendo joven?",
      answer: "Tener una tarjeta de crédito es útil para construir historial crediticio, que necesitarás para alquilar un departamento, comprar auto o casa. La clave es usarla responsablemente: gasta solo lo que puedes pagar completo cada mes y nunca la uses como extensión de tu ingreso.",
    },
    {
      question: "¿Cuánto debo tener ahorrado a los 25 años?",
      answer: "Una meta razonable es tener un fondo de emergencia de 3 meses de gastos ($3,000-6,000 según tu situación) y haber comenzado a invertir aunque sea pequeñas cantidades. No te compares con otros: lo importante es tener el hábito establecido y una dirección clara.",
    },
    {
      question: "¿Debería pagar mis préstamos estudiantiles rápido o invertir?",
      answer: "Depende de la tasa de interés. Si tus préstamos tienen tasas superiores al 6-7%, prioriza pagarlos. Si las tasas son bajas (3-4%), puedes hacer pagos mínimos e invertir el resto, ya que el mercado históricamente rinde 7-10% anual. Siempre ten un fondo de emergencia primero.",
    },
    {
      question: "¿Cómo puedo generar ingresos extra siendo estudiante?",
      answer: "Hay muchas opciones: freelancing en plataformas como Fiverr o Upwork, tutorías, trabajo de medio tiempo, venta de productos en línea, creación de contenido digital, o trabajos en campus universitario. Busca opciones que complementen tus estudios y te den experiencia profesional.",
    },
  ]

  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs />

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <GraduationCap className="mx-auto h-16 w-16 text-primary mb-6" />
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Finanzas para Jóvenes</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Guía completa para estudiantes y jóvenes profesionales. Aprende a manejar tu dinero desde el primer día.
          </p>
        </div>

        {/* Life Stages */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {lifeStages.map((stage) => {
            const Icon = stage.icon
            return (
              <Card key={stage.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle>{stage.title}</CardTitle>
                      <CardDescription>{stage.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {stage.tips.map((tip) => (
                      <li key={tip} className="flex items-start gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Educational Content Section */}
        <section className="mt-16">
          <div className="mx-auto max-w-4xl">
            <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-li:text-foreground space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Por qué las finanzas personales importan cuando eres joven</h2>
                <p className="text-muted-foreground leading-7">
                  Los hábitos financieros que desarrollas en tus 20s y 30s determinan en gran medida tu futuro económico. 
                  Cada decisión que tomas ahora tiene un impacto exponencial debido al poder del interés compuesto y el tiempo. 
                  Si empiezas a invertir $100 mensuales a los 20 años con un rendimiento del 7% anual, tendrás más de $400,000 
                  a los 65 años. Si esperas hasta los 30 para empezar, tendrás menos de $200,000. Esa diferencia de 10 años 
                  cuesta más de $200,000 en tu futuro.
                </p>
                <p className="text-muted-foreground leading-7 mt-4">
                  Además, los jóvenes tienen ventajas únicas: tiempo a su favor, capacidad de recuperación de errores, y 
                  flexibilidad para tomar riesgos calculados. Aprovechar estas ventajas requiere conocimiento y acción temprana.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Construyendo tu base financiera: Los fundamentos</h3>
                <p className="text-muted-foreground leading-7">
                  Antes de pensar en inversiones complejas o estrategias avanzadas, necesitas construir una base sólida. 
                  Esto incluye:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-7 mt-4">
                  <li><strong>Presupuesto funcional:</strong> No tiene que ser complicado. Usa una app como Mint o YNAB, 
                  o simplemente una hoja de cálculo. Lo importante es saber a dónde va tu dinero cada mes.</li>
                  <li><strong>Fondo de emergencia:</strong> Tu primer objetivo debe ser ahorrar $1,000-2,000. Esto te 
                  protege de usar tarjetas de crédito para emergencias menores como reparaciones de auto o facturas médicas inesperadas.</li>
                  <li><strong>Historial crediticio:</strong> Si no tienes historial crediticio, considera una tarjeta de 
                  crédito asegurada o una tarjeta estudiantil. Úsala responsablemente (paga el saldo completo cada mes) 
                  para construir un buen score crediticio que te abrirá puertas en el futuro.</li>
                  <li><strong>Educación continua:</strong> Dedica 15-30 minutos semanales a leer sobre finanzas personales. 
                  Los conocimientos que adquieres ahora te servirán durante toda tu vida.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Inversión para jóvenes: Por qué empezar temprano es crucial</h3>
                <p className="text-muted-foreground leading-7">
                  Muchos jóvenes piensan que necesitan mucho dinero para empezar a invertir, pero eso es un mito. Puedes 
                  comenzar con tan solo $50-100 mensuales en fondos indexados. La clave es la consistencia, no la cantidad 
                  inicial. Incluso si solo puedes invertir $50 al mes, en 10 años con un rendimiento del 7% tendrás más de 
                  $8,000. Si aumentas a $100 mensuales, tendrás más de $16,000.
                </p>
                <p className="text-muted-foreground leading-7 mt-4">
                  Como joven, puedes permitirte tomar más riesgos porque tienes tiempo para recuperarte de las caídas del 
                  mercado. Esto significa que puedes tener una cartera más agresiva (90% acciones, 10% bonos) comparado con 
                  alguien que está cerca del retiro. Los fondos indexados de bajo costo como VOO (S&P 500) o VTI (Total Stock 
                  Market) son excelentes opciones para comenzar.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Errores financieros comunes de los jóvenes</h3>
                <p className="text-muted-foreground leading-7">
                  Aprender de los errores de otros es más barato que cometerlos tú mismo. Estos son los errores más comunes 
                  que vemos en jóvenes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-7 mt-4">
                  <li><strong>Vivir al límite de tus ingresos:</strong> Si gastas todo lo que ganas, nunca construirás 
                  riqueza. Aprende a vivir con menos de lo que ganas desde el principio.</li>
                  <li><strong>Ignorar las deudas estudiantiles:</strong> Si tienes préstamos estudiantiles, no los ignores. 
                  Crea un plan de pago agresivo. Cada dólar que pagas en intereses es dinero que no está trabajando para ti.</li>
                  <li><strong>No invertir porque &ldquo;no sabes&rdquo;:</strong> La mejor manera de aprender es haciendo. Empieza con 
                  pequeñas cantidades en fondos indexados mientras aprendes. No necesitas ser un experto para comenzar.</li>
                  <li><strong>Compararse con otros:</strong> Las redes sociales muestran estilos de vida que muchas veces 
                  están financiados por deudas. Enfócate en tu propio progreso financiero, no en aparentar riqueza.</li>
                   <li><strong>No negociar tu salario:</strong> Cada aumento de &quot;$5,000&quot; anuales que negocies a los 25 años
                  puede valer más de $500,000 en ingresos adicionales durante tu carrera. Aprende a negociar desde el principio.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Start Guide */}
        <div className="mt-16 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 p-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground">Guía de Inicio Rápido</h2>
            <p className="mt-4 text-muted-foreground">
              Los 5 pasos esenciales para jóvenes que empiezan con las finanzas
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-5 text-left">
              {[
                "Abre una cuenta de ahorros",
                "Descarga una app de presupuesto",
                "Aprende sobre inversiones básicas",
                "Construye tu historial crediticio",
                "Define tus metas financieras",
              ].map((step, index) => (
                <div key={step} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    {index + 1}
                  </div>
                  <p className="text-sm">{step}</p>
                </div>
              ))}
            </div>

            <Button className="mt-8" asChild>
              <Link href="/blog">Ver Artículos para Jóvenes</Link>
            </Button>
          </div>
        </div>

        {/* Resources for Young People */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">Recursos Especiales para Jóvenes</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Apps Gratuitas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Mint, YNAB (descuento estudiante), Acorns</p>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/recursos">Ver Apps</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tarjetas Estudiantiles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Construye historial crediticio responsablemente</p>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/blog/usar-tarjeta-credito-sin-endeudarse">Aprender Más</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Inversión con Poco Dinero</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Empieza a invertir con solo $1-5</p>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/blog/invertir-fondos-indexados-principiantes">Ver Guía</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* AdSense */}
        <div className="mt-16">
          <AdSense slot="9249489692" format="horizontal" />
        </div>
      </div>

      {/* Artículos Relacionados */}
      <CategoryArticles
        category="Planificación"
        title="Artículos para Jóvenes"
        subtitle="Contenido especial para quienes están empezando"
        tags={["jóvenes", "primer sueldo", "ahorro", "presupuesto", "inversión principiantes", "tarjeta de crédito"]}
      />

      {/* FAQ Section */}
      <FAQSection
        title="Preguntas Frecuentes para Jóvenes"
        subtitle="Dudas comunes sobre finanzas cuando estás empezando"
        faqs={jovenesFAQs}
      />
    </div>
  )
}
