import { AboutHero } from '@/components/about/AboutHero';
import { CompanyStory } from '@/components/about/CompanyStory';
import { LeadershipTeam } from '@/components/about/LeadershipTeam';
import { CompanyValues } from '@/components/about/CompanyValues';
import { CompanyTimeline } from '@/components/about/CompanyTimeline';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <AboutHero />
      
      {/* Company Story */}
      <CompanyStory />
      
      {/* Company Values */}
      <CompanyValues />
      
      {/* Leadership Team */}
      <LeadershipTeam />
      
      {/* Company Timeline */}
      <CompanyTimeline />
      
      {/* Schema.org structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Sunny Payments',
            url: 'https://sunnypayments.com',
            logo: 'https://sunnypayments.com/logo.png',
            description: 'Global payment infrastructure company democratizing finance through innovative payment solutions across 190+ countries.',
            foundingDate: '2019',
            founders: [
              {
                '@type': 'Person',
                name: 'Sarah Chen',
                jobTitle: 'Chief Executive Officer'
              },
              {
                '@type': 'Person',
                name: 'Michael Rodriguez',
                jobTitle: 'Chief Technology Officer'
              }
            ],
            address: {
              '@type': 'PostalAddress',
              streetAddress: '123 Market Street',
              addressLocality: 'San Francisco',
              addressRegion: 'CA',
              postalCode: '94105',
              addressCountry: 'US'
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+1-800-SUNNY-PAY',
              contactType: 'customer service',
              availableLanguage: ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese']
            },
            sameAs: [
              'https://twitter.com/sunnypayments',
              'https://linkedin.com/company/sunny-payments',
              'https://github.com/sunny-payments'
            ],
            numberOfEmployees: {
              '@type': 'QuantitativeValue',
              value: 400
            },
            award: [
              'Best Payment Innovation 2024',
              'FinTech Company of the Year 2023',
              'PCI DSS Level 1 Certification'
            ],
            knowsAbout: [
              'Payment Processing',
              'Global Commerce',
              'Financial Technology',
              'Digital Payments',
              'Cross-border Transactions',
              'Payment Security',
              'Financial Inclusion'
            ],
            memberOf: {
              '@type': 'Organization',
              name: 'FinTech Association'
            }
          })
        }}
      />
    </main>
  );
}
