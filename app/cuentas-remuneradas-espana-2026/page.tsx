import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, PiggyBank, ShieldCheck, Wallet } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { FAQSection, type FAQItem } from "@/components/faq-section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Mejores cuentas remuneradas en España 2026 | Comparativa, TAE y condiciones",
  description:
    "Comparativa práctica de cuentas remuneradas en España en 2026. Qué mirar antes de contratar: TAE, condiciones, límites de saldo, liquidez y alternativas.",
  alternates: {
    canonical: "https://www.finanzasdigitales.es/cuentas-remuneradas-espana-2026",
  },
  openGraph: {
    title: "Mejores cuentas remuneradas en España 2026",
    description:
      "Dónde guardar liquidez en España en 2026: cuentas remuneradas, condiciones, límites y diferencias frente a depósitos o fondos monetarios.",
    url: "https://www.finanzasdigitales.es/cuentas-remuneradas-espana-2026",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mejores cuentas remuneradas en España 2026",
    description:
      "Guía para elegir una cuenta remunerada en España sin perder de vista TAE, liquidez, comisiones y límites reales.",
  },
}

const faqs: FAQItem[] = [
  {
    question: "¿Qué es una cuenta remunerada?",
    answer:
      "Es una cuenta bancaria que paga intereses por el dinero depositado. La gran ventaja es la liquidez: puedes mantener efectivo disponible mientras obtienes una pequeña rentabilidad.",
  },
  {
    question: "¿Está cubierta por el Fondo de Garantía de Depósitos?",
    answer:
      "Si la entidad es bancaria y está adherida al esquema correspondiente de garantía de depósitos, el efectivo suele quedar cubierto hasta los límites legales por titular y entidad. Conviene comprobar siempre la ficha oficial de la entidad.",
  },
  {
    question: "¿Qué diferencia hay frente a un depósito?",
    answer:
      "La cuenta remunerada ofrece mucha más flexibilidad. El depósito suele exigir mantener el dinero inmovilizado durante un plazo concreto a cambio de una rentabilidad potencialmente superior.",
  },
  {
    question: "¿Qué diferencia hay frente a un fondo monetario?",
    answer:
      "La cuenta remunerada es más simple y suele ser la opción más clara para un fondo de emergencia. El fondo monetario puede ser más eficiente fiscalmente para ciertos perfiles, pero ya no es un depósito bancario tradicional.",
  },
  {
    question: "¿Qué debo mirar además de la TAE?",
    answer:
      "No basta con la TAE anunciada. Hay que revisar el saldo máximo remunerado, la duración de la oferta, si exige nómina o vinculaciones y si existe alguna comisión que reduzca el beneficio real.",
  },
]

const accountCards = [
  {
    title: "Para liquidez diaria",
    body: "Busca cuentas sencillas, sin coste de mantenimiento y con dinero disponible en cualquier momento. Son las más útiles para fondo de emergencia.",
  },
  {
    title: "Para exprimir una oferta promocional",
    body: "Aquí importa mucho el límite de saldo remunerado y cuánto dura la promoción. Una TAE alta durante pocos meses puede ser menos atractiva de lo que parece.",
  },
  {
    title: "Para importes altos",
    body: "Si manejas mucho efectivo, conviene repartir entre varias entidades y comparar alternativas como depósitos o fondos monetarios de bajo coste.",
  },
]

