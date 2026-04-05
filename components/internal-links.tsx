import { blogPosts } from "@/lib/blog-data"
import Link from "next/link"

interface ContextualLinksProps {
  currentTags: string[]
  currentCategory: string
  currentSlug: string
  count?: number
}

export function ContextualLinks({ currentTags, currentCategory, currentSlug, count = 4 }: ContextualLinksProps) {
  const relatedPosts = blogPosts
    .filter(post => {
      if (post.slug === currentSlug) return false
      
      const tagMatch = post.tags.some(tag => currentTags.includes(tag))
      const categoryMatch = post.category === currentCategory
      
      return tagMatch || categoryMatch
    })
    .slice(0, count)

  if (relatedPosts.length === 0) return null

  return (
    <div className="my-8 p-6 bg-muted/50 rounded-lg border border-border">
      <h4 className="text-lg font-semibold mb-4 text-foreground">Lecturas recomendadas:</h4>
      <ul className="space-y-2">
        {relatedPosts.map((post) => (
          <li key={post.slug}>
            <Link 
              href={`/blog/${post.slug}`}
              className="text-primary hover:underline text-sm leading-relaxed block"
              title={`Leer más sobre ${post.title}`}
              aria-label={`Artículo sobre ${post.title}`}
            >
              <span className="font-medium">{post.title}</span>
              <span className="text-muted-foreground text-xs block mt-1">
                Tiempo de lectura: {post.readTime} • {post.category}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
