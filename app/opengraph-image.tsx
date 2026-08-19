import { readFile } from "node:fs/promises"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"
import { ImageResponse } from "next/og"
import { BRAND } from "@/lib/constants"
import { images } from "@/lib/images"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"
export const alt = BRAND.tagline

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), "..")

async function loadImage(publicPath: string) {
  const filePath = join(projectRoot, "public", publicPath.replace(/^\//, ""))
  const data = await readFile(filePath)
  const ext = publicPath.split(".").pop()?.toLowerCase()
  const mime = ext === "jpg" || ext === "jpeg" ? "image/jpeg" : "image/png"
  return `data:${mime};base64,${data.toString("base64")}`
}

export default async function OpenGraphImage() {
  const mockupSrc = await loadImage(images.hero.sharePreview)

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
