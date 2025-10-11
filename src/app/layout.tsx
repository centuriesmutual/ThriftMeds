import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import ConditionalLayout from '@/components/ConditionalLayout'
import AnalyticsWrapper from '@/components/Analytics'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ThriftMeds - Affordable Medicare Part D Prescription Drug Plans | Healthcare Insurance',
  description: 'Find affordable Medicare Part D prescription drug coverage, healthcare insurance plans, and medication pricing. Licensed brokers help you save on prescription drugs with Medicare Advantage and Part D plans.',
  icons: {
    icon: [
      { url: '/assets/logos/thriftlogo.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/logos/thriftlogo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/assets/logos/thriftlogo.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/assets/logos/thriftlogo.png', color: '#E31837' },
    ],
  },
  keywords: [
    'Medicare Part D',
    'Medicare prescription drug plans',
    'Medicare Advantage',
    'healthcare insurance',
    'prescription drug coverage',
    'Medicare drug plans',
    'affordable medications',
    'Medicare enrollment',
    'prescription drug costs',
    'Medicare supplement',
    'health insurance plans',
    'Medicare broker',
    'licensed insurance agent',
    'prescription drug savings',
    'Medicare plan comparison',
    'drug formulary',
    'Medicare deductible',
    'copay assistance',
    'Medicare coverage gap',
    'catastrophic coverage',
    'CMS approved plans',
    'Medicare.gov',
    'prescription drug benefits',
    'Medicare eligibility',
    'open enrollment'
  ].join(', '),
  authors: [{ name: 'ThriftMeds' }],
  creator: 'ThriftMeds',
  publisher: 'ThriftMeds',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://thriftmeds.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ThriftMeds - Affordable Medicare Part D Prescription Drug Plans',
    description: 'Find affordable Medicare Part D prescription drug coverage and healthcare insurance plans. Licensed brokers help you save on prescription medications.',
    url: 'https://thriftmeds.com',
    siteName: 'ThriftMeds',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ThriftMeds - Medicare Part D Prescription Drug Plans',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ThriftMeds - Affordable Medicare Part D Prescription Drug Plans',
    description: 'Find affordable Medicare Part D prescription drug coverage and healthcare insurance plans. Licensed brokers help you save on prescription medications.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0097A9',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ThriftMeds",
              "description": "Affordable Medicare Part D prescription drug plans and healthcare insurance coverage",
              "url": "https://thriftmeds.com",
              "logo": "https://thriftmeds.com/assets/logos/thriftlogo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-800-631-6337",
                "contactType": "customer service",
                "areaServed": "US",
                "availableLanguage": "English"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "sameAs": [
                "https://www.facebook.com/thriftmeds",
                "https://www.twitter.com/thriftmeds",
                "https://www.linkedin.com/company/thriftmeds"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Medicare Part D Prescription Drug Plans",
              "description": "Affordable Medicare Part D prescription drug coverage and healthcare insurance plans",
              "provider": {
                "@type": "Organization",
                "name": "ThriftMeds"
              },
              "serviceType": "Healthcare Insurance",
              "areaServed": "United States",
              "audience": {
                "@type": "Audience",
                "audienceType": "Medicare beneficiaries"
              }
            })
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <ConditionalLayout>{children}</ConditionalLayout>
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
