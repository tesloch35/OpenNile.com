"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: "fast" | "normal" | "slow"
  threshold?: number
  as?: "div" | "section" | "li" | "span" | "p" | "h2" | "h3"
}

const directionHidden = {
  up: "translate-y-8",
  down: "-translate-y-8",
  left: "translate-x-8",
  right: "-translate-x-8",
  none: "",
} as const

const durationMs = {
  fast: "duration-500",
  normal: "duration-700",
  slow: "duration-1000",
} as const

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = "normal",
  threshold = 0.08,
  as: Tag = "div",
}: RevealProps) {
  const { ref, inView } = useInView({ threshold, triggerOnce: true })

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
      className={cn(
        "overflow-visible transition-all ease-smooth motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-x-0 motion-reduce:translate-y-0",
        durationMs[duration],
        inView ? "opacity-100 translate-x-0 translate-y-0" : cn("opacity-0", directionHidden[direction]),
        className
      )}
    >
      {children}
    </Tag>
  )
}
