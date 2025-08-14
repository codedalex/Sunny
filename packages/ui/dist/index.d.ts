import * as react_jsx_runtime from 'react/jsx-runtime';
import React, { ReactNode } from 'react';
import { SignInRequest, AuthResponse, UserAccountType, SignUpRequest, SocialAuthRequest } from '@sunny/shared-types';
export { AuthProvider, AuthResponse, MFAType, Session, SignInRequest, SignUpRequest, SocialAuthRequest, User, UserAccountType } from '@sunny/shared-types';

interface AuthLayoutProps {
    children: ReactNode;
    title: string;
    subtitle?: string;
    showBackButton?: boolean;
    backButtonText?: string;
    backButtonHref?: string;
    backgroundVariant?: 'gradient' | 'pattern' | 'simple';
    className?: string;
}
declare function AuthLayout({ children, title, subtitle, showBackButton, backButtonText, backButtonHref, backgroundVariant, className }: AuthLayoutProps): react_jsx_runtime.JSX.Element;

interface AuthPageLayoutProps {
    children: React.ReactNode;
    title: string;
    subtitle: string;
    showBackButton?: boolean;
    backButtonText?: string;
    backButtonHref?: string;
    className?: string;
}
declare function AuthPageLayout({ children, title, subtitle, showBackButton, backButtonText, backButtonHref, className, }: AuthPageLayoutProps): react_jsx_runtime.JSX.Element;

interface SignInFormProps {
    onSubmit: (data: SignInRequest) => Promise<AuthResponse>;
    defaultAccountType?: UserAccountType;
    redirectUrl?: string;
    className?: string;
}
declare function SignInForm({ onSubmit, defaultAccountType, redirectUrl, className }: SignInFormProps): react_jsx_runtime.JSX.Element;

interface SimpleSignInFormProps {
    onSubmit: (data: SignInRequest) => Promise<AuthResponse>;
    redirectUrl?: string;
    isLoading?: boolean;
}
declare function SimpleSignInForm({ onSubmit, redirectUrl, isLoading: externalLoading }: SimpleSignInFormProps): react_jsx_runtime.JSX.Element;

interface SignUpFormProps {
    onSubmit: (data: SignUpRequest) => Promise<AuthResponse>;
    defaultAccountType?: UserAccountType;
    redirectUrl?: string;
    className?: string;
}
declare function SignUpForm({ onSubmit, defaultAccountType, redirectUrl, className }: SignUpFormProps): react_jsx_runtime.JSX.Element;

interface SocialAuthButtonsProps {
    onSocialAuth: (data: SocialAuthRequest) => Promise<AuthResponse>;
    accountType?: UserAccountType;
    mode?: 'signin' | 'signup';
    className?: string;
}
declare function SocialAuthButtons({ onSocialAuth, accountType, mode, className }: SocialAuthButtonsProps): react_jsx_runtime.JSX.Element;

export { AuthLayout, AuthPageLayout, SignInForm, SignUpForm, SimpleSignInForm, SocialAuthButtons };
