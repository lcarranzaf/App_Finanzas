import { blogPosts } from "@/lib/blog-data"
import { getAllAuthors } from "@/lib/authors-data"
import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.finanzasdigitales.es"

  // Nota: /privacidad y /terminos tienen noindex → no deben estar en el sitemap
  const staticPages = [
    { path: "", priority: 1.0, frequency: "weekly" as const, date: "2026-02-01" },
    { path: "/blog", priority: 0.9, frequency: "daily" as const, date: "2026-03-01" },
    { path: "/ahorro", priority: 0.8, frequency: "weekly" as const, date: "2026-02-01" },
    { path: "/inversiones", priority: 0.8, frequency: "weekly" as const, date: "2026-02-01" },
    { path: "/jovenes", priority: 0.8, frequency: "weekly" as const, date: "2026-02-01" },
    { path: "/recursos", priority: 0.7, frequency: "monthly" as const, date: "2026-03-06" },
    { path: "/calculadoras", priority: 0.8, frequency: "monthly" as const, date: "2026-03-16" },
    { path: "/calculadoras/interes-compuesto", priority: 0.7, frequency: "monthly" as const, date: "2026-03-16" },
    { path: "/calculadoras/meta-ahorro", priority: 0.7, frequency: "monthly" as const, date: "2026-03-16" },
    { path: "/calculadoras/pago-deuda", priority: 0.7, frequency: "monthly" as const, date: "2026-03-16" },
    { path: "/calculadoras/divisas", priority: 0.8, frequency: "daily" as const, date: "2026-03-16" },
    { path: "/sobre-nosotros", priority: 0.6, frequency: "monthly" as const, date: "2026-03-06" },
    { path: "/contacto", priority: 0.5, frequency: "monthly" as const, date: "2026-02-01" },
  ]

  const blogPages = blogPosts.map((post) => {
    const postDate = new Date(post.publishedAt)
    const daysSincePublished = (Date.now() - postDate.getTime()) / (1000 * 60 * 60 * 24)
    
    let priority = 0.7
    let changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never" = "monthly"
    
    if (daysSincePublished < 30) {
      priority = 0.9
      changeFrequency = "weekly"
    } else if (post.title.toLowerCase().includes('guía') || 
               post.title.toLowerCase().includes('completo') ||
               post.title.toLowerCase().includes('paso') ||
               post.title.toLowerCase().includes('cómo')) {
      priority = 0.8
      changeFrequency = "monthly"
    }
    
    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: postDate,
      changeFrequency,
      priority,
    }
  })

  const staticEntries = staticPages.map(({ path, priority, frequency, date }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(date),
    changeFrequency: frequency,
    priority,
  }))

  const authorEntries = getAllAuthors().map((author) => ({
    url: `${baseUrl}/autores/${author.slug}`,
    lastModified: new Date("2026-03-06"),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...staticEntries, ...blogPages, ...authorEntries]
}