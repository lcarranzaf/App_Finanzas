import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import StructuredData from "@/components/structured-data"
import { SpeedInsights } from "@vercel/speed-insights/next"   
import { Analytics } from "@vercel/analytics/next"
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://finanzaspro.com"),
  title: {
    default: "FinanzasPro - Tu Guía para el Éxito Financiero",
    template: "%s | FinanzasPro",
  },
  description:
    "Aprende a ahorrar, invertir y construir un futuro próspero con nuestros consejos expertos en finanzas personales. Guías sobre fondos indexados, presupuestos y estrategias financieras.",
  keywords: [
    "finanzas personales",
    "ahorro",
    "inversiones",
    "dinero",
    "presupuesto",
    "fondos indexados",
    "educación financiera",
    "libertad financiera",
    "ETF",
    "bolsa de valores",
  ],
  authors: [{ name: "FinanzasPro", url: "https://finanzaspro.com" }],
  creator: "FinanzasPro",
  publisher: "FinanzasPro",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://finanzaspro.com",
    title: "FinanzasPro - Tu Guía para el Éxito Financiero",
    description:
      "Aprende a ahorrar, invertir y construir un futuro próspero con nuestros consejos expertos en finanzas personales.",
    siteName: "FinanzasPro",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FinanzasPro - Finanzas Personales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FinanzasPro - Tu Guía para el Éxito Financiero",
    description:
      "Aprende a ahorrar, invertir y construir un futuro próspero con nuestros consejos expertos en finanzas personales.",
    images: ["/og-image.jpg"],
    creator: "@finanzaspro",
  },
  verification: {
    google: "google-site-verification-code-here",
    yandex: "yandex-verification-code-here",
  },
  alternates: {
    canonical: "https://finanzaspro.com",
    languages: {
      "es-ES": "https://finanzaspro.com",
    },
  },
  category: "finance",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} antialiased`}>
      <head>
        <StructuredData type="website" />
        <StructuredData type="organization" />
        {/* Google Analytics - Replace with your tracking ID */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_TRACKING_ID');
            `,
          }}
        />
        {/* Google AdSense - Replace with your publisher ID */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4657042320327960"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
