import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Calculator, ShieldCheck, TrendingUp, CheckCircle, XCircle } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { FAQSection, type FAQItem } from "@/components/faq-section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Mejores Brokers en España 2026 | Comparativa Trade Republic, MyInvestor, Degiro y más",
  description:
    "Comparativa actualizada de los mejores brokers para invertir en España en 2026: Trade Republic, MyInvestor, Degiro, Interactive Brokers, eToro e Indexa Capital. Comisiones, regulación y para quién es cada uno.",
  alternates: {
    canonical: "https://www.finanzasdigitales.es/mejores-brokers-espana",
  },
  openGraph: {
    title: "Mejores Brokers en España 2026 — Comparativa Real",
    description:
      "Comparativa honesta de brokers para invertir en España: Trade Republic, MyInvestor, Degiro, IBKR, eToro e Indexa Capital. Datos reales de comisiones y regulación.",
    url: "https://www.finanzasdigitales.es/mejores-brokers-espana",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mejores Brokers en España 2026",
    description:
      "Trade Republic, MyInvestor, Degiro, IBKR, eToro e Indexa Capital comparados con datos reales de comisiones, regulación y perfil de usuario.",
  },
}

const faqs: FAQItem[] = [
  {
    question: "¿Qué broker es mejor para principiantes en España en 2026?",
    answer:
      "Para principiantes, Trade Republic o MyInvestor son las opciones más recomendadas. Trade Republic permite comprar ETFs desde 1€ sin comisiones y tiene una app muy intuitiva. MyInvestor es ideal si prefieres fondos indexados tradicionales con regulación bancaria española. Ambos son seguros, regulados y sin comisiones de custodia.",
  },
  {
    question: "¿Es mejor un broker para ETFs o una plataforma de fondos indexados?",
    answer:
      "Para inversión a largo plazo en España, los fondos indexados tienen una ventaja fiscal importante: puedes traspasar entre fondos sin tributar hasta el reembolso final. Los ETFs tributan al vender como acciones. Si tu estrategia es buy & hold durante décadas, los fondos (MyInvestor, Indexa) pueden ser más eficientes fiscalmente. Si quieres mayor control y operar con más frecuencia, los ETFs en Degiro o Trade Republic son más flexibles.",
  },
  {
    question: "¿Importan solo las comisiones de compra?",
    answer:
      "No. Hay que mirar el coste total: comisión por operación + comisión de custodia anual + coste de cambio de divisa (importante en ETFs en USD) + TER del propio fondo o ETF. Por ejemplo, un ETF con 0€ de comisión de compra pero 0.50% de TER es más caro a largo plazo que un fondo con 3€ de comisión y 0.15% de TER.",
  },
  {
    question: "¿Qué regulación deben tener los brokers en España?",
    answer:
      "Los brokers que operan en España deben estar registrados en la CNMV o actuar bajo pasaporte europeo MiFID II desde otro país de la UE. Trade Republic opera bajo licencia alemana (BaFin) con pasaporte europeo. MyInvestor es banco español regulado por el Banco de España. Degiro opera bajo licencia holandesa (AFM). Interactive Brokers tiene filial europea regulada. eToro está regulado por CySEC (Chipre) y FCA (UK).",
  },
  {
    question: "¿Tiene sentido abrir varios brokers?",
    answer:
      "Para la mayoría no es necesario al principio. Un broker bien elegido es suficiente para construir una cartera diversificada. Tener varios puede tener sentido cuando tu patrimonio crece y quieres diversificar el riesgo de custodia (cada broker en Europa ofrece protección hasta 100.000€ por el FOGAIN o equivalente), o cuando necesitas acceder a productos que no ofrece tu broker principal.",
  },
]

