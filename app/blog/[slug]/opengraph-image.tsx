import { ImageResponse } from "next/og"
import { getBlogPost } from "@/lib/blog-data"

export const alt = "Finanzas Digitales"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const categoryColors: Record<string, string> = {
  "Inversión":      "#10b981",
  "Inversiones":    "#10b981",
  "Ahorro":         "#3b82f6",
  "Inflación":      "#f97316",
  "Criptomonedas":  "#f59e0b",
  "Tecnología":     "#8b5cf6",
  "Vivienda":       "#14b8a6",
  "Deuda":          "#ef4444",
  "Economía":       "#6366f1",
}

function truncate(str: string, max: number) {
  return str.length > max ? str.slice(0, max - 1) + "…" : str
}

export default function Image({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  const title       = post ? truncate(post.title, 80) : "Finanzas Digitales"
  const description = post ? truncate(post.description, 115) : ""
  const category    = post?.category ?? "Finanzas"
  const readTime    = Number(post?.readTime ?? 0)
  const color       = categoryColors[category] ?? "#6366f1"
  const fontSize    = title.length > 65 ? 46 : title.length > 50 ? 52 : 58

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0f2744 100%)",
          padding: "64px 72px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Barra de color superior */}
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

        {/* Badge de categoría */}
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

        {/* Título + descripción */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            paddingTop: "24px",
            paddingBottom: "24px",
          }}
        >
          <div
            style={{
              fontSize,
              fontWeight: 800,
              color: "#f1f5f9",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              maxWidth: "1050px",
            }}
          >
            {title}
          </div>
          {description && (
            <div
              style={{
                fontSize: "23px",
                color: "#94a3b8",
                marginTop: "22px",
                lineHeight: 1.5,
                maxWidth: "950px",
              }}
            >
              {description}
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "24px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "#6366f1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                fontWeight: 900,
                color: "white",
              }}
            >
              FD
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <div style={{ fontSize: "21px", fontWeight: 700, color: "#f1f5f9" }}>
                Finanzas Digitales
              </div>
              <div style={{ fontSize: "15px", color: "#64748b" }}>
                finanzasdigitales.es
              </div>
            </div>
          </div>
          {readTime > 0 && (
            <div
              style={{
                fontSize: "18px",
                color: "#64748b",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                padding: "8px 20px",
                borderRadius: "8px",
              }}
            >
              {readTime} min de lectura
            </div>
          )}
        </div>
      </div>
    ),
    { ...size }
  )
}
