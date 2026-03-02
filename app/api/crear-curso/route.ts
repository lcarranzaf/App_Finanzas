import { NextRequest, NextResponse } from 'next/server'
import { saveCurso, type CursoData } from '@/lib/kv-storage'

function extractUdemySlug(url: string): string | null {
  const match = url.match(/udemy\.com\/course\/([^/?#\s]+)/)
  return match ? match[1] : null
}

function extractCouponCode(url: string): string | undefined {
  try {
    return new URL(url).searchParams.get('couponCode') ?? undefined
  } catch {
    return undefined
  }
}

function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

export async function POST(request: NextRequest) {
  try {
    const apiKey = request.headers.get('x-api-key')
    if (!process.env.API_SECRET_KEY || apiKey !== process.env.API_SECRET_KEY) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    let body: {
      udemyUrl?: string
      title?: string
      description?: string
      instructor?: string
      level?: string
      originalPrice?: string
      category?: string
      highlights?: string[]
    }
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
    }

    const { udemyUrl, title, description, instructor, level, originalPrice, category, highlights } = body

    if (!udemyUrl) {
      return NextResponse.json({ error: 'udemyUrl es requerido' }, { status: 400 })
    }

    const courseSlug = extractUdemySlug(udemyUrl)
    if (!courseSlug) {
      return NextResponse.json({ error: 'URL de Udemy no válida' }, { status: 400 })
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://app-finanzas-mu.vercel.app'

    const cursoData: CursoData = {
      slug: courseSlug,
      udemyUrl,
      title: title || slugToTitle(courseSlug),
      description: description || 'Accede a este curso con cupón de descuento exclusivo.',
      createdAt: new Date().toISOString(),
      couponCode: extractCouponCode(udemyUrl),
      instructor: instructor || undefined,
      level: level || undefined,
      originalPrice: originalPrice || undefined,
      category: category || undefined,
      highlights: highlights?.length ? highlights : undefined,
    }

    await saveCurso(cursoData)

    const bridgeUrl = `${siteUrl}/curso/${courseSlug}`

    return NextResponse.json({ success: true, slug: courseSlug, bridgeUrl, title: cursoData.title })
  } catch (err) {
    console.error('[crear-curso] Error interno:', err)
    const message = err instanceof Error ? err.message : String(err)
    return NextResponse.json({ error: 'Internal server error', detail: message }, { status: 500 })
  }
}
