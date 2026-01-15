'use client'

import { useState, useEffect } from 'react'

interface LazyLoadProps {
  children: React.ReactNode
  offset?: number
  placeholder?: React.ReactNode
}

export function LazyLoad({ children, offset = 200, placeholder }: LazyLoadProps) {
  const [isInView, setIsInView] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: `${offset}px`,
      }
    )

    const element = document.getElementById('lazy-load-trigger')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [offset, isClient])

  if (!isClient) {
    return <>{placeholder || children}</>
  }

  return (
    <>
      <div id="lazy-load-trigger" style={{ position: 'absolute', bottom: offset }} />
      {isInView ? children : placeholder}
    </>
  )
}

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
}

export function LazyImage({ src, alt, className, width = 800, height = 600 }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={`relative ${className} bg-muted/20`}>
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-muted/30 to-muted/50" />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  )
}
