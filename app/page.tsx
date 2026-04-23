import type { Metadata } from "next"
import HomePageClient from "./page-client"
import StructuredData from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Finanzas Personales en España — Ahorra e Invierte Gratis",
  description:
    "Aprende a ahorrar e invertir con guías prácticas en español. Fondos indexados, ETFs, presupuesto 50/30/20 y estrategias para España. Gratis y sin letra pequeña.",
  alternates: {
    canonical: "https://www.finanzasdigitales.es",
  },
}

export default function HomePage() {
  return (
    <>
      <StructuredData type="breadcrumbs" data={{
        breadcrumbs: [{ name: "Inicio", url: "https://www.finanzasdigitales.es" }]
      }} />
      <HomePageClient />
    </>
  )
}
