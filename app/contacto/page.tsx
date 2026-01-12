import ContactForm from "@/components/contact-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto - FinanzasPro",
  description: "¿Tienes preguntas sobre finanzas personales? Contáctanos para consultas, sugerencias o colaboraciones sobre educación financiera.",
  keywords: ["contacto", "consulta financiera", "sugerencias", "colaboraciones", "finanzas personales", "educación financiera"],
}

export default function ContactoPage() {
  return <ContactForm />
}
