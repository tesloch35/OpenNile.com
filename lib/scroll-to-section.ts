export const NAVBAR_HEIGHT = 68

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

function cancelSmoothScroll() {
  window.scrollTo({ top: window.scrollY, behavior: "auto" })
}

export function scrollToSection(
  sectionId: string,
  behavior: ScrollBehavior = prefersReducedMotion() ? "auto" : "smooth"
) {
  const element = document.getElementById(sectionId)
  if (!element) return false

  if (behavior === "smooth") {
    cancelSmoothScroll()
  }

  element.scrollIntoView({ behavior, block: "start" })
  return true
}

export function getSectionIdFromHash(hash: string) {
  return hash.startsWith("#") ? hash.slice(1) : hash
}
