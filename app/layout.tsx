import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Manrope, Space_Grotesk } from 'next/font/google'
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import Providers from './providers'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space', display: 'swap' })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || 'https://atharva-jadhav.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Atharva Jadhav | Software Engineer',
    template: '%s | Atharva Jadhav',
  },
  description: 'Atharva Jadhav is a software engineer building resilient backend systems, data platforms, and thoughtful web experiences.',
  keywords: ['Atharva Jadhav', 'Software Engineer', 'Backend Engineering', 'Java', 'Distributed Systems', 'Sanity'],
  authors: [{ name: 'Atharva Jadhav' }],
  creator: 'Atharva Jadhav',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Atharva Jadhav',
    title: 'Atharva Jadhav | Software Engineer',
    description: 'Building resilient backend systems, data platforms, and thoughtful web experiences.',
    images: [{ url: '/assets/profilePic.png', width: 1200, height: 1200, alt: 'Atharva Jadhav, software engineer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atharva Jadhav | Software Engineer',
    description: 'Building resilient backend systems, data platforms, and thoughtful web experiences.',
    images: ['/assets/profilePic.png'],
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f4f5f1' },
    { media: '(prefers-color-scheme: dark)', color: '#111614' },
  ],
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${spaceGrotesk.variable} min-h-full bg-canvas font-sans text-ink antialiased`}>
        <Providers>
          <a className="skip-link" href="#main-content">Skip to content</a>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
