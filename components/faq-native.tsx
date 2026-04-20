// Componente sin "use client" — usa <details>/<summary> nativos del navegador
// Funciona sin JavaScript, sin hidratación, sin React state

export interface FAQItem {
  question: string
  answer: string
}

interface FAQNativeProps {
  title: string
  subtitle?: string
  faqs: FAQItem[]
}

export function FAQNative({ title, subtitle, faqs }: FAQNativeProps) {
  return (
    <section className="mt-12 pt-8 border-t border-border">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{title}</h2>
        {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
      </div>
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group rounded-xl border border-border bg-card overflow-hidden"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 hover:bg-muted/50 transition-colors gap-4 [&::-webkit-details-marker]:hidden">
              <span className="font-semibold text-foreground text-sm sm:text-base leading-snug">
                {faq.question}
              </span>
              {/* Flecha: rota cuando está abierto */}
              <svg
                className="h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 group-open:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-5 pb-5 pt-3 border-t border-border/50">
              <p className="text-muted-foreground leading-7 text-sm sm:text-base">
                {faq.answer}
              </p>
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
