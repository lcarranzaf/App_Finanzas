import type { Metadata } from "next"
import Link from "next/link"
import { AlertTriangle, ChevronRight, Calendar, Clock, FileText, DollarSign, Phone, CheckCircle2, XCircle, ArrowRight } from "lucide-react"
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
    title: "Embargo salarios préstamos estudiantiles EEUU 2026 — qué pasa y cómo evitarlo",
    description:
      "Desde enero de 2026, el Departamento de Educación de EEUU retiene hasta el 15% del salario de deudores en mora. Quiénes están en riesgo, cómo funciona el proceso y qué hacer si estás en default.",
    keywords:
      "embargo salario préstamos estudiantiles 2026, default student loans wage garnishment, rehabilitación préstamo estudiantil, IDR plan EEUU, deuda estudiantil default",
    authors: [{ name: "Alejandro Torres", url: "https://www.finanzasdigitales.es" }],
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1 } },
    openGraph: {
      title: "Embargo de salarios por deudas estudiantiles en EEUU 2026",
      description: "El gobierno americano retiene hasta el 15% de tu nómina si estás en default. Así funciona y qué hacer.",
      url: "https://www.finanzasdigitales.es/blog/embargo-salarios-estudiantiles-2026",
      siteName: "Finanzas Digitales",
      type: "article",
      publishedTime: "2026-04-20T00:00:00+00:00",
      locale: "es_ES",
    },
    alternates: { canonical: "https://www.finanzasdigitales.es/blog/embargo-salarios-estudiantiles-2026" },
  }
}

const faqItems = [
  {
    question: "¿Cuánto pueden embargar de mi salario?",
    answer:
      "El gobierno puede retener hasta el 15% de tu ingreso disponible (el que queda después de deducciones obligatorias como impuestos y seguridad social). Sin embargo, siempre se garantiza que te quede al menos 30 veces el salario mínimo federal por semana ($217.50/semana en 2026). En salarios bajos, esto limita mucho lo que pueden retener.",
  },
  {
    question: "¿Cuándo estoy en 'default' en mis préstamos estudiantiles?",
    answer:
      "Para préstamos federales, entras en default cuando llevas 270 días (aproximadamente 9 meses) sin hacer un pago. En ese momento el préstamo se transfiere a una agencia de cobros y el gobierno tiene poderes mucho más amplios: puede embargar salarios, retener devoluciones de impuestos y retener prestaciones de la Seguridad Social, todo sin necesitar una orden judicial.",
  },
  {
    question: "¿Qué opciones tengo si estoy en default?",
    answer:
      "Las principales opciones son: (1) Rehabilitación del préstamo — haces 9 pagos consecutivos acordados, el préstamo sale del default y la marca negativa se elimina de tu historial crediticio. (2) Consolidación del préstamo — unifica el préstamo en uno nuevo Direct Consolidation y sale del default inmediatamente, aunque la marca permanece en el historial. (3) Pago completo — liquida el préstamo en su totalidad, incluyendo intereses y comisiones acumuladas.",
  },
  {
    question: "¿Qué es un plan IDR y puede ayudarme?",
    answer:
      "Los planes IDR (Income-Driven Repayment) calculan tu pago mensual en función de tus ingresos y tamaño familiar. Si ganas poco, el pago puede ser $0/mes. Hay cuatro planes: SAVE, PAYE, IBR y ICR. Después de 20–25 años de pagos, el saldo restante se condona (con implicaciones fiscales). Para acceder a un IDR debes estar fuera de default — por eso salir del default es el primer paso.",
  },
  {
    question: "¿Puede el gobierno embargar mi cuenta bancaria o devolución de impuestos?",
    answer:
      "Sí. El gobierno federal tiene poderes más amplios que un acreedor privado. Puede: (1) Retener el 100% de tu devolución de impuestos federales, (2) Retener hasta el 15% de prestaciones de la Seguridad Social (por encima de $750/mes), y (3) Embargar salarios sin orden judicial previo. Los préstamos privados (no federales) requieren una demanda judicial y una sentencia para embargar, con protecciones similares a cualquier deuda privada.",
  },
]

