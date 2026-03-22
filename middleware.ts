import { NextRequest, NextResponse } from 'next/server'

export default function middleware(request: NextRequest) {
  // Redirect non-www to www (handles RSC prefetch requests too)
  const host = request.headers.get('host') || ''
  if (host === 'finanzasdigitales.es') {
    const url = new URL(request.url)
    url.host = 'www.finanzasdigitales.es'
    return NextResponse.redirect(url, { status: 301 })
  }

  const { pathname } = request.nextUrl

  // Redirect /en/* back to /* (site is Spanish-only)
  if (pathname.startsWith('/en')) {
    const newPath = pathname.replace(/^\/en/, '') || '/'
    return NextResponse.redirect(new URL(newPath, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|_next/data|favicon.ico).*)']
}