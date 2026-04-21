import type { Metadata } from "next"
import Link from "next/link"
import { TrendingDown, AlertTriangle, ArrowRight, Landmark, PiggyBank, LineChart, Shield, Coins, ChevronRight, Calendar, Clock } from "lucide-react"
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
    title: "Por qué tener el dinero en el banco en 2026 es el peor error financiero que puedes cometer",
    description:
      "Con la inflación al 3% y los bancos pagando un 0,1%, mantener el dinero parado te cuesta miles de euros al año. Calculamos la pérdida real y te damos las 5 mejores alternativas en España para 2026.",
    keywords:
      "dinero en banco 2026, inflación España 2026, letras del tesoro rentabilidad, alternativas al banco España, pérdida poder adquisitivo, cuentas remuneradas España",
    authors: [{ name: "María López", url: "https://www.finanzasdigitales.es" }],
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1 } },
    openGraph: {
      title: "Dinero en el banco en 2026: el error que te cuesta miles",
      description: "Inflación al 3%, banco paga 0,1%. Cada año que esperas, pierdes. Calculamos tu pérdida real.",
      url: "https://www.finanzasdigitales.es/blog/dinero-banco-error-2026",
      siteName: "Finanzas Digitales",
      type: "article",
      publishedTime: "2026-04-20T00:00:00+00:00",
      locale: "es_ES",
    },
    alternates: { canonical: "https://www.finanzasdigitales.es/blog/dinero-banco-error-2026" },
  }
}

const faqItems = [
  {
    question: "¿Es seguro sacar el dinero del banco para invertirlo?",
    answer:
      "El FGD (Fondo de Garantía de Depósitos) cubre hasta 100.000 € por titular y entidad. Por encima, sí hay riesgo bancario. Pero para la mayoría el peligro real no es el banco: es la inflación que erosiona tu poder adquisitivo silenciosamente cada año. Mover una parte a Letras del Tesoro, fondos o cuentas remuneradas es perfectamente seguro y regulado.",
  },
  {
    question: "¿Qué rentabilidad ofrecen las Letras del Tesoro en 2026?",
    answer:
      "Las Letras a 12 meses ofrecen actualmente en torno al 2,8–3,5% TAE con plena garantía del Estado español. Son la alternativa más sencilla al banco: las compras en tesoro.es sin comisiones y en 3 clics. Compiten directamente con los depósitos de los bancos sin ningún riesgo adicional.",
  },
  {
    question: "¿Qué es una cuenta remunerada y cómo funciona?",
    answer:
      "Una cuenta remunerada es una cuenta corriente que paga intereses sobre el saldo disponible, sin plazos fijos ni penalizaciones por retirar. En 2026 hay opciones como MyInvestor (hasta 2,5% TAE), EVO Banco o Pibank que superan ampliamente al 0,1% que pagan los grandes bancos. El dinero sigue siendo accesible en cualquier momento.",
  },
  {
    question: "¿Cuánto dinero debería tener en el banco vs. invertido?",
    answer:
      "La regla general: mantén en el banco (o cuenta remunerada) un fondo de emergencia de 3–6 meses de gastos. El resto puede ir a Letras del Tesoro, fondos indexados o inversiones según tu horizonte temporal. Si no sabes cuánto necesitas de colchón, nuestra calculadora de meta de ahorro puede ayudarte.",
  },
  {
    question: "¿Qué pasa si la inflación baja y el banco ya no pierde tanto?",
    answer:
      "Incluso con inflación al 1%, si tu banco paga el 0,1% sigues perdiendo poder adquisitivo. La clave no es solo la inflación: es la diferencia entre lo que ofrece el banco y lo que el mercado ofrece. En 2026 esa diferencia es de 2–3 puntos porcentuales, lo que en 10.000 € supone entre 200 € y 300 € al año que dejas de ganar sin motivo.",
  },
]

const yearlyLoss = [
  { year: "Año 1", bank: 10010, real: 9710, diff: -290 },
  { year: "Año 2", bank: 10020, real: 9428, diff: -572 },
  { year: "Año 3", bank: 10030, real: 9155, diff: -845 },
  { year: "Año 5", bank: 10050, real: 8626, diff: -1374 },
  { year: "Año 10", bank: 10100, real: 7441, diff: -2559 },
]