const timeline = [
  {
    day: "Día 1",
    title: "Pierdes tu primer pago",
    desc: "El serviciador del préstamo te envía un aviso. Tu crédito empieza a verse afectado a los 30 días de morosidad.",
    status: "warning",
  },
  {
    day: "Día 90",
    title: "Servicer reporta a las agencias",
    desc: "El préstamo se reporta como 'delincuente' a las tres agencias de crédito. Tu FICO puede caer 100+ puntos.",
    status: "warning",
  },
  {
    day: "Día 270",
    title: "Entras oficialmente en DEFAULT",
    desc: "El préstamo se transfiere a la Default Resolution Group del Departamento de Educación. El saldo completo se vence inmediatamente.",
    status: "danger",
  },
  {
    day: "Aviso previo",
    title: "El gobierno te notifica antes del embargo",
    desc: "Recibes una carta certificada con 30 días de aviso. Puedes solicitar una audiencia o tomar acción para evitarlo.",
    status: "action",
  },
  {
    day: "Ejecución",
    title: "El empleador recibe la orden",
    desc: "Tu empresa recibe instrucciones de retener hasta el 15% de tu pago disponible y enviarlo directamente al gobierno.",
    status: "danger",
  },
]

const options = [
  {
    title: "Rehabilitación del préstamo",
    time: "~9 meses",
    pros: ["Elimina la marca de default del historial", "Para el embargo durante el proceso", "Acceso a IDR y otros beneficios después"],
    cons: ["Tarda más en resolverse", "Solo disponible una vez por préstamo"],
    recommended: true,
  },
  {
    title: "Consolidación Direct Loan",
    time: "~1–3 semanas",
    pros: ["Sale del default inmediatamente", "Rápido y sencillo"],
    cons: ["La marca de default permanece en el historial", "Intereses capitalizados aumentan el saldo"],
    recommended: false,
  },
]

