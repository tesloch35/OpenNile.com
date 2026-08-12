"use client"

import { useEffect } from "react"
import { getSectionIdFromHash, scrollToSection } from "@/lib/scroll-to-section"

export function HashScrollHandler() {
  useEffect(() => {
    const scrollToCurrentHash = () => {
      const sectionId = getSectionIdFromHash(window.location.hash)
      if (!sectionId) return

      requestAnimationFrame(() => {
        scrollToSection(sectionId)
      })
    }

    scrollToCurrentHash()
    window.addEventListener("hashchange", scrollToCurrentHash)

    return () => {
      window.removeEventListener("hashchange", scrollToCurrentHash)
    }
  }, [])

  return null
}
