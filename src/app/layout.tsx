import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
})

// ~150 chars for Google search snippets
const metaDescription =
  'Founder of Turblu, building at the intersection of motorsports and technology. Supply chain leader at Signet Jewelers. Based in Venice Beach, CA.'

// ~115 chars for social link previews, which truncate earlier
const socialDescription =
  'Founder of Turblu — motorsports meets technology. Supply chain leader at Signet Jewelers. Venice Beach, California.'

// Unconstrained length for structured data
const jsonLdDescription =
  'Founder of Turblu, building at the intersection of motorsports and technology. Supply chain leader at Signet Jewelers. Founder of Palmetto Auto Club. From the ER floor in Aiken, South Carolina to Venice Beach, California.'

export const metadata: Metadata = {
  metadataBase: new URL('https://estepchristopher.com'),
  title: 'Christopher Estep | Founder of Turblu',
  description: metaDescription,
  keywords: [
    'Christopher Estep',
    'Turblu',
    'Founder',
    'Palmetto Auto Club',
    'Signet Jewelers',
    'Supply Chain',
    'Motorsports',
    'Venice Beach',
  ],
  authors: [{ name: 'Christopher Estep' }],
  creator: 'Christopher Estep',
  openGraph: {
    title: 'Christopher Estep | Founder of Turblu',
    description: socialDescription,
    url: 'https://estepchristopher.com',
    siteName: 'Christopher Estep',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Christopher Estep | Founder of Turblu',
    description: socialDescription,
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
              jobTitle: 'Founder & CEO',
              description: jsonLdDescription,
              homeLocation: {
                '@type': 'Place',
                name: 'Venice Beach, California',
              },
              worksFor: {
                '@type': 'Organization',
                name: 'Turblu',
                url: 'https://www.turblu.com',
              },
              affiliation: [
                {
                  '@type': 'Organization',
                  name: 'Signet Jewelers',
                },
                {
                  '@type': 'Organization',
                  name: 'Palmetto Auto Club',
                },
              ],
              sameAs: [
                'https://www.linkedin.com/in/christopher-estep-8b736312a/',
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans text-white antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
