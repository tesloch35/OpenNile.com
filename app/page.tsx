import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ValueStrip } from "@/components/value-strip"
import { WhatWeDo } from "@/components/what-we-do"
import { HowItWorks } from "@/components/how-it-works"
import { Benefits } from "@/components/benefits"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { StructuredData } from "@/components/structured-data"
import { HashScrollHandler } from "@/components/hash-scroll-handler"
import { WaitlistProvider } from "@/components/waitlist-form"

export default function Home() {
  return (
    <WaitlistProvider>
      <HashScrollHandler />
      <StructuredData />
      <main>
        <Navbar />
        <Hero />
        <ValueStrip />
        <WhatWeDo />
        <HowItWorks />
        <Benefits />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </WaitlistProvider>
  )
}
