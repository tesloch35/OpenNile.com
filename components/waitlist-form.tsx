"use client"

import {
  createContext,
  useContext,
  useState,
  type FormEvent,
  type ReactNode,
} from "react"
import { ArrowRight } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { trackEvent } from "@/lib/analytics"
import { submitWaitlist } from "@/lib/submit-waitlist"
import type { WaitlistPayload } from "@/lib/waitlist-schema"
import type { WaitlistRole } from "@/lib/waitlist-schema"
import { FormConsent } from "@/components/form-consent"
import { cn } from "@/lib/utils"
import { useScrollLockCleanup } from "@/hooks/use-scroll-lock-cleanup"

type Source = NonNullable<WaitlistPayload["source"]>
type Variant = "hero" | "dark" | "light" | "nav" | "contact" | "outline-light"

type OpenWaitlistOptions = {
  source?: Source
  role?: WaitlistRole
}

type WaitlistContextValue = {
  openWaitlist: (options?: Source | OpenWaitlistOptions) => void
}

const WaitlistContext = createContext<WaitlistContextValue | null>(null)

function useWaitlist() {
  const ctx = useContext(WaitlistContext)
  if (!ctx) {
    throw new Error("useWaitlist must be used within WaitlistProvider")
  }
  return ctx
}

const inputClass =
  "font-sans text-[15px] text-text bg-white border-[1.5px] border-border-strong rounded-xl px-[18px] py-3.5 outline-none w-full transition-colors focus:border-sienna disabled:opacity-50 placeholder:text-text3"

function formatPhoneDisplay(digits: string) {
  if (digits.length <= 3) return digits
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
}

function resolveOpenOptions(options?: Source | OpenWaitlistOptions): OpenWaitlistOptions {
  if (typeof options === "string" || options === undefined) {
    return { source: options ?? "hero" }
  }
  return options
}