const alternatives = [
  {
    icon: Landmark,
    name: "Letras del Tesoro",
    return: "2,8–3,5%",
    risk: "Sin riesgo",
    riskColor: "text-emerald-400",
    desc: "Garantía del Estado español. Se compran en tesoro.es sin comisiones. Plazo: 3, 6 o 12 meses.",
    tag: "La más segura",
    tagColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    highlight: true,
  },
  {
    icon: PiggyBank,
    name: "Cuenta remunerada",
    return: "1,5–2,5%",
    risk: "Sin riesgo",
    riskColor: "text-emerald-400",
    desc: "MyInvestor, EVO, Pibank. Dinero disponible en cualquier momento. Ideal para el fondo de emergencia.",
    tag: "Más liquidez",
    tagColor: "bg-blue-500/15 text-blue-400 border-blue-500/30",
    highlight: false,
  },
  {
    icon: Shield,
    name: "Depósito a plazo",
    return: "2,0–3,2%",
    risk: "Sin riesgo",
    riskColor: "text-emerald-400",
    desc: "Los bancos online (Raisin, Freedom24) ofrecen los mejores tipos. El dinero queda inmovilizado el tiempo acordado.",
    tag: "Sin sorpresas",
    tagColor: "bg-purple-500/15 text-purple-400 border-purple-500/30",
    highlight: false,
  },
  {
    icon: LineChart,
    name: "Fondos monetarios",
    return: "3,0–3,8%",
    risk: "Muy bajo",
    riskColor: "text-emerald-400",
    desc: "Invierten en deuda pública a corto plazo. Liquidez casi inmediata. Rentabilidad superior a depósitos con riesgo mínimo.",
    tag: "Alternativa pro",
    tagColor: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    highlight: false,
  },
  {
    icon: Coins,
    name: "Fondos indexados",
    return: "7–10% (histórico)",
    risk: "Moderado",
    riskColor: "text-amber-400",
    desc: "Para dinero que no necesitas en 5+ años. El S&P 500 ha dado ~10% anual histórico. Volatilidad en el corto plazo.",
    tag: "Largo plazo",
    tagColor: "bg-rose-500/15 text-rose-400 border-rose-500/30",
    highlight: false,
  },
]

