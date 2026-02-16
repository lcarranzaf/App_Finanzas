import ContactForm from "@/components/contact-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto - Escríbenos tus Dudas Financieras",
  description: "¿Tienes preguntas sobre ahorro, inversiones o presupuestos? Contáctanos para consultas financieras, sugerencias de contenido o propuestas de colaboración. Respondemos en 24-48 horas.",
  keywords: ["contacto FinanzasPro", "consulta financiera", "preguntas finanzas", "colaboraciones", "educación financiera"],
  alternates: {
    canonical: "https://app-finanzas-mu.vercel.app/contacto",
  },
}

export default function ContactoPage() {
  return <ContactForm />
}
