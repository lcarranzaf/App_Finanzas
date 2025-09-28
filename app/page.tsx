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
    { value: "50K+", label: "Lectores mensuales" },
    { value: "200+", label: "Artículos publicados" },
    { value: "95%", label: "Satisfacción de usuarios" },
    { value: "3 años", label: "De experiencia" },
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
                Únete a nuestra comunidad de lectores que han transformado sus finanzas
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
