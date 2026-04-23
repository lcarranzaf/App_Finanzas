import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, TrendingUp, Info } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { FAQSection, type FAQItem } from "@/components/faq-section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Mejores ETF en España 2026 | Cómo comprar ETFs y qué índices seguir",
  description:
    "Guía completa de los mejores ETF para invertir en España en 2026: MSCI World, S&P 500, emergentes. Dónde comprarlos, fiscalidad, diferencias con fondos indexados y errores frecuentes.",
  alternates: {
    canonical: "https://www.finanzasdigitales.es/mejores-etf-espana",
  },
  openGraph: {
    title: "Mejores ETF en España 2026",
    description:
      "Qué ETFs son más populares entre inversores españoles, cómo comprarlos, fiscalidad y diferencias clave con los fondos indexados.",
    url: "https://www.finanzasdigitales.es/mejores-etf-espana",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mejores ETF España 2026",
    description:
      "ETFs más usados en España: índices, brokers, fiscalidad y cómo empezar a invertir.",
  },
}

const faqs: FAQItem[] = [
  {
    question: "¿Qué es un ETF y en qué se diferencia de un fondo indexado?",
    answer:
      "Un ETF (Exchange Traded Fund) es un fondo que cotiza en bolsa como si fuera una acción. Al igual que un fondo indexado, replica un índice como el MSCI World o el S&P 500. La diferencia principal: los ETFs se compran y venden durante el horario bursátil a precio de mercado, mientras que los fondos indexados se suscriben al valor liquidativo del día. Para inversores a largo plazo, la diferencia práctica es pequeña.",
  },
  {
    question: "¿Cuánto dinero necesito para empezar a invertir en ETFs en España?",
    answer:
      "Con Trade Republic puedes comprar fracciones de ETF desde 1 €. En la mayoría de brokers, una participación de los ETFs más populares (Amundi MSCI World, iShares Core S&P 500) cuesta entre 5 € y 50 €. No necesitas grandes cantidades para empezar.",
  },
  {
    question: "¿Cómo tributan los ETFs en España?",
    answer:
      "Las ganancias por venta de ETFs tributan en la base del ahorro del IRPF: 19% hasta 6.000 €, 21% de 6.000 € a 50.000 €, 23% de 50.000 € a 200.000 € y 27% a partir de ahí. A diferencia de los fondos de inversión tradicionales, los traspasos entre ETFs sí tributan — no existe la ventaja del traspaso sin peaje fiscal.",
  },
  {
    question: "¿Qué ETF es mejor para un inversor principiante en España?",
    answer:
      "Para la mayoría de principiantes, un ETF que replique el MSCI World (como el Amundi MSCI World UCITS ETF o el iShares Core MSCI World) es una opción sólida. Ofrece exposición a más de 1.500 empresas de 23 países desarrollados con un coste anual (TER) de entorno al 0,10-0,20%. La simplicidad es su principal ventaja.",
  },
  {
    question: "¿Dónde puedo comprar ETFs en España?",
    answer:
      "Los brokers más usados en España para ETFs son Trade Republic (sin comisiones por operación), MyInvestor (acceso a miles de ETFs), Degiro (comisiones bajas) e Interactive Brokers (para inversores más avanzados). También los bancos tradicionales ofrecen ETFs, aunque suelen tener comisiones más altas.",
  },
  {
    question: "¿Son seguros los ETFs? ¿Qué pasa si quiebra el broker?",
    answer:
      "Los ETFs son activos segregados del patrimonio del broker: si el broker quiebra, tus ETFs están protegidos. Además, en España los inversores están cubiertos por el FOGAIN hasta 100.000 € en efectivo no invertido. Los ETFs UCITS (los que se comercializan en Europa) tienen regulación adicional de protección al inversor.",
  },
]

const etfsPopulares = [
  {
    nombre: "Amundi MSCI World UCITS ETF",
    indice: "MSCI World (~1.500 empresas, 23 países)",
    ter: "0,12%",
    divisa: "USD / cubierto EUR disponible",
    uso: "Núcleo de cartera para largo plazo",
    color: "border-blue-200",
  },
  {
    nombre: "iShares Core MSCI World UCITS ETF",
    indice: "MSCI World (~1.500 empresas)",
    ter: "0,20%",
    divisa: "USD",
    uso: "Núcleo de cartera, muy líquido",
    color: "border-blue-200",
  },
  {
    nombre: "Vanguard S&P 500 UCITS ETF",
    indice: "S&P 500 (500 mayores empresas EE.UU.)",
    ter: "0,07%",
    divisa: "USD",
    uso: "Exposición concentrada a EE.UU.",
    color: "border-green-200",
  },
  {
    nombre: "Amundi MSCI Emerging Markets UCITS ETF",
    indice: "MSCI Emerging Markets (China, India, Brasil…)",
    ter: "0,20%",
    divisa: "USD",
    uso: "Complemento de cartera diversificada",
    color: "border-orange-200",
  },
  {
    nombre: "iShares Core € Corp Bond UCITS ETF",
    indice: "Bonos corporativos europeos (investment grade)",
    ter: "0,20%",
    divisa: "EUR",
    uso: "Renta fija, reducir volatilidad",
    color: "border-purple-200",
  },
]

