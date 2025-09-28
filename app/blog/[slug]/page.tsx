import { notFound } from "next/navigation"
import { getBlogPost, getBlogPosts } from "@/lib/blog-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import StructuredData from "@/components/structured-data"

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
      <article className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {/* Header */}
          <header className="mb-12">
            <div className="mb-6">
              <Badge variant="secondary" className="mb-4">
                {post.category}
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                {post.title}
              </h1>
              <p className="mt-6 text-xl leading-8 text-muted-foreground text-pretty">{post.description}</p>
            </div>

            <div className="flex items-center justify-between border-y border-border py-4">
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString("es-ES", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </div>
                <span>Por {post.author}</span>
              </div>

              {/* Social Share */}
              <div className="flex items-center gap-2">
                <Share2 className="h-4 w-4 text-muted-foreground" />
                <Button variant="ghost" size="sm" asChild>
                  <Link
                    href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${post.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Compartir en Twitter</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link
                    href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="h-4 w-4" />
                    <span className="sr-only">Compartir en Facebook</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">Compartir en LinkedIn</span>
                  </Link>
                </Button>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12">
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="aspect-video w-full rounded-lg object-cover"
            />
          </div>

          {/* AdSense Placeholder - Top of Article */}
          <div className="mb-12">
            <div className="bg-muted/30 border-2 border-dashed border-border rounded-lg p-6 text-center">
              <p className="text-sm text-muted-foreground">Espacio reservado para Google AdSense</p>
              <p className="text-xs text-muted-foreground mt-1">Dentro del artículo - 728x90</p>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-li:text-foreground">
            <div
              dangerouslySetInnerHTML={{
                __html: post.content
                  .replace(/\n/g, "<br />")
                  .replace(/#{1,6}\s/g, (match) => {
                    const level = match.trim().length
                    return `<h${level} class="text-${4 - level}xl font-bold mt-8 mb-4">`
                  })
                  .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
              }}
            />
          </div>

          {/* AdSense Placeholder - Middle of Article */}
          <div className="my-12">
            <div className="bg-muted/30 border-2 border-dashed border-border rounded-lg p-6 text-center">
              <p className="text-sm text-muted-foreground">Espacio reservado para Google AdSense</p>
              <p className="text-xs text-muted-foreground mt-1">Medio del artículo - 300x250</p>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-muted-foreground">Etiquetas:</span>
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Newsletter CTA */}
          <div className="mt-12 rounded-lg bg-primary/5 p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground">¿Te gustó este artículo?</h3>
            <p className="mt-4 text-muted-foreground">
              Suscríbete a nuestro newsletter y recibe contenido exclusivo cada semana
            </p>
            <Button className="mt-6" asChild>
              <Link href="/newsletter">Suscribirse Gratis</Link>
            </Button>
          </div>
        </div>
      </article>
    </>
  )
}
