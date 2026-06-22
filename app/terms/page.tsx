import type { Metadata } from "next"
import Link from "next/link"
import { BRAND } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Terms of Service — OpenNile",
  description: "Terms governing use of the OpenNile website and waitlist.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-[720px] mx-auto px-6 py-16 md:py-24">
        <Link
          href="/"
          className="text-sm font-medium text-sienna hover:text-sienna-dark transition-colors"
        >
          ← Back to OpenNile
        </Link>

        <h1 className="font-serif text-[clamp(32px,4vw,48px)] font-medium text-bark tracking-[-0.03em] mt-8 mb-4">
          Terms of Service
        </h1>
        <p className="text-sm text-text3 mb-10">Last updated: June 8, 2026</p>

        <div className="prose-section flex flex-col gap-8 text-[15px] text-text2 leading-relaxed">
          <section>
            <h2 className="font-serif text-xl font-medium text-bark mb-3">Agreement</h2>
            <p>
              By accessing the {BRAND.name} website or joining our waitlist, you agree to these Terms of Service. If you do not agree, please do not use our site or submit your information.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-bark mb-3">Waitlist & Pre-Launch</h2>
            <p>
              {BRAND.name} is currently in pre-launch. Joining the waitlist does not guarantee access, availability in your area, or any specific launch date. We may contact you with updates about the platform.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-bark mb-3">Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-5 mt-2 flex flex-col gap-1">
              <li>Submit false or misleading information through our forms</li>
              <li>Attempt to disrupt, scrape, or reverse engineer the website</li>
              <li>Use the site for unlawful purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-bark mb-3">Intellectual Property</h2>
            <p>
              All content on this website — including text, branding, graphics, and software — is owned by ThirtyFive Studio, LLC or its licensors and may not be copied or reused without permission.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-bark mb-3">Disclaimer</h2>
            <p>
              The website and waitlist are provided on an &quot;as is&quot; basis. We make no warranties about uninterrupted access or error-free operation during pre-launch.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-bark mb-3">Contact</h2>
            <p>
              Questions about these terms? Email us at{" "}
              <a href={`mailto:${BRAND.email}`} className="text-sienna hover:underline">
                {BRAND.email}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