export default function DineroBancoError2026() {
  const post = getBlogPost("dinero-banco-error-2026")
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
          { name: "Dinero en el banco 2026: el error que te cuesta miles", url: "https://www.finanzasdigitales.es/blog/dinero-banco-error-2026" },
        ]
      }} />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-zinc-950 min-h-[92vh] flex flex-col justify-center">
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Red glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-red-900/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-5xl px-6 lg:px-8 py-20 sm:py-28">
          <Breadcrumbs
            customItems={[
              { label: "Inicio", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Dinero en el banco 2026", href: "/blog/dinero-banco-error-2026", isActive: true },
            ]}
          />

          {/* Category + date */}
          <div className="mt-10 flex flex-wrap items-center gap-3 mb-8">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-red-500/40 bg-red-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-red-400">
              <AlertTriangle className="h-3 w-3" /> Tema polémico
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-zinc-500">
              <Calendar className="h-3 w-3" /> 20 abril 2026
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-zinc-500">
              <Clock className="h-3 w-3" /> 9 min lectura
            </span>
          </div>

          {/* Big loss number */}
          <div className="mb-10">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500 mb-2">Lo que pierdes por cada 10.000 € en el banco</p>
            <div className="flex items-end gap-4 mb-2">
              <span
                className="font-black leading-none text-red-500"
                style={{ fontSize: "clamp(5rem, 14vw, 9rem)" }}
              >
                −2.900€
              </span>
            </div>
            <p className="text-zinc-400 text-sm font-mono">en 10 años · en términos de poder adquisitivo real</p>
          </div>

          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl max-w-3xl text-balance">
            Por qué tener el dinero en el banco en 2026 es{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-red-400">el peor error</span>
              <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-red-500/50" />
            </span>{" "}
            financiero que puedes cometer
          </h1>

          <p className="mt-6 text-lg text-zinc-400 leading-relaxed max-w-2xl">
            La inflación está al <strong className="text-white">3%</strong>. Tu banco te paga un{" "}
            <strong className="text-white">0,1%</strong>. La diferencia es{" "}
            <strong className="text-red-400">−2,9 puntos cada año</strong> que tu dinero pierde en poder adquisitivo.
            Y los bancos cuentan con que no hagas este cálculo.
          </p>

          {/* Quick stats bar */}
          <div className="mt-10 grid grid-cols-3 gap-3 max-w-xl">
            {[
              { label: "Inflación España 2026", value: "3,0%", color: "text-red-400" },
              { label: "Banco paga (promedio)", value: "0,1%", color: "text-zinc-400" },
              { label: "Pérdida real anual", value: "−2,9%", color: "text-red-500" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 text-center">
                <p className={`text-xl font-black font-mono ${s.color}`}>{s.value}</p>
                <p className="mt-1 text-[10px] text-zinc-500 leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTEXTO EDITORIAL ─────────────────────────────────────────── */}
      <section className="bg-zinc-950 py-20 border-t border-zinc-900">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 prose prose-invert prose-zinc max-w-none">
          <h2 className="text-2xl font-bold text-white sm:text-3xl mb-6">El pacto que firmaste sin saberlo</h2>
          <p className="text-zinc-300 leading-8 mb-5">
            Cuando abres una cuenta corriente en un banco español, el contrato tiene miles de palabras. Pero el resumen real es este: tú le dejas tu dinero, el banco lo invierte o lo presta a otros al 5–7% y a ti te devuelve un 0,1%. El diferencial es su negocio. Y funciona porque la mayoría de ahorradores nunca cuestiona ese acuerdo.
          </p>
          <p className="text-zinc-300 leading-8 mb-5">
            En 2022 y 2023, cuando el Banco Central Europeo subió los tipos al 4,5%, los bancos empezaron a ganar más con ese diferencial. Sin embargo, trasladaron una fracción mínima de esa subida a los depósitos de sus clientes. Según el Banco de España, el tipo medio de los depósitos a la vista en 2024 era del <strong className="text-white">0,08%</strong>, mientras el euríbor superaba el 4%. La diferencia, prácticamente íntegra, fue a los márgenes de los bancos.
          </p>
          <p className="text-zinc-300 leading-8 mb-8">
            En 2026, con el BCE bajando tipos, los bancos se apresuran a reducir también el poco que pagaban en cuentas remuneradas. Pero la inflación, que el FMI estima en el <strong className="text-white">3%</strong> para España en 2026 por el repunte energético derivado del conflicto en Oriente Próximo, no baja al mismo ritmo. El resultado: el ahorrador que no actúa pierde poder adquisitivo cada mes, de forma silenciosa y continua.
          </p>

          <h2 className="text-2xl font-bold text-white sm:text-3xl mb-6">Por qué los bancos no necesitan pagarte más</h2>
          <p className="text-zinc-300 leading-8 mb-5">
            La lógica bancaria es sencilla: mientras el cliente no se mueva, no hay necesidad de competir. Los cinco grandes bancos españoles (Santander, BBVA, CaixaBank, Sabadell y Bankinter) concentran más del 70% de los depósitos del país. Con esa cuota de mercado, no necesitan ofrecer tipos atractivos para retener el dinero —la inercia y la confianza lo hacen por ellos.
          </p>
          <p className="text-zinc-300 leading-8 mb-5">
            Las fintech y los bancos online —MyInvestor, EVO, Pibank, o los europeos de Raisin— sí compiten activamente por el ahorrador activo, ofreciendo cuentas remuneradas al 2–2,5% o depósitos al 3%+. Pero captan a quien busca activamente. El gran banco cuenta con que su cliente no busque.
          </p>
          <p className="text-zinc-300 leading-8 mb-8">
            Lo más irónico: el dinero parado en tu cuenta corriente <em className="text-zinc-400">sí trabaja</em>, pero trabaja para el banco. Cada euro que depositas es materia prima para que el banco conceda hipotecas, préstamos al consumo y financiación empresarial. Tú asumes el riesgo de que el banco quiebre (cubierto por el FGD hasta 100.000 €) y él se queda con el rendimiento. Entender este mecanismo es el primer paso para dejar de aceptarlo.
          </p>
        </div>
      </section>

      {/* ── EL LADRÓN SILENCIOSO ────────────────────────────────────────── */}
      <section className="bg-zinc-900 py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px flex-1 bg-zinc-800" />
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">El problema</span>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl mb-3 text-center">
            El ladrón silencioso que actúa mientras duermes
          </h2>
          <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
            La inflación no aparece en tu extracto bancario. Pero está ahí, comiendo tu dinero cada mes.
            Esto es lo que le pasa a <strong className="text-white">10.000 €</strong> en una cuenta corriente española:
          </p>

          <div className="space-y-3">
            {yearlyLoss.map((row, i) => {
              const lossPercent = Math.abs(row.diff) / 10000
              const barWidth = Math.min(lossPercent * 400, 100)
              return (
                <div key={row.year} className="grid grid-cols-[80px_1fr_120px] items-center gap-4">
                  <span className="text-sm font-mono text-zinc-400 text-right">{row.year}</span>
                  <div className="relative h-8 bg-zinc-800 rounded-lg overflow-hidden">
                    <div
                      className="absolute left-0 top-0 h-full bg-red-600/80 rounded-lg transition-all"
                      style={{ width: `${barWidth}%` }}
                    />
                    <div
                      className="absolute left-0 top-0 h-full bg-zinc-700/40 rounded-lg"
                      style={{ width: `${(row.bank / 10100) * 100}%` }}
                    />
                    <span className="absolute inset-0 flex items-center px-3 text-xs text-zinc-300 font-mono">
                      Valor real: {row.real.toLocaleString("es-ES")} €
                    </span>
                  </div>
                  <span className={`text-sm font-black font-mono text-right ${i >= 3 ? "text-red-400" : "text-red-500/80"}`}>
                    {row.diff.toLocaleString("es-ES")} €
                  </span>
                </div>
              )
            })}
          </div>

          <div className="mt-6 flex gap-4 text-xs text-zinc-500">
            <span className="flex items-center gap-2"><span className="inline-block w-3 h-3 rounded bg-zinc-700/60" />Saldo nominal banco</span>
            <span className="flex items-center gap-2"><span className="inline-block w-3 h-3 rounded bg-red-600/80" />Poder adquisitivo perdido</span>
          </div>
          <p className="mt-4 text-xs text-zinc-600 font-mono">* Cálculo con inflación constante del 3% y rentabilidad bancaria del 0,1%. Solo referencial.</p>
        </div>
      </section>

      {/* ── EL CÁLCULO QUE NO QUIEREN QUE HAGAS ──────────────────────── */}
      <section className="bg-zinc-950 py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl mb-3 text-center">
            El cálculo que tu banco no quiere que hagas
          </h2>
          <p className="text-zinc-400 text-center mb-10">Comparativa real para 10.000 € a 5 años (rentabilidad neta aproximada)</p>

          <div className="overflow-x-auto rounded-xl border border-zinc-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="px-5 py-4 text-left font-semibold text-zinc-300">Dónde pones el dinero</th>
                  <th className="px-5 py-4 text-right font-semibold text-zinc-300">Rentabilidad</th>
                  <th className="px-5 py-4 text-right font-semibold text-zinc-300">Ganancia a 5 años</th>
                  <th className="px-5 py-4 text-right font-semibold text-zinc-300">Resultado real</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Cuenta corriente banco", rate: "0,1%", gain: "+50 €", real: "−1.374 €", highlight: false, bad: true },
                  { name: "Cuenta remunerada", rate: "2,5%", gain: "+1.314 €", real: "−60 €", highlight: false, bad: false },
                  { name: "Letras del Tesoro", rate: "3,2%", gain: "+1.720 €", real: "+346 €", highlight: true, bad: false },
                  { name: "Fondo monetario", rate: "3,5%", gain: "+1.877 €", real: "+503 €", highlight: true, bad: false },
                  { name: "Fondo indexado global", rate: "7,0% (histórico)", gain: "+4.026 €", real: "+2.652 €", highlight: false, bad: false },
                ].map((row) => (
                  <tr
                    key={row.name}
                    className={`border-b border-zinc-800/50 transition-colors ${row.highlight ? "bg-emerald-500/5" : row.bad ? "bg-red-500/5" : ""}`}
                  >
                    <td className="px-5 py-4 text-zinc-200 font-medium">
                      {row.bad && <span className="mr-2 text-red-400">✗</span>}
                      {row.highlight && <span className="mr-2 text-emerald-400">★</span>}
                      {row.name}
                    </td>
                    <td className="px-5 py-4 text-right font-mono text-zinc-300">{row.rate}</td>
                    <td className="px-5 py-4 text-right font-mono text-zinc-200">{row.gain}</td>
                    <td className={`px-5 py-4 text-right font-black font-mono ${row.real.startsWith("−") ? "text-red-400" : "text-emerald-400"}`}>
                      {row.real}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-zinc-600 font-mono px-1">
            * &ldquo;Resultado real&rdquo; = ganancia nominal − pérdida por inflación (3% anual · 5 años = −1.424 €). Fondos indexados: rentabilidad histórica, sin garantía futura.
          </p>
        </div>
      </section>

      {/* ── AD MID ─────────────────────────────────────────────────────── */}
      <div className="bg-zinc-950 py-4">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <AdSense slot="1562571362" format="horizontal" />
        </div>
      </div>

      {/* ── ANÁLISIS: POR QUÉ AHORA ─────────────────────────────────────── */}
      <section className="bg-zinc-900 py-20 border-t border-zinc-800">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl mb-6">2026: el año en que ya no hay excusa para no actuar</h2>
          <p className="text-zinc-300 leading-8 mb-5">
            Durante años, el argumento para no mover el dinero era que &ldquo;todo paga lo mismo&rdquo;. Con tipos en cero, los fondos monetarios o las Letras del Tesoro apenas diferían del banco. Ese argumento murió en 2022 y sigue muerto en 2026.
          </p>
          <p className="text-zinc-300 leading-8 mb-5">
            Las <strong className="text-white">Letras del Tesoro a 12 meses</strong> ofrecen actualmente entre el 2,8% y el 3,5% TAE. Se compran directamente en <strong className="text-white">tesoro.es</strong> sin intermediarios, sin comisiones de custodia si las domicilias en el Banco de España, y con la garantía total del Estado español —teóricamente más seguro que cualquier banco. El proceso completo, desde el registro hasta la compra, lleva menos de 30 minutos.
          </p>
          <p className="text-zinc-300 leading-8 mb-5">
            Los <strong className="text-white">fondos monetarios</strong>, por su parte, han recuperado protagonismo. Productos como el Amundi Euro Liquidity, el Pictet CH-Short-Term Money Market o los de Fidelity invierten en deuda pública a corto plazo y generan rentabilidades del 3–3,8% con liquidez casi diaria. Están disponibles en cualquier broker o plataforma de inversión española y no requieren conocimientos financieros avanzados.
          </p>
          <p className="text-zinc-300 leading-8 mb-5">
            Para el dinero que no necesitarás en al menos 5 años, los <strong className="text-white">fondos indexados globales</strong> —que replican el MSCI World o el S&P 500— han dado una rentabilidad media histórica del 7–10% anual. Con aportaciones mensuales, el impacto de la volatilidad se suaviza y el interés compuesto hace el resto. No se trata de especular: se trata de no regalarle al banco lo que el mercado puede darte.
          </p>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 mt-6">
            <p className="text-zinc-400 text-sm leading-7 italic border-l-2 border-zinc-600 pl-4">
              &ldquo;El mayor riesgo no es perder dinero en bolsa. Es no perderlo en el banco mientras la inflación lo erosiona despacio, sin que nadie te mande un aviso.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ── LAS 5 ALTERNATIVAS ─────────────────────────────────────────── */}
      <section className="bg-zinc-900 py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">La solución</p>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              5 alternativas al banco para tu dinero en España 2026
            </h2>
            <p className="mt-3 text-zinc-400">Ordenadas de menor a mayor riesgo. Todas legales, reguladas y al alcance de cualquier ahorrador.</p>
          </div>

          <div className="space-y-4">
            {alternatives.map((alt, i) => (
              <div
                key={alt.name}
                className={`relative rounded-2xl border p-6 transition-all ${
                  alt.highlight
                    ? "border-emerald-500/40 bg-emerald-500/5"
                    : "border-zinc-800 bg-zinc-900/80"
                }`}
              >
                {alt.highlight && (
                  <span className="absolute -top-3 right-6 rounded-full border border-emerald-500/40 bg-emerald-500/15 px-3 py-0.5 text-xs font-semibold text-emerald-400">
                    Recomendada
                  </span>
                )}
                <div className="flex items-start gap-4">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${alt.highlight ? "border-emerald-500/30 bg-emerald-500/10" : "border-zinc-700 bg-zinc-800"}`}>
                    <alt.icon className={`h-5 w-5 ${alt.highlight ? "text-emerald-400" : "text-zinc-400"}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h3 className="font-bold text-white text-lg">{alt.name}</h3>
                      <span className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold ${alt.tagColor}`}>{alt.tag}</span>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-3">{alt.desc}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="font-mono">
                        <span className="text-zinc-500">Rentabilidad: </span>
                        <span className="font-bold text-white">{alt.return}</span>
                      </span>
                      <span className="font-mono">
                        <span className="text-zinc-500">Riesgo: </span>
                        <span className={`font-bold ${alt.riskColor}`}>{alt.risk}</span>
                      </span>
                    </div>
                  </div>
                  <span className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full border border-zinc-700 text-zinc-500 font-black text-xs shrink-0">
                    {i + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VEREDICTO ──────────────────────────────────────────────────── */}
      <section className="bg-zinc-950 py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500/15 border border-red-500/30 mt-0.5">
                <TrendingDown className="h-5 w-5 text-red-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-3">El veredicto</h2>
                <p className="text-zinc-300 leading-relaxed mb-4">
                  No se trata de demonizar a los bancos: son seguros, necesarios y convenientes para el día a día. El problema es dejar <strong className="text-white">dinero que no necesitas a corto plazo</strong> durmiendo en una cuenta corriente al 0,1% mientras la inflación avanza al 3%.
                </p>
                <p className="text-zinc-300 leading-relaxed">
                  La regla es simple:{" "}
                  <strong className="text-white">fondo de emergencia (3–6 meses) en cuenta remunerada o liquidez inmediata</strong>, el resto en Letras del Tesoro, fondos monetarios o indexados según tu horizonte temporal.
                  No hace falta ser experto. Solo hace falta hacer el cálculo.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/calculadoras/meta-ahorro"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-100 transition-colors"
            >
              Calcular mi plan de ahorro <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/mejores-fondos-monetarios-espana-2026"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-300 hover:border-zinc-500 transition-colors"
            >
              Ver fondos monetarios 2026 <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── AD BOTTOM ──────────────────────────────────────────────────── */}
      <div className="bg-zinc-900 py-4">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <AdSense slot="5745358955" format="horizontal" />
        </div>
      </div>

      {/* ── AUTHOR + SOURCES ───────────────────────────────────────────── */}
      <section className="bg-zinc-900 py-12 border-t border-zinc-800">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 space-y-6">
          <ArticleSources category="Ahorro" />
          <AuthorBox authorName="María López" />
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <section className="bg-zinc-950 py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl mb-8 text-center">Preguntas frecuentes</h2>
          <FAQNative title="Preguntas frecuentes" faqs={faqItems} />
        </div>
      </section>

      {/* ── RELATED ────────────────────────────────────────────────────── */}
      <section className="bg-zinc-950 py-16 border-t border-zinc-800">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-lg font-bold text-zinc-300 mb-6">También te puede interesar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { href: "/mejores-fondos-monetarios-espana-2026", label: "Mejores fondos monetarios España 2026" },
              { href: "/cuentas-remuneradas-espana-2026", label: "Cuentas remuneradas España 2026" },
              { href: "/blog/como-proteger-ahorros-inflacion-espana", label: "Cómo proteger tus ahorros de la inflación" },
            ].map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 hover:border-zinc-600 transition-colors"
              >
                <p className="text-sm text-zinc-300 group-hover:text-white transition-colors leading-snug">{r.label}</p>
                <ChevronRight className="h-4 w-4 text-zinc-600 group-hover:text-zinc-400 shrink-0 ml-auto transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
