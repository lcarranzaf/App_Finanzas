import { getBlogPosts } from "@/lib/blog-data"
import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://finanzaspro.com"

  // Static pages
  const staticPages = [
    "",
    "/ahorro",
    "/inversiones",
    "/jovenes",
    "/blog",
    "/recursos",
    "/proyecciones",
    "/contacto",
    "/sobre-nosotros",
    "/privacidad",
    "/newsletter",
  ]

  // Blog posts
  const blogPosts = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  // Static pages
  const staticEntries = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: page === "" ? 1.0 : 0.8,
  }))

  return [...staticEntries, ...blogPosts]
}