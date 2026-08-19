"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { SectionLink } from "@/components/section-link"
import { Logo } from "@/components/logo"
import { WaitlistForm } from "@/components/waitlist-form"
import { useActiveSection } from "@/hooks/use-active-section"
import { lockPageScroll, unlockPageScroll } from "@/lib/page-scroll"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About Us", href: "#about-us", id: "about-us" },
  { label: "Features", href: "#features", id: "features" },
  { label: "FAQ", href: "#faq", id: "faq" },
  { label: "Contact", href: "#contact", id: "contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeId = useActiveSection(navLinks.map((link) => link.id))

  useEffect(() => {
    if (!mobileOpen) return

    lockPageScroll()
    return () => {
      if (!document.querySelector('[role="dialog"][data-state="open"]')) {
        unlockPageScroll()
      }
    }
  }, [mobileOpen])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[68px] bg-white/92 backdrop-blur-[18px] border-b border-border">
      <div className="h-full max-w-[1120px] mx-auto px-6 md:px-8 flex items-center justify-between">
        <SectionLink href="#home">
          <Logo />
        </SectionLink>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <SectionLink
                href={link.href}
                className={cn(
                  "relative text-sm font-medium transition-colors tracking-[0.01em] pb-1",
                  activeId === link.id
                    ? "text-foreground"
                    : "text-text2 hover:text-text"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute left-0 right-0 -bottom-0.5 h-[2px] rounded-full transition-opacity",
                    activeId === link.id ? "bg-sienna opacity-100" : "opacity-0"
                  )}
                />
              </SectionLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <WaitlistForm source="navbar" variant="nav" showArrow />

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-border-strong text-foreground hover:bg-sand transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="absolute top-[68px] left-0 right-0 bg-white border-b border-border shadow-lg md:hidden animate-menu-in origin-top">
          <ul className="flex flex-col px-6 py-4">
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                className="animate-menu-in"
                style={{ animationDelay: `${0.05 + index * 0.04}s` }}
              >
                <SectionLink
                  href={link.href}
                  onNavigate={() => setMobileOpen(false)}
                  className={cn(
                    "block py-3 text-sm font-medium transition-colors border-b border-border last:border-0",
                    activeId === link.id
                      ? "text-foreground"
                      : "text-text2 hover:text-text"
                  )}
                >
                  {link.label}
                </SectionLink>
              </li>
            ))}
            <li className="pt-4">
              <WaitlistForm
                source="navbar"
                variant="hero"
                className="w-full"
                showArrow
                onTrigger={() => setMobileOpen(false)}
              />
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
