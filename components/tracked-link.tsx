"use client"

import Link, { LinkProps } from "next/link"
import type { HTMLAttributeAnchorTarget, MouseEventHandler, ReactNode } from "react"
import { trackEvent, type AnalyticsEventParams } from "@/lib/analytics"

interface TrackedLinkProps extends LinkProps {
  children: ReactNode
  eventName: string
  eventParams?: AnalyticsEventParams
  className?: string
  target?: HTMLAttributeAnchorTarget
  rel?: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

export function TrackedLink({
  children,
  eventName,
  eventParams,
  onClick,
  ...props
}: TrackedLinkProps) {
  const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    trackEvent(eventName, eventParams)
    onClick?.(event)
  }

  return (
    <Link {...props} onClick={handleClick}>
      {children}
    </Link>
  )
}

