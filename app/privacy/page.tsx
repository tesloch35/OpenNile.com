import type { Metadata } from "next"
import Link from "next/link"
import { BRAND } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Privacy Policy — OpenNile",
  description: "How OpenNile collects, uses, and protects your information.",
}

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="text-sm text-text3 mb-10">Last updated: June 19, 2026</p>

        <div className="prose-section flex flex-col gap-8 text-[15px] text-text2 leading-relaxed">
          <section>
            <h2 className="font-serif text-xl font-medium text-bark mb-3">Overview</h2>
            <p>
              {BRAND.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy. This policy explains what information we collect when you visit our website or join our waitlist, and how we use it.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-bark mb-3">Information We Collect</h2>
            <p>When you join our waitlist or contact us, we may collect:</p>
            <ul className="list-disc pl-5 mt-2 flex flex-col gap-1">
              <li>Email address</li>
              <li>Full name</li>
              <li>Phone number</li>
              <li>Whether you are a customer or business owner</li>
              <li>Business name (for business owners)</li>
              <li>Any message you choose to send us</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-bark mb-3">How We Use Your Information</h2>
            <p>We use the information you provide to:</p>
            <ul className="list-disc pl-5 mt-2 flex flex-col gap-1">
              <li>Manage our waitlist and notify you about launch updates</li>
              <li>Respond to your inquiries</li>
              <li>Improve our platform and communications</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-bark mb-3">Analytics</h2>
            <p>
              We use Vercel Analytics to collect anonymous usage data (such as page views) to understand how visitors use our website. This service does not use cookies for tracking and does not collect personally identifiable information. Learn more in{" "}
              <a
                href="https://vercel.com/docs/analytics/privacy-policy"
                className="text-sienna hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vercel&apos;s Analytics privacy policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-bark mb-3">Data Sharing</h2>
            <p>
              We do not sell your personal information. We may share data with trusted service providers who help us operate our website, subject to confidentiality obligations.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-bark mb-3">Contact Us</h2>
            <p>
              Questions about this policy? Email us at{" "}
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
