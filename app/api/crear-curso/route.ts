import { NextRequest, NextResponse } from 'next/server'
import { saveCurso, type CursoData } from '@/lib/kv-storage'

// Extrae el slug del curso de una URL de Udemy
// Ejemplo: https://www.udemy.com/course/python-para-principiantes/?couponCode=ABC
// → "python-para-principiantes"
function extractUdemySlug(url: string): string | null {
  const match = url.match(/udemy\.com\/course\/([^/?#\s]+)/)
  return match ? match[1] : null
}

// Convierte un slug kebab-case a título legible
// "python-para-principiantes" → "Python Para Principiantes"
function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export async function POST(request: NextRequest) {
  // Verificar API key para evitar accesos no autorizados
  const apiKey = request.headers.get('x-api-key')
  if (!process.env.API_SECRET_KEY || apiKey !== process.env.API_SECRET_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let body: { udemyUrl?: string; title?: string; description?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const { udemyUrl, title, description } = body

  if (!udemyUrl) {
    return NextResponse.json({ error: 'udemyUrl es requerido' }, { status: 400 })
  }

  const courseSlug = extractUdemySlug(udemyUrl)
  if (!courseSlug) {
    return NextResponse.json({ error: 'URL de Udemy no válida' }, { status: 400 })
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://finanzaspro.com'

  const cursoData: CursoData = {
    slug: courseSlug,
    udemyUrl,
    title: title || slugToTitle(courseSlug),
    description: description || 'Accede a este curso con cupón de descuento exclusivo.',
    createdAt: new Date().toISOString(),
  }

  await saveCurso(cursoData)

  const bridgeUrl = `${siteUrl}/curso/${courseSlug}`

  return NextResponse.json({
    success: true,
    slug: courseSlug,
    bridgeUrl,
    title: cursoData.title,
  })
}
