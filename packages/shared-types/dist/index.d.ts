import { z } from 'zod';

/**
 * User Account Types
 * Maps to different dashboard destinations
 */
declare enum UserAccountType {
    INDIVIDUAL = "individual",
    BUSINESS = "business",
    INSTITUTION = "institution",
    DEVELOPER = "developer",
    ADMIN = "admin"
}
/**
 * Authentication Provider Types
 */
declare enum AuthProvider {
    EMAIL = "email",
    GOOGLE = "google",
    APPLE = "apple",
    MICROSOFT = "microsoft",
    GITHUB = "github",// For developers
    LINKEDIN = "linkedin"
}
/**
 * Multi-Factor Authentication Types
 */
declare enum MFAType {
    SMS = "sms",
    EMAIL = "email",
    TOTP = "totp",// Authenticator app
    BIOMETRIC = "biometric",
    HARDWARE_TOKEN = "hardware_token"
}
/**
 * Account Verification Status
 */
declare enum VerificationStatus {
    PENDING = "pending",
    VERIFIED = "verified",
    REJECTED = "rejected",
    EXPIRED = "expired"
}
/**
 * Institution Types (for institutions portal)
 */
declare enum InstitutionType {
    BANK = "bank",
    CREDIT_UNION = "credit_union",
    FINTECH = "fintech",
    PAYMENT_PROCESSOR = "payment_processor",
    REMITTANCE_SERVICE = "remittance_service",
    SACCO = "sacco",// Kenya-specific
    MICROFINANCE = "microfinance"
}
/**
 * Business Types (for business dashboard)
 */
declare enum BusinessType {
    SOLE_PROPRIETORSHIP = "sole_proprietorship",
    PARTNERSHIP = "partnership",
    CORPORATION = "corporation",
    LLC = "llc",
    NON_PROFIT = "non_profit",
    STARTUP = "startup",
    ENTERPRISE = "enterprise"
}
/**
 * Zod Schemas for Validation
 */
