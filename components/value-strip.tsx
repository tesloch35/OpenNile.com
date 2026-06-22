"use client"

import { Reveal } from "@/components/reveal"

export function ValueStrip() {
  const values = ["Discover", "Order", "Connect", "Pay"]

  return (
    <div className="bg-bark py-[22px] px-10 text-center relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 60px)`,
        }}
      />

      <div className="relative z-10">
        <Reveal>
          <p className="font-serif text-[13px] font-medium italic text-white tracking-[0.04em] mb-3">
            Everything Local, All in One Place
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-xs text-white mb-3 tracking-wide">
            Customers and local businesses — get early access before launch
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="flex items-center justify-center flex-wrap">
            {values.map((value, index) => (
              <span
                key={value}
                className="font-sans text-[13px] font-semibold tracking-[0.1em] uppercase text-white px-6 flex items-center gap-6"
              >
                {value}
                {index < values.length - 1 && (
                  <span className="w-1 h-1 rounded-full bg-white flex-shrink-0" />
                )}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  )
}
