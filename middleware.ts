import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const runtime = 'edge'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  
  // Países prioritarios para monetización (EE.UU. y Europa)
  const priorityCountries = ['US', 'GB', 'DE', 'FR', 'ES', 'IT', 'NL', 'BE', 'AT', 'CH', 'IE', 'PT', 'SE', 'NO', 'DK', 'FI', 'PL', 'CZ', 'HU', 'RO']
  
  // Obtener país del usuario
  const country = request.geo?.country || 'US'
  
  // Headers para SEO dirigido a países de alto CPM
  const response = NextResponse.next()
  
  // Agregar headers de optimización para motores de búsqueda
  response.headers.set('X-Robots-Tag', 'index, follow, max-video-preview: -1, max-image-preview: large, max-snippet: -1')
  response.headers.set('X-Distribution', 'global')
  response.headers.set('X-Target-Audience', 'US,EU')
  
  // Cache optimizado para páginas de monetización
  if (url.pathname.startsWith('/redireccion')) {
    response.headers.set('Cache-Control', 'public, max-age=0, must-revalidate')
  }
  
  return response
}

export const config = {
  matcher: [
    '/redireccion-m3u8/:path*',
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
}
