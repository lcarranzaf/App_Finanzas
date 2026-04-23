import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { getAuthor, getAllAuthors } from "@/lib/authors-data"
import { getBlogPosts } from "@/lib/blog-data"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, GraduationCap, Award } from "lucide-react"

interface AuthorPageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllAuthors().map((author) => ({ slug: author.slug }))
}

export async function generateMetadata({ params }: AuthorPageProps): Promise<Metadata> {
  const author = getAuthor(params.slug)
  if (!author) return { title: "Autor no encontrado" }

  return {
    title: `${author.name} — ${author.role}`,
    description: author.bio,
    alternates: {
      canonical: `https://www.finanzasdigitales.es/autores/${author.slug}`,
    },
    openGraph: {
      title: `${author.name} | Finanzas Digitales`,
      description: author.bio,
      url: `https://www.finanzasdigitales.es/autores/${author.slug}`,
    },
  }
}

export default function AuthorPage({ params }: AuthorPageProps) {
  const author = getAuthor(params.slug)
  if (!author) notFound()

  const allPosts = getBlogPosts()
  const authorPosts = allPosts.filter((post) => post.author === author.name)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `https://www.finanzasdigitales.es/autores/${author.slug}#person`,
    name: author.name,
    jobTitle: author.role,
    description: author.bio,
    url: `https://www.finanzasdigitales.es/autores/${author.slug}`,
    worksFor: {
      "@type": "Organization",
      "@id": "https://www.finanzasdigitales.es/#organization",
      name: "Finanzas Digitales",
    },
    knowsAbout: author.expertise,
    alumniOf: {
      "@type": "EducationalOrganization",
      name: author.education.institution,
    },
    ...(author.hasCredential
      ? { hasCredential: author.hasCredential.map((c) => ({ "@type": "EducationalOccupationalCredential", name: c })) }
      : {}),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.finanzasdigitales.es" },
            { "@type": "ListItem", position: 2, name: "Autores", item: "https://www.finanzasdigitales.es/autores" },
            { "@type": "ListItem", position: 3, name: author.name, item: `https://www.finanzasdigitales.es/autores/${author.slug}` },
          ],
        }) }}
        suppressHydrationWarning
      />
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {/* Perfil del autor */}
          <div className="mb-16 flex flex-col sm:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden border-2 border-primary/20">
                <span className="text-3xl font-bold text-primary">
                  {author.name.charAt(0)}
                </span>
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-foreground">
                {author.slug === "equipo-finanzaspro" ? "Equipo Editorial Finanzas Digitales" : author.name}
              </h1>
              <p className="mt-1 text-lg text-primary font-medium">{author.role}</p>
              {author.credentials && (
                <p className="mt-1 text-sm text-muted-foreground">{author.credentials}</p>
              )}
              <div className="mt-3 flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <GraduationCap className="h-4 w-4 shrink-0 text-primary" />
                  <span>{author.education.degree} — {author.education.institution}</span>
                </div>
                {author.hasCredential?.map((c) => (
                  <div key={c} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Award className="h-4 w-4 shrink-0 text-primary" />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
              {(author.bioFull ?? author.bio).split("\n\n").map((para, i) => (<p key={i} className="mt-4 text-muted-foreground leading-7">{para}</p>))}
              <div className="mt-6 flex flex-wrap gap-2">
                {author.expertise.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Artículos del autor */}
          {authorPosts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Artículos publicados ({authorPosts.length})
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {authorPosts.map((post) => (
                  <Card key={post.slug} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Badge variant="secondary">{post.category}</Badge>
                      </div>
                      <CardTitle className="text-lg line-clamp-2">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="hover:text-primary transition-colors"
                        >
                          {post.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="line-clamp-2">{post.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.publishedAt).toLocaleDateString("es-ES", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                            timeZone: "UTC",
                          })}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-border">
            <Link href="/sobre-nosotros" className="text-primary hover:underline">
              ← Sobre Finanzas Digitales
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
