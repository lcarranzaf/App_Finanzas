import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle2, TrendingUp, Shield, Clock, AlertCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { FAQSection, type FAQItem } from "@/components/faq-section"
import AdSense from "@/components/AdSense"

export const metadata: Metadata = {
  title: `Mejores Fondos Indexados España 2026 — Qué Son, Cómo Invertir y Cuáles Elegir`,
  description:
    "Los mejores fondos indexados en España 2026: compara MSCI World, S&P 500 y fondos de BBVA, Caixabank y Santander vs alternativas. MyInvestor, Trade Republic e Indexa Capital. Guía completa.",
  keywords: [
    "mejores fondos indexados España 2026",
    "fondo indexado",
    "fondos indexados sp500",
    "fondo indexado sp500",
    "fondo indexado BBVA",
    "fondos indexados BBVA",
    "fondo indexado Caixabank",
    "fondos indexados Santander",
    "diferencia ETF fondo indexado",
    "cómo invertir fondos indexados",
    "fondo indexado MSCI World",
    "MyInvestor fondos indexados",
    "invertir indexados principiantes",
    "mejor fondo indexado",
    "fondo Amundi MSCI World",
  ],
  alternates: {
    canonical: "https://www.finanzasdigitales.es/fondos-indexados",
  },
  openGraph: {
    title: "Fondos Indexados en España 2026 — Guía Completa para Principiantes",
    description:
      "Todo sobre fondos indexados: qué son, cómo funcionan y los mejores para invertir en España. MyInvestor, Indexa Capital y más.",
    url: "https://www.finanzasdigitales.es/fondos-indexados",
    type: "website",
    locale: "es_ES",
    siteName: "Finanzas Digitales",
  },
}

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.finanzasdigitales.es/fondos-indexados",
  name: "Fondos Indexados en España — Guía Completa",
  description: "Guía completa sobre fondos indexados en España: qué son, cómo funcionan, mejores opciones y cómo empezar a invertir.",
  url: "https://www.finanzasdigitales.es/fondos-indexados",
  inLanguage: "es",
  isPartOf: { "@id": "https://www.finanzasdigitales.es/#website" },
}

const mejoresIndices = [
  {
    indice: "MSCI World",
    empresas: "~1.500 empresas",
    paises: "23 países desarrollados",
    rentabilidad: "~9% anual histórico",
    para: "Cartera global diversificada",
    recomendado: true,
  },
  {
    indice: "S&P 500",
    empresas: "500 mayores empresas EEUU",
    paises: "Solo EEUU",
    rentabilidad: "~10% anual histórico",
    para: "Exposición al mercado americano",
    recomendado: false,
  },
  {
    indice: "MSCI Europe",
    empresas: "~400 empresas europeas",
    paises: "15 países europeos",
    rentabilidad: "~7% anual histórico",
    para: "Diversificación europea",
    recomendado: false,
  },
  {
    indice: "MSCI Emerging Markets",
    empresas: "~1.400 empresas emergentes",
    paises: "24 países emergentes",
    rentabilidad: "~6% anual histórico",
    para: "Complemento con más riesgo",
    recomendado: false,
  },
]

const plataformasEspana = [
  {
    nombre: "MyInvestor",
    tipo: "Banco digital",
    minimo: "Desde 1 €",
    comision: "0% comisión de gestora propia",
    ventaja: "Fondos Vanguard y Amundi accesibles, traspaso sin peaje fiscal",
    enlaceInfo: "/blog/invertir-fondos-indexados-principiantes",
    destacado: true,
  },
  {
    nombre: "Indexa Capital",
    tipo: "Roboadvisor",
    minimo: "Desde 1.000 €",
    comision: "~0.45% anual todo incluido",
    ventaja: "Cartera automática y rebalanceo incluido",
    enlaceInfo: "/blog/roboadvisors-guia-completa-inversion-automatizada",
    destacado: false,
  },
  {
    nombre: "Trade Republic",
    tipo: "Broker europeo",
    minimo: "Desde 1 €",
    comision: "0 € por operación en ETFs",
    ventaja: "ETFs de fondos indexados con aportaciones desde 1 €/mes",
    enlaceInfo: "/inversiones",
    destacado: false,
  },
  {
    nombre: "Degiro",
    tipo: "Broker online",
    minimo: "Sin mínimo",
    comision: "Desde 0,50 € por operación",
    ventaja: "Acceso a fondos y ETFs de toda Europa",
    enlaceInfo: "/inversiones",
    destacado: false,
  },
]

