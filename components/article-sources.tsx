interface Source {
  name: string
  url: string
  description: string
}

const sourcesByCategory: Record<string, Source[]> = {
  "Inversiones": [
    { name: "CNMV — Comisión Nacional del Mercado de Valores", url: "https://www.cnmv.es/portal/inversor/introduccion.aspx", description: "Regulador oficial de mercados en España" },
    { name: "Investor.gov (SEC)", url: "https://www.investor.gov", description: "Recursos oficiales para inversores individuales" },
    { name: "Banco de España — Educación Financiera", url: "https://www.bde.es/bde/es/secciones/servicios/Particulares_y_e/Educacion_financ/", description: "Guías y materiales de educación financiera" },
  ],
  "Ahorro": [
    { name: "Banco de España — Educación Financiera", url: "https://www.bde.es/bde/es/secciones/servicios/Particulares_y_e/Educacion_financ/", description: "Guías oficiales sobre ahorro e inversión" },
    { name: "CONDUSEF (México)", url: "https://www.condusef.gob.mx", description: "Comisión Nacional para la Protección y Defensa de los Usuarios de Servicios Financieros" },
    { name: "Plan de Educación Financiera (CNMV + Banco de España)", url: "https://www.finanzasparatodos.es", description: "Portal de educación financiera oficial" },
  ],
  "Presupuesto": [
    { name: "Banco de España — Educación Financiera", url: "https://www.bde.es/bde/es/secciones/servicios/Particulares_y_e/Educacion_financ/", description: "Recursos sobre planificación del presupuesto" },
    { name: "Finanzas para Todos (CNMV)", url: "https://www.finanzasparatodos.es", description: "Portal oficial de educación financiera en español" },
    { name: "CONDUSEF (México)", url: "https://www.condusef.gob.mx", description: "Guías de presupuesto familiar para México" },
  ],
  "Deudas": [
    { name: "CONDUSEF — Crédito Responsable", url: "https://www.condusef.gob.mx", description: "Información oficial sobre deudas y crédito en México" },
    { name: "Banco de España — Deudas y Crédito", url: "https://www.bde.es/bde/es/secciones/servicios/Particulares_y_e/Educacion_financ/", description: "Recursos sobre gestión de deudas" },
    { name: "Finanzas para Todos (CNMV)", url: "https://www.finanzasparatodos.es", description: "Portal de educación financiera con guías de crédito" },
  ],
  "Crédito": [
    { name: "CONDUSEF — Buró de Crédito", url: "https://www.condusef.gob.mx", description: "Información oficial sobre historial crediticio en México" },
    { name: "Banco de España — Crédito Responsable", url: "https://www.bde.es/bde/es/secciones/servicios/Particulares_y_e/Educacion_financ/", description: "Guías oficiales sobre crédito" },
  ],
  "Planificación": [
    { name: "FMI — Finanzas Personales", url: "https://www.imf.org/es/Publications/fandd/financial-literacy", description: "Fondo Monetario Internacional: recursos de planificación financiera" },
    { name: "Banco de España — Educación Financiera", url: "https://www.bde.es/bde/es/secciones/servicios/Particulares_y_e/Educacion_financ/", description: "Guías de planificación a largo plazo" },
    { name: "OCDE — Educación Financiera", url: "https://www.oecd.org/financial/education/", description: "Recursos de planificación financiera de la OCDE" },
  ],
  "Tecnología": [
    { name: "CNBV — Fintech (México)", url: "https://www.cnbv.gob.mx/Fintech", description: "Marco regulatorio Fintech en México" },
    { name: "Banco de España — Fintech", url: "https://www.bde.es/bde/es/secciones/servicios/Particulares_y_e/Educacion_financ/", description: "Recursos sobre tecnología financiera" },
  ],
  "Tecnología Financiera": [
    { name: "CNBV — Fintech (México)", url: "https://www.cnbv.gob.mx/Fintech", description: "Marco regulatorio Fintech en México" },
    { name: "CoinMarketCap — Datos de mercado", url: "https://coinmarketcap.com", description: "Referencia de mercado para activos digitales" },
    { name: "Banco de España — Criptoactivos", url: "https://www.bde.es/bde/es/secciones/servicios/Particulares_y_e/Educacion_financ/", description: "Información oficial sobre criptoactivos" },
  ],
  "Ingresos Extra": [
    { name: "OCDE — Mercado Laboral", url: "https://www.oecd.org/employment/", description: "Datos sobre empleo y economía gig" },
    { name: "Banco de España — Educación Financiera", url: "https://www.bde.es/bde/es/secciones/servicios/Particulares_y_e/Educacion_financ/", description: "Recursos sobre finanzas personales" },
  ],
  "Educación Financiera": [
    { name: "OCDE — Educación Financiera", url: "https://www.oecd.org/financial/education/", description: "Marco internacional de competencia financiera" },
    { name: "Banco Mundial — Inclusión Financiera", url: "https://www.worldbank.org/es/topic/financialinclusion", description: "Datos globales sobre inclusión financiera" },
    { name: "Finanzas para Todos (CNMV)", url: "https://www.finanzasparatodos.es", description: "Portal oficial de educación financiera en español" },
  ],
}

const defaultSources: Source[] = [
  { name: "Banco de España — Educación Financiera", url: "https://www.bde.es/bde/es/secciones/servicios/Particulares_y_e/Educacion_financ/", description: "Recursos oficiales de educación financiera" },
  { name: "Finanzas para Todos (CNMV + Banco de España)", url: "https://www.finanzasparatodos.es", description: "Portal oficial de educación financiera en español" },
  { name: "CONDUSEF (México)", url: "https://www.condusef.gob.mx", description: "Comisión Nacional para la Protección de Usuarios Financieros" },
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
