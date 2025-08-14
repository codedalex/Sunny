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
  CogIcon,
  BanknotesIcon
} from '@heroicons/react/24/outline';

// Simple inline types for now
enum UserAccountType {
  INDIVIDUAL = 'individual',
  BUSINESS = 'business',
  INSTITUTION = 'institution',
  DEVELOPER = 'developer',
  ADMIN = 'admin'
}

function SignInPageContent() {
  const searchParams = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      destination: 'app.sunnypayments.com'
    },
    {
      value: UserAccountType.BUSINESS,
      label: 'Business',
      description: 'Merchant account for businesses',
      icon: BuildingOfficeIcon,
      destination: 'business.sunnypayments.com'
    },
    {
      value: UserAccountType.INSTITUTION,
      label: 'Institution',
      description: 'Banks, SACCOs, and financial institutions',
      icon: BanknotesIcon,
      destination: 'institutions.sunnypayments.com'
    },
    {
      value: UserAccountType.DEVELOPER,
      label: 'Developer',
      description: 'API access and integration tools',
      icon: CodeBracketIcon,
      destination: 'developers.sunnypayments.com'
    },
    {
      value: UserAccountType.ADMIN,
      label: 'Admin',
      description: 'Platform administration',
      icon: CogIcon,
      destination: 'admin.sunnypayments.com'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert('Sign in functionality will be implemented when the shared packages are built!');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-900 dark:to-green-900/20">
      {/* Header */}
      <header className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 via-green-600 to-emerald-600 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 flex items-center justify-center">
                  <span className="text-white font-bold text-lg relative z-10 font-mono">S</span>
                </div>
              </div>
              
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
                  Sunny
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium -mt-1">
                  Payments
                </span>
              </div>
            </Link>

            {/* Back Button */}
            <Link
              href="/"
              className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-200"
            >
              <ArrowLeftIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-md">
          {/* Header Section */}
          <div className="text-center mb-8">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
            >
              Welcome Back
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-600 dark:text-gray-400 text-base"
            >
              Sign in to your Sunny Payments account
            </motion.p>
          </div>

          {/* Auth Form Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Account Type Selection */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Account Type
                </label>
                <div className="grid grid-cols-1 gap-3">
                  {accountTypeOptions.map((option) => {
                    const Icon = option.icon;
                    return (
                      <motion.label
                        key={option.value}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`relative flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                          accountType === option.value
                            ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                            : 'border-gray-200 dark:border-gray-600 hover:border-green-300 dark:hover:border-green-600'
                        }`}
                      >
                        <input
                          type="radio"
                          value={option.value}
                          checked={accountType === option.value}
                          onChange={(e) => setAccountType(e.target.value as UserAccountType)}
                          className="sr-only"
                        />
                        <Icon className={`h-6 w-6 mr-3 ${
                          accountType === option.value
                            ? 'text-green-600'
                            : 'text-gray-400'
                        }`} />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className={`font-medium ${
                              accountType === option.value
                                ? 'text-green-900 dark:text-green-100'
                                : 'text-gray-900 dark:text-white'
                            }`}>
                              {option.label}
                            </h3>
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {option.destination}
                            </span>
                          </div>
                          <p className={`text-sm ${
                            accountType === option.value
                              ? 'text-green-700 dark:text-green-300'
                              : 'text-gray-500 dark:text-gray-400'
                          }`}>
                            {option.description}
                          </p>
                        </div>
                      </motion.label>
                    );
                  })}
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 pr-12 border border-gray-300 dark:border-gray-600 rounded-xl transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  >
                    {showPassword ? (
                      <EyeSlashIcon className="h-5 w-5" />
                    ) : (
                      <EyeIcon className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
                  />
                  <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                    Remember me
                  </span>
                </label>
                <Link
                  href="/forgot-password"
                  className="text-sm font-medium text-green-600 hover:text-green-500 dark:text-green-400 dark:hover:text-green-300 transition-colors"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-4 rounded-xl font-medium hover:from-green-700 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Signing in...
                  </div>
                ) : (
                  <div className="flex items-center">
                    Sign In
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </div>
                )}
              </motion.button>

              {/* Sign Up Link */}
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                Don't have an account?{' '}
                <Link
                  href={`/sign-up${accountType ? `?type=${accountType}` : ''}`}
                  className="font-medium text-green-600 hover:text-green-500 dark:text-green-400 dark:hover:text-green-300 transition-colors"
                >
                  Sign up here
                </Link>
              </p>
            </form>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-6">
              <span>© {new Date().getFullYear()} Sunny Payments</span>
              <Link href="/privacy" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link href="/support" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                Support
              </Link>
              <Link href="/status" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                System Status
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function SignInPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-900 dark:to-green-900/20 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    }>
      <SignInPageContent />
    </Suspense>
  );
}
