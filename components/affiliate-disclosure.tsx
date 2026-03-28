import { Info } from "lucide-react"

export function AffiliateDisclosure() {
  return (
    <div className="flex gap-3 rounded-lg border border-blue-500/20 bg-blue-500/5 p-4 text-sm text-blue-700 dark:text-blue-400">
      <Info className="h-4 w-4 flex-shrink-0 mt-0.5" />
      <p>
        <strong>Divulgación:</strong> Algunos enlaces de esta página son de afiliados. Si contratas un producto
        a través de ellos, podríamos recibir una pequeña comisión sin coste adicional para ti. Esto nos ayuda
        a mantener el sitio gratuito. Nuestras opiniones son siempre independientes y basadas en análisis propio.
      </p>
    </div>
  )
}
