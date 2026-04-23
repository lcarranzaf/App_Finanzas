import type { Metadata } from "next"
import { getBlogPosts, getBlogSearchPosts } from "@/lib/blog-data"
import BlogPostsGrid from "./_components/blog-posts-grid"

const BASE_BLOG_URL = "https://www.finanzasdigitales.es/blog"

const BASE_URL = "https://www.finanzasdigitales.es"
const POSTS_PER_PAGE = 6

interface Props {
  searchParams: { page?: string; category?: string }
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const page = Math.max(1, Number(searchParams?.page) || 1)
  const category = searchParams?.category || null
  const validCategories = new Set(getBlogPosts().map((post) => post.category))
  const hasValidCategory = category ? validCategories.has(category) : true

  // Canonical nunca incluye ?category= (evita duplicados) — solo paginación
  const canonicalParams = new URLSearchParams()
  if (page > 1) canonicalParams.set("page", String(page))
  const canonical = canonicalParams.toString() ? `${BASE_URL}/blog?${canonicalParams.toString()}` : `${BASE_URL}/blog`

  if (!hasValidCategory) {
    return {
      title: "Blog de Finanzas Personales",
      alternates: { canonical: `${BASE_URL}/blog` },
      robots: { index: false, follow: true },
    }
  }

  const categoryDescriptions: Record<string, string> = {
    "Ahorro": "Técnicas y estrategias de ahorro para España: método 50/30/20, fondos de emergencia y hábitos para ahorrar más cada mes.",
    "Inversiones": "Guías de inversión para principiantes en España: fondos indexados, ETFs, interés compuesto y cómo empezar con poco dinero.",
    "Inflación": "Todo sobre la inflación en España: causas, consecuencias y cómo proteger tu dinero e inversiones ante la subida de precios.",
    "Criptomonedas": "Guías sobre criptomonedas para principiantes: cómo invertir de forma segura, riesgos y las mejores estrategias en 2026.",
    "Tecnología": "Finanzas y tecnología: cómo usar la IA y las herramientas digitales para mejorar tu gestión financiera personal.",
    "Vivienda": "Claves sobre vivienda en España: alquilar o comprar, hipotecas, inversión inmobiliaria fraccionada y más.",
  }

  const title = category
    ? page > 1
      ? `${category} - Página ${page} | Blog de Finanzas`
      : `Artículos de ${category} 2026 - Guías Prácticas | Finanzas Digitales`
    : page > 1
      ? `Blog de Finanzas - Página ${page} | Finanzas Digitales`
      : "Blog de Finanzas Personales 2026 - Ahorro, Inversión y Presupuesto"

  const description = category
    ? categoryDescriptions[category] ?? `Artículos sobre ${category} en español. Guías prácticas y actualizadas para mejorar tus finanzas personales en España.`
    : "Artículos de finanzas personales en español: cómo ahorrar, invertir en fondos indexados, crear un presupuesto y alcanzar la libertad financiera en España."

  return {
    title,
    description,
    alternates: { canonical },
    robots: page > 1 || !!category ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Finanzas Digitales",
      locale: "es_ES",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  }
}

export default function BlogPage({ searchParams }: Props) {
  const page = Math.max(1, Number(searchParams?.page) || 1)
  const selectedCategory = searchParams?.category || null

  const allPosts = getBlogPosts()
  const searchPosts = getBlogSearchPosts()

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Blog de Finanzas Personales",
    description: "Artículos sobre ahorro, inversión y libertad financiera en español",
    url: BASE_BLOG_URL,
    numberOfItems: allPosts.length,
    itemListElement: allPosts.slice(0, 10).map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${BASE_BLOG_URL}/${post.slug}`,
      name: post.title,
    })),
  }

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${BASE_BLOG_URL}#blog`,
    name: "Blog de Finanzas Digitales",
    description: "Artículos sobre ahorro, inversiones y educación financiera en español.",
    url: BASE_BLOG_URL,
    inLanguage: "es",
    publisher: {
      "@type": "Organization",
      "@id": "https://www.finanzasdigitales.es/#organization",
      name: "Finanzas Digitales",
    },
  }
  const categories = Array.from(new Set(allPosts.map((p) => p.category)))

  const filteredPosts = selectedCategory
    ? allPosts.filter((p) => p.category === selectedCategory)
    : allPosts

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const safePage = Math.min(page, totalPages || 1)
  const paginatedPosts = filteredPosts.slice((safePage - 1) * POSTS_PER_PAGE, safePage * POSTS_PER_PAGE)

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.finanzasdigitales.es" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.finanzasdigitales.es/blog" },
          ],
        }) }}
        suppressHydrationWarning
      />
      <BlogPostsGrid
        paginatedPosts={paginatedPosts}
        categories={categories}
        selectedCategory={selectedCategory}
        currentPage={safePage}
        totalPages={totalPages}
        filteredCount={filteredPosts.length}
        searchPosts={searchPosts}
      />
    </>
  )
}
