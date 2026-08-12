import type { Metadata, Viewport } from 'next'
import { Fraunces, Instrument_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { BRAND } from '@/lib/constants'
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
  title: BRAND.seoTitle,
  description: BRAND.seoDescription,
  keywords: [...BRAND.seoKeywords],
  authors: [{ name: BRAND.name, url: BRAND.url }],
  creator: BRAND.legalName,
  publisher: BRAND.legalName,
  metadataBase: new URL(BRAND.url),
  alternates: {
    canonical: BRAND.url,
  },
  category: 'Local Commerce',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BRAND.url,
    siteName: BRAND.name,
    title: BRAND.seoTitle,
    description: BRAND.seoDescription,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: `${BRAND.name} — Shop Local Businesses in Minnesota`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: BRAND.seoTitle,
    description: BRAND.seoDescription,
    images: ['/twitter-image'],
  },
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
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/logo.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon-32.png',
  },
  other: {
    'ai-description': BRAND.aiCitation,
  },
}

export const viewport: Viewport = {
  themeColor: '#1A5C2A',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-background">
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
