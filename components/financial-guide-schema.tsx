// Additional structured data components for finance-specific content
export function FinancialGuideSchema({ post }: { post: any }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["Article", "HowTo"],
    headline: post.title,
    description: post.description,
    image: post.image,
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
        url: "https://app-finanzas-mu.vercel.app/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://app-finanzas-mu.vercel.app/blog/${post.slug}`,
    },
    about: [
      "https://schema.org/PersonalFinance",
      "https://schema.org/Investment",
      "https://schema.org/FinancialPlanning"
    ],
    audience: {
      "@type": "Audience",
      audienceType: "People interested in personal finance and investment"
    },
    educationalLevel: "Beginner",
    learningResourceType: "Guide",
    teaches: post.tags.map((tag: string) => `https://schema.org/${tag}`),
  }

  return (
    <script 
      type="application/ld+json" 
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} 
    />
  )
}