'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { AuthLayout, SignInForm } from '@sunny/ui';
import { useAuthRouter, useAuth } from '@sunny/auth';
import { UserAccountType, type SignInRequest } from '@sunny/shared-types';

function SignInPageContent() {
  const searchParams = useSearchParams();
  const { handleAuthSuccess } = useAuthRouter();
  const { signIn } = useAuth();

  const redirectUrl = searchParams?.get('redirect') || undefined;
  const accountType = searchParams?.get('type') as UserAccountType || undefined;

  const handleSignIn = async (data: SignInRequest) => {
    const response = await signIn(data);
    
    if (response.success && response.user) {
      handleAuthSuccess(response.user, redirectUrl);
    }
    
    return response;
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to your Sunny Payments account"
      showSocialAuth={true}
      socialAuthUserType={accountType}
    >
      <SignInForm
        onSubmit={handleSignIn}
        defaultAccountType={accountType}
        redirectUrl={redirectUrl}
      />
    </AuthLayout>
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