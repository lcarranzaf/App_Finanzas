import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, AlertCircle, CheckCircle2, Calendar } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { FAQSection, type FAQItem } from "@/components/faq-section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Declaración de la Renta 2026 en España | Plazos, tramos y deducciones IRPF",
  description:
    "Guía completa de la declaración de la renta 2025-2026 en España: plazos, tramos IRPF actualizados, deducciones autonómicas, cómo presentarla por internet y errores frecuentes.",
  alternates: {
    canonical: "https://www.finanzasdigitales.es/declaracion-renta-espana-2026",
  },
  openGraph: {
    title: "Declaración de la Renta 2026 en España",
    description:
      "Todo lo que necesitas saber para hacer la renta 2025-2026: plazos, tramos IRPF, deducciones y cómo evitar los errores más comunes.",
    url: "https://www.finanzasdigitales.es/declaracion-renta-espana-2026",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Declaración de la Renta 2026 España",
    description:
      "Plazos, tramos IRPF, deducciones y pasos para presentar la renta 2025-2026 en España.",
  },
}

const faqs: FAQItem[] = [
  {
    question: "¿Cuándo empieza y termina el plazo para hacer la renta 2026?",
    answer:
      "La campaña de la renta 2025-2026 comienza el 2 de abril de 2026 y finaliza el 30 de junio de 2026 para la mayoría de contribuyentes. Si el resultado sale a pagar y domicilias el pago, el plazo se adelanta al 25 de junio. La declaración por teléfono o presencialmente en la AEAT tiene plazos específicos que conviene consultar.",
  },
  {
    question: "¿Quién está obligado a hacer la declaración de la renta?",
    answer:
      "Estás obligado si tienes rendimientos del trabajo superiores a 22.000 € anuales de un solo pagador, o a 15.000 € si tienes dos o más pagadores y el segundo supera los 1.500 €. También si tienes rendimientos del capital mobiliario o ganancias patrimoniales superiores a 1.600 €, o rendimientos de actividades económicas superiores a 1.000 €.",
  },
  {
    question: "¿Cómo afecta el plan de pensiones a la declaración de la renta?",
    answer:
      "Las aportaciones a planes de pensiones individuales reducen la base imponible general con un límite de 1.500 € anuales. Esto significa que si estás en el tramo del 37%, ahorras hasta 555 € en impuestos. Los planes de empresa tienen límites adicionales. El rescate tributa como rendimiento del trabajo.",
  },
  {
    question: "¿Qué deducciones autonómicas puedo aplicar en España?",
    answer:
      "Depende de tu comunidad autónoma. Las más comunes incluyen: deducción por alquiler de vivienda habitual (en algunas CC.AA.), por nacimiento o adopción, por gastos educativos, por donativos, o por inversión en empresas de nueva creación. La AEAT incorpora automáticamente las estatales, pero debes revisar las autonómicas manualmente.",
  },
  {
    question: "¿Qué pasa si me sale a pagar y no puedo pagarlo todo a la vez?",
    answer:
      "Puedes fraccionar el pago en dos plazos sin intereses: el 60% al presentar la declaración (hasta el 30 de junio) y el 40% restante el 5 de noviembre. También puedes solicitar un aplazamiento a la AEAT si tienes dificultades económicas, aunque en ese caso sí generará intereses de demora.",
  },
  {
    question: "¿Puedo corregir la declaración si me equivoco?",
    answer:
      "Sí. Si te has equivocado y la corrección perjudica a la AEAT (pagaste menos de lo debido), debes presentar una declaración complementaria. Si la corrección te favorece (pagaste de más), puedes solicitar una rectificación de autoliquidación. Tienes 4 años desde el fin del plazo de presentación para hacerlo.",
  },
  {
    question: "¿Cómo tributan las ganancias de fondos indexados y ETFs?",
    answer:
      "Las ganancias patrimoniales por venta de fondos o ETFs tributan en la base del ahorro: 19% hasta 6.000 €, 21% de 6.000 € a 50.000 €, 23% de 50.000 € a 200.000 €, y 27% a partir de 200.000 €. Los traspasos entre fondos de inversión (no ETFs) no tributan hasta que rescatas el dinero.",
  },
]

