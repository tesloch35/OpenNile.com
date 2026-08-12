import { BRAND } from "@/lib/constants"
import { buildFaqSchema } from "@/lib/faq-data"

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND.name,
    legalName: BRAND.legalName,
    url: BRAND.url,
    logo: `${BRAND.url}/logo.png`,
    description: BRAND.aiCitation,
    foundingDate: "2024",
    areaServed: [
      {
        "@type": "Country",
        name: "United States",
      },
      {
        "@type": "State",
        name: BRAND.locationFull,
        containedInPlace: {
          "@type": "Country",
          name: "United States",
        },
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: BRAND.email,
      telephone: BRAND.phone,
      areaServed: "US",
      availableLanguage: "English",
    },
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BRAND.name,
    url: BRAND.url,
    description: BRAND.seoDescription,
  }

  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: BRAND.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "iOS, Android, Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/PreOrder",
    },
    description:
      "Local commerce platform launching in Minnesota for discovering businesses, ordering products, and supporting your community. Pre-launch waitlist open for customers and business owners.",
    featureList: [
      "Discover local businesses",
      "Browse products and services",
      "Order for pickup or delivery",
      "Secure checkout",
      "Direct messaging with businesses",
      "Business management tools",
    ],
  }

  const launchPlaceSchema = {
    "@context": "https://schema.org",
    "@type": "State",
    name: BRAND.locationFull,
    description: `${BRAND.name} launch market — local commerce platform connecting customers with nearby businesses.`,
    address: {
      "@type": "PostalAddress",
      addressRegion: "MN",
      addressCountry: "US",
    },
    containedInPlace: {
      "@type": "Country",
      name: "United States",
    },
  }

  const faqSchema = buildFaqSchema()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(launchPlaceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
