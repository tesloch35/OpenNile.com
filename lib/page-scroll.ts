export function lockPageScroll() {
  if (typeof document === "undefined") return

  document.body.style.overflow = "hidden"
}

export function unlockPageScroll() {
  if (typeof document === "undefined") return

  const { body, documentElement } = document

  body.style.removeProperty("overflow")
  body.style.removeProperty("padding-right")
  body.style.removeProperty("margin-right")
  body.style.removeProperty("pointer-events")
  body.style.removeProperty("position")
  documentElement.style.removeProperty("overflow")
  body.removeAttribute("data-scroll-locked")
}
