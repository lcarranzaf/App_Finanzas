import { ImageResponse } from "next/og"
import { getBlogPost } from "@/lib/blog-data"

export const alt = "Finanzas Digitales"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

// Colores para el diseño genérico (sin ogStat)
const categoryColors: Record<string, string> = {
  "Inversión":             "#10b981",
  "Inversiones":           "#10b981",
  "Ahorro":                "#3b82f6",
  "Inflación":             "#f97316",
  "Criptomonedas":         "#f59e0b",
  "Tecnología":            "#8b5cf6",
  "Tecnología Financiera": "#8b5cf6",
  "Vivienda":              "#14b8a6",
  "Deuda":                 "#ef4444",
  "Deudas":                "#ef4444",
  "Economía":              "#6366f1",
  "Fiscalidad":            "#f59e0b",
  "Planificación":         "#a855f7",
}

function truncate(str: string, max: number) {
  return str.length > max ? str.slice(0, max - 1) + "…" : str
}

export default function Image({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  // ── DISEÑO STAT (cuando el post tiene ogStat) ─────────────────────────────
  if (post?.ogStat) {
    const { numberHighlight, numberSuffix, label, pills = [], stats = [], accentColor = "#E63946" } = post.ogStat
    const title = truncate(post.title, 75)
    const goldColor = "#F4A21E"
    const mutedColor = "#A89F94"
    const textColor = "#F0EAE0"
    const darkBg = "#1A1A2E"

    return new ImageResponse(
      (
        <div
          style={{
            width: "1200px",
            height: "630px",
            display: "flex",
            flexDirection: "column",
            background: darkBg,
            position: "relative",
            fontFamily: "sans-serif",
            overflow: "hidden",
          }}
        >
          {/* Glow rojo — esquina superior derecha */}
          <div
            style={{
              position: "absolute",
              top: "-80px",
              right: "-80px",
              width: "560px",
              height: "420px",
              borderRadius: "50%",
              backgroundImage: `radial-gradient(ellipse at center, ${accentColor}55 0%, transparent 70%)`,
            }}
          />
          {/* Glow dorado — esquina inferior izquierda */}
          <div
            style={{
              position: "absolute",
              bottom: "-80px",
              left: "-60px",
              width: "480px",
              height: "360px",
              borderRadius: "50%",
              backgroundImage: "radial-gradient(ellipse at center, rgba(244,162,30,0.18) 0%, transparent 70%)",
            }}
          />

          {/* Contenido principal */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "48px 72px 24px",
              flex: 1,
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* Tag categoría */}
            <div style={{ display: "flex" }}>
              <div
                style={{
                  background: accentColor,
                  color: "white",
                  fontSize: "14px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "6px 14px",
                  borderRadius: "2px",
                }}
              >
                {post.category} · {new Date(post.publishedAt).getFullYear()}
              </div>
            </div>

            {/* Bloque central */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {/* Número grande */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "flex-end", gap: "8px" }}>
                  <div
                    style={{
                      fontSize: "106px",
                      fontWeight: 900,
                      color: accentColor,
                      lineHeight: 0.9,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {numberHighlight}
                  </div>
                  <div
                    style={{
                      fontSize: "106px",
                      fontWeight: 900,
                      color: "#FFF8F0",
                      lineHeight: 0.9,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {numberSuffix}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: mutedColor,
                    fontWeight: 500,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    marginTop: "10px",
                  }}
                >
                  {label}
                </div>
              </div>

              {/* Titular */}
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  color: textColor,
                  lineHeight: 1.3,
                  maxWidth: "620px",
                }}
              >
                {title}
              </div>

              {/* Pills */}
              {pills.length > 0 && (
                <div style={{ display: "flex", gap: "8px" }}>
                  {pills.map((pill, i) => (
                    <div
                      key={pill}
                      style={{
                        background: i < 2 ? `${accentColor}26` : "rgba(255,255,255,0.07)",
                        border: `1px solid ${i < 2 ? `${accentColor}55` : "rgba(255,255,255,0.12)"}`,
                        color: i < 2 ? "#ff8a92" : mutedColor,
                        fontSize: "12px",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        padding: "5px 12px",
                        borderRadius: "2px",
                      }}
                    >
                      {pill}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Barra de stats inferior */}
          {stats.length > 0 && (
            <div
              style={{
                display: "flex",
                gap: "48px",
                padding: "20px 72px",
                background: "rgba(0,0,0,0.45)",
                borderTop: "1px solid rgba(255,255,255,0.06)",
                position: "relative",
                zIndex: 1,
              }}
            >
              {stats.map((stat) => (
                <div key={stat.val} style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                  <div
                    style={{
                      fontSize: "28px",
                      fontWeight: 900,
                      color: goldColor,
                      lineHeight: 1,
                    }}
                  >
                    {stat.val}
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      color: mutedColor,
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    {stat.lbl}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ),
      { ...size }
    )
  }

  // ── DISEÑO GENÉRICO (sin ogStat) ─────────────────────────────────────────
  const title    = post ? truncate(post.title, 80) : "Finanzas Digitales"
  const desc     = post ? truncate(post.description, 115) : ""
  const category = post?.category ?? "Finanzas"
  const readTime = Number(post?.readTime ?? 0)
  const color    = categoryColors[category] ?? "#6366f1"
  const fontSize = title.length > 65 ? 46 : title.length > 50 ? 52 : 58

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0f172a",
          backgroundImage: "linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0f2744 100%)",
          padding: "64px 72px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "5px",
            background: color,
          }}
        />

        <div style={{ display: "flex" }}>
          <div
            style={{
              background: `${color}22`,
              border: `2px solid ${color}`,
              color: color,
              padding: "8px 24px",
              borderRadius: "999px",
              fontSize: "19px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {category}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "center", paddingTop: "24px", paddingBottom: "24px" }}>
          <div style={{ fontSize, fontWeight: 800, color: "#f1f5f9", lineHeight: 1.2, letterSpacing: "-0.02em", maxWidth: "1050px" }}>
            {title}
          </div>
          {desc && (
            <div style={{ fontSize: "23px", color: "#94a3b8", marginTop: "22px", lineHeight: 1.5, maxWidth: "950px" }}>
              {desc}
            </div>
          )}
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "24px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "#6366f1", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", fontWeight: 900, color: "white" }}>
              FD
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <div style={{ fontSize: "21px", fontWeight: 700, color: "#f1f5f9" }}>Finanzas Digitales</div>
              <div style={{ fontSize: "15px", color: "#64748b" }}>finanzasdigitales.es</div>
            </div>
          </div>
          {readTime > 0 && (
            <div style={{ fontSize: "18px", color: "#64748b", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", padding: "8px 20px", borderRadius: "8px" }}>
              {readTime} min de lectura
            </div>
          )}
        </div>
      </div>
    ),
    { ...size }
  )
}
