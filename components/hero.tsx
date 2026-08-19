import Image from "next/image"
import { SectionLink } from "@/components/section-link"
import { WaitlistForm } from "@/components/waitlist-form"
import { BRAND } from "@/lib/constants"
import { images } from "@/lib/images"

export function Hero() {
  return (
    <section id="home" className="scroll-mt-[80px] flex flex-col items-center justify-center text-center px-6 pt-[100px] pb-12 md:pb-20 md:min-h-screen relative bg-white">
      <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(ellipse,rgba(29,185,84,0.08)_0%,transparent_70%)] -top-[100px] -right-[100px] pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[radial-gradient(ellipse,rgba(30,215,96,0.12)_0%,transparent_70%)] -bottom-20 -left-20 pointer-events-none" />

      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(29,185,84,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(29,185,84,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 0%, transparent 100%)",
        }}
      />

      <div className="animate-fade-up inline-flex items-center gap-2 bg-sand border border-border-strong rounded-full px-4 py-1.5 pr-4 pl-2.5 mb-4">
        <span className="w-[7px] h-[7px] rounded-full bg-sienna animate-pulse-dot" />
        <span className="text-xs font-semibold tracking-[0.06em] uppercase text-sienna">
          Launching Soon!
        </span>
      </div>

      <p className="animate-fade-up text-sm text-text2 mb-6">
        Launching first in <span className="font-semibold text-foreground">{BRAND.location}</span>
        {" · "}
        Expanding across the USA
      </p>

      <h1 className="animate-fade-up-delay-1 font-serif text-[clamp(44px,6.5vw,86px)] font-medium leading-[1.06] tracking-[-0.03em] max-w-[860px] mb-7 text-foreground text-balance">
        Shop Everything Local,{" "}
        <em className="italic font-light text-sienna">All in One Place.</em>
      </h1>

      <p className="animate-fade-up-delay-2 text-lg text-text2 max-w-[640px] leading-relaxed mb-12 text-balance">
        Discover products from trusted local businesses nearby
        <br />
        for convenient in-store pickup or delivery right to your door, with OpenNile!
      </p>

      <div className="animate-fade-up-delay-3 w-full max-w-[620px]">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <WaitlistForm source="hero" className="w-full sm:w-auto sm:min-w-[220px]" />
          <SectionLink
            href="#features"
            className="inline-flex items-center justify-center w-full sm:w-auto sm:min-w-[180px] font-sans text-sm font-semibold text-foreground border border-border-strong bg-white/70 hover:bg-white px-8 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            Explore Features
          </SectionLink>
        </div>
        <p className="text-xs text-text3 mt-3">
          Be among the first to experience OpenNile.
        </p>
      </div>

      <div className="animate-scale-in-delay-4 relative w-full max-w-[900px] mt-8 md:mt-10 px-0">
        <div
          className="absolute left-1/2 top-[55%] -z-10 h-[70%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(29,185,84,0.42)_0%,rgba(30,215,96,0.22)_45%,transparent_72%)] blur-3xl"
          aria-hidden
        />
        <Image
          src={images.hero.appMockup}
          alt="OpenNile app showing seller profile, product discovery, and shopping cart"
          width={1177}
          height={1018}
          sizes="(max-width: 768px) 100vw, 900px"
          className="relative w-full h-auto drop-shadow-[0_28px_70px_rgba(29,185,84,0.38)]"
          priority
        />
      </div>

      <p className="animate-fade-up-delay-5 text-sm text-text3 max-w-[480px] leading-relaxed mt-10 md:mt-14 pt-8 border-t border-border">
        One platform connecting people with local businesses, orders, and seamless transactions.
      </p>

      <div className="animate-fade-up-delay-5 hidden sm:grid grid-cols-1 sm:grid-cols-3 gap-3 mt-10 md:mt-14 w-full max-w-[900px] pt-2">
        <HeroImage src={images.hero.restaurant} alt="Delivery" label="Delivery" className="animate-float-1 h-[200px]" />
        <HeroImage src={images.hero.market} alt="Online order" label="Online Order" className="animate-float-2 h-[200px] sm:h-[240px] sm:mt-0" />
        <HeroImage src={images.hero.shop} alt="In store pickup" label="In Store Pickup" className="animate-float-3 h-[200px]" />
      </div>

      <div className="animate-fade-up-delay-5 sm:hidden flex gap-3 mt-10 w-[calc(100%+3rem)] -mx-6 px-6 overflow-x-auto overscroll-x-contain touch-pan-x snap-x snap-mandatory pb-3 scrollbar-none">
        <HeroImage src={images.hero.restaurant} alt="Delivery" label="Delivery" className="animate-float-1 h-[180px] min-w-[240px] snap-center flex-shrink-0" />
        <HeroImage src={images.hero.market} alt="Online order" label="Online Order" className="animate-float-2 h-[180px] min-w-[240px] snap-center flex-shrink-0" />
        <HeroImage src={images.hero.shop} alt="In store pickup" label="In Store Pickup" className="animate-float-3 h-[180px] min-w-[240px] snap-center flex-shrink-0" />
      </div>
    </section>
  )
}

function HeroImage({
  src,
  alt,
  label,
  className,
}: {
  src: string
  alt: string
  label: string
  className: string
}) {
  return (
    <div className={`rounded-2xl overflow-hidden relative shadow-xl ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 300px"
        className="object-cover transition-transform duration-500 hover:scale-[1.04]"
      />
      <span className="absolute bottom-3 left-3 bg-sienna/90 backdrop-blur-lg text-white text-[11px] font-semibold tracking-[0.06em] uppercase px-3 py-1.5 rounded-full">
        {label}
      </span>
    </div>
  )
}
