"use client"

import Image from "next/image"
import { WaitlistForm } from "@/components/waitlist-form"
import { Reveal } from "@/components/reveal"
import {
  Search,
  ShoppingBag,
  MessageSquare,
  ShieldCheck,
  Eye,
  BarChart3,
  Clock,
  TrendingUp,
  Users,
  Store,
  type LucideIcon,
} from "lucide-react"
import { images } from "@/lib/images"

const customerFeatures = [
  {
    icon: Search,
    title: "Discover More Nearby",
    description: "Find businesses, products, and services in your area faster and more easily.",
    image: images.benefits.discover,
  },
  {
    icon: ShoppingBag,
    title: "Discover Local Businesses Near You",
    description: "Find trusted local businesses and explore products in your area — all in one place with OpenNile.",
    image: images.benefits.order,
  },
  {
    icon: MessageSquare,
    title: "Direct Communication",
    description: "Message businesses directly for updates, questions, and support.",
    image: images.benefits.message,
  },
  {
    icon: ShieldCheck,
    title: "In-Store Pickup or Local Delivery",
    description: "Get products from local businesses your way—pick up in-store or have them delivered straight to your door through OpenNile.",
    image: images.benefits.checkout,
  },
]

const businessFeatures = [
  {
    icon: Eye,
    title: "Increase Visibility",
    description: "Reach more customers and grow your presence through OpenNile.",
    image: images.benefits.visibility,
  },
  {
    icon: BarChart3,
    title: "Simplify Operations",
    description: "Manage products, orders, customers, and payouts from one dashboard.",
    image: images.benefits.operations,
  },
  {
    icon: Clock,
    title: "Faster Transactions",
    description: "Accept orders and receive secure payouts efficiently.",
    image: images.benefits.transactions,
  },
  {
    icon: TrendingUp,
    title: "Built for Growth",
    description: "Use modern tools designed to help businesses scale and operate more effectively.",
    image: images.benefits.growth,
  },
]

export function Benefits() {
  return (
    <section id="features" className="scroll-mt-[80px] py-[120px] px-6 bg-cream border-t border-border overflow-visible">
      <div className="max-w-[1120px] mx-auto">
        <Reveal className="text-center mb-[72px]">
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-sienna mb-5 justify-center">
            <span className="w-[18px] h-[1.5px] bg-sienna flex-shrink-0" />
            Features
          </div>
          <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-medium leading-[1.1] tracking-[-0.03em] text-foreground">
            Join OpenNile!
          </h2>
          <p className="text-[17px] text-text2 leading-relaxed max-w-[640px] mx-auto mt-4">
            Everything you need to discover, order, connect, and grow — in one connected ecosystem.
          </p>
        </Reveal>

        <FeaturesSection
          id="features-customers"
          title="For Customers"
          subtitle="Shop Local, Simply"
          description="Discover nearby businesses, browse products, place orders for pickup or delivery, message businesses directly, and checkout securely."
          sectionIcon={Users}
          features={customerFeatures}
          variant="sienna"
        />

        <FeaturesSection
          id="features-businesses"
          title="For Business Owners"
          subtitle="Are You a Business Owner?"
          description="Create a storefront, manage products, receive orders, communicate with customers, and receive secure payouts through a centralized dashboard."
          sectionIcon={Store}
          features={businessFeatures}
          variant="bark"
          className="mt-20"
        />

        <TaglineBanner />
      </div>
    </section>
  )
}

type Feature = {
  icon: LucideIcon
  title: string
  description: string
  image: string
}

function FeaturesSection({
  id,
  title,
  subtitle,
  description,
  sectionIcon: SectionIcon,
  features,
  variant,
  className = "",
}: {
  id: string
  title: string
  subtitle: string
  description: string
  sectionIcon: LucideIcon
  features: Feature[]
  variant: "sienna" | "bark"
  className?: string
}) {
  return (
    <div id={id} className={`scroll-mt-24 ${className}`}>
      <Reveal className="text-center mb-10 max-w-[640px] mx-auto">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div
            className={`w-11 h-11 rounded-xl flex items-center justify-center ${variant === "sienna" ? "bg-sienna/10 border border-sienna/15" : "bg-sienna/10 border border-sienna/15"}`}
          >
            <SectionIcon className="w-5 h-5 text-sienna" strokeWidth={1.5} />
          </div>
          <h3 className="font-serif text-[clamp(24px,3vw,32px)] font-medium tracking-[-0.03em] text-foreground">
            {title}
          </h3>
        </div>
        <h4 className="font-serif text-[20px] font-medium tracking-[-0.02em] text-foreground mb-3">
          {subtitle}
        </h4>
        <p className="text-[15px] text-text2 leading-relaxed">{description}</p>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch py-1">
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            feature={feature}
            variant={variant}
            delay={index * 0.07}
          />
        ))}
      </div>
    </div>
  )
}

function FeatureCard({
  feature,
  variant,
  delay,
}: {
  feature: Feature
  variant: "sienna" | "bark"
  delay: number
}) {
  const Icon = feature.icon

  return (
    <Reveal delay={delay} className="h-full">
      <div className="h-full bg-white border border-border rounded-2xl overflow-hidden flex flex-col transition-all duration-300 ease-smooth hover:border-border-strong hover:shadow-lg md:hover:-translate-y-0.5 group">
        <div className="w-full aspect-[3/2] overflow-hidden relative shrink-0">
          <Image
            src={feature.image}
            alt={feature.title}
            fill
            sizes="(max-width: 768px) 100vw, 540px"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div
            className={`absolute top-4 left-4 w-11 h-11 rounded-xl flex items-center justify-center shadow-md backdrop-blur-sm ${variant === "sienna" ? "bg-white/95 border border-sienna/15" : "bg-white/95 border border-sienna/15"}`}
          >
            <Icon className="w-5 h-5 text-sienna" strokeWidth={1.5} />
          </div>
        </div>

        <div className="p-5 pb-6 flex-1">
          <h4 className="font-serif text-[18px] font-medium tracking-[-0.02em] text-foreground mb-1">
            {feature.title}
          </h4>
          <p className="text-sm text-text2 leading-relaxed">{feature.description}</p>
        </div>
      </div>
    </Reveal>
  )
}

function TaglineBanner() {
  return (
    <Reveal className="mt-14 bg-sienna rounded-[20px] p-10 md:p-13 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden">
      <div className="absolute -top-[100px] -right-20 w-[360px] h-[360px] bg-[radial-gradient(ellipse,rgba(30,215,96,0.25)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10">
        <h3 className="font-serif text-[clamp(24px,3vw,36px)] font-medium tracking-[-0.03em] text-white leading-[1.15] mb-2.5">
          One Platform. Shared Growth.
        </h3>
        <p className="text-[15px] text-white/55 max-w-[440px] leading-relaxed">
          OpenNile brings customers and businesses together through a seamless local commerce experience.
        </p>
      </div>

      <div className="relative z-10 flex-shrink-0 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
        <WaitlistForm
          source="benefits"
          variant="light"
          label="Join as a Customer"
          role="customer"
          className="w-full sm:w-auto text-center"
        />
        <WaitlistForm
          source="benefits"
          variant="outline-light"
          label="List Your Business"
          role="business"
          className="w-full sm:w-auto"
        />
      </div>
    </Reveal>
  )
}
