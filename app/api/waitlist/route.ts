import { NextResponse } from "next/server"
import { waitlistSchema } from "@/lib/waitlist-schema"

const FORMSPREE_WAITLIST_URL =
  process.env.FORMSPREE_WAITLIST_URL ??
  process.env.FORMSPREE_URL ??
  "https://formspree.io/f/xovveglb"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = waitlistSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.errors[0]?.message ?? "Invalid request" },
        { status: 400 }
      )
    }

    const { fullName, role, businessName, phone, email, source } = parsed.data

    const response = await fetch(FORMSPREE_WAITLIST_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        fullName,
        role,
        businessName: businessName ?? "",
        phone,
        name: fullName,
        ...(source && { source }),
        _subject: `OpenNile waitlist signup (${role})`,
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
      message: "You're on the list!",
    })
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}
