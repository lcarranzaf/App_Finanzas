import { getBlogPost } from '@/lib/blog-data'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import { OptimizedImage } from '@/components/optimized-image'

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

  return (
    <div className="min-h-screen bg-background">
      {/* Schema for featured snippets */}
      <Script
        id="structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "image": post.image,
          "author": {
            "@type": "Person",
            "name": post.author
          },
          "publisher": {
            "@type": "Organization",
            "name": "FinanzasPro",
            "url": "https://app-finanzas-mu.vercel.app"
          },
          "datePublished": post.publishedAt,
          "dateModified": post.publishedAt,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://app-finanzas-mu.vercel.app/blog/${post.slug}`
          }
        })}
      </Script>

      {/* Article Header */}
      <article className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent z-10"></div>
        
        <div className="relative h-64 md:h-96">
          <OptimizedImage
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="relative z-20 container mx-auto px-6 -mt-16">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-8 mb-8">
            <div className="flex items-center gap-4 mb-6 text-sm">
              <Badge variant="secondary" className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishedAt).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </Badge>
              
              <Badge variant="outline" className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </Badge>
              
              <Badge variant="outline" className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {post.author}
              </Badge>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  #{tag}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              {post.description}
            </p>
          </div>
        </div>
      </article>

      {/* Article Content with Interactive Elements */}
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div 
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-li:text-foreground prose-strong:text-foreground prose-code:text-foreground prose-blockquote:text-muted-foreground prose-table:text-foreground prose-th:text-foreground prose-td:text-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Interactive Elements Enhancement */}
          <div className="mt-12 p-6 bg-muted/30 rounded-lg border-2 border-dashed border-muted-foreground/20">
            <h3 className="text-xl font-bold mb-4 text-center">💡 Herramientas Interactivas</h3>
            <p className="text-center text-muted-foreground mb-4">
              Este artículo contiene calculadoras y herramientas interactivas. Usa las que aparecen arriba en el contenido.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-background rounded-lg border">
                <div className="text-2xl font-bold text-primary mb-2">🧮</div>
                <div className="text-sm font-semibold">Calculadoras</div>
                <div className="text-xs text-muted-foreground">Presupuesto, ahorro, inversiones</div>
              </div>
              
              <div className="p-4 bg-background rounded-lg border">
                <div className="text-2xl font-bold text-primary mb-2">📊</div>
                <div className="text-sm font-semibold">Visualizaciones</div>
                <div className="text-xs text-muted-foreground">Gráficos y proyecciones</div>
              </div>
              
              <div className="p-4 bg-background rounded-lg border">
                <div className="text-2xl font-bold text-primary mb-2">📥</div>
                <div className="text-sm font-semibold">Templates</div>
                <div className="text-xs text-muted-foreground">Excel y plantillas descargables</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center p-8 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border-2 border-primary/20">
            <h3 className="text-2xl font-bold mb-4">🚀 ¿Listo para transformar tus finanzas?</h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Explora más artículos y herramientas para construir tu futuro financiero con estrategias probadas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-4">
                <Link href="/blog">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Más Artículos
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4">
                <Link href="/recursos">
                  Herramientas Gratuitas
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Related Articles Placeholder */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Artículos Relacionados</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Will be populated with related articles logic */}
              <div className="p-6 bg-muted/30 rounded-lg border text-center">
                <div className="text-muted-foreground">Cargando artículos relacionados...</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">💰 Recibe Tips Financieros Semanales</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Estrategias probadas para ahorrar más e invertir mejor directamente en tu email.
            </p>
            <Button asChild size="lg" className="text-lg px-8 py-4">
              <Link href="/newsletter">
                Suscribirse Gratis
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}