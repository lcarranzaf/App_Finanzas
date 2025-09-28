import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, BarChart3, DollarSign, Shield } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Guía de Inversiones - ETFs, Fondos Indexados y Acciones",
  description:
    "Aprende a invertir en fondos indexados, ETFs y acciones. Estrategias de Warren Buffett y consejos para principiantes.",
  keywords: "inversiones, fondos indexados, ETF, S&P 500, acciones, bolsa, Warren Buffett",
}

export default function InversionesPage() {
  const investmentTypes = [
    {
      title: "Fondos Indexados",
      description: "La estrategia favorita de Warren Buffett para inversores pasivos",
      icon: BarChart3,
      link: "/blog/invertir-fondos-indexados-principiantes",
      examples: ["S&P 500", "MSCI World", "FTSE Developed Europe"],
    },
    {
      title: "ETFs",
      description: "Fondos cotizados con alta liquidez y bajas comisiones",
      icon: TrendingUp,
      link: "/blog/invertir-fondos-indexados-principiantes",
      examples: ["VOO", "VTI", "VXUS"],
    },
    {
      title: "Acciones Individuales",
      description: "Inversión directa en empresas específicas",
      icon: DollarSign,
      link: "/blog/invertir-fondos-indexados-principiantes",
      examples: ["Apple", "Microsoft", "Amazon"],
    },
    {
      title: "Bonos",
      description: "Inversiones de renta fija para diversificar el portfolio",
      icon: Shield,
      link: "/blog/invertir-fondos-indexados-principiantes",
      examples: ["Bonos del Tesoro", "Bonos corporativos", "BND"],
    },
  ]

  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <TrendingUp className="mx-auto h-16 w-16 text-primary mb-6" />
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Guía de Inversiones</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Aprende a invertir de forma inteligente con estrategias probadas. Desde fondos indexados hasta acciones
            individuales.
          </p>
        </div>

        {/* Investment Types */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {investmentTypes.map((type) => {
            const Icon = type.icon
            return (
              <Card key={type.title} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{type.description}</CardDescription>
                  <div className="space-y-1 text-xs text-muted-foreground mb-4">
                    <p className="font-medium">Ejemplos:</p>
                    {type.examples.map((example) => (
                      <p key={example}>• {example}</p>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                    <Link href={type.link}>Aprender más</Link>
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
            <h3 className="mt-4 text-xl font-semibold text-primary">
              Invertir en fondos indexados: Guía para principiantes
            </h3>
            <p className="mt-4 text-muted-foreground">
              Todo lo que necesitas saber sobre S&P 500, MSCI World y cómo empezar a invertir con solo $100. La
              estrategia de Warren Buffett explicada paso a paso.
            </p>
            <Button className="mt-6" asChild>
              <Link href="/blog/invertir-fondos-indexados-principiantes">Leer Guía Completa</Link>
            </Button>
          </div>
        </div>

        {/* Brokers Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">Brokers Recomendados</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>eToro</CardTitle>
                <CardDescription>Ideal para principiantes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Copy trading y 0% comisión en acciones</p>
                <Button className="w-full" asChild>
                  <Link href="/recursos#brokers" target="_blank">
                    Ver eToro
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Interactive Brokers</CardTitle>
                <CardDescription>Para inversores avanzados</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Acceso global y comisiones ultra bajas</p>
                <Button className="w-full" asChild>
                  <Link href="/recursos#brokers" target="_blank">
                    Ver IBKR
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Degiro</CardTitle>
                <CardDescription>Popular en Europa</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">ETFs gratuitos y regulación europea</p>
                <Button className="w-full" asChild>
                  <Link href="/recursos#brokers" target="_blank">
                    Ver Degiro
                  </Link>
                </Button>
              </CardContent>
            </Card>
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
