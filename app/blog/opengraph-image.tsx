import { ImageResponse } from "next/og"

export const alt = "Blog de Finanzas Personales — Finanzas Digitales"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const tags = ["Ahorro", "Inversiones", "Criptomonedas", "Vivienda"]

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0f2744 100%)",
          fontFamily: "sans-serif",
          position: "relative",
          padding: "64px",
        }}
      >
        {/* Barra superior */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "5px",
            background: "linear-gradient(90deg, #6366f1, #8b5cf6, #a855f7)",
          }}
        />

        {/* Logo FD */}
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "20px",
            background: "#6366f1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "34px",
            fontWeight: 900,
            color: "white",
            marginBottom: "32px",
          }}
        >
          FD
        </div>

        {/* Título */}
        <div
          style={{
            fontSize: "62px",
            fontWeight: 800,
            color: "#f1f5f9",
            textAlign: "center",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "20px",
          }}
        >
          Blog de Finanzas Personales
        </div>

        {/* Subtítulo */}
        <div
          style={{
            fontSize: "27px",
            color: "#94a3b8",
            textAlign: "center",
            lineHeight: 1.4,
            marginBottom: "48px",
          }}
        >
          Ahorro, inversión y libertad financiera para España
        </div>

        {/* Categorías */}
        <div style={{ display: "flex", gap: "14px" }}>
          {tags.map((tag) => (
            <div
              key={tag}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.10)",
                color: "#cbd5e1",
                padding: "10px 24px",
                borderRadius: "999px",
                fontSize: "19px",
                fontWeight: 500,
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Dominio */}
        <div
          style={{
            position: "absolute",
            bottom: "36px",
            fontSize: "19px",
            color: "#475569",
          }}
        >
          finanzasdigitales.es
        </div>
      </div>
    ),
    { ...size }
  )
}
