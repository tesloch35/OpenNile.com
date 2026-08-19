"use client"

import Link from "next/link"
import { Reveal } from "@/components/reveal"
import { SectionLink } from "@/components/section-link"
import { Logo } from "@/components/logo"
import { BRAND } from "@/lib/constants"

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about-us" },
  { label: "Features", href: "#features" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="bg-sienna py-16 pb-9 px-6">
      <div className="max-w-[1120px] mx-auto">
        <Reveal>
          <div className="mb-12 pb-12 border-b border-white/10">
            <SectionLink href="#home" className="inline-block mb-1">
              <Logo variant="light" iconClassName="h-16 w-16" />
            </SectionLink>
            <p className="text-sm text-white leading-relaxed mt-3.5 max-w-[320px]">
              {BRAND.tagline}
            </p>

            <nav aria-label="Footer navigation" className="mt-8">
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <SectionLink
                      href={link.href}
                      className="text-sm text-white hover:text-white/90 transition-colors duration-300"
                    >
                      {link.label}
                    </SectionLink>
                  </li>
                ))}
              </ul>
            </nav>

            <ul className="flex flex-col gap-2.5 mt-8">
              <li>
                <Link
                  href={`mailto:${BRAND.email}`}
                  className="text-sm text-white hover:text-white/90 transition-colors duration-300"
                >
                  {BRAND.email}
                </Link>
              </li>
              <li>
                <Link
                  href={BRAND.phoneHref}
                  className="text-sm text-white hover:text-white/90 transition-colors duration-300"
                >
                  {BRAND.phone}
                </Link>
              </li>
              <li>
                <span className="text-sm text-white">{BRAND.location}</span>
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-5">
            <p className="text-xs text-white text-center sm:text-left">
              &copy; 2026 ThirtyFive Studio, LLC. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              <Link href="/privacy" className="text-xs text-white hover:text-white/90 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-white hover:text-white/90 transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}