declare const BaseUserSchema: z.ZodObject<{
    id: z.ZodString;
    email: z.ZodString;
    emailVerified: z.ZodDefault<z.ZodBoolean>;
    phone: z.ZodOptional<z.ZodString>;
    phoneVerified: z.ZodDefault<z.ZodBoolean>;
    accountType: z.ZodEnum<typeof UserAccountType>;
    firstName: z.ZodString;
    lastName: z.ZodString;
    avatar: z.ZodOptional<z.ZodString>;
    timezone: z.ZodDefault<z.ZodString>;
    locale: z.ZodDefault<z.ZodString>;
    currency: z.ZodDefault<z.ZodString>;
    mfaEnabled: z.ZodDefault<z.ZodBoolean>;
    mfaMethods: z.ZodDefault<z.ZodArray<z.ZodEnum<typeof MFAType>>>;
    lastLoginAt: z.ZodOptional<z.ZodDate>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strip>;
declare const IndividualUserSchema: z.ZodObject<{
    id: z.ZodString;
    email: z.ZodString;
    emailVerified: z.ZodDefault<z.ZodBoolean>;
    phone: z.ZodOptional<z.ZodString>;
    phoneVerified: z.ZodDefault<z.ZodBoolean>;
    firstName: z.ZodString;
    lastName: z.ZodString;
    avatar: z.ZodOptional<z.ZodString>;
    timezone: z.ZodDefault<z.ZodString>;
    locale: z.ZodDefault<z.ZodString>;
    currency: z.ZodDefault<z.ZodString>;
    mfaEnabled: z.ZodDefault<z.ZodBoolean>;
    mfaMethods: z.ZodDefault<z.ZodArray<z.ZodEnum<typeof MFAType>>>;
    lastLoginAt: z.ZodOptional<z.ZodDate>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    accountType: z.ZodLiteral<UserAccountType.INDIVIDUAL>;
    dateOfBirth: z.ZodOptional<z.ZodDate>;
    nationality: z.ZodOptional<z.ZodString>;
    occupation: z.ZodOptional<z.ZodString>;
    kycStatus: z.ZodDefault<z.ZodEnum<typeof VerificationStatus>>;
}, z.core.$strip>;
declare const BusinessUserSchema: z.ZodObject<{
    id: z.ZodString;
    email: z.ZodString;
    emailVerified: z.ZodDefault<z.ZodBoolean>;
    phone: z.ZodOptional<z.ZodString>;
    phoneVerified: z.ZodDefault<z.ZodBoolean>;
    firstName: z.ZodString;
    lastName: z.ZodString;
    avatar: z.ZodOptional<z.ZodString>;
    timezone: z.ZodDefault<z.ZodString>;
    locale: z.ZodDefault<z.ZodString>;
    currency: z.ZodDefault<z.ZodString>;
    mfaEnabled: z.ZodDefault<z.ZodBoolean>;
    mfaMethods: z.ZodDefault<z.ZodArray<z.ZodEnum<typeof MFAType>>>;
    lastLoginAt: z.ZodOptional<z.ZodDate>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    accountType: z.ZodLiteral<UserAccountType.BUSINESS>;
    businessName: z.ZodString;
    businessType: z.ZodEnum<typeof BusinessType>;
    businessRegistrationNumber: z.ZodOptional<z.ZodString>;
    taxId: z.ZodOptional<z.ZodString>;
    website: z.ZodOptional<z.ZodString>;
    businessVerificationStatus: z.ZodDefault<z.ZodEnum<typeof VerificationStatus>>;
    monthlyVolume: z.ZodOptional<z.ZodNumber>;
    industry: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
declare const InstitutionUserSchema: z.ZodObject<{
    id: z.ZodString;
    email: z.ZodString;
    emailVerified: z.ZodDefault<z.ZodBoolean>;
    phone: z.ZodOptional<z.ZodString>;
    phoneVerified: z.ZodDefault<z.ZodBoolean>;
    firstName: z.ZodString;
    lastName: z.ZodString;
    avatar: z.ZodOptional<z.ZodString>;
    timezone: z.ZodDefault<z.ZodString>;
    locale: z.ZodDefault<z.ZodString>;
    currency: z.ZodDefault<z.ZodString>;
    mfaEnabled: z.ZodDefault<z.ZodBoolean>;
    mfaMethods: z.ZodDefault<z.ZodArray<z.ZodEnum<typeof MFAType>>>;
    lastLoginAt: z.ZodOptional<z.ZodDate>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    accountType: z.ZodLiteral<UserAccountType.INSTITUTION>;
    institutionName: z.ZodString;
    institutionType: z.ZodEnum<typeof InstitutionType>;
    regulatoryLicense: z.ZodOptional<z.ZodString>;
    swiftCode: z.ZodOptional<z.ZodString>;
    institutionVerificationStatus: z.ZodDefault<z.ZodEnum<typeof VerificationStatus>>;
    complianceOfficer: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        email: z.ZodString;
        phone: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
declare const DeveloperUserSchema: z.ZodObject<{
    id: z.ZodString;
    email: z.ZodString;
    emailVerified: z.ZodDefault<z.ZodBoolean>;
    phone: z.ZodOptional<z.ZodString>;
    phoneVerified: z.ZodDefault<z.ZodBoolean>;
    firstName: z.ZodString;
    lastName: z.ZodString;
    avatar: z.ZodOptional<z.ZodString>;
    timezone: z.ZodDefault<z.ZodString>;
    locale: z.ZodDefault<z.ZodString>;
    currency: z.ZodDefault<z.ZodString>;
    mfaEnabled: z.ZodDefault<z.ZodBoolean>;
    mfaMethods: z.ZodDefault<z.ZodArray<z.ZodEnum<typeof MFAType>>>;
    lastLoginAt: z.ZodOptional<z.ZodDate>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    accountType: z.ZodLiteral<UserAccountType.DEVELOPER>;
    githubUsername: z.ZodOptional<z.ZodString>;
    company: z.ZodOptional<z.ZodString>;
    yearsExperience: z.ZodOptional<z.ZodNumber>;
    preferredLanguages: z.ZodDefault<z.ZodArray<z.ZodString>>;
    apiKeyTier: z.ZodDefault<z.ZodEnum<{
        sandbox: "sandbox";
        development: "development";
        production: "production";
    }>>;
}, z.core.$strip>;
declare const AdminUserSchema: z.ZodObject<{
    id: z.ZodString;
    email: z.ZodString;
    emailVerified: z.ZodDefault<z.ZodBoolean>;
    phone: z.ZodOptional<z.ZodString>;
    phoneVerified: z.ZodDefault<z.ZodBoolean>;
    firstName: z.ZodString;
    lastName: z.ZodString;
    avatar: z.ZodOptional<z.ZodString>;
    timezone: z.ZodDefault<z.ZodString>;
    locale: z.ZodDefault<z.ZodString>;
    currency: z.ZodDefault<z.ZodString>;
    mfaEnabled: z.ZodDefault<z.ZodBoolean>;
    mfaMethods: z.ZodDefault<z.ZodArray<z.ZodEnum<typeof MFAType>>>;
    lastLoginAt: z.ZodOptional<z.ZodDate>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    accountType: z.ZodLiteral<UserAccountType.ADMIN>;
    permissions: z.ZodDefault<z.ZodArray<z.ZodString>>;
    department: z.ZodOptional<z.ZodString>;
    level: z.ZodDefault<z.ZodEnum<{
        admin: "admin";
        super_admin: "super_admin";
        system_admin: "system_admin";
    }>>;
}, z.core.$strip>;
declare const SignInSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    accountType: z.ZodOptional<z.ZodEnum<typeof UserAccountType>>;
    rememberMe: z.ZodDefault<z.ZodBoolean>;
    mfaCode: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
declare const SignUpSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    confirmPassword: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodString;
    phone: z.ZodOptional<z.ZodString>;
    accountType: z.ZodEnum<typeof UserAccountType>;
    agreeToTerms: z.ZodBoolean;
    agreeToPrivacy: z.ZodBoolean;
    marketingConsent: z.ZodDefault<z.ZodBoolean>;
    businessName: z.ZodOptional<z.ZodString>;
    businessType: z.ZodOptional<z.ZodEnum<typeof BusinessType>>;
    institutionName: z.ZodOptional<z.ZodString>;
    institutionType: z.ZodOptional<z.ZodEnum<typeof InstitutionType>>;
    company: z.ZodOptional<z.ZodString>;
    referralCode: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
declare const SocialAuthSchema: z.ZodObject<{
    provider: z.ZodEnum<typeof AuthProvider>;
    providerUserId: z.ZodString;
    accessToken: z.ZodString;
    refreshToken: z.ZodOptional<z.ZodString>;
    accountType: z.ZodOptional<z.ZodEnum<typeof UserAccountType>>;
}, z.core.$strip>;
declare const PasswordResetSchema: z.ZodObject<{
    email: z.ZodString;
}, z.core.$strip>;
declare const PasswordResetConfirmSchema: z.ZodObject<{
    token: z.ZodString;
    password: z.ZodString;
    confirmPassword: z.ZodString;
}, z.core.$strip>;
declare const MFASetupSchema: z.ZodObject<{
    method: z.ZodEnum<typeof MFAType>;
    phoneNumber: z.ZodOptional<z.ZodString>;
    backupCodes: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
declare const SessionSchema: z.ZodObject<{
    id: z.ZodString;
    userId: z.ZodString;
    user: z.ZodObject<{
        id: z.ZodString;
        email: z.ZodString;
        emailVerified: z.ZodDefault<z.ZodBoolean>;
        phone: z.ZodOptional<z.ZodString>;
        phoneVerified: z.ZodDefault<z.ZodBoolean>;
        accountType: z.ZodEnum<typeof UserAccountType>;
        firstName: z.ZodString;
        lastName: z.ZodString;
        avatar: z.ZodOptional<z.ZodString>;
        timezone: z.ZodDefault<z.ZodString>;
        locale: z.ZodDefault<z.ZodString>;
        currency: z.ZodDefault<z.ZodString>;
        mfaEnabled: z.ZodDefault<z.ZodBoolean>;
        mfaMethods: z.ZodDefault<z.ZodArray<z.ZodEnum<typeof MFAType>>>;
        lastLoginAt: z.ZodOptional<z.ZodDate>;
        createdAt: z.ZodDate;
        updatedAt: z.ZodDate;
    }, z.core.$strip>;
    accessToken: z.ZodString;
    refreshToken: z.ZodString;
    expiresAt: z.ZodDate;
    device: z.ZodObject<{
        userAgent: z.ZodString;
        ip: z.ZodString;
        location: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
/**
 * Destination URL Mapping
 */
declare const ACCOUNT_TYPE_DESTINATIONS: {
    readonly individual: "https://app.sunnypayments.com";
    readonly business: "https://business.sunnypayments.com";
    readonly institution: "https://institutions.sunnypayments.com";
    readonly developer: "https://developers.sunnypayments.com";
    readonly admin: "https://admin.sunnypayments.com";
};
/**
 * Type Exports
 */
type BaseUser = z.infer<typeof BaseUserSchema>;
type IndividualUser = z.infer<typeof IndividualUserSchema>;
type BusinessUser = z.infer<typeof BusinessUserSchema>;
type InstitutionUser = z.infer<typeof InstitutionUserSchema>;
type DeveloperUser = z.infer<typeof DeveloperUserSchema>;
type AdminUser = z.infer<typeof AdminUserSchema>;
type User = IndividualUser | BusinessUser | InstitutionUser | DeveloperUser | AdminUser;
type SignInRequest = z.infer<typeof SignInSchema>;
type SignUpRequest = z.infer<typeof SignUpSchema>;
type SocialAuthRequest = z.infer<typeof SocialAuthSchema>;
type PasswordResetRequest = z.infer<typeof PasswordResetSchema>;
type PasswordResetConfirmRequest = z.infer<typeof PasswordResetConfirmSchema>;
type MFASetupRequest = z.infer<typeof MFASetupSchema>;
type Session = z.infer<typeof SessionSchema>;
/**
 * Authentication Response Types
 */
interface AuthResponse {
    success: boolean;
    user?: User;
    session?: Session;
    redirectUrl?: string;
    requiresMFA?: boolean;
    mfaMethods?: MFAType[];
    error?: {
        code: string;
        message: string;
        field?: string;
    };
}
interface AuthContextType {
    user: User | null;
    session: Session | null;
    isLoading: boolean;
    isAuthenticated: boolean;
    signIn: (data: SignInRequest) => Promise<AuthResponse>;
    signUp: (data: SignUpRequest) => Promise<AuthResponse>;
    signOut: () => Promise<void>;
    resetPassword: (data: PasswordResetRequest) => Promise<AuthResponse>;
    confirmPasswordReset: (data: PasswordResetConfirmRequest) => Promise<AuthResponse>;
    socialAuth: (data: SocialAuthRequest) => Promise<AuthResponse>;
    setupMFA: (data: MFASetupRequest) => Promise<AuthResponse>;
    verifyMFA: (code: string, method: MFAType) => Promise<AuthResponse>;
    refreshSession: () => Promise<AuthResponse>;
}

export { ACCOUNT_TYPE_DESTINATIONS, type AdminUser, AdminUserSchema, type AuthContextType, AuthProvider, type AuthResponse, type BaseUser, BaseUserSchema, BusinessType, type BusinessUser, BusinessUserSchema, type DeveloperUser, DeveloperUserSchema, type IndividualUser, IndividualUserSchema, InstitutionType, type InstitutionUser, InstitutionUserSchema, type MFASetupRequest, MFASetupSchema, MFAType, type PasswordResetConfirmRequest, PasswordResetConfirmSchema, type PasswordResetRequest, PasswordResetSchema, type Session, SessionSchema, type SignInRequest, SignInSchema, type SignUpRequest, SignUpSchema, type SocialAuthRequest, SocialAuthSchema, type User, UserAccountType, VerificationStatus };
