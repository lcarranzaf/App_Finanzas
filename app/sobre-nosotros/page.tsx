import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Target, Award, Mail, BookOpen, ShieldCheck, Search, AlertTriangle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import type { Metadata } from "next"
import AdSense from "@/components/AdSense"
import { getAllAuthors } from "@/lib/authors-data"
import StructuredData from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Sobre Nosotros | Finanzas Digitales — Educación Financiera en España",
  description:
    "Conoce quiénes somos, nuestra metodología editorial y por qué puedes confiar en nuestro contenido sobre finanzas personales en España. Equipo con formación en economía y experiencia financiera real.",
  keywords: ["sobre Finanzas Digitales", "educación financiera España", "quiénes somos", "metodología editorial", "finanzas personales"],
  alternates: {
    canonical: "https://www.finanzasdigitales.es/sobre-nosotros",
  },
  openGraph: {
    title: "Sobre Nosotros — Quiénes Somos en Finanzas Digitales",
    description: "Conoce el equipo, la metodología editorial y las fuentes que usamos para crear contenido fiable sobre finanzas personales en España.",
    url: "https://www.finanzasdigitales.es/sobre-nosotros",
    type: "website",
    locale: "es_ES",
    siteName: "Finanzas Digitales",
  },
}

export default function SobreNosotrosPage() {
  const authors = getAllAuthors()
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://www.finanzasdigitales.es/sobre-nosotros",
    name: "Sobre Finanzas Digitales",
    description:
      "Conoce al equipo detrás de Finanzas Digitales. Nuestra misión es democratizar la educación financiera en español con rigor, transparencia y fuentes verificadas.",
    url: "https://www.finanzasdigitales.es/sobre-nosotros",
    inLanguage: "es",
    isPartOf: { "@id": "https://www.finanzasdigitales.es/#website" },
    about: { "@id": "https://www.finanzasdigitales.es/#organization" },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
        suppressHydrationWarning
      />
      <StructuredData type="persons" />
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">

          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Sobre Finanzas Digitales
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Somos un equipo de economistas y especialistas financieros comprometidos con ofrecer
              educación financiera rigurosa, gratuita y adaptada a la realidad española.
            </p>
          </div>

          {/* YMYL disclaimer */}
          <div className="mt-12 rounded-lg border border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30 p-6 flex gap-4">
            <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-sm text-amber-800 dark:text-amber-200">
              <strong>Aviso importante:</strong> El contenido de Finanzas Digitales tiene carácter educativo e
              informativo. No constituye asesoramiento financiero personalizado ni recomendación de inversión.
              Antes de tomar decisiones financieras relevantes, consulta con un profesional regulado por la CNMV.{" "}
              <Link href="/aviso-legal" className="underline font-medium">Leer aviso legal completo</Link>.
            </div>
          </div>

          {/* Mission */}
          <div className="mt-16">
            <Card>
              <CardHeader className="text-center">
                <Target className="mx-auto h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Nuestra Misión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground text-center">
                  Creemos que todos los ciudadanos españoles merecen acceso a información financiera clara,
                  honesta y basada en datos reales. Nuestra misión es traducir la complejidad del sistema
                  financiero —fondos de inversión, fiscalidad del IRPF, hipotecas, pensiones— en guías
                  prácticas que cualquier persona pueda entender y aplicar, sin importar su nivel de
                  ingresos o formación previa.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Story */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Nuestra Historia</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Finanzas Digitales nació en 2022 de una constatación concreta: la mayor parte del contenido
                sobre finanzas personales disponible en español no estaba adaptado a la realidad española.
                Hablaba de cuentas 401(k) en lugar de planes de pensiones, de dólares en lugar de euros, de
                brokers sin regulación CNMV y de un sistema fiscal completamente diferente al nuestro.
              </p>
              <p>
                Decidimos construir desde cero un recurso diseñado específicamente para el ahorrador e
                inversor español: con referencias al IRPF, a los fondos de inversión registrados en España,
                a las cuentas remuneradas disponibles en entidades reguladas por el Banco de España, y a las
                normativas de la CNMV y ESMA que protegen al inversor minorista en la Unión Europea.
              </p>
              <p>
                Cada semana, nuevos lectores llegan a Finanzas Digitales buscando información clara y sin
                conflictos de interés para tomar decisiones informadas: desde cómo abrir su primera cuenta de
                inversión hasta cómo optimizar la declaración de la renta con su fondo indexado.
              </p>
            </div>
          </div>

          {/* Editorial process */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Nuestra Metodología Editorial</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Card>
                <CardHeader>
                  <Search className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">1. Investigación con fuentes primarias</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Cada artículo parte de fuentes oficiales: informes del Banco de España, memorias de la
                    CNMV, datos del INE, directrices de la ESMA y normativa fiscal de la AEAT. No
                    reproducimos contenido de otros blogs ni usamos información no verificada.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <BookOpen className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">2. Redacción por especialistas</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Todo el contenido es elaborado por miembros del equipo con formación universitaria en
                    economía o ingeniería financiera y experiencia profesional verificable en el sector
                    financiero español.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <ShieldCheck className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">3. Revisión de datos y cifras</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Antes de publicar, verificamos que los datos (TAEs, comisiones, tramos IRPF, límites de
                    aportación) estén actualizados. Cuando una cifra puede variar, indicamos explícitamente
                    la fecha de referencia y la fuente.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Award className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">4. Actualización periódica</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    El entorno financiero cambia: nuevas regulaciones, cambios en tipos de interés,
                    modificaciones fiscales. Revisamos y actualizamos los artículos más relevantes cuando
                    se producen cambios significativos que afectan a su vigencia.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sources */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Fuentes que Utilizamos</h2>
            <p className="text-muted-foreground mb-8">
              Nuestros artículos se apoyan en fuentes regulatorias y académicas de primer nivel. Nunca
              tomamos datos de fuentes no verificables o sin respaldo institucional.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { name: "Banco de España", desc: "Tipos de interés, informes bancarios" },
                { name: "CNMV", desc: "Supervisión de inversiones y fondos" },
                { name: "ESMA", desc: "Regulación financiera europea" },
                { name: "AEAT", desc: "Fiscalidad, IRPF, normativa fiscal" },
                { name: "INE", desc: "IPC, datos macroeconómicos" },
                { name: "OCU", desc: "Análisis de productos financieros" },
              ].map((source) => (
                <div key={source.name} className="rounded-lg border border-border p-4">
                  <div className="font-semibold text-sm text-foreground">{source.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">{source.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Transparency policy */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">Política de Transparencia</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                <strong className="text-foreground">Publicidad:</strong> Este sitio muestra anuncios a través
                de Google AdSense. Los anuncios son independientes de nuestro contenido editorial y no
                influyen en las recomendaciones ni valoraciones que publicamos.
              </p>
              <p>
                <strong className="text-foreground">Afiliados:</strong> Algunos enlaces a productos o
                servicios financieros pueden ser enlaces de afiliado, lo que significa que podemos recibir
                una comisión si contratas el producto a través de ellos, sin coste adicional para ti.
                Identificamos estos enlaces en los artículos correspondientes. Las comisiones nunca influyen
                en nuestra valoración: solo recomendamos productos que consideramos genuinamente útiles para
                el lector.
              </p>
              <p>
                <strong className="text-foreground">Errores y correcciones:</strong> Si detectas un error
                en algún artículo, puedes comunicárnoslo a través del{" "}
                <Link href="/contacto">formulario de contacto</Link>. Corregimos los errores con transparencia,
                indicando la naturaleza del cambio cuando sea relevante para el lector.
              </p>
              <p>
                <strong className="text-foreground">Independencia editorial:</strong> No aceptamos contenido
                patrocinado que no esté claramente identificado como tal. Las comparativas y análisis se
                realizan con criterios editoriales propios, no en función de relaciones comerciales.
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
                    Revelamos siempre nuestros enlaces afiliados y la presencia de publicidad. Nunca
                    recomendamos productos que no hemos analizado con criterios propios e independientes.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <Award className="mx-auto h-10 w-10 text-primary mb-4" />
                  <CardTitle>Rigor</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription>
                    Cada artículo se apoya en fuentes oficiales y es redactado por especialistas con
                    experiencia real en el sector financiero español. Preferimos menos contenido y de mayor
                    calidad.
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
                    Todo nuestro contenido incluye pasos concretos adaptados al contexto español: plataformas
                    reguladas, fiscalidad del IRPF y productos disponibles en España.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Team */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-foreground text-center mb-4">Nuestro Equipo</h2>
            <p className="text-center text-muted-foreground mb-8">
              Economistas y especialistas con experiencia profesional real en el sector financiero español.
            </p>
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
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {author.education.degree} · {author.education.institution}
                    </p>
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
                      Ver perfil y artículos →
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">Finanzas Digitales en Números</h2>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {[
                { value: "2022", label: "Año de fundación" },
                { value: "28+", label: "Artículos publicados" },
                { value: "3", label: "Especialistas del equipo" },
                { value: "100%", label: "Contenido gratuito" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
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
            <h3 className="text-2xl font-bold text-foreground">¿Tienes alguna pregunta o sugerencia?</h3>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Nos encanta recibir feedback de nuestros lectores. Si detectas un error, tienes una sugerencia
              de tema o simplemente quieres saludarnos, escríbenos.
            </p>
            <Button className="mt-6" asChild>
              <Link href="/contacto">Contactar con el equipo</Link>
            </Button>
          </div>

        </div>
      </div>
    </>
  )
}
