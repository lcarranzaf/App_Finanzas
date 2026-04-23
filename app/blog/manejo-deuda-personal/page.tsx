import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, AlertTriangle, CheckCircle2, TrendingDown, Shield, ChevronRight, Calendar, BookOpen } from "lucide-react"
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
    title: "Cómo salir de deudas en España 2026: guía paso a paso",
    description: "Guía completa para salir de deudas en España. Método bola de nieve, avalancha, negociación con bancos españoles, ficheros de morosos (ASNEF/RAI) y Ley de Segunda Oportunidad. Ejemplos reales en euros.",
    keywords: "como salir de deudas en España, eliminar deuda personal, método bola de nieve, ASNEF España, ley de segunda oportunidad, consolidación de deudas, préstamo personal España",
    authors: [{ name: "María López", url: "https://www.finanzasdigitales.es" }],
    publisher: "Finanzas Digitales",
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1 } },
    openGraph: {
      title: "Cómo salir de deudas en España 2026: guía paso a paso",
      description: "Guía completa para salir de deudas en España con ejemplos reales en euros.",
      url: "https://www.finanzasdigitales.es/blog/manejo-deuda-personal",
      siteName: "Finanzas Digitales",
      type: "article",
      publishedTime: "2026-01-20T00:00:00+00:00",
      modifiedTime: "2026-04-19T00:00:00+00:00",
      locale: "es_ES",
    },
    alternates: {
      canonical: "https://www.finanzasdigitales.es/blog/manejo-deuda-personal",
    },
  }
}

const debtTypes = [
  { label: "Descubierto en cuenta", tae: "24–29%", urgency: "crítica", color: "bg-red-500", width: "w-[96%]" },
  { label: "Tarjeta de crédito (aplazado)", tae: "18–26%", urgency: "máxima", color: "bg-red-400", width: "w-[84%]" },
  { label: "Préstamo rápido (Vivus, Creditea)", tae: "50–200%", urgency: "máxima", color: "bg-red-600", width: "w-full" },
  { label: "Préstamo personal fintech", tae: "12–20%", urgency: "alta", color: "bg-orange-400", width: "w-[68%]" },
  { label: "Préstamo personal banco", tae: "7–12%", urgency: "media", color: "bg-amber-400", width: "w-[44%]" },
  { label: "Hipoteca fija", tae: "3.2–4.5%", urgency: "baja", color: "bg-emerald-400", width: "w-[16%]" },
]

const strategies = [
  {
    name: "Bola de Nieve",
    icon: "❄️",
    subtitle: "Paga la deuda más pequeña primero",
    pros: ["Victorias rápidas y motivación", "Reduces número de acreedores pronto", "Psicológicamente probado"],
    cons: ["Pagas más intereses en total", "No es óptimo matemáticamente"],
    time: "~3.5 años",
    interest: "~5.200 €",
    color: "border-blue-500/40 bg-blue-500/5",
    badge: "bg-blue-500/10 text-blue-700 dark:text-blue-400",
    ideal: "Si necesitas motivación constante",
  },
  {
    name: "Avalancha",
    icon: "⚡",
    subtitle: "Paga la deuda con mayor TAE primero",
    pros: ["Ahorras más dinero en intereses", "Matemáticamente superior", "Tiempo de pago menor"],
    cons: ["Requiere más disciplina mental", "Las deudas grandes tardan más en cerrarse"],
    time: "~3.2 años",
    interest: "~3.900 €",
    color: "border-emerald-500/40 bg-emerald-500/5",
    badge: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
    ideal: "Si tienes autodisciplina y priorizas el ahorro",
    recommended: true,
  },
]

const impactRows = [
  { payment: "160 € (mínimo)", time: "7 años 2 meses", interest: "5.780 €", highlight: false },
  { payment: "260 € (+100 €)", time: "3 años 8 meses", interest: "2.640 €", highlight: false },
  { payment: "360 € (+200 €)", time: "2 años 6 meses", interest: "1.720 €", highlight: true },
]