export default function EmbargoSalariosPage() {
  const post = getBlogPost("embargo-salarios-estudiantiles-2026")
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
          { name: "Embargo salarios préstamos estudiantiles EEUU 2026", url: "https://www.finanzasdigitales.es/blog/embargo-salarios-estudiantiles-2026" },
        ]
      }} />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-stone-950 min-h-[88vh] flex flex-col justify-center">
        {/* Document lines texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 23px, rgba(255,255,255,0.5) 23px, rgba(255,255,255,0.5) 24px)",
          }}
        />
        {/* Red alert glow */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-60" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-red-950/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-5xl px-6 lg:px-8 py-20 sm:py-28">
          <Breadcrumbs
            customItems={[
              { label: "Inicio", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Embargo salarios estudiantiles", href: "/blog/embargo-salarios-estudiantiles-2026", isActive: true },
            ]}
          />

          {/* Warning stamp */}
          <div className="mt-10 mb-8">
            <div className="inline-flex items-center gap-2 rounded-lg border border-red-500/50 bg-red-500/10 px-4 py-2">
              <AlertTriangle className="h-4 w-4 text-red-400 shrink-0" />
              <span className="text-sm font-bold text-red-300 uppercase tracking-wider">Alerta — vigente desde enero 2026</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="inline-flex items-center gap-1.5 text-xs text-stone-500">
              <Calendar className="h-3 w-3" /> 20 abril 2026
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-stone-500">
              <Clock className="h-3 w-3" /> 8 min lectura
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-stone-700 bg-stone-900/60 px-2.5 py-1 text-xs text-stone-400">
              <FileText className="h-3 w-3" /> Dept. of Education EEUU
            </span>
          </div>

          {/* Main stat */}
          <div className="mb-8">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-stone-600 mb-2">Lo que el gobierno puede retener de tu nómina</p>
            <div className="flex items-baseline gap-3 flex-wrap">
              <span
                className="font-black leading-none text-red-500"
                style={{ fontSize: "clamp(4rem, 14vw, 9rem)" }}
              >
                15%
              </span>
              <div className="text-stone-400">
                <p className="text-xl font-bold">de tu salario</p>
                <p className="text-sm">sin orden judicial · préstamos federales</p>
              </div>
            </div>
          </div>

          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl max-w-3xl text-balance">
            El gobierno americano{" "}
            <span className="text-red-400">embarga salarios</span>{" "}
            por deudas estudiantiles — lo que nadie te dijo antes de pedir el préstamo
          </h1>

          <p className="mt-6 text-lg text-stone-400 leading-relaxed max-w-2xl">
            Desde enero de 2026, el Departamento de Educación reinició el embargo de salarios de deudores en mora
            — suspendido desde COVID. Más de <strong className="text-white">7 millones de prestatarios</strong> están en default.
            Muchos recibirán una carta que cambiará su próximo cheque.
          </p>
        </div>
      </section>

      {/* ── CONTEXTO EDITORIAL ─────────────────────────────────────────── */}
      <section className="bg-stone-950 py-20 border-t border-stone-900">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl mb-6">La deuda estudiantil que nadie quiso mencionar en los folletos universitarios</h2>
          <p className="text-stone-300 leading-8 mb-5">
            En 1972, el Congreso americano creó el programa de préstamos federales estudiantiles con una premisa noble: que ningún joven americano se quedara sin acceder a la universidad por falta de dinero. Medio siglo después, ese sistema financia deudas de más de <strong className="text-white">$1.77 billones</strong>, repartidos entre 45 millones de prestatarios. Es la segunda mayor categoría de deuda del consumidor americano, solo por detrás de las hipotecas.
          </p>
          <p className="text-stone-300 leading-8 mb-5">
            El problema es que el coste de la educación universitaria en EEUU creció un 169% entre 1980 y 2022, según el Departamento de Educación —tres veces más rápido que la inflación general. Los salarios de los nuevos graduados no crecieron en la misma proporción. El resultado: generaciones de jóvenes que pidieron préstamos asumiendo que su título los rentabilizaría, y que descubrieron que la ecuación no siempre cierra.
          </p>
          <p className="text-stone-300 leading-8 mb-5">
            La pandemia de COVID trajo un paréntesis: el gobierno suspendió los pagos y los intereses en marzo de 2020. Ese paréntesis se extendió durante más de tres años. Cuando se levantó en octubre de 2023, millones de prestatarios que habían dejado de pensar en su deuda tuvieron que reengancharse a pagos que en muchos casos habían aumentado por la capitalización de intereses. Muchos no lo consiguieron. El número de prestatarios en default creció hasta los <strong className="text-white">7 millones</strong>.
          </p>
          <p className="text-stone-300 leading-8 mb-5">
            En enero de 2026, la administración reinstauró las herramientas de cobro coercitivo que habían estado suspendidas desde el COVID. La primera fase afecta a miles de deudores, pero el gobierno ha señalado que el proceso se ampliará progresivamente a lo largo del año. Si estás en default o cerca de él, el reloj está corriendo.
          </p>
        </div>
      </section>

      {/* ── QUIÉNES ESTÁN EN RIESGO ────────────────────────────────────── */}
      <section className="bg-stone-900 py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl mb-10 text-center">¿Estás en riesgo?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
              <div className="flex items-center gap-2 mb-4">
                <XCircle className="h-5 w-5 text-red-400 shrink-0" />
                <h3 className="font-bold text-white">Sí te afecta si...</h3>
              </div>
              <ul className="space-y-2.5 text-sm text-stone-300">
                {[
                  "No has pagado tu préstamo federal en más de 270 días",
                  "Recibiste una carta del Default Resolution Group",
                  "Tu devolución de impuestos fue retenida en años anteriores",
                  "Tu préstamo fue transferido a una agencia de cobros",
                  "Tienes un FFEL Loan (Federal Family Education Loan) en default",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-red-400 shrink-0 relative top-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-stone-700 bg-stone-900/60 p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                <h3 className="font-bold text-white">No te afecta si...</h3>
              </div>
              <ul className="space-y-2.5 text-sm text-stone-300">
                {[
                  "Tienes un plan de pago activo (cualquier plan IDR, estándar o graduado)",
                  "Estás en un programa de rehabilitación de préstamo",
                  "Tu préstamo está en deferimiento o tolerancia aprobada",
                  "Tus préstamos son privados (no federales) — requieren orden judicial",
                  "Ya te acogiste a la condonación PSLF u otro programa",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0 relative top-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { value: "7M+", label: "Prestatarios en default", color: "text-red-400" },
              { value: "$124B", label: "Deuda total en default", color: "text-red-400" },
              { value: "270", label: "Días para entrar en default", color: "text-amber-400" },
              { value: "$0", label: "Costo para salir del default", color: "text-emerald-400" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-stone-800 bg-stone-900/60 p-4 text-center">
                <p className={`text-2xl font-black font-mono ${s.color}`}>{s.value}</p>
                <p className="mt-1 text-xs text-stone-500 leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ──────────────────────────────────────────────────── */}
      <section className="bg-stone-950 py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl mb-3 text-center">Cómo llega el embargo paso a paso</h2>
          <p className="text-stone-400 text-center mb-12">Desde el primer pago perdido hasta el primer descuento en tu nómina</p>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-stone-800" />
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <div key={item.day} className="relative pl-16">
                  <div className={`absolute left-0 flex h-12 w-12 items-center justify-center rounded-full border-2 text-xs font-black font-mono ${
                    item.status === "danger"
                      ? "border-red-500 bg-red-500/15 text-red-400"
                      : item.status === "action"
                      ? "border-amber-500 bg-amber-500/15 text-amber-400"
                      : "border-stone-600 bg-stone-800 text-stone-400"
                  }`}>
                    {i + 1}
                  </div>
                  <div className={`rounded-xl border p-4 ${
                    item.status === "danger"
                      ? "border-red-500/20 bg-red-500/5"
                      : item.status === "action"
                      ? "border-amber-500/20 bg-amber-500/5"
                      : "border-stone-800 bg-stone-900/60"
                  }`}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs font-mono font-bold ${
                        item.status === "danger" ? "text-red-400" : item.status === "action" ? "text-amber-400" : "text-stone-500"
                      }`}>{item.day}</span>
                      <h3 className="font-semibold text-white text-sm">{item.title}</h3>
                    </div>
                    <p className="text-sm text-stone-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── AD MID ─────────────────────────────────────────────────────── */}
      <div className="bg-stone-950 py-4">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <AdSense slot="1562571362" format="horizontal" />
        </div>
      </div>

      {/* ── POR QUÉ TANTO PODER ────────────────────────────────────────── */}
      <section className="bg-stone-950 py-20 border-t border-stone-900">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl mb-6">Por qué el gobierno puede hacer esto sin ir a juicio</h2>
          <p className="text-stone-300 leading-8 mb-5">
            Si debes dinero a una tarjeta de crédito o a un banco privado y dejas de pagar, el acreedor tiene que <em className="text-stone-400">demandarte</em>, conseguir una sentencia judicial y luego ejecutarla. Es un proceso que puede tomar meses o años. El gobierno federal no necesita nada de esto para los préstamos estudiantiles federales.
          </p>
          <p className="text-stone-300 leading-8 mb-5">
            La ley federal otorga al Departamento de Educación poderes administrativos que van mucho más allá de cualquier acreedor privado. Puede retener devoluciones de impuestos, embargar salarios, retener prestaciones de la Seguridad Social (por encima de $750/mes) y bloquear el acceso a futuros préstamos o ayudas federales —todo sin necesidad de una orden judicial. Es, en la práctica, una categoría de deuda diferente a cualquier otra.
          </p>
          <p className="text-stone-300 leading-8 mb-5">
            Esta asimetría de poder tiene una justificación en política pública: los préstamos estudiantiles federales no tienen colateral (no puedes embargar un título universitario), así que el gobierno se protege con poderes de cobro extraordinarios. Pero para el deudor que no lo sabía cuando firmó los documentos a los 18 años, descubrirlo en forma de descuento en la nómina es un golpe brutal.
          </p>
          <p className="text-stone-300 leading-8 mb-5">
            La buena noticia es que también existe una asimetría en las soluciones: el gobierno ofrece opciones de rehabilitación y planes de pago basados en ingresos que ningún acreedor privado ofrecería. El problema es que hay que conocerlas y actuar antes de que la maquinaria de cobro se ponga en marcha, no después.
          </p>
        </div>
      </section>

      {/* ── OPCIONES PARA SALIR ────────────────────────────────────────── */}
      <section className="bg-stone-900 py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl mb-3 text-center">Cómo salir del default</h2>
          <p className="text-stone-400 text-center mb-10">Dos opciones reales — sin pagar nada por adelantado</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {options.map((opt) => (
              <div
                key={opt.title}
                className={`relative rounded-2xl border p-6 ${
                  opt.recommended
                    ? "border-emerald-500/30 bg-emerald-500/5"
                    : "border-stone-800 bg-stone-900/60"
                }`}
              >
                {opt.recommended && (
                  <span className="absolute -top-3 right-4 rounded-full border border-emerald-500/40 bg-emerald-500/15 px-3 py-0.5 text-xs font-semibold text-emerald-400">
                    Recomendada
                  </span>
                )}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-white">{opt.title}</h3>
                  <span className="text-xs font-mono text-stone-400 border border-stone-700 rounded px-2 py-0.5">{opt.time}</span>
                </div>
                <div className="space-y-2 mb-4">
                  {opt.pros.map((p) => (
                    <div key={p} className="flex items-start gap-2 text-sm text-stone-300">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      {p}
                    </div>
                  ))}
                </div>
                <div className="space-y-2 pt-3 border-t border-stone-800">
                  {opt.cons.map((c) => (
                    <div key={c} className="flex items-start gap-2 text-sm text-stone-500">
                      <XCircle className="h-4 w-4 text-stone-600 shrink-0 mt-0.5" />
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA urgente */}
          <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 border border-amber-500/30">
                <Phone className="h-5 w-5 text-amber-400" />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">Actúa antes de recibir la carta</h3>
                <p className="text-sm text-stone-400 mb-3">
                  Si crees que puedes estar en default, no esperes a recibir la notificación de embargo. Llama al{" "}
                  <strong className="text-white">1-800-621-3115</strong> (Default Resolution Group) o entra en{" "}
                  <strong className="text-white">studentaid.gov</strong> para verificar el estado de tus préstamos y explorar opciones.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-amber-400">
                  <span className="border border-amber-500/30 rounded px-2 py-1">1-800-621-3115</span>
                  <span className="border border-amber-500/30 rounded px-2 py-1">studentaid.gov</span>
                  <span className="border border-amber-500/30 rounded px-2 py-1">studentloans.gov</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AD BOTTOM ──────────────────────────────────────────────────── */}
      <div className="bg-stone-900 py-4">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <AdSense slot="5745358955" format="horizontal" />
        </div>
      </div>

      {/* ── AUTHOR + SOURCES ───────────────────────────────────────────── */}
      <section className="bg-stone-900 py-12 border-t border-stone-800">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 space-y-6">
          <ArticleSources category="Deudas" />
          <AuthorBox authorName="Alejandro Torres" />
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <section className="bg-stone-950 py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl mb-8 text-center">Preguntas frecuentes</h2>
          <FAQNative title="Preguntas frecuentes" faqs={faqItems} />
        </div>
      </section>

      {/* ── RELATED ────────────────────────────────────────────────────── */}
      <section className="bg-stone-900 py-16 border-t border-stone-800">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-lg font-bold text-stone-300 mb-6">También te puede interesar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/blog/deuda-tarjetas-eeuu-2026", label: "$1.27 billones en tarjetas: la trampa del pago mínimo" },
              { href: "/blog/aranceles-trump-bolsillo-2026", label: "Aranceles Trump 2026: $1,300 extra al año — qué hacer" },
            ].map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group flex items-center gap-3 rounded-xl border border-stone-800 bg-stone-900/60 p-4 hover:border-stone-600 transition-colors"
              >
                <p className="text-sm text-stone-300 group-hover:text-white transition-colors leading-snug flex-1">{r.label}</p>
                <ChevronRight className="h-4 w-4 text-stone-600 group-hover:text-stone-400 shrink-0 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
