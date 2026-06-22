import Link from "next/link"
import { BRAND } from "@/lib/constants"

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-white">
      <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-sienna mb-4">
        404
      </p>
      <h1 className="font-serif text-[clamp(32px,5vw,48px)] font-medium text-bark tracking-[-0.03em] mb-4">
        Page not found
      </h1>
      <p className="text-text2 max-w-md mb-8">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center font-sans text-sm font-semibold text-white bg-sienna hover:bg-sienna-dark px-8 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg"
      >
        Back to {BRAND.name}
      </Link>
    </main>
  )
}
