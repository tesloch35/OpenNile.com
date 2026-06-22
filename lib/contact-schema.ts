import { z } from "zod"

const phoneDigits = (value: string) => value.replace(/\D/g, "")

export const contactTopics = [
  "General inquiry",
  "Waitlist / Early access",
  "Business partnership",
  "Support",
  "Media / Press",
  "Other",
] as const

export const contactSchema = z
  .object({
    name: z.string().max(100).optional(),
    businessName: z.string().max(100).optional(),
    email: z.string().email("Please enter a valid email address"),
    phone: z
      .string()
      .min(1, "Phone number is required")
      .refine(
        (value) => phoneDigits(value).length === 10,
        "Please enter a 10-digit phone number"
      )
      .transform((value) => phoneDigits(value)),
    topic: z.enum(contactTopics, { message: "Please select a topic" }),
    description: z
      .string()
      .min(10, "Please add a few more details")
      .max(2000, "Description is too long"),
  })
  .refine(
    (data) => Boolean(data.name?.trim() || data.businessName?.trim()),
    {
      message: "Please enter your name or business name",
      path: ["name"],
    }
  )

export type ContactPayload = z.infer<typeof contactSchema>
