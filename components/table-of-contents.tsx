'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, List } from 'lucide-react'

interface TOCItem {
  id: string
  text: string
  level: number
}

export function TableOfContents({ content }: { content: string }) {
  const [isOpen, setIsOpen] = useState(true)

  // Extract headings from markdown content
  const headings: TOCItem[] = []
  const lines = content.split('\n')
  for (const line of lines) {
    const match = line.match(/^(#{2,3})\s+(.+)/)
    if (match) {
      const level = match[1].length
      const text = match[2].replace(/[*_`]/g, '').trim()
      const id = text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim()
      headings.push({ id, text, level })
    }
  }

  if (headings.length < 3) return null

  return (
    <nav className="my-8 rounded-xl border border-border bg-muted/30 p-5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left"
      >
        <div className="flex items-center gap-2">
          <List className="h-5 w-5 text-primary" />
          <span className="text-lg font-semibold text-foreground">Contenido del artículo</span>
        </div>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-muted-foreground" />
        ) : (
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        )}
      </button>
      {isOpen && (
        <ol className="mt-4 space-y-2 border-l-2 border-primary/20 pl-4">
          {headings.map((heading, idx) => (
            <li key={idx} className={heading.level === 3 ? 'ml-4' : ''}>
              <a
                href={`#${heading.id}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors leading-relaxed"
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ol>
      )}
    </nav>
  )
}
