"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"
import { getBlogPosts } from "@/lib/blog-data"
import type { BlogPost } from "@/lib/blog-data"

interface RelatedArticlesProps {
  currentPostSlug: string
  currentTags: string[]
  currentCategory: string
}

export function RelatedArticles({ currentPostSlug, currentTags, currentCategory }: RelatedArticlesProps) {
  const allPosts = getBlogPosts()

  const relatedPosts = allPosts
    .filter(post => post.slug !== currentPostSlug)
    .map(post => {
      let relevanceScore = 0

      // Same category gets high score
      if (post.category === currentCategory) {
        relevanceScore += 10
      }

      // Shared tags get points
      const sharedTags = post.tags.filter(tag => currentTags.includes(tag))
      relevanceScore += sharedTags.length * 5

      // Recent posts get slight boost
      const postDate = new Date(post.publishedAt)
      const daysSincePublished = (Date.now() - postDate.getTime()) / (1000 * 60 * 60 * 24)
      if (daysSincePublished < 30) {
        relevanceScore += 2
      }

      // SEO boost for posts with "guía", "completo", "paso a paso" in title
      const titleLower = post.title.toLowerCase()
      if (titleLower.includes('guía') || titleLower.includes('completo') || titleLower.includes('paso')) {
        relevanceScore += 3
      }

      return { post, relevanceScore }
    })
    .filter(item => item.relevanceScore > 0)
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, 3)
    .map(item => item.post)

  if (relatedPosts.length === 0) {
    return null
  }

  return (
    <section className="mt-16 pt-8 border-t border-border">
      <h3 className="text-2xl font-bold text-foreground mb-8">Artículos Relacionados</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
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
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwC2gAH/2Q=="
              />
            </div>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="text-xs">
                  {post.category}
                </Badge>
              </div>
              <CardTitle className="line-clamp-2 text-lg">
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="hover:text-primary transition-colors"
                  title={`Lee más sobre ${post.title}`}
                  aria-label={`Artículo sobre ${post.title}`}
                >
                  {post.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <CardDescription className="line-clamp-2 text-sm mb-3">
                {post.description}
              </CardDescription>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>{post.readTime}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}