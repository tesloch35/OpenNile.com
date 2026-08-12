"use client"

import Link from "next/link"
import { Reveal } from "@/components/reveal"
import { ContactForm } from "@/components/contact-form"
import { BRAND } from "@/lib/constants"
import { Mail, Phone, MapPin } from "lucide-react"

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: BRAND.email,
    href: `mailto:${BRAND.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: BRAND.phone,
    href: BRAND.phoneHref,
  },
  {
    icon: MapPin,
    label: "Location",
    value: BRAND.location,
    href: null,
  },
]

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-[80px] py-[120px] px-6 bg-white border-t border-border">
      <div className="max-w-[1120px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <ContactInfo />

          <Reveal delay={0.1} className="bg-sand border border-border rounded-3xl p-8 md:p-10">
            <h3 className="font-serif text-[clamp(24px,3vw,32px)] font-medium tracking-[-0.03em] text-bark mb-2">
              Send us a message
            </h3>
            <p className="text-[15px] text-text2 leading-relaxed mb-8">
              Questions, partnerships, or feedback — fill out the form and our team will follow up.
            </p>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function ContactInfo() {
  return (
    <div>
      <Reveal>
        <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-sienna mb-5">
          <span className="w-[18px] h-[1.5px] bg-sienna flex-shrink-0" />
          Contact
        </div>
        <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-medium leading-[1.1] tracking-[-0.03em] text-bark">
          Get in Touch
        </h2>
        <p className="text-[17px] text-text2 leading-relaxed max-w-[440px] mt-4">
          Reach out about OpenNile, local business partnerships, or getting early access. We read every message.
        </p>
      </Reveal>

      <div className="mt-12 flex flex-col">
        {contactItems.map((item, index) => (
          <ContactItem key={item.label} item={item} delay={index * 0.08} />
        ))}
      </div>
    </div>
  )
}

function ContactItem({ item, delay }: { item: typeof contactItems[0]; delay: number }) {
  const Icon = item.icon

  return (
    <Reveal delay={delay}>
      <div className="flex items-start gap-4 py-6 border-b border-border first:border-t">
      <div className="w-10 h-10 flex-shrink-0 mt-0.5 rounded-lg bg-sand border border-border-strong flex items-center justify-center">
        <Icon className="w-[18px] h-[18px] text-stone" strokeWidth={1.5} />
      </div>
      <div>
        <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-text3 mb-1 block">
          {item.label}
        </span>
        <div className="text-[15px] font-medium text-bark">
          {item.href ? (
            <Link href={item.href} className="hover:text-sienna transition-colors">
              {item.value}
            </Link>
          ) : (
            <span>{item.value}</span>
          )}
        </div>
      </div>
      </div>
    </Reveal>
  )
}
