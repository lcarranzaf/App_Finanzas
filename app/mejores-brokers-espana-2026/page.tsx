import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Calculator, ShieldCheck, TrendingUp } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { FAQSection, type FAQItem } from "@/components/faq-section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Mejores brokers en España 2026 | Comparativa para ETFs, fondos y acciones",
  description:
    "Guía para comparar brokers en España en 2026: costes, perfil de usuario, tipo de productos y puntos clave antes de elegir plataforma para invertir.",
  alternates: {
    canonical: "https://www.finanzasdigitales.es/mejores-brokers-espana-2026",
  },
  openGraph: {
    title: "Mejores brokers en España 2026",
    description:
      "Qué broker puede encajar mejor en España según si buscas ETFs, fondos indexados, inversión automática o más variedad de mercados.",
    url: "https://www.finanzasdigitales.es/mejores-brokers-espana-2026",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mejores brokers en España 2026",
    description:
      "Comparativa clara de brokers para España con foco en comisiones, simplicidad, seguridad y tipo de inversor.",
  },
}

const faqs: FAQItem[] = [
  {
    question: "¿Qué debe mirar un principiante antes de elegir broker?",
    answer:
      "Lo más útil suele ser comparar facilidad de uso, costes totales, productos disponibles y si la plataforma encaja con una estrategia simple y de largo plazo.",
  },
  {
    question: "¿Es mejor un broker para ETFs o una plataforma de fondos?",
    answer:
      "Depende de cómo quieras invertir. Si priorizas automatización y sencillez, una plataforma fuerte en fondos puede resultar más cómoda. Si buscas más flexibilidad operativa, los ETFs tienen sentido.",
  },
  {
    question: "¿Importan solo las comisiones de compra?",
    answer:
      "No. Hay que mirar el coste total: comisiones de custodia, cambio de divisa, inactividad, transferencias y el propio coste del producto que compres.",
  },
  {
    question: "¿Qué pasa con la seguridad del broker?",
    answer:
      "Es clave revisar regulación, custodia de activos y cómo se trata el efectivo no invertido. La seguridad jurídica importa tanto como el precio.",
  },
  {
    question: "¿Tiene sentido abrir varios brokers?",
    answer:
      "Para la mayoría de perfiles no hace falta empezar con varias cuentas. Suele ser más práctico tener una estructura sencilla y crecer solo cuando haya una razón real.",
  },
]

const brokerProfiles = [
  {
    title: "Perfil principiante",
    body: "Necesita una plataforma clara, costes razonables y una experiencia simple para invertir periódicamente en ETFs o fondos indexados.",
  },
  {
    title: "Perfil que busca automatizar",
    body: "Le interesa delegar parte de la operativa, rebalanceo o la selección de cartera a cambio de más sencillez.",
  },
  {
    title: "Perfil más avanzado",
    body: "Quiere acceso a más mercados, más instrumentos y más control, aunque eso suponga una curva de aprendizaje mayor.",
  },
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.finanzasdigitales.es" },
    { "@type": "ListItem", position: 2, name: "Inversiones", item: "https://www.finanzasdigitales.es/inversiones" },
    { "@type": "ListItem", position: 3, name: "Mejores brokers 2026", item: "https://www.finanzasdigitales.es/mejores-brokers-espana-2026" },
  ],
}

