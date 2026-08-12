"use client"

import { useState } from "react"
import { Reveal } from "@/components/reveal"
import { ChevronDown } from "lucide-react"
import { faqs, type FaqItem } from "@/lib/faq-data"

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-[80px] py-[120px] px-6 bg-white border-t border-border">
      <div className="max-w-[760px] mx-auto">
        <Reveal className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-sienna mb-5 justify-center">
            <span className="w-[18px] h-[1.5px] bg-sienna flex-shrink-0" />
            FAQ
          </div>
          <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-medium leading-[1.1] tracking-[-0.03em] text-bark">
            Common Questions
          </h2>
        </Reveal>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <FAQItem key={faq.question} faq={faq} delay={index * 0.05} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({
  faq,
  delay,
}: {
  faq: FaqItem
  delay: number
}) {
  const [open, setOpen] = useState(false)

  return (
    <Reveal delay={delay}>
      <div className="border border-border rounded-2xl overflow-hidden transition-colors duration-300 hover:border-border-strong">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-sand/50 transition-colors duration-300"
        >
          <span className="font-serif text-[17px] font-medium text-bark tracking-[-0.01em]">
            {faq.question}
          </span>
          <ChevronDown
            className={`w-5 h-5 text-sienna flex-shrink-0 transition-transform duration-300 ease-smooth ${open ? "rotate-180" : ""}`}
          />
        </button>
        <div className="accordion-content" data-open={open}>
          <div className="overflow-hidden">
            <div className="px-6 pb-5 text-[15px] text-text2 leading-relaxed border-t border-border bg-sand/30">
              <p className="pt-4">{faq.answer}</p>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  )
}
