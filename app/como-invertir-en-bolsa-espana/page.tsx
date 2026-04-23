import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, TrendingUp, AlertTriangle, CheckCircle2 } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { FAQSection, type FAQItem } from "@/components/faq-section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Cómo invertir en bolsa en España 2026 | Guía para principiantes",
  description:
    "Aprende a invertir en bolsa en España desde cero: qué es la bolsa, cómo empezar, qué brokers usar, cuánto dinero necesitas y los errores que debes evitar en 2026.",
  alternates: {
    canonical: "https://www.finanzasdigitales.es/como-invertir-en-bolsa-espana",
  },
  openGraph: {
    title: "Cómo invertir en bolsa en España 2026",
    description:
      "Guía práctica para empezar a invertir en bolsa en España: pasos, brokers, estrategias y errores frecuentes.",
    url: "https://www.finanzasdigitales.es/como-invertir-en-bolsa-espana",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cómo invertir en bolsa en España 2026",
    description:
      "Pasos concretos para empezar a invertir en bolsa en España, con brokers regulados y sin complicaciones.",
  },
}

const faqs: FAQItem[] = [
  {
    question: "¿Cuánto dinero necesito para empezar a invertir en bolsa en España?",
    answer:
      "Con brokers como Trade Republic puedes empezar desde 1 € comprando fracciones de acciones o ETFs. En la práctica, para que tenga sentido después de costes y para construir una cartera diversificada, se suele recomendar empezar con un mínimo de 500-1.000 €, o contribuir con 50-100 € mensuales de forma constante.",
  },
  {
    question: "¿Es seguro invertir en bolsa en España?",
    answer:
      "Los brokers regulados en España están supervisados por la CNMV y los valores que compras son de tu propiedad (están segregados del patrimonio del broker). El FOGAIN cubre hasta 100.000 € si el broker quiebra. El riesgo real no es el del broker, sino la volatilidad del mercado: la bolsa puede bajar a corto plazo, pero históricamente ha subido a largo plazo.",
  },
  {
    question: "¿Qué es mejor para un principiante: acciones individuales o ETFs?",
    answer:
      "Para la gran mayoría de principiantes, los ETFs de índices globales son mejor opción. Seleccionar acciones individuales requiere tiempo de análisis, conocimiento profundo de empresas y tolerar mayor riesgo de concentración. Un ETF sobre el MSCI World diversifica tu inversión en 1.500 empresas de 23 países con una sola compra.",
  },
  {
    question: "¿Cuándo es buen momento para invertir en bolsa?",
    answer:
      "Intentar predecir el mejor momento es lo que se llama market timing, y los estudios muestran que prácticamente nadie lo hace bien de forma consistente. La estrategia que mejor funciona para inversores a largo plazo es invertir cantidades fijas cada mes independientemente del mercado. Así compras más cuando está barato y menos cuando está caro, promediando el precio de entrada.",
  },
  {
    question: "¿Cómo tributan las ganancias de bolsa en España?",
    answer:
      "Las ganancias patrimoniales por venta de acciones o ETFs tributan en la base del ahorro del IRPF: 19% hasta 6.000 €, 21% de 6.000 € a 50.000 €, 23% de 50.000 € a 200.000 € y 27% a partir de 200.000 €. Los dividendos también tributan en la base del ahorro. Puedes compensar pérdidas con ganancias del mismo año o de los 4 años siguientes.",
  },
  {
    question: "¿Qué pasa si la bolsa cae justo después de invertir?",
    answer:
      "Es una situación normal y que casi todos los inversores viven en algún momento. Si tu horizonte es de 10 o más años, las caídas temporales no afectan al resultado final — lo que importa es no vender en pánico. Las mayores pérdidas de los inversores particulares ocurren precisamente al vender durante las caídas y perderse la recuperación posterior.",
  },
  {
    question: "¿Necesito un asesor financiero para invertir en bolsa?",
    answer:
      "Para una estrategia sencilla de inversión indexada a largo plazo, no es necesario. Plataformas como Indexa Capital o MyInvestor te ofrecen carteras diversificadas de fondos indexados de forma automática a bajo coste. Si tu situación es compleja (patrimonio elevado, empresa propia, necesidades específicas), un asesor CNMV puede aportar valor.",
  },
]

