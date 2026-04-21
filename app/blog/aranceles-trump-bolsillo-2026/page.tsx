import type { Metadata } from "next"
import Link from "next/link"
import { AlertTriangle, ShoppingCart, Cpu, Car, Shirt, ChevronRight, Calendar, Clock, TrendingUp, Shield, PiggyBank } from "lucide-react"
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
    title: "Aranceles Trump 2026: cómo te van a costar $1,300 extra este año y qué hacer",
    description:
      "El Yale Budget Lab estima entre $650 y $1,340 de coste adicional por hogar en 2026. JPMorgan advierte que los consumidores absorberán el 80%. Productos afectados y estrategias para proteger tu bolsillo.",
    keywords:
      "aranceles Trump 2026, impacto aranceles consumidores EEUU, coste aranceles hogar, inflación aranceles, qué se encarece con aranceles",
    authors: [{ name: "Carlos Sánchez", url: "https://www.finanzasdigitales.es" }],
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1 } },
    openGraph: {
      title: "Aranceles Trump 2026: $1,300 más al año — qué hacer con tu dinero",
      description: "Análisis del impacto real de los aranceles de 2026 en el bolsillo del consumidor americano.",
      url: "https://www.finanzasdigitales.es/blog/aranceles-trump-bolsillo-2026",
      siteName: "Finanzas Digitales",
      type: "article",
      publishedTime: "2026-04-20T00:00:00+00:00",
      locale: "es_ES",
    },
    alternates: { canonical: "https://www.finanzasdigitales.es/blog/aranceles-trump-bolsillo-2026" },
  }
}

const faqItems = [
  {
    question: "¿Qué productos se encarecerán más por los aranceles en 2026?",
    answer:
      "Los más afectados son: electrónica de consumo (smartphones, laptops, tablets — muchos fabricados en China o México), ropa y calzado importados de Asia, electrodomésticos, automóviles y sus repuestos. Los alimentos también subirán si los socios comerciales aplican aranceles de represalia sobre productos agrícolas americanos como soja, maíz o whisky.",
  },
  {
    question: "¿Pueden los aranceles provocar una recesión en EEUU?",
    answer:
      "JPMorgan elevó la probabilidad de recesión en EEUU al 60% para finales de 2026. El FMI rebajó el crecimiento americano y alertó sobre el impacto inflacionario. La historia muestra que guerras comerciales prolongadas dañan tanto al país que las aplica como a sus socios. No es certeza, pero el riesgo está sobre la mesa.",
  },
  {
    question: "¿Por qué los consumidores pagan los aranceles si los pagan las empresas importadoras?",
    answer:
      "Técnicamente, los aranceles los paga la empresa importadora al gobierno. Pero en la práctica, las empresas trasladan ese coste adicional al precio final del producto. En 2025, las empresas absorbieron ~80% del coste para no perder clientes. En 2026, con aranceles más altos y duraderos, JPMorgan estima que esa proporción se invierte: los consumidores absorberán el 80%.",
  },
  {
    question: "¿Qué puede hacer una familia para reducir el impacto?",
    answer:
      "Varias estrategias: (1) Adelantar compras grandes planificadas (coche, electrodomésticos) antes de nuevas subidas. (2) Comprar segunda mano en categorías muy afectadas como electrónica o ropa. (3) Buscar productos fabricados en EEUU (exentos de aranceles). (4) Revisar el presupuesto mensual y ajustar categorías flexibles. (5) Mantener el fondo de emergencia robusto ante posible desaceleración económica.",
  },
  {
    question: "¿Los aranceles son permanentes o pueden revertirse?",
    answer:
      "Los aranceles pueden modificarse o eliminarse mediante negociaciones bilaterales, decisiones ejecutivas o legislación del Congreso. Históricamente, las guerras arancelarias suelen resolverse en plazos de 1–3 años mediante acuerdos. Sin embargo, el impacto en precios tarda tiempo en revertirse incluso después de reducirse los aranceles, porque las cadenas de suministro tardan en reorganizarse.",
  },
]

