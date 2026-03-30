import ContactForm from "@/components/contact-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto - Escríbenos tus Dudas Financieras",
  description: "¿Tienes preguntas sobre ahorro, inversiones o presupuestos? Contáctanos para consultas financieras, sugerencias de contenido o propuestas de colaboración. Respondemos en 24-48 horas.",
  keywords: ["contacto Finanzas Digitales", "consulta financiera", "preguntas finanzas", "colaboraciones", "educación financiera"],
  alternates: {
    canonical: "https://www.finanzasdigitales.es/contacto",
  },
}

export default function ContactoPage() {
  return <ContactForm />
}
