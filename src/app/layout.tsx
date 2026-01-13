import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Christopher Estep | Tech Founder & CEO',
  description: 'Tech Founder and CEO of Turblu. Building the future of technology.',
  keywords: ['Christopher Estep', 'Turblu', 'Tech Founder', 'CEO', 'Technology'],
  authors: [{ name: 'Christopher Estep' }],
  openGraph: {
    title: 'Christopher Estep | Tech Founder & CEO',
    description: 'Tech Founder and CEO of Turblu. Building the future of technology.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
