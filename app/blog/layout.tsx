import type React from "react"
import type { Metadata } from "next"
import { getBlogPosts } from "@/lib/blog-data"

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
  const posts = getBlogPosts()

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Blog de Finanzas Personales",
    description: "Artículos sobre ahorro, inversión y libertad financiera en español",
    url: "https://www.finanzasdigitales.es/blog",
    numberOfItems: posts.length,
    itemListElement: posts.slice(0, 10).map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://www.finanzasdigitales.es/blog/${post.slug}`,
      name: post.title,
    })),
  }

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://www.finanzasdigitales.es/blog#blog",
    name: "Blog de FinanzasPro",
    description: "Artículos sobre ahorro, inversiones y educación financiera en español.",
    url: "https://www.finanzasdigitales.es/blog",
    inLanguage: "es",
    publisher: {
      "@type": "Organization",
      "@id": "https://www.finanzasdigitales.es/#organization",
      name: "FinanzasPro",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
        suppressHydrationWarning
      />
      {children}
    </>
  )
}