const brokers = [
  {
    name: "Trade Republic",
    type: "Neobróker",
    comisionETF: "0€",
    custodia: "0€",
    minimo: "1€",
    regulacion: "BaFin (Alemania) + pasaporte UE",
    mejorPara: "Principiantes y ETFs automáticos",
    color: "border-emerald-500/30 bg-emerald-500/5",
    badge: "Más popular",
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    description: "Trade Republic es el neobróker alemán más popular en España en 2026. Regulado por el BaFin y con pasaporte europeo MiFID II, permite comprar ETFs UCITS y acciones desde 1€ sin pagar comisión por operación. Tiene planes de ahorro automáticos en más de 2.000 ETFs, lo que lo convierte en la opción ideal para hacer DCA (Dollar Cost Averaging) de forma automatizada. Además, ofrece una rentabilidad del ~3,75% TAE sobre el efectivo no invertido (garantizado por el Banco Central Europeo como entidad supervisada). Su app es extremadamente simple, pensada para que cualquiera pueda empezar a invertir en menos de 10 minutos.",
    pros: [
      "0€ de comisión por compra/venta de ETFs y acciones",
      "Planes de ahorro automáticos desde 1€/mes",
      "Interés del ~3,75% TAE sobre el efectivo no invertido",
    ],
    cons: [
      "No ofrece fondos de inversión tradicionales (solo ETFs y acciones)",
      "Soporte al cliente únicamente por chat, sin teléfono",
    ],
    cta: "https://www.traderepublic.com",
    affiliate: false,
  },
  {
    name: "MyInvestor",
    type: "Banco digital",
    comisionETF: "0€ (fondos) / ~3.95€ (ETFs)",
    custodia: "0€",
    minimo: "150€",
    regulacion: "Banco de España",
    mejorPara: "Fondos indexados sin comisiones",
    color: "border-blue-500/30 bg-blue-500/5",
    badge: "Mejor para fondos",
    badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    description: "MyInvestor es un banco digital español supervisado directamente por el Banco de España y el Banco de Andorra. Ofrece fondos indexados de Amundi, Vanguard, BlackRock e iShares sin comisión de suscripción, reembolso ni custodia. El Amundi IS MSCI World UCITS ETF ACC, por ejemplo, tiene un TER de solo 0,18% anual, sin coste adicional. Es la plataforma más recomendada para inversores que prefieren fondos indexados sobre ETFs, especialmente por la ventaja fiscal del traspaso entre fondos sin tributar. También ofrece cuentas remuneradas, hipotecas y planes de pensiones indexados.",
    pros: [
      "Banco español regulado por el Banco de España (máxima seguridad jurídica)",
      "0€ de comisiones en fondos indexados de Amundi, Vanguard y BlackRock",
      "Traspaso entre fondos sin coste fiscal hasta el reembolso",
    ],
    cons: [
      "Mínimo de 150€ por fondo indexado",
      "Comisión de ~3,95€ para compra de ETFs (menos eficiente que Trade Republic)",
    ],
    cta: "https://myinvestor.es",
    affiliate: false,
  },
  {
    name: "Degiro",
    type: "Bróker online",
    comisionETF: "~2€ por operación",
    custodia: "0€",
    minimo: "1€",
    regulacion: "AFM (Holanda) + pasaporte UE",
    mejorPara: "ETFs con amplia selección de mercados",
    color: "border-orange-500/30 bg-orange-500/5",
    badge: "Mejor selección ETFs",
    badgeColor: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    description: "Degiro es el bróker europeo con mayor trayectoria en España. Regulado por la AFM holandesa con pasaporte europeo MiFID II, ofrece acceso a más de 50 bolsas en todo el mundo con comisiones muy competitivas: ~2€ por operación en ETFs europeos. Tiene una lista de ETFs gratuitos (un ETF por mes sin comisión) que incluye los principales índices mundiales. La plataforma es más completa que Trade Republic, con acceso a bonos, opciones y más de 5.000 ETFs UCITS. Es la opción ideal para inversores que quieren más variedad de instrumentos y mercados sin pagar comisiones de custodia.",
    pros: [
      "Acceso a más de 50 bolsas mundiales y más de 5.000 ETFs",
      "Sin comisión de custodia anual",
      "Lista de ETFs gratuitos (un ETF/mes sin comisión de compra)",
    ],
    cons: [
      "No es un banco: el efectivo no está protegido por el Fondo de Garantía de Depósitos",
      "Comisión de cambio de divisa del 0,25% (relevante en ETFs en USD o GBP)",
    ],
    cta: "https://www.degiro.es",
    affiliate: false,
  },
  {
    name: "Interactive Brokers",
    type: "Bróker profesional",
    comisionETF: "Desde 1,25€",
    custodia: "0€ (con actividad)",
    minimo: "1€",
    regulacion: "SEC, FCA, BaFin + CNMV",
    mejorPara: "Inversores avanzados y carteras grandes",
    color: "border-violet-500/30 bg-violet-500/5",
    badge: "Para avanzados",
    badgeColor: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
    description: "Interactive Brokers (IBKR) es el bróker más completo del mundo para inversores individuales. Su filial europea (IBKR Europe) está regulada por múltiples autoridades de primer nivel. Permite acceder a prácticamente cualquier mercado financiero global, con tipos de cambio casi interbancarios y las comisiones más bajas del mercado para operaciones grandes. Ofrece una cuenta en múltiples divisas con acceso a acciones, ETFs, opciones, futuros, bonos y más. Sin embargo, su plataforma es compleja y tiene una curva de aprendizaje significativa. Para cuentas menores de 100.000€ o con menos de 1 operación mensual puede cobrar una tarifa mínima de actividad.",
    pros: [
      "Acceso a todos los mercados mundiales y todos los tipos de instrumentos",
      "Cambio de divisa casi al tipo interbancario (ahorra mucho en carteras internacionales)",
      "Regulación de máximo nivel (SEC, FCA, BaFin)",
    ],
    cons: [
      "Plataforma compleja, no recomendada para principiantes",
      "Posible tarifa mínima de actividad para cuentas pequeñas o inactivas",
    ],
    cta: "https://www.interactivebrokers.com",
    affiliate: false,
  },
  {
    name: "eToro",
    type: "Plataforma social",
    comisionETF: "0% (acciones y ETFs reales)",
    custodia: "0€",
    minimo: "50€",
    regulacion: "CySEC (Chipre) + FCA (UK)",
    mejorPara: "Principiantes y copy trading",
    color: "border-teal-500/30 bg-teal-500/5",
    badge: "Copy trading",
    badgeColor: "bg-teal-500/10 text-teal-600 dark:text-teal-400",
    description: "eToro es la plataforma de inversión social más conocida del mundo con más de 35 millones de usuarios. Su característica más diferenciadora es el copy trading: puedes copiar automáticamente la cartera de otros inversores con historial verificado. Ofrece acciones y ETFs reales sin comisión de compra, aunque aplica spread implícito al comprar. Tiene CFDs para trading apalancado (más arriesgado). Es especialmente popular entre inversores que empiezan y quieren aprender observando a otros. Para retiradas cobra 5$ de comisión y el mínimo de depósito es 50€.",
    pros: [
      "Copy trading: copia carteras de otros inversores con historial verificado",
      "0% comisión en acciones y ETFs reales",
      "Interfaz muy visual e intuitiva para principiantes",
    ],
    cons: [
      "Spread implícito al comprar (el coste real no es tan transparente como en otros brokers)",
      "Comisión de 5$ por retirada de fondos",
    ],
    cta: "https://www.etoro.com",
    affiliate: false,
  },
  {
    name: "Indexa Capital",
    type: "Robo-advisor",
    comisionETF: "Incluida en gestión",
    custodia: "0€",
    minimo: "3.000€",
    regulacion: "CNMV (España)",
    mejorPara: "Automatización total de la cartera",
    color: "border-indigo-500/30 bg-indigo-500/5",
    badge: "Más automatizado",
    badgeColor: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
    description: "Indexa Capital es el robo-advisor pionero en España, regulado directamente por la CNMV desde 2015. Funciona de forma diferente a un bróker tradicional: en lugar de comprar tú los productos, Indexa diseña y gestiona automáticamente una cartera diversificada de fondos indexados adaptada a tu perfil de riesgo. La comisión total es de aproximadamente 0,45% anual sobre el patrimonio, a lo que hay que sumar el TER de los fondos (~0,18%), resultando en un coste total de ~0,63% anual. No tienes que tomar ninguna decisión: la plataforma hace el rebalanceo automático y ajusta la cartera según tu horizonte temporal.",
    pros: [
      "Gestión completamente automatizada: sin decisiones, sin errores emocionales",
      "Regulado por la CNMV española, máxima seguridad jurídica",
      "Rebalanceo automático y ajuste de cartera según horizonte temporal",
    ],
    cons: [
      "Mínimo de 3.000€ para empezar",
      "Comisión de gestión (~0,45%) además del coste de los fondos: más caro que gestionar tú mismo",
    ],
    cta: "https://indexacapital.com",
    affiliate: false,
  },
]

const financialProductSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Mejores Brokers en España 2026",
  description: "Comparativa de los mejores brokers para invertir en España: Trade Republic, MyInvestor, Degiro, Interactive Brokers, eToro e Indexa Capital.",
  url: "https://www.finanzasdigitales.es/mejores-brokers-espana",
  numberOfItems: 6,
  itemListElement: [
    {
      "@type": "ListItem", position: 1,
      item: {
        "@type": "FinancialProduct",
        name: "Trade Republic",
        description: "Neobróker alemán regulado por BaFin. ETFs y acciones desde 1€ sin comisión. Planes de ahorro automáticos.",
        url: "https://www.traderepublic.com",
        provider: { "@type": "FinancialService", name: "Trade Republic Bank GmbH" },
        review: {
          "@type": "Review",
          reviewRating: { "@type": "Rating", ratingValue: "4.5", bestRating: "5", worstRating: "1" },
          author: { "@type": "Organization", name: "Finanzas Digitales", url: "https://www.finanzasdigitales.es" },
        },
      },
    },
    {
      "@type": "ListItem", position: 2,
      item: {
        "@type": "FinancialProduct",
        name: "MyInvestor",
        description: "Banco digital español regulado por el Banco de España. Fondos indexados de Amundi, Vanguard y BlackRock sin comisiones.",
        url: "https://myinvestor.es",
        provider: { "@type": "FinancialService", name: "MyInvestor Bank" },
        review: {
          "@type": "Review",
          reviewRating: { "@type": "Rating", ratingValue: "4.5", bestRating: "5", worstRating: "1" },
          author: { "@type": "Organization", name: "Finanzas Digitales", url: "https://www.finanzasdigitales.es" },
        },
      },
    },
    {
      "@type": "ListItem", position: 3,
      item: {
        "@type": "FinancialProduct",
        name: "Degiro",
        description: "Bróker online regulado por AFM (Holanda). Acceso a más de 50 bolsas mundiales y 5.000+ ETFs con comisiones competitivas.",
        url: "https://www.degiro.es",
        provider: { "@type": "FinancialService", name: "flatexDEGIRO Bank AG" },
        review: {
          "@type": "Review",
          reviewRating: { "@type": "Rating", ratingValue: "4.2", bestRating: "5", worstRating: "1" },
          author: { "@type": "Organization", name: "Finanzas Digitales", url: "https://www.finanzasdigitales.es" },
        },
      },
    },
    {
      "@type": "ListItem", position: 4,
      item: {
        "@type": "FinancialProduct",
        name: "Interactive Brokers",
        description: "Bróker profesional regulado por SEC, FCA y BaFin. Acceso a todos los mercados mundiales con comisiones mínimas.",
        url: "https://www.interactivebrokers.com",
        provider: { "@type": "FinancialService", name: "Interactive Brokers LLC" },
        review: {
          "@type": "Review",
          reviewRating: { "@type": "Rating", ratingValue: "4.3", bestRating: "5", worstRating: "1" },
          author: { "@type": "Organization", name: "Finanzas Digitales", url: "https://www.finanzasdigitales.es" },
        },
      },
    },
    {
      "@type": "ListItem", position: 5,
      item: {
        "@type": "FinancialProduct",
        name: "eToro",
        description: "Plataforma social con 35 millones de usuarios. Copy trading y 0% comisión en acciones y ETFs reales.",
        url: "https://www.etoro.com",
        provider: { "@type": "FinancialService", name: "eToro Europe Ltd" },
        review: {
          "@type": "Review",
          reviewRating: { "@type": "Rating", ratingValue: "4.0", bestRating: "5", worstRating: "1" },
          author: { "@type": "Organization", name: "Finanzas Digitales", url: "https://www.finanzasdigitales.es" },
        },
      },
    },
    {
      "@type": "ListItem", position: 6,
      item: {
        "@type": "FinancialProduct",
        name: "Indexa Capital",
        description: "Robo-advisor pionero en España regulado por la CNMV. Gestión automatizada de carteras indexadas desde 3.000€.",
        url: "https://indexacapital.com",
        provider: { "@type": "FinancialService", name: "Indexa Capital AV, S.A." },
        review: {
          "@type": "Review",
          reviewRating: { "@type": "Rating", ratingValue: "4.4", bestRating: "5", worstRating: "1" },
          author: { "@type": "Organization", name: "Finanzas Digitales", url: "https://www.finanzasdigitales.es" },
        },
      },
    },
  ],
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.finanzasdigitales.es" },
    { "@type": "ListItem", position: 2, name: "Inversiones", item: "https://www.finanzasdigitales.es/inversiones" },
    { "@type": "ListItem", position: 3, name: "Mejores brokers 2026", item: "https://www.finanzasdigitales.es/mejores-brokers-espana" },
  ],
}

