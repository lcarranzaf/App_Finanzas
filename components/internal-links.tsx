import { blogPosts } from "@/lib/blog-data"
import Link from "next/link"
import type { BlogPost } from "@/lib/blog-data"

interface AutoLinkProps {
  content: string
  currentSlug: string
  maxLinks?: number
}

export function AutoInternalLinks({ content, currentSlug, maxLinks = 3 }: AutoLinkProps) {
  const otherPosts = blogPosts.filter(post => post.slug !== currentSlug)
  
  const linkedContent = otherPosts.reduce((acc, post, index) => {
    if (index >= maxLinks) return acc
    
    const keywords = post.tags.slice(0, 2)
    const titleWords = post.title.split(' ').slice(0, 3).join(' ')
    
    let modifiedContent = acc
    
    keywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'gi')
      if (!modifiedContent.includes(`/blog/${post.slug}`)) {
        modifiedContent = modifiedContent.replace(
          regex,
          `<Link href="/blog/${post.slug}" className="text-primary hover:underline font-medium" title="${post.title}">$&</Link>`
        )
      }
    })
    
    if (!modifiedContent.includes(`/blog/${post.slug}`)) {
      const titleRegex = new RegExp(`\\b${titleWords}\\b`, 'gi')
      modifiedContent = modifiedContent.replace(
        titleRegex,
        `<Link href="/blog/${post.slug}" className="text-primary hover:underline font-medium" title="${post.title}">$&</Link>`
      )
    }
    
    return modifiedContent
  }, content)

  return <div dangerouslySetInnerHTML={{ __html: linkedContent }} />
}

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
