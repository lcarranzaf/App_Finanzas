export interface Author {
  slug: string
  name: string
  role: string
  credentials: string
  bio: string
  expertise: string[]
  image: string
}

export const authors: Author[] = [
  {
    slug: "carlos-sanchez",
    name: "Carlos Sánchez",
    role: "Analista de Inversiones",
    credentials: "Licenciado en Economía · 12 años en mercados financieros",
    bio: "Carlos es economista especializado en mercados de renta variable, fondos indexados y planificación de retiro. Trabajó durante ocho años como analista en una gestora de fondos antes de dedicarse a la educación financiera en español. Su enfoque se basa en estrategias pasivas de largo plazo accesibles para cualquier inversor principiante.",
    expertise: ["Fondos indexados", "ETFs", "Acciones", "Planificación de retiro", "Interés compuesto"],
    image: "/placeholder-user.jpg",
  },
  {
    slug: "maria-lopez",
    name: "María López",
    role: "Planificadora Financiera Personal",
    credentials: "Máster en Finanzas Personales · Consultora financiera independiente",
    bio: "María es consultora financiera independiente con más de 10 años ayudando a familias y jóvenes profesionales a sanear sus finanzas. Es experta en presupuestos, eliminación de deudas y construcción de fondos de emergencia. Cree firmemente que el primer paso hacia la libertad financiera es entender a dónde va cada euro o peso que ganas.",
    expertise: ["Presupuesto personal", "Ahorro", "Gestión de deudas", "Crédito", "Finanzas familiares"],
    image: "/placeholder-user.jpg",
  },
  {
    slug: "alejandro-torres",
    name: "Alejandro Torres",
    role: "Especialista en Tecnología Financiera",
    credentials: "Ingeniero en Sistemas · Certificado en Blockchain y Fintech",
    bio: "Alejandro combina su formación técnica con una profunda pasión por las finanzas personales. Ha investigado y analizado más de 50 plataformas fintech, apps de inversión y activos digitales. Su misión es ayudar a los latinoamericanos a entender cómo la tecnología puede democratizar el acceso a herramientas financieras antes reservadas para grandes inversores.",
    expertise: ["Criptomonedas", "Fintech", "Apps financieras", "Inteligencia Artificial", "Ingresos digitales"],
    image: "/placeholder-user.jpg",
  },
]

export function getAuthor(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug)
}

export function getAuthorByName(name: string): Author | undefined {
  return authors.find((a) => a.name === name)
}

export function getAllAuthors(): Author[] {
  return authors
}
