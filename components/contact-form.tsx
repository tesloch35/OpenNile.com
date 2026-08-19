"use client"

import { useState, type FormEvent } from "react"
import { trackEvent } from "@/lib/analytics"
import { contactTopics } from "@/lib/contact-schema"
import { submitContact } from "@/lib/submit-contact"
import { FormConsent } from "@/components/form-consent"

const inputClass =
  "font-sans text-[15px] text-text bg-white border-[1.5px] border-border-strong rounded-xl px-[18px] py-3.5 outline-none w-full transition-colors focus:border-sienna disabled:opacity-50 placeholder:text-text3"

function formatPhoneDisplay(digits: string) {
  if (digits.length <= 3) return digits
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
}

export function ContactForm() {
  const [name, setName] = useState("")
  const [businessName, setBusinessName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [topic, setTopic] = useState<(typeof contactTopics)[number] | "">("")
  const [description, setDescription] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError("")

    if (!name.trim() && !businessName.trim()) {
      setError("Please enter your name or business name")
      return
    }

    if (phone.length !== 10) {
      setError("Please enter a 10-digit phone number")
      return
    }

    if (!topic) {
      setError("Please select a topic")
      return
    }

    if (description.trim().length < 10) {
      setError("Please add a few more details")
      return
    }

    setLoading(true)

    const result = await submitContact({
      name: name.trim() || undefined,
      businessName: businessName.trim() || undefined,
      email,
      phone,
      topic,
      description,
    })

    setLoading(false)

    if (!result.success) {
      setError(result.error)
      return
    }

    setSubmitted(true)
    setSuccessMessage(result.message)
    trackEvent("contact_submit", { topic })
    setName("")
    setBusinessName("")
    setEmail("")
    setPhone("")
    setTopic("")
    setDescription("")
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-sand/50 p-8 text-center">
        <p className="font-serif text-[22px] font-medium text-foreground mb-2">Thank you!</p>
        <p className="text-[15px] text-text2">{successMessage}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="sr-only" htmlFor="contact-name">
            Your name
          </label>
          <input
            id="contact-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            disabled={loading}
            className={inputClass}
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="contact-business-name">
            Business name
          </label>
          <input
            id="contact-business-name"
            type="text"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            placeholder="Business name"
            disabled={loading}
            className={inputClass}
          />
        </div>
      </div>
      <p className="text-xs text-text3 -mt-1">Provide your name, business name, or both.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="sr-only" htmlFor="contact-email">
            Email address
          </label>
          <input
            id="contact-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            required
            disabled={loading}
            autoComplete="email"
            className={inputClass}
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="contact-phone">
            Phone number
          </label>
          <input
            id="contact-phone"
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
      </div>

      <div>
        <label className="sr-only" htmlFor="contact-topic">
          Topic
        </label>
        <select
          id="contact-topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value as (typeof contactTopics)[number])}
          required
          disabled={loading}
          className={`${inputClass} ${!topic ? "text-text3" : ""}`}
        >
          <option value="" disabled>
            Select a topic
          </option>
          {contactTopics.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="sr-only" htmlFor="contact-description">
          Description
        </label>
        <textarea
          id="contact-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="How can we help?"
          required
          disabled={loading}
          rows={5}
          className={`${inputClass} resize-none min-h-[120px]`}
        />
      </div>

      {error && (
        <p className="text-sm text-destructive" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="font-sans text-[15px] font-semibold text-white bg-sienna hover:bg-sienna-dark px-8 py-3.5 rounded-full w-full transition-all mt-1 disabled:opacity-80 disabled:cursor-default hover:-translate-y-0.5 hover:shadow-lg"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
      <FormConsent className="text-center" />
    </form>
  )
}