const negotiationSteps = [
  {
    title: "Reducción de tipo",
    desc: "Llama y menciona que tienes otra oferta más baja. Probabilidad de éxito: 30-50% si eres buen pagador.",
    icon: "📞",
  },
  {
    title: "Carencia temporal",
    desc: "Solicita pagar solo intereses 3-6 meses. Muchos bancos tienen programas que no publicitan.",
    icon: "⏸️",
  },
  {
    title: "Quita parcial",
    desc: "Para deudas en mora con gestoras: ofrece el 60% del total en un pago. Ellas compraron la deuda al 10-20%.",
    icon: "🤝",
  },
]

const plan30Days = [
  { days: "Días 1–5", title: "Diagnóstico", steps: ["Lista todas tus deudas con TAE exacta", "Consulta si estás en ASNEF (gratis una vez/año)", "Calcula tu ingreso neto mensual real"] },
  { days: "Días 6–10", title: "Estrategia", steps: ["Elige bola de nieve o avalancha", "Identifica 2–3 gastos eliminables esta semana", "Calcula cuánto puedes pagar de más"] },
  { days: "Días 11–20", title: "Negocia", steps: ["Llama a 2–3 entidades", "Solicita reducción de tipo o carencia", "Documenta todas las conversaciones"] },
  { days: "Días 21–30", title: "Automatiza", steps: ["Configura pago automático superior al mínimo", "Transfiere el ahorro el día de cobro", "Bloquea las tarjetas de crédito en la app"] },
]

