import { ImageResponse } from "next/og"

export const alt = "Calculadoras Financieras Gratuitas — Finanzas Digitales"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const tools = [
  { icon: "🏠", name: "Hipoteca" },
  { icon: "📈", name: "Interés Compuesto" },
  { icon: "🐷", name: "Meta de Ahorro" },
  { icon: "💳", name: "Pago de Deuda" },
  { icon: "💱", name: "Divisas" },
]

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
            background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            background: "rgba(99,102,241,0.15)",
            border: "2px solid #6366f1",
            color: "#818cf8",
            padding: "8px 26px",
            borderRadius: "999px",
            fontSize: "18px",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "28px",
          }}
        >
          100% Gratis · Sin Registro
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
          Calculadoras Financieras
        </div>

        {/* Subtítulo */}
        <div
          style={{
            fontSize: "25px",
            color: "#94a3b8",
            textAlign: "center",
            marginBottom: "48px",
          }}
        >
          5 herramientas interactivas para tomar mejores decisiones
        </div>

        {/* Herramientas */}
        <div style={{ display: "flex", gap: "14px" }}>
          {tools.map((tool) => (
            <div
              key={tool.name}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: "16px",
                padding: "16px 22px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
                minWidth: "158px",
              }}
            >
              <div style={{ fontSize: "28px" }}>{tool.icon}</div>
              <div style={{ fontSize: "16px", color: "#cbd5e1", fontWeight: 500, textAlign: "center" }}>
                {tool.name}
              </div>
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
