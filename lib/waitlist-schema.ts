import { z } from "zod"

const phoneDigits = (value: string) => value.replace(/\D/g, "")

export const waitlistRoles = ["customer", "business"] as const
export type WaitlistRole = (typeof waitlistRoles)[number]

export const waitlistSchema = z
  .object({
    fullName: z.string().min(1, "Full name is required").max(100),
    role: z.enum(waitlistRoles, { message: "Please select customer or business owner" }),
    businessName: z.string().max(100).optional(),
    phone: z
      .string()
      .min(1, "Phone number is required")
      .refine(
        (value) => phoneDigits(value).length === 10,
        "Please enter a 10-digit phone number"
      )
      .transform((value) => phoneDigits(value)),
    email: z.string().email("Please enter a valid email address"),
    source: z
      .enum(["hero", "contact", "final-cta", "navbar", "benefits"])
      .optional(),
  })
  .superRefine((data, ctx) => {
    if (data.role === "business" && !data.businessName?.trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Business name is required for business owners",
        path: ["businessName"],
      })
    }
  })

export type WaitlistPayload = z.infer<typeof waitlistSchema>
