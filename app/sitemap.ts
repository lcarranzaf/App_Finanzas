import { blogPosts } from "@/lib/blog-data"
import { getAllAuthors } from "@/lib/authors-data"
import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.finanzasdigitales.es"

  // Nota: /privacidad y /terminos tienen noindex → no deben estar en el sitemap
  const staticPages = [
    { path: "", date: "2026-02-01" },
    { path: "/blog", date: "2026-03-01" },
    { path: "/ahorro", date: "2026-02-01" },
    { path: "/inversiones", date: "2026-02-01" },
    { path: "/jovenes", date: "2026-02-01" },
    { path: "/recursos", date: "2026-03-06" },
    { path: "/calculadoras", date: "2026-03-16" },
    { path: "/calculadoras/interes-compuesto", date: "2026-03-16" },
    { path: "/calculadoras/meta-ahorro", date: "2026-03-16" },
    { path: "/calculadoras/pago-deuda", date: "2026-03-16" },
    { path: "/calculadoras/divisas", date: "2026-03-16" },
    { path: "/sobre-nosotros", date: "2026-03-06" },
    { path: "/contacto", date: "2026-02-01" },
  ]

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
  }))

  const staticEntries = staticPages.map(({ path, date }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(date),
  }))

  const authorEntries = getAllAuthors().map((author) => ({
    url: `${baseUrl}/autores/${author.slug}`,
    lastModified: new Date("2026-03-06"),
  }))

  return [...staticEntries, ...blogPages, ...authorEntries]
}