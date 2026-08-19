import type { Metadata } from "next"
import { BRAND } from "@/lib/constants"

export const SHARE_IMAGE = {
  url: "/opengraph-image",
  secureUrl: `${BRAND.url}/opengraph-image`,
  width: 1200,
  height: 630,
  type: "image/png",
  alt: BRAND.tagline,
} as const

type ShareMetadataOptions = {
  title?: string
  shareTitle?: string
  description?: string
  path?: string
}

export function createShareMetadata({
  title = BRAND.seoTitle,
  shareTitle,
  description = BRAND.shareDescription,
  path = "",
}: ShareMetadataOptions = {}): Metadata {
  const url = `${BRAND.url}${path}`
  const resolvedShareTitle = shareTitle ?? (path ? title : BRAND.tagline)

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: "opennile.com",
      title: resolvedShareTitle,
      description,
      images: [
        {
          url: SHARE_IMAGE.url,
          secureUrl: SHARE_IMAGE.secureUrl,
          width: SHARE_IMAGE.width,
          height: SHARE_IMAGE.height,
          type: SHARE_IMAGE.type,
          alt: SHARE_IMAGE.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedShareTitle,
      description,
      images: [SHARE_IMAGE.secureUrl],
    },
  }
}
