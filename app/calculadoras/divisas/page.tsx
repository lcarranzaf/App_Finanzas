import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ArrowLeftRight } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

const CurrencyConverter = dynamic(
  () => import("@/components/currency-converter"),
  {
    loading: () => (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center space-y-4">
          <div className="h-10 w-10 mx-auto animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-muted-foreground">Cargando convertidor...</p>
        </div>
      </div>
    ),
    ssr: false,
  }
)

export const metadata: Metadata = {
  title: `Convertidor de Divisas ${new Date().getFullYear()} — Pesos, Dólares, Euros y más`,
  description:
    "Convierte entre pesos mexicanos, dólares, euros, pesos colombianos, pesos argentinos y 20+ monedas con tipos de cambio actualizados en tiempo real.",
  keywords: [
    "convertidor de divisas",
    "tipo de cambio",
    "pesos a dolares",
    "dolar a pesos mexicanos",
    "euro a peso",
    "calculadora monedas",
    "conversor de monedas",
    "tipo de cambio hoy",
  ],
  alternates: {
    canonical: "https://app-finanzas-mu.vercel.app/calculadoras/divisas",
  },
}

export default function DivisasPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-background via-background to-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <Breadcrumbs
              customItems={[
                { label: "Inicio", href: "/" },
                { label: "Calculadoras", href: "/calculadoras" },
                { label: "Divisas", href: "/calculadoras/divisas", isActive: true },
              ]}
            />
            <div className="mt-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500/10">
                  <ArrowLeftRight className="h-8 w-8 text-yellow-500" />
                </div>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                Convertidor de Divisas
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
                Convierte entre pesos, dólares, euros y más de 20 monedas con tipos de cambio
                actualizados cada hora.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CurrencyConverter />
    </>
  )
}
