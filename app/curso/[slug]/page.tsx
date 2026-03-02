import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getCurso } from '@/lib/kv-storage'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, BookOpen, Tag } from 'lucide-react'
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
      images: [
        {
          url: `${siteUrl}/og-image.png`,
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
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        <Breadcrumbs />

        <div className="mt-8 flex flex-col items-center text-center gap-6">
          {/* Icono y badge */}
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
            <BookOpen className="h-8 w-8 text-primary" />
          </div>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Tag className="h-3 w-3" />
            Cupón Udemy disponible
          </Badge>

          {/* Título y descripción */}
          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {curso.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-7">{curso.description}</p>
          </div>
        </div>

        {/* Banner AdSense superior */}
        <div className="mt-8">
          <AdSense slot="7561827917" format="horizontal" />
        </div>

        {/* Card principal con botón countdown */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-lg">Accede al curso</CardTitle>
            <CardDescription>
              El enlace se activará en 10 segundos con el cupón ya incluido.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <CourseButton udemyUrl={curso.udemyUrl} />
          </CardContent>
        </Card>

        {/* Aviso de transparencia */}
        <div className="mt-8 rounded-lg bg-amber-50 border border-amber-200 p-4">
          <div className="flex gap-3">
            <ExternalLink className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-amber-800">Aviso de transparencia</p>
              <p className="mt-1 text-sm text-amber-700">
                Este enlace puede ser de afiliado. Compartimos cupones de descuento sin costo
                adicional para ti.
              </p>
            </div>
          </div>
        </div>

        {/* Banner AdSense inferior */}
        <div className="mt-8">
          <AdSense slot="5745358955" format="horizontal" />
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Publicado el {fechaPublicacion}
        </p>
      </div>
    </div>
  )
}
