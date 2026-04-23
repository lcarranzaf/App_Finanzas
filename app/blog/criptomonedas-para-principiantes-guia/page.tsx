import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, AlertTriangle, ShieldCheck, TrendingUp, Calendar, BookOpen, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { FAQNative } from "@/components/faq-native"
import { AuthorBox } from "@/components/author-box"
import { ArticleSources } from "@/components/article-sources"
import AdSense from "@/components/AdSense"
import StructuredData from "@/components/structured-data"
import { ReadingProgressBar } from "@/components/reading-progress"
import { getBlogPost } from "@/lib/blog-data"
import { getAuthorByName } from "@/lib/authors-data"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Criptomonedas para principiantes: guía completa 2026",
    description: "Aprende qué son las criptomonedas, cómo funcionan Bitcoin y Ethereum, dónde comprar de forma segura en España, cuánto invertir y los errores que debes evitar como principiante.",
    keywords: "criptomonedas para principiantes España, cómo invertir en bitcoin España, comprar criptomonedas España, regulación MiCA, impuestos criptomonedas IRPF, Bit2Me plataforma",
    authors: [{ name: "Alejandro Torres", url: "https://www.finanzasdigitales.es" }],
    publisher: "Finanzas Digitales",
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1 } },
    openGraph: {
      title: "Criptomonedas para principiantes: guía completa 2026",
      description: "Aprende a invertir en criptomonedas desde España con seguridad.",
      url: "https://www.finanzasdigitales.es/blog/criptomonedas-para-principiantes-guia",
      siteName: "Finanzas Digitales",
      type: "article",
      publishedTime: "2026-02-15T00:00:00+00:00",
      modifiedTime: "2026-04-19T00:00:00+00:00",
      locale: "es_ES",
    },
    alternates: {
      canonical: "https://www.finanzasdigitales.es/blog/criptomonedas-para-principiantes-guia",
    },
  }
}

const cryptos = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    emoji: "₿",
    year: "2009",
    desc: "El oro digital. Suministro limitado a 21 millones. La reserva de valor más consolidada del ecosistema cripto.",
    risk: 3,
    riskLabel: "Medio-alto",
    riskColor: "text-orange-500",
    tags: ["Reserva de valor", "Más establecido", "Alta liquidez"],
    bg: "from-orange-500/10 to-amber-500/5",
    border: "border-orange-500/25",
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    emoji: "⬡",
    year: "2015",
    desc: "La plataforma de contratos inteligentes. Base del ecosistema DeFi, NFTs y aplicaciones descentralizadas.",
    risk: 4,
    riskLabel: "Alto",
    riskColor: "text-red-500",
    tags: ["Smart contracts", "DeFi", "Alta innovación"],
    bg: "from-blue-500/10 to-indigo-500/5",
    border: "border-blue-500/25",
  },
  {
    symbol: "USDC",
    name: "Stablecoins",
    emoji: "$",
    year: "—",
    desc: "Valor anclado al dólar o euro. Útil como refugio sin salir del ecosistema cripto. Sin volatilidad extrema.",
    risk: 1,
    riskLabel: "Bajo",
    riskColor: "text-emerald-500",
    tags: ["Valor estable", "Sin volatilidad", "Refugio cripto"],
    bg: "from-emerald-500/10 to-teal-500/5",
    border: "border-emerald-500/25",
  },
]

const platforms = [
  {
    name: "Bit2Me",
    origin: "🇪🇸 España",
    license: "CNMV + MiCA",
    fee: "1.49%",
    ideal: "Principiantes — soporte en español 24/7",
    highlight: true,
  },
  {
    name: "Kraken",
    origin: "🇺🇸/🇪🇺 Europa",
    license: "MiCA",
    fee: "0.16–0.26%",
    ideal: "Usuarios intermedios — máxima seguridad",
    highlight: false,
  },
  {
    name: "Coinbase",
    origin: "🇺🇸/🇪🇺 Europa",
    license: "MiCA",
    fee: "0.5–1.5%",
    ideal: "Principiantes — interfaz muy sencilla",
    highlight: false,
  },
  {
    name: "Binance",
    origin: "🌍 Global",
    license: "MiCA (parcial)",
    fee: "0.10%",
    ideal: "Avanzados — mayor variedad de activos",
    highlight: false,
  },
]

