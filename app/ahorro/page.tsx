import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PiggyBank, Target, Calculator, TrendingUp, Shield } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Estrategias de Ahorro - Guías y Consejos Prácticos",
  description:
    "Aprende a ahorrar dinero con estrategias probadas. Desde la regla 50/30/20 hasta fondos de emergencia y metas financieras.",
  keywords: "ahorro, estrategias ahorro, fondo emergencia, presupuesto, finanzas personales",
}

export default function AhorroPage() {
  const strategies = [
    {
      title: "La Regla 50/30/20",
      description: "Divide tus ingresos: 50% necesidades, 30% deseos, 20% ahorros",
      icon: Calculator,
      link: "/blog/como-empezar-ahorrar-poco-dinero",
    },
    {
      title: "Fondo de Emergencia",
      description: "Construye un colchón financiero para imprevistos",
      icon: Shield,
      link: "/blog/como-empezar-ahorrar-poco-dinero",
    },
    {
      title: "Ahorro Automático",
      description: "Configura transferencias automáticas para ahorrar sin pensar",
      icon: Target,
      link: "/blog/como-empezar-ahorrar-poco-dinero",
    },
    {
      title: "Metas de Ahorro",
      description: "Define objetivos claros y alcanzables para mantener la motivación",
      icon: TrendingUp,
      link: "/blog/como-empezar-ahorrar-poco-dinero",
    },
  ]

  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <PiggyBank className="mx-auto h-16 w-16 text-primary mb-6" />
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Estrategias de Ahorro</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Descubre técnicas probadas para ahorrar dinero, construir un fondo de emergencia y alcanzar tus metas
            financieras paso a paso.
          </p>
        </div>

        {/* Strategies Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {strategies.map((strategy) => {
            const Icon = strategy.icon
            return (
              <Card key={strategy.title} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{strategy.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-4">{strategy.description}</CardDescription>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={strategy.link}>Aprender más</Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Featured Article */}
        <div className="mt-16 rounded-lg bg-primary/5 p-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground">Artículo Destacado</h2>
            <h3 className="mt-4 text-xl font-semibold text-primary">Cómo empezar a ahorrar con poco dinero</h3>
            <p className="mt-4 text-muted-foreground">
              Descubre cómo ahorrar $50 al mes puede transformar tu futuro financiero. Estrategias prácticas para crear
              un fondo de emergencia desde cero.
            </p>
            <Button className="mt-6" asChild>
              <Link href="/blog/como-empezar-ahorrar-poco-dinero">Leer Artículo Completo</Link>
            </Button>
          </div>
        </div>

        {/* AdSense Placeholder */}
        <div className="mt-16">
          <div className="bg-muted/30 border-2 border-dashed border-border rounded-lg p-6 text-center">
            <p className="text-sm text-muted-foreground">Espacio reservado para Google AdSense</p>
            <p className="text-xs text-muted-foreground mt-1">Banner - 728x90</p>
          </div>
        </div>
      </div>
    </div>
  )
}
