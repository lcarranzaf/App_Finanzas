import React from "react"
import { getBlogPost } from "@/lib/blog-data"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, BookOpen, TrendingUp } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import Image from 'next/image'
import { Breadcrumbs } from "@/components/breadcrumbs"
import { RelatedArticles } from "@/components/related-articles"
import { Metadata } from "next"
import StructuredData from "@/components/structured-data"
import ReactMarkdown, { type Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { ContextualLinks } from "@/components/internal-links"
import AdSense from "@/components/AdSense"
import { TableOfContents } from "@/components/table-of-contents"
import { InvestmentDisclaimer } from "@/components/investment-disclaimer"
import { AuthorBox } from "@/components/author-box"
import { ArticleSources } from "@/components/article-sources"
import { getAuthorByName } from "@/lib/authors-data"
import { FAQSection } from "@/components/faq-section"
import { ReadingProgressBar } from "@/components/reading-progress"

export const revalidate = 86400

interface BlogPostPageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPost(params.slug)
  if (!post) return { title: "Artículo no encontrado", description: "Este artículo no está disponible." }

  return {
    title: post.seoTitle ?? post.title,
    description: post.description,
    keywords: post.tags.join(", "),
    authors: [{ name: post.author, url: "https://www.finanzasdigitales.es" }],
    creator: post.author,
    publisher: "Finanzas Digitales",
    robots: post.noindex
      ? { index: false, follow: true }
      : { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
    openGraph: {
      title: post.seoTitle ?? post.title,
      description: post.description,
      images: [{ url: `/blog/${post.slug}/opengraph-image`, width: 1200, height: 630, alt: post.title }],
      url: `https://www.finanzasdigitales.es/blog/${post.slug}`,
      siteName: "Finanzas Digitales",
      type: "article",
      publishedTime: `${post.publishedAt}T00:00:00+00:00`,
      modifiedTime: `${post.updatedAt ?? post.publishedAt}T00:00:00+00:00`,
      authors: [post.author],
      section: post.category,
      tags: post.tags,
      locale: "es_ES",
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle ?? post.title,
      description: post.description,
      images: [`/blog/${post.slug}/opengraph-image`],
    },
    alternates: {
      canonical: `https://www.finanzasdigitales.es/blog/${post.slug}`,
      languages: {
        "es": `https://www.finanzasdigitales.es/blog/${post.slug}`,
        "x-default": `https://www.finanzasdigitales.es/blog/${post.slug}`,
      },
    },
  }
}

const categoryGradients: Record<string, string> = {
  "Inversión": "from-emerald-600/15 via-teal-500/8 to-transparent",
  "Inversiones": "from-emerald-600/15 via-teal-500/8 to-transparent",
  "Ahorro": "from-blue-600/15 via-sky-500/8 to-transparent",
  "Fiscalidad": "from-amber-600/15 via-orange-500/8 to-transparent",
  "Planificación": "from-violet-600/15 via-purple-500/8 to-transparent",
  "Criptomonedas": "from-orange-600/15 via-yellow-500/8 to-transparent",
  "Deudas": "from-red-600/15 via-rose-500/8 to-transparent",
}

const categoryAccents: Record<string, string> = {
  "Inversión": "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/25",
  "Inversiones": "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/25",
  "Ahorro": "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/25",
  "Fiscalidad": "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/25",
  "Planificación": "bg-violet-500/10 text-violet-700 dark:text-violet-400 border-violet-500/25",
  "Criptomonedas": "bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/25",
  "Deudas": "bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/25",
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)
  if (!post) notFound()

  const postAuthor = getAuthorByName(post.author)
  const authorSlug = postAuthor?.slug ?? "equipo-finanzaspro"
  const gradient = categoryGradients[post.category] ?? "from-primary/15 via-primary/8 to-transparent"
  const accentClass = categoryAccents[post.category] ?? "bg-primary/10 text-primary border-primary/25"

  const generateId = (text: string) => {
    const str = typeof text === 'string' ? text : ''
    return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim()
  }

  const getTextFromChildren = (children: React.ReactNode): string => {
    if (typeof children === 'string') return children
    if (Array.isArray(children)) return children.map(getTextFromChildren).join('')
    if (React.isValidElement<{ children?: React.ReactNode }>(children)) return getTextFromChildren(children.props.children)
    return ''
  }

  const markdownComponents: Components = {
    h1: ({ children }) => {
      const id = generateId(getTextFromChildren(children))
      return <h2 id={id} className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mt-14 mb-5 pb-4 border-b-2 border-primary/20 scroll-mt-24">{children}</h2>
    },
    h2: ({ children }) => {
      const id = generateId(getTextFromChildren(children))
      return <h2 id={id} className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mt-12 mb-4 pb-3 border-b border-border/60 scroll-mt-24">{children}</h2>
    },
    h3: ({ children }) => {
      const id = generateId(getTextFromChildren(children))
      return <h3 id={id} className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mt-8 mb-3 scroll-mt-24">{children}</h3>
    },
    h4: ({ children }) => <h4 className="text-lg font-bold tracking-tight text-foreground mt-6 mb-2">{children}</h4>,
    p: ({ children }) => {
      const text = getTextFromChildren(children)
      if (text.startsWith('Tip:') || text.startsWith('**Tip**:') || text.startsWith('**Tip:**')) {
        return (
          <div className="flex gap-3 bg-blue-500/8 border border-blue-500/20 rounded-xl p-4 my-6">
            <span className="text-blue-500 text-lg shrink-0 mt-0.5">💡</span>
            <p className="text-foreground leading-7 text-sm m-0">{children}</p>
          </div>
        )
      }
      if (text.startsWith('Importante:') || text.startsWith('**Importante**:') || text.startsWith('**Importante:**')) {
        return (
          <div className="flex gap-3 bg-amber-500/8 border border-amber-500/20 rounded-xl p-4 my-6">
            <span className="text-amber-500 text-lg shrink-0 mt-0.5">⚠️</span>
            <p className="text-foreground leading-7 text-sm m-0">{children}</p>
          </div>
        )
      }
      if (text.startsWith('La buena noticia') || text.startsWith('**La buena noticia')) {
        return (
          <div className="flex gap-3 bg-green-500/8 border border-green-500/20 rounded-xl p-4 my-6">
            <span className="text-green-500 text-lg shrink-0 mt-0.5">✅</span>
            <p className="text-foreground leading-7 text-sm m-0">{children}</p>
          </div>
        )
      }
      return <p className="text-foreground/90 leading-8 mb-5 text-base font-normal">{children}</p>
    },
    ul: ({ children }) => <ul className="my-5 space-y-1 list-none ml-0 text-foreground">{children}</ul>,
    ol: ({ children }) => <ol className="my-5 space-y-2 list-decimal list-outside ml-6 text-foreground">{children}</ol>,
    li: ({ children }) => (
      <li className="flex items-start gap-2.5 text-foreground/90 leading-7">
        <span className="mt-2.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary/60 block" />
        <span>{children}</span>
      </li>
    ),
    strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
    em: ({ children }) => <em className="italic text-foreground/80">{children}</em>,
    code: ({ children }) => <code className="bg-muted/80 text-sm px-2 py-0.5 rounded-md font-mono text-foreground border border-border">{children}</code>,
    a: ({ children, href }) => <a href={href} className="text-primary hover:underline font-medium transition-colors underline-offset-2">{children}</a>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary bg-primary/5 pl-5 pr-4 py-3 italic my-8 text-foreground/80 rounded-r-xl">{children}</blockquote>
    ),
    table: ({ children }) => (
      <div className="my-8 overflow-x-auto rounded-xl border border-border shadow-sm">
        <table className="w-full text-sm">{children}</table>
      </div>
    ),
    thead: ({ children }) => <thead className="bg-muted/60 border-b border-border">{children}</thead>,
    tbody: ({ children }) => <tbody className="divide-y divide-border/60">{children}</tbody>,
    tr: ({ children }) => <tr className="hover:bg-muted/30 transition-colors">{children}</tr>,
    th: ({ children }) => <th className="px-4 py-3 text-left font-semibold text-foreground text-xs uppercase tracking-wide">{children}</th>,
    td: ({ children }) => <td className="px-4 py-3 text-foreground/80">{children}</td>,
    img: ({ src, alt }) => (
      <figure className="my-10">
        <Image src={src || '/placeholder.svg'} alt={alt || ''} width={800} height={400} className="rounded-2xl shadow-lg w-full border border-border/20" />
        {alt && <figcaption className="mt-3 text-center text-sm text-muted-foreground italic">{alt}</figcaption>}
      </figure>
    ),
    hr: () => <hr className="border-border/40 my-10" />,
  }

  const contentLines = (post.content || "").split("\n")
  const midPoint = Math.floor(contentLines.length / 2)
  let splitIndex = midPoint
  for (let i = midPoint; i < Math.min(midPoint + 15, contentLines.length); i++) {
    if (contentLines[i].startsWith("## ")) { splitIndex = i; break }
  }
  const firstHalf = contentLines.slice(0, splitIndex).join("\n")
  const secondHalf = contentLines.slice(splitIndex).join("\n")

  const hubLinks: Record<string, { href: string; label: string }[]> = {
    "Inversión": [
      { href: "/fondos-indexados", label: "Guía de fondos indexados en España" },
      { href: "/mejores-brokers-espana", label: "Mejores brokers España 2026" },
      { href: "/mejores-etf-espana", label: "Mejores ETF en España 2026" },
    ],
    "Inversiones": [
      { href: "/fondos-indexados", label: "Guía de fondos indexados en España" },
      { href: "/mejores-brokers-espana", label: "Mejores brokers España 2026" },
      { href: "/mejores-etf-espana", label: "Mejores ETF en España 2026" },
    ],
    "Ahorro": [
      { href: "/cuentas-remuneradas-espana", label: "Mejores cuentas remuneradas 2026" },
      { href: "/mejores-fondos-monetarios-espana", label: "Mejores fondos monetarios España" },
      { href: "/calculadoras/meta-ahorro", label: "Calculadora de objetivo de ahorro" },
    ],
    "Fiscalidad": [
      { href: "/declaracion-renta-espana", label: "Declaración de la renta 2026" },
      { href: "/mejores-planes-de-pensiones-espana", label: "Mejores planes de pensiones 2026" },
    ],
    "Planificación": [
      { href: "/calculadoras/interes-compuesto", label: "Calculadora de interés compuesto" },
      { href: "/fondos-indexados", label: "Fondos indexados: guía completa" },
      { href: "/declaracion-renta-espana", label: "Optimiza tu declaración de la renta" },
    ],
    "Criptomonedas": [
      { href: "/mejores-brokers-espana", label: "Plataformas para invertir en España" },
      { href: "/declaracion-renta-espana", label: "Cómo tributan las criptomonedas en la renta" },
    ],
    "Deudas": [
      { href: "/calculadoras/interes-compuesto", label: "Simulador de interés compuesto" },
      { href: "/cuentas-remuneradas-espana", label: "Cuentas para tu fondo de emergencia" },
    ],
  }

  return (
    <>
      <ReadingProgressBar />
      <StructuredData type="article" data={{
        slug: post.slug, title: post.title, description: post.description,
        image: post.image, publishedAt: post.publishedAt, updatedAt: post.updatedAt,
        author: post.author, category: post.category, tags: post.tags
      }} />
      {post.howToSteps && post.howToSteps.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: post.title,
            description: post.description,
            step: post.howToSteps.map((step, i) => ({
              "@type": "HowToStep",
              position: i + 1,
              name: step.name,
              text: step.text,
            })),
          }) }}
          suppressHydrationWarning
        />
      )}
      <StructuredData type="breadcrumbs" data={{
        breadcrumbs: [
          { name: "Inicio", url: "https://www.finanzasdigitales.es" },
          { name: "Blog", url: "https://www.finanzasdigitales.es/blog" },
          { name: post.title, url: `https://www.finanzasdigitales.es/blog/${post.slug}` },
        ]
      }} />

      {/* Hero con gradiente por categoría */}
      <div className={`bg-gradient-to-b ${gradient} border-b border-border/40`}>
        <div className="mx-auto max-w-4xl px-6 lg:px-8 pt-10 pb-10">
          <Breadcrumbs
            customItems={[
              { label: "Inicio", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title, href: `/blog/${post.slug}`, isActive: true },
            ]}
          />
          <div className="mt-6">
            <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border mb-5 ${accentClass}`}>
              <TrendingUp className="h-3 w-3" />
              {post.category}
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance leading-tight mb-5">
              {post.title}
            </h1>
            <p className="text-lg leading-8 text-muted-foreground text-pretty max-w-3xl mb-8">{post.description}</p>

            {/* Meta bar */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
              <Link href={`/autores/${authorSlug}`} className="flex items-center gap-2.5 group" rel="author">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 border-2 border-primary/20 text-sm font-bold text-primary group-hover:bg-primary/20 transition-colors">
                  {post.author.charAt(0)}
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">{post.author}</span>
                  {postAuthor && <span className="text-xs text-muted-foreground">{postAuthor.role}</span>}
                </span>
              </Link>
              <span className="w-px h-8 bg-border hidden sm:block" />
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" />
                <span className="text-xs">{post.updatedAt ? "Actualizado:" : "Publicado:"}</span>
                <time dateTime={post.updatedAt ?? post.publishedAt} className="text-xs font-medium text-foreground">
                  {new Date(post.updatedAt ?? post.publishedAt).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
                </time>
              </div>
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <BookOpen className="h-3.5 w-3.5" />
                <span className="text-xs font-medium text-foreground">{post.readTime} de lectura</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Featured Image */}
        <div className="mt-2 mb-10">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-xl border border-border/20 bg-muted">
            <Image
              src={post.image || '/placeholder.svg'}
              alt={post.title}
              className="object-cover w-full h-full"
              width={1200}
              height={675}
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 1200px"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwC2gAH/2Q=="
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </div>
        </div>

        <ContextualLinks currentTags={post.tags} currentCategory={post.category} currentSlug={post.slug} count={3} />
        <TableOfContents content={post.content} />
        <InvestmentDisclaimer />

        {/* Contenido del artículo */}
        <article className="article-content max-w-none">
          <div>
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
              {firstHalf}
            </ReactMarkdown>
          </div>

          <div className="my-10">
            <AdSense slot="1562571362" format="horizontal" />
          </div>

          <div>
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
              {secondHalf}
            </ReactMarkdown>
          </div>
        </article>

        <div className="my-8">
          <AdSense slot="5745358955" format="horizontal" />
        </div>

        {/* CTA */}
        <div className={`mt-12 rounded-2xl border border-border/60 overflow-hidden shadow-sm bg-gradient-to-br ${gradient}`}>
          <div className="p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">{post.category}</p>
            <h3 className="text-xl font-bold text-foreground mb-2">¿Te fue útil este artículo?</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Explora más contenido sobre {post.category.toLowerCase()} y mejora tu situación financiera.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="sm">
                <Link href="/blog">Ver más artículos <ArrowRight className="ml-1.5 h-3.5 w-3.5" /></Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="/calculadoras/interes-compuesto">Calculadora de inversión</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* FAQs */}
        {post.faqs && post.faqs.length > 0 && (
          <FAQSection
            title="Preguntas Frecuentes"
            subtitle="Resolvemos las dudas más comunes sobre este tema"
            faqs={post.faqs}
            inArticle
          />
        )}

        <div className="my-8">
          <AdSense slot="9249489692" format="horizontal" />
        </div>

        <RelatedArticles currentPostSlug={post.slug} currentTags={post.tags} currentCategory={post.category} />

        {/* Hub links por categoría */}
        {(() => {
          const links = hubLinks[post.category]
          if (!links) return null
          return (
            <div className="mt-10 pt-8 border-t border-border">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">Guías relacionadas</p>
              <div className="grid gap-2 sm:grid-cols-2">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="flex items-center justify-between p-3.5 rounded-xl border bg-muted/30 hover:bg-muted/60 transition-all hover:shadow-sm text-sm font-medium group"
                  >
                    <span>{l.label}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0 ml-2 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>
          )
        })()}

        <ArticleSources category={post.category} />
        <AuthorBox authorName={post.author} />

        <div className="mt-10 pt-8 border-t border-border pb-16">
          <Button variant="outline" asChild>
            <Link href="/blog">← Volver al Blog</Link>
          </Button>
        </div>
      </div>
    </>
  )
}
