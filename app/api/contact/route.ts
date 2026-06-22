import { NextResponse } from "next/server"
import { contactSchema } from "@/lib/contact-schema"

const FORMSPREE_CONTACT_URL =
  process.env.FORMSPREE_CONTACT_URL ??
  process.env.FORMSPREE_URL ??
  "https://formspree.io/f/xovveglb"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = contactSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.errors[0]?.message ?? "Invalid request" },
        { status: 400 }
      )
    }

    const { name, businessName, email, phone, topic, description } = parsed.data

    const response = await fetch(FORMSPREE_CONTACT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        phone,
        topic,
        description,
        message: description,
        ...(name && { name, fullName: name }),
        ...(businessName && { businessName }),
        _subject: `OpenNile contact: ${topic}`,
        _replyto: email,
      }),
    })

    const data = await response.json().catch(() => ({}))

    if (!response.ok) {
      const formspreeError =
        data.errors?.[0]?.message ?? data.error ?? "Something went wrong. Please try again."
      return NextResponse.json({ error: formspreeError }, { status: response.status })
    }

    return NextResponse.json({
      success: true,
      message: "Message sent! We'll get back to you soon.",
    })
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}