const impactedCategories = [
  { icon: Cpu, name: "Electrónica", increase: "+15–25%", examples: "Smartphones, laptops, tablets, consolas", color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20" },
  { icon: Car, name: "Automóviles", increase: "+8–15%", examples: "Coches importados y repuestos de fabricación extranjera", color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/20" },
  { icon: Shirt, name: "Ropa y calzado", increase: "+10–20%", examples: "Prendas fabricadas en Asia, zapatillas deportivas", color: "text-purple-400", bg: "bg-purple-500/10 border-purple-500/20" },
  { icon: ShoppingCart, name: "Electrodomésticos", increase: "+10–18%", examples: "Lavadoras, frigoríficos, microondas importados", color: "text-rose-400", bg: "bg-rose-500/10 border-rose-500/20" },
]

const strategies = [
  {
    icon: ShoppingCart,
    title: "Adelanta compras grandes planificadas",
    desc: "Si necesitarás un coche, electrodoméstico o equipo electrónico en los próximos 12 meses, comprarlo ahora puede ahorrarte un 10–25% antes de nuevas subidas de precio.",
  },
  {
    icon: Shield,
    title: "Refuerza el fondo de emergencia",
    desc: "Con riesgo de recesión al 60% según JPMorgan, tener 6 meses de gastos cubiertos es más importante que nunca. Si tu fondo es menor, prioriza construirlo.",
  },
  {
    icon: PiggyBank,
    title: "Ajusta el presupuesto mensual",
    desc: "Identifica las categorías que más te afectarán y reduce las discrecionales. Un $50–$100 extra al mes en gastos fijos significa $600–$1,200 al año si no reaccionas.",
  },
  {
    icon: TrendingUp,
    title: "No detengas tus inversiones",
    desc: "La volatilidad por aranceles puede crear bajadas temporales en bolsa. Seguir aportando regularmente (dollar-cost averaging) suele ser la estrategia correcta a largo plazo.",
  },
]

export default function ArancelesPage() {
  const post = getBlogPost("aranceles-trump-bolsillo-2026")
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
          { name: "Aranceles Trump 2026: $1,300 más al año", url: "https://www.finanzasdigitales.es/blog/aranceles-trump-bolsillo-2026" },
        ]
      }} />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-slate-950 min-h-[88vh] flex flex-col justify-center">
        {/* Diagonal stripes */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, #f59e0b 0px, #f59e0b 2px, transparent 2px, transparent 40px)",
          }}
        />
        {/* Amber glow top */}
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-amber-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-red-900/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-5xl px-6 lg:px-8 py-20 sm:py-28">
          <Breadcrumbs
            customItems={[
              { label: "Inicio", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Aranceles Trump 2026", href: "/blog/aranceles-trump-bolsillo-2026", isActive: true },
            ]}
          />

          <div className="mt-10 flex flex-wrap items-center gap-3 mb-8">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-amber-400">
              <AlertTriangle className="h-3 w-3" /> EEUU · Economía
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
              <Calendar className="h-3 w-3" /> 20 abril 2026
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
              <Clock className="h-3 w-3" /> 8 min lectura
            </span>
          </div>

          {/* Impact number */}
          <div className="mb-8">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-slate-500 mb-2">Coste adicional estimado por hogar en 2026</p>
            <div className="flex items-baseline gap-3 flex-wrap">
              <span
                className="font-black leading-none text-amber-400"
                style={{ fontSize: "clamp(4rem, 12vw, 8rem)" }}
              >
                $1,340
              </span>
              <span className="text-slate-400 text-2xl font-bold">/año</span>
            </div>
            <p className="text-slate-500 text-sm font-mono mt-1">Estimación máxima · Yale Budget Lab · Abril 2026</p>
          </div>

          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl max-w-3xl text-balance">
            Cómo los aranceles de Trump te van a costar{" "}
            <span className="text-amber-400">$1,300 extra</span>{" "}
            este año — y qué hacer con tu dinero
          </h1>

          <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-2xl">
            El Yale Budget Lab lo cuantifica: entre{" "}
            <strong className="text-white">$650 y $1,340 por hogar</strong> en 2026.
            JPMorgan advierte que este año los consumidores pagarán el{" "}
            <strong className="text-amber-400">80% del coste</strong> de los aranceles — al revés que en 2025.
          </p>

          {/* Source strip */}
          <div className="mt-8 flex flex-wrap gap-3">
            {["Yale Budget Lab", "JPMorgan Research", "FMI Abril 2026"].map((s) => (
              <span key={s} className="rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-1.5 text-xs font-mono text-slate-400">
                Fuente: {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTEXTO EDITORIAL ─────────────────────────────────────────── */}
      <section className="bg-slate-950 py-20 border-t border-slate-900">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl mb-6">Cómo llegamos a esta guerra comercial</h2>
          <p className="text-slate-300 leading-8 mb-5">
            En abril de 2025, la administración Trump anunció aranceles universales del 10% sobre casi todas las importaciones y aranceles específicos del 25–145% sobre productos de China, México y Canadá. La justificación oficial era doble: proteger la industria americana y reducir el déficit comercial. Los mercados respondieron con la mayor caída semanal del S&P 500 desde 2020.
          </p>
          <p className="text-slate-300 leading-8 mb-5">
            Los socios comerciales respondieron con represalias. La Unión Europea aplicó aranceles a productos americanos emblemáticos: bourbon, motocicletas Harley-Davidson y equipamiento agrícola. China elevó sus propios aranceles sobre importaciones americanas al 125%. Canadá y México hicieron lo mismo en categorías clave. Lo que empezó como una medida proteccionista se convirtió en una guerra arancelaria global en cuestión de semanas.
          </p>
          <p className="text-slate-300 leading-8 mb-5">
            En 2025, las grandes empresas importadoras —Apple, Walmart, Target— absorbieron la mayor parte del coste para no alienar a sus clientes en un contexto de alta competitividad. Sus márgenes se comprimieron, pero los precios no subieron tanto como se esperaba. Esa estrategia tiene un límite, y JPMorgan advierte que en 2026 ese límite se ha alcanzado: con márgenes ya ajustados y aranceles persistentes, las empresas no pueden seguir absorbiendo el diferencial.
          </p>
          <p className="text-slate-300 leading-8 mb-5">
            El resultado: lo que en 2025 fue principalmente un problema para los accionistas de las empresas importadoras, en 2026 se convierte en un problema directo para el consumidor. El Yale Budget Lab, en su análisis de abril de 2026, estima que el hogar americano promedio pagará entre <strong className="text-white">$650 y $1,340 más al año</strong> dependiendo de su nivel de ingresos y hábitos de consumo.
          </p>
        </div>
      </section>

      {/* ── CÓMO FUNCIONA ──────────────────────────────────────────────── */}
      <section className="bg-slate-900 py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl mb-3 text-center">¿Cómo te llega el arancel al bolsillo?</h2>
          <p className="text-slate-400 text-center mb-10 max-w-2xl mx-auto">Muchos creen que el arancel lo paga la empresa importadora. En teoría, sí. En la práctica, el coste siempre llega al consumidor final.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {[
              {
                step: "01",
                title: "Empresa importa producto",
                desc: "Una empresa americana importa smartphones de China. El gobierno cobra un 20% de arancel sobre el valor.",
                color: "border-slate-700 text-slate-400",
              },
              {
                step: "02",
                title: "Empresa absorbe... o traslada",
                desc: "En 2025 las empresas absorbieron el coste para no perder clientes. En 2026, con márgenes ajustados, trasladan el 80% al precio final.",
                color: "border-amber-500/30 text-amber-400",
              },
              {
                step: "03",
                title: "Tú pagas más en el checkout",
                desc: "El smartphone que costaba $800 ahora cuesta $960. El televisor que costaba $500 ahora cuesta $590. Sin que nadie te avise.",
                color: "border-red-500/30 text-red-400",
              },
            ].map((item) => (
              <div key={item.step} className={`rounded-2xl border ${item.color} bg-slate-900/80 p-6 relative`}>
                <span className="absolute top-4 right-4 text-4xl font-black text-white/5">{item.step}</span>
                <p className={`text-xs font-mono uppercase tracking-widest mb-2 ${item.color.split(" ")[1]}`}>Paso {item.step}</p>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* 2025 vs 2026 bar */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="font-semibold text-white mb-4">¿Quién paga el coste? 2025 vs. 2026</h3>
            <div className="space-y-3">
              {[
                { label: "2025 — Empresas absorbieron", company: 80, consumer: 20 },
                { label: "2026 — Consumidores pagan (estimado)", company: 20, consumer: 80 },
              ].map((row) => (
                <div key={row.label}>
                  <p className="text-xs text-slate-400 mb-1.5">{row.label}</p>
                  <div className="flex h-8 rounded-lg overflow-hidden">
                    <div
                      className="flex items-center justify-center text-xs font-bold text-slate-900 bg-slate-400 transition-all"
                      style={{ width: `${row.company}%` }}
                    >
                      {row.company}% empresa
                    </div>
                    <div
                      className="flex items-center justify-center text-xs font-bold text-white bg-amber-500 transition-all"
                      style={{ width: `${row.consumer}%` }}
                    >
                      {row.consumer}% tú
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-600 font-mono">Fuente: JPMorgan Research, abril 2026</p>
          </div>
        </div>
      </section>

      {/* ── PRODUCTOS AFECTADOS ────────────────────────────────────────── */}
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl mb-3 text-center">Los productos que más se encarecen</h2>
          <p className="text-slate-400 text-center mb-10">Incrementos de precio estimados para el consumidor final en 2026</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {impactedCategories.map((cat) => (
              <div key={cat.name} className={`rounded-2xl border ${cat.bg} p-6`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${cat.bg}`}>
                    <cat.icon className={`h-5 w-5 ${cat.color}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{cat.name}</h3>
                    <span className={`text-lg font-black font-mono ${cat.color}`}>{cat.increase}</span>
                  </div>
                </div>
                <p className="text-sm text-slate-400">{cat.examples}</p>
              </div>
            ))}
          </div>

          {/* Income impact table */}
          <div className="mt-10 rounded-2xl border border-slate-800 overflow-hidden">
            <div className="border-b border-slate-800 px-6 py-4 bg-slate-900">
              <h3 className="font-semibold text-white">Impacto estimado por nivel de ingresos</h3>
              <p className="text-xs text-slate-500 mt-0.5">Fuente: Yale Budget Lab, 2026</p>
            </div>
            <table className="w-full text-sm">
              <thead className="bg-slate-900/50">
                <tr>
                  <th className="px-5 py-3 text-left font-semibold text-slate-400">Ingresos anuales</th>
                  <th className="px-5 py-3 text-right font-semibold text-slate-400">Coste adicional</th>
                  <th className="px-5 py-3 text-right font-semibold text-slate-400">% del ingreso</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { bracket: "Menos de $30,000", cost: "$650–$800", pct: "2.5–3.0%", highlight: true },
                  { bracket: "$30,000–$75,000", cost: "$800–$1,050", pct: "1.5–2.5%", highlight: false },
                  { bracket: "$75,000–$120,000", cost: "$1,050–$1,200", pct: "1.0–1.5%", highlight: false },
                  { bracket: "Más de $120,000", cost: "$1,200–$1,340", pct: "0.8–1.2%", highlight: false },
                ].map((row) => (
                  <tr key={row.bracket} className={`border-t border-slate-800/50 ${row.highlight ? "bg-red-500/5" : ""}`}>
                    <td className="px-5 py-3.5 text-slate-200">
                      {row.highlight && <span className="mr-2 text-red-400 text-xs">↑ más afectados</span>}
                      {row.bracket}
                    </td>
                    <td className="px-5 py-3.5 text-right font-mono font-bold text-amber-400">{row.cost}</td>
                    <td className={`px-5 py-3.5 text-right font-mono font-bold ${row.highlight ? "text-red-400" : "text-slate-300"}`}>{row.pct}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-600 font-mono px-1">* Las familias con menores ingresos dedican mayor proporción de su gasto a bienes básicos afectados (ropa, electrónica de entrada, alimentos).</p>
        </div>
      </section>

      {/* ── AD MID ─────────────────────────────────────────────────────── */}
      <div className="bg-slate-900 py-4">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <AdSense slot="1562571362" format="horizontal" />
        </div>
      </div>

      {/* ── EL DEBATE ──────────────────────────────────────────────────── */}
      <section className="bg-slate-900 py-20 border-t border-slate-800">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl mb-6">¿Proteccionismo inteligente o suicidio económico?</h2>
          <p className="text-slate-300 leading-8 mb-5">
            Los defensores de los aranceles argumentan que décadas de libre comercio han vaciado la industria manufacturera americana. Ciudades enteras del Rust Belt perdieron sus empleos cuando las fábricas se trasladaron a México o China en busca de mano de obra barata. Los aranceles, en esta visión, son un instrumento para repatriar empleos y reducir la dependencia de cadenas de suministro extranjeras que quedaron en evidencia durante el COVID.
          </p>
          <p className="text-slate-300 leading-8 mb-5">
            Los críticos apuntan a los datos históricos: la guerra arancelaria de 2018–2019 con China creó 175.000 empleos en sectores protegidos pero destruyó 300.000 en sectores dependientes de importaciones baratas, según el Peterson Institute. Los consumidores con menores ingresos, que gastan un mayor porcentaje de su salario en bienes físicos, son los que más sufren las subidas de precio. Y los empleos manufactureros que vuelven suelen ser altamente automatizados —no el empleo masivo de décadas anteriores.
          </p>
          <p className="text-slate-300 leading-8 mb-5">
            Lo que resulta difícilmente discutible es que, independientemente de quién tenga razón en el debate macro, <strong className="text-white">el coste a corto plazo lo paga el consumidor</strong>. Las familias no pueden esperar a que la política comercial se resuelva. Necesitan ajustar su presupuesto ahora.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-5">
              <p className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">A favor</p>
              <ul className="space-y-1.5 text-sm text-slate-300">
                {["Repatriación de industria manufacturera", "Reducción dependencia de China", "Presión negociadora con socios", "Ingresos fiscales adicionales"].map(i => (
                  <li key={i} className="flex items-start gap-2"><span className="text-amber-400 shrink-0 mt-0.5">+</span>{i}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-5">
              <p className="text-xs font-mono uppercase tracking-widest text-red-400 mb-2">En contra</p>
              <ul className="space-y-1.5 text-sm text-slate-300">
                {["El consumidor paga el coste real", "Represalias dañan exportadores americanos", "Los empleos creados son automatizados", "Riesgo real de recesión (JPMorgan: 60%)"].map(i => (
                  <li key={i} className="flex items-start gap-2"><span className="text-red-400 shrink-0 mt-0.5">−</span>{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUÉ HACER ──────────────────────────────────────────────────── */}
      <section className="bg-slate-900 py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl mb-3 text-center">Qué hacer con tu dinero ahora</h2>
          <p className="text-slate-400 text-center mb-10">Estrategias concretas para reducir el impacto en tu bolsillo</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {strategies.map((s, i) => (
              <div key={s.title} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10">
                    <s.icon className="h-5 w-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xs font-mono text-amber-500/60">{String(i + 1).padStart(2, "0")}</span>
                      <h3 className="font-bold text-white">{s.title}</h3>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AD BOTTOM ──────────────────────────────────────────────────── */}
      <div className="bg-slate-950 py-4">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <AdSense slot="5745358955" format="horizontal" />
        </div>
      </div>

      {/* ── AUTHOR + SOURCES ───────────────────────────────────────────── */}
      <section className="bg-slate-900 py-12 border-t border-slate-800">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 space-y-6">
          <ArticleSources category="Economía" />
          <AuthorBox authorName="Carlos Sánchez" />
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl mb-8 text-center">Preguntas frecuentes</h2>
          <FAQNative title="Preguntas frecuentes" faqs={faqItems} />
        </div>
      </section>

      {/* ── RELATED ────────────────────────────────────────────────────── */}
      <section className="bg-slate-900 py-16 border-t border-slate-800">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-lg font-bold text-slate-300 mb-6">Otros posts que te pueden interesar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/blog/deuda-tarjetas-eeuu-2026", label: "$1.27 billones en deuda de tarjetas: la trampa del mínimo" },
              { href: "/blog/embargo-salarios-estudiantiles-2026", label: "Embargo de salarios por préstamos estudiantiles en EEUU" },
            ].map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4 hover:border-slate-600 transition-colors"
              >
                <p className="text-sm text-slate-300 group-hover:text-white transition-colors leading-snug flex-1">{r.label}</p>
                <ChevronRight className="h-4 w-4 text-slate-600 group-hover:text-slate-400 shrink-0 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
