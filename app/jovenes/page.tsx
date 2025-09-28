import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Briefcase, Home, Car } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Finanzas para Jóvenes - Guía Completa para Estudiantes",
  description:
    "Consejos financieros específicos para jóvenes, estudiantes y recién graduados. Aprende a manejar tu primer sueldo y planificar tu futuro.",
  keywords: "finanzas jóvenes, estudiantes, primer sueldo, recién graduados, planificación financiera",
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

  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
