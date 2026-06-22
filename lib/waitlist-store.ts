import { promises as fs } from "fs"
import path from "path"
import type { WaitlistPayload } from "./waitlist-schema"

export type WaitlistEntry = WaitlistPayload & {
  id: string
  createdAt: string
}

const DATA_DIR = path.join(process.cwd(), ".data")
const WAITLIST_FILE = path.join(DATA_DIR, "waitlist.json")

async function ensureDataDir() {
  await fs.mkdir(DATA_DIR, { recursive: true })
}

async function readEntries(): Promise<WaitlistEntry[]> {
  try {
    const raw = await fs.readFile(WAITLIST_FILE, "utf-8")
    return JSON.parse(raw) as WaitlistEntry[]
  } catch {
    return []
  }
}

export async function addWaitlistEntry(
  payload: WaitlistPayload
): Promise<{ entry: WaitlistEntry; isDuplicate: boolean }> {
  await ensureDataDir()
  const entries = await readEntries()
  const normalizedEmail = payload.email.toLowerCase().trim()
  const existing = entries.find((e) => e.email.toLowerCase() === normalizedEmail)

  if (existing) {
    return { entry: existing, isDuplicate: true }
  }

  const entry: WaitlistEntry = {
    ...payload,
    email: normalizedEmail,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  }

  entries.push(entry)
  await fs.writeFile(WAITLIST_FILE, JSON.stringify(entries, null, 2), "utf-8")
  return { entry, isDuplicate: false }
}
