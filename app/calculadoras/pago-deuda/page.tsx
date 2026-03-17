import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { CreditCard } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

const DebtPayoffCalculator = dynamic(
  () => import("@/components/debt-payoff-calculator"),
  {
    loading: () => (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center space-y-4">
          <div className="h-10 w-10 mx-auto animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-muted-foreground">Cargando calculadora...</p>
        </div>
      </div>
    ),
    ssr: false,
  }
)

export const metadata: Metadata = {
  title: `Calculadora de Pago de Deuda ${new Date().getFullYear()} — ¿Cuándo liquidaré mi deuda?`,
  description:
    "Calcula en cuántos meses pagarás tu deuda y cuánto ahorras pagando más del mínimo. Tabla de amortización mensual gratis.",
  keywords: [
    "calculadora pago deuda",
    "calculadora deuda",
    "tabla amortización",
    "liquidar deuda",
    "cuándo termino de pagar mi deuda",
    "simulador deuda",
  ],
  alternates: {
    canonical: "https://app-finanzas-mu.vercel.app/calculadoras/pago-deuda",
  },
}

export default function PagoDeudaPage() {
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
                { label: "Pago de Deuda", href: "/calculadoras/pago-deuda", isActive: true },
              ]}
            />
            <div className="mt-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10">
                  <CreditCard className="h-8 w-8 text-red-500" />
                </div>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                Calculadora de Pago de Deuda
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
                Introduce el saldo de tu deuda, la tasa de interés y tu pago mensual para ver el plan
                de amortización completo y cuánto puedes ahorrar pagando más.
              </p>
            </div>
          </div>
        </div>
      </section>

      <DebtPayoffCalculator />
    </>
  )
}
