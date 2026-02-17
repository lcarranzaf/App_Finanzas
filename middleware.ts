export default function middleware(_request: any) {
  return undefined
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image).*)']
}