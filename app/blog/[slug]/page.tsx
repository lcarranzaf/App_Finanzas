import { getBlogPost } from "@/lib/blog-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import Image from 'next/image'
import { Breadcrumbs } from "@/components/breadcrumbs"
import { RelatedArticles } from "@/components/related-articles"
import { DisqusComments } from "@/components/disqus-comments"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  const shareUrl = `https://finanzaspro.com/blog/${post.slug}`

  return (
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
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
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
        <DisqusComments
          postSlug={post.slug}
          postTitle={post.title}
          postUrl={`https://finanzaspro.com/blog/${post.slug}`}
        />
      </div>
    </div>
  )
}