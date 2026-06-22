"use client"

import { Search, ShoppingBag, MessageSquare } from "lucide-react"
import { Reveal } from "@/components/reveal"

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "Browse local businesses, products, and services near you.",
  },
  {
    icon: ShoppingBag,
    title: "Order",
    description: "Place pickup or delivery orders through one simple experience.",
  },
  {
    icon: MessageSquare,
    title: "Connect & Pay",
    description: "Message businesses directly and checkout securely.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-16 md:py-20 px-6 bg-sand border-t border-border">
      <div className="max-w-[1120px] mx-auto">
        <Reveal className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-sienna mb-4 justify-center">
            <span className="w-[18px] h-[1.5px] bg-sienna flex-shrink-0" />
            How It Works
          </div>
          <h2 className="font-serif text-[clamp(28px,3.5vw,40px)] font-medium leading-[1.1] tracking-[-0.03em] text-bark">
            Local shopping, simplified
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch py-1">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <Reveal key={step.title} delay={index * 0.1} className="h-full">
                <div className="relative bg-white border border-border rounded-2xl p-6 text-center transition-all duration-300 ease-smooth hover:border-border-strong hover:shadow-lg md:hover:-translate-y-0.5 h-full">
                  <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-text3 mb-4 block">
                    Step {index + 1}
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-sienna/10 border border-sienna/15 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-5 h-5 text-sienna" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-[20px] font-medium tracking-[-0.02em] text-bark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text2 leading-relaxed">{step.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
