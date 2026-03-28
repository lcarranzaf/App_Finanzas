import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog de Finanzas Personales",
  description:
    "Artículos expertos sobre ahorro, inversión, ETFs y libertad financiera en español. Guías prácticas para mejorar tu situación financiera.",
  openGraph: {
    url: "https://www.finanzasdigitales.es/blog",
    title: "Blog de Finanzas Personales | FinanzasPro",
    description:
      "Artículos expertos sobre ahorro, inversión, ETFs y libertad financiera en español.",
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
