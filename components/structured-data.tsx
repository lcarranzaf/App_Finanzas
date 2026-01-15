import { getBlogPost } from "@/lib/blog-data"

interface StructuredDataProps {
  type: "website" | "article" | "organization" | "financeguide" | "faqpage" | "howto"
  data?: {
    slug?: string
    title?: string
    description?: string
    image?: string
    publishedAt?: string
    author?: string
    category?: string
    tags?: string[]
    faqs?: { question: string; answer: string }[]
    steps?: { name: string; text: string; image?: string }[]
    totalTime?: string
    estimatedCost?: string
  }
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  let structuredData: Record<string, unknown> = {}

  switch (type) {
    case "website":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "FinanzasPro",
        description:
          "Tu guía confiable para el éxito financiero. Aprende a ahorrar, invertir y construir un futuro próspero.",
        url: "https://finanzaspro.com",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://finanzaspro.com/blog?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
        publisher: {
          "@type": "Organization",
          name: "FinanzasPro",
          logo: {
            "@type": "ImageObject",
            url: "https://finanzaspro.com/logo.png",
          },
        },
      }
      break

    case "article":
      if (data?.slug) {
        const post = getBlogPost(data.slug)
        if (post) {
          structuredData = {
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: post.title,
            description: post.description,
            image: {
              "@type": "ImageObject",
              url: post.image,
              width: 1200,
              height: 630,
            },
            datePublished: post.publishedAt,
            dateModified: post.publishedAt,
            author: {
              "@type": "Person",
              name: post.author,
            },
            publisher: {
              "@type": "Organization",
              name: "FinanzasPro",
              logo: {
                "@type": "ImageObject",
                url: "https://finanzaspro.com/logo.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://finanzaspro.com/blog/${post.slug}`,
            },
            keywords: post.tags.join(", "),
            articleSection: post.category,
            wordCount: post.content.split(" ").length,
            inLanguage: "es-ES",
            isAccessibleForFree: true,
            about: {
              "@type": "Thing",
              name: post.category,
            },
          }
        }
      }
      break

    case "faqpage":
      if (data?.faqs && data.faqs.length > 0) {
        structuredData = {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: data.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      }
      break

    case "howto":
      if (data?.steps && data.steps.length > 0) {
        structuredData = {
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: data.title,
          description: data.description,
          image: data.image,
          totalTime: data.totalTime,
          estimatedCost: data.estimatedCost,
          step: data.steps.map((step, index) => ({
            "@type": "HowToStep",
            name: step.name,
            text: step.text,
            position: index + 1,
            image: step.image,
          })),
          tool: [
            {
              "@type": "HowToTool",
              name: "Calculadora financiera",
            },
            {
              "@type": "HowToTool",
              name: "Hoja de cálculo",
            },
          ],
        }
      }
      break

    case "organization":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "FinanzasPro",
        description: "Plataforma educativa especializada en finanzas personales, inversiones y estrategias de ahorro.",
        url: "https://finanzaspro.com",
        logo: "https://finanzaspro.com/logo.png",
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: "contacto@finanzaspro.com",
        },
        sameAs: [
          "https://twitter.com/finanzaspro",
          "https://linkedin.com/company/finanzaspro",
          "https://facebook.com/finanzaspro",
        ],
        foundingDate: "2022",
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
      }
      break
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
