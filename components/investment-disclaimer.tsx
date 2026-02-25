import { AlertTriangle } from "lucide-react"

export function InvestmentDisclaimer() {
  return (
    <div className="my-6 flex gap-3 rounded-lg border border-amber-500/30 bg-amber-500/5 p-4">
      <AlertTriangle className="h-5 w-5 flex-shrink-0 text-amber-600 mt-0.5" />
      <p className="text-sm leading-6 text-muted-foreground">
        <strong className="text-foreground">Aviso legal:</strong> El contenido de este artículo es exclusivamente
        educativo e informativo. No constituye asesoramiento financiero, de inversión, fiscal ni legal. Toda
        inversión conlleva riesgos, incluyendo la posible pérdida del capital. Los rendimientos pasados no
        garantizan resultados futuros. Consulta con un asesor financiero profesional antes de tomar
        decisiones de inversión.
      </p>
    </div>
  )
}
