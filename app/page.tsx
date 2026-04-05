import type { Metadata } from "next"
import HomePageClient from "./page-client"

export const metadata: Metadata = {
  title: "Finanzas Personales en España 2026 - Guías Gratuitas de Ahorro e Inversión",
  description:
    "Aprende a ahorrar e invertir con guías prácticas en español. Fondos indexados, ETFs, presupuesto 50/30/20 y estrategias para España. Gratis y sin letra pequeña.",
  alternates: {
    canonical: "https://www.finanzasdigitales.es",
  },
}

export default function HomePage() {
  return <HomePageClient />
}
