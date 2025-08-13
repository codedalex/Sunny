'use client';

import { motion, Variants } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  SparklesIcon,
  RocketLaunchIcon,
  GlobeAltIcon,
  TrophyIcon,
  UserGroupIcon,
  BanknotesIcon,
  ShieldCheckIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

export function CompanyTimeline() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0
    }
  };

  const timelineEvents = [
    {
      year: '2019',
      quarter: 'Q1',
      title: 'The Spark',
      subtitle: 'Company Founded',
      description: 'Sarah Chen and Michael Rodriguez founded Sunny Payments with a mission to simplify global commerce. Started with a small team of 5 engineers in a San Francisco garage.',
      icon: SparklesIcon,
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-600',
      achievements: [
        'Incorporated the company',
        'Raised $2M seed funding',
        'Built MVP payment gateway',
        'Hired first 5 engineers'
      ],
      metrics: {
        team: '5 people',
        funding: '$2M',
        countries: '1',
        volume: '$0'
      }
    },
    {
      year: '2020',
      quarter: 'Q2',
      title: 'First Launch',
      subtitle: 'Beta Platform Live',
      description: 'Launched beta platform with 10 pilot merchants. Processed first $1M in transactions and achieved 99.9% uptime. Added support for major credit cards and bank transfers.',
      icon: RocketLaunchIcon,
      color: 'green',
      gradient: 'from-green-500 to-emerald-600',
      achievements: [
        'Beta platform launched',
        'First $1M processed',
        'Onboarded 10 merchants',
        'Achieved 99.9% uptime'
      ],
      metrics: {
        team: '15 people',
        funding: '$2M',
        countries: '3',
        volume: '$1M'
      }
    },
    {
      year: '2021',
      quarter: 'Q3',
      title: 'Rapid Growth',
      subtitle: 'Series A & Expansion',
      description: 'Raised $15M Series A led by Sequoia Capital. Expanded to 25 countries and processed $100M in transactions. Launched mobile SDKs and added fraud detection.',
      icon: ChartBarIcon,
      color: 'purple',
      gradient: 'from-purple-500 to-indigo-600',
      achievements: [
        'Raised $15M Series A',
        'Expanded to 25 countries',
        'Processed $100M volume',
        'Launched mobile SDKs'
      ],
      metrics: {
        team: '50 people',
        funding: '$17M',
        countries: '25',
        volume: '$100M'
      }
    },
    {
      year: '2022',
      quarter: 'Q1',
      title: 'Global Reach',
      subtitle: 'International Expansion',
      description: 'Expanded to 100+ countries with local payment methods. Launched cryptocurrency support and achieved $1B in transaction volume. Opened offices in London and Singapore.',
      icon: GlobeAltIcon,
      color: 'orange',
      gradient: 'from-orange-500 to-red-600',
      achievements: [
        'Expanded to 100+ countries',
        'Added crypto payments',
        'Reached $1B volume',
        'Opened global offices'
      ],
      metrics: {
        team: '120 people',
        funding: '$17M',
        countries: '100+',
        volume: '$1B'
      }
    },
    {
      year: '2023',
      quarter: 'Q2',
      title: 'Enterprise Focus',
      subtitle: 'Series B & Enterprise',
      description: 'Raised $50M Series B from Andreessen Horowitz. Launched enterprise solutions and achieved PCI DSS Level 1 certification. Processed $5B+ in annual volume.',
      icon: BanknotesIcon,
      color: 'emerald',
      gradient: 'from-emerald-500 to-green-600',
      achievements: [
        'Raised $50M Series B',
        'PCI DSS Level 1 certified',
        'Enterprise solutions launched',
        'Processed $5B+ annually'
      ],
      metrics: {
        team: '200 people',
        funding: '$67M',
        countries: '150+',
        volume: '$5B'
      }
    },
    {
      year: '2024',
      quarter: 'Q1',
      title: 'AI Innovation',
      subtitle: 'Next-Gen Features',
      description: 'Launched AI-powered fraud detection and voice payments. Expanded to 190+ countries with instant settlement. Named "Best Payment Innovation" at FinTech Awards.',
      icon: ShieldCheckIcon,
      color: 'indigo',
      gradient: 'from-indigo-500 to-purple-600',
      achievements: [
        'AI fraud detection launched',
        'Voice payments introduced',
        'Instant settlement live',
        'Won FinTech Innovation Award'
      ],
      metrics: {
        team: '300 people',
        funding: '$67M',
        countries: '190+',
        volume: '$10B'
      }
    },
    {
      year: '2024',
      quarter: 'Q4',
      title: 'Market Leader',
      subtitle: 'Industry Recognition',
      description: 'Achieved market leadership position with 10,000+ merchants. Launched financial services platform and expanded into embedded finance. Planning IPO for 2025.',
      icon: TrophyIcon,
      color: 'yellow',
      gradient: 'from-yellow-500 to-orange-600',
      achievements: [
        '10,000+ merchants onboarded',
        'Financial services launched',
        'Embedded finance platform',
        'IPO preparation started'
      ],
      metrics: {
        team: '400 people',
        funding: '$67M',
        countries: '190+',
        volume: '$15B'
      }
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-400">
              Our Journey
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Company{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Timeline
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              From startup to global leader - the key milestones that shaped our journey 
              to democratize global payments
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 transform md:-translate-x-px"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 2, ease: [0.42, 0, 0.58, 1] }}
              viewport={{ once: true }}
            />

            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => {
                const IconComponent = event.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div
                    key={index}
                    className={`relative flex items-center ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                    initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.2,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    viewport={{ once: true }}
                  >
                    {/* Timeline Dot */}
                    <motion.div
                      className={`absolute left-6 md:left-1/2 w-4 h-4 bg-gradient-to-br ${event.gradient} rounded-full transform md:-translate-x-2 z-10 border-4 border-white dark:border-gray-800`}
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />

                    {/* Content Card */}
                    <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                      isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}>
                      <motion.div
                        whileHover={{ scale: 1.02, y: -5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Card className="p-8 bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-all">
                          <div className="space-y-6">
                            {/* Header */}
                            <div className="flex items-start justify-between">
                              <div>
                                <div className="flex items-center space-x-2 mb-2">
                                  <Badge className={`bg-gradient-to-r ${event.gradient} text-white border-0`}>
                                    {event.year} {event.quarter}
                                  </Badge>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                                  {event.title}
                                </h3>
                                <p className="text-blue-600 dark:text-blue-400 font-medium">
                                  {event.subtitle}
                                </p>
                              </div>
                              
                              <motion.div
                                className={`w-12 h-12 bg-gradient-to-br ${event.gradient} rounded-full flex items-center justify-center`}
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                              >
                                <IconComponent className="w-6 h-6 text-white" />
                              </motion.div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                              {event.description}
                            </p>

                            {/* Achievements */}
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                                Key Achievements
                              </h4>
                              <div className="grid grid-cols-2 gap-2">
                                {event.achievements.map((achievement, achIndex) => (
                                  <motion.div
                                    key={achIndex}
                                    className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ 
                                      duration: 0.4, 
                                      delay: 0.5 + (achIndex * 0.1)
                                    }}
                                    viewport={{ once: true }}
                                  >
                                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                                    <span>{achievement}</span>
                                  </motion.div>
                                ))}
                              </div>
                            </div>

                            {/* Metrics */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                              <div className="text-center">
                                <div className="text-lg font-bold text-gray-900 dark:text-white">
                                  {event.metrics.team}
                                </div>
                                <div className="text-xs text-gray-500">Team</div>
                              </div>
                              <div className="text-center">
                                <div className="text-lg font-bold text-gray-900 dark:text-white">
                                  {event.metrics.funding}
                                </div>
                                <div className="text-xs text-gray-500">Funding</div>
                              </div>
                              <div className="text-center">
                                <div className="text-lg font-bold text-gray-900 dark:text-white">
                                  {event.metrics.countries}
                                </div>
                                <div className="text-xs text-gray-500">Countries</div>
                              </div>
                              <div className="text-center">
                                <div className="text-lg font-bold text-gray-900 dark:text-white">
                                  {event.metrics.volume}
                                </div>
                                <div className="text-xs text-gray-500">Volume</div>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Future Vision */}
          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center">
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <UserGroupIcon className="w-16 h-16 mx-auto mb-6 opacity-90" />
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  What's Next?
                </h3>
                <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
                  Our journey is just beginning. We're working on revolutionary features 
                  that will reshape how the world thinks about payments, commerce, and 
                  financial inclusion.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-3xl font-bold mb-2">2025</div>
                    <div className="opacity-90">IPO Launch</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-3xl font-bold mb-2">$100B</div>
                    <div className="opacity-90">Annual Volume Target</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-3xl font-bold mb-2">1M+</div>
                    <div className="opacity-90">Merchants Goal</div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
