"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MessageSquare, Clock } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would integrate with your email service
    console.log("Contact form submitted:", formData)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (isSubmitted) {
    return (
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <svg
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">¡Mensaje enviado!</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Gracias por contactarnos. Te responderemos en un plazo de 24-48 horas.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Contacto</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            ¿Tienes alguna pregunta o sugerencia? Nos encantaría escucharte
          </p>
        </div>

        {/* Educational Content */}
        <div className="mt-12 mb-16">
          <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-li:text-foreground">
            <h2 className="text-2xl font-bold text-foreground mb-4">¿Necesitas ayuda con tus finanzas personales?</h2>
            <p className="text-muted-foreground leading-7">
              En FinanzasPro, estamos comprometidos a ayudarte en tu viaje hacia la libertad financiera. Recibimos cientos
              de consultas cada mes y hacemos nuestro mejor esfuerzo para responder a todas. Aquí te explicamos cómo
              podemos ayudarte y qué esperar cuando nos contactas.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Tipos de consultas que atendemos</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-7">
              <li><strong>Preguntas sobre artículos:</strong> Si algo en nuestros artículos no está claro o necesitas
              más información sobre un tema específico, estamos aquí para ayudar. Nuestros artículos están diseñados para
              ser comprensibles, pero sabemos que cada situación financiera es única.</li>
              <li><strong>Sugerencias de contenido:</strong> ¿Hay un tema financiero que te gustaría que cubramos?
              Nuestros lectores son nuestra mejor fuente de ideas. Si muchos de ustedes piden lo mismo, lo priorizamos
              en nuestro calendario editorial.</li>
              <li><strong>Errores o correcciones:</strong> Si encuentras un error en nuestros artículos o información
              desactualizada, por favor avísanos. Mantenemos nuestro contenido actualizado y preciso, y tu feedback es
              invaluable.</li>
              <li><strong>Colaboraciones:</strong> Si eres un experto en finanzas, un blogger, o tienes una historia
              financiera inspiradora que compartir, nos encantaría escucharte. Consideramos colaboraciones que aporten
              valor real a nuestros lectores.</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Lo que no podemos hacer</h3>
            <p className="text-muted-foreground leading-7">
              Es importante aclarar que <strong>no proporcionamos asesoramiento financiero personalizado</strong>. No podemos
              decirte exactamente qué acciones comprar, qué inversiones hacer, o cómo estructurar tu cartera específica.
              Lo que sí hacemos es proporcionar educación financiera general, estrategias probadas, y herramientas que
              puedes usar para tomar tus propias decisiones informadas.
            </p>
            <p className="text-muted-foreground leading-7 mt-4">
              Si necesitas asesoramiento financiero personalizado, te recomendamos consultar con un asesor financiero
              certificado (CFP) o un planificador financiero profesional que pueda analizar tu situación específica y
              crear un plan personalizado para ti.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Tiempo de respuesta</h3>
            <p className="text-muted-foreground leading-7">
              Respondemos a todos los mensajes dentro de 24-48 horas durante días laborables (lunes a viernes). Si tu
              consulta es urgente o relacionada con una decisión financiera importante, intentamos responder más rápido
              cuando es posible. Por favor, ten paciencia si tu consulta requiere investigación adicional o si recibimos
              un volumen inusualmente alto de mensajes.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Email</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">contacto@app-finanzas-mu.vercel.app</p>
                <p className="text-sm text-muted-foreground mt-2">Para consultas generales y colaboraciones</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Tiempo de Respuesta</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">24-48 horas</p>
                <p className="text-sm text-muted-foreground mt-2">Respondemos todos los mensajes de lunes a viernes</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Tipos de Consulta</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Preguntas sobre artículos</li>
                  <li>• Sugerencias de contenido</li>
                  <li>• Colaboraciones</li>
                  <li>• Reportar errores</li>
                  <li>• Feedback general</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Envíanos un mensaje</CardTitle>
                <CardDescription>Completa el formulario y te responderemos lo antes posible</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="name">Nombre</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Asunto</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}