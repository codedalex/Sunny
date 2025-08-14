'use client';

import React, { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  EyeIcon, 
  EyeSlashIcon, 
  ArrowRightIcon,
  ArrowLeftIcon,
  UserCircleIcon,
  BuildingOfficeIcon,
  CodeBracketIcon,
  BanknotesIcon
} from '@heroicons/react/24/outline';

enum UserAccountType {
  INDIVIDUAL = 'individual',
  BUSINESS = 'business',
  INSTITUTION = 'institution',
  DEVELOPER = 'developer'
}

function SignUpPageContent() {
  const searchParams = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    agreeToTerms: false,
  });
  const [accountType, setAccountType] = useState<UserAccountType>(
    (searchParams?.get('type') as UserAccountType) || UserAccountType.INDIVIDUAL
  );
  const [isLoading, setIsLoading] = useState(false);

  const accountTypeOptions = [
    {
      value: UserAccountType.INDIVIDUAL,
      label: 'Individual',
      description: 'Personal payment account',
      icon: UserCircleIcon,
    },
    {
      value: UserAccountType.BUSINESS,
      label: 'Business',
      description: 'Merchant account for businesses',
      icon: BuildingOfficeIcon,
    },
    {
      value: UserAccountType.INSTITUTION,
      label: 'Institution',
      description: 'For banks and financial institutions',
      icon: BanknotesIcon,
    },
    {
      value: UserAccountType.DEVELOPER,
      label: 'Developer',
      description: 'API access and integration tools',
      icon: CodeBracketIcon,
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Sign up functionality will be implemented when shared packages are built!');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <header className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">Sunny</span>
                <span className="text-sm text-gray-500 -mt-1">Payments</span>
              </div>
            </Link>
            <Link href="/" className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg hover:bg-white/50 transition-all duration-200">
              <ArrowLeftIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              Join Sunny Payments
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-600"
            >
              Create your account and start accepting payments globally
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">
                  Account Type
                </label>
                <div className="space-y-2">
                  {accountTypeOptions.map((option) => {
                    const Icon = option.icon;
                    return (
                      <label
                        key={option.value}
                        className={`flex items-center p-3 border-2 rounded-xl cursor-pointer transition-all ${
                          accountType === option.value
                            ? 'border-green-500 bg-green-50'
                            : 'border-gray-200 hover:border-green-300'
                        }`}
                      >
                        <input
                          type="radio"
                          value={option.value}
                          checked={accountType === option.value}
                          onChange={(e) => setAccountType(e.target.value as UserAccountType)}
                          className="sr-only"
                        />
                        <Icon className={`h-5 w-5 mr-3 ${
                          accountType === option.value ? 'text-green-600' : 'text-gray-400'
                        }`} />
                        <div>
                          <p className={`font-medium ${
                            accountType === option.value ? 'text-green-900' : 'text-gray-900'
                          }`}>
                            {option.label}
                          </p>
                          <p className={`text-sm ${
                            accountType === option.value ? 'text-green-700' : 'text-gray-500'
                          }`}>
                            {option.description}
                          </p>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                  className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                  className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />

              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                </button>
              </div>

              <label className="flex items-start">
                <input
                  type="checkbox"
                  checked={formData.agreeToTerms}
                  onChange={(e) => setFormData(prev => ({ ...prev, agreeToTerms: e.target.checked }))}
                  className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500 mt-1"
                  required
                />
                <span className="ml-3 text-sm text-gray-600">
                  I agree to the{' '}
                  <Link href="/terms" className="text-green-600 hover:text-green-500 underline">
                    Terms of Service
                  </Link>
                  {' '}and{' '}
                  <Link href="/privacy" className="text-green-600 hover:text-green-500 underline">
                    Privacy Policy
                  </Link>
                </span>
              </label>

              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-4 rounded-xl font-medium hover:from-green-700 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50 transition-all flex items-center justify-center"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Creating Account...
                  </div>
                ) : (
                  <div className="flex items-center">
                    Create Account
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </div>
                )}
              </motion.button>

              <p className="text-center text-sm text-gray-600">
                Already have an account?{' '}
                <Link href={`/sign-in${accountType ? `?type=${accountType}` : ''}`} className="font-medium text-green-600 hover:text-green-500 transition-colors">
                  Sign in here
                </Link>
              </p>
            </form>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default function SignUpPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div></div>}>
      <SignUpPageContent />
    </Suspense>
  );
}