export default function CuentasRemuneradasPage() {
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
                label: "Mejores cuentas remuneradas 2026",
                href: "/cuentas-remuneradas-espana-2026",
                isActive: true,
              },
            ]}
          />

          <header className="mt-6 mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">Ahorro</Badge>
              <Badge variant="outline">Liquidez</Badge>
              <Badge variant="outline">España 2026</Badge>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Mejores cuentas remuneradas en España en 2026
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Esta guía te ayuda a comparar sin quedarte solo en la cifra llamativa de la portada. La clave está en
              entender qué TAE es real, cuánto saldo remunera y qué condiciones te obliga a cumplir.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Las condiciones pueden cambiar durante el año. Antes de contratar, conviene revisar siempre la web oficial
              de la entidad.
            </p>
          </header>

          <Card className="mb-10 border-emerald-500/30 bg-emerald-500/5">
            <CardContent className="pt-6">
              <h2 className="text-lg font-semibold mb-3">Respuesta rápida</h2>
              <p className="text-sm text-muted-foreground leading-7">
                Una buena cuenta remunerada sirve para aparcar dinero que necesitas tener disponible. Si el objetivo es
                cubrir imprevistos o guardar liquidez a corto plazo, suele ser más sencilla de entender que otras
                alternativas. Si buscas algo más de eficiencia para dinero que no vas a tocar, ya merece la pena comparar
                también fondos monetarios o depósitos.
              </p>
            </CardContent>
          </Card>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Qué mirar antes de elegir</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "TAE real",
                  body: "Importa tanto la cifra como la duración de la oferta. Una promoción muy alta durante pocos meses no vale lo mismo que una remuneración estable.",
                },
                {
                  title: "Saldo máximo remunerado",
                  body: "Muchas cuentas limitan el importe que genera intereses. Si tienes más efectivo, necesitas calcular la rentabilidad total real.",
                },
                {
                  title: "Condiciones y vinculaciones",
                  body: "Algunas exigen nómina, recibos, tarjetas o cierto uso mensual. Todo eso tiene que compensar de verdad.",
                },
                {
                  title: "Liquidez y comisiones",
                  body: "La gracia de este producto es la flexibilidad. Si hay costes o restricciones, conviene compararlo con un depósito o con otras opciones.",
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
            <h2 className="text-2xl font-bold mb-4">Cuándo encaja mejor una cuenta remunerada</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {accountCards.map((card) => (
                <Card key={card.title} className="h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground leading-7">{card.body}</CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Cuenta remunerada vs depósito vs fondo monetario</h2>
            <div className="overflow-x-auto rounded-xl border">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="p-3 text-left border">Criterio</th>
                    <th className="p-3 text-left border">Cuenta remunerada</th>
                    <th className="p-3 text-left border">Depósito</th>
                    <th className="p-3 text-left border">Fondo monetario</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border font-medium">Liquidez</td>
                    <td className="p-3 border">Alta</td>
                    <td className="p-3 border">Baja o media</td>
                    <td className="p-3 border">Alta, con operativa de reembolso</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="p-3 border font-medium">Simplicidad</td>
                    <td className="p-3 border">Muy alta</td>
                    <td className="p-3 border">Alta</td>
                    <td className="p-3 border">Media</td>
                  </tr>
                  <tr>
                    <td className="p-3 border font-medium">Uso típico</td>
                    <td className="p-3 border">Fondo de emergencia y tesorería</td>
                    <td className="p-3 border">Ahorro a plazo</td>
                    <td className="p-3 border">Liquidez gestionada con más flexibilidad fiscal</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Errores frecuentes</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Mirar solo el número grande de la TAE sin revisar condiciones ni límites.",
                "Pensar que toda cuenta remunerada sirve igual para cualquier importe.",
                "Dejar demasiado efectivo en una cuenta corriente sin remuneración.",
                "No comparar esta opción con fondos monetarios o depósitos cuando el horizonte es más largo.",
              ].map((item) => (
                <Card key={item}>
                  <CardContent className="pt-5 text-sm text-muted-foreground leading-7">{item}</CardContent>
                </Card>
              ))}
            </div>
          </section>

          <FAQSection title="Preguntas frecuentes sobre cuentas remuneradas" faqs={faqs} inArticle />

          <section className="mt-10 pt-8 border-t">
            <h2 className="text-xl font-bold mb-4">Siguiente paso</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Link href="/ahorro" className="block rounded-xl border p-4 hover:border-primary/40 hover:bg-primary/5 transition-colors">
                <PiggyBank className="h-5 w-5 text-primary mb-2" />
                <p className="font-semibold text-foreground">Cómo ahorrar en España</p>
                <p className="mt-2 text-sm text-muted-foreground">Métodos y hábitos para mejorar tu margen de ahorro.</p>
              </Link>
              <Link href="/mejores-fondos-monetarios-espana-2026" className="block rounded-xl border p-4 hover:border-primary/40 hover:bg-primary/5 transition-colors">
                <ShieldCheck className="h-5 w-5 text-primary mb-2" />
                <p className="font-semibold text-foreground">Fondos monetarios 2026</p>
                <p className="mt-2 text-sm text-muted-foreground">La alternativa más natural si comparas liquidez y fiscalidad.</p>
              </Link>
              <Link href="/fondos-indexados" className="block rounded-xl border p-4 hover:border-primary/40 hover:bg-primary/5 transition-colors">
                <Wallet className="h-5 w-5 text-primary mb-2" />
                <p className="font-semibold text-foreground">Fondos indexados</p>
                <p className="mt-2 text-sm text-muted-foreground">Para el dinero que sí puedes dejar a largo plazo.</p>
              </Link>
            </div>
          </section>

          <div className="mt-10 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 to-transparent p-6">
            <h3 className="text-xl font-bold text-foreground">¿Quieres dar el siguiente paso después del ahorro?</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-7">
              Una cuenta remunerada es una buena base para liquidez. El resto de la estrategia depende de si buscas
              corto plazo, más flexibilidad fiscal o crecimiento a largo plazo.
            </p>
            <Button asChild className="mt-5">
              <Link href="/comparativas-espana-2026" className="inline-flex items-center gap-2">
                Ver todas las comparativas
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
