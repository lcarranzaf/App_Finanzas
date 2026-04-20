"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  title?: string
  subtitle?: string
  faqs: FAQItem[]
  inArticle?: boolean
}

export function FAQSection({ title = "Preguntas Frecuentes", subtitle, faqs, inArticle = false }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const items = (
    <div className="space-y-2">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index
        return (
          <div
            key={index}
            className="rounded-xl border border-border bg-card overflow-hidden"
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between px-5 py-4 text-left hover:bg-muted/50 transition-colors gap-4"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-foreground text-sm sm:text-base leading-snug">{faq.question}</span>
              <ChevronDown
                className="h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-300"
                style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              />
            </button>

            {/* Usamos grid-rows para una transición fiable sin max-height hardcodeado */}
            <div
              style={{
                display: "grid",
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                transition: "grid-template-rows 300ms ease",
              }}
            >
              <div style={{ overflow: "hidden" }}>
                <div className="px-5 pb-5 pt-1">
                  <p className="text-muted-foreground leading-7 text-sm sm:text-base">{faq.answer}</p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )

  if (inArticle) {
    return (
      <section className="mt-12 pt-8 border-t border-border">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{title}</h2>
          {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
        </div>
        {items}
      </section>
    )
  }

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground">{title}</h2>
          {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
        </div>
        {items}
      </div>
    </section>
  )
}