const tiposActivos = [
  {
    tipo: "Acciones",
    descripcion: "Participación en el capital de una empresa. Potencial de alta rentabilidad y alta volatilidad.",
    dificultad: "Media-Alta",
    horizonte: "Largo plazo",
    emoji: "📈",
  },
  {
    tipo: "ETFs de índices",
    descripcion: "Fondo que replica un índice bursátil (MSCI World, S&P 500). Diversificación automática.",
    dificultad: "Baja",
    horizonte: "Largo plazo",
    emoji: "🌍",
  },
  {
    tipo: "Fondos indexados",
    descripcion: "Similar al ETF pero sin cotización en bolsa. Ventaja fiscal: traspaso sin tributar.",
    dificultad: "Baja",
    horizonte: "Largo plazo",
    emoji: "🏦",
  },
  {
    tipo: "Bonos / Renta fija",
    descripcion: "Préstamo a un gobierno o empresa. Menor rentabilidad esperada, menor volatilidad.",
    dificultad: "Media",
    horizonte: "Medio-Largo plazo",
    emoji: "📄",
  },
  {
    tipo: "REITs / Inmobiliario cotizado",
    descripcion: "Empresas que invierten en inmuebles. Rentabilidad por dividendos + revalorización.",
    dificultad: "Media",
    horizonte: "Largo plazo",
    emoji: "🏠",
  },
]

const errores = [
  { error: "Invertir dinero que puedes necesitar a corto plazo", solucion: "Mantén siempre un fondo de emergencia de 3-6 meses de gastos en cuenta remunerada antes de invertir en bolsa." },
  { error: "Vender en pánico cuando el mercado cae", solucion: "Define tu estrategia y horizonte temporal antes de invertir. Las caídas son temporales; las pérdidas solo se materializan si vendes." },
  { error: "Concentrar todo en pocas acciones o un solo sector", solucion: "Un ETF global diversifica automáticamente. Evita apostar todo a una empresa o país." },
  { error: "Ignorar las comisiones y costes totales", solucion: "Una diferencia del 1% anual en comisiones puede costar decenas de miles de euros en 20 años por el efecto del interés compuesto." },
  { error: "Operar con frecuencia intentando ganar a corto plazo", solucion: "El trading activo pierde dinero para la mayoría de inversores particulares. La inversión pasiva y periódica supera al 90% de gestores activos a largo plazo." },
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.finanzasdigitales.es" },
    { "@type": "ListItem", position: 2, name: "Cómo invertir en bolsa en España", item: "https://www.finanzasdigitales.es/como-invertir-en-bolsa-espana" },
  ],
}