export function WaitlistProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [source, setSource] = useState<Source>("hero")
  const [role, setRole] = useState<WaitlistRole>("customer")
  const [fullName, setFullName] = useState("")
  const [businessName, setBusinessName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  useScrollLockCleanup(open)

  const resetForm = () => {
    setRole("customer")
    setFullName("")
    setBusinessName("")
    setPhone("")
    setEmail("")
    setError("")
    setSubmitted(false)
    setSuccessMessage("")
    setLoading(false)
  }

  const openWaitlist = (options?: Source | OpenWaitlistOptions) => {
    const resolved = resolveOpenOptions(options)
    setSource(resolved.source ?? "hero")
    if (resolved.role) {
      setRole(resolved.role)
    }
    setOpen(true)
  }

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen)
    if (!nextOpen) {
      resetForm()
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError("")

    if (phone.length !== 10) {
      setError("Please enter a 10-digit phone number")
      return
    }

    if (role === "business" && !businessName.trim()) {
      setError("Business name is required for business owners")
      return
    }

    setLoading(true)

    const result = await submitWaitlist({
      fullName,
      role,
      businessName: businessName.trim() || undefined,
      phone,
      email,
      source,
    })

    setLoading(false)

    if (!result.success) {
      setError(result.error)
      return
    }

    trackEvent("waitlist_signup", { source: source ?? "hero", role })
    setSubmitted(true)
    setSuccessMessage(result.message)
  }

  return (
    <WaitlistContext.Provider value={{ openWaitlist }}>
      {children}
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-md rounded-2xl border-border p-6 md:p-8">
          <DialogHeader className="text-left gap-1.5">
            <DialogTitle className="font-serif text-[26px] font-medium tracking-[-0.03em] text-foreground">
              Join the Waitlist
            </DialogTitle>
            <DialogDescription className="text-[15px] text-text2 leading-relaxed">
              Share your details and we&apos;ll notify you when OpenNile launches.
            </DialogDescription>
          </DialogHeader>

          {submitted ? (
            <p className="text-center text-[15px] font-semibold text-sienna py-4">
              {successMessage}
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-2">
              <fieldset className="flex gap-2">
                <legend className="sr-only">I am a</legend>
                {(
                  [
                    { value: "customer", label: "Customer" },
                    { value: "business", label: "Business Owner" },
                  ] as const
                ).map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setRole(option.value)}
                    className={cn(
                      "flex-1 text-sm font-semibold py-2.5 rounded-xl border transition-colors",
                      role === option.value
                        ? "bg-sienna text-white border-sienna"
                        : "bg-white text-text2 border-border-strong hover:border-sienna/40"
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </fieldset>

              <div>
                <label className="sr-only" htmlFor="waitlist-full-name">
                  Full name
                </label>
                <input
                  id="waitlist-full-name"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Full name"
                  required
                  disabled={loading}
                  className={inputClass}
                />
              </div>

              {role === "business" && (
                <div>
                  <label className="sr-only" htmlFor="waitlist-business-name">
                    Business name
                  </label>
                  <input
                    id="waitlist-business-name"
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Business name"
                    required
                    disabled={loading}
                    className={inputClass}
                  />
                </div>
              )}

              <div>
                <label className="sr-only" htmlFor="waitlist-phone">
                  Phone number
                </label>
                <input
                  id="waitlist-phone"
                  type="tel"
                  inputMode="numeric"
                  value={formatPhoneDisplay(phone)}
                  onChange={(e) =>
                    setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
                  }
                  placeholder="(555) 123-4567"
                  required
                  disabled={loading}
                  autoComplete="tel"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="waitlist-email">
                  Email address
                </label>
                <input
                  id="waitlist-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  required
                  disabled={loading}
                  autoComplete="email"
                  aria-invalid={!!error}
                  aria-describedby={error ? "waitlist-error" : undefined}
                  className={`${inputClass} ${error ? "border-destructive" : ""}`}
                />
              </div>
              {error && (
                <p id="waitlist-error" className="text-sm text-destructive" role="alert">
                  {error}
                </p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="font-sans text-[15px] font-semibold text-white bg-sienna hover:bg-sienna-dark px-8 py-3.5 rounded-full w-full transition-all mt-1 disabled:opacity-80 disabled:cursor-default hover:-translate-y-0.5 hover:shadow-lg"
              >
                {loading ? "Joining..." : "Join the Waitlist"}
              </button>
              <FormConsent className="text-center" />
            </form>
          )}
        </DialogContent>
      </Dialog>
    </WaitlistContext.Provider>
  )
}

type WaitlistFormProps = {
  source: Source
  variant?: Variant
  className?: string
  showArrow?: boolean
  onTrigger?: () => void
  label?: string
  role?: WaitlistRole
}

export function WaitlistForm({
  source,
  variant = "hero",
  className = "",
  showArrow = false,
  onTrigger,
  label = "Join the Waitlist",
  role,
}: WaitlistFormProps) {
  const { openWaitlist } = useWaitlist()

  return (
    <button
      type="button"
      onClick={() => {
        onTrigger?.()
        openWaitlist({ source, role })
      }}
      className={cn(triggerVariants[variant], className)}
    >
      {label}
      {showArrow && (
        <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
      )}
    </button>
  )
}

const triggerVariants: Record<Variant, string> = {
  hero: "group inline-flex items-center justify-center gap-1.5 font-sans text-sm font-semibold text-white bg-sienna hover:bg-sienna-dark px-8 py-3.5 rounded-full w-full transition-all hover:-translate-y-0.5 hover:shadow-xl hover:scale-[1.02]",
  dark: "group inline-flex items-center justify-center gap-1.5 font-sans text-sm font-semibold text-white bg-sienna hover:bg-sienna-dark px-8 py-3.5 rounded-full w-full transition-all hover:-translate-y-0.5 hover:shadow-xl hover:scale-[1.02]",
  light:
    "inline-block font-sans text-[15px] font-semibold text-sienna bg-white px-8 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-xl",
  nav: "group hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-white bg-sienna hover:bg-sienna-dark px-5 py-2.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg",
  contact:
    "font-sans text-[15px] font-semibold text-sienna bg-white px-8 py-3.5 rounded-full w-full transition-all hover:-translate-y-0.5 hover:shadow-xl",
  "outline-light":
    "inline-flex items-center justify-center font-sans text-[15px] font-semibold text-white bg-transparent border border-white/30 px-8 py-3.5 rounded-full transition-all hover:bg-white/10 hover:-translate-y-0.5",
}
