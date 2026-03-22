import { NextRequest, NextResponse } from 'next/server'

export default function middleware(request: NextRequest) {
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