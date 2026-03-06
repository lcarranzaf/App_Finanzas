import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Target, Award, Mail } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import type { Metadata } from "next"
import AdSense from "@/components/AdSense"
import { getAllAuthors } from "@/lib/authors-data"

export const metadata: Metadata = {
  title: "Sobre Nosotros - Quiénes Somos en FinanzasPro",
  description:
    "Conoce al equipo detrás de FinanzasPro. Nuestra misión es democratizar la educación financiera en español con guías prácticas, herramientas gratuitas y contenido confiable para alcanzar tu libertad financiera.",
  keywords: ["sobre FinanzasPro", "educación financiera", "equipo", "misión", "finanzas personales en español"],
  alternates: {
    canonical: "https://app-finanzas-mu.vercel.app/sobre-nosotros",
  },
}

export default function SobreNosotrosPage() {
  const authors = getAllAuthors()
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://app-finanzas-mu.vercel.app/sobre-nosotros",
    name: "Sobre FinanzasPro",
    description:
      "Conoce al equipo detrás de FinanzasPro. Nuestra misión es democratizar la educación financiera en español.",
    url: "https://app-finanzas-mu.vercel.app/sobre-nosotros",
    inLanguage: "es",
    isPartOf: { "@id": "https://app-finanzas-mu.vercel.app/#website" },
    about: { "@id": "https://app-finanzas-mu.vercel.app/#organization" },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
        suppressHydrationWarning
      />
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Sobre FinanzasPro</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Democratizando la educación financiera, una persona a la vez
          </p>
        </div>

        {/* Mission */}
        <div className="mt-16">
          <Card>
            <CardHeader className="text-center">
              <Target className="mx-auto h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-2xl">Nuestra Misión</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-muted-foreground">
                Creemos que todos merecen acceso a educación financiera de calidad. Nuestro objetivo es simplificar
                conceptos complejos y proporcionar consejos prácticos que cualquier persona pueda implementar,
                independientemente de su nivel de ingresos o conocimientos previos.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Story */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Nuestra Historia</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              FinanzasPro nació en 2022 de la frustración de ver cómo la falta de educación financiera afectaba a
              millones de personas. Como entusiastas de las finanzas personales, nos dimos cuenta de que la información
              existente era demasiado compleja, estaba dispersa o simplemente no era accesible para el público general.
            </p>
            <p>
              Decidimos crear una plataforma que combinara rigor académico con simplicidad práctica. Cada artículo que
              publicamos pasa por un proceso de investigación exhaustivo, pero se presenta de manera que cualquier
              persona pueda entenderlo y aplicarlo inmediatamente.
            </p>
            <p>
              Hoy, más de 50,000 personas confían en FinanzasPro para tomar decisiones financieras informadas. Nuestros
              lectores han ahorrado millones de euros en comisiones innecesarias, han construido fondos de emergencia
              sólidos y han comenzado su camino en la inversión con confianza.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Nuestros Valores</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <Card>
              <CardHeader className="text-center">
                <Users className="mx-auto h-10 w-10 text-primary mb-4" />
                <CardTitle>Transparencia</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription>
                  Siempre revelamos nuestros enlaces afiliados y nunca recomendamos productos que no hemos investigado
                  exhaustivamente o que no usaríamos nosotros mismos.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Award className="mx-auto h-10 w-10 text-primary mb-4" />
                <CardTitle>Calidad</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription>
                  Cada artículo es investigado, verificado y actualizado regularmente. Preferimos publicar menos
                  contenido de mayor calidad que saturar con información mediocre.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Target className="mx-auto h-10 w-10 text-primary mb-4" />
                <CardTitle>Practicidad</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription>
                  Todo nuestro contenido incluye pasos accionables. No nos limitamos a explicar conceptos, sino que
                  mostramos exactamente cómo implementarlos.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Nuestro Equipo</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {authors.map((author) => (
              <Card key={author.slug} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 mb-3">
                    <span className="text-2xl font-bold text-primary">{author.name.charAt(0)}</span>
                  </div>
                  <CardTitle className="text-lg">
                    <Link href={`/autores/${author.slug}`} className="hover:text-primary transition-colors">
                      {author.name}
                    </Link>
                  </CardTitle>
                  <p className="text-sm text-primary font-medium">{author.role}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{author.credentials}</p>
                </CardHeader>
                <CardContent className="text-center pt-2">
                  <CardDescription className="line-clamp-3 text-left">{author.bio}</CardDescription>
                  <div className="mt-4 flex flex-wrap gap-1.5 justify-center">
                    {author.expertise.slice(0, 3).map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                    ))}
                  </div>
                  <Link
                    href={`/autores/${author.slug}`}
                    className="mt-4 inline-block text-xs text-primary hover:underline font-medium"
                  >
                    Ver artículos →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">FinanzasPro en números</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-4">
            {[
              { value: "2022", label: "Año de fundación" },
              { value: "20+", label: "Artículos publicados" },
              { value: "Gratis", label: "Acceso a todo el contenido" },
              { value: "100%", label: "Contenido en español" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* AdSense */}
        <div className="mt-16">
          <AdSense slot="1562571362" />
        </div>

        {/* Contact CTA */}
        <div className="mt-16 rounded-lg bg-primary/5 p-8 text-center">
          <Mail className="mx-auto h-12 w-12 text-primary mb-4" />
          <h3 className="text-2xl font-bold text-foreground">¿Tienes alguna pregunta?</h3>
          <p className="mt-4 text-muted-foreground">
            Nos encanta escuchar de nuestros lectores. Si tienes sugerencias, preguntas o simplemente quieres saludar,
            no dudes en contactarnos.
          </p>
          <Button className="mt-6" asChild>
            <Link href="/contacto">Contactar</Link>
          </Button>
        </div>
      </div>
    </div>
    </>
  )
}
