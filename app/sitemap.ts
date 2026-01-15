import { blogPosts } from "@/lib/blog-data"
import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://app-finanzas-mu.vercel.app"

  const staticPages = [
    { path: "", priority: 1.0, frequency: "weekly" as const },
    { path: "/blog", priority: 0.9, frequency: "daily" as const },
    { path: "/ahorro", priority: 0.8, frequency: "weekly" as const },
    { path: "/inversiones", priority: 0.8, frequency: "weekly" as const },
    { path: "/jovenes", priority: 0.8, frequency: "weekly" as const },
    { path: "/recursos", priority: 0.7, frequency: "monthly" as const },
    { path: "/proyecciones", priority: 0.7, frequency: "monthly" as const },
    { path: "/sobre-nosotros", priority: 0.6, frequency: "monthly" as const },
    { path: "/contacto", priority: 0.5, frequency: "monthly" as const },
    { path: "/privacidad", priority: 0.3, frequency: "yearly" as const },
    { path: "/newsletter", priority: 0.6, frequency: "monthly" as const },
    { path: "/proyecciones-ingresos", priority: 0.7, frequency: "monthly" as const },
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

  const staticEntries = staticPages.map(({ path, priority, frequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: frequency,
    priority,
  }))

  return [...staticEntries, ...blogPages]
}