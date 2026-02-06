import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://estepchristopher.com'),
  title: 'Christopher Estep | Tech Founder & CEO',
  description: 'Tech Founder and CEO of Turblu. Building the future of technology at the intersection of motorsports and innovation.',
  keywords: ['Christopher Estep', 'Turblu', 'Tech Founder', 'CEO', 'Technology', 'Supply Chain', 'Motorsports'],
  authors: [{ name: 'Christopher Estep' }],
  creator: 'Christopher Estep',
  openGraph: {
    title: 'Christopher Estep | Tech Founder & CEO',
    description: 'Tech Founder and CEO of Turblu. Building the future of technology at the intersection of motorsports and innovation.',
    url: 'https://estepchristopher.com',
    siteName: 'Christopher Estep',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Christopher Estep | Tech Founder & CEO',
    description: 'Tech Founder and CEO of Turblu. Building the future of technology.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://estepchristopher.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Christopher Estep',
              url: 'https://estepchristopher.com',
              jobTitle: 'Tech Founder & CEO',
              worksFor: {
                '@type': 'Organization',
                name: 'Turblu',
                url: 'https://www.turblu.com',
              },
              sameAs: [
                'https://www.linkedin.com/in/christopher-estep-8b736312a/',
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} text-white antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
