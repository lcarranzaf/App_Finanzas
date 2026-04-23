import { blogPosts } from "@/lib/blog-data"
import { getAllAuthors } from "@/lib/authors-data"
import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.finanzasdigitales.es"

  const staticPages = [
    { path: "",                                    date: "2026-04-22", priority: 1.0,  changeFrequency: "weekly"  as const },
    { path: "/blog",                               date: "2026-04-22", priority: 0.9,  changeFrequency: "daily"   as const },
    { path: "/ahorro",                             date: "2026-04-21", priority: 0.8,  changeFrequency: "monthly" as const },
    { path: "/inversiones",                        date: "2026-04-21", priority: 0.8,  changeFrequency: "monthly" as const },
    { path: "/comparativas-espana-2026",          date: "2026-04-04", priority: 0.8,  changeFrequency: "weekly"  as const },
    { path: "/fondos-indexados",                            date: "2026-04-04", priority: 0.8,  changeFrequency: "monthly" as const },
    { path: "/mejores-planes-de-pensiones-espana",     date: "2026-04-21", priority: 0.8,  changeFrequency: "monthly" as const },
    { path: "/cuentas-remuneradas-espana",             date: "2026-04-04", priority: 0.8,  changeFrequency: "monthly" as const },
    { path: "/mejores-fondos-monetarios-espana",       date: "2026-04-04", priority: 0.8,  changeFrequency: "monthly" as const },
    { path: "/mejores-brokers-espana",                 date: "2026-04-21", priority: 0.8,  changeFrequency: "monthly" as const },
    { path: "/declaracion-renta-espana",               date: "2026-04-12", priority: 0.9,  changeFrequency: "monthly" as const },
    { path: "/mejores-etf-espana",                     date: "2026-04-12", priority: 0.8,  changeFrequency: "monthly" as const },
    { path: "/como-invertir-en-bolsa-espana",               date: "2026-04-12", priority: 0.8,  changeFrequency: "monthly" as const },
    { path: "/jovenes",                            date: "2026-04-21", priority: 0.7,  changeFrequency: "monthly" as const },
    { path: "/recursos",                           date: "2026-04-21", priority: 0.7,  changeFrequency: "monthly" as const },
    { path: "/calculadoras",                       date: "2026-04-21", priority: 0.8,  changeFrequency: "monthly" as const },
    { path: "/calculadoras/hipoteca",              date: "2026-04-21", priority: 0.9,  changeFrequency: "monthly" as const },
    { path: "/calculadoras/interes-compuesto",     date: "2026-04-21", priority: 0.8,  changeFrequency: "monthly" as const },
    { path: "/calculadoras/meta-ahorro",           date: "2026-04-21", priority: 0.7,  changeFrequency: "monthly" as const },
    { path: "/calculadoras/pago-deuda",            date: "2026-04-21", priority: 0.7,  changeFrequency: "monthly" as const },
    { path: "/calculadoras/divisas",               date: "2026-04-21", priority: 0.7,  changeFrequency: "monthly" as const },
    { path: "/sobre-nosotros",                     date: "2026-03-06", priority: 0.5,  changeFrequency: "yearly"  as const },
  ]

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }))

  const staticEntries = staticPages.map(({ path, date, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(date),
    priority,
    changeFrequency,
  }))

  const authorEntries = getAllAuthors().map((author) => ({
    url: `${baseUrl}/autores/${author.slug}`,
    lastModified: new Date("2026-03-06"),
    priority: 0.5,
    changeFrequency: "yearly" as const,
  }))

  return [...staticEntries, ...blogPages, ...authorEntries]
}