export default function ComoInvertirBolsaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        suppressHydrationWarning
      />
      <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <Breadcrumbs
          customItems={[
            { label: "Inicio", href: "/" },
            { label: "Cómo invertir en bolsa en España", href: "/como-invertir-en-bolsa-espana", isActive: true },
          ]}
        />

        {/* Hero */}
        <div className="mb-12">
          <Badge variant="secondary" className="mb-4 text-sm font-medium px-3 py-1">
            Inversión para principiantes
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance leading-tight mb-6">
            Cómo invertir en bolsa en España: guía para empezar desde cero
          </h1>
          <p className="text-xl leading-8 text-muted-foreground text-pretty">
            Invertir en bolsa no es solo para expertos ni para ricos. Con la estrategia correcta, un principiante puede construir patrimonio de forma consistente. Esta guía te explica exactamente cómo hacerlo en España en 2026.
          </p>
        </div>

        {/* Por qué invertir */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Por qué invertir en bolsa (y por qué no hacerlo da miedo innecesariamente)</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { titulo: "La inflación destruye el ahorro parado", desc: "Con una inflación del 2-3% anual, 10.000 € en cuenta corriente valen 7.400 € reales en 10 años. La bolsa históricamente supera la inflación." },
              { titulo: "El tiempo es tu mayor ventaja", desc: "1.000 € invertidos al 7% anual se convierten en 7.600 € en 30 años sin añadir nada más. El interés compuesto funciona mejor cuanto antes empiezas." },
              { titulo: "No necesitas acertar el momento", desc: "Invertir cantidades fijas cada mes (sin importar si sube o baja) es la estrategia que mejor funciona para la mayoría de inversores a largo plazo." },
            ].map((c, i) => (
              <Card key={i}>
                <CardContent className="p-5">
                  <p className="font-semibold text-sm mb-2">{c.titulo}</p>
                  <p className="text-xs text-muted-foreground">{c.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Tipos de activos */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-2">Qué puedes comprar en bolsa</h2>
          <p className="text-muted-foreground mb-6">Cada tipo de activo tiene un perfil de rentabilidad-riesgo diferente.</p>
          <div className="space-y-3">
            {tiposActivos.map((a, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-lg border bg-card">
                <span className="text-2xl">{a.emoji}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-semibold text-sm">{a.tipo}</p>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-xs">{a.dificultad}</Badge>
                      <Badge variant="outline" className="text-xs">{a.horizonte}</Badge>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">{a.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pasos para empezar */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Cómo empezar a invertir en bolsa en España: 6 pasos</h2>
          <div className="space-y-4">
            {[
              { paso: "1", titulo: "Crea un fondo de emergencia primero", desc: "Antes de invertir en bolsa, ten 3-6 meses de gastos en una cuenta remunerada (Trade Republic, Openbank) o fondo monetario. El dinero de emergencia nunca debe estar en bolsa." },
              { paso: "2", titulo: "Define tu horizonte temporal y tolerancia al riesgo", desc: "¿Cuánto tiempo puedes dejar el dinero sin tocarlo? Si son más de 10 años y puedes aguantar caídas del 30-50% sin vender, la renta variable global es razonable. Si el horizonte es menor, una mezcla con renta fija tiene sentido." },
              { paso: "3", titulo: "Elige una estrategia sencilla (la más simple suele ganar)", desc: "Para la mayoría: un ETF o fondo indexado de renta variable global (MSCI World o ACWI). Añade renta emergente si quieres más diversificación. No compliques lo que no necesita ser complejo." },
              { paso: "4", titulo: "Abre cuenta en un broker regulado en España", desc: "Trade Republic (sin comisiones, ideal principiantes), MyInvestor (fondos + ETFs + planes de pensiones), Indexa Capital (cartera automatizada). Todos regulados por CNMV o equivalente europeo." },
              { paso: "5", titulo: "Configura aportaciones periódicas automáticas", desc: "Establece una transferencia automática mensual y una orden de compra recurrente. Quita la decisión emocional de la ecuación. 100 €/mes durante 20 años a un 7% anual son más de 52.000 €." },
              { paso: "6", titulo: "No mires la cartera cada día — deja que trabaje", desc: "El mayor riesgo no es el mercado, es tu propio comportamiento. Los inversores que compran y mantienen baten sistemáticamente a los que operan con frecuencia. Revisa tu cartera una vez al año como máximo." },
            ].map((s) => (
              <div key={s.paso} className="flex gap-4 p-4 rounded-lg border bg-card">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {s.paso}
                </div>
                <div>
                  <p className="font-semibold text-sm">{s.titulo}</p>
                  <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Errores frecuentes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Errores más comunes al empezar a invertir</h2>
          <div className="space-y-4">
            {errores.map((e, i) => (
              <div key={i} className="rounded-lg border overflow-hidden">
                <div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-950/20 border-b border-red-100 dark:border-red-900">
                  <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                  <p className="text-sm font-medium text-red-800 dark:text-red-300">{e.error}</p>
                </div>
                <div className="flex items-start gap-3 p-4">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground">{e.solucion}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Calculadora */}
        <Card className="mb-12 bg-primary/5 border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <TrendingUp className="h-6 w-6 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold mb-1">Calcula cuánto puede crecer tu inversión</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Usa nuestra calculadora de interés compuesto para ver cuánto acumularías invirtiendo una cantidad fija cada mes durante 10, 20 o 30 años.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild size="sm">
                    <Link href="/calculadoras/interes-compuesto">
                      Abrir calculadora <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <Link href="/mejores-brokers-espana">
                      Ver comparativa de brokers
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Preguntas frecuentes sobre invertir en bolsa</h2>
          <FAQSection faqs={faqs} inArticle />
        </section>

        {/* Links relacionados */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">Guías relacionadas</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { href: "/mejores-etf-espana", label: "Mejores ETFs en España 2026" },
              { href: "/fondos-indexados", label: "Fondos indexados: guía completa" },
              { href: "/mejores-brokers-espana", label: "Mejores brokers España 2026" },
              { href: "/declaracion-renta-espana", label: "Cómo tributan tus inversiones" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors text-sm font-medium"
              >
                {l.label}
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
    </>
  )
}