const vsFondos = [
  { aspecto: "Cotización", etf: "En bolsa, tiempo real", fondo: "Una vez al día (VL)" },
  { aspecto: "Traspaso sin tributar", etf: "No — tributa al vender", fondo: "Sí — ventaja fiscal clave" },
  { aspecto: "Inversión mínima", etf: "Desde 1 acción (o fracción)", fondo: "Desde 1 € en muchas plataformas" },
  { aspecto: "Automatización", etf: "Sí (algunos brokers)", fondo: "Sí, más extendido" },
  { aspecto: "Comisión media", etf: "0,07% – 0,25% TER", fondo: "0,10% – 0,30% TER" },
  { aspecto: "Disponibilidad en España", etf: "Amplia en brokers online", fondo: "MyInvestor, Indexa, Trade Republic" },
]

const brokers = [
  {
    nombre: "Trade Republic",
    comision: "Sin comisión por operación",
    minimo: "Desde 1 €",
    destacado: "Ideal principiantes, planes de ahorro automáticos",
    color: "bg-green-50 border-green-200 dark:bg-green-950/20 dark:border-green-800",
  },
  {
    nombre: "MyInvestor",
    comision: "Desde 0 € (algunos ETFs)",
    minimo: "Sin mínimo",
    destacado: "También fondos indexados y planes de pensiones",
    color: "bg-blue-50 border-blue-200 dark:bg-blue-950/20 dark:border-blue-800",
  },
  {
    nombre: "Degiro",
    comision: "~2 € por operación (ETFs seleccionados gratis)",
    minimo: "Sin mínimo",
    destacado: "Bueno para ETFs con alta frecuencia",
    color: "bg-slate-50 border-slate-200 dark:bg-slate-950/20 dark:border-slate-800",
  },
  {
    nombre: "Interactive Brokers",
    comision: "Muy baja (~0,05% min 1 €)",
    minimo: "Sin mínimo",
    destacado: "Para inversores avanzados, acceso global",
    color: "bg-slate-50 border-slate-200 dark:bg-slate-950/20 dark:border-slate-800",
  },
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.finanzasdigitales.es" },
    { "@type": "ListItem", position: 2, name: "Mejores ETF España 2026", item: "https://www.finanzasdigitales.es/mejores-etf-espana" },
  ],
}

