import Link from "next/link"
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getBlogPosts } from "@/lib/blog-data"
import { Clock, Calendar } from "lucide-react"
import type { Metadata } from "next"
import AdSense from "@/components/AdSense"

export const metadata: Metadata = {
  title: "Blog de Finanzas Personales - FinanzasPro",
  description:
    "Artículos expertos sobre ahorro, inversiones, presupuestos y estrategias financieras. Aprende a construir riqueza paso a paso.",
  keywords: "blog finanzas, consejos financieros, inversiones, ahorro, presupuesto, dinero",
}

export default function BlogPage() {
  const posts = getBlogPosts()
  const categories = Array.from(new Set(posts.map((post) => post.category)))

  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Blog de Finanzas Personales</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Consejos expertos, estrategias probadas y guías completas para transformar tu vida financiera
          </p>
        </div>

        {/* Categories */}
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          <Badge variant="secondary" className="text-sm">
            Todos los artículos
          </Badge>
          {categories.map((category) => (
            <Badge key={category} variant="outline" className="text-sm">
              {category}
            </Badge>
          ))}
        </div>

        {/* Banner Horizontal AdSense */}
        <div className="mt-12">
          <AdSense slot="3456789012" style={{ display: 'block', width: '100%', height: '90px', margin: '0 auto' }} />
        </div>

        {/* Blog Posts Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.slug} className="hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <Image
                  src={post.image || '/placeholder.svg'}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                  width={1200}
                  height={675}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Badge variant="secondary">{post.category}</Badge>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.publishedAt).toLocaleDateString("es-ES", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </div>
                <CardTitle className="line-clamp-2 text-xl">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="line-clamp-3">{post.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                  <Link href={`/blog/${post.slug}`} className="text-sm font-medium text-primary hover:underline">
                    Leer más →
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sidebar AdSense */}
        <div className="mt-16">
          <AdSense slot="4567890123" style={{ display: 'block', width: '300px', height: '250px', margin: '0 auto' }} />
        </div>
      </div>
    </div>
  )
}
