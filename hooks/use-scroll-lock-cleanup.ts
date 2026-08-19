"use client"

import { useEffect } from "react"
import { unlockPageScroll } from "@/lib/page-scroll"

export function useScrollLockCleanup(active: boolean) {
  useEffect(() => {
    if (active) return

    unlockPageScroll()

    return () => {
      unlockPageScroll()
    }
  }, [active])
}
