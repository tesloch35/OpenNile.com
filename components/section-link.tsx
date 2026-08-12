"use client"

import type { MouseEvent, ReactNode } from "react"
import { getSectionIdFromHash, scrollToSection } from "@/lib/scroll-to-section"
import { cn } from "@/lib/utils"

type SectionLinkProps = {
  href: string
  children: ReactNode
  className?: string
  onNavigate?: () => void
}

export function SectionLink({
  href,
  children,
  className,
  onNavigate,
}: SectionLinkProps) {
  const sectionId = getSectionIdFromHash(href)

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()

    if (scrollToSection(sectionId)) {
      window.history.pushState(null, "", href)
      onNavigate?.()
    }
  }

  return (
    <a href={href} onClick={handleClick} className={cn(className)}>
      {children}
    </a>
  )
}
