import { getBlogPost } from "@/lib/blog-data"
import { getAuthorByName, getAllAuthors } from "@/lib/authors-data"

const BASE_URL = "https://www.finanzasdigitales.es"
const ORG_ID = `${BASE_URL}/#organization`

/** Convierte "2026-02-12" → "2026-02-12T00:00:00+00:00" */
function toISODateTime(dateStr: string): string {
  if (!dateStr) return dateStr
  if (dateStr.includes("T")) return dateStr
  return `${dateStr}T00:00:00+00:00`
}

interface StructuredDataProps {
  type: "website" | "article" | "organization" | "financeguide" | "persons"
  data?: {
    slug?: string
    title?: string
    description?: string
    image?: string
    publishedAt?: string
    author?: string
    category?: string
    tags?: string[]
    authorSlugs?: string[]
  }
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  let structuredData: Record<string, unknown> = {}

  switch (type) {
    case "website":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        name: "FinanzasPro",
        description:
          "Tu guía confiable para el éxito financiero. Aprende a ahorrar, invertir y construir un futuro próspero.",
        url: BASE_URL,
        potentialAction: {
          "@type": "SearchAction",
          target: `${BASE_URL}/blog?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
        publisher: { "@id": ORG_ID },
      }
      break

    case "organization":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": ORG_ID,
        name: "FinanzasPro",
        description:
          "Plataforma educativa especializada en finanzas personales, inversiones y estrategias de ahorro.",
        url: BASE_URL,
        logo: {
          "@type": "ImageObject",
          "@id": `${BASE_URL}/#logo`,
          url: `${BASE_URL}/logo-square.png`,
          width: 512,
          height: 512,
          caption: "FinanzasPro",
        },
        foundingDate: "2022-01-01",
        knowsAbout: [
          "Finanzas Personales",
          "Inversiones",
          "Ahorro",
          "Presupuestos",
          "Fondos Indexados",
          "Educación Financiera",
          "ETFs",
          "Bolsa de Valores",
          "Planificación Financiera",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "contacto@finanzasdigitales.es",
          availableLanguage: "Spanish",
          url: `${BASE_URL}/contacto`,
        },
      }
      break

    case "article":
      if (data?.slug) {
        const post = getBlogPost(data.slug)
        if (post) {
          structuredData = {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "@id": `${BASE_URL}/blog/${post.slug}#article`,
            headline: post.title,
            description: post.description,
            image: {
              "@type": "ImageObject",
              url: post.image,
              width: 1200,
              height: 630,
            },
            datePublished: toISODateTime(post.publishedAt),
            dateModified: toISODateTime(post.publishedAt),
            author: (() => {
              const authorData = getAuthorByName(post.author)
              return authorData ? {
                "@type": "Person",
                "@id": `${BASE_URL}/autores/${authorData.slug}#person`,
                name: authorData.name,
                url: `${BASE_URL}/autores/${authorData.slug}`,
                jobTitle: authorData.role,
                worksFor: { "@id": ORG_ID },
                knowsAbout: authorData.expertise,
              } : {
                "@type": "Organization",
                "@id": ORG_ID,
                name: "FinanzasPro",
              }
            })(),
            publisher: { "@id": ORG_ID },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${BASE_URL}/blog/${post.slug}`,
            },
            url: `${BASE_URL}/blog/${post.slug}`,
            keywords: post.tags.join(", "),
            articleSection: post.category,
            wordCount: post.content.split(" ").length,
            inLanguage: "es",
            isAccessibleForFree: true,
            about: {
              "@type": "Thing",
              name: post.category,
            },
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["h1", "article p:first-of-type"],
            },
          }
        }
      }
      break

    case "persons": {
      const slugsToRender = data?.authorSlugs ?? getAllAuthors().map((a) => a.slug)
      const persons = slugsToRender
        .map((slug) => {
          const a = getAllAuthors().find((au) => au.slug === slug)
          if (!a) return null
          return {
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": `${BASE_URL}/autores/${a.slug}#person`,
            name: a.name,
            url: `${BASE_URL}/autores/${a.slug}`,
            jobTitle: a.role,
            description: a.bio,
            knowsAbout: a.expertise,
            worksFor: { "@id": ORG_ID },
          }
        })
        .filter(Boolean)
      return (
        <>
          {persons.map((p: any) => (
            <script
              key={p["@id"]}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(p) }}
              suppressHydrationWarning
            />
          ))}
        </>
      )
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      suppressHydrationWarning
    />
  )
}
