import type { Metadata, Viewport } from 'next'
import { Fraunces, Instrument_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { BRAND } from '@/lib/constants'
import { createShareMetadata, SHARE_IMAGE } from '@/lib/share-metadata'
import './globals.css'

const fraunces = Fraunces({ 
  subsets: ["latin"],
  variable: '--font-fraunces',
  display: 'swap',
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
});

const instrumentSans = Instrument_Sans({ 
  subsets: ["latin"],
  variable: '--font-instrument',
  display: 'swap',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  ...createShareMetadata(),
  keywords: [...BRAND.seoKeywords],
  authors: [{ name: BRAND.name, url: BRAND.url }],
  creator: BRAND.legalName,
  publisher: BRAND.legalName,
  metadataBase: new URL(BRAND.url),
  category: 'Local Commerce',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon.ico',
  },
  other: {
    'ai-description': BRAND.aiCitation,
    'og:image': SHARE_IMAGE.secureUrl,
    'og:image:width': String(SHARE_IMAGE.width),
    'og:image:height': String(SHARE_IMAGE.height),
    'og:image:alt': SHARE_IMAGE.alt,
  },
}

export const viewport: Viewport = {
  themeColor: '#1DB954',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM context file" />
      </head>
      <body className={`${fraunces.variable} ${instrumentSans.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
