export interface Author {
  slug: string
  name: string
  role: string
  bio: string
  expertise: string[]
  image: string
}

export const authors: Author[] = [
  {
    slug: "equipo-finanzaspro",
    name: "FinanzasPro",
    role: "Redacción editorial",
    bio: "El equipo editorial de FinanzasPro está formado por especialistas en finanzas personales con experiencia en análisis de mercados, planificación financiera y educación económica. Nuestro objetivo es hacer accesible la educación financiera en español para toda Latinoamérica y España.",
    expertise: [
      "Finanzas personales",
      "Inversiones",
      "Ahorro",
      "Fondos indexados",
      "Planificación de retiro",
    ],
    image: "https://app-finanzas-mu.vercel.app/og-image.jpg",
  },
]

export function getAuthor(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug)
}

export function getAllAuthors(): Author[] {
  return authors
}
