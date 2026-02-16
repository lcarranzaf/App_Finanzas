import dynamic from "next/dynamic"
import type { Metadata } from "next"

const ProjectionCalculator = dynamic(
  () => import("@/components/projection-calculator"),
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
  title: "Calculadora de Proyecciones de Inversión 2025 - Interés Compuesto",
  description: "Calcula gratis cómo crecerán tus inversiones con el interés compuesto. Simula aportes mensuales, tasas de retorno y plazos. Herramienta interactiva para planificar tu retiro y metas financieras.",
  keywords: ["calculadora inversiones", "interés compuesto calculadora", "proyecciones financieras", "simulador inversión", "planificación retiro", "calculadora ahorro"],
  alternates: {
    canonical: "https://app-finanzas-mu.vercel.app/proyecciones",
  },
}

export default function ProyeccionesPage() {
  return <ProjectionCalculator />
}
