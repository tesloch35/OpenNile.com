import Link from "next/link"

type FormConsentProps = {
  className?: string
  variant?: "light" | "dark"
}

export function FormConsent({ className = "", variant = "light" }: FormConsentProps) {
  const textClass = variant === "dark" ? "text-white/50" : "text-text3"
  const linkClass =
    variant === "dark"
      ? "text-white/70 underline underline-offset-2 hover:text-white"
      : "text-sienna underline underline-offset-2 hover:text-sienna-dark"

  return (
    <p className={`text-xs leading-relaxed ${textClass} ${className}`}>
      By submitting, you agree to our{" "}
      <Link href="/privacy" className={linkClass}>
        Privacy Policy
      </Link>{" "}
      and{" "}
      <Link href="/terms" className={linkClass}>
        Terms of Service
      </Link>
      .
    </p>
  )
}
