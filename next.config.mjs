/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === "development"

const nextConfig = {
  transpilePackages: ["recharts"],
  poweredByHeader: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "img-c.udemycdn.com" },
      { protocol: "https", hostname: "img.udemycdn.com" },
    ],
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 86400,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=(), browsing-topics=(), payment=(), usb=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Access-Control-Allow-Origin",
            value: "https://www.finanzasdigitales.es",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://pagead2.googlesyndication.com https://www.googletagmanager.com https://www.google-analytics.com https://adservice.google.com https://googleads.g.doubleclick.net https://fundingchoicesmessages.google.com https://*.adtrafficquality.google https://*.disqus.com https://disqus.com https://disquscdn.com https://*.disquscdn.com https://va.vercel-scripts.com`,
              "style-src 'self' 'unsafe-inline' https://disquscdn.com https://*.disquscdn.com",
              "img-src 'self' data: blob: https://images.unsplash.com https://images.pexels.com https://hebbkx1anhila5yf.public.blob.vercel-storage.com https://pagead2.googlesyndication.com https://www.google.com https://www.gstatic.com https://*.adtrafficquality.google https://*.disqus.com https://disquscdn.com https://*.disquscdn.com https://referrer.disqus.com",
              "font-src 'self' data: https://disquscdn.com https://*.disquscdn.com",
              "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://pagead2.googlesyndication.com https://vitals.vercel-insights.com https://vercel.live https://*.adtrafficquality.google https://fundingchoicesmessages.google.com https://*.disqus.com https://disqus.com https://www.google.com https://va.vercel-scripts.com https://open.er-api.com",
              "frame-src https://googleads.g.doubleclick.net https://tpc.googlesyndication.com https://www.google.com https://*.adtrafficquality.google",
              "worker-src 'self'",
              "frame-ancestors 'none'",
            ].join("; "),
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url, Content-Type",
          },
        ],
      },
      {
        source: "/og-image.jpg",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/movimiento-fire-retirarte-a-los-40",
        destination: "/blog/movimiento-fire-retiro-temprano",
        permanent: true,
      },
      {
        source: "/proyecciones",
        destination: "/calculadoras/interes-compuesto",
        permanent: true,
      },
      {
        source: "/curso",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
