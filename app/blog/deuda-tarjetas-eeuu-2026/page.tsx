import type { Metadata } from "next"
import Link from "next/link"
import { CreditCard, TrendingUp, AlertCircle, ChevronRight, Calendar, Clock, CheckCircle2, ArrowRight } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { FAQNative } from "@/components/faq-native"
import { ReadingProgressBar } from "@/components/reading-progress"
import StructuredData from "@/components/structured-data"
import { AuthorBox } from "@/components/author-box"
import { ArticleSources } from "@/components/article-sources"
import { getBlogPost } from "@/lib/blog-data"
import AdSense from "@/components/AdSense"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Deuda tarjetas crédito EEUU 2026: $1.27 billones — la trampa que los bancos diseñaron para ti",
    description:
      "La deuda en tarjetas de crédito en EEUU alcanzó un récord de $1.277 billones. El 61% lleva más de un año sin salir. Así funciona la trampa del pago mínimo y el plan de 5 pasos para escapar.",
    keywords:
      "deuda tarjetas crédito EEUU 2026, pago mínimo tarjeta trampa, récord deuda consumidores, APR tarjeta crédito, cómo salir deuda tarjeta",
    authors: [{ name: "Alejandro Torres", url: "https://www.finanzasdigitales.es" }],
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1 } },
    openGraph: {
      title: "$1.27 billones en deuda de tarjetas: los bancos ganan, tú pierdes",
      description: "Récord histórico de deuda en tarjetas en EEUU. Así funciona la trampa y cómo salir de ella.",
      url: "https://www.finanzasdigitales.es/blog/deuda-tarjetas-eeuu-2026",
      siteName: "Finanzas Digitales",
      type: "article",
      publishedTime: "2026-04-20T00:00:00+00:00",
      locale: "es_ES",
    },
    alternates: { canonical: "https://www.finanzasdigitales.es/blog/deuda-tarjetas-eeuu-2026" },
  }
}

const faqItems = [
  {
    question: "¿Cuál es el interés promedio de las tarjetas en EEUU en 2026?",
    answer:
      "La APR (tasa anual) promedio ronda el 21–24% en 2026 según la Reserva Federal. Algunas tarjetas store-branded llegan al 28–30%. Es el tipo de deuda más caro que existe para el consumidor promedio, por encima de préstamos personales, préstamos estudiantiles o hipotecas.",
  },
  {
    question: "¿Qué pasa si solo pago el mínimo en mi tarjeta?",
    answer:
      "Es la trampa diseñada por los bancos. En una deuda de $5,000 al 22% APR con pago mínimo del 2%, tardarías más de 20 años en liquidarla y pagarías más de $8,000 en intereses — más que la deuda original. El banco recibe el triple de lo que te prestó.",
  },
  {
    question: "¿Cómo afecta la deuda en tarjeta a mi credit score?",
    answer:
      "El 'credit utilization ratio' (porcentaje del límite que usas) representa el 30% de tu FICO score. Usar más del 30% de tu límite disponible ya empieza a perjudicar tu puntuación. Más del 50% puede hacerla caer 50–100 puntos. Un score bajo significa peores condiciones en futuros préstamos, hipotecas o seguros.",
  },
  {
    question: "¿Merece la pena hacer una transferencia de balance al 0%?",
    answer:
      "Una balance transfer a una tarjeta con 0% APR por 12–21 meses puede ser muy efectiva si: (1) puedes liquidar la deuda durante el período promocional, (2) pagas la comisión de transferencia (típicamente 3–5%) y aun así ahorras. El peligro es acumular más deuda en la tarjeta original mientras tanto o no liquidar antes de que expire el 0%.",
  },
  {
    question: "¿Qué método es mejor para salir de la deuda: bola de nieve o avalancha?",
    answer:
      "La avalancha (pagar primero la deuda con mayor APR) es matemáticamente superior: pagarás menos intereses en total. La bola de nieve (pagar primero la más pequeña) ofrece victorias psicológicas rápidas que ayudan a mantener la motivación. Si tienes autodisciplina, usa avalancha. Si necesitas motivación, bola de nieve. Ambas funcionan — lo importante es elegir una y ejecutarla.",
  },
]