export default function MejoresBrokersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} suppressHydrationWarning />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(financialProductSchema) }} suppressHydrationWarning />

      <div className="min-h-screen bg-background">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <Breadcrumbs
            customItems={[
              { label: "Inicio", href: "/" },
              { label: "Inversiones", href: "/inversiones" },
              { label: "Mejores brokers 2026", href: "/mejores-brokers-espana", isActive: true },
            ]}
          />

          <header className="mt-6 mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">Inversión</Badge>
              <Badge variant="outline">España 2026</Badge>
              <Badge variant="outline">Comparativa real</Badge>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Mejores brokers en España en 2026
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Comparativa actualizada de Trade Republic, MyInvestor, Degiro, Interactive Brokers, eToro e Indexa Capital.
              Datos reales de comisiones, regulación y para qué perfil encaja cada uno.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Contenido educativo. Antes de abrir cuenta, revisa la información oficial de cada plataforma y su documentación legal actualizada.
            </p>
          </header>

          {/* Tabla resumen */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-5">Tabla comparativa — resumen rápido</h2>
            <div className="overflow-x-auto rounded-xl border">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="p-3 text-left border font-semibold">Broker</th>
                    <th className="p-3 text-left border font-semibold">Tipo</th>
                    <th className="p-3 text-center border font-semibold">Com. ETF</th>
                    <th className="p-3 text-center border font-semibold">Custodia</th>
                    <th className="p-3 text-center border font-semibold">Mínimo</th>
                    <th className="p-3 text-left border font-semibold">Mejor para</th>
                  </tr>
                </thead>
                <tbody>
                  {brokers.map((b, i) => (
                    <tr key={b.name} className={i % 2 === 0 ? "" : "bg-muted/30"}>
                      <td className="p-3 border font-semibold">{b.name}</td>
                      <td className="p-3 border text-muted-foreground">{b.type}</td>
                      <td className="p-3 border text-center">{b.comisionETF}</td>
                      <td className="p-3 border text-center text-emerald-600 dark:text-emerald-400 font-medium">{b.custodia}</td>
                      <td className="p-3 border text-center">{b.minimo}</td>
                      <td className="p-3 border text-muted-foreground">{b.mejorPara}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Sección por broker */}
          <section className="mb-12 space-y-8">
            <h2 className="text-2xl font-bold">Análisis detallado de cada broker</h2>
            {brokers.map((broker) => (
              <Card key={broker.name} className={`border ${broker.color}`}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <CardTitle className="text-xl">{broker.name}</CardTitle>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${broker.badgeColor}`}>
                      {broker.badge}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-2 text-xs text-muted-foreground">
                    <span>Tipo: <strong className="text-foreground">{broker.type}</strong></span>
                    <span>·</span>
                    <span>ETF: <strong className="text-foreground">{broker.comisionETF}</strong></span>
                    <span>·</span>
                    <span>Custodia: <strong className="text-foreground">{broker.custodia}</strong></span>
                    <span>·</span>
                    <span>Mínimo: <strong className="text-foreground">{broker.minimo}</strong></span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-7">{broker.description}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide mb-2">Pros</p>
                      <ul className="space-y-1.5">
                        {broker.pros.map((pro) => (
                          <li key={pro} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-destructive uppercase tracking-wide mb-2">Contras</p>
                      <ul className="space-y-1.5">
                        {broker.cons.map((con) => (
                          <li key={con} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <XCircle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="pt-2">
                    <p className="text-xs text-muted-foreground mb-2">
                      <strong className="text-foreground">Regulación:</strong> {broker.regulacion}
                    </p>
                    <a
                      href={broker.cta}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                    >
                      Ver {broker.name} →
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </section>

          {/* Cómo elegir */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">¿Cuál te conviene según tu situación?</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                { title: "Empiezo desde cero con poco dinero", body: "Trade Republic. Puedes empezar con 1€, sin comisiones y con planes de ahorro automáticos. La app más simple del mercado." },
                { title: "Quiero fondos indexados sin complicarme", body: "MyInvestor. Banco español, 0€ en fondos Amundi/Vanguard, y la ventaja fiscal del traspaso entre fondos sin tributar." },
                { title: "Quiero automatizar y no tomar decisiones", body: "Indexa Capital. Gestiona tu cartera de forma completamente automática. Requiere mínimo 3.000€." },
                { title: "Quiero muchos ETFs y mercados globales", body: "Degiro o Interactive Brokers. Degiro para perfiles medios con buena relación coste-acceso. IBKR para carteras grandes o avanzadas." },
                { title: "Me interesa el copy trading y ver qué hacen otros", body: "eToro. Su función de copy trading es única y la plataforma social es muy motivadora para principiantes." },
                { title: "Ya tengo cartera grande y quiero optimizar costes", body: "Interactive Brokers. Las comisiones más bajas del mercado para operaciones grandes y tipo de cambio casi interbancario." },
              ].map((item) => (
                <Card key={item.title}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-semibold text-foreground">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground leading-7">{item.body}</CardContent>
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
                <p className="font-semibold text-foreground">Guía fondos indexados</p>
                <p className="mt-2 text-sm text-muted-foreground">Qué comprar una vez tienes la plataforma elegida.</p>
              </Link>
              <Link href="/calculadoras/interes-compuesto" className="block rounded-xl border p-4 hover:border-primary/40 hover:bg-primary/5 transition-colors">
                <Calculator className="h-5 w-5 text-primary mb-2" />
                <p className="font-semibold text-foreground">Calculadora interés compuesto</p>
                <p className="mt-2 text-sm text-muted-foreground">Visualiza el impacto del largo plazo sobre tu cartera.</p>
              </Link>
              <Link href="/inversiones" className="block rounded-xl border p-4 hover:border-primary/40 hover:bg-primary/5 transition-colors">
                <ShieldCheck className="h-5 w-5 text-primary mb-2" />
                <p className="font-semibold text-foreground">Centro de inversiones</p>
                <p className="mt-2 text-sm text-muted-foreground">Más guías para invertir con criterio en España.</p>
              </Link>
            </div>
          </section>

          <div className="mt-10 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 to-transparent p-6">
            <h3 className="text-xl font-bold text-foreground">El broker es solo una herramienta</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-7">
              El broker más importante es el que realmente usarás de forma constante. Una cartera simple en Trade Republic
              o MyInvestor con aportaciones mensuales automáticas supera en el largo plazo a cualquier estrategia compleja
              ejecutada con disciplina irregular.
            </p>
            <Button asChild className="mt-5">
              <Link href="/blog/invertir-fondos-indexados-principiantes" className="inline-flex items-center gap-2">
                Cómo empezar a invertir paso a paso
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
