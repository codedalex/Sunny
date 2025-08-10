'use client';

/**
 * Main landing page for Sunny Payment Gateway
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CreditCardIcon, 
  BanknotesIcon, 
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  BoltIcon
} from '@heroicons/react/24/outline';
import Layout from '@/components/layout/Layout';
import { CheckoutForm } from '@/components/checkout/checkout-form';
import { PaymentMethod, PaymentResult } from '@/lib/types/payment';
import ThemeDebug from '@/components/debug/ThemeDebug';

const features = [
  {
    icon: <GlobeAltIcon className="w-8 h-8" />,
    title: 'Global Coverage',
    description: 'Accept payments from 190+ countries in 135+ currencies'
  },
  {
    icon: <BoltIcon className="w-8 h-8" />,
    title: 'Instant Settlement',
    description: 'Get your funds in minutes, not days'
  },
  {
    icon: <ShieldCheckIcon className="w-8 h-8" />,
    title: 'Enterprise Security',
    description: 'PCI DSS Level 1 compliance with advanced fraud protection'
  }
];

const paymentMethods: PaymentMethod[] = [
  { id: 'card', name: 'Credit/Debit Card', type: 'card', enabled: true },
  { id: 'bank_transfer', name: 'Bank Transfer', type: 'bank_transfer', enabled: true },
  { id: 'mobile_money', name: 'Mobile Money', type: 'mobile_money', enabled: true }
];

export default function HomePage() {
  const [showCheckout, setShowCheckout] = useState(false);

  const handlePaymentSuccess = (result: PaymentResult) => {
    console.log('Payment successful:', result);
    // Handle successful payment
  };

  const handlePaymentError = (error: string) => {
    console.error('Payment error:', error);
    // Handle payment error
  };

  return (
    <Layout>
      <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Global Payment Processing
              <span className="text-green-600 dark:text-green-400 block">Made Simple</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Accept payments globally with enterprise-grade security, instant settlement, 
              and transparent pricing. Built for businesses of all sizes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={() => setShowCheckout(true)}
                className="bg-green-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Try Demo
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-50 transition-colors">
                View Documentation
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Sunny?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide everything you need to accept payments globally with confidence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="text-green-600 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Accept Any Payment Method
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Support for cards, bank transfers, mobile money, and more
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <CreditCardIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cards</h3>
              <p className="text-gray-600 text-sm">Visa, Mastercard, American Express, and more</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <BanknotesIcon className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Bank Transfers</h3>
              <p className="text-gray-600 text-sm">ACH, SEPA, wire transfers, and local methods</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <DevicePhoneMobileIcon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mobile Money</h3>
              <p className="text-gray-600 text-sm">M-Pesa, MTN Mobile Money, Airtel Money</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Try Our Payment Gateway
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience our checkout flow with a live demo
            </p>
          </div>

          <div className="max-w-md mx-auto">
            {showCheckout ? (
              <CheckoutForm
                merchantName="Demo Store"
                amount={2500} // $25.00
                currency="USD"
                paymentMethods={paymentMethods}
                onPaymentSuccess={handlePaymentSuccess}
                onPaymentError={handlePaymentError}
              />
            ) : (
              <div className="text-center p-8 border-2 border-dashed border-gray-300 rounded-lg">
                <button
                  onClick={() => setShowCheckout(true)}
                  className="bg-green-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Launch Demo Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that trust Sunny for their payment processing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-50 transition-colors">
              Create Account
            </button>
            <button className="border border-green-400 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-green-700 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
      
      </div>
      <ThemeDebug />
    </Layout>
  );
}