'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { AuthLayout, SignUpForm } from '@sunny/ui';
import { useAuthRouter, useAuth } from '@sunny/auth';
import { UserAccountType, type SignUpRequest } from '@sunny/shared-types';

function SignUpPageContent() {
  const searchParams = useSearchParams();
  const { handleAuthSuccess } = useAuthRouter();
  const { signUp } = useAuth();

  const redirectUrl = searchParams?.get('redirect') || undefined;
  const accountType = searchParams?.get('type') as UserAccountType || undefined;

  const handleSignUp = async (data: SignUpRequest) => {
    const response = await signUp(data);
    
    if (response.success && response.user) {
      handleAuthSuccess(response.user, redirectUrl);
    }
    
    return response;
  };

  return (
    <AuthLayout
      title="Join Sunny Payments"
      subtitle="Create your account and start accepting payments globally"
      showSocialAuth={true}
      socialAuthUserType={accountType}
    >
      <SignUpForm
        onSubmit={handleSignUp}
        defaultAccountType={accountType}
        redirectUrl={redirectUrl}
      />
    </AuthLayout>
  );
}

export default function SignUpPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-900 dark:to-green-900/20 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    }>
      <SignUpPageContent />
    </Suspense>
  );
}