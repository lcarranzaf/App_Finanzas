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
import { ClientOnly } from '@/components/client-only'
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.finanzasdigitales.es"),
  title: {
    default: "Finanzas Digitales - Ahorro e Inversion en Espana",
    template: "%s | Finanzas Digitales",
  },
  description:
    "Guias gratuitas de finanzas personales para Espana: ahorra mas, invierte en fondos indexados y ETFs, crea tu presupuesto y alcanza la libertad financiera.",
  keywords: [
    "finanzas personales",
    "ahorro",
    "inversiones",
    "dinero",
    "presupuesto",
    "fondos indexados",
    "educacion financiera",
    "libertad financiera",
    "ETF",
    "bolsa de valores",
  ],
  authors: [{ name: "Finanzas Digitales", url: "https://www.finanzasdigitales.es" }],
  creator: "Finanzas Digitales",
  publisher: "Finanzas Digitales",
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
    url: "https://www.finanzasdigitales.es",
    title: "Finanzas Digitales - Ahorro e Inversion en Espana",
    description:
      "Guias gratuitas de finanzas personales para Espana: ahorra mas, invierte en fondos indexados y ETFs, y alcanza la libertad financiera.",
    siteName: "Finanzas Digitales",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Finanzas Digitales - Finanzas Personales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Finanzas Digitales - Ahorro e Inversion en Espana",
    description:
      "Guias gratuitas de finanzas personales para Espana: ahorra mas, invierte en fondos indexados y ETFs, y alcanza la libertad financiera.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "iEJ6MlVtNjqHEUl7GbUfm-q8mzcHCTXNEA7_7hzwVPU",
  },
  category: "finance",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} antialiased`} suppressHydrationWarning={true}>
        <head>
        {/* DNS Prefetch & Preconnect para dominios externos */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
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
        {/* Google AdSense — script nativo para evitar warning data-nscript */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4657042320327960"
          crossOrigin="anonymous"
        />
        {/* AdSense verification helper (solo en desarrollo) */}
        {process.env.NODE_ENV !== 'production' && (
          <Script
            id="adsense-check"
            strategy="afterInteractive"
            suppressHydrationWarning
          >
            {`(function(){
              window.__adsenseStatus = { loaded: false, pushes: 0 };

              function tryPatch() {
                var ags = window.adsbygoogle;
                if (ags && typeof ags.push === 'function') {
                  window.__adsenseStatus.loaded = true;
                  var orig = ags.push.bind(ags);
                  ags.push = function() {
                    window.__adsenseStatus.pushes++;
                    return orig.apply(this, arguments);
                  };
                  return true;
                }
                return false;
              }

              if (!tryPatch()) {
                var n = 0;
                var t = setInterval(function() {
                  if (tryPatch() || ++n >= 20) clearInterval(t);
                }, 250);
              }

              window.__reportAdSenseStatus = function() {
                try {
                  fetch('/api/adsense-check', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ status: window.__adsenseStatus, url: location.href, userAgent: navigator.userAgent })
                  });
                } catch(e) { console.debug('report failed', e); }
              };
            })();`}
          </Script>
        )}
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground" suppressHydrationWarning>
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
          <ClientOnly>
            <CookieConsent />
          </ClientOnly>
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
