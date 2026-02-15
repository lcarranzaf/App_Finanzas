import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Star, Smartphone, CreditCard, TrendingUp, BookOpen, Calculator, Shield } from "lucide-react"
import type { Metadata } from "next"
import AdSense from "@/components/AdSense"

export const metadata: Metadata = {
  title: "Recursos Financieros - Herramientas y Apps Recomendadas",
  description:
    "Descubre las mejores apps, brokers, bancos digitales y herramientas para gestionar tus finanzas personales. Enlaces afiliados verificados.",
  keywords: "recursos financieros, apps finanzas, brokers, bancos digitales, herramientas financieras",
}

export default function RecursosPage() {
  const categories = [
    {
      title: "Apps de Finanzas Personales",
      icon: Smartphone,
      description: "Aplicaciones para gestionar tu presupuesto y gastos",
      resources: [
        {
          name: "Fintonic",
          description: "Gestor financiero integral para España. Conecta todas tus cuentas bancarias.",
          rating: 4.5,
          price: "Gratis",
          affiliate: true,
          link: "https://fintonic.com?ref=finanzaspro",
          features: ["Agregación bancaria", "Categorización automática", "Alertas personalizadas"],
        },
        {
          name: "Mint",
          description: "La app de presupuesto más popular en Estados Unidos.",
          rating: 4.3,
          price: "Gratis",
          affiliate: true,
          link: "https://mint.com?ref=finanzaspro",
          features: ["Seguimiento de gastos", "Score crediticio", "Alertas de facturas"],
        },
        {
          name: "YNAB",
          description: "You Need A Budget - Metodología de presupuesto zero-based.",
          rating: 4.8,
          price: "$14.99/mes",
          affiliate: true,
          link: "https://ynab.com?ref=finanzaspro",
          features: ["Presupuesto proactivo", "Educación financiera", "Soporte 24/7"],
        },
      ],
    },
    {
      title: "Brokers de Inversión",
      icon: TrendingUp,
      description: "Plataformas para invertir en acciones, ETFs y fondos",
      resources: [
        {
          name: "eToro",
          description: "Broker social con copy trading. Ideal para principiantes.",
          rating: 4.2,
          price: "0% comisión en acciones",
          affiliate: true,
          link: "https://etoro.com?ref=finanzaspro",
          features: ["Copy trading", "0% comisión acciones", "Regulado por CySEC"],
        },
        {
          name: "Interactive Brokers",
          description: "Broker profesional con acceso a mercados globales.",
          rating: 4.6,
          price: "Desde $0.005/acción",
          affiliate: true,
          link: "https://interactivebrokers.com?ref=finanzaspro",
          features: ["Mercados globales", "Comisiones bajas", "Herramientas avanzadas"],
        },
        {
          name: "Degiro",
          description: "Broker europeo con comisiones muy competitivas.",
          rating: 4.4,
          price: "Desde €2 por operación",
          affiliate: true,
          link: "https://degiro.com?ref=finanzaspro",
          features: ["ETFs gratuitos", "Regulado en Europa", "Plataforma intuitiva"],
        },
      ],
    },
    {
      title: "Bancos Digitales",
      icon: CreditCard,
      description: "Cuentas bancarias modernas sin comisiones",
      resources: [
        {
          name: "Revolut",
          description: "Banco digital con cuenta multidivisa y inversiones.",
          rating: 4.5,
          price: "Gratis - €13.99/mes",
          affiliate: true,
          link: "https://revolut.com?ref=finanzaspro",
          features: ["Cuenta multidivisa", "Inversiones", "Crypto trading"],
        },
        {
          name: "N26",
          description: "Banco 100% móvil con excelente experiencia de usuario.",
          rating: 4.3,
          price: "Gratis - €16.90/mes",
          affiliate: true,
          link: "https://n26.com?ref=finanzaspro",
          features: ["Sin comisiones", "Notificaciones instantáneas", "Espacios de ahorro"],
        },
        {
          name: "Nubank",
          description: "Banco digital líder en Latinoamérica.",
          rating: 4.7,
          price: "Gratis",
          affiliate: true,
          link: "https://nubank.com?ref=finanzaspro",
          features: ["Sin anualidad", "Cashback", "Interfaz simple"],
        },
      ],
    },
    {
      title: "Educación Financiera",
      icon: BookOpen,
      description: "Cursos y libros para mejorar tu conocimiento financiero",
      resources: [
        {
          name: "Coursera - Finanzas Personales",
          description: "Cursos universitarios sobre finanzas personales e inversiones.",
          rating: 4.6,
          price: "$39-79/mes",
          affiliate: true,
          link: "https://coursera.org/finance?ref=finanzaspro",
          features: ["Certificados universitarios", "Proyectos prácticos", "Acceso móvil"],
        },
        {
          name: "Audible - Libros de Finanzas",
          description: "Audiolibros de los mejores autores de finanzas personales.",
          rating: 4.4,
          price: "$14.95/mes",
          affiliate: true,
          link: "https://audible.com/finance?ref=finanzaspro",
          features: ["30 días gratis", "1 libro gratis/mes", "Biblioteca personal"],
        },
        {
          name: "MasterClass - Finanzas",
          description: "Clases magistrales de expertos en finanzas e inversiones.",
          rating: 4.5,
          price: "$180/año",
          affiliate: true,
          link: "https://masterclass.com/finance?ref=finanzaspro",
          features: ["Expertos reconocidos", "Producción premium", "Acceso ilimitado"],
        },
      ],
    },
    {
      title: "Herramientas y Calculadoras",
      icon: Calculator,
      description: "Utilidades para planificar y calcular tus finanzas",
      resources: [
        {
          name: "Personal Capital",
          description: "Seguimiento de patrimonio neto y planificación de jubilación.",
          rating: 4.4,
          price: "Gratis",
          affiliate: true,
          link: "https://personalcapital.com?ref=finanzaspro",
          features: ["Tracking de inversiones", "Análisis de fees", "Planificación jubilación"],
        },
        {
          name: "Tiller",
          description: "Hojas de cálculo automatizadas para presupuestos.",
          rating: 4.2,
          price: "$79/año",
          affiliate: true,
          link: "https://tillerhq.com?ref=finanzaspro",
          features: ["Google Sheets", "Datos automáticos", "Templates personalizables"],
        },
        {
          name: "FidSafe",
          description: "Almacenamiento seguro de documentos financieros importantes.",
          rating: 4.1,
          price: "Gratis",
          affiliate: false,
          link: "https://fidsafe.com",
          features: ["Almacenamiento seguro", "Organización automática", "Acceso familiar"],
        },
      ],
    },
    {
      title: "Seguros y Protección",
      icon: Shield,
      description: "Protege tu patrimonio y tu familia",
      resources: [
        {
          name: "Lemonade",
          description: "Seguros de hogar y vida con IA y proceso 100% digital.",
          rating: 4.3,
          price: "Desde $5/mes",
          affiliate: true,
          link: "https://lemonade.com?ref=finanzaspro",
          features: ["Proceso digital", "Claims rápidos", "Precios transparentes"],
        },
        {
          name: "PolicyGenius",
          description: "Comparador de seguros de vida y discapacidad.",
          rating: 4.6,
          price: "Gratis (comparación)",
          affiliate: true,
          link: "https://policygenius.com?ref=finanzaspro",
          features: ["Comparación gratuita", "Asesores expertos", "Proceso simplificado"],
        },
      ],
    },
  ]

  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Recursos Financieros Recomendados
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Herramientas, apps y servicios verificados para optimizar tus finanzas personales. Algunos enlaces son
            afiliados y nos ayudan a mantener el contenido gratuito.
          </p>
        </div>

        {/* Educational Introduction */}
        <div className="mt-12">
          <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-li:text-foreground">
            <h2 className="text-2xl font-bold text-foreground mb-4">Cómo elegir las mejores herramientas financieras</h2>
            <p className="text-muted-foreground leading-7">
              En el mundo de las finanzas personales, las herramientas correctas pueden hacer la diferencia entre el éxito 
              y la frustración. Sin embargo, con cientos de apps, brokers y servicios disponibles, elegir puede ser abrumador. 
              En esta guía, hemos seleccionado y revisado cuidadosamente las mejores herramientas en cada categoría, basándonos 
              en criterios como facilidad de uso, costo, seguridad y valor real para el usuario.
            </p>
            <p className="text-muted-foreground leading-7 mt-4">
              <strong>Nuestro proceso de selección:</strong> Cada herramienta en esta lista ha sido evaluada por nuestro equipo 
              considerando factores clave: (1) Seguridad y regulación apropiada, (2) Costos y comisiones transparentes, 
              (3) Facilidad de uso para principiantes, (4) Funcionalidades que realmente aportan valor, y (5) Reputación y 
              reseñas de usuarios reales. Solo incluimos herramientas que usaríamos nosotros mismos o recomendaríamos a familiares.
            </p>
            <p className="text-muted-foreground leading-7 mt-4">
              <strong>Importante:</strong> Las mejores herramientas son las que realmente usarás consistentemente. No necesitas 
              tener 10 apps diferentes. Empieza con una o dos herramientas en las categorías más relevantes para tu situación 
              actual, y expande según tus necesidades evolucionen.
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 rounded-lg bg-amber-50 border border-amber-200 p-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <ExternalLink className="h-5 w-5 text-amber-400" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-amber-800">Aviso sobre enlaces afiliados</h3>
              <div className="mt-2 text-sm text-amber-700">
                <p>
                  Algunos enlaces en esta página son afiliados, lo que significa que podemos recibir una comisión si
                  realizas una compra. Esto no afecta el precio que pagas y nos ayuda a mantener el contenido gratuito.
                  Solo recomendamos productos que hemos probado o investigado exhaustivamente.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* AdSense */}
        <div className="mt-12">
          <AdSense slot="7561827917" format="horizontal" />
        </div>

        {/* Categories */}
        <div className="mt-16 space-y-16">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <section key={category.title}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">{category.title}</h2>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
                  {category.resources.map((resource) => (
                    <Card key={resource.name} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="flex items-center gap-2">
                              {resource.name}
                              {resource.affiliate && (
                                <Badge variant="secondary" className="text-xs">
                                  Afiliado
                                </Badge>
                              )}
                            </CardTitle>
                            <div className="flex items-center gap-2 mt-2">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < Math.floor(resource.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                                    }`}
                                  />
                                ))}
                                <span className="ml-1 text-sm text-muted-foreground">{resource.rating}</span>
                              </div>
                              <Badge variant="outline" className="text-xs">
                                {resource.price}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <CardDescription>{resource.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-1 text-sm text-muted-foreground mb-4">
                          {resource.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button asChild className="w-full">
                          <Link href={resource.link} target="_blank" rel="noopener noreferrer">
                            Ver {resource.name}
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )
          })}
        </div>

        {/* Bottom AdSense */}
        <div className="mt-16">
          <AdSense slot="5745358955" format="horizontal" />
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground">¿Conoces algún recurso que deberíamos incluir?</h3>
          <p className="mt-4 text-muted-foreground">
            Envíanos tus sugerencias y las evaluaremos para incluirlas en nuestra lista.
          </p>
          <Button className="mt-6" asChild>
            <Link href="/contacto">Sugerir Recurso</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
