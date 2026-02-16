import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import StructuredData from "@/components/structured-data"
import { ThemeProvider } from "@/components/theme-provider"
import { ServiceWorker } from "@/components/service-worker"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import Script from 'next/script'
import { CookieConsent } from '@/components/cookie-consent'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL("https://app-finanzas-mu.vercel.app"),
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
  authors: [{ name: "FinanzasPro", url: "https://app-finanzas-mu.vercel.app" }],
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
    url: "https://app-finanzas-mu.vercel.app",
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
    google: "iEJ6MlVtNjqHEUl7GbUfm-q8mzcHCTXNEA7_7hzwVPU",
  },
  alternates: {
    canonical: "https://app-finanzas-mu.vercel.app",
    languages: {
      "es-ES": "https://app-finanzas-mu.vercel.app",
    },
  },
  category: "finance",
  generator: "v0.app",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      <html lang="es" className={`${inter.variable} antialiased`} suppressHydrationWarning={true}>
        <head>
        {/* DNS Prefetch & Preconnect para dominios externos */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" crossOrigin="" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="" />
        <StructuredData type="website" />
        <StructuredData type="organization" />
        {/* Google Analytics - Replace GA_TRACKING_ID with your actual tracking ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FMSEL1C9HK"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FMSEL1C9HK', {
              page_title: document.title,
              page_location: window.location.href,
              content_group1: 'finance',
              content_group2: 'blog'
            });
          `}
        </Script>
        {/* Google AdSense - Replace with your publisher ID */}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4657042320327960"
          strategy="afterInteractive"
          crossOrigin="anonymous"
          async
        />
        {/* AdSense verification helper (only for debugging) */}
        <Script id="adsense-check" strategy="afterInteractive">
          {`(function(){
            window.__adsenseStatus = { loaded: false, pushes: 0 };
            try {
              if (window.adsbygoogle) {
                window.__adsenseStatus.loaded = true;
              }
            } catch(e){}

            const originalPush = window.adsbygoogle && window.adsbygoogle.push ? window.adsbygoogle.push : null;
            if (originalPush) {
              window.adsbygoogle.push = function(){
                window.__adsenseStatus.pushes = (window.__adsenseStatus.pushes || 0) + 1;
                return originalPush.apply(this, arguments);
              }
            }

            window.__reportAdSenseStatus = function(){
              try{
                fetch('/api/adsense-check', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ status: window.__adsenseStatus, url: location.href, userAgent: navigator.userAgent })
                })
              }catch(e){ console.debug('report failed', e) }
            }
          })();`}
        </Script>
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ServiceWorker />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CookieConsent />
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
    </NextIntlClientProvider>
  )
}