const pasos = [
  {
    num: "1",
    titulo: "Entiende qué estás comprando",
    desc: "Un fondo indexado MSCI World reparte tu dinero entre las 1.500 mayores empresas del mundo. Si Apple sube, ganas. Si Nestlé sube, también. No dependes de que una empresa lo haga bien.",
  },
  {
    num: "2",
    titulo: "Elige la plataforma",
    desc: "Para empezar, MyInvestor o Trade Republic son las opciones más accesibles en España. MyInvestor permite invertir en fondos sin coste de custodia y con ventaja fiscal. Trade Republic permite ETFs desde 1 €.",
  },
  {
    num: "3",
    titulo: "Decide el importe y la frecuencia",
    desc: "Lo ideal es una aportación fija mensual, aunque sea pequeña. Con 100-200 €/mes y 20 años de horizonte temporal, el resultado puede superar los 58.000-120.000 € al 8% anual.",
  },
  {
    num: "4",
    titulo: "Activa la aportación automática",
    desc: "La clave del éxito en fondos indexados es no intervenir. Configura una transferencia automática el día de cobro. Así evitas la tentación de esperar 'el momento perfecto'.",
  },
  {
    num: "5",
    titulo: "No mires el saldo cada día",
    desc: "Las caídas del mercado son normales y temporales. El MSCI World ha caído más del 30% varias veces en la historia y siempre ha recuperado y superado máximos. Tu mejor estrategia es no hacer nada.",
  },
]

const errores = [
  {
    error: "Elegir el fondo con más rentabilidad reciente",
    realidad: "Los fondos que más subieron el año pasado no tienen por qué ser los mejores el próximo. Los índices globales te dan rentabilidad promedio del mercado, que históricamente supera al 90% de los fondos activos.",
  },
  {
    error: "Esperar a que el mercado baje para entrar",
    realidad: "Nadie sabe cuándo bajará el mercado. El coste de esperar puede ser mayor que el de entrar en un máximo. Las aportaciones periódicas (DCA) promedian el precio de compra automáticamente.",
  },
  {
    error: "Invertir dinero que puedes necesitar pronto",
    realidad: "Los fondos indexados son para un horizonte mínimo de 5-7 años. Si puedes necesitar el dinero antes, guárdalo en una cuenta remunerada o fondo monetario.",
  },
  {
    error: "Diversificar demasiado entre muchos fondos",
    realidad: "Un solo fondo MSCI World ya incluye 1.500 empresas de 23 países. Añadir 10 fondos diferentes no diversifica más, solo complica la gestión y puede añadir costes.",
  },
]

const faqs: FAQItem[] = [
  {
    question: "¿Qué son los fondos indexados y cómo funcionan?",
    answer: "Un fondo indexado es un fondo de inversión que replica automáticamente la composición de un índice bursátil, como el MSCI World o el S&P 500. En lugar de que un gestor seleccione acciones, el fondo simplemente compra todas las empresas del índice en la misma proporción. Esto lo hace más barato (comisiones del 0,1-0,3% vs 1-2% en fondos activos) y, históricamente, más rentable que la mayoría de los fondos gestionados activamente.",
  },
  {
    question: "¿Cuánto dinero necesito para empezar a invertir en fondos indexados en España?",
    answer: "En MyInvestor puedes empezar desde 1 €. En Indexa Capital el mínimo es 1.000 €. En Trade Republic, los ETFs de fondos indexados están disponibles desde 1 €. Lo importante no es el importe inicial sino la constancia: invertir 100 €/mes durante 20 años al 8% genera más de 58.000 €.",
  },
  {
    question: "¿Cuál es el mejor fondo indexado para empezar en España?",
    answer: "Para la mayoría de inversores principiantes en España, el Amundi MSCI World o el Vanguard Global Stock Index (accesibles en MyInvestor) son excelentes opciones. Replican el MSCI World, que cubre 1.500 empresas de 23 países desarrollados, con comisiones inferiores al 0,3% anual. Son la base de la cartera más recomendada por la comunidad Bogleheads española.",
  },
  {
    question: "¿Cuál es la diferencia entre un fondo indexado y un ETF?",
    answer: "Ambos replican índices, pero los fondos indexados se compran y venden al precio de cierre del día (como un fondo tradicional), mientras que los ETFs cotizan en bolsa como acciones. En España, los fondos indexados tienen ventaja fiscal: puedes traspasar dinero entre fondos sin tributar por las plusvalías hasta que retires el dinero. Los ETFs no tienen esa ventaja fiscal en España.",
  },
  {
    question: "¿Son seguros los fondos indexados?",
    answer: "Los fondos indexados tienen riesgo de mercado: si el mercado cae, el valor de tu inversión baja temporalmente. Sin embargo, históricamente el MSCI World nunca ha dado rentabilidad negativa en periodos de 15+ años. El riesgo real disminuye cuanto más largo es tu horizonte temporal. Además, en España los fondos de inversión están protegidos por el FOGAIN (límite de 100.000 € por inversor).",
  },
  {
    question: "¿Cómo tributan los fondos indexados en España?",
    answer: "En España, los fondos de inversión (incluyendo los indexados) tienen la ventaja del traspaso sin peaje fiscal: puedes mover dinero de un fondo a otro sin tributar hasta que hagas el reembolso final. Cuando retiras el dinero, las ganancias tributan como rendimiento de capital mobiliario: 19% hasta 6.000 €, 21% de 6.000 a 50.000 €, y 23% a partir de 50.000 €.",
  },
]

