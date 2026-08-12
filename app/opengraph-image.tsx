import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"
import { BRAND } from "@/lib/constants"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"
export const alt = `${BRAND.name} — Shop Local Businesses in Minnesota`

export default async function OpenGraphImage() {
  const logoData = await readFile(join(process.cwd(), "public/logo.png"))
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #0f3d1c 0%, #1A5C2A 55%, #2E8B45 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28, marginBottom: 36 }}>
          <img
            src={logoSrc}
            width={96}
            height={96}
            alt=""
            style={{ borderRadius: 22 }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.03em",
            }}
          >
            {BRAND.name}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 52,
            fontWeight: 400,
            color: "#ffffff",
            lineHeight: 1.15,
            maxWidth: 900,
            marginBottom: 28,
          }}
        >
          Shop Local Businesses in One Place
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#c7e2d0",
            marginBottom: 20,
          }}
        >
          Discover products from trusted local businesses nearby
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 20,
            fontWeight: 600,
            color: "#4a9e63",
            letterSpacing: "0.04em",
          }}
        >
          Launching in {BRAND.location}
        </div>
      </div>
    ),
    { ...size }
  )
}