export default function MejoresETFPage() {
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
            { label: "Mejores ETF España 2026", href: "/mejores-etf-espana", isActive: true },
          ]}
        />

        {/* Hero */}
        <div className="mb-12">
          <Badge variant="secondary" className="mb-4 text-sm font-medium px-3 py-1">
            Inversión pasiva
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance leading-tight mb-6">
            Mejores ETF en España 2026: cuáles elegir y cómo comprarlos
          </h1>
          <p className="text-xl leading-8 text-muted-foreground text-pretty">
            Los ETFs son el vehículo de inversión pasiva más eficiente en costes. Esta guía te explica qué índices seguir, dónde comprarlos en España, cómo tributan y qué diferencia hay con los fondos indexados.
          </p>
        </div>

        {/* ETFs más populares */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-2">ETFs más usados por inversores españoles en 2026</h2>
          <p className="text-muted-foreground mb-6">
            Los ETFs UCITS son los regulados para su comercialización en Europa. Estos son los que suelen aparecer en las carteras de largo plazo:
          </p>
          <div className="space-y-4">
            {etfsPopulares.map((etf, i) => (
              <Card key={i} className={`border ${etf.color}`}>
                <CardContent className="p-5">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div>
                      <p className="font-semibold text-sm mb-1">{etf.nombre}</p>
                      <p className="text-xs text-muted-foreground mb-2">{etf.indice}</p>
                      <p className="text-xs text-muted-foreground italic">{etf.uso}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                      <Badge variant="outline" className="text-xs">TER {etf.ter}</Badge>
                      <span className="text-xs text-muted-foreground">{etf.divisa}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            * TER = Total Expense Ratio (coste anual total). No constituye recomendación de inversión. Verifica siempre las condiciones actuales del producto.
          </p>
        </section>

        {/* ETF vs Fondo indexado */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-2">ETF vs Fondo indexado: ¿cuál elegir?</h2>
          <p className="text-muted-foreground mb-6">
            Para inversores a largo plazo en España, la diferencia más importante es la <strong>fiscalidad del traspaso</strong>.
          </p>
          <div className="overflow-x-auto rounded-lg border">
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-3 font-semibold">Aspecto</th>
                  <th className="text-left p-3 font-semibold">ETF</th>
                  <th className="text-left p-3 font-semibold">Fondo indexado</th>
                </tr>
              </thead>
              <tbody>
                {vsFondos.map((row, i) => (
                  <tr key={i} className="border-t">
                    <td className="p-3 font-medium text-muted-foreground">{row.aspecto}</td>
                    <td className="p-3">{row.etf}</td>
                    <td className="p-3">{row.fondo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Card className="mt-4 bg-blue-50 border-blue-200 dark:bg-blue-950/20 dark:border-blue-800">
            <CardContent className="p-4 flex gap-3">
              <Info className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
              <p className="text-sm text-blue-800 dark:text-blue-300">
                <strong>Conclusión práctica:</strong> Si inviertes a largo plazo y piensas cambiar de fondo en el futuro, el fondo indexado tiene ventaja fiscal por el traspaso sin tributar. Si no te importa tributar al cambiar, o usas un broker sin acceso a fondos, el ETF es igual de válido.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Dónde comprar */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Dónde comprar ETFs en España</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {brokers.map((b, i) => (
              <Card key={i} className={`border ${b.color}`}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{b.nombre}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 space-y-1">
                  <p className="text-sm"><span className="text-muted-foreground">Comisión:</span> {b.comision}</p>
                  <p className="text-sm"><span className="text-muted-foreground">Mínimo:</span> {b.minimo}</p>
                  <p className="text-xs text-muted-foreground mt-2 italic">{b.destacado}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Pasos para empezar */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Cómo empezar a invertir en ETFs paso a paso</h2>
          <div className="space-y-4">
            {[
              { paso: "1", titulo: "Elige tu estrategia de cartera", desc: "Para la mayoría de inversores a largo plazo, un ETF de renta variable global (MSCI World o ACWI) como núcleo es suficiente. Decide si quieres añadir renta emergente o renta fija." },
              { paso: "2", titulo: "Abre cuenta en un broker regulado", desc: "Trade Republic o MyInvestor son buenas opciones para empezar en España. Ambos están regulados y tienen interfaz en español." },
              { paso: "3", titulo: "Busca el ETF por su ISIN o ticker", desc: "El ISIN es el identificador único del ETF. Asegúrate de que el que compras es UCITS (regulado en Europa) y tiene acumulación (reinvierte dividendos automáticamente)." },
              { paso: "4", titulo: "Configura un plan de ahorro periódico", desc: "Invertir una cantidad fija cada mes (dollar-cost averaging) elimina la necesidad de adivinar el momento perfecto. Trade Republic y MyInvestor lo permiten desde 1 €/mes." },
              { paso: "5", titulo: "No toques la inversión durante años", desc: "El mayor enemigo del inversor es reaccionar a la volatilidad. Los ETFs de renta variable pueden caer un 30-50% en crisis. Lo importante es el horizonte de 10-20 años." },
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

        {/* CTA */}
        <Card className="mb-12 bg-primary/5 border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <TrendingUp className="h-6 w-6 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold mb-1">¿Prefieres fondos indexados en lugar de ETFs?</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Si buscas la ventaja fiscal del traspaso sin tributar, los fondos indexados son la alternativa. Descubre qué plataformas los ofrecen con las comisiones más bajas en España.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild size="sm">
                    <Link href="/fondos-indexados">
                      Ver guía fondos indexados <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <Link href="/mejores-brokers-espana">
                      Comparar brokers
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Preguntas frecuentes sobre ETFs en España</h2>
          <FAQSection faqs={faqs} inArticle />
        </section>

        {/* Links relacionados */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">Guías relacionadas</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { href: "/fondos-indexados", label: "Fondos indexados en España" },
              { href: "/mejores-brokers-espana", label: "Mejores brokers España 2026" },
              { href: "/declaracion-renta-espana", label: "Fiscalidad: declaración de la renta" },
              { href: "/blog/interes-compuesto-como-funciona", label: "El poder del interés compuesto" },
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
