import type { Metadata, Viewport } from 'next'
import { Fraunces, Instrument_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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
  title: 'OpenNile — Shop Local Businesses in One Place | Local Commerce Platform',
  description: 'Discover local businesses across the USA, browse products, place orders for pickup or delivery, and checkout securely. Support your community with OpenNile.',
  keywords: ['local commerce', 'shop local', 'local business marketplace', 'support local businesses', 'local shopping app', 'community commerce', 'small business platform'],
  authors: [{ name: 'OpenNile' }],
  creator: 'OpenNile',
  publisher: 'OpenNile',
  metadataBase: new URL('https://opennile.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://opennile.com',
    siteName: 'OpenNile',
    title: 'OpenNile — Shop Local Businesses in One Place',
    description: 'Discover local businesses across the USA, browse products, place orders for pickup or delivery, and checkout securely. Support your community with OpenNile.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'OpenNile — Shop Local Businesses in One Place',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpenNile — Shop Local Businesses in One Place',
    description: 'Discover local businesses across the USA, browse products, place orders for pickup or delivery, and checkout securely.',
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
      <body className={`${fraunces.variable} ${instrumentSans.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
