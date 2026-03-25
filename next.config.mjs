/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
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
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Access-Control-Allow-Origin",
            value: "https://finanzasdigitales.es",
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
