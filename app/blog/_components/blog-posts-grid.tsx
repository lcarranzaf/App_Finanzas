import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { BlogPost } from "@/lib/blog-data"
import { Clock, Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import AdSense from "@/components/AdSense"
import { BlogSearch } from "@/components/blog-search"

interface BlogPostsGridProps {
  paginatedPosts: BlogPost[]
  categories: string[]
  selectedCategory: string | null
  currentPage: number
  totalPages: number
  filteredCount: number
}

function getPageHref(page: number, category: string | null): string {
  const params = new URLSearchParams()
  if (category) params.set("category", category)
  if (page > 1) params.set("page", String(page))
  const qs = params.toString()
  return qs ? `/blog?${qs}` : "/blog"
}

export default function BlogPostsGrid({
  paginatedPosts,
  categories,
  selectedCategory,
  currentPage,
  totalPages,
  filteredCount,
}: BlogPostsGridProps) {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Blog de Finanzas Personales
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Consejos expertos, estrategias probadas y guías completas para transformar tu vida financiera
          </p>
        </div>

        {/* Search */}
        <div className="mt-8 flex justify-center">
          <BlogSearch />
        </div>

        {/* Categories */}
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          <Link href="/blog">
            <Badge
              variant={selectedCategory === null ? "secondary" : "outline"}
              className="text-sm cursor-pointer hover:bg-primary/10 transition-colors"
            >
              Todos los artículos
            </Badge>
          </Link>
          {categories.map((category) => (
            <Link key={category} href={`/blog?category=${encodeURIComponent(category)}`}>
              <Badge
                variant={selectedCategory === category ? "secondary" : "outline"}
                className="text-sm cursor-pointer hover:bg-primary/10 transition-colors"
              >
                {category}
              </Badge>
            </Link>
          ))}
        </div>

        {/* Banner Horizontal AdSense */}
        <div className="mt-12">
          <AdSense slot="7561827917" format="horizontal" />
        </div>

        {/* Results count */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Mostrando {paginatedPosts.length} de {filteredCount} artículos
            {selectedCategory && ` en "${selectedCategory}"`}
            {totalPages > 1 && ` — Página ${currentPage} de ${totalPages}`}
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="mt-8">
          {paginatedPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                {selectedCategory
                  ? `No hay artículos en la categoría "${selectedCategory}"`
                  : "No hay artículos disponibles"}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
              {paginatedPosts.map((post: BlogPost) => (
                <Card key={post.slug} className="hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                      width={1200}
                      height={675}
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Badge variant="secondary">{post.category}</Badge>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.publishedAt).toLocaleDateString("es-ES", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                          timeZone: "UTC",
                        })}
                      </div>
                    </div>
                    <CardTitle className="line-clamp-2 text-xl">
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="line-clamp-3">{post.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-sm font-medium text-primary hover:underline"
                      >
                        Leer más →
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            {currentPage > 1 ? (
              <Button variant="outline" size="sm" asChild>
                <Link href={getPageHref(currentPage - 1, selectedCategory)}>
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Anterior
                </Link>
              </Button>
            ) : (
              <Button variant="outline" size="sm" disabled aria-disabled="true">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Anterior
              </Button>
            )}

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) =>
              page === currentPage ? (
                <Button key={page} variant="default" size="sm" className="min-w-[36px]" aria-current="page">
                  {page}
                </Button>
              ) : (
                <Button key={page} variant="outline" size="sm" className="min-w-[36px]" asChild>
                  <Link href={getPageHref(page, selectedCategory)}>{page}</Link>
                </Button>
              )
            )}

            {currentPage < totalPages ? (
              <Button variant="outline" size="sm" asChild>
                <Link href={getPageHref(currentPage + 1, selectedCategory)}>
                  Siguiente
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            ) : (
              <Button variant="outline" size="sm" disabled aria-disabled="true">
                Siguiente
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            )}
          </div>
        )}

        {/* Sidebar AdSense */}
        <div className="mt-16">
          <AdSense slot="1562571362" />
        </div>
      </div>
    </div>
  )
}
