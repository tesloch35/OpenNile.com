import type { Metadata } from "next"
import Link from "next/link"
import { BRAND } from "@/lib/constants"
import { createShareMetadata } from "@/lib/share-metadata"

export const metadata: Metadata = createShareMetadata({
  title: "Terms of Service — OpenNile",
  description:
    "Terms governing use of the OpenNile website, mobile applications, business platform, and services.",
  path: "/terms",
})

function SectionDivider() {
  return <hr className="border-border" />
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-5 mt-2 flex flex-col gap-1">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
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

        <h1 className="font-serif text-[clamp(32px,4vw,48px)] font-medium text-foreground tracking-[-0.03em] mt-8 mb-4">
          OpenNile Terms of Service
        </h1>

        <div className="text-sm text-text3 flex flex-col gap-1 mb-6">
          <p>Effective Date: Aug 19, 2026</p>
          <p>Last Updated: Aug 19, 2026</p>
        </div>

        <div className="prose-section flex flex-col gap-8 text-[15px] text-text2 leading-relaxed">
          <section>
            <h2 className="font-serif text-lg font-medium text-foreground mb-3">Applies to</h2>
            <BulletList
              items={[
                "OpenNile Website",
                "OpenNile Mobile Applications (iOS and Android)",
                "OpenNile for Business Platform",
                "All OpenNile services, products, tools, and features",
              ]}
            />
          </section>

          <SectionDivider />

          <section>
            <h2 className="font-serif text-xl font-medium text-foreground mb-3">
              1. Introduction
            </h2>
            <p>Welcome to OpenNile.</p>
            <p className="mt-3">
              OpenNile (&quot;OpenNile,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
              provides a digital marketplace and business platform that allows customers and
              businesses to connect, discover products and services, communicate, complete
              transactions, and grow through digital tools.
            </p>
            <p className="mt-3">
              These Terms of Service (&quot;Terms&quot;) establish the rules, responsibilities,
              and legal agreement between OpenNile and any person or business accessing or using
              our Services.
            </p>
            <p className="mt-3">
              By accessing, downloading, creating an account, browsing, purchasing, selling,
              advertising, or otherwise using OpenNile, you agree to be legally bound by these
              Terms.
            </p>
            <p className="mt-3">
              If you do not agree with any part of these Terms, you must stop using OpenNile
              immediately.
            </p>
          </section>

          <SectionDivider />

          <section>
            <h2 className="font-serif text-xl font-medium text-foreground mb-3">
              2. Acceptance of Terms
            </h2>
            <p>By using OpenNile, you confirm that:</p>
            <BulletList
              items={[
                "You have read and understood these Terms.",
                "You agree to follow these Terms.",
                "You agree to follow all applicable laws and regulations.",
                "You understand that OpenNile may update these Terms from time to time.",
              ]}
            />
            <p className="mt-3">These Terms apply whether you access OpenNile through:</p>
            <BulletList
              items={[
                "A web browser",
                "A mobile application",
                "A tablet",
                "A computer",
                "Any future platform or technology",
              ]}
            />
            <p className="mt-3">
              Your continued use of OpenNile after changes are posted means you accept the
              updated Terms.
            </p>
          </section>

          <SectionDivider />

          <section>
            <h2 className="font-serif text-xl font-medium text-foreground mb-3">
              3. Definitions
            </h2>
            <p className="mb-4">For these Terms:</p>
            <dl className="flex flex-col gap-4">
              <div>
                <dt className="font-medium text-foreground">&quot;OpenNile&quot;</dt>
                <dd className="mt-1">
                  Means the OpenNile platform, including its website, applications, software,
                  services, employees, affiliates, and technology.
                </dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">&quot;User&quot;</dt>
                <dd className="mt-1">Means any individual accessing or using OpenNile.</dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">&quot;Customer&quot;</dt>
                <dd className="mt-1">
                  Means a user who browses, purchases, or interacts with businesses through
                  OpenNile.
                </dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">&quot;Business&quot;</dt>
                <dd className="mt-1">
                  Means a company, organization, merchant, professional, or individual offering
                  products or services through OpenNile.
                </dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">&quot;OpenNile for Business&quot;</dt>
                <dd className="mt-1">
                  Means the business tools and services provided by OpenNile to businesses.
                </dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">&quot;Business Badge&quot;</dt>
                <dd className="mt-1">
                  Means an OpenNile recognition feature that may provide businesses with
                  additional visibility, tools, promotional opportunities, and platform benefits.
                </dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">&quot;Transaction Fee&quot;</dt>
                <dd className="mt-1">
                  Means the fee charged to customers for eligible transactions completed through
                  OpenNile.
                </dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">&quot;Content&quot;</dt>
                <dd className="mt-1">
                  Means any information uploaded or provided through OpenNile, including:
                </dd>
                <BulletList
                  items={[
                    "Photos",
                    "Videos",
                    "Text",
                    "Product information",
                    "Business information",
                    "Reviews",
                    "Messages",
                    "Logos",
                  ]}
                />
              </div>
              <div>
                <dt className="font-medium text-foreground">&quot;Stripe&quot;</dt>
                <dd className="mt-1">
                  Means Stripe, Inc., the third-party payment processor used to process payments.
                </dd>
              </div>
            </dl>
          </section>

          <SectionDivider />

          <section>
            <h2 className="font-serif text-xl font-medium text-foreground mb-3">
              4. Eligibility to Use OpenNile
            </h2>
            <p>To use OpenNile, you must:</p>
            <BulletList
              items={[
                "Meet the minimum legal age requirement in your location.",
                "Have the authority to enter into this agreement.",
                "Provide truthful information.",
                "Follow applicable laws.",
              ]}
            />
            <p className="mt-3">Businesses must ensure that:</p>
            <BulletList
              items={[
                "They are legally authorized to operate.",
                "Their business information is accurate.",
                "Their products and services comply with regulations.",
              ]}
            />
            <p className="mt-3">
              OpenNile may restrict access to users who do not meet eligibility requirements.
            </p>
          </section>

          <SectionDivider />

          <section>
            <h2 className="font-serif text-xl font-medium text-foreground mb-3">
              5. OpenNile Account Registration
            </h2>
            <p>Some features require an account.</p>
            <p className="mt-3">When creating an account, you agree to:</p>
            <BulletList
              items={[
                "Provide accurate information.",
                "Maintain updated information.",
                "Protect your login credentials.",
                "Keep your account secure.",
                "Notify OpenNile of unauthorized access.",
              ]}
            />
            <p className="mt-3">You are responsible for activity under your account.</p>
            <p className="mt-3">You may not:</p>
            <BulletList
              items={[
                "Create false accounts.",
                "Pretend to be another person.",
                "Create accounts for fraudulent purposes.",
                "Share accounts in a way that creates security risks.",
              ]}
            />
            <p className="mt-3">OpenNile reserves the right to verify account information.</p>
          </section>

          <SectionDivider />

          <section>
            <h2 className="font-serif text-xl font-medium text-foreground mb-3">
              6. OpenNile Services
            </h2>
            <p>OpenNile provides users with access to digital marketplace features, including:</p>
            <BulletList
              items={[
                "Business discovery",
                "Product and service browsing",
                "Customer-business communication",
                "Purchasing tools",
                "Reviews and ratings",
                "Business profiles",
                "Advertising features",
                "Business growth tools",
              ]}
            />
            <p className="mt-3">
              OpenNile may modify, improve, add, or remove features at any time.
            </p>
            <p className="mt-3">
              We may introduce new services, optional tools, or paid features in the future.
            </p>
          </section>

          <SectionDivider />

          <section>
            <h2 className="font-serif text-xl font-medium text-foreground mb-3">Contact</h2>
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
