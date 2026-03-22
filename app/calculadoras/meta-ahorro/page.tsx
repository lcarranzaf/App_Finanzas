import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { PiggyBank } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

const SavingsGoalCalculator = dynamic(
  () => import("@/components/savings-goal-calculator"),
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
  title: `Calculadora de Meta de Ahorro ${new Date().getFullYear()} — ¿Cuánto necesito ahorrar?`,
  description:
    "Calcula en cuánto tiempo alcanzarás tu meta de ahorro según tu aportación mensual y tasa de interés. Herramienta gratuita con tabla año a año.",
  keywords: [
    "calculadora meta ahorro",
    "cuánto necesito ahorrar",
    "calculadora ahorro mensual",
    "tiempo para ahorrar",
    "simulador ahorro",
    "meta financiera",
  ],
  alternates: {
    canonical: "https://www.finanzasdigitales.es/calculadoras/meta-ahorro",
  },
}

export default function MetaAhorroPage() {
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
                { label: "Meta de Ahorro", href: "/calculadoras/meta-ahorro", isActive: true },
              ]}
            />
            <div className="mt-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
                  <PiggyBank className="h-8 w-8 text-green-500" />
                </div>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                Calculadora de Meta de Ahorro
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
                Introduce tu meta, el ahorro inicial y la aportación mensual para saber exactamente
                cuándo llegarás a tu objetivo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SavingsGoalCalculator />
    </>
  )
}