const tramos = [
  { base: "Hasta 12.450 €", tipo: "19%", color: "bg-green-100 text-green-800" },
  { base: "12.450 € – 20.200 €", tipo: "24%", color: "bg-blue-100 text-blue-800" },
  { base: "20.200 € – 35.200 €", tipo: "30%", color: "bg-yellow-100 text-yellow-800" },
  { base: "35.200 € – 60.000 €", tipo: "37%", color: "bg-orange-100 text-orange-800" },
  { base: "60.000 € – 300.000 €", tipo: "45%", color: "bg-red-100 text-red-800" },
  { base: "Más de 300.000 €", tipo: "47%", color: "bg-red-200 text-red-900" },
]

const tramosAhorro = [
  { base: "Hasta 6.000 €", tipo: "19%" },
  { base: "6.000 € – 50.000 €", tipo: "21%" },
  { base: "50.000 € – 200.000 €", tipo: "23%" },
  { base: "Más de 200.000 €", tipo: "27%" },
]

const deducciones = [
  {
    nombre: "Mínimo personal y familiar",
    descripcion: "5.550 € base. Aumenta con edad (mayores de 65 y 75 años) y por hijos o ascendientes a cargo.",
    icono: "👤",
  },
  {
    nombre: "Planes de pensiones",
    descripcion: "Reducción de hasta 1.500 € en la base imponible general por aportaciones individuales.",
    icono: "🏦",
  },
  {
    nombre: "Vivienda habitual (régimen transitorio)",
    descripcion: "Deducción del 15% sobre las cantidades pagadas para compra de vivienda habitual adquirida antes del 1 de enero de 2013.",
    icono: "🏠",
  },
  {
    nombre: "Donativos a ONGs",
    descripcion: "Deducción del 80% sobre los primeros 150 € y del 35% sobre el resto. Sube al 40% si donas a la misma entidad 3 años consecutivos.",
    icono: "❤️",
  },
  {
    nombre: "Inversión en empresas de nueva creación",
    descripcion: "Deducción del 50% sobre las cantidades invertidas, con base máxima de 100.000 €.",
    icono: "🚀",
  },
  {
    nombre: "Alquiler de vivienda habitual",
    descripcion: "Solo si el contrato es anterior al 1 de enero de 2015. Deducción del 10,05% sobre cantidades satisfechas.",
    icono: "🔑",
  },
]

const errores = [
  "No incluir los rendimientos de cuentas remuneradas o depósitos",
  "Olvidar imputar los dividendos de ETFs o acciones extranjeras",
  "No revisar las deducciones autonómicas (la AEAT no las aplica automáticamente)",
  "Declarar por separado siendo matrimonio cuando sale mejor conjunta (o viceversa)",
  "No incluir subvenciones como el bono alquiler joven o ayudas a la vivienda",
  "Aceptar el borrador sin revisarlo cuando tienes varias fuentes de ingresos",
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.finanzasdigitales.es" },
    { "@type": "ListItem", position: 2, name: "Declaración de la Renta 2026", item: "https://www.finanzasdigitales.es/declaracion-renta-espana-2026" },
  ],
}

