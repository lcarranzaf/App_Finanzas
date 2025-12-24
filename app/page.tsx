import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, PiggyBank, Target, BookOpen, Users, Shield } from "lucide-react"

export default function HomePage() {
  const features = [
    {
      icon: PiggyBank,
      title: "Estrategias de Ahorro",
      description: "Aprende técnicas probadas para ahorrar dinero sin sacrificar tu calidad de vida.",
      href: "/ahorro",
    },
    {
      icon: TrendingUp,
      title: "Inversiones Inteligentes",
      description: "Descubre cómo invertir en fondos indexados, ETFs y acciones de forma segura.",
      href: "/inversiones",
    },
    {
      icon: Target,
      title: "Planificación Financiera",
      description: "Crea un plan financiero sólido para alcanzar tus metas a corto y largo plazo.",
      href: "/blog",
    },
    {
      icon: BookOpen,
      title: "Educación Financiera",
      description: "Artículos y guías completas para mejorar tu conocimiento financiero.",
      href: "/blog",
    },
    {
      icon: Users,
      title: "Para Jóvenes",
      description: "Consejos específicos para estudiantes y jóvenes profesionales.",
      href: "/jovenes",
    },
    {
      icon: Shield,
      title: "Información Confiable",
      description: "Contenido respaldado por expertos y ejemplos del mundo real.",
      href: "/sobre-nosotros",
    },
  ]

  const stats = [
    { value: "100%", label: "Contenido Original" },
    { value: "Gratis", label: "Educación Accesible" },
    { value: "2025", label: "Actualizado Continuamente" },
    { value: "Real", label: "Ejemplos Verificables" },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-background to-muted/30 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-8">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
                Nuevo: Guía de Inversiones 2025
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-balance">
              Construye tu <span className="text-primary">Futuro Financiero</span> con Confianza
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Aprende a ahorrar, invertir y gestionar tu dinero con estrategias probadas. Desde fondos indexados hasta
              presupuestos personales, te guiamos paso a paso hacia la libertad financiera.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/blog">Comenzar Ahora</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/sobre-nosotros">Conoce Más</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Confiado por miles de personas
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Educación financiera honesta y confiable para mejorar tus decisiones de dinero
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col bg-muted/50 p-8">
                  <dt className="text-sm font-semibold leading-6 text-muted-foreground">{stat.label}</dt>
                  <dd className="order-first text-3xl font-bold tracking-tight text-foreground">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Todo lo que necesitas para triunfar financieramente
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Desde conceptos básicos hasta estrategias avanzadas de inversión
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <Card key={feature.title} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-7">{feature.description}</CardDescription>
                      <Button variant="ghost" className="mt-4 p-0 h-auto" asChild>
                        <Link href={feature.href}>Explorar →</Link>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Educational Content Section */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                ¿Por qué la educación financiera es fundamental?
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Comprender tus finanzas personales es el primer paso hacia la libertad económica
              </p>
            </div>

            <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-li:text-foreground space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">El problema de la falta de educación financiera</h3>
                <p className="text-muted-foreground leading-7">
                  Según estudios recientes, más del 60% de las personas no tienen conocimientos básicos sobre finanzas personales.
                  Esto se traduce en decisiones financieras costosas, deudas innecesarias y oportunidades perdidas de crecimiento patrimonial.
                  La mayoría de las personas aprenden sobre dinero por prueba y error, lo cual puede resultar en errores costosos que afectan
                  su futuro financiero durante años.
                </p>
                <p className="text-muted-foreground leading-7 mt-4">
                  En FinanzasPro, creemos que todos merecen acceso a educación financiera de calidad, sin importar su nivel de ingresos
                  o conocimientos previos. Nuestro objetivo es simplificar conceptos complejos y proporcionar estrategias prácticas que
                  cualquier persona pueda implementar inmediatamente.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Los tres pilares de la libertad financiera</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">1. Ahorro Inteligente</h4>
                    <p className="text-muted-foreground leading-7">
                      Ahorrar dinero no se trata solo de guardar lo que sobra al final del mes. Se trata de crear un sistema
                      que funcione para ti. La regla 50/30/20 es un punto de partida excelente: destina el 50% de tus ingresos
                      a necesidades esenciales, el 30% a deseos y estilo de vida, y el 20% a ahorros e inversiones. Sin embargo,
                      cada situación es única, y aprender a adaptar estas proporciones a tu realidad es clave.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">2. Inversión Consistente</h4>
                    <p className="text-muted-foreground leading-7">
                      Invertir no es solo para los ricos. Con herramientas modernas como fondos indexados y ETFs, puedes
                      comenzar a invertir con tan solo $100. El secreto no está en elegir la acción perfecta, sino en la
                      consistencia y el tiempo. El interés compuesto es la octava maravilla del mundo, y cuando lo entiendes,
                      cambia completamente tu perspectiva sobre el dinero. Invertir $200 mensuales durante 30 años con un
                      rendimiento del 7% anual puede generar más de $240,000, de los cuales solo $72,000 serían tus aportaciones.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">3. Gestión de Deudas</h4>
                    <p className="text-muted-foreground leading-7">
                      Las deudas pueden ser tu mayor obstáculo o una herramienta estratégica, dependiendo de cómo las uses.
                      Las deudas de alto interés (como tarjetas de crédito al 20%+) destruyen tu patrimonio rápidamente.
                      Por otro lado, deudas de bajo interés (como hipotecas al 3-5%) pueden ser parte de una estrategia
                      financiera sólida. La clave está en entender la diferencia y priorizar el pago de deudas costosas
                      mientras inviertes simultáneamente cuando las tasas son bajas.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Cómo empezar tu viaje financiero</h3>
                <p className="text-muted-foreground leading-7">
                  No necesitas ser un experto en finanzas para comenzar. El primer paso es simplemente empezar. Aquí tienes
                  un plan de acción de 30 días:
                </p>
                <ol className="list-decimal list-inside space-y-3 text-muted-foreground leading-7 mt-4">
                  <li><strong>Semana 1:</strong> Calcula tu patrimonio neto actual (activos - pasivos) y crea un presupuesto básico
                    registrando todos tus gastos durante una semana.</li>
                  <li><strong>Semana 2:</strong> Identifica áreas donde puedes reducir gastos sin sacrificar calidad de vida.
                    Pequeños cambios como preparar café en casa o cancelar suscripciones no utilizadas pueden liberar $100-300 mensuales.</li>
                  <li><strong>Semana 3:</strong> Abre una cuenta de ahorros de alto rendimiento y configura una transferencia
                    automática del 10-20% de tus ingresos. Automatizar es clave porque elimina la necesidad de tomar decisiones
                    cada mes.</li>
                  <li><strong>Semana 4:</strong> Investiga opciones de inversión básicas. Lee sobre fondos indexados y ETFs.
                    No necesitas invertir todavía, solo educarte. El conocimiento es tu mejor inversión inicial.</li>
                </ol>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Errores comunes que debes evitar</h3>
                <p className="text-muted-foreground leading-7">
                  Aprender de los errores de otros es más barato que cometerlos tú mismo. Estos son los errores más costosos
                  que vemos una y otra vez:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-7 mt-4">
                  <li><strong>Esperar el momento perfecto:</strong> No existe. El mejor momento para empezar a ahorrar e invertir
                    fue ayer. El segundo mejor momento es hoy.</li>
                  <li><strong>No tener un fondo de emergencia:</strong> Sin al menos $1,000-2,000 en efectivo, cualquier
                    imprevisto te obligará a usar tarjetas de crédito o préstamos costosos.</li>
                  <li><strong>Intentar hacer timing del mercado:</strong> Incluso los profesionales no pueden predecir
                    cuándo subirá o bajará el mercado. La estrategia ganadora es invertir consistentemente sin importar
                    las condiciones del mercado.</li>
                  <li><strong>Ignorar las comisiones:</strong> Una comisión del 2% anual puede costarte decenas de miles
                    de dólares a lo largo de 30 años. Siempre busca opciones de bajo costo como fondos indexados con comisiones
                    menores al 0.2%.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              ¿Listo para transformar tus finanzas?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              Explora nuestros artículos y guías para mejorar tu educación financiera y alcanzar tus metas económicas.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="/blog">Explorar Artículos</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/recursos">Ver Recursos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AdSense Placeholder */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="bg-muted/30 border-2 border-dashed border-border rounded-lg p-8 text-center">
              <p className="text-sm text-muted-foreground">Espacio reservado para Google AdSense</p>
              <p className="text-xs text-muted-foreground mt-1">Banner superior - 728x90</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
