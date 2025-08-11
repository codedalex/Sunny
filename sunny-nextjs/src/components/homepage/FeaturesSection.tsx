'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  GlobeAltIcon,
  ShieldCheckIcon, 
  BoltIcon,
  CodeBracketIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
  LockClosedIcon
} from '@heroicons/react/24/outline';

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  badge?: string;
  stats?: {
    value: string;
    label: string;
  }[];
  benefits: string[];
}

const features: Feature[] = [
  {
    icon: GlobeAltIcon,
    title: 'Global Coverage',
    description: 'Accept payments from customers worldwide with comprehensive geographic and currency support.',
    badge: 'Global',
    stats: [
      { value: '190+', label: 'Countries' },
      { value: '135+', label: 'Currencies' }
    ],
    benefits: [
      'Local payment methods',
      'Multi-currency processing',
      'Regional compliance',
      'Local acquiring'
    ]
  },
  {
    icon: ShieldCheckIcon,
    title: 'Enterprise Security',
    description: 'Bank-grade security with advanced fraud protection and comprehensive compliance coverage.',
    badge: 'Security First',
    stats: [
      { value: '99.9%', label: 'Fraud Detection' },
      { value: 'PCI L1', label: 'Compliance' }
    ],
    benefits: [
      'Advanced fraud detection',
      'End-to-end encryption',
      '3D Secure authentication',
      'Comprehensive compliance'
    ]
  },
  {
    icon: BoltIcon,
    title: 'Instant Settlement',
    description: 'Get your funds in minutes, not days, with our advanced settlement infrastructure.',
    badge: 'Fastest',
    stats: [
      { value: '<2min', label: 'Settlement' },
      { value: '24/7', label: 'Processing' }
    ],
    benefits: [
      'Sub-minute settlement',
      '24/7 processing',
      'Real-time notifications',
      'Automated reconciliation'
    ]
  },
  {
    icon: CodeBracketIcon,
    title: 'Developer Friendly',
    description: 'Modern APIs, comprehensive SDKs, and extensive documentation for rapid integration.',
    badge: 'Dev Focused',
    stats: [
      { value: '99.9%', label: 'API Uptime' },
      { value: '15+', label: 'SDKs' }
    ],
    benefits: [
      'RESTful APIs',
      'Comprehensive SDKs',
      'Detailed documentation',
      'Sandbox environment'
    ]
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Competitive Pricing',
    description: 'Transparent, competitive pricing with no hidden fees and volume-based discounts.',
    badge: 'Transparent',
    stats: [
      { value: '2.9%', label: 'Starting at' },
      { value: '0', label: 'Hidden Fees' }
    ],
    benefits: [
      'No setup fees',
      'Volume discounts',
      'Transparent pricing',
      'Predictable costs'
    ]
  },
  {
    icon: ChartBarIcon,
    title: 'Advanced Analytics',
    description: 'Comprehensive insights and reporting to optimize your payment performance.',
    badge: 'Insights',
    stats: [
      { value: 'Real-time', label: 'Reporting' },
      { value: '50+', label: 'Metrics' }
    ],
    benefits: [
      'Real-time dashboards',
      'Custom reports',
      'Performance insights',
      'Revenue analytics'
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-32 bg-gradient-to-b from-white via-blue-50/30 to-emerald-50/50 dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900">
      <div className="max-w-[1920px] mx-auto px-2 sm:px-4 lg:px-6 xl:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <Badge variant="secondary" className="mb-4 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
            Why Choose Sunny?
          </Badge>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Everything You Need to Accept{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
              Payments Globally
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We provide everything you need to accept payments globally with confidence, 
            from advanced security to instant settlement and developer-friendly tools.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full p-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:shadow-2xl hover:shadow-green-500/10 dark:hover:shadow-green-400/20 transition-all duration-300 border-gray-200/50 dark:border-gray-700 group hover:border-green-300 dark:hover:border-green-600 hover:bg-white dark:hover:bg-gray-800 hover:-translate-y-1">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors">
                    <feature.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {feature.title}
                      </h3>
                      {feature.badge && (
                        <Badge variant="outline" className="text-xs border-green-200 text-green-700 dark:border-green-800 dark:text-green-400">
                          {feature.badge}
                        </Badge>
                      )}
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Stats */}
                {feature.stats && (
                  <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    {feature.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Benefits */}
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Effect Arrow */}
                <div className="mt-6 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowTrendingUpIcon className="w-5 h-5 text-green-600 dark:text-green-400 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-16 lg:mt-24"
        >
          <div className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
            <LockClosedIcon className="w-4 h-4" />
            <span>Enterprise-grade security and 99.9% uptime SLA</span>
          </div>
          
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Join thousands of businesses already using Sunny to power their payments
          </p>
        </motion.div>
      </div>
    </section>
  );
}
