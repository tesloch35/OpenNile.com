import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"
import { BRAND } from "@/lib/constants"
import { images } from "@/lib/images"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"
export const alt = BRAND.tagline

async function loadImage(path: string) {
  const data = await readFile(join(process.cwd(), path))
  const ext = path.split(".").pop()?.toLowerCase()
  const mime = ext === "jpg" || ext === "jpeg" ? "image/jpeg" : "image/png"
  return `data:${mime};base64,${data.toString("base64")}`
}

export default async function OpenGraphImage() {
  const mockupSrc = await loadImage(`public${images.hero.sharePreview}`)

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f4f4f5",
          padding: "32px 40px",
        }}
      >
        <img
          src={mockupSrc}
          alt=""
          width={1120}
          height={566}
          style={{
            objectFit: "contain",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    ),
    { ...size }
  )
}
