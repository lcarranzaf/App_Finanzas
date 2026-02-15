import { getBlogPost } from "@/lib/blog-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Share2, Facebook, Twitter, Linkedin, ArrowRight } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import Image from 'next/image'
import { Breadcrumbs } from "@/components/breadcrumbs"
import { RelatedArticles } from "@/components/related-articles"
import { DisqusComments } from "@/components/disqus-comments"
import { Metadata } from "next"
import StructuredData from "@/components/structured-data"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { ContextualLinks } from "@/components/internal-links"
import { OptimizedImage } from "@/components/optimized-image"
import { LazyLoad } from "@/components/lazy-load"
import AdSense from "@/components/AdSense"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPost(params.slug)
  
  if (!post) {
    return {
      title: "Artículo no encontrado",
      description: "Este artículo no está disponible."
    }
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags.join(", "),
    authors: [{ name: post.author, url: "https://app-finanzas-mu.vercel.app" }],
    creator: post.author,
    publisher: "FinanzasPro",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: post.title,
      description: post.description,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      url: `https://app-finanzas-mu.vercel.app/blog/${post.slug}`,
      siteName: "FinanzasPro",
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.publishedAt,
      authors: [post.author],
      section: post.category,
      tags: post.tags,
      locale: "es_ES",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
      creator: "@finanzaspro",
      site: "@finanzaspro",
    },
    alternates: {
      canonical: `https://app-finanzas-mu.vercel.app/blog/${post.slug}`,
      languages: {
        "es-ES": `https://app-finanzas-mu.vercel.app/blog/${post.slug}`,
      },
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  const shareUrl = `https://app-finanzas-mu.vercel.app/blog/${post.slug}`

  const contentLower = post.content.toLowerCase()
  
  const faqRegex = /(?:¿(?:qué|cómo|cuándo|dónde|por qué|quién|cuánto|cuál)[^?]*\?)/gi
  const faqMatches = post.content.match(faqRegex)
  
  const faqs = faqMatches && faqMatches.length > 2 ? faqMatches.slice(0, 5).map((question, index) => ({
    question: question.trim(),
    answer: `Respuesta relacionada con ${question.trim().slice(0, 50)}...`
  })) : undefined
  
  const hasHowTo = contentLower.includes('paso') || 
                   contentLower.includes('paso a paso') || 
                   contentLower.includes('cómo') ||
                   contentLower.includes('guía completa')
  
  const stepRegex = /(?:paso\s+\d+|punto\s+\d+|sección\s+\d+)(?:[:.]\s*)([^\n]+)/gi
  const stepMatches = post.content.match(stepRegex)
  
  const howtoData = hasHowTo && stepMatches ? {
    steps: stepMatches.slice(0, 6).map((step, index) => ({
      name: `Paso ${index + 1}`,
      text: step.replace(/^paso\s+\d+[:.]\s*/i, '').trim()
    })),
    totalTime: post.readTime,
    estimatedCost: "Gratis"
  } : undefined

  return (
    <>
      <StructuredData type="article" data={{ 
        slug: post.slug,
        title: post.title,
        description: post.description,
        image: post.image,
        publishedAt: post.publishedAt,
        author: post.author,
        category: post.category,
        tags: post.tags
      }} />
      
      {faqs && (
        <StructuredData 
          type="faqpage" 
          data={{ 
            faqs,
            title: post.title,
            description: post.description
          }} 
        />
      )}
      
      {howtoData && (
        <StructuredData 
          type="howto" 
          data={{ 
            ...howtoData,
            title: post.title,
            description: post.description,
            image: post.image
          }} 
        />
      )}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <Breadcrumbs />
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
              priority
              sizes="100vw"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwC2gAH/2Q=="
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>

        <ContextualLinks
          currentTags={post.tags}
          currentCategory={post.category}
          currentSlug={post.slug}
          count={3}
        />

        {/* Ad - Antes del contenido */}
        <div className="my-8">
          <AdSense slot="7561827917" format="horizontal" />
        </div>

        {/* Article Content */}
        <div className="article-content max-w-none prose prose-lg prose-slate dark:prose-invert">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({children}) => <h1 className="text-4xl font-bold tracking-tight text-foreground mt-12 mb-6 pb-4 border-b border-border">{children}</h1>,
              h2: ({children}) => <h2 className="text-3xl font-bold tracking-tight text-foreground mt-10 mb-5">{children}</h2>,
              h3: ({children}) => <h3 className="text-2xl font-bold tracking-tight text-foreground mt-8 mb-4">{children}</h3>,
              h4: ({children}) => <h4 className="text-xl font-bold tracking-tight text-foreground mt-6 mb-3">{children}</h4>,
              p: ({children}) => <p className="text-foreground leading-8 mb-6 text-base font-normal">{children}</p>,
              ul: ({children}) => <ul className="my-6 space-y-3 list-disc list-outside ml-6 text-foreground">{children}</ul>,
              ol: ({children}) => <ol className="my-6 space-y-3 list-decimal list-outside ml-6 text-foreground">{children}</ol>,
              li: ({children}) => <li className="text-foreground leading-7 pl-2 mb-2">{children}</li>,
              strong: ({children}) => <strong className="font-semibold text-foreground">{children}</strong>,
              em: ({children}) => <em className="italic text-foreground/90">{children}</em>,
              code: ({children}) => <code className="bg-muted/80 text-sm px-2 py-1 rounded-md font-mono text-foreground border border-border">{children}</code>,
              a: ({children, href}) => <a href={href} className="text-primary hover:underline font-medium transition-colors">{children}</a>,
              blockquote: ({children}) => <blockquote className="border-l-4 border-primary pl-6 italic my-6 text-muted-foreground">{children}</blockquote>,
              table: ({children}) => <table>{children}</table>,
              th: ({children}) => <th>{children}</th>,
              td: ({children}) => <td>{children}</td>,
              tr: ({children}) => <tr>{children}</tr>,
              thead: ({children}) => <thead>{children}</thead>,
              tbody: ({children}) => <tbody>{children}</tbody>,
              img: ({src, alt}) => <Image src={src || '/placeholder.svg'} alt={alt || ''} width={800} height={400} className="rounded-xl shadow-xl my-10 w-full border border-border/20" />, 
              hr: () => <hr className="border-border my-8" />
            }}
          >
            {post.content || ""}
          </ReactMarkdown>
        </div>

        {/* Ad - Después del contenido */}
        <div className="my-8">
          <AdSense slot="5745358955" format="horizontal" />
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

        {/* Ad - Antes de artículos relacionados */}
        <div className="my-8">
          <AdSense slot="9249489692" format="horizontal" />
        </div>

        {/* Related Articles */}
        <RelatedArticles
          currentPostSlug={post.slug}
          currentTags={post.tags}
          currentCategory={post.category}
        />

        {/* Back Link */}
        <div className="mt-10 pt-8 border-t border-border">
          <Button variant="outline" asChild>
            <Link href="/blog">← Volver al Blog</Link>
          </Button>
        </div>

        {/* Comments */}
        <LazyLoad offset={300} placeholder={<div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center text-muted-foreground">Cargando comentarios...</div>}>
          <DisqusComments
            postSlug={post.slug}
            postTitle={post.title}
            postUrl={`https://app-finanzas-mu.vercel.app/blog/${post.slug}`}
          />
        </LazyLoad>
      </div>
      </div>
    </>
  )
}