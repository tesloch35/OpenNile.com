"use client"

import { useEffect } from "react"
import { unlockPageScroll } from "@/lib/page-scroll"

function hasOpenOverlay() {
  return Boolean(document.querySelector('[role="dialog"][data-state="open"]'))
}

export function ScrollGuard() {
  useEffect(() => {
    unlockPageScroll()

    const handleFocus = () => {
      if (!hasOpenOverlay()) {
        unlockPageScroll()
      }
    }
    window.addEventListener("focus", handleFocus)

    return () => {
      window.removeEventListener("focus", handleFocus)
      if (!hasOpenOverlay()) {
        unlockPageScroll()
      }
    }
  }, [])

  return null
}
