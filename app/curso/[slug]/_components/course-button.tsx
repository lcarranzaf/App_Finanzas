'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'

interface CourseButtonProps {
  udemyUrl: string
}

const COUNTDOWN_SECONDS = 10

export function CourseButton({ udemyUrl }: CourseButtonProps) {
  const [secondsLeft, setSecondsLeft] = useState(COUNTDOWN_SECONDS)
  const ready = secondsLeft === 0

  useEffect(() => {
    if (ready) return
    const timer = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(timer)
          return 0
        }
        return s - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [ready])

  return (
    <div className="flex flex-col items-center gap-3 w-full">
      <Button
        asChild={ready}
        disabled={!ready}
        size="lg"
        className="w-full max-w-sm text-base transition-all"
      >
        {ready ? (
          <a href={udemyUrl} target="_blank" rel="noopener noreferrer sponsored">
            Ir al curso en Udemy
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        ) : (
          <span>
            Espera {secondsLeft} segundo{secondsLeft !== 1 ? 's' : ''}...
          </span>
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        {ready
          ? 'Serás dirigido a Udemy. Los cupones tienen disponibilidad limitada.'
          : 'El enlace se activará en un momento.'}
      </p>
    </div>
  )
}
