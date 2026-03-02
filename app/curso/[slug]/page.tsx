import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getCurso } from '@/lib/kv-storage'
import { blogPosts } from '@/lib/blog-data'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  ExternalLink,
  BookOpen,
  User,
  BarChart2,
  CheckCircle2,
  ArrowRight,
  Layers,
  Clock,
  TrendingUp,
} from 'lucide-react'
import { Breadcrumbs } from '@/components/breadcrumbs'
import AdSense from '@/components/AdSense'
import { CourseButton } from './_components/course-button'

export const revalidate = 3600

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const curso = await getCurso(slug)
  if (!curso) return {}

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://app-finanzas-mu.vercel.app'
  const pageUrl = `${siteUrl}/curso/${slug}`

  return {
    title: `${curso.title} | 100% Gratis en Udemy - FinanzasPro`,
    description: curso.description,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: curso.title,
      description: curso.description,
      url: pageUrl,
      type: 'website',
      images: [
        {
          url: curso.imageUrl || `${siteUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: curso.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: curso.title,
      description: curso.description,
    },
  }
}

const FEATURED_POSTS = blogPosts.slice(0, 4)

export default async function CursoPage({ params }: Props) {
  const { slug } = await params
  const curso = await getCurso(slug)
  if (!curso) notFound()

  const fechaPublicacion = new Date(curso.createdAt).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Breadcrumbs />

        {/* ── HERO ── */}
        <div className="mt-8 space-y-4">
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-green-600 hover:bg-green-600 text-white text-sm px-3 py-1">
              100% DESCUENTO
            </Badge>
            {curso.category && (
              <Badge variant="outline" className="flex items-center gap-1">
                <Layers className="h-3 w-3" />
                {curso.category}
              </Badge>
            )}
            {curso.level && (
              <Badge variant="outline" className="flex items-center gap-1">
                <BarChart2 className="h-3 w-3" />
                {curso.level}
              </Badge>
            )}
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {curso.title}
          </h1>

          <p className="text-lg text-muted-foreground leading-7">{curso.description}</p>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            {curso.instructor && (
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                Instructor: <strong className="text-foreground">{curso.instructor}</strong>
              </span>
            )}
            <span className="flex items-center gap-1.5">
              <BookOpen className="h-4 w-4" />
              Plataforma: <strong className="text-foreground">Udemy</strong>
            </span>
          </div>
        </div>

        {/* ── ADSENSE 1 ── */}
        <div className="mt-8">
          <AdSense slot="1562571362" format="horizontal" />
        </div>

        {/* ── IMAGEN DEL CURSO (si existe) ── */}
        {curso.imageUrl && (
          <div className="mt-6 overflow-hidden rounded-xl border border-border shadow-sm">
            <Image
              src={curso.imageUrl}
              alt={curso.title}
              width={800}
              height={450}
              className="w-full object-cover"
              priority
            />
          </div>
        )}

        {/* ── CARD: QUÉ APRENDERÁS ── */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-lg">¿Qué aprenderás en este curso?</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {(
                curso.highlights ?? [
                  'Fundamentos sólidos del tema desde cero',
                  'Proyectos prácticos para aplicar lo aprendido',
                  'Acceso de por vida al contenido del curso',
                  'Certificado de finalización al terminar',
                  'Ejercicios y recursos descargables incluidos',
                  'Soporte del instructor vía foro de preguntas',
                ]
              ).map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  {point}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* ── CARD: CTA ── */}
        <Card className="mt-6 border-green-200 bg-green-50 dark:bg-green-950/20 dark:border-green-900">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              Curso gratuito por tiempo limitado
            </CardTitle>
            <CardDescription>
              Accede ahora con el 100% de descuento aplicado. Los cupones tienen disponibilidad
              limitada.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-green-600">$0</span>
              {curso.originalPrice && (
                <span className="text-muted-foreground line-through text-lg">
                  {curso.originalPrice}
                </span>
              )}
              <Badge className="bg-green-600 hover:bg-green-600 text-white">100% OFF</Badge>
            </div>
            <CourseButton udemyUrl={curso.udemyUrl} />
          </CardContent>
        </Card>

        {/* ── ADSENSE 2 ── */}
        <div className="mt-8">
          <AdSense slot="5745358955" format="horizontal" />
        </div>

        {/* ── SECCIÓN BLOG (casi al final) ── */}
        <div className="mt-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-foreground">
                Aprende más sobre finanzas personales
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Guías gratuitas para mejorar tu situación financiera
              </p>
            </div>
            <Button variant="outline" asChild size="sm">
              <Link href="/blog">
                Ver todo
                <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FEATURED_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex gap-3 rounded-lg border border-border p-4 hover:bg-muted/50 transition-colors"
              >
                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md bg-muted">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <Badge variant="secondary" className="text-xs mb-1">
                    {post.category}
                  </Badge>
                  <p className="text-sm font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ── ADSENSE 3 ── */}
        <div className="mt-8">
          <AdSense slot="9249489692" format="horizontal" />
        </div>

        {/* ── BLOQUE FINANZASPRO ── */}
        <div className="mt-8 rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 p-6">
          <h3 className="text-lg font-bold text-foreground mb-2">¿Por qué FinanzasPro?</h3>
          <p className="text-sm text-muted-foreground mb-4 leading-6">
            Compartimos cupones de cursos gratuitos, guías de ahorro e inversión y herramientas
            para que tomes mejores decisiones con tu dinero. Todo el contenido es gratuito.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild size="sm">
              <Link href="/blog">
                Leer guías de finanzas
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild size="sm">
              <Link href="/recursos">Ver recursos recomendados</Link>
            </Button>
          </div>
        </div>

        {/* ── AVISO ── */}
        <div className="mt-6 rounded-lg bg-amber-50 border border-amber-200 p-4">
          <div className="flex gap-3">
            <ExternalLink className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-700">
              <span className="font-medium text-amber-800">Aviso: </span>
              Los cupones son recopilados de fuentes públicas y pueden caducar en cualquier momento.
              El enlace puede incluir código de afiliado sin costo adicional para ti.
            </p>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Publicado el {fechaPublicacion} · Disponibilidad limitada
        </p>
      </div>
    </div>
  )
}
