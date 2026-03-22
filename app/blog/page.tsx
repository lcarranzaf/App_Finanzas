import type { Metadata } from "next"
import { getBlogPosts } from "@/lib/blog-data"
import BlogPostsGrid from "./_components/blog-posts-grid"

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
  const categories = Array.from(new Set(allPosts.map((p) => p.category)))

  const filteredPosts = selectedCategory
    ? allPosts.filter((p) => p.category === selectedCategory)
    : allPosts

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const safePage = Math.min(page, totalPages || 1)
  const paginatedPosts = filteredPosts.slice((safePage - 1) * POSTS_PER_PAGE, safePage * POSTS_PER_PAGE)

  return (
    <BlogPostsGrid
      paginatedPosts={paginatedPosts}
      categories={categories}
      selectedCategory={selectedCategory}
      currentPage={safePage}
      totalPages={totalPages}
      filteredCount={filteredPosts.length}
    />
  )
}


