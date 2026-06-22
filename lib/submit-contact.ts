import type { ContactPayload } from "./contact-schema"

type SubmitResult =
  | { success: true; message: string }
  | { success: false; error: string }

export async function submitContact(
  payload: ContactPayload
): Promise<SubmitResult> {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })

    const data = await response.json()

    if (!response.ok) {
      return {
        success: false,
        error: data.error ?? "Something went wrong. Please try again.",
      }
    }

    return { success: true, message: data.message }
  } catch {
    return {
      success: false,
      error: "Unable to connect. Please check your connection and try again.",
    }
  }
}
