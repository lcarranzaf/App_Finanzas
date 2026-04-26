import type { FAQItem } from "@/components/faq-section"

export interface OgStat {
  numberHighlight: string
  numberSuffix: string
  label: string
  pills?: string[]
  stats?: Array<{ val: string; lbl: string }>
  accentColor?: string
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  content: string
  publishedAt: string
  updatedAt?: string
  readTime: string
  category: string
  tags: string[]
  image: string
  author: string
  faqs?: FAQItem[]
  seoTitle?: string
  ogStat?: OgStat
  noindex?: boolean
  howToSteps?: { name: string; text: string }[]
}

export interface BlogSearchPost {
  slug: string
  title: string
  description: string
  readTime: string
  category: string
  tags: string[]
  image: string
}