export default function ManeoDeudaPersonalPage() {
  const post = getBlogPost("manejo-deuda-personal")
  const postAuthor = getAuthorByName("María López")
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
          { name: "Cómo eliminar deuda personal en España 2026", url: "https://www.finanzasdigitales.es/blog/manejo-deuda-personal" },
        ]
      }} />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <div className="bg-gradient-to-b from-red-600/12 via-rose-500/6 to-transparent border-b border-border/40">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 pt-10 pb-12">
          <Breadcrumbs customItems={[
            { label: "Inicio", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Cómo eliminar deuda personal", href: "/blog/manejo-deuda-personal", isActive: true },
          ]} />

          <div className="mt-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/25 mb-5">
              <TrendingDown className="h-3 w-3" /> Deudas
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground leading-tight mb-5">
              Cómo eliminar deuda personal<br className="hidden sm:block" />
              <span className="text-red-600 dark:text-red-400"> en España</span>: Estrategias probadas 2026
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mb-8 leading-8">
              Guía completa con métodos reales — bola de nieve, avalancha, negociación con bancos, ficheros de morosos y Ley de Segunda Oportunidad. Ejemplos en euros y contexto 100% español.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {[
                { label: "Hogares españoles con deuda", value: "60%", sub: "del ingreso disponible" },
                { label: "TAE máxima tarjeta", value: "29%", sub: "Banco de España" },
                { label: "Ahorro con avalancha", value: "1.300€", sub: "vs bola de nieve" },
                { label: "Tiempo medio", value: "3–4 años", sub: "con plan real" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border border-border bg-card p-4 text-center">
                  <p className="text-2xl font-bold text-red-600 dark:text-red-400">{s.value}</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-tight">{s.label}</p>
                  <p className="text-xs text-muted-foreground/60">{s.sub}</p>
                </div>
              ))}
            </div>

            {/* Author meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <Link href={`/autores/${authorSlug}`} className="flex items-center gap-2.5 group" rel="author">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500/10 border-2 border-red-500/20 text-sm font-bold text-red-600 group-hover:bg-red-500/20 transition-colors">M</span>
                <span className="flex flex-col leading-tight">
                  <span className="font-semibold text-foreground group-hover:text-red-600 transition-colors text-sm">María López</span>
                  <span className="text-xs text-muted-foreground">Especialista en finanzas personales</span>
                </span>
              </Link>
              <span className="hidden sm:block w-px h-8 bg-border" />
              <div className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /><span className="text-xs">Actualizado: 19 abril 2026</span></div>
              <div className="flex items-center gap-1.5"><BookOpen className="h-3.5 w-3.5" /><span className="text-xs font-medium text-foreground">18 min de lectura</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* ── FEATURED IMAGE ───────────────────────────────────── */}
      <div className="mx-auto max-w-4xl px-6 lg:px-8 mt-2 mb-12">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl border border-border/20 bg-muted">
          <Image src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&h=630&fit=crop"
            alt="Cómo eliminar deuda personal en España" fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 896px" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-white/90 text-sm font-medium drop-shadow">Según el Banco de España, el endeudamiento de los hogares supera el 60% de la renta disponible</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 lg:px-8 space-y-16 pb-16">

        {/* ── TIPOS DE DEUDA ───────────────────────────────────── */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">¿Qué deuda tienes? Clasifícala antes de actuar</h2>
          <p className="text-muted-foreground mb-8">No todas las deudas son igual de urgentes. La TAE (Tasa Anual Equivalente) determina el coste real de cada deuda y el orden en que debes atacarlas.</p>

          <div className="space-y-3">
            {debtTypes.map((d) => (
              <div key={d.label} className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:bg-muted/30 transition-colors">
                <div className="w-36 shrink-0">
                  <p className="text-sm font-semibold text-foreground leading-tight">{d.label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">TAE: {d.tae}</p>
                </div>
                <div className="flex-1 flex items-center gap-3">
                  <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden">
                    <div className={`h-full rounded-full ${d.color} ${d.width} transition-all`} />
                  </div>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full shrink-0 ${
                    d.urgency === "crítica" || d.urgency === "máxima"
                      ? "bg-red-500/10 text-red-600 dark:text-red-400"
                      : d.urgency === "alta"
                      ? "bg-orange-500/10 text-orange-600 dark:text-orange-400"
                      : d.urgency === "media"
                      ? "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                      : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                  }`}>
                    Urgencia {d.urgency}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 flex gap-3 p-4 rounded-xl bg-amber-500/8 border border-amber-500/20">
            <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
            <p className="text-sm text-foreground/80">
              <strong>Dato clave:</strong> Si tienes un descubierto de 500 € al 28% y una hipoteca al 3.5%, el descubierto te cuesta 8 veces más. Ataca siempre por orden de coste real.
            </p>
          </div>
        </section>

        {/* ── ESTRATEGIAS ─────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Elige tu estrategia de ataque</h2>
          <p className="text-muted-foreground mb-8">Dos métodos probados. Cada uno con un enfoque diferente. El mejor es el que realmente vas a seguir.</p>

          <div className="grid sm:grid-cols-2 gap-5">
            {strategies.map((s) => (
              <div key={s.name} className={`relative rounded-2xl border-2 p-6 ${s.color}`}>
                {s.recommended && (
                  <span className="absolute -top-3 right-4 text-xs font-bold px-3 py-1 rounded-full bg-emerald-500 text-white shadow">Recomendado</span>
                )}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{s.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Método {s.name}</h3>
                    <p className="text-sm text-muted-foreground">{s.subtitle}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="rounded-lg bg-background/60 p-3 text-center">
                    <p className="text-xs text-muted-foreground mb-1">Tiempo estimado</p>
                    <p className="font-bold text-foreground">{s.time}</p>
                  </div>
                  <div className="rounded-lg bg-background/60 p-3 text-center">
                    <p className="text-xs text-muted-foreground mb-1">Interés total extra</p>
                    <p className="font-bold text-foreground">{s.interest}</p>
                  </div>
                </div>

                <div className="space-y-1.5 mb-4">
                  {s.pros.map((p) => (
                    <div key={p} className="flex items-start gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </div>
                  ))}
                  {s.cons.map((c) => (
                    <div key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-red-400 mt-0.5 shrink-0">✗</span>
                      <span>{c}</span>
                    </div>
                  ))}
                </div>

                <span className={`inline-block text-xs font-medium px-3 py-1.5 rounded-full ${s.badge}`}>
                  Ideal para: {s.ideal}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── IMPACTO DE PAGAR MÁS ─────────────────────────────── */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">El poder de pagar 100 € más al mes</h2>
          <p className="text-muted-foreground mb-6">Ejemplo real: deuda de <strong className="text-foreground">8.000 € a 22% TAE</strong>.</p>

          <div className="rounded-2xl border border-border overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-muted/60 border-b border-border">
                <tr>
                  <th className="px-5 py-3 text-left font-semibold text-xs uppercase tracking-wide text-foreground">Pago mensual</th>
                  <th className="px-5 py-3 text-left font-semibold text-xs uppercase tracking-wide text-foreground">Tiempo</th>
                  <th className="px-5 py-3 text-left font-semibold text-xs uppercase tracking-wide text-foreground">Interés pagado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {impactRows.map((r) => (
                  <tr key={r.payment} className={r.highlight ? "bg-emerald-500/8" : "hover:bg-muted/30 transition-colors"}>
                    <td className="px-5 py-4 font-medium text-foreground">{r.payment}</td>
                    <td className="px-5 py-4 text-foreground/80">{r.time}</td>
                    <td className={`px-5 py-4 font-bold ${r.highlight ? "text-emerald-600 dark:text-emerald-400" : "text-foreground/80"}`}>
                      {r.interest} {r.highlight && <span className="ml-2 text-xs font-normal text-emerald-600">← mejor opción</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Pagar 200 € extra al mes ahorra <strong className="text-foreground">4.060 € en intereses</strong> y acorta el tiempo 4 años y 8 meses.
          </p>
        </section>

        {/* ── NEGOCIACIÓN ─────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Negocia con tu banco español</h2>
          <p className="text-muted-foreground mb-7">Los bancos prefieren cobrar algo a no cobrar nada. Estas tres tácticas funcionan.</p>

          <div className="grid sm:grid-cols-3 gap-4">
            {negotiationSteps.map((n, i) => (
              <div key={n.title} className="rounded-xl border border-border bg-card p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary shrink-0">{i + 1}</span>
                  <span className="text-2xl">{n.icon}</span>
                </div>
                <h3 className="font-bold text-foreground mb-2">{n.title}</h3>
                <p className="text-sm text-muted-foreground leading-6">{n.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <AdSense slot="1562571362" format="horizontal" />

        {/* ── ASNEF / RAI ─────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">ASNEF y RAI: los ficheros de morosos en España</h2>

          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            {[
              { name: "ASNEF", desc: "Gestionado por Equifax. Incluye deudas con bancos, telecos y utilities. El más común para particulares.", icon: "🏦" },
              { name: "RAI", desc: "Registro de Aceptaciones Impagadas. Afecta principalmente a empresas y autónomos con efectos impagados.", icon: "🏢" },
            ].map((f) => (
              <div key={f.name} className="rounded-xl border border-border bg-card p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{f.icon}</span>
                  <h3 className="font-bold text-lg text-foreground">{f.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-6">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-border bg-muted/30 p-5">
            <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-500" /> Cómo salir del ASNEF
            </h3>
            <div className="space-y-3">
              {[
                { n: 1, text: "Paga la deuda — el acreedor tiene 10 días hábiles para comunicar la cancelación a Equifax" },
                { n: 2, text: "Si la deuda ya prescribió (4 años para créditos al consumo) — solicita cancelación directamente a Equifax" },
                { n: 3, text: "Si los datos son incorrectos — presenta reclamación a la AEPD (Agencia Española de Protección de Datos)" },
              ].map((s) => (
                <div key={s.n} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/10 text-xs font-bold text-blue-600 shrink-0">{s.n}</span>
                  <p className="text-sm text-foreground/80 leading-6">{s.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground bg-background rounded-lg p-3 border border-border">
              💡 Puedes consultar si estás en ASNEF de forma gratuita una vez al año solicitándolo directamente a Equifax España.
            </p>
          </div>
        </section>

        {/* ── LEY SEGUNDA OPORTUNIDAD ──────────────────────────── */}
        <section>
          <div className="rounded-2xl border-2 border-amber-500/30 bg-amber-500/5 p-7">
            <div className="flex items-start gap-4 mb-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/15 text-2xl shrink-0">⚖️</div>
              <div>
                <h2 className="text-xl font-bold text-foreground">Ley de Segunda Oportunidad</h2>
                <p className="text-sm text-muted-foreground mt-1">Para situaciones extremas — Ley 25/2015, reformada en 2022</p>
              </div>
            </div>
            <p className="text-sm text-foreground/80 mb-5 leading-7">
              Permite a personas físicas cancelar deudas no garantizadas (tarjetas, préstamos personales) tras un proceso judicial. Protege la vivienda habitual en muchos casos.
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              {["Mediación extrajudicial (2–3 meses)", "Concurso de acreedores simplificado", "Exoneración del pasivo (BEPI)"].map((step, i) => (
                <div key={step} className="flex items-center gap-3 bg-background/60 rounded-lg p-3 border border-border/60">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-500/15 text-sm font-bold text-amber-600 shrink-0">{i + 1}</span>
                  <p className="text-xs text-foreground/80 leading-5">{step}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">Requiere asesoramiento jurídico. Muchos abogados especializados ofrecen consulta gratuita inicial. Coste del proceso: 1.500–4.000 €.</p>
          </div>
        </section>

        {/* ── PLAN 30 DÍAS ─────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Tu plan de acción de 30 días</h2>
          <p className="text-muted-foreground mb-8">Sin excusas. Con este plan sabrás exactamente qué hacer cada semana.</p>

          <div className="grid sm:grid-cols-2 gap-4">
            {plan30Days.map((p, i) => (
              <div key={p.title} className="rounded-xl border border-border bg-card p-5">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white text-sm font-bold shrink-0">{i + 1}</span>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">{p.days}</p>
                    <h3 className="font-bold text-foreground">{p.title}</h3>
                  </div>
                </div>
                <ul className="space-y-2">
                  {p.steps.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm text-foreground/80">
                      <ChevronRight className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────── */}
        <div className="rounded-2xl border border-border overflow-hidden shadow-sm bg-gradient-to-br from-red-600/12 via-rose-500/6 to-transparent p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">Siguiente paso</p>
          <h3 className="text-xl font-bold text-foreground mb-2">Una vez libre de deudas: empieza a invertir</h3>
          <p className="text-muted-foreground text-sm mb-6">Con las deudas de alto interés canceladas, cada euro que antes pagabas en intereses puede crecer para ti.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild size="sm">
              <Link href="/fondos-indexados">Guía de fondos indexados <ArrowRight className="ml-1.5 h-3.5 w-3.5" /></Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="/calculadoras/interes-compuesto">Calculadora de inversión</Link>
            </Button>
          </div>
        </div>

        {/* ── FAQs ─────────────────────────────────────────────── */}
        {post?.faqs && post.faqs.length > 0 && (
          <FAQNative title="Preguntas frecuentes sobre deudas en España" subtitle="Las dudas más habituales resueltas" faqs={post.faqs} />
        )}

        <AdSense slot="5745358955" format="horizontal" />

        {/* ── ARTÍCULOS RELACIONADOS ────────────────────────────── */}
        <div className="pt-4 border-t border-border">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">Guías relacionadas</p>
          <div className="grid sm:grid-cols-2 gap-2">
            {[
              { href: "/calculadoras/interes-compuesto", label: "Calculadora de interés compuesto" },
              { href: "/cuentas-remuneradas-espana", label: "Mejores cuentas remuneradas 2026" },
              { href: "/fondos-indexados", label: "Fondos indexados: guía completa" },
              { href: "/declaracion-renta-espana", label: "Declaración de la renta 2026" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="flex items-center justify-between p-3.5 rounded-xl border bg-muted/30 hover:bg-muted/60 transition-all text-sm font-medium group">
                {l.label}
                <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ))}
          </div>
        </div>

        <ArticleSources category="Deudas" />
        <AuthorBox authorName="María López" />

        <div className="pt-8 border-t border-border">
          <Button variant="outline" asChild>
            <Link href="/blog">← Volver al Blog</Link>
          </Button>
        </div>
      </div>
    </>
  )
}
