import type { Metadata } from "next"
import { getBlogPosts } from "@/lib/blog-data"
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

  const params = new URLSearchParams()
  if (category && hasValidCategory) params.set("category", category)
  if (page > 1) params.set("page", String(page))
  const canonical = params.toString() ? `${BASE_URL}/blog?${params.toString()}` : `${BASE_URL}/blog`

  if (!hasValidCategory) {
    return {
      title: "Blog de Finanzas Personales",
      alternates: { canonical: `${BASE_URL}/blog` },
      robots: { index: false, follow: true },
    }
  }

  const title = category
    ? page > 1
      ? `${category} - Página ${page} | Blog de Finanzas`
      : `${category} | Blog de Finanzas`
    : page > 1
      ? `Blog - Página ${page}`
      : "Blog de Finanzas Personales"

  return {
    title,
    alternates: { canonical },
    robots: page > 1 ? { index: false, follow: true } : { index: true, follow: true },
  }
}

export default function BlogPage({ searchParams }: Props) {
  const page = Math.max(1, Number(searchParams?.page) || 1)
  const selectedCategory = searchParams?.category || null

  const allPosts = getBlogPosts()

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
    name: "Blog de FinanzasPro",
    description: "Artículos sobre ahorro, inversiones y educación financiera en español.",
    url: BASE_BLOG_URL,
    inLanguage: "es",
    publisher: {
      "@type": "Organization",
      "@id": "https://www.finanzasdigitales.es/#organization",
      name: "FinanzasPro",
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
      <BlogPostsGrid
        paginatedPosts={paginatedPosts}
        categories={categories}
        selectedCategory={selectedCategory}
        currentPage={safePage}
        totalPages={totalPages}
        filteredCount={filteredPosts.length}
      />
    </>
  )
}