const escapeSteps = [
  {
    num: "01",
    title: "Para de acumular deuda nueva",
    desc: "Guarda la tarjeta. Literalmente. No cancelarla (daña el score), pero sí eliminar la fricción de usarla. Cubre gastos con débito o efectivo hasta que la deuda esté liquidada.",
    icon: CreditCard,
    color: "text-red-400",
    border: "border-red-500/20 bg-red-500/5",
  },
  {
    num: "02",
    title: "Conoce exactamente lo que debes",
    desc: "Lista todas las tarjetas con: saldo actual, APR y pago mínimo. Muchas personas subestiman su deuda total porque la ven en fragmentos. El número completo te da claridad para actuar.",
    icon: AlertCircle,
    color: "text-amber-400",
    border: "border-amber-500/20 bg-amber-500/5",
  },
  {
    num: "03",
    title: "Elige tu método: avalancha o bola de nieve",
    desc: "Avalancha = paga extra en la de mayor APR primero (más barato en total). Bola de nieve = paga extra en la de menor saldo primero (más motivación). Ambas funcionan — lo clave es elegir y ejecutar.",
    icon: TrendingUp,
    color: "text-blue-400",
    border: "border-blue-500/20 bg-blue-500/5",
  },
  {
    num: "04",
    title: "Llama a tu banco y negocia la APR",
    desc: "El 70% de quienes llaman a su banco y piden una reducción del tipo de interés lo consiguen, según estudios de CFPB. Di: 'He sido cliente leal, tengo una oferta de otra tarjeta al X%. ¿Pueden igualarla?' Tiene costo cero intentarlo.",
    icon: CheckCircle2,
    color: "text-emerald-400",
    border: "border-emerald-500/20 bg-emerald-500/5",
  },
  {
    num: "05",
    title: "Considera refinanciar si tienes buen score",
    desc: "Con un FICO por encima de 680 puedes optar a: (a) balance transfer al 0% por 12–21 meses, (b) préstamo personal al 8–14% APR para pagar todas las tarjetas a la vez. Ambas opciones pueden reducir tu APR a la mitad o más.",
    icon: ArrowRight,
    color: "text-purple-400",
    border: "border-purple-500/20 bg-purple-500/5",
  },
]

