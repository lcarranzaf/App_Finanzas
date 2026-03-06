import dynamic from "next/dynamic"
import type { Metadata } from "next"
import { Calculator } from "lucide-react"

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
  title: `Calculadora de Proyecciones de Inversión ${new Date().getFullYear()} - Interés Compuesto`,
  description: "Calcula gratis cómo crecerán tus inversiones con el interés compuesto. Simula aportes mensuales, tasas de retorno y plazos. Herramienta interactiva para planificar tu retiro y metas financieras.",
  keywords: ["calculadora inversiones", "interés compuesto calculadora", "proyecciones financieras", "simulador inversión", "planificación retiro", "calculadora ahorro"],
  alternates: {
    canonical: "https://app-finanzas-mu.vercel.app/proyecciones",
  },
}

export default function ProyeccionesPage() {
  return (
    <>
      {/* Header renderizado en el servidor para SEO */}
      <section className="bg-gradient-to-br from-background via-background to-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Calculator className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Calculadora de Proyecciones de Inversión
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Visualiza cómo pueden crecer tus inversiones a lo largo del tiempo con nuestro calculador interactivo.
              Ajusta los parámetros y descubre el poder del interés compuesto.
            </p>
          </div>
        </div>
      </section>
      <ProjectionCalculator />
      {/* Tabla estática para motores de búsqueda sin JavaScript */}
      <noscript>
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Ejemplos de proyecciones de inversión</h2>
          <p className="text-muted-foreground mb-6">
            La calculadora interactiva requiere JavaScript. A continuación te mostramos algunos ejemplos
            de cómo puede crecer una inversión inicial de $10,000 con aportaciones mensuales de $200.
          </p>
          <table className="w-full border-collapse border border-border text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="border border-border px-4 py-2 text-left">Años</th>
                <th className="border border-border px-4 py-2 text-right">Retorno 5%/año</th>
                <th className="border border-border px-4 py-2 text-right">Retorno 8%/año</th>
                <th className="border border-border px-4 py-2 text-right">Retorno 10%/año</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border px-4 py-2">5 años</td>
                <td className="border border-border px-4 py-2 text-right">$26,413</td>
                <td className="border border-border px-4 py-2 text-right">$28,234</td>
                <td className="border border-border px-4 py-2 text-right">$29,523</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">10 años</td>
                <td className="border border-border px-4 py-2 text-right">$47,240</td>
                <td className="border border-border px-4 py-2 text-right">$56,731</td>
                <td className="border border-border px-4 py-2 text-right">$64,003</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">20 años</td>
                <td className="border border-border px-4 py-2 text-right">$98,894</td>
                <td className="border border-border px-4 py-2 text-right">$148,268</td>
                <td className="border border-border px-4 py-2 text-right">$196,694</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">30 años</td>
                <td className="border border-border px-4 py-2 text-right">$181,892</td>
                <td className="border border-border px-4 py-2 text-right">$347,097</td>
                <td className="border border-border px-4 py-2 text-right">$536,049</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-muted-foreground mt-4">
            * Cálculos aproximados con interés compuesto anual. No constituyen asesoramiento financiero.
          </p>
        </div>
      </noscript>
    </>
  )
}
