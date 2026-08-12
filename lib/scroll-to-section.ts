export const NAVBAR_HEIGHT = 68

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (!element) return false

  const top =
    element.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT - 12

  window.scrollTo({
    top: Math.max(0, top),
    behavior: prefersReducedMotion() ? "auto" : "smooth",
  })

  return true
}

export function getSectionIdFromHash(hash: string) {
  return hash.startsWith("#") ? hash.slice(1) : hash
}
