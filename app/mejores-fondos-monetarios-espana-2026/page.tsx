import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, PiggyBank, Shield, TrendingUp } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { FAQSection, type FAQItem } from "@/components/faq-section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Mejores fondos monetarios en España 2026 | Liquidez, riesgo y alternativas",
  description:
    "Guía sobre fondos monetarios en España en 2026: cuándo pueden encajar, qué mirar antes de contratarlos y cómo compararlos frente a cuentas remuneradas o depósitos.",
  alternates: {
    canonical: "https://www.finanzasdigitales.es/mejores-fondos-monetarios-espana-2026",
  },
  openGraph: {
    title: "Mejores fondos monetarios en España 2026",
    description:
      "Qué son los fondos monetarios, cómo se usan en España y cuándo pueden ser más interesantes que una cuenta remunerada o un depósito.",
    url: "https://www.finanzasdigitales.es/mejores-fondos-monetarios-espana-2026",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mejores fondos monetarios en España 2026",
    description:
      "Guía clara para entender fondos monetarios, liquidez, riesgo y comparación con cuentas remuneradas.",
  },
}

const faqs: FAQItem[] = [
  {
    question: "¿Qué es un fondo monetario?",
    answer:
      "Es un fondo que invierte en activos de muy corto plazo y alta calidad crediticia. Se usa sobre todo para gestionar liquidez con una volatilidad normalmente baja.",
  },
  {
    question: "¿Es igual de seguro que una cuenta remunerada?",
    answer:
      "No exactamente. La cuenta remunerada es un producto bancario y el fondo monetario es un vehículo de inversión. El comportamiento suele ser muy estable, pero no funciona igual que un depósito bancario tradicional.",
  },
  {
    question: "¿Cuándo puede tener sentido un fondo monetario?",
    answer:
      "Puede encajar para dinero que no necesitas tocar a diario, para tesorería a corto plazo o como paso intermedio antes de invertir a largo plazo.",
  },
  {
    question: "¿Qué debo mirar antes de contratar uno?",
    answer:
      "Importa la comisión total, la calidad de los activos, el tipo de fondo, la operativa de entrada y salida y cómo encaja en tu estrategia general de liquidez.",
  },
  {
    question: "¿Es mejor un fondo monetario o una cuenta remunerada?",
    answer:
      "Depende del uso. Para fondo de emergencia puro, la cuenta remunerada suele ser más simple. Para importes mayores o para cierta planificación fiscal, un fondo monetario puede resultar interesante.",
  },
]

const useCases = [
  {
    title: "Liquidez a corto plazo",
    body: "Puede ser útil para dinero que no quieres dejar parado en cuenta corriente pero que tampoco vas a invertir a muchos años.",
  },
  {
    title: "Paso intermedio antes de invertir",
    body: "Encaja bien para aparcar capital mientras decides entradas periódicas hacia fondos indexados u otras inversiones.",
  },
  {
    title: "Gestión de tesorería personal",
    body: "Si ya tienes una base de ahorro cubierta, este tipo de fondo puede complementar tu caja con más orden que una cuenta ordinaria.",
  },
]

export default function MejoresFondosMonetariosPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        suppressHydrationWarning
      />
      <div className="min-h-screen bg-background">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <Breadcrumbs
            customItems={[
              { label: "Inicio", href: "/" },
              { label: "Ahorro", href: "/ahorro" },
              {
                label: "Mejores fondos monetarios 2026",
                href: "/mejores-fondos-monetarios-espana-2026",
                isActive: true,
              },
            ]}
          />

          <header className="mt-6 mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">Liquidez</Badge>
              <Badge variant="outline">España</Badge>
              <Badge variant="outline">Comparativa 2026</Badge>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Mejores fondos monetarios en España en 2026
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Si buscas una alternativa a cuentas remuneradas o depósitos, esta guía te ayuda a entender cuándo un
              fondo monetario puede encajar y qué puntos deberías revisar antes de contratarlo.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Contenido educativo. Antes de invertir, revisa siempre el folleto oficial y el nivel de riesgo del producto.
            </p>
          </header>

          <Card className="mb-10 border-emerald-500/30 bg-emerald-500/5">
            <CardContent className="pt-6">
              <h2 className="text-lg font-semibold mb-3">Respuesta rápida</h2>
              <p className="text-sm text-muted-foreground leading-7">
                Un fondo monetario no sustituye automáticamente a una cuenta remunerada. Tiene más sentido cuando quieres
                gestionar liquidez con algo más de flexibilidad financiera y aceptas que no es un producto bancario
                tradicional. Para un fondo de emergencia puro, la cuenta remunerada suele seguir siendo la opción más simple.
              </p>
            </CardContent>
          </Card>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Qué mirar antes de elegir</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Comisión total",
                  body: "En un producto pensado para rentabilidades moderadas, una comisión alta pesa mucho. Conviene priorizar fondos eficientes.",
                },
                {
                  title: "Tipo de activos",
                  body: "No todos los fondos monetarios son iguales. Importa la calidad del papel en cartera y el plazo medio de vencimiento.",
                },
                {
                  title: "Liquidez operativa",
                  body: "Aunque suelen ser líquidos, no funcionan con la inmediatez de una cuenta bancaria. Hay que conocer bien el proceso de reembolso.",
                },
                {
                  title: "Uso dentro de tu estrategia",
                  body: "Tiene más sentido como pieza de gestión de caja que como sustituto universal de cualquier producto de ahorro.",
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
            <h2 className="text-2xl font-bold mb-4">Cuándo puede encajar mejor</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {useCases.map((item) => (
                <Card key={item.title} className="h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground leading-7">{item.body}</CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Fondo monetario vs cuenta remunerada vs depósito</h2>
            <div className="overflow-x-auto rounded-xl border">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="p-3 text-left border">Criterio</th>
                    <th className="p-3 text-left border">Fondo monetario</th>
                    <th className="p-3 text-left border">Cuenta remunerada</th>
                    <th className="p-3 text-left border">Depósito</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border font-medium">Simplicidad</td>
                    <td className="p-3 border">Media</td>
                    <td className="p-3 border">Alta</td>
                    <td className="p-3 border">Alta</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="p-3 border font-medium">Liquidez</td>
                    <td className="p-3 border">Alta, con reembolso</td>
                    <td className="p-3 border">Muy alta</td>
                    <td className="p-3 border">Limitada</td>
                  </tr>
                  <tr>
                    <td className="p-3 border font-medium">Uso típico</td>
                    <td className="p-3 border">Gestión de liquidez</td>
                    <td className="p-3 border">Fondo de emergencia</td>
                    <td className="p-3 border">Ahorro a plazo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Errores frecuentes</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Usarlo como si fuera exactamente igual que una cuenta bancaria.",
                "Aceptar costes altos en un producto pensado para rentabilidades moderadas.",
                "No entender el plazo real de disponibilidad del dinero.",
                "Elegirlo sin tener clara la función que cumple dentro de tu estrategia de ahorro e inversión.",
              ].map((item) => (
                <Card key={item}>
                  <CardContent className="pt-5 text-sm text-muted-foreground leading-7">{item}</CardContent>
                </Card>
              ))}
            </div>
          </section>

          <FAQSection title="Preguntas frecuentes sobre fondos monetarios" faqs={faqs} inArticle />

          <section className="mt-10 pt-8 border-t">
            <h2 className="text-xl font-bold mb-4">Siguiente paso</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Link href="/cuentas-remuneradas-espana-2026" className="block rounded-xl border p-4 hover:border-primary/40 hover:bg-primary/5 transition-colors">
                <PiggyBank className="h-5 w-5 text-primary mb-2" />
                <p className="font-semibold text-foreground">Cuentas remuneradas</p>
                <p className="mt-2 text-sm text-muted-foreground">La referencia más simple para liquidez diaria.</p>
              </Link>
              <Link href="/ahorro" className="block rounded-xl border p-4 hover:border-primary/40 hover:bg-primary/5 transition-colors">
                <Shield className="h-5 w-5 text-primary mb-2" />
                <p className="font-semibold text-foreground">Estrategias de ahorro</p>
                <p className="mt-2 text-sm text-muted-foreground">Cómo ordenar tu liquidez antes de invertir.</p>
              </Link>
              <Link href="/fondos-indexados" className="block rounded-xl border p-4 hover:border-primary/40 hover:bg-primary/5 transition-colors">
                <TrendingUp className="h-5 w-5 text-primary mb-2" />
                <p className="font-semibold text-foreground">Fondos indexados</p>
                <p className="mt-2 text-sm text-muted-foreground">Para el capital que sí puedes dejar a largo plazo.</p>
              </Link>
            </div>
          </section>

          <div className="mt-10 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 to-transparent p-6">
            <h3 className="text-xl font-bold text-foreground">Compara antes de mover tu liquidez</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-7">
              Si estás entre cuenta remunerada, fondo monetario o depósito, lo más útil es decidir primero cuánto dinero
              necesitas disponible y con qué horizonte temporal trabajas.
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
