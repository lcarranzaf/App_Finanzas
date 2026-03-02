import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getCurso } from '@/lib/kv-storage'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  ExternalLink,
  BookOpen,
  Tag,
  User,
  BarChart2,
  DollarSign,
  CheckCircle2,
  ArrowRight,
  Layers,
} from 'lucide-react'
import { Breadcrumbs } from '@/components/breadcrumbs'
import AdSense from '@/components/AdSense'
import { CourseButton } from './_components/course-button'

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
    title: `${curso.title} | Cupón Udemy - FinanzasPro`,
    description: curso.description,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: curso.title,
      description: curso.description,
      url: pageUrl,
      type: 'website',
      images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630, alt: curso.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: curso.title,
      description: curso.description,
    },
  }
}

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
            <Badge variant="secondary" className="flex items-center gap-1">
              <Tag className="h-3 w-3" />
              Cupón disponible
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

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground pt-1">
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

        {/* ── ADSENSE SUPERIOR ── */}
        <div className="mt-8">
          <AdSense slot="1562571362" format="horizontal" />
        </div>

        {/* ── CARD: CUPÓN + BOTÓN ── */}
        <Card className="mt-6 border-primary/30 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-primary" />
              Oferta con cupón de descuento
            </CardTitle>
            <CardDescription>
              Accede al curso en Udemy con precio reducido. El cupón ya está incluido en el enlace.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Cupón y precio */}
            <div className="flex flex-wrap items-center gap-3">
              {curso.couponCode && (
                <div className="flex items-center gap-2 rounded-lg border border-dashed border-primary/50 bg-background px-4 py-2">
                  <Tag className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Cupón:</span>
                  <span className="font-mono font-bold text-primary tracking-widest">
                    {curso.couponCode}
                  </span>
                </div>
              )}
              {curso.originalPrice && (
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">Precio original:</span>
                  <span className="line-through text-muted-foreground">{curso.originalPrice}</span>
                  <Badge className="bg-green-600 hover:bg-green-600 text-white">Gratis con cupón</Badge>
                </div>
              )}
            </div>

            {/* Botón countdown */}
            <CourseButton udemyUrl={curso.udemyUrl} />
          </CardContent>
        </Card>

        {/* ── CARD: QUÉ APRENDERÁS ── */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-lg">¿Qué aprenderás en este curso?</CardTitle>
          </CardHeader>
          <CardContent>
            {curso.highlights && curso.highlights.length > 0 ? (
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {curso.highlights.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Conocimientos prácticos aplicables desde el primer día',
                  'Fundamentos sólidos del tema explicados paso a paso',
                  'Ejercicios y proyectos reales para afianzar lo aprendido',
                  'Acceso de por vida al contenido del curso',
                  'Certificado de finalización al completar el curso',
                  'Soporte del instructor vía foro de preguntas',
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>

        {/* ── CARD: DETALLES ── */}
        {(curso.level || curso.instructor || curso.category) && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">Detalles del curso</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex flex-col gap-1">
                  <dt className="text-muted-foreground">Plataforma</dt>
                  <dd className="font-medium text-foreground">Udemy</dd>
                </div>
                {curso.level && (
                  <div className="flex flex-col gap-1">
                    <dt className="text-muted-foreground">Nivel</dt>
                    <dd className="font-medium text-foreground">{curso.level}</dd>
                  </div>
                )}
                {curso.instructor && (
                  <div className="flex flex-col gap-1">
                    <dt className="text-muted-foreground">Instructor</dt>
                    <dd className="font-medium text-foreground">{curso.instructor}</dd>
                  </div>
                )}
                {curso.category && (
                  <div className="flex flex-col gap-1">
                    <dt className="text-muted-foreground">Categoría</dt>
                    <dd className="font-medium text-foreground">{curso.category}</dd>
                  </div>
                )}
                {curso.couponCode && (
                  <div className="flex flex-col gap-1">
                    <dt className="text-muted-foreground">Cupón</dt>
                    <dd className="font-mono font-bold text-primary">{curso.couponCode}</dd>
                  </div>
                )}
              </dl>
            </CardContent>
          </Card>
        )}

        {/* ── ADSENSE MEDIO ── */}
        <div className="mt-8">
          <AdSense slot="5745358955" format="horizontal" />
        </div>

        {/* ── BLOQUE: SOBRE FINANZASPRO ── */}
        <div className="mt-8 rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 p-6">
          <h3 className="text-lg font-bold text-foreground mb-2">
            ¿Por qué seguir a FinanzasPro?
          </h3>
          <p className="text-sm text-muted-foreground mb-4 leading-6">
            En FinanzasPro compartimos cupones de cursos, guías de finanzas personales, estrategias
            de inversión y recursos para que tomes mejores decisiones con tu dinero. Todo el
            contenido es gratuito.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild size="sm">
              <Link href="/blog">
                Ver guías de finanzas
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild size="sm">
              <Link href="/recursos">Ver más recursos</Link>
            </Button>
          </div>
        </div>

        {/* ── AVISO DE TRANSPARENCIA ── */}
        <div className="mt-6 rounded-lg bg-amber-50 border border-amber-200 p-4">
          <div className="flex gap-3">
            <ExternalLink className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-700">
              <span className="font-medium text-amber-800">Aviso: </span>
              Este enlace puede incluir código de afiliado. El precio para ti no cambia y los cupones
              son recopilados de fuentes públicas.
            </p>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Publicado el {fechaPublicacion} · Los cupones tienen disponibilidad limitada
        </p>
      </div>
    </div>
  )
}