export default function MejoresBrokersPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        suppressHydrationWarning
      />
      <div className="min-h-screen bg-background">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <Breadcrumbs
            customItems={[
              { label: "Inicio", href: "/" },
              { label: "Inversiones", href: "/inversiones" },
              {
                label: "Mejores brokers 2026",
                href: "/mejores-brokers-espana-2026",
                isActive: true,
              },
            ]}
          />

          <header className="mt-6 mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">Inversión</Badge>
              <Badge variant="outline">España</Badge>
              <Badge variant="outline">Comparativa 2026</Badge>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Mejores brokers en España en 2026
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              La mejor plataforma no es la más barata en una línea concreta, sino la que encaja con tu forma de invertir.
              Esta guía te ayuda a comparar con criterio: costes, simplicidad, productos y uso real.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Contenido educativo. Antes de abrir cuenta, revisa la información oficial del broker y su documentación legal.
            </p>
          </header>

          <Card className="mb-10 border-emerald-500/30 bg-emerald-500/5">
            <CardContent className="pt-6">
              <h2 className="text-lg font-semibold mb-3">Respuesta rápida</h2>
              <p className="text-sm text-muted-foreground leading-7">
                Si empiezas desde cero, suele compensar priorizar simplicidad, costes fáciles de entender y una estrategia
                clara. Si ya sabes exactamente qué producto quieres usar o necesitas más mercados, entonces el broker ideal
                puede cambiar bastante.
              </p>
            </CardContent>
          </Card>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Qué mirar antes de elegir broker</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Coste total",
                  body: "No basta con la comisión de compra. Importan también cambio de divisa, custodia, retiradas y costes indirectos.",
                },
                {
                  title: "Tipo de producto",
                  body: "No es lo mismo buscar ETFs, fondos indexados, inversión automática o acceso a muchos mercados internacionales.",
                },
                {
                  title: "Usabilidad",
                  body: "Una plataforma muy potente no siempre es la mejor para quien empieza. La experiencia de uso también cuenta.",
                },
                {
                  title: "Regulación y custodia",
                  body: "Conviene entender quién supervisa la entidad y cómo se gestionan los activos y el efectivo no invertido.",
                },
              ].map((item) => (
                <Card key={item.title}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground leading-7">{item.body}</CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Qué broker encaja mejor según tu perfil</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {brokerProfiles.map((profile) => (
                <Card key={profile.title} className="h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">{profile.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground leading-7">{profile.body}</CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Comparativa rápida</h2>
            <div className="overflow-x-auto rounded-xl border">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="p-3 text-left border">Criterio</th>
                    <th className="p-3 text-left border">Broker simple</th>
                    <th className="p-3 text-left border">Plataforma de fondos</th>
                    <th className="p-3 text-left border">Broker avanzado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border font-medium">Curva de aprendizaje</td>
                    <td className="p-3 border">Baja</td>
                    <td className="p-3 border">Baja o media</td>
                    <td className="p-3 border">Alta</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="p-3 border font-medium">Variedad de mercados</td>
                    <td className="p-3 border">Media</td>
                    <td className="p-3 border">Media</td>
                    <td className="p-3 border">Alta</td>
                  </tr>
                  <tr>
                    <td className="p-3 border font-medium">Encaje típico</td>
                    <td className="p-3 border">ETFs y periodicidad</td>
                    <td className="p-3 border">Fondos y automatización</td>
                    <td className="p-3 border">Más control y más instrumentos</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Errores frecuentes</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Elegir solo por una oferta comercial sin mirar el coste total de uso.",
                "Abrir varias cuentas demasiado pronto y complicar la operativa sin necesidad.",
                "Confundir producto barato con estrategia adecuada.",
                "No revisar cómo encaja el broker con tus aportaciones periódicas y horizonte temporal.",
              ].map((item) => (
                <Card key={item}>
                  <CardContent className="pt-5 text-sm text-muted-foreground leading-7">{item}</CardContent>
                </Card>
              ))}
            </div>
          </section>

          <FAQSection title="Preguntas frecuentes sobre brokers en España" faqs={faqs} inArticle />

          <section className="mt-10 pt-8 border-t">
            <h2 className="text-xl font-bold mb-4">Siguiente paso</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Link href="/fondos-indexados" className="block rounded-xl border p-4 hover:border-primary/40 hover:bg-primary/5 transition-colors">
                <TrendingUp className="h-5 w-5 text-primary mb-2" />
                <p className="font-semibold text-foreground">Fondos indexados</p>
                <p className="mt-2 text-sm text-muted-foreground">Qué comprar cuando ya tienes plataforma elegida.</p>
              </Link>
              <Link href="/calculadoras/interes-compuesto" className="block rounded-xl border p-4 hover:border-primary/40 hover:bg-primary/5 transition-colors">
                <Calculator className="h-5 w-5 text-primary mb-2" />
                <p className="font-semibold text-foreground">Interés compuesto</p>
                <p className="mt-2 text-sm text-muted-foreground">Visualiza el impacto del largo plazo sobre tu cartera.</p>
              </Link>
              <Link href="/inversiones" className="block rounded-xl border p-4 hover:border-primary/40 hover:bg-primary/5 transition-colors">
                <ShieldCheck className="h-5 w-5 text-primary mb-2" />
                <p className="font-semibold text-foreground">Centro de inversiones</p>
                <p className="mt-2 text-sm text-muted-foreground">Más guías para empezar con criterio.</p>
              </Link>
            </div>
          </section>

          <div className="mt-10 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 to-transparent p-6">
            <h3 className="text-xl font-bold text-foreground">El broker es solo una herramienta</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-7">
              Una buena decisión de plataforma ayuda, pero el rendimiento a largo plazo depende más de tu estrategia,
              de los costes acumulados y de mantenerte invertido con disciplina.
            </p>
            <Button asChild className="mt-5">
              <Link href="/comparativas-espana-2026" className="inline-flex items-center gap-2">
                Ver hub de comparativas
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
