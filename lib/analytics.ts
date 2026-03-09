export type AnalyticsEventParams = Record<string, string | number | boolean>

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function trackEvent(eventName: string, params: AnalyticsEventParams = {}) {
  if (typeof window === "undefined") return
  if (typeof window.gtag !== "function") return

  window.gtag("event", eventName, params)
}