export default function DeclaracionRentaPage() {
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
            { label: "Declaración de la Renta 2026", href: "/declaracion-renta-espana-2026", isActive: true },
          ]}
        />

        {/* Hero */}
        <div className="mb-12">
          <Badge variant="secondary" className="mb-4 text-sm font-medium px-3 py-1">
            IRPF 2025-2026
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance leading-tight mb-6">
            Declaración de la Renta 2026 en España: guía completa
          </h1>
          <p className="text-xl leading-8 text-muted-foreground text-pretty">
            Plazos, tramos IRPF, deducciones y cómo presentar la renta 2025-2026 paso a paso. Todo lo que necesitas saber para no pagar más de lo que debes.
          </p>
        </div>

        {/* Alerta de plazos */}
        <Card className="mb-10 border-orange-200 bg-orange-50 dark:bg-orange-950/20 dark:border-orange-800">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <Calendar className="h-6 w-6 text-orange-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Plazos campaña renta 2025-2026</p>
                <ul className="space-y-1 text-sm text-orange-700 dark:text-orange-400">
                  <li><strong>2 de abril de 2026</strong> — Inicio de la campaña (por internet)</li>
                  <li><strong>25 de junio de 2026</strong> — Último día para domiciliar pago si sale a pagar</li>
                  <li><strong>30 de junio de 2026</strong> — Fin del plazo general para todos los contribuyentes</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tramos IRPF */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-2">Tramos del IRPF 2026 (base general)</h2>
          <p className="text-muted-foreground mb-6">
            El IRPF es progresivo: solo tributa al tipo más alto la parte de renta que supera cada umbral, no toda la renta.
          </p>
          <div className="overflow-x-auto rounded-lg border">
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-3 font-semibold">Base liquidable</th>
                  <th className="text-left p-3 font-semibold">Tipo estatal + autonómico (aprox.)</th>
                </tr>
              </thead>
              <tbody>
                {tramos.map((t, i) => (
                  <tr key={i} className="border-t">
                    <td className="p-3 font-medium">{t.base}</td>
                    <td className="p-3">
                      <span className={`inline-flex px-2 py-0.5 rounded text-xs font-bold ${t.color}`}>
                        {t.tipo}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            * Los tipos exactos varían según la comunidad autónoma. Los autonómicos pueden diferir ±2-4 puntos.
          </p>
        </section>

        {/* Tramos base del ahorro */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-2">Tramos de la base del ahorro</h2>
          <p className="text-muted-foreground mb-6">
            Los intereses de cuentas, dividendos, fondos de inversión y ETFs tributan en la base del ahorro, separada de los rendimientos del trabajo.
          </p>
          <div className="overflow-x-auto rounded-lg border">
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-3 font-semibold">Ganancia patrimonial / rendimiento capital</th>
                  <th className="text-left p-3 font-semibold">Tipo</th>
                </tr>
              </thead>
              <tbody>
                {tramosAhorro.map((t, i) => (
                  <tr key={i} className="border-t">
                    <td className="p-3">{t.base}</td>
                    <td className="p-3 font-bold">{t.tipo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Deducciones */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-2">Principales deducciones estatales</h2>
          <p className="text-muted-foreground mb-6">
            Aplicar todas las deducciones que te corresponden puede suponer cientos o miles de euros de diferencia.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {deducciones.map((d, i) => (
              <Card key={i}>
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{d.icono}</span>
                    <div>
                      <p className="font-semibold text-sm mb-1">{d.nombre}</p>
                      <p className="text-xs text-muted-foreground">{d.descripcion}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Cómo presentarla */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Cómo presentar la renta por internet</h2>
          <div className="space-y-4">
            {[
              { paso: "1", titulo: "Accede a Renta WEB en la sede electrónica de la AEAT", desc: "Necesitas Cl@ve PIN, DNI electrónico o certificado digital. La AEAT abre el servicio el 2 de abril." },
              { paso: "2", titulo: "Revisa el borrador", desc: "La AEAT precumplimenta datos de empleadores, bancos y organismos que informan. Verifica que estén todos los pagadores y todos los productos financieros." },
              { paso: "3", titulo: "Añade lo que falta", desc: "Revisa deducciones autonómicas, aportaciones a planes de pensiones, donativos, subvenciones recibidas y ganancias no informadas automáticamente." },
              { paso: "4", titulo: "Compara individual vs. conjunta", desc: "Si estás casado/a, el programa calcula ambas opciones. Elige la más favorable." },
              { paso: "5", titulo: "Presenta y guarda el justificante", desc: "Guarda el PDF con el número de justificante. Es tu prueba de presentación." },
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

        {/* Errores comunes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Errores frecuentes que cuestan dinero</h2>
          <div className="space-y-3">
            {errores.map((e, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900">
                <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                <p className="text-sm text-foreground">{e}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA inversión */}
        <Card className="mb-12 bg-primary/5 border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold mb-1">¿Quieres reducir lo que pagas en la próxima renta?</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Invertir en un plan de pensiones indexado con bajas comisiones puede reducir tu base imponible hasta 1.500 € al año. Calcula cuánto ahorrarías.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild size="sm">
                    <Link href="/mejores-planes-de-pensiones-espana-2026">
                      Ver planes de pensiones <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <Link href="/calculadoras/interes-compuesto">
                      Calculadora de ahorro
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Preguntas frecuentes sobre la renta 2026</h2>
          <FAQSection faqs={faqs} inArticle />
        </section>

        {/* Links relacionados */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">Guías relacionadas</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { href: "/mejores-planes-de-pensiones-espana-2026", label: "Mejores planes de pensiones 2026" },
              { href: "/fondos-indexados", label: "Fondos indexados en España" },
              { href: "/mejores-brokers-espana-2026", label: "Mejores brokers para invertir" },
              { href: "/blog/interes-compuesto-como-funciona", label: "Cómo funciona el interés compuesto" },
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
