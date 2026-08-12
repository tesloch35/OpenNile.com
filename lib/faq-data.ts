import { BRAND } from "@/lib/constants"

export const faqs = [
  {
    question: "What is OpenNile?",
    answer:
      "OpenNile is a local commerce platform that connects customers with local businesses across the United States. Discover nearby shops, browse products, place orders for pickup or delivery, message businesses, and pay securely — all in one place.",
  },
  {
    question: "Is OpenNile free for customers?",
    answer:
      "Yes. OpenNile is free for customers. You can discover local businesses, browse products, and place orders without any platform fees.",
  },
  {
    question: "How do local businesses join OpenNile?",
    answer:
      "Businesses can join by signing up on our waitlist. We offer straightforward onboarding, storefront tools, and transparent pricing to help you reach more local customers.",
  },
  {
    question: "Where is OpenNile available?",
    answer: `We're launching first in ${BRAND.location} and expanding across the United States. Join the waitlist to be notified when OpenNile arrives in your area.`,
  },
  {
    question: "How does OpenNile help local businesses grow?",
    answer:
      "OpenNile helps businesses get discovered by nearby customers, manage orders efficiently, accept secure payments, and build direct relationships through messaging — all from one dashboard.",
  },
] as const

export type FaqItem = (typeof faqs)[number]

export function buildFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}
