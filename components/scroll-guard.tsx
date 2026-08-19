"use client"

import { useEffect } from "react"
import { unlockPageScroll } from "@/lib/page-scroll"

export function ScrollGuard() {
  useEffect(() => {
    unlockPageScroll()

    const handleFocus = () => unlockPageScroll()
    window.addEventListener("focus", handleFocus)

    return () => {
      window.removeEventListener("focus", handleFocus)
      unlockPageScroll()
    }
  }, [])

  return null
}
