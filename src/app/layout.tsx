import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { TrialModalProvider } from '@/components/TrialModalContext'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
})

export const viewport: Viewport = {
  themeColor: '#0A0A0C',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Apex | Real-Time APM & Cloud Cost Intelligence Platform',
  description:
    'Apex is the enterprise zero-overhead APM platform built for high-scale microservices. Instant eBPF tracing, AI root cause diagnostics, and cloud cost reclamation.',
  keywords: [
    'APM',
    'Application Performance Monitoring',
    'eBPF',
    'Distributed Tracing',
    'Cloud Cost Intelligence',
    'Kubernetes Monitoring',
    'DevOps',
    'SRE',
  ],
  authors: [{ name: 'Apex Technologies Inc.' }],
  openGraph: {
    title: 'Apex | Real-Time APM & Cloud Cost Intelligence',
    description: 'Observe everything. Ship 10x faster with zero-overhead eBPF tracing and AI diagnostics.',
    url: 'https://apex.dev',
    siteName: 'Apex APM',
    images: [
      {
        url: 'https://apex.dev/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Apex Real-Time APM Dashboard',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apex | Real-Time APM & Cloud Cost Intelligence',
    description: 'Observe everything. Ship 10x faster with zero-overhead eBPF tracing.',
    creator: '@apex_apm',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://apex.dev/#organization',
        'name': 'Apex Technologies Inc.',
        'url': 'https://apex.dev',
        'logo': 'https://apex.dev/logo.png',
        'sameAs': ['https://twitter.com/apex_apm', 'https://github.com/apex-apm'],
      },
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://apex.dev/#software',
        'name': 'Apex APM & Cost Intelligence',
        'applicationCategory': 'DeveloperApplication',
        'operatingSystem': 'Linux, Kubernetes, Multi-Cloud',
        'offers': {
          '@type': 'Offer',
          'price': '29.00',
          'priceCurrency': 'USD',
          'priceValidUntil': '2027-12-31',
          'availability': 'https://schema.org/InStock',
        },
      },
    ],
  }

  return (
    <html lang="en" className={`dark scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0A0A0C] text-[#F4F4F5] antialiased selection:bg-[#6366F1]/30 selection:text-[#F4F4F5] font-sans">
        <TrialModalProvider>
          {children}
        </TrialModalProvider>
      </body>
    </html>
  )
}
