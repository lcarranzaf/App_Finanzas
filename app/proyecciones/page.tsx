import ProjectionCalculator from "@/components/projection-calculator"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Calculadora de Proyecciones de Inversión - FinanzasPro",
  description: "Calcula cómo crecerán tus inversiones con el interés compuesto. Herramienta interactiva gratuita para proyecciones financieras y planificación de retiro.",
  keywords: ["calculadora inversiones", "proyecciones financieras", "interés compuesto", "rentabilidad", "inversión", "planificación retiro", "fondos indexados"],
}

export default function ProyeccionesPage() {
  return <ProjectionCalculator />
}
