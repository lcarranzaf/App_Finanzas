import { notFound } from "next/navigation"
import { getBlogPost, getBlogPosts } from "@/lib/blog-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import StructuredData from "@/components/structured-data"
import Image from 'next/image'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPost(params.slug)

  if (!post) {
    return {
      title: "Artículo no encontrado - FinanzasPro",
    }
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      section: post.category,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
    alternates: {
      canonical: `https://finanzaspro.com/blog/${post.slug}`,
    },
  }
}

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  const shareUrl = `https://finanzaspro.com/blog/${post.slug}`

  return (
    <>
      <StructuredData type="article" data={{ slug: post.slug }} />
      <article className="py-8 sm:py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {/* Header */}
          <header className="mb-10">
            <div className="mb-8">
              <Badge variant="secondary" className="mb-4 text-sm font-medium px-3 py-1">
                {post.category}
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance leading-tight mb-6">
                {post.title}
              </h1>
              <p className="text-xl leading-8 text-muted-foreground text-pretty max-w-3xl">{post.description}</p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-y border-border py-5">
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString("es-ES", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
                <span className="text-foreground font-medium">Por {post.author}</span>
              </div>

              {/* Social Share */}
              <div className="flex items-center gap-2">
                <Share2 className="h-4 w-4 text-muted-foreground" />
                <Button variant="ghost" size="sm" className="h-9 w-9 p-0" asChild>
                  <Link
                    href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-primary/10"
                  >
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Compartir en Twitter</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" className="h-9 w-9 p-0" asChild>
                  <Link
                    href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-primary/10"
                  >
                    <Facebook className="h-4 w-4" />
                    <span className="sr-only">Compartir en Facebook</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" className="h-9 w-9 p-0" asChild>
                  <Link
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-primary/10"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">Compartir en LinkedIn</span>
                  </Link>
                </Button>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-10 -mx-6 lg:-mx-8">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg lg:rounded-xl shadow-2xl bg-gradient-to-br from-primary/10 to-primary/5">
              <Image
                src={post.image || '/placeholder.svg'}
                alt={post.title}
                className="object-cover w-full h-full"
                width={1200}
                height={675}
                sizes="(max-width: 1024px) 100vw, 1200px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>

          {/* AdSense Placeholder - Top of Article */}
          <div className="mb-10">
            <div className="bg-muted/50 border border-border rounded-lg p-8 text-center min-h-[90px] flex items-center justify-center">
              <p className="text-xs text-muted-foreground font-medium">Publicidad</p>
            </div>
          </div>

          {/* Article Content */}
          <div className="article-content max-w-none">
            <div
              dangerouslySetInnerHTML={{
                __html: (function markdownToHtml(md: string) {
                  function escapeHtml(str: string) {
                    return str
                      .replace(/&/g, "&amp;")
                      .replace(/</g, "&lt;")
                      .replace(/>/g, "&gt;")
                      .replace(/\"/g, "&quot;")
                      .replace(/'/g, "&#39;")
                  }

                  let html = ""
                  const lines = md.split('\n')
                  let inList = false
                  let listType = ''
                   let inTable = false

                  for (let i = 0; i < lines.length; i++) {
                    const line = lines[i].trim()
                    const nextLine = i < lines.length - 1 ? lines[i + 1].trim() : ''

                    // Headings
                    const headingMatch = line.match(/^(#{1,6})\s+(.*)/)
                    if (headingMatch) {
                      if (inList) {
                        html += `</${listType}>`
                        inList = false
                      }
                      const level = Math.min(6, headingMatch[1].length)
                      const text = escapeHtml(headingMatch[2].trim())
                      const headingClasses = {
                        1: 'text-4xl font-bold tracking-tight text-foreground mt-12 mb-6 pb-4 border-b border-border',
                        2: 'text-3xl font-bold tracking-tight text-foreground mt-10 mb-5',
                        3: 'text-2xl font-bold tracking-tight text-foreground mt-8 mb-4',
                        4: 'text-xl font-bold tracking-tight text-foreground mt-6 mb-3',
                        5: 'text-lg font-bold tracking-tight text-foreground mt-5 mb-2',
                        6: 'text-base font-bold tracking-tight text-foreground mt-4 mb-2'
                      }
                      html += `<h${level} class="${headingClasses[level as keyof typeof headingClasses]}">${text}</h${level}>`
                      continue
                    }

                    // Tables
                    if (line.includes('|') && line.split('|').length > 2) {
                      // Check if it's a separator row (contains only dashes, pipes, spaces, colons)
                      if (line.match(/^[\|\s\-:]+$/)) {
                        // This is a separator row, skip it
                        continue
                      }

                      if (!inTable) {
                        inTable = true
                        html += '<div class="overflow-x-auto my-8 rounded-lg border border-border shadow-sm"><table class="w-full border-collapse bg-background"><thead><tr>'
                        const headers = line.split('|').filter(h => h.trim())
                        headers.forEach((header, idx) => {
                          const isLast = idx === headers.length - 1
                          let cellContent = escapeHtml(header.trim())
                          // Process bold in headers
                          cellContent = cellContent.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                          html += `<th class="bg-muted/70 p-4 text-left font-semibold text-foreground border-b-2 border-border ${isLast ? '' : 'border-r border-border/50'}">${cellContent}</th>`
                        })
                        html += '</tr></thead><tbody>'
                        continue
                      } else {
                        // Data row
                        const cells = line.split('|').filter(c => c.trim())
                        html += '<tr class="hover:bg-muted/30 transition-colors border-b border-border/30">'
                        cells.forEach((cell, idx) => {
                          const isLast = idx === cells.length - 1
                          let cellContent = escapeHtml(cell.trim())
                          // Process formatting in cells
                          cellContent = cellContent.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
                          cellContent = cellContent.replace(/\*(.*?)\*/g, '<em>$1</em>')
                          html += `<td class="p-4 text-foreground ${isLast ? '' : 'border-r border-border/30'}">${cellContent}</td>`
                        })
                        html += '</tr>'
                        continue
                      }
                    } else if (inTable) {
                      // End of table
                      html += '</tbody></table></div>'
                      inTable = false
                    }

                    // Lists
                    const ulMatch = line.match(/^[-*]\s+(.*)/)
                    const olMatch = line.match(/^\d+\.\s+(.*)/)

                    if (ulMatch || olMatch) {
                      const currentType = ulMatch ? 'ul' : 'ol'
                      const content = ulMatch ? ulMatch[1] : olMatch![1]

                      if (!inList) {
                        inList = true
                        listType = currentType
                        const listClasses = currentType === 'ul'
                          ? 'my-6 space-y-3 list-disc list-outside ml-6 text-foreground'
                          : 'my-6 space-y-3 list-decimal list-outside ml-6 text-foreground'
                        html += `<${listType} class="${listClasses}">`
                       } else if (listType !== currentType) {
                         const newListClasses = currentType === 'ul'
                          ? 'my-6 space-y-3 list-disc list-outside ml-6 text-foreground'
                          : 'my-6 space-y-3 list-decimal list-outside ml-6 text-foreground'
                        html += `</${listType}><${currentType} class="${newListClasses}">`
                        listType = currentType
                      }

                      // Process inline formatting
                      let listItem = escapeHtml(content)

                      // Process bold with placeholders
                      const boldPlaceholders: string[] = []
                      listItem = listItem.replace(/\*\*(.*?)\*\*/g, (match, content) => {
                        const placeholder = `__BOLD_${boldPlaceholders.length}__`
                        boldPlaceholders.push(`<strong class="font-semibold text-foreground">${content}</strong>`)
                        return placeholder
                      })

                      // Process italic
                      listItem = listItem.replace(/\*([^*]+?)\*/g, '<em class="italic text-foreground/90">$1</em>')

                      // Restore bold
                      boldPlaceholders.forEach((replacement, index) => {
                        listItem = listItem.replace(`__BOLD_${index}__`, replacement)
                      })

                      // Process code
                      listItem = listItem.replace(/`([^`]+)`/g, '<code class="bg-muted/80 text-sm px-2 py-1 rounded-md font-mono text-foreground border border-border">$1</code>')

                      html += `<li class="text-foreground leading-7 pl-2 mb-2">${listItem}</li>`

                      if (nextLine && !nextLine.match(/^[-*\d]/)) {
                        html += `</${listType}>`
                        inList = false
                      }
                      continue
                    } else if (inList) {
                      html += `</${listType}>`
                      inList = false
                    }

                    // Empty lines
                    if (!line) {
                      continue
                    }

                    // Check for images first (before processing as paragraph)
                    const imageMatch = line.match(/^!\[([^\]]*)\]\(([^)]+)\)/)
                    if (imageMatch) {
                      const altText = escapeHtml(imageMatch[1] || '')
                      const imageUrl = imageMatch[2]
                      // Check if next line is a caption (starts with *)
                      const captionLine = i < lines.length - 1 ? lines[i + 1].trim() : ''
                      const hasCaption = captionLine.startsWith('*')
                      html += `<figure class="my-8">
                        <img src="${imageUrl}" alt="${altText}" class="w-full rounded-lg shadow-lg object-cover max-h-[500px]" loading="lazy" />
                        ${hasCaption ? `<figcaption class="mt-3 text-sm text-center text-muted-foreground italic">${escapeHtml(captionLine.replace(/^\*\s*/, ''))}</figcaption>` : ''}
                      </figure>`
                      // Skip next line if it's a caption
                      if (hasCaption) {
                        i++ // Skip the caption line
                      }
                      continue
                    }

                    // Regular paragraphs
                    let paragraph = escapeHtml(line)

                    // Process formatting: bold first, then italic
                    // Replace **text** with placeholder first
                    const boldPlaceholders: string[] = []
                    paragraph = paragraph.replace(/\*\*(.*?)\*\*/g, (match, content) => {
                      const placeholder = `__BOLD_${boldPlaceholders.length}__`
                      boldPlaceholders.push(`<strong class="font-semibold text-foreground">${content}</strong>`)
                      return placeholder
                    })

                    // Process italic *text*
                    paragraph = paragraph.replace(/\*([^*]+?)\*/g, '<em class="italic text-foreground/90">$1</em>')

                    // Restore bold placeholders
                    boldPlaceholders.forEach((replacement, index) => {
                      paragraph = paragraph.replace(`__BOLD_${index}__`, replacement)
                    })

                    // Code inline `code`
                    paragraph = paragraph.replace(/`([^`]+)`/g, '<code class="bg-muted/80 text-sm px-2 py-1 rounded-md font-mono text-foreground border border-border">$1</code>')

                    // Links [text](url)
                    paragraph = paragraph.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary hover:underline font-medium transition-colors" target="_blank" rel="noopener noreferrer">$1</a>')

                    html += `<p class="text-foreground leading-8 mb-6 text-base font-normal">${paragraph}</p>`
                  }

                  // Close any open lists or tables
                  if (inList) {
                    html += `</${listType}>`
                  }
                  if (inTable) {
                    html += '</tbody></table></div>'
                  }

                  return html
                })(post.content || "")
              }}
            />
          </div>

          {/* AdSense Placeholder - Middle of Article */}
          <div className="my-12">
            <div className="bg-muted/50 border border-border rounded-lg p-8 text-center min-h-[250px] flex items-center justify-center">
              <p className="text-xs text-muted-foreground font-medium">Publicidad</p>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-semibold text-foreground">Etiquetas:</span>
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs font-medium px-3 py-1 hover:bg-primary/20 transition-colors">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Related Articles or Back Link */}
          <div className="mt-10 pt-8 border-t border-border">
            <Button variant="outline" asChild>
              <Link href="/blog">← Volver al Blog</Link>
            </Button>
          </div>

          {/* Newsletter CTA */}
          <div className="mt-12 rounded-xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 p-10 text-center shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-3">¿Te gustó este artículo?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Suscríbete a nuestro newsletter y recibe contenido exclusivo sobre finanzas personales, inversiones y estrategias
              para alcanzar la libertad financiera cada semana.
            </p>
            <Button size="lg" className="font-semibold" asChild>
              <Link href="/newsletter">Suscribirse Gratis</Link>
            </Button>
          </div>
        </div>
      </article>
    </>
  )
}
