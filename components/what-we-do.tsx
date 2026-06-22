"use client"

import Image from "next/image"
import { Check } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { BRAND } from "@/lib/constants"
import { images } from "@/lib/images"

const missionPoints = [
  "Connect customers with trusted local businesses in one app",
  "Make discovery, ordering, messaging, and payments seamless",
  `Launch first in ${BRAND.location}, then expand across the United States`,
]

export function WhatWeDo() {
  return (
    <section id="about-us" className="py-[120px] px-6 bg-white border-t border-border">
      <div className="max-w-[1120px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,280px)_1fr] gap-10 md:gap-14 lg:gap-16 items-center">
          <Reveal direction="left" className="relative mx-auto md:mx-0 w-full max-w-[280px] flex-shrink-0 bg-transparent">
            <Image
              src={images.whatWeDo.app}
              alt="OpenNile app showing local product discovery"
              width={388}
              height={799}
              sizes="(max-width: 768px) 280px, 388px"
              className="w-full h-auto bg-transparent"
            />
          </Reveal>

          <Reveal delay={0.1} className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-sienna mb-5 justify-center md:justify-start">
              <span className="w-[18px] h-[1.5px] bg-sienna flex-shrink-0" />
              About Us
            </div>
            <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-medium leading-[1.1] tracking-[-0.03em] text-bark">
              One Platform for Local Commerce
            </h2>
            <p className="text-[17px] text-text2 leading-relaxed max-w-[640px] mt-4 mx-auto md:mx-0">
              OpenNile connects customers with businesses through discovery, ordering, payments, and business management — all in one seamless experience.
            </p>

            <p className="text-[15px] text-text2 leading-relaxed max-w-[640px] mt-5 mx-auto md:mx-0 border-l-2 border-sienna/25 pl-4">
              {BRAND.aiCitation}
            </p>

            <ul className="mt-8 flex flex-col gap-3 max-w-[560px] mx-auto md:mx-0">
              {missionPoints.map((point, index) => (
                <Reveal key={point} delay={0.15 + index * 0.08} direction="right">
                  <li className="flex items-start gap-3 text-left">
                    <span className="w-6 h-6 flex-shrink-0 rounded-full bg-sienna/10 border border-sienna/15 flex items-center justify-center mt-0.5">
                      <Check className="w-3.5 h-3.5 text-sienna" strokeWidth={2.5} />
                    </span>
                    <span className="text-[15px] text-text2 leading-relaxed">{point}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