const errors = [
  { n: 1, title: "Invertir más de lo que puedes perder", desc: "Si perder el 50% te quitaría el sueño, estás invirtiendo demasiado." },
  { n: 2, title: "Comprar por FOMO", desc: "Cuando todos hablan de cripto es cuando más peligroso es comprar. Los mejores momentos son cuando nadie habla de ello." },
  { n: 3, title: "No investigar antes de comprar", desc: "Nunca compres solo porque alguien la recomendó en redes. Entiende el proyecto, el equipo y el caso de uso." },
  { n: 4, title: "Hacer trading diario", desc: "El 95% de los traders pierden dinero. La estrategia HODL a largo plazo es mucho más efectiva." },
  { n: 5, title: "Guardar todo en un exchange", desc: "Si el exchange quiebra (FTX en 2022), pierdes todo. Diversifica y usa hardware wallet para cantidades grandes." },
  { n: 6, title: "Caer en estafas", desc: '"Garantizamos 10% diario" o "Envíame 1 BTC y te devuelvo 2" son siempre estafas. Sin excepción.' },
  { n: 7, title: "No declarar a Hacienda", desc: "Hacienda tiene acceso a datos de exchanges europeos. No declarar puede traerte inspecciones y sanciones." },
]

const taxBrackets = [
  { range: "Hasta 6.000 €", rate: "19%", example: "Vendes cripto con 3.000 € de ganancia" },
  { range: "6.001 € – 50.000 €", rate: "21%", example: "Ganancia de 20.000 €" },
  { range: "50.001 € – 200.000 €", rate: "23%", example: "Ganancia de 100.000 €" },
  { range: "Más de 200.000 €", rate: "27%", example: "Gran ganancia patrimonial" },
]

const steps = [
  { icon: "🔍", title: "Elige una plataforma registrada en la CNMV", desc: "Bit2Me, Kraken o Coinbase para empezar" },
  { icon: "🪪", title: "Verifica tu identidad (KYC)", desc: "DNI, selfie y comprobante de domicilio — es obligatorio por ley" },
  { icon: "💶", title: "Deposita dinero", desc: "Transferencia bancaria (más barato) o tarjeta (más rápido)" },
  { icon: "₿", title: "Haz tu primera compra", desc: "Con 20 € puedes comprar fracciones de Bitcoin. No necesitas una moneda entera." },
  { icon: "🔐", title: "Asegura tu inversión", desc: "Activa 2FA, usa contraseña única. Para importes altos: hardware wallet." },
]