export default function DeudaTarjetasPage() {
  const post = getBlogPost("deuda-tarjetas-eeuu-2026")
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  }

  return (
    <>
      <ReadingProgressBar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {post && (
        <StructuredData type="article" data={{
          slug: post.slug, title: post.title, description: post.description,
          image: post.image, publishedAt: post.publishedAt, updatedAt: post.updatedAt,
          author: post.author, category: post.category, tags: post.tags,
        }} />
      )}
      <StructuredData type="breadcrumbs" data={{
        breadcrumbs: [
          { name: "Inicio", url: "https://www.finanzasdigitales.es" },
          { name: "Blog", url: "https://www.finanzasdigitales.es/blog" },
          { name: "$1.27 billones en deuda de tarjetas EEUU 2026", url: "https://www.finanzasdigitales.es/blog/deuda-tarjetas-eeuu-2026" },
        ]
      }} />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-neutral-950 min-h-[90vh] flex flex-col justify-center">
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }} />
        {/* Purple glow */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[400px] bg-violet-900/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-red-900/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-5xl px-6 lg:px-8 py-20 sm:py-28">
          <Breadcrumbs
            customItems={[
              { label: "Inicio", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Deuda tarjetas EEUU", href: "/blog/deuda-tarjetas-eeuu-2026", isActive: true },
            ]}
          />

          <div className="mt-10 flex flex-wrap items-center gap-3 mb-10">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-violet-400">
              <CreditCard className="h-3 w-3" /> EEUU · Deudas
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-neutral-500">
              <Calendar className="h-3 w-3" /> 20 abril 2026
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-neutral-500">
              <Clock className="h-3 w-3" /> 7 min lectura
            </span>
          </div>

          {/* Trillion number */}
          <div className="mb-4">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-600 mb-3">Deuda total en tarjetas de crédito en EEUU · Q4 2025</p>
            <div className="font-black leading-none text-white" style={{ fontSize: "clamp(2.5rem, 8vw, 5.5rem)" }}>
              $1,277,000,000,000
            </div>
            <p className="mt-2 text-neutral-500 text-sm font-mono">Fuente: Reserva Federal de Nueva York — récord histórico</p>
          </div>

          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl max-w-3xl text-balance mt-8">
            Los americanos deben{" "}
            <span className="text-violet-400">$1.27 billones</span>{" "}
            en tarjetas de crédito — y los bancos quieren que sigas así
          </h1>

          <p className="mt-6 text-lg text-neutral-400 leading-relaxed max-w-2xl">
            El <strong className="text-white">61% de los deudores</strong> lleva más de un año sin poder salir.
            Los ingresos subieron un 22% desde 2021. La deuda en tarjetas subió un{" "}
            <strong className="text-violet-400">54%</strong>. Algo no cuadra.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
            {[
              { value: "$1.277T", label: "Deuda récord 2026" },
              { value: "21–24%", label: "APR promedio" },
              { value: "61%", label: "Atrapados > 1 año" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-3 text-center">
                <p className="text-lg font-black font-mono text-violet-400">{s.value}</p>
                <p className="mt-0.5 text-[10px] text-neutral-500 leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTEXTO EDITORIAL ─────────────────────────────────────────── */}
      <section className="bg-neutral-950 py-20 border-t border-neutral-900">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl mb-6">Cómo $1.27 billones en deuda no aparecen de la nada</h2>
          <p className="text-neutral-300 leading-8 mb-5">
            En 2021, la deuda total en tarjetas de crédito en EEUU era de aproximadamente $770.000 millones. Cuatro años después, ha crecido un 66% hasta superar el billón y cuarto. ¿Cómo se infla tan rápido una deuda de consumo? La respuesta tiene tres ingredientes: inflación, tipos de interés altos y marketing bancario muy efectivo.
          </p>
          <p className="text-neutral-300 leading-8 mb-5">
            La inflación de 2021–2023 redujo el poder adquisitivo de millones de familias sin que sus salarios crecieran al mismo ritmo. Muchos americanos empezaron a usar la tarjeta de crédito no para compras discrecionales sino para cubrir gastos básicos: supermercado, gasolina, facturas. Una vez que el saldo empieza a acumularse y no se puede liquidar a final de mes, entra en juego el tipo de interés: actualmente entre el <strong className="text-white">21% y el 24% APR</strong> en la mayoría de tarjetas.
          </p>
          <p className="text-neutral-300 leading-8 mb-5">
            La Reserva Federal subió tipos agresivamente entre 2022 y 2024 para combatir la inflación. Los bancos trasladaron esa subida casi inmediatamente a las APR de las tarjetas de crédito —que en EEUU suelen ser tipos variables ligados a la Fed Funds Rate. Sin embargo, cuando la Fed empezó a bajar tipos en 2024 y 2025, las APR de las tarjetas bajaron mucho más despacio. El spread entre el tipo de la Fed y el APR promedio de las tarjetas alcanzó máximos históricos.
          </p>
          <p className="text-neutral-300 leading-8 mb-5">
            El resultado es una trampa casi perfecta: los americanos que acumularon deuda durante la inflación ahora la pagan a tipos de interés históricamente altos, mientras los bancos registran beneficios récord en sus divisiones de tarjetas. JPMorgan Chase, Bank of America y Citigroup reportaron en conjunto más de <strong className="text-white">$40.000 millones</strong> en ingresos por intereses de tarjetas en 2025.
          </p>
        </div>
      </section>

      {/* ── LA TRAMPA DEL MÍNIMO ───────────────────────────────────────── */}
      <section className="bg-neutral-900 py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl mb-3 text-center">La trampa del pago mínimo</h2>
          <p className="text-neutral-400 text-center mb-10 max-w-2xl mx-auto">
            El pago mínimo está diseñado para que pagues el máximo de intereses posible. Así funciona para una deuda de <strong className="text-white">$5,000 al 22% APR</strong>:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                scenario: "Solo el mínimo (2%)",
                monthly: "$100 → $67",
                time: "28 años",
                interest: "$8,300",
                total: "$13,300",
                highlight: false,
                bad: true,
                label: "Lo que el banco quiere",
              },
              {
                scenario: "Pago fijo $200/mes",
                monthly: "$200",
                time: "2 años 9 meses",
                interest: "$1,580",
                total: "$6,580",
                highlight: false,
                bad: false,
                label: "Resultado realista",
              },
              {
                scenario: "Pago fijo $400/mes",
                monthly: "$400",
                time: "1 año 1 mes",
                interest: "$640",
                total: "$5,640",
                highlight: true,
                bad: false,
                label: "Lo óptimo",
              },
            ].map((s) => (
              <div
                key={s.scenario}
                className={`rounded-2xl border p-6 ${
                  s.highlight
                    ? "border-emerald-500/30 bg-emerald-500/5"
                    : s.bad
                    ? "border-red-500/30 bg-red-500/5"
                    : "border-neutral-800 bg-neutral-900/60"
                }`}
              >
                <p className={`text-xs font-semibold mb-3 ${s.bad ? "text-red-400" : s.highlight ? "text-emerald-400" : "text-neutral-400"}`}>
                  {s.label}
                </p>
                <h3 className="font-bold text-white mb-4 text-sm">{s.scenario}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Pago mensual</span>
                    <span className="font-mono font-bold text-neutral-200">{s.monthly}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Tiempo total</span>
                    <span className={`font-mono font-bold ${s.bad ? "text-red-400" : s.highlight ? "text-emerald-400" : "text-neutral-200"}`}>{s.time}</span>
                  </div>
                  <div className="flex justify-between border-t border-neutral-800 pt-2 mt-2">
                    <span className="text-neutral-500">Intereses pagados</span>
                    <span className={`font-mono font-black ${s.bad ? "text-red-400" : s.highlight ? "text-emerald-400" : "text-neutral-200"}`}>{s.interest}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-neutral-600 font-mono px-1">* Cálculo con $5,000 al 22% APR. Pago mínimo = 2% del saldo o $25, lo que sea mayor.</p>
        </div>
      </section>

      {/* ── POR QUÉ LOS BANCOS ─────────────────────────────────────────── */}
      <section className="bg-neutral-950 py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl mb-10 text-center">
            ¿Por qué los bancos <span className="text-violet-400">quieren</span> que pagues el mínimo?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "El negocio de los intereses",
                desc: "En la deuda del ejemplo, el banco que te prestó $5,000 acaba cobrando $13,300 si pagas el mínimo. Su ROI: 166%. Los ingresos por intereses de las tarjetas representan el 20–30% de los beneficios de los grandes bancos americanos.",
                stat: "+166%",
                statLabel: "retorno para el banco",
              },
              {
                title: "El mínimo baja contigo",
                desc: "El pago mínimo es un porcentaje del saldo, así que a medida que pagas un poco, el mínimo también baja. Esto crea una ilusión de progreso cuando en realidad casi todo el pago va a intereses y apenas reduces el principal.",
                stat: "~85%",
                statLabel: "del mínimo son intereses",
              },
              {
                title: "Recompensas para mantenerte enganchado",
                desc: "Los programas de puntos y cashback tienen un costo medio del 1–2% para el banco. Pero si pagas intereses al 22%, el banco recupera ese 2% cien veces. Las recompensas son rentables para ti solo si pagas el saldo completo cada mes.",
                stat: "22% > 2%",
                statLabel: "interés vs. cashback",
              },
              {
                title: "El límite siempre sube",
                desc: "Los bancos aumentan el límite de crédito sin pedirte permiso. No es un favor — es una invitación a gastar más de lo que tienes. Un límite alto también impacta negativamente tu credit utilization si no lo gestionas bien.",
                stat: "+34%",
                statLabel: "límites aumentados en 2 años",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-bold text-white">{item.title}</h3>
                  <div className="text-right shrink-0">
                    <p className="text-xl font-black font-mono text-violet-400">{item.stat}</p>
                    <p className="text-[10px] text-neutral-500">{item.statLabel}</p>
                  </div>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AD MID ─────────────────────────────────────────────────────── */}
      <div className="bg-neutral-950 py-4">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <AdSense slot="1562571362" format="horizontal" />
        </div>
      </div>

      {/* ── EL DISEÑO INTENCIONAL ──────────────────────────────────────── */}
      <section className="bg-neutral-950 py-20 border-t border-neutral-900">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl mb-6">La tarjeta de crédito fue diseñada para que nunca saldes el saldo</h2>
          <p className="text-neutral-300 leading-8 mb-5">
            En los años 70, el regulador americano eliminó los límites a los tipos de interés que los bancos podían cobrar en las tarjetas de crédito. Lo que siguió fue una revolución financiera: los bancos empezaron a distribuir tarjetas masivamente, a menudo a personas con ingresos bajos o historial crediticio escaso. La lógica era simple —cuanto más riesgo, mayor APR, y mayor APR significa mayor margen.
          </p>
          <p className="text-neutral-300 leading-8 mb-5">
            El pago mínimo, que parece una concesión al cliente, es en realidad el mecanismo más rentable del producto. Al fijar el mínimo como un porcentaje pequeño del saldo (típicamente 1–2%), los bancos garantizan que el saldo se reduzca muy lentamente y que los intereses se acumulen durante años. En una deuda de $5,000 al 22% APR, el banco recupera su principal en menos de dos años de pagos mínimos —y luego cobra intereses durante décadas más.
          </p>
          <p className="text-neutral-300 leading-8 mb-5">
            Los programas de recompensas —puntos, millas, cashback— funcionan como un incentivo para usar más la tarjeta y, en muchos casos, para gastar más de lo planeado. El cashback promedio es del 1–2%, pero si pagas intereses al 22%, el banco recupera ese "regalo" en menos de un mes de intereses acumulados. Las recompensas solo son un verdadero beneficio para quien paga el saldo completo cada mes —exactamente el cliente que menos rentabilidad genera al banco.
          </p>
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 mt-4">
            <p className="text-sm text-neutral-400 leading-7 italic border-l-2 border-violet-500/40 pl-4">
              "Si pagas el mínimo en tu tarjeta, no estás pagando tu deuda. Estás pagando el alquiler del dinero que ya gastaste, indefinidamente."
            </p>
          </div>
        </div>
      </section>

      {/* ── PLAN DE ESCAPE ─────────────────────────────────────────────── */}
      <section className="bg-neutral-900 py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl mb-3 text-center">El plan de escape en 5 pasos</h2>
          <p className="text-neutral-400 text-center mb-10">Sin productos milagrosos ni atajos — solo estrategia probada</p>

          <div className="space-y-4">
            {escapeSteps.map((step) => (
              <div key={step.num} className={`rounded-2xl border ${step.border} p-6`}>
                <div className="flex items-start gap-4">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-current/20 bg-current/5 ${step.color}`}>
                    <step.icon className={`h-6 w-6 ${step.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="text-xs font-mono text-neutral-600">{step.num}</span>
                      <h3 className="font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="text-sm text-neutral-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AD BOTTOM ──────────────────────────────────────────────────── */}
      <div className="bg-neutral-900 py-4">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <AdSense slot="5745358955" format="horizontal" />
        </div>
      </div>

      {/* ── AUTHOR + SOURCES ───────────────────────────────────────────── */}
      <section className="bg-neutral-900 py-12 border-t border-neutral-800">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 space-y-6">
          <ArticleSources category="Deudas" />
          <AuthorBox authorName="Alejandro Torres" />
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <section className="bg-neutral-950 py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl mb-8 text-center">Preguntas frecuentes</h2>
          <FAQNative title="Preguntas frecuentes" faqs={faqItems} />
        </div>
      </section>

      {/* ── RELATED ────────────────────────────────────────────────────── */}
      <section className="bg-neutral-900 py-16 border-t border-neutral-800">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-lg font-bold text-neutral-300 mb-6">Relacionados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/blog/aranceles-trump-bolsillo-2026", label: "Aranceles Trump: $1,300 más al año — qué hacer" },
              { href: "/blog/embargo-salarios-estudiantiles-2026", label: "Embargo de salarios por préstamos estudiantiles" },
            ].map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group flex items-center gap-3 rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 hover:border-neutral-600 transition-colors"
              >
                <p className="text-sm text-neutral-300 group-hover:text-white transition-colors leading-snug flex-1">{r.label}</p>
                <ChevronRight className="h-4 w-4 text-neutral-600 group-hover:text-neutral-400 shrink-0 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