const fondosSP500 = [
  { fondo: "Amundi S&P 500 UCITS ETF", ter: "0,07%", donde: "Trade Republic, Degiro", tipo: "ETF" },
  { fondo: "iShares Core S&P 500 UCITS ETF", ter: "0,07%", donde: "Trade Republic, Degiro", tipo: "ETF" },
  { fondo: "Vanguard S&P 500 UCITS ETF", ter: "0,07%", donde: "MyInvestor (ETF)", tipo: "ETF" },
  { fondo: "Amundi IS S&P 500 ESG (Fondo)", ter: "0,12%", donde: "MyInvestor", tipo: "Fondo" },
]

const comparativaBancos = [
  { entidad: "BBVA", fondo: "BBVA Bolsa EEUU FI", indice: "S&P 500", ter: "0,60%", nota: "6-8x más caro" },
  { entidad: "CaixaBank", fondo: "CaixaBank Index Mundial Plus", indice: "MSCI World", ter: "1,00%", nota: "8-13x más caro" },
  { entidad: "Santander", fondo: "MI Fondo Santander EEUU Índice", indice: "S&P 500", ter: "0,80%", nota: "11x más caro" },
  { entidad: "MyInvestor", fondo: "Amundi MSCI World UCITS", indice: "MSCI World", ter: "0,12%", nota: "⭐ Recomendado" },
  { entidad: "MyInvestor", fondo: "Vanguard Global Stock Index", indice: "MSCI World", ter: "0,18%", nota: "⭐ Recomendado" },
  { entidad: "Trade Republic", fondo: "Amundi S&P 500 UCITS ETF", indice: "S&P 500", ter: "0,07%", nota: "⭐ Recomendado" },
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.finanzasdigitales.es" },
    { "@type": "ListItem", position: 2, name: "Fondos Indexados", item: "https://www.finanzasdigitales.es/fondos-indexados" },
  ],
}