export default function CriptomonedasPrincipiantes() {
  const post = getBlogPost("criptomonedas-para-principiantes-guia")
  const postAuthor = getAuthorByName("Alejandro Torres")
  const authorSlug = postAuthor?.slug ?? "equipo-finanzaspro"

  return (
    <>
      <ReadingProgressBar />
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
          { name: "Criptomonedas para principiantes 2026", url: "https://www.finanzasdigitales.es/blog/criptomonedas-para-principiantes-guia" },
        ]
      }} />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <div className="bg-gradient-to-b from-orange-600/12 via-amber-500/6 to-transparent border-b border-border/40">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 pt-10 pb-12">
          <Breadcrumbs customItems={[
            { label: "Inicio", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Criptomonedas para principiantes", href: "/blog/criptomonedas-para-principiantes-guia", isActive: true },
          ]} />

          <div className="mt-6">
            {/* Risk disclaimer badge */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-full border bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/25 mb-5">
              <AlertTriangle className="h-3.5 w-3.5" />
              Activo de alto riesgo — puede perder todo su valor
            </div>

            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/25 mb-5 ml-2">
              <TrendingUp className="h-3 w-3" /> Inversiones
            </span>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground leading-tight mb-5">
              Criptomonedas para<br className="hidden sm:block" />
              <span className="text-orange-500"> principiantes</span>: Guía completa 2026
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mb-8 leading-8">
              Todo lo que necesitas saber antes de invertir en Bitcoin, Ethereum y otras criptomonedas desde España. Sin tecnicismos, con ejemplos reales en euros y contexto legal actualizado.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {[
                { label: "Mínimo para empezar", value: "10 €", sub: "con fracciones" },
                { label: "Tributación mínima", value: "19%", sub: "base del ahorro IRPF" },
                { label: "Máximo recomendado", value: "20%", sub: "de tu cartera" },
                { label: "Regulación UE", value: "MiCA", sub: "en vigor desde 2024" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border border-border bg-card p-4 text-center">
                  <p className="text-2xl font-bold text-orange-500">{s.value}</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-tight">{s.label}</p>
                  <p className="text-xs text-muted-foreground/60">{s.sub}</p>
                </div>
              ))}
            </div>

            {/* Author meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <Link href={`/autores/${authorSlug}`} className="flex items-center gap-2.5 group" rel="author">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500/10 border-2 border-orange-500/20 text-sm font-bold text-orange-600 group-hover:bg-orange-500/20 transition-colors">A</span>
                <span className="flex flex-col leading-tight">
                  <span className="font-semibold text-foreground group-hover:text-orange-600 transition-colors text-sm">Alejandro Torres</span>
                  <span className="text-xs text-muted-foreground">Analista de mercados financieros</span>
                </span>
              </Link>
              <span className="hidden sm:block w-px h-8 bg-border" />
              <div className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /><span className="text-xs">Actualizado: 19 abril 2026</span></div>
              <div className="flex items-center gap-1.5"><BookOpen className="h-3.5 w-3.5" /><span className="text-xs font-medium text-foreground">22 min de lectura</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* ── FEATURED IMAGE ───────────────────────────────────── */}
      <div className="mx-auto max-w-4xl px-6 lg:px-8 mt-2 mb-12">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl border border-border/20 bg-muted">
          <Image src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=1200&h=630&fit=crop"
            alt="Criptomonedas para principiantes" fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 896px" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-white/90 text-sm font-medium drop-shadow">La normativa MiCA de la UE en vigor desde 2024 ofrece mayor protección al inversor europeo</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 lg:px-8 space-y-16 pb-16">

        {/* ── QUÉ SON ─────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">¿Qué son exactamente las criptomonedas?</h2>
          <p className="text-muted-foreground mb-7 leading-7">
            Una criptomoneda es dinero digital que funciona sin bancos ni gobiernos. Usa tecnología blockchain (cadena de bloques) donde miles de ordenadores verifican cada transacción, haciendo casi imposible falsificarla.
          </p>

          <div className="rounded-2xl border border-border overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-muted/60 border-b border-border">
                <tr>
                  <th className="px-5 py-3 text-left font-semibold text-xs uppercase tracking-wide text-foreground">Característica</th>
                  <th className="px-5 py-3 text-left font-semibold text-xs uppercase tracking-wide text-muted-foreground">Dinero tradicional</th>
                  <th className="px-5 py-3 text-left font-semibold text-xs uppercase tracking-wide text-orange-600">Criptomonedas</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {[
                  ["Control", "Bancos centrales / gobiernos", "Descentralizado (nadie)"],
                  ["Transparencia", "Opaco", "Público y verificable"],
                  ["Horario", "Lunes–viernes, horario bancario", "24/7, todo el año"],
                  ["Transferencias internacionales", "1–5 días, comisiones altas", "Minutos, comisiones bajas"],
                  ["Suministro", "Imprimible ilimitadamente", "Muchas tienen límite fijo"],
                ].map(([cat, trad, cripto]) => (
                  <tr key={cat} className="hover:bg-muted/30 transition-colors">
                    <td className="px-5 py-3 font-medium text-foreground">{cat}</td>
                    <td className="px-5 py-3 text-muted-foreground">{trad}</td>
                    <td className="px-5 py-3 text-orange-600 dark:text-orange-400 font-medium">{cripto}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── LAS PRINCIPALES CRIPTOS ─────────────────────────── */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Las criptomonedas que debes conocer</h2>
          <p className="text-muted-foreground mb-8">Existen más de 20.000 criptomonedas. El 99% no tiene valor real. Enfócate en estas.</p>

          <div className="grid sm:grid-cols-3 gap-5">
            {cryptos.map((c) => (
              <div key={c.symbol} className={`rounded-2xl border bg-gradient-to-br ${c.bg} ${c.border} p-5`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-background/80 border border-border/40 text-2xl font-bold text-foreground">
                    {c.emoji}
                  </div>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full bg-background/60 border border-border/40 ${c.riskColor}`}>
                    Riesgo {c.riskLabel}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground">{c.name}</h3>
                <p className="text-xs text-muted-foreground mb-3">Creado en {c.year}</p>
                <p className="text-sm text-foreground/80 leading-6 mb-4">{c.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {c.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-background/60 border border-border/40 text-muted-foreground">{t}</span>
                  ))}
                </div>
                {/* Risk bar */}
                <div className="mt-4">
                  <div className="flex justify-between text-xs text-muted-foreground mb-1">
                    <span>Nivel de riesgo</span>
                    <span>{c.risk}/5</span>
                  </div>
                  <div className="w-full bg-background/60 rounded-full h-1.5 overflow-hidden border border-border/30">
                    <div
                      className={`h-full rounded-full ${c.risk >= 4 ? "bg-red-500" : c.risk >= 3 ? "bg-orange-400" : "bg-emerald-400"}`}
                      style={{ width: `${(c.risk / 5) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CÓMO EMPEZAR ─────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Cómo empezar paso a paso</h2>
          <p className="text-muted-foreground mb-8">Desde cero hasta tu primera compra en menos de una semana.</p>

          <div className="space-y-3">
            {steps.map((s, i) => (
              <div key={s.title} className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:bg-muted/30 transition-colors">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-2xl shrink-0">{s.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-orange-500">Paso {i + 1}</span>
                  </div>
                  <h3 className="font-semibold text-foreground text-sm">{s.title}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── PLATAFORMAS ─────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Mejores plataformas para comprar desde España</h2>
          <p className="text-muted-foreground mb-8">Solo plataformas reguladas con licencia CNMV o MiCA. Evita cualquier exchange no registrado.</p>

          <div className="grid sm:grid-cols-2 gap-4">
            {platforms.map((p) => (
              <div key={p.name} className={`relative rounded-xl border p-5 transition-colors ${p.highlight ? "border-orange-500/40 bg-orange-500/5" : "border-border bg-card hover:bg-muted/30"}`}>
                {p.highlight && (
                  <span className="absolute -top-3 right-4 text-xs font-bold px-3 py-1 rounded-full bg-orange-500 text-white shadow">Recomendada para empezar</span>
                )}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-foreground">{p.name}</h3>
                  <span className="text-xs text-muted-foreground">{p.origin}</span>
                </div>
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Licencia</span>
                    <span className="font-medium text-foreground">{p.license}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Comisión</span>
                    <span className="font-medium text-foreground">{p.fee}</span>
                  </div>
                </div>
                <p className="mt-3 text-xs text-muted-foreground bg-muted/50 rounded-lg p-2 border border-border/40">{p.ideal}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CUÁNTO INVERTIR ─────────────────────────────────── */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">¿Cuánto invertir en criptomonedas?</h2>
          <p className="text-muted-foreground mb-7">La regla clave: las criptomonedas son el complemento, no la base de tu cartera.</p>

          <div className="space-y-3">
            {[
              { profile: "Principiante total", pct: "1–5%", amount: "100–500 €", desc: "Primero aprende el funcionamiento sin arriesgar capital significativo", bar: "w-[5%]" },
              { profile: "Conocimiento básico (>1 año)", pct: "5–10%", amount: "500–1.000 €", desc: "Ya entiendes los ciclos del mercado y usas DCA consistentemente", bar: "w-[10%]" },
              { profile: "Inversor experimentado", pct: "10–20%", amount: "1.000–2.000 €", desc: "Alta tolerancia al riesgo y horizonte de inversión >5 años", bar: "w-[20%]" },
            ].map((r) => (
              <div key={r.profile} className="p-5 rounded-xl border border-border bg-card">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <h3 className="font-semibold text-foreground">{r.profile}</h3>
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-bold text-orange-500">{r.pct}</span>
                    <span className="text-sm text-muted-foreground">de 10.000 € = <strong className="text-foreground">{r.amount}</strong></span>
                  </div>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden mb-3">
                  <div className={`h-full rounded-full bg-orange-500 ${r.bar}`} />
                </div>
                <p className="text-xs text-muted-foreground">{r.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 p-5 rounded-xl bg-blue-500/8 border border-blue-500/20">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-foreground text-sm mb-1">Cartera recomendada para un español de 30–40 años</h4>
                <p className="text-sm text-foreground/80">70% fondos indexados (Amundi MSCI World en MyInvestor) · 20% plan de pensiones · 10% criptomonedas</p>
              </div>
            </div>
          </div>
        </section>

        <AdSense slot="1562571362" format="horizontal" />

        {/* ── MiCA ─────────────────────────────────────────────── */}
        <section>
          <div className="rounded-2xl border-2 border-blue-500/30 bg-blue-500/5 p-7">
            <div className="flex items-start gap-4 mb-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 text-2xl shrink-0">🇪🇺</div>
              <div>
                <h2 className="text-xl font-bold text-foreground">Regulación MiCA: mayor protección desde 2024</h2>
                <p className="text-sm text-muted-foreground mt-1">Markets in Crypto-Assets Regulation — el marco legal más completo del mundo</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: "🔐", title: "Fondos protegidos", desc: "Obligación de separar fondos de clientes de los del exchange" },
                { icon: "📋", title: "Transparencia total", desc: "Whitepaper obligatorio para cualquier criptoactivo listado" },
                { icon: "💼", title: "Licencia CASP", desc: "Los exchanges deben obtener licencia y mantener capital de reserva" },
              ].map((b) => (
                <div key={b.title} className="bg-background/60 rounded-xl p-4 border border-border/40">
                  <span className="text-2xl mb-2 block">{b.icon}</span>
                  <h3 className="font-bold text-foreground text-sm mb-1">{b.title}</h3>
                  <p className="text-xs text-muted-foreground">{b.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-start gap-3 bg-background/60 rounded-xl p-4 border border-border/40">
              <ShieldCheck className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
              <p className="text-sm text-foreground/80">Antes de usar cualquier plataforma, verifica que aparezca en el <strong>registro oficial de la CNMV</strong> como Proveedor de Servicios de Criptomonedas.</p>
            </div>
          </div>
        </section>

        {/* ── 7 ERRORES ─────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Los 7 errores más costosos</h2>
          <p className="text-muted-foreground mb-8">La mayoría de principiantes comete al menos 3 de estos. Léelos antes de invertir.</p>

          <div className="grid sm:grid-cols-2 gap-3">
            {errors.map((e) => (
              <div key={e.n} className="flex gap-4 p-4 rounded-xl border border-red-500/15 bg-red-500/5 hover:bg-red-500/8 transition-colors">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/15 text-sm font-bold text-red-600 dark:text-red-400 shrink-0">{e.n}</span>
                <div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">{e.title}</h3>
                  <p className="text-xs text-muted-foreground leading-5">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FISCALIDAD ───────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Impuestos en España: lo que debes declarar</h2>
          <p className="text-muted-foreground mb-7">Las ganancias por venta de criptomonedas tributan en la base del ahorro del IRPF.</p>

          <div className="rounded-2xl border border-border overflow-hidden shadow-sm mb-5">
            <table className="w-full text-sm">
              <thead className="bg-muted/60 border-b border-border">
                <tr>
                  <th className="px-5 py-3 text-left font-semibold text-xs uppercase tracking-wide text-foreground">Ganancia patrimonial</th>
                  <th className="px-5 py-3 text-left font-semibold text-xs uppercase tracking-wide text-foreground">Tipo IRPF</th>
                  <th className="px-5 py-3 text-left font-semibold text-xs uppercase tracking-wide text-muted-foreground">Ejemplo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {taxBrackets.map((t, i) => (
                  <tr key={t.range} className={i === 0 ? "bg-emerald-500/5" : "hover:bg-muted/30 transition-colors"}>
                    <td className="px-5 py-3 font-medium text-foreground">{t.range}</td>
                    <td className="px-5 py-3 font-bold text-orange-500">{t.rate}</td>
                    <td className="px-5 py-3 text-muted-foreground text-xs">{t.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground text-sm mb-2">📋 Modelo 721</h4>
              <p className="text-xs text-muted-foreground leading-5">Obligatorio desde 2024 si tienes criptomonedas en exchanges extranjeros que superen 50.000 €. Equivalente al modelo 720 para moneda fiat.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground text-sm mb-2">🔧 Herramientas fiscales</h4>
              <p className="text-xs text-muted-foreground leading-5">Usa Koinly o CoinTracking para generar automáticamente el informe fiscal de todas tus operaciones cripto.</p>
            </div>
          </div>
        </section>

        {/* ── DCA SIMULACIÓN ───────────────────────────────────── */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Simulación real: 100 € al mes con DCA</h2>
          <p className="text-muted-foreground mb-7">La estrategia más recomendada para principiantes. Inviertes una cantidad fija mensual sin importar el precio.</p>

          <div className="rounded-2xl border border-border overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-muted/60 border-b border-border">
                <tr>
                  {["Mes", "Precio BTC aprox.", "Compras con 100 €", "BTC acumulado"].map((h) => (
                    <th key={h} className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wide text-foreground">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {[
                  ["Ene 2024", "38.000 €", "0.00263 BTC", "0.00263"],
                  ["Feb 2024", "42.000 €", "0.00238 BTC", "0.00501"],
                  ["Mar 2024", "60.000 €", "0.00167 BTC", "0.00668"],
                  ["Abr 2024", "55.000 €", "0.00182 BTC", "0.00850"],
                  ["May 2024", "58.000 €", "0.00172 BTC", "0.01022"],
                  ["Jun 2024", "52.000 €", "0.00192 BTC", "0.01214"],
                ].map(([mes, precio, compra, acum]) => (
                  <tr key={mes} className="hover:bg-muted/30 transition-colors">
                    <td className="px-4 py-3 font-medium text-foreground">{mes}</td>
                    <td className="px-4 py-3 text-muted-foreground">{precio}</td>
                    <td className="px-4 py-3 text-muted-foreground">{compra}</td>
                    <td className="px-4 py-3 font-semibold text-orange-500">{acum}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 grid sm:grid-cols-3 gap-3">
            {[
              { label: "Total invertido", value: "600 €" },
              { label: "BTC acumulado", value: "0.01214 BTC" },
              { label: "Precio promedio compra", value: "~49.400 €/BTC" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-border bg-card p-4 text-center">
                <p className="text-xs text-muted-foreground mb-1">{s.label}</p>
                <p className="font-bold text-foreground">{s.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────── */}
        <div className="rounded-2xl border border-border overflow-hidden shadow-sm bg-gradient-to-br from-orange-600/12 via-amber-500/6 to-transparent p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">¿Listo para invertir?</p>
          <h3 className="text-xl font-bold text-foreground mb-2">Construye una cartera diversificada</h3>
          <p className="text-muted-foreground text-sm mb-6">Las criptomonedas son el complemento. La base de tu cartera deberían ser los fondos indexados.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild size="sm">
              <Link href="/fondos-indexados">Guía de fondos indexados <ArrowRight className="ml-1.5 h-3.5 w-3.5" /></Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="/mejores-brokers-espana">Ver mejores brokers</Link>
            </Button>
          </div>
        </div>

        {/* ── FAQs ─────────────────────────────────────────────── */}
        {post?.faqs && post.faqs.length > 0 && (
          <FAQNative title="Preguntas frecuentes sobre criptomonedas" subtitle="Las dudas más habituales de los principiantes" faqs={post.faqs} />
        )}

        <AdSense slot="5745358955" format="horizontal" />

        {/* ── GUÍAS RELACIONADAS ────────────────────────────────── */}
        <div className="pt-4 border-t border-border">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">Guías relacionadas</p>
          <div className="grid sm:grid-cols-2 gap-2">
            {[
              { href: "/mejores-brokers-espana", label: "Mejores brokers España 2026" },
              { href: "/declaracion-renta-espana", label: "Cómo declarar criptos en la renta" },
              { href: "/fondos-indexados", label: "Fondos indexados: alternativa más segura" },
              { href: "/mejores-etf-espana", label: "Mejores ETF en España 2026" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="flex items-center justify-between p-3.5 rounded-xl border bg-muted/30 hover:bg-muted/60 transition-all text-sm font-medium group">
                {l.label}
                <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ))}
          </div>
        </div>

        <ArticleSources category="Inversiones" />
        <AuthorBox authorName="Alejandro Torres" />

        <div className="pt-8 border-t border-border">
          <Button variant="outline" asChild>
            <Link href="/blog">← Volver al Blog</Link>
          </Button>
        </div>
      </div>
    </>
  )
}
