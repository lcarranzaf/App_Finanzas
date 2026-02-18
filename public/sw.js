// Service Worker for caching static assets and improving performance

const CACHE_NAME = 'finanzaspro-v3'
const STATIC_CACHE = 'finanzaspro-static-v3'
const DYNAMIC_CACHE = 'finanzaspro-dynamic-v3'

// Only cache truly static assets that are guaranteed to exist
// Do NOT cache HTML pages here — they must be served fresh to avoid hydration mismatches
const STATIC_ASSETS = [
  '/placeholder.svg',
  '/og-image.jpg',
]

// Install event - cache static assets individually so one failure doesn't break install
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        return Promise.allSettled(
          STATIC_ASSETS.map((url) =>
            cache.add(url).catch((err) => {
              console.debug('SW: failed to cache', url, err)
            })
          )
        )
      })
      .then(() => {
        return self.skipWaiting()
      })
  )
})

// Activate event - clean up ALL old caches and claim clients immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            console.debug('SW: deleting old cache', cacheName)
            return caches.delete(cacheName)
          }
        })
      )
    }).then(() => {
      return self.clients.claim()
    })
  )
})

// Fetch event - serve from cache when possible
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET requests
  if (request.method !== 'GET') return

  // Skip external requests
  if (!url.origin.includes('app-finanzas-mu.vercel.app') && !url.origin.includes('localhost')) return

  // Handle different types of requests
  if (url.pathname.startsWith('/api/')) {
    // API requests - network first, cache fallback
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Clone the response for caching
          const responseClone = response.clone()
          caches.open(DYNAMIC_CACHE).then((cache) => {
            cache.put(request, responseClone)
          })
          return response
        })
        .catch(() => {
          return caches.match(request)
        })
    )
  } else if (url.pathname.match(/\.(png|jpg|jpeg|gif|svg|webp|ico)$/)) {
    // Images - cache first, network fallback
    event.respondWith(
      caches.match(request)
        .then((response) => {
          if (response) {
            return response
          }
          return fetch(request).then((response) => {
            const responseClone = response.clone()
            caches.open(DYNAMIC_CACHE).then((cache) => {
              cache.put(request, responseClone)
            })
            return response
          })
        })
    )
  } else if (request.headers.get('accept') && request.headers.get('accept').includes('text/html')) {
    // HTML pages - always network first, never cache to avoid hydration mismatches
    event.respondWith(
      fetch(request).catch(() => caches.match(request))
    )
  } else {
    // Static assets - cache first
    event.respondWith(
      caches.match(request)
        .then((response) => {
          if (response) {
            return response
          }
          return fetch(request).then((response) => {
            // Don't cache HTML pages to ensure freshness
            if (request.headers.get('accept').includes('text/html')) {
              return response
            }
            const responseClone = response.clone()
            caches.open(STATIC_CACHE).then((cache) => {
              cache.put(request, responseClone)
            })
            return response
          })
        })
    )
  }
})

// Background sync for offline actions (if needed in future)
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Handle background sync tasks here
      Promise.resolve()
    )
  }
})