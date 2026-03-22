import type { Metadata } from "next"
import Link from "next/link"
import { Calculator, PiggyBank, CreditCard, TrendingUp, ArrowLeftRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: `Calculadoras Financieras Gratuitas ${new Date().getFullYear()} | FinanzasPro`,
  description:
    "Calculadoras financieras interactivas: interés compuesto, meta de ahorro y pago de deuda. Simula tus finanzas y toma mejores decisiones económicas.",
  keywords: [
    "calculadora financiera",
    "calculadora ahorro",
    "calculadora deuda",
    "calculadora interés compuesto",
    "herramientas financieras",
    "simulador financiero",
  ],
  alternates: {
    canonical: "https://www.finanzasdigitales.es/calculadoras",
  },
}

const calculators = [
  {
    title: "Calculadora de Interés Compuesto",
    description:
      "Visualiza cómo crece tu inversión con el interés compuesto. Simula aportes mensuales y diferentes tasas de retorno a lo largo del tiempo.",
    href: "/proyecciones",
    icon: TrendingUp,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    tag: "Inversiones",
  },
  {
    title: "Calculadora de Meta de Ahorro",
    description:
      "¿Cuánto necesitas ahorrar por mes para alcanzar tu meta? Calcula el tiempo exacto y el total de aportes necesarios según tu tasa de interés.",
    href: "/calculadoras/meta-ahorro",
    icon: PiggyBank,
    color: "text-green-500",
    bg: "bg-green-500/10",
    tag: "Ahorro",
  },
  {
    title: "Calculadora de Pago de Deuda",
    description:
      "Descubre en cuántos meses pagarás tu deuda y cuánto ahorras pagando más del mínimo. Incluye tabla de amortización mensual detallada.",
    href: "/calculadoras/pago-deuda",
    icon: CreditCard,
    color: "text-red-500",
    bg: "bg-red-500/10",
    tag: "Deuda",
  },
  {
    title: "Convertidor de Divisas",
    description:
      "Convierte entre pesos, dólares, euros y más de 20 monedas latinoamericanas y mundiales con tipos de cambio actualizados en tiempo real.",
    href: "/calculadoras/divisas",
    icon: ArrowLeftRight,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
    tag: "Divisas",
  },
]

export default function CalculadorasPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Calculadoras Financieras Gratuitas",
    description:
      "Calculadoras financieras interactivas para planificar tu ahorro, inversiones y pago de deudas.",
    url: "https://www.finanzasdigitales.es/calculadoras",
    inLanguage: "es",
    publisher: {
      "@type": "Organization",
      "@id": "https://www.finanzasdigitales.es/#organization",
      name: "FinanzasPro",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-background via-background to-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Calculator className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Calculadoras Financieras Gratuitas
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Herramientas interactivas para simular tus inversiones, planificar tu ahorro y liquidar
              tus deudas más rápido. Sin registros, sin costo.
            </p>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumbs
            customItems={[
              { label: "Inicio", href: "/" },
              { label: "Calculadoras", href: "/calculadoras", isActive: true },
            ]}
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {calculators.map((calc) => (
              <Card key={calc.href} className="flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${calc.bg} mb-3`}>
                    <calc.icon className={`h-6 w-6 ${calc.color}`} />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {calc.tag}
                  </span>
                  <CardTitle className="mt-1 text-xl">{calc.title}</CardTitle>
                  <CardDescription className="leading-6">{calc.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <Button asChild className="w-full">
                    <Link href={calc.href}>Abrir calculadora</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