export default function FondosIndexadosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
        suppressHydrationWarning
      />
      <div className="flex flex-col">
        {/* Breadcrumbs */}
        <div className="mx-auto max-w-7xl w-full px-6 lg:px-8 pt-6">
          <Breadcrumbs
            customItems={[
              { label: "Inicio", href: "/" },
              { label: "Fondos Indexados", href: "/fondos-indexados", isActive: true },
            ]}
          />
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-br from-background via-background to-emerald-500/5 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center rounded-full bg-emerald-500/10 px-4 py-2 mb-6 border border-emerald-500/20">
                <TrendingUp className="h-5 w-5 text-emerald-600 mr-2" />
                <span className="text-sm font-medium text-emerald-600">Guía completa 2026</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance leading-tight">
                Mejores Fondos Indexados en España 2026:{" "}
                <span className="text-emerald-600">guía completa para empezar</span>
              </h1>
              <p className="mt-6 text-xl leading-8 text-muted-foreground text-pretty">
                Qué son, cómo funcionan, cuáles son los mejores en España y cómo empezar a invertir paso a paso. Sin tecnicismos ni letra pequeña.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="#como-empezar">Cómo empezar</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/calculadoras/interes-compuesto">Calcular crecimiento</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Qué es un fondo indexado */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold text-foreground mb-6">¿Qué es un fondo indexado?</h2>
              <div className="prose prose-lg max-w-none space-y-6">
                <p className="text-muted-foreground leading-8">
                  Un <strong className="text-foreground">fondo indexado</strong> es un fondo de inversión que compra automáticamente todas las empresas de un índice bursátil, como el <strong className="text-foreground">MSCI World</strong> (las 1.500 mayores empresas del mundo) o el <strong className="text-foreground">S&P 500</strong> (las 500 más grandes de EEUU). No hay ningún gestor tomando decisiones: el fondo simplemente replica el índice.
                </p>
                <p className="text-muted-foreground leading-8">
                  Esto tiene dos consecuencias muy importantes: las <strong className="text-foreground">comisiones son mucho más bajas</strong> (0,1-0,3% anual frente al 1-2% de los fondos activos) y, históricamente, <strong className="text-foreground">supera al 90% de los fondos gestionados activamente</strong> a largo plazo. Warren Buffett lleva años recomendando los fondos indexados para el inversor medio.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 not-prose mt-8">
                  {[
                    { icon: TrendingUp, titulo: "7-10% anual histórico", desc: "El MSCI World ha generado ~9% anual en los últimos 30 años, muy por encima de la inflación." },
                    { icon: Shield, titulo: "Diversificación máxima", desc: "Con un solo fondo inviertes en 1.500 empresas de 23 países. No dependes de ninguna empresa concreta." },
                    { icon: Clock, titulo: "Pasivo y automático", desc: "Configura una aportación mensual y olvídate. No requiere tiempo ni conocimiento avanzado." },
                  ].map((item) => (
                    <div key={item.titulo} className="rounded-xl border border-border bg-card p-5">
                      <item.icon className="h-6 w-6 text-emerald-600 mb-3" />
                      <p className="font-semibold text-foreground mb-2">{item.titulo}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mejores índices */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground">Los principales índices para invertir</h2>
              <p className="mt-4 text-lg text-muted-foreground">Elige el índice según tu perfil y horizonte de inversión</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="px-4 py-3 text-left font-semibold text-foreground border border-border">Índice</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground border border-border">Empresas</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground border border-border">Cobertura</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground border border-border">Rentabilidad histórica</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground border border-border">Ideal para</th>
                  </tr>
                </thead>
                <tbody>
                  {mejoresIndices.map((row) => (
                    <tr key={row.indice} className={row.recomendado ? "bg-emerald-500/5" : "hover:bg-muted/30"}>
                      <td className="px-4 py-3 border border-border font-semibold text-foreground">
                        {row.indice} {row.recomendado && <span className="ml-2 text-xs bg-emerald-500/20 text-emerald-700 rounded-full px-2 py-0.5">Recomendado</span>}
                      </td>
                      <td className="px-4 py-3 border border-border text-muted-foreground">{row.empresas}</td>
                      <td className="px-4 py-3 border border-border text-muted-foreground">{row.paises}</td>
                      <td className="px-4 py-3 border border-border text-emerald-600 font-medium">{row.rentabilidad}</td>
                      <td className="px-4 py-3 border border-border text-muted-foreground">{row.para}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Fondos indexados S&P 500 */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold text-foreground mb-4">Fondos indexados S&P 500 en España</h2>
              <p className="text-muted-foreground leading-8 mb-8">
                El <strong className="text-foreground">S&P 500</strong> agrupa las 500 mayores empresas de Estados Unidos: Apple, Microsoft, Amazon, Nvidia, Google... Es el índice más seguido del mundo y ha generado una rentabilidad histórica de aproximadamente el <strong className="text-foreground">10% anual</strong>. En España puedes acceder a él a través de fondos y ETFs con comisiones muy bajas.
              </p>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-4 font-semibold">Fondo / ETF</th>
                      <th className="text-left p-4 font-semibold">TER anual</th>
                      <th className="text-left p-4 font-semibold">Tipo</th>
                      <th className="text-left p-4 font-semibold">Dónde contratar</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {fondosSP500.map((f) => (
                      <tr key={f.fondo} className="hover:bg-muted/30">
                        <td className="p-4 font-medium text-foreground">{f.fondo}</td>
                        <td className="p-4 text-emerald-600 font-semibold">{f.ter}</td>
                        <td className="p-4 text-muted-foreground">{f.tipo}</td>
                        <td className="p-4 text-muted-foreground">{f.donde}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Nota: los ETFs no tienen ventaja fiscal de traspaso en España. Si inviertes a largo plazo, considera un fondo indexado en MyInvestor para diferir la tributación.
              </p>
            </div>
          </div>
        </section>

        {/* Dónde invertir en España */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground">Dónde invertir en fondos indexados en España</h2>
              <p className="mt-4 text-lg text-muted-foreground">Plataformas accesibles para inversores españoles en 2026</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {plataformasEspana.map((p) => (
                <Card key={p.nombre} className={p.destacado ? "border-emerald-500/40 bg-emerald-500/5" : ""}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{p.nombre}</CardTitle>
                      {p.destacado && <span className="text-xs bg-emerald-500/20 text-emerald-700 rounded-full px-2 py-0.5 font-medium">Más popular</span>}
                    </div>
                    <p className="text-sm text-muted-foreground">{p.tipo}</p>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-2 gap-3 py-2 border-y border-border">
                      <div>
                        <p className="text-xs font-semibold text-primary mb-1">MÍNIMO</p>
                        <p className="text-sm font-medium text-foreground">{p.minimo}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-primary mb-1">COSTE</p>
                        <p className="text-sm font-medium text-foreground">{p.comision}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{p.ventaja}</p>
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-2" asChild>
                      <Link href={p.enlaceInfo}>Ver guía detallada</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="mt-6 text-xs text-muted-foreground text-center max-w-2xl mx-auto">
              Información orientativa. Verifica siempre las condiciones actuales en cada plataforma antes de invertir. Toda inversión conlleva riesgo de pérdida de capital.
            </p>
          </div>
        </section>

        {/* ETF vs Fondo Indexado */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold text-foreground mb-4">Diferencia entre ETF y fondo indexado</h2>
              <p className="text-muted-foreground leading-8 mb-8">
                Ambos replican índices y tienen comisiones bajas, pero funcionan de forma diferente. En España, la clave está en la <strong className="text-foreground">ventaja fiscal</strong>: los fondos indexados permiten traspasar dinero entre fondos sin pagar impuestos hasta el reembolso final. Los ETFs no tienen esa ventaja.
              </p>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-4 font-semibold">Característica</th>
                      <th className="text-left p-4 font-semibold text-blue-400">ETF</th>
                      <th className="text-left p-4 font-semibold text-emerald-500">Fondo Indexado</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      ["Cotiza en bolsa", "Sí, en tiempo real", "No, precio al cierre del día"],
                      ["Inversión mínima", "1 acción (~5–100 €)", "Desde 1 € (MyInvestor)"],
                      ["Traspaso sin tributar", "No — pagas impuestos al vender", "✅ Sí — ventaja fiscal clave en España"],
                      ["Comisiones", "0,07%–0,20% anual", "0,10%–0,30% anual"],
                      ["Dónde contratar", "Broker (Trade Republic, Degiro)", "Banco/Roboadvisor (MyInvestor, Indexa)"],
                      ["Mejor para", "Inversión puntual o activa", "Ahorro periódico a largo plazo"],
                    ].map(([car, etf, fi]) => (
                      <tr key={car} className="hover:bg-muted/30">
                        <td className="p-4 font-medium text-foreground">{car}</td>
                        <td className="p-4 text-muted-foreground">{etf}</td>
                        <td className="p-4 text-muted-foreground">{fi}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-5">
                <p className="text-sm text-foreground font-medium mb-1">Recomendación para inversores en España:</p>
                <p className="text-sm text-muted-foreground">Si tu objetivo es ahorro a largo plazo con aportaciones mensuales, elige un <strong className="text-foreground">fondo indexado en MyInvestor o Indexa Capital</strong> para aprovechar el traspaso sin tributación. Si prefieres operar de forma más flexible o puntual, los ETFs de <strong className="text-foreground">Trade Republic</strong> son la opción más barata.</p>
              </div>
            </div>
          </div>
        </section>

        {/* AdSense */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AdSense slot="1562571362" />
          </div>
        </section>

        {/* Cómo empezar paso a paso */}
        <section id="como-empezar" className="py-16 sm:py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground">Cómo empezar a invertir en fondos indexados: paso a paso</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                En menos de 30 minutos puedes tener tu primera inversión activa
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {pasos.map((paso) => (
                <div key={paso.num} className="flex gap-4 rounded-xl border border-border bg-card p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-lg">
                    {paso.num}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{paso.titulo}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{paso.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BBVA / Caixabank / Santander vs alternativas */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold text-foreground mb-4">Fondo indexado BBVA, Caixabank y Santander: ¿merecen la pena?</h2>
              <p className="text-muted-foreground leading-8 mb-8">
                Muchos inversores buscan fondos indexados directamente en su banco habitual. La buena noticia: BBVA, CaixaBank y Santander sí ofrecen fondos indexados. La mala noticia: sus <strong className="text-foreground">comisiones son entre 4 y 13 veces más altas</strong> que las de las plataformas especializadas. Esta diferencia de coste tiene un impacto enorme a largo plazo.
              </p>
              <div className="overflow-x-auto rounded-xl border border-border mb-6">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-4 font-semibold">Entidad</th>
                      <th className="text-left p-4 font-semibold">Fondo</th>
                      <th className="text-left p-4 font-semibold">Índice</th>
                      <th className="text-left p-4 font-semibold">TER anual</th>
                      <th className="text-left p-4 font-semibold">Comparativa</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {comparativaBancos.map((f) => (
                      <tr
                        key={f.fondo}
                        className={
                          f.nota.includes("⭐")
                            ? "bg-emerald-500/5 hover:bg-emerald-500/10"
                            : "hover:bg-muted/30"
                        }
                      >
                        <td className="p-4 font-semibold text-foreground">{f.entidad}</td>
                        <td className="p-4 text-muted-foreground">{f.fondo}</td>
                        <td className="p-4 text-muted-foreground">{f.indice}</td>
                        <td className={`p-4 font-bold ${f.nota.includes("⭐") ? "text-emerald-600" : "text-destructive"}`}>
                          {f.ter}
                        </td>
                        <td className={`p-4 text-sm ${f.nota.includes("⭐") ? "text-emerald-600 font-medium" : "text-amber-500"}`}>
                          {f.nota}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="rounded-xl bg-amber-500/10 border border-amber-500/20 p-5">
                <p className="text-sm font-semibold text-foreground mb-2">¿Cuánto supone la diferencia en euros reales?</p>
                <p className="text-sm text-muted-foreground">
                  Invirtiendo 200 €/mes durante 20 años al 8% anual: con un TER del <strong className="text-foreground">0,12%</strong> (Amundi MSCI World en MyInvestor) acumularías aproximadamente <strong className="text-foreground">117.000 €</strong>. Con un TER del <strong className="text-foreground">1,00%</strong> (CaixaBank Index Mundial Plus), el resultado bajaría a unos <strong className="text-foreground">104.000 €</strong>. Una diferencia de <strong className="text-amber-600">~13.000 € solo por las comisiones</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Errores comunes */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground">Errores que debes evitar al empezar</h2>
              <p className="mt-4 text-lg text-muted-foreground">Los fallos más comunes de los nuevos inversores en fondos indexados</p>
            </div>
            <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
              {errores.map((e) => (
                <div key={e.error} className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-5">
                  <div className="flex items-start gap-2 mb-3">
                    <AlertCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm font-semibold text-foreground">{e.error}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{e.realidad}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Artículos relacionados */}
        <section className="py-12 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">Artículos relacionados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
              {[
                {
                  href: "/blog/invertir-fondos-indexados-principiantes",
                  title: "Guía completa para invertir en fondos indexados como principiante",
                  cat: "Inversiones",
                },
                {
                  href: "/blog/interes-compuesto-como-funciona",
                  title: "Interés compuesto: cómo hace crecer tu inversión exponencialmente",
                  cat: "Educación Financiera",
                },
                {
                  href: "/blog/roboadvisors-guia-completa-inversion-automatizada",
                  title: "Roboadvisors en España: Indexa Capital y cómo funcionan",
                  cat: "Inversiones",
                },
              ].map((a) => (
                <Link
                  key={a.href}
                  href={a.href}
                  className="group block rounded-xl border border-border bg-card p-5 hover:shadow-md hover:border-primary/30 transition-all"
                >
                  <span className="inline-block text-xs font-semibold text-primary bg-primary/10 rounded-full px-2 py-0.5 mb-3">
                    {a.cat}
                  </span>
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {a.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* AdSense */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AdSense slot="5745358955" format="horizontal" />
          </div>
        </section>

        {/* FAQ */}
        <FAQSection
          title="Preguntas Frecuentes sobre Fondos Indexados"
          subtitle="Todo lo que necesitas saber antes de empezar a invertir en índices"
          faqs={faqs}
        />

        {/* CTA final */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="rounded-xl bg-gradient-to-r from-emerald-600/20 via-emerald-600/10 to-transparent border border-emerald-600/30 p-8 md:p-12">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  ¿Cuánto podría crecer tu inversión?
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Usa nuestra calculadora gratuita para ver el impacto del interés compuesto en fondos indexados a 10, 20 o 30 años.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="/calculadoras/interes-compuesto">Calcular mi inversión</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/blog/invertir-fondos-indexados-principiantes">Leer guía completa</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
