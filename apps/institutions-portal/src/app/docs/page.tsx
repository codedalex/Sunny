'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MagnifyingGlassIcon, 
  RocketLaunchIcon,
  CodeBracketIcon,
  LinkIcon,
  ShieldCheckIcon,
  PaintBrushIcon,
  ChartBarIcon,
  AcademicCapIcon,
  WrenchScrewdriverIcon,
  BookOpenIcon,
  ChevronRightIcon,
  StarIcon,
  ClockIcon,
  UserGroupIcon,
  ArrowTrendingUpIcon,
  SparklesIcon,
  ArrowRightIcon,
  PlayCircleIcon,
  DocumentTextIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';

interface InstitutionType {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  features: string[];
  docs: number;
  popular?: boolean;
}

interface DocCategory {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
  color: string;
  estimatedTime?: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  items: string[];
  badge?: string;
  popular?: boolean;
  mandatory?: boolean;
}

interface QuickAction {
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
  color: string;
  time?: string;
  badge?: string;
}

export default function DocsHomePage() {
  const [selectedInstitution, setSelectedInstitution] = useState<InstitutionType | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [activeDemo, setActiveDemo] = useState(0);

  const institutionTypes: InstitutionType[] = [
    {
      id: 'commercial_bank',
      name: 'Commercial Banks',
      icon: '🏦',
      color: 'blue',
      description: 'Traditional banking institutions with comprehensive financial services',
      features: ['Corporate Banking', 'Retail Banking', 'Treasury Management', 'RTGS Integration'],
      docs: 127,
      popular: true
    },
    {
      id: 'sacco',
      name: 'SACCOs',
      icon: '🤝',
      color: 'green',
      description: 'Savings & Credit Cooperatives serving member communities',
      features: ['Member Management', 'Share Capital', 'Dividend Calculation', 'SASRA Compliance'],
      docs: 89
    },
    {
      id: 'mfi',
      name: 'Microfinance',
      icon: '💰',
      color: 'orange',
      description: 'Microfinance institutions serving underbanked populations',
      features: ['Group Lending', 'Micro Insurance', 'Rural Payments', 'Impact Tracking'],
      docs: 76
    },
    {
      id: 'fintech',
      name: 'Fintech',
      icon: '🚀',
      color: 'purple',
      description: 'Innovative financial technology companies',
      features: ['API-First', 'Digital Lending', 'Mobile Wallets', 'Real-time Processing'],
      docs: 156,
      popular: true
    },
    {
      id: 'processor',
      name: 'Payment Processors',
      icon: '💳',
      color: 'indigo',
      description: 'Payment processing and merchant services',
      features: ['Multi-Merchant', 'Settlement', 'Risk Management', 'Gateway Services'],
      docs: 98
    },
    {
      id: 'remittance',
      name: 'Remittance Services',
      icon: '🌍',
      color: 'teal',
      description: 'International money transfer operations',
      features: ['Cross-Border', 'Exchange Rates', 'Compliance', 'Correspondent Banking'],
      docs: 67
    }
  ];

  const quickActions: QuickAction[] = [
    {
      title: 'Quick Start Guide',
      description: 'Get your institution up and running in 15 minutes',
      icon: RocketLaunchIcon,
      href: '/docs/getting-started',
      color: 'blue',
      time: '15 min',
      badge: 'Popular'
    },
    {
      title: 'API Explorer',
      description: 'Interactive API documentation with live testing',
      icon: CodeBracketIcon,
      href: '/docs/api',
      color: 'green',
      badge: 'Interactive'
    },
    {
      title: 'Integration Hub',
      description: 'Connect with core banking and payment systems',
      icon: LinkIcon,
      href: '/docs/integrations',
      color: 'purple',
      time: '2-4 hours'
    },
    {
      title: 'Compliance Center',
      description: 'CBK, SASRA, and international compliance guides',
      icon: ShieldCheckIcon,
      href: '/docs/compliance',
      color: 'red',
      badge: 'Required'
    }
  ];

  const docCategories: DocCategory[] = [
    {
      id: 'getting_started',
      title: 'Getting Started',
      icon: RocketLaunchIcon,
      description: 'Quick setup guides and initial configuration',
      color: 'blue',
      estimatedTime: '30 min',
      difficulty: 'Beginner',
      items: ['Institution Setup', 'Dashboard Overview', 'First Transaction', 'Basic Configuration'],
      badge: 'Essential'
    },
    {
      id: 'api_docs',
      title: 'API Documentation',
      icon: CodeBracketIcon,
      description: 'Complete API reference with interactive examples',
      color: 'green',
      estimatedTime: '2 hours',
      difficulty: 'Intermediate',
      items: ['Authentication', 'Core Endpoints', 'Webhooks', 'SDKs & Libraries'],
      popular: true,
      badge: 'Interactive'
    },
    {
      id: 'integrations',
      title: 'Integration Guides',
      icon: LinkIcon,
      description: 'Connect with external systems and services',
      color: 'purple',
      estimatedTime: '4-8 hours',
      difficulty: 'Advanced',
      items: ['Core Banking', 'Mobile Money', 'Government APIs', 'Third-party Services'],
      popular: true
    },
    {
      id: 'compliance',
      title: 'Compliance & Security',
      icon: ShieldCheckIcon,
      description: 'Regulatory compliance and security guidelines',
      color: 'red',
      estimatedTime: '1-3 hours',
      difficulty: 'Intermediate',
      items: ['CBK Compliance', 'AML/CFT', 'Data Protection', 'Security Best Practices'],
      mandatory: true,
      badge: 'Required'
    },
    {
      id: 'white_label',
      title: 'White-label Solutions',
      icon: PaintBrushIcon,
      description: 'Customize and brand your payment solutions',
      color: 'pink',
      estimatedTime: '2-6 hours',
      difficulty: 'Intermediate',
      items: ['Branding Setup', 'Mobile Apps', 'Web Portals', 'Custom Domains']
    },
    {
      id: 'analytics',
      title: 'Analytics & Reporting',
      icon: ChartBarIcon,
      description: 'Business intelligence and reporting tools',
      color: 'indigo',
      estimatedTime: '1-3 hours',
      difficulty: 'Intermediate',
      items: ['Dashboard Analytics', 'Custom Reports', 'Data Export', 'Business Intelligence']
    },
    {
      id: 'training',
      title: 'Training & Education',
      icon: AcademicCapIcon,
      description: 'Learning paths and certification programs',
      color: 'yellow',
      estimatedTime: '4-12 weeks',
      difficulty: 'Beginner',
      items: ['Learning Paths', 'Video Tutorials', 'Certifications', 'Best Practices']
    },
    {
      id: 'support',
      title: 'Support & Troubleshooting',
      icon: WrenchScrewdriverIcon,
      description: 'Get help and resolve issues quickly',
      color: 'orange',
      estimatedTime: '< 2 hours',
      difficulty: 'Beginner',
      items: ['Common Issues', 'Error Codes', 'Diagnostic Tools', 'Contact Support']
    }
  ];

  const featuredContent = [
    {
      title: 'M-Pesa Integration Made Simple',
      description: 'Complete guide to integrating Safaricom M-Pesa with your institution',
      type: 'Guide',
      readTime: '20 min',
      popular: true,
      image: '/images/mpesa-integration.jpg'
    },
    {
      title: 'CBK Compliance Automation',
      description: 'Automate your Central Bank of Kenya regulatory reporting',
      type: 'Tutorial',
      readTime: '45 min',
      new: true,
      image: '/images/cbk-compliance.jpg'
    },
    {
      title: 'API Quick Start Video Series',
      description: 'Learn to integrate Sunny APIs in under 30 minutes',
      type: 'Video',
      readTime: '28 min',
      popular: true,
      image: '/images/api-tutorial.jpg'
    }
  ];

  const stats = [
    { label: 'Active Institutions', value: '450+', icon: UserGroupIcon },
    { label: 'API Endpoints', value: '127', icon: CodeBracketIcon },
    { label: 'Documentation Pages', value: '600+', icon: DocumentTextIcon },
    { label: 'Developer Community', value: '2.1K', icon: UserGroupIcon }
  ];

  const demoSteps = [
    {
      title: 'Institution Setup',
      description: 'Complete onboarding in minutes',
      image: '/images/demo-setup.png'
    },
    {
      title: 'API Integration',
      description: 'Connect with your existing systems',
      image: '/images/demo-api.png'
    },
    {
      title: 'Go Live',
      description: 'Start processing payments instantly',
      image: '/images/demo-live.png'
    }
  ];

  // Auto-rotate demo every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % demoSteps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string; text: string; border: string; hover: string }> = {
      blue: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', hover: 'hover:border-blue-300' },
      green: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200', hover: 'hover:border-green-300' },
      purple: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200', hover: 'hover:border-purple-300' },
      red: { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200', hover: 'hover:border-red-300' },
      orange: { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200', hover: 'hover:border-orange-300' },
      pink: { bg: 'bg-pink-50', text: 'text-pink-700', border: 'border-pink-200', hover: 'hover:border-pink-300' },
      indigo: { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200', hover: 'hover:border-indigo-300' },
      yellow: { bg: 'bg-yellow-50', text: 'text-yellow-700', border: 'border-yellow-200', hover: 'hover:border-yellow-300' },
      teal: { bg: 'bg-teal-50', text: 'text-teal-700', border: 'border-teal-200', hover: 'hover:border-teal-300' }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/docs" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <BookOpenIcon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Sunny Docs
                </span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/docs/api" className="text-gray-600 hover:text-gray-900 transition-colors">API</Link>
              <Link href="/docs/integrations" className="text-gray-600 hover:text-gray-900 transition-colors">Integrations</Link>
              <Link href="/docs/compliance" className="text-gray-600 hover:text-gray-900 transition-colors">Compliance</Link>
              <Link href="/docs/support" className="text-gray-600 hover:text-gray-900 transition-colors">Support</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-indigo-600/5 to-purple-600/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                  <SparklesIcon className="w-4 h-4 mr-2" />
                  New: CBK Compliance Automation
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Payment Infrastructure{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Documentation
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                  Everything you need to build, integrate, and scale payment solutions for your financial institution. 
                  From quick start guides to advanced compliance automation.
                </p>
              </motion.div>

              {/* Global Search */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative max-w-lg mx-auto lg:mx-0 mb-8"
              >
                <div className="relative">
                  <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                    placeholder="Search documentation, APIs, guides..."
                    className="w-full pl-12 pr-4 py-4 bg-white rounded-xl border border-gray-200 shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <kbd className="hidden sm:inline-block px-2 py-1 bg-gray-100 rounded text-xs text-gray-500">⌘K</kbd>
                  </div>
                </div>

                {/* Search Suggestions */}
                <AnimatePresence>
                  {isSearchFocused && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 z-10"
                    >
                      <div className="p-4">
                        <h4 className="text-sm font-medium text-gray-900 mb-3">Popular Searches</h4>
                        <div className="space-y-2">
                          {['M-Pesa Integration', 'CBK Compliance', 'API Authentication', 'SACCO Setup'].map((suggestion) => (
                            <button
                              key={suggestion}
                              className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                            >
                              <ArrowTrendingUpIcon className="w-4 h-4 inline mr-2 text-gray-400" />
                              {suggestion}
                            </button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-4"
              >
                {quickActions.map((action) => (
                  <Link
                    key={action.title}
                    href={action.href}
                    className="group relative p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200"
                  >
                    <div className={`w-8 h-8 ${getColorClasses(action.color).bg} rounded-lg flex items-center justify-center mb-3`}>
                      <action.icon className={`w-4 h-4 ${getColorClasses(action.color).text}`} />
                    </div>
                    <h3 className="font-medium text-gray-900 text-sm group-hover:text-gray-700 transition-colors">
                      {action.title}
                    </h3>
                    {action.time && (
                      <p className="text-xs text-gray-500 mt-1">{action.time}</p>
                    )}
                    {action.badge && (
                      <span className="absolute top-2 right-2 px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">
                        {action.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </motion.div>
            </div>

            {/* Right Column - Interactive Demo */}
            <div className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">Integration Demo</h3>
                    <div className="flex space-x-1">
                      {demoSteps.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveDemo(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === activeDemo ? 'bg-blue-600' : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeDemo}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      className="text-center"
                    >
                      <div className="w-full h-48 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl mb-4 flex items-center justify-center">
                        <div className="text-6xl">{['🏗️', '🔌', '🚀'][activeDemo]}</div>
                      </div>
                      <h4 className="text-lg font-medium text-gray-900 mb-2">
                        {demoSteps[activeDemo].title}
                      </h4>
                      <p className="text-gray-600">
                        {demoSteps[activeDemo].description}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Institution Type Selector */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your Institution Type
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get personalized documentation and guides tailored to your specific institution type and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {institutionTypes.map((institution) => (
              <motion.div
                key={institution.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedInstitution(institution)}
                className={`group cursor-pointer relative bg-white rounded-xl border-2 transition-all duration-200 p-6 ${
                  selectedInstitution?.id === institution.id
                    ? 'border-blue-500 shadow-lg ring-4 ring-blue-100'
                    : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
                }`}
              >
                {institution.popular && (
                  <div className="absolute -top-3 -right-3">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                      <StarIcon className="w-3 h-3 mr-1" />
                      Popular
                    </div>
                  </div>
                )}

                <div className="flex items-start justify-between mb-4">
                  <div className={`text-4xl p-3 rounded-xl ${getColorClasses(institution.color).bg} group-hover:scale-110 transition-transform duration-200`}>
                    {institution.icon}
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${getColorClasses(institution.color).text}`}>
                      {institution.docs}
                    </div>
                    <div className="text-xs text-gray-500">docs</div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                  {institution.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {institution.description}
                </p>

                <div className="space-y-2">
                  {institution.features.slice(0, 3).map((feature) => (
                    <div key={feature} className="flex items-center text-sm text-gray-700">
                      <CheckCircleIcon className={`w-4 h-4 mr-2 ${getColorClasses(institution.color).text}`} />
                      {feature}
                    </div>
                  ))}
                  {institution.features.length > 3 && (
                    <div className="text-sm text-gray-500">
                      +{institution.features.length - 3} more features
                    </div>
                  )}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className={`inline-flex items-center text-sm font-medium ${getColorClasses(institution.color).text} group-hover:translate-x-1 transition-transform duration-200`}>
                    View Documentation
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {selectedInstitution && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-8 p-6 bg-white rounded-xl border border-gray-200 shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {selectedInstitution.name} Documentation
                </h3>
                <Link
                  href={`/docs/institutions/${selectedInstitution.id}`}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </Link>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {selectedInstitution.features.map((feature) => (
                  <div key={feature} className="flex items-center text-gray-700">
                    <CheckCircleIcon className="w-5 h-5 mr-3 text-blue-700" />
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore Documentation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive guides and references to help you build, integrate, and optimize your payment infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {docCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link href={`/docs/${category.id}`}>
                  <div className="relative bg-white rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200 p-6 h-full">
                    {/* Badges */}
                    <div className="absolute top-4 right-4 flex flex-col gap-1">
                      {category.popular && (
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                          Popular
                        </span>
                      )}
                      {category.mandatory && (
                        <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full font-medium">
                          Required
                        </span>
                      )}
                      {category.badge && (
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                          {category.badge}
                        </span>
                      )}
                    </div>

                    {/* Icon and Title */}
                    <div className="flex items-start mb-4">
                      <div className={`${getColorClasses(category.color).bg} p-3 rounded-xl group-hover:scale-110 transition-transform duration-200 mr-4`}>
                        <category.icon className={`w-6 h-6 ${getColorClasses(category.color).text}`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                          {category.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4">
                      {category.description}
                    </p>

                    {/* Metadata */}
                    <div className="flex items-center gap-4 mb-4 text-xs text-gray-500">
                      {category.estimatedTime && (
                        <div className="flex items-center">
                          <ClockIcon className="w-3 h-3 mr-1" />
                          {category.estimatedTime}
                        </div>
                      )}
                      {category.difficulty && (
                        <span className={`px-2 py-1 rounded-full font-medium ${getDifficultyColor(category.difficulty)}`}>
                          {category.difficulty}
                        </span>
                      )}
                    </div>

                    {/* Items */}
                    <div className="space-y-2 mb-4">
                      {category.items.slice(0, 3).map((item) => (
                        <div key={item} className="flex items-center text-sm text-gray-700">
                          <div className={`w-1.5 h-1.5 rounded-full ${getColorClasses(category.color).text.replace('text-', 'bg-')} mr-2`} />
                          {item}
                        </div>
                      ))}
                      {category.items.length > 3 && (
                        <div className="text-sm text-gray-500">
                          +{category.items.length - 3} more topics
                        </div>
                      )}
                    </div>

                    {/* CTA */}
                    <div className={`inline-flex items-center text-sm font-medium ${getColorClasses(category.color).text} group-hover:translate-x-1 transition-transform duration-200`}>
                      Explore {category.title}
                      <ChevronRightIcon className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Featured Content
              </h2>
              <p className="text-lg text-gray-600">
                Popular guides and tutorials to get you started quickly
              </p>
            </div>
            <Link
              href="/docs/featured"
              className="hidden sm:inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              View all content
              <ArrowRightIcon className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <motion.div
                key={content.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-200">
                  <div className="aspect-video bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center relative overflow-hidden">
                    <div className="text-6xl opacity-20">
                      {content.type === 'Video' ? '📹' : content.type === 'Tutorial' ? '🎯' : '📖'}
                    </div>
                    {content.type === 'Video' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                          <PlayCircleIcon className="w-8 h-8 text-blue-600" />
                        </div>
                      </div>
                    )}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {content.popular && (
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                          Popular
                        </span>
                      )}
                      {content.new && (
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                          New
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-blue-600 font-medium">{content.type}</span>
                      <span className="text-sm text-gray-500">{content.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                      {content.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {content.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Financial Institutions
            </h2>
            <p className="text-lg text-gray-600">
              Join hundreds of institutions already using Sunny for their payment infrastructure
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join the institutions already processing millions in payments with Sunny. 
              Get your institution set up in minutes with our comprehensive documentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/docs/getting-started"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                <RocketLaunchIcon className="w-5 h-5 mr-2" />
                Quick Start Guide
              </Link>
              <Link
                href="/docs/api"
                className="inline-flex items-center px-6 py-3 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-800 transition-colors"
              >
                <CodeBracketIcon className="w-5 h-5 mr-2" />
                Explore API
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Documentation</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/docs/getting-started" className="hover:text-white transition-colors">Getting Started</Link></li>
                <li><Link href="/docs/api" className="hover:text-white transition-colors">API Reference</Link></li>
                <li><Link href="/docs/integrations" className="hover:text-white transition-colors">Integrations</Link></li>
                <li><Link href="/docs/compliance" className="hover:text-white transition-colors">Compliance</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Institution Types</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/docs/institutions/banks" className="hover:text-white transition-colors">Commercial Banks</Link></li>
                <li><Link href="/docs/institutions/saccos" className="hover:text-white transition-colors">SACCOs</Link></li>
                <li><Link href="/docs/institutions/mfi" className="hover:text-white transition-colors">Microfinance</Link></li>
                <li><Link href="/docs/institutions/fintech" className="hover:text-white transition-colors">Fintech</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/docs/support" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="/docs/support/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
                <li><Link href="/docs/community" className="hover:text-white transition-colors">Community</Link></li>
                <li><Link href="/docs/status" className="hover:text-white transition-colors">System Status</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/docs/changelog" className="hover:text-white transition-colors">Changelog</Link></li>
                <li><Link href="/docs/roadmap" className="hover:text-white transition-colors">Roadmap</Link></li>
                <li><Link href="/docs/security" className="hover:text-white transition-colors">Security</Link></li>
                <li><Link href="/docs/terms" className="hover:text-white transition-colors">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                <BookOpenIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold">Sunny Docs</span>
            </div>
            <div className="text-gray-400 mt-4 sm:mt-0">
              © 2024 Sunny Payments. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
