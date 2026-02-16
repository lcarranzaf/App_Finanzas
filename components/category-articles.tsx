import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getBlogPosts } from "@/lib/blog-data"

interface CategoryArticlesProps {
  category: string
  title?: string
  subtitle?: string
  maxPosts?: number
  tags?: string[]
}

export function CategoryArticles({ category, title, subtitle, maxPosts = 3, tags }: CategoryArticlesProps) {
  const allPosts = getBlogPosts()

  const posts = allPosts
    .filter(post => {
      if (tags && tags.length > 0) {
        return post.tags.some(tag => tags.includes(tag)) || post.category === category
      }
      return post.category === category
    })
    .slice(0, maxPosts)

  if (posts.length === 0) return null

  return (
    <section className="py-16 sm:py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground">{title || `Artículos sobre ${category}`}</h2>
          {subtitle && (
            <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Card key={post.slug} className="hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <Image
                  src={post.image || '/placeholder.svg'}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                  width={400}
                  height={225}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              <CardHeader className="pb-3">
                <Badge variant="secondary" className="text-xs w-fit">
                  {post.category}
                </Badge>
                <CardTitle className="line-clamp-2 text-lg">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="line-clamp-2 text-sm mb-3">
                  {post.description}
                </CardDescription>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="text-sm font-medium text-primary hover:underline">
                    Leer más →
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button variant="outline" asChild>
            <Link href="/blog">
              Ver todos los artículos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
