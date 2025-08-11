import type { Metadata } from 'next';
import TaxComplianceHero from '@/components/tax-compliance/TaxComplianceHero';
import TaxCalculatorSection from '@/components/tax-compliance/TaxCalculatorSection';
import RegulatoryReportingDashboard from '@/components/tax-compliance/RegulatoryReportingDashboard';
import ReceiptGenerationShowcase from '@/components/tax-compliance/ReceiptGenerationShowcase';
import AuditManagementTools from '@/components/tax-compliance/AuditManagementTools';
import GlobalComplianceSection from '@/components/tax-compliance/GlobalComplianceSection';
import TaxAutomationWorkflow from '@/components/tax-compliance/TaxAutomationWorkflow';

export const metadata: Metadata = {
  title: 'Tax & Compliance Platform | Sunny Payment Gateway',
  description: 'Automated tax calculation and compliance for 190+ countries. Real-time tax computation, regulatory reporting, receipt generation, and comprehensive audit management.',
  keywords: [
    'tax compliance',
    'automated tax calculation',
    'global tax management',
    'regulatory reporting',
    'receipt generation',
    'audit management',
    'tax automation',
    'GDPR compliance',
    'PCI DSS validation',
    'international tax',
    'VAT calculation',
    'sales tax automation',
    'tax documentation',
    'compliance monitoring',
    'regulatory compliance',
    'tax reporting',
    'multi-jurisdiction tax',
    'tax API',
    'real-time tax',
    'tax receipts'
  ],
  openGraph: {
    title: 'Tax & Compliance Platform | Sunny Payment Gateway',
    description: 'Automated tax calculation and compliance for 190+ countries with real-time processing, regulatory reporting, and comprehensive audit management.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tax & Compliance Platform | Sunny Payment Gateway',
    description: 'Automated tax calculation and compliance for 190+ countries with real-time processing, regulatory reporting, and comprehensive audit management.',
  },
};

export default function TaxCompliancePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <TaxComplianceHero />
      
      {/* Tax Calculator Interactive Demo */}
      <TaxCalculatorSection />
      
      {/* Global Compliance Coverage */}
      <GlobalComplianceSection />
      
      {/* Tax Automation Workflow */}
      <TaxAutomationWorkflow />
      
      {/* Receipt Generation Showcase */}
      <ReceiptGenerationShowcase />
      
      {/* Regulatory Reporting Dashboard */}
      <RegulatoryReportingDashboard />
      
      {/* Audit Management Tools */}
      <AuditManagementTools />
      
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 via-green-50 to-blue-50 dark:from-emerald-900/20 dark:via-green-900/20 dark:to-blue-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Automate Your Tax Compliance?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses using our AI-powered tax platform. 
            Get started with automated calculations, regulatory reporting, and global compliance in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg font-semibold text-lg hover:from-emerald-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold text-lg hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Schedule Demo
            </button>
            <button className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold text-lg hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              View Documentation
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Trusted by businesses in 190+ countries for tax compliance
            </p>
            <div className="flex items-center justify-center gap-8 text-gray-400 dark:text-gray-600">
              <div className="text-center">
                <div className="font-semibold text-lg">190+</div>
                <div className="text-sm">Countries</div>
              </div>
              <div className="w-px h-6 bg-gray-300 dark:bg-gray-600" />
              <div className="text-center">
                <div className="font-semibold text-lg">99.8%</div>
                <div className="text-sm">Accuracy Rate</div>
              </div>
              <div className="w-px h-6 bg-gray-300 dark:bg-gray-600" />
              <div className="text-center">
                <div className="font-semibold text-lg">&lt;1s</div>
                <div className="text-sm">Calculation Time</div>
              </div>
              <div className="w-px h-6 bg-gray-300 dark:bg-gray-600" />
              <div className="text-center">
                <div className="font-semibold text-lg">24/7</div>
                <div className="text-sm">Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

