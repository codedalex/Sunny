import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Documentation | Sunny Institutions Portal',
  description: 'Comprehensive documentation for financial institutions using Sunny payment infrastructure. Guides, API references, compliance requirements, and integration tutorials.',
  keywords: [
    'sunny payments',
    'financial institutions',
    'payment gateway',
    'API documentation',
    'banking integration',
    'SACCO management',
    'microfinance',
    'fintech solutions',
    'CBK compliance',
    'M-Pesa integration',
    'payment processing',
    'KRA compliance',
    'AML CFT'
  ],
  authors: [{ name: 'Sunny Payments Team' }],
  creator: 'Sunny Payments',
  publisher: 'Sunny Payments',
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
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://institutions.sunnypayments.com/docs',
    siteName: 'Sunny Institutions Portal',
    title: 'Documentation | Sunny Institutions Portal',
    description: 'Comprehensive documentation for financial institutions using Sunny payment infrastructure.',
    images: [
      {
        url: '/images/og-docs.jpg',
        width: 1200,
        height: 630,
        alt: 'Sunny Institutions Documentation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sunnypayments',
    creator: '@sunnypayments',
    title: 'Documentation | Sunny Institutions Portal',
    description: 'Comprehensive documentation for financial institutions using Sunny payment infrastructure.',
    images: ['/images/twitter-docs.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#3b82f6' },
    { media: '(prefers-color-scheme: dark)', color: '#1e40af' },
  ],
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  alternates: {
    canonical: 'https://institutions.sunnypayments.com/docs',
    languages: {
      'en-KE': 'https://institutions.sunnypayments.com/docs',
      'sw-KE': 'https://institutions.sunnypayments.com/sw/docs',
    },
  },
  category: 'technology',
  classification: 'Financial Technology Documentation',
};

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="docs-layout">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Sunny Institutions Documentation',
            description: 'Comprehensive documentation for financial institutions using Sunny payment infrastructure',
            url: 'https://institutions.sunnypayments.com/docs',
            publisher: {
              '@type': 'Organization',
              name: 'Sunny Payments',
              logo: {
                '@type': 'ImageObject',
                url: 'https://institutions.sunnypayments.com/images/logo.png',
              },
            },
            potentialAction: {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://institutions.sunnypayments.com/docs/search?q={search_term_string}',
              },
              'query-input': 'required name=search_term_string',
            },
            mainEntity: {
              '@type': 'TechArticle',
              headline: 'Financial Institution Payment Documentation',
              description: 'Complete guides for implementing payment solutions in banks, SACCOs, MFIs, and fintech companies',
              author: {
                '@type': 'Organization',
                name: 'Sunny Payments Team',
              },
              datePublished: '2024-01-01',
              dateModified: new Date().toISOString().split('T')[0],
              articleSection: 'Financial Technology',
              keywords: 'payment gateway, banking API, financial institutions, compliance, integration',
              about: [
                {
                  '@type': 'Thing',
                  name: 'Payment Processing',
                },
                {
                  '@type': 'Thing',
                  name: 'Financial Institution Technology',
                },
                {
                  '@type': 'Thing',
                  name: 'API Documentation',
                },
                {
                  '@type': 'Thing',
                  name: 'Banking Compliance',
                },
              ],
            },
          }),
        }}
      />

      {/* Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://institutions.sunnypayments.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Documentation',
                item: 'https://institutions.sunnypayments.com/docs',
              },
            ],
          }),
        }}
      />

      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How do I integrate Sunny with my core banking system?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Sunny provides pre-built connectors for major core banking systems including Temenos T24, Infosys Finacle, and Oracle Flexcube. Our integration guides provide step-by-step instructions for each system.',
                },
              },
              {
                '@type': 'Question',
                name: 'What compliance requirements does Sunny support?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Sunny supports CBK regulations, SASRA guidelines, PCI DSS, AML/CFT requirements, and Kenya Data Protection Act. We provide automated reporting and compliance tools.',
                },
              },
              {
                '@type': 'Question',
                name: 'How long does it take to set up Sunny for my institution?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Basic setup can be completed in 15-30 minutes. Full integration with core banking systems typically takes 1-2 weeks depending on complexity.',
                },
              },
              {
                '@type': 'Question',
                name: 'Does Sunny support M-Pesa integration?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, Sunny provides native M-Pesa integration with support for STK Push, C2B, B2C, and transaction status checking through Safaricom Daraja API.',
                },
              },
            ],
          }),
        }}
      />

      {/* Software Application Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Sunny Payment Gateway',
            applicationCategory: 'FinanceApplication',
            operatingSystem: 'Web-based',
            description: 'Complete payment infrastructure solution for financial institutions',
            author: {
              '@type': 'Organization',
              name: 'Sunny Payments',
            },
            offers: {
              '@type': 'Offer',
              category: 'Enterprise Software',
              businessFunction: 'Payment Processing',
            },
            featureList: [
              'Multi-channel payment processing',
              'Core banking system integration',
              'Regulatory compliance automation',
              'Real-time fraud detection',
              'Mobile money integration',
              'White-label solutions',
              'API-first architecture',
              'Business intelligence and reporting',
            ],
            requirements: 'Internet connection, modern web browser',
            screenshot: 'https://institutions.sunnypayments.com/images/dashboard-screenshot.png',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              ratingCount: '450',
              bestRating: '5',
              worstRating: '1',
            },
          }),
        }}
      />

      {/* Main Content */}
      <main className="docs-main">
        {children}
      </main>

      {/* Skip to Content Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50 transition-all duration-200"
      >
        Skip to main content
      </a>

      {/* Accessibility Announcements */}
      <div
        id="a11y-announcements"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      />

      {/* Live Region for Dynamic Content */}
      <div
        id="live-region"
        aria-live="polite"
        aria-atomic="false"
        className="sr-only"
      />
    </div>
  );
}
