interface Source {
  name: string
  url: string
  description: string
}

const sourcesByCategory: Record<string, Source[]> = {
  "Inversiones": [
    { name: "CNMV — Comisión Nacional del Mercado de Valores", url: "https://www.cnmv.es/portal/inversor/introduccion.aspx", description: "Regulador oficial de mercados de valores en España" },
    { name: "Banco de España — Educación Financiera", url: "https://www.bde.es/bde/es/secciones/servicios/Particulares_y_e/Educacion_financ/", description: "Guías y materiales de educación financiera del banco central" },
    { name: "ESMA — Autoridad Europea de Valores y Mercados", url: "https://www.esma.europa.eu/investor-corner", description: "Regulador europeo de mercados financieros" },
  ],
  "Ahorro": [
    { name: "Banco de España — Educación Financiera", url: "https://www.bde.es/bde/es/secciones/servicios/Particulares_y_e/Educacion_financ/", description: "Guías oficiales sobre ahorro e inversión" },
    { name: "Finanzas para Todos (CNMV + Banco de España)", url: "https://www.finanzasparatodos.es", description: "Portal oficial de educación financiera en España" },
    { name: "OCU — Organización de Consumidores y Usuarios", url: "https://www.ocu.org/dinero", description: "Guías independientes de finanzas personales para el consumidor español" },
  ],
  "Presupuesto": [
    { name: "Banco de España — Educación Financiera", url: "https://www.bde.es/bde/es/secciones/servicios/Particulares_y_e/Educacion_financ/", description: "Recursos sobre planificación del presupuesto" },
    { name: "Finanzas para Todos (CNMV + Banco de España)", url: "https://www.finanzasparatodos.es", description: "Portal oficial de educación financiera en español" },
    { name: "OCU — Organización de Consumidores y Usuarios", url: "https://www.ocu.org/dinero", description: "Guías de presupuesto y ahorro para el consumidor español" },
  ],
  "Deudas": [
    { name: "Banco de España — Deudas y Crédito", url: "https://www.bde.es/bde/es/secciones/servicios/Particulares_y_e/Educacion_financ/", description: "Recursos sobre gestión de deudas del banco central español" },
    { name: "Finanzas para Todos (CNMV + Banco de España)", url: "https://www.finanzasparatodos.es", description: "Portal de educación financiera con guías de crédito" },
    { name: "OCU — Organización de Consumidores y Usuarios", url: "https://www.ocu.org/dinero", description: "Información sobre derechos del consumidor financiero en España" },
  ],
  "Crédito": [
    { name: "Banco de España — Crédito Responsable", url: "https://www.bde.es/bde/es/secciones/servicios/Particulares_y_e/Educacion_financ/", description: "Guías oficiales sobre crédito y préstamos en España" },
    { name: "CNMV — Comisión Nacional del Mercado de Valores", url: "https://www.cnmv.es/portal/inversor/introduccion.aspx", description: "Regulador oficial de productos financieros en España" },
    { name: "Finanzas para Todos (CNMV + Banco de España)", url: "https://www.finanzasparatodos.es", description: "Portal oficial de educación financiera en español" },
  ],
  "Planificación": [
    { name: "Banco de España — Educación Financiera", url: "https://www.bde.es/bde/es/secciones/servicios/Particulares_y_e/Educacion_financ/", description: "Guías de planificación financiera a largo plazo" },
    { name: "OCDE — Educación Financiera", url: "https://www.oecd.org/financial/education/", description: "Marco internacional de competencia financiera de la OCDE" },
    { name: "Finanzas para Todos (CNMV + Banco de España)", url: "https://www.finanzasparatodos.es", description: "Portal oficial de educación financiera en España" },
  ],
  "Tecnología": [
    { name: "Banco de España — Supervisión de Entidades Fintech", url: "https://www.bde.es/bde/es/secciones/servicios/Particulares_y_e/Educacion_financ/", description: "Marco regulatorio Fintech en España" },
    { name: "CNMV — Fintech y Criptoactivos", url: "https://www.cnmv.es/portal/verDoc.axd?t={7b3eba13-3777-4aab-b3e8-e83a5d95dc74}", description: "Regulación española de activos digitales y fintech" },
    { name: "ESMA — Innovación Financiera", url: "https://www.esma.europa.eu/investor-corner", description: "Regulación europea de tecnología financiera" },
  ],
  "Tecnología Financiera": [
    { name: "Banco de España — Fintech", url: "https://www.bde.es/bde/es/secciones/servicios/Particulares_y_e/Educacion_financ/", description: "Marco regulatorio Fintech en España" },
    { name: "CNMV — Criptoactivos", url: "https://www.cnmv.es/portal/inversor/introduccion.aspx", description: "Información oficial sobre criptoactivos para el inversor español" },
    { name: "ESMA — Reglamento MiCA", url: "https://www.esma.europa.eu/investor-corner", description: "Regulación europea de mercados de criptoactivos (MiCA)" },
  ],
  "Ingresos Extra": [
    { name: "OCDE — Mercado Laboral", url: "https://www.oecd.org/employment/", description: "Datos sobre empleo, economía gig y tendencias laborales" },
    { name: "Banco de España — Educación Financiera", url: "https://www.bde.es/bde/es/secciones/servicios/Particulares_y_e/Educacion_financ/", description: "Recursos sobre planificación de ingresos y finanzas personales" },
    { name: "Agencia Tributaria — IRPF", url: "https://www.agenciatributaria.es/AEAT.internet/Inicio/Ayuda/_comp_Consultas_informaticas/Categorias/Impuestos_y_tasas/Impuesto_sobre_la_Renta_de_las_Personas_Fisicas_-IRPF-/Impuesto_sobre_la_Renta_de_las_Personas_Fisicas_-IRPF-.shtml", description: "Información oficial sobre fiscalidad de ingresos adicionales en España" },
  ],
  "Educación Financiera": [
    { name: "OCDE — Educación Financiera", url: "https://www.oecd.org/financial/education/", description: "Marco internacional de competencia financiera" },
    { name: "Finanzas para Todos (CNMV + Banco de España)", url: "https://www.finanzasparatodos.es", description: "Portal oficial de educación financiera en España" },
    { name: "Banco Mundial — Inclusión Financiera", url: "https://www.worldbank.org/es/topic/financialinclusion", description: "Datos globales sobre inclusión financiera" },
  ],
}

const defaultSources: Source[] = [
  { name: "Banco de España — Educación Financiera", url: "https://www.bde.es/bde/es/secciones/servicios/Particulares_y_e/Educacion_financ/", description: "Recursos oficiales de educación financiera del banco central español" },
  { name: "Finanzas para Todos (CNMV + Banco de España)", url: "https://www.finanzasparatodos.es", description: "Portal oficial de educación financiera en español" },
  { name: "CNMV — Comisión Nacional del Mercado de Valores", url: "https://www.cnmv.es/portal/inversor/introduccion.aspx", description: "Regulador oficial de mercados financieros en España" },
]

interface ArticleSourcesProps {
  category: string
}

export function ArticleSources({ category }: ArticleSourcesProps) {
  const sources = sourcesByCategory[category] ?? defaultSources

  return (
    <div className="mt-10 pt-8 border-t border-border">
      <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
        Fuentes de referencia
      </h3>
      <ul className="space-y-2">
        {sources.map((source) => (
          <li key={source.url} className="flex items-start gap-2 text-sm">
            <span className="text-primary mt-0.5">↗</span>
            <span>
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-primary hover:underline font-medium"
              >
                {source.name}
              </a>
              {" — "}
              <span className="text-muted-foreground">{source.description}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
