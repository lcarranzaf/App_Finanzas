import type React from "react"
import type { Metadata } from "next"
import { getBlogPosts } from "@/lib/blog-data"

export const metadata: Metadata = {
  title: "Blog de Finanzas Personales",
  description:
    "Artículos expertos sobre ahorro, inversión, ETFs y libertad financiera en español. Guías prácticas para mejorar tu situación financiera.",
  alternates: {
    canonical: "https://app-finanzas-mu.vercel.app/blog",
  },
  openGraph: {
    url: "https://app-finanzas-mu.vercel.app/blog",
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
    url: "https://app-finanzas-mu.vercel.app/blog",
    numberOfItems: posts.length,
    itemListElement: posts.slice(0, 10).map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://app-finanzas-mu.vercel.app/blog/${post.slug}`,
      name: post.title,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        suppressHydrationWarning
      />
      {children}
    </>
  )
}
