// src/auth.ts
import { z } from "zod";
var UserAccountType = /* @__PURE__ */ ((UserAccountType2) => {
  UserAccountType2["INDIVIDUAL"] = "individual";
  UserAccountType2["BUSINESS"] = "business";
  UserAccountType2["INSTITUTION"] = "institution";
  UserAccountType2["DEVELOPER"] = "developer";
  UserAccountType2["ADMIN"] = "admin";
  return UserAccountType2;
})(UserAccountType || {});
var AuthProvider = /* @__PURE__ */ ((AuthProvider2) => {
  AuthProvider2["EMAIL"] = "email";
  AuthProvider2["GOOGLE"] = "google";
  AuthProvider2["APPLE"] = "apple";
  AuthProvider2["MICROSOFT"] = "microsoft";
  AuthProvider2["GITHUB"] = "github";
  AuthProvider2["LINKEDIN"] = "linkedin";
  return AuthProvider2;
})(AuthProvider || {});
var MFAType = /* @__PURE__ */ ((MFAType2) => {
  MFAType2["SMS"] = "sms";
  MFAType2["EMAIL"] = "email";
  MFAType2["TOTP"] = "totp";
  MFAType2["BIOMETRIC"] = "biometric";
  MFAType2["HARDWARE_TOKEN"] = "hardware_token";
  return MFAType2;
})(MFAType || {});
var VerificationStatus = /* @__PURE__ */ ((VerificationStatus2) => {
  VerificationStatus2["PENDING"] = "pending";
  VerificationStatus2["VERIFIED"] = "verified";
  VerificationStatus2["REJECTED"] = "rejected";
  VerificationStatus2["EXPIRED"] = "expired";
  return VerificationStatus2;
})(VerificationStatus || {});
var InstitutionType = /* @__PURE__ */ ((InstitutionType2) => {
  InstitutionType2["BANK"] = "bank";
  InstitutionType2["CREDIT_UNION"] = "credit_union";
  InstitutionType2["FINTECH"] = "fintech";
  InstitutionType2["PAYMENT_PROCESSOR"] = "payment_processor";
  InstitutionType2["REMITTANCE_SERVICE"] = "remittance_service";
  InstitutionType2["SACCO"] = "sacco";
  InstitutionType2["MICROFINANCE"] = "microfinance";
  return InstitutionType2;
})(InstitutionType || {});
var BusinessType = /* @__PURE__ */ ((BusinessType2) => {
  BusinessType2["SOLE_PROPRIETORSHIP"] = "sole_proprietorship";
  BusinessType2["PARTNERSHIP"] = "partnership";
  BusinessType2["CORPORATION"] = "corporation";
  BusinessType2["LLC"] = "llc";
  BusinessType2["NON_PROFIT"] = "non_profit";
  BusinessType2["STARTUP"] = "startup";
  BusinessType2["ENTERPRISE"] = "enterprise";
  return BusinessType2;
})(BusinessType || {});
var BaseUserSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  emailVerified: z.boolean().default(false),
  phone: z.string().optional(),
  phoneVerified: z.boolean().default(false),
  accountType: z.nativeEnum(UserAccountType),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  avatar: z.string().url().optional(),
  timezone: z.string().default("UTC"),
  locale: z.string().default("en"),
  currency: z.string().length(3).default("USD"),
  mfaEnabled: z.boolean().default(false),
  mfaMethods: z.array(z.nativeEnum(MFAType)).default([]),
  lastLoginAt: z.date().optional(),
  createdAt: z.date(),
  updatedAt: z.date()
});
var IndividualUserSchema = BaseUserSchema.extend({
  accountType: z.literal("individual" /* INDIVIDUAL */),
  dateOfBirth: z.date().optional(),
  nationality: z.string().optional(),
  occupation: z.string().optional(),
  kycStatus: z.nativeEnum(VerificationStatus).default("pending" /* PENDING */)
});
var BusinessUserSchema = BaseUserSchema.extend({
  accountType: z.literal("business" /* BUSINESS */),
  businessName: z.string().min(1),
  businessType: z.nativeEnum(BusinessType),
  businessRegistrationNumber: z.string().optional(),
  taxId: z.string().optional(),
  website: z.string().url().optional(),
  businessVerificationStatus: z.nativeEnum(VerificationStatus).default("pending" /* PENDING */),
  monthlyVolume: z.number().optional(),
  industry: z.string().optional()
});
var InstitutionUserSchema = BaseUserSchema.extend({
  accountType: z.literal("institution" /* INSTITUTION */),
  institutionName: z.string().min(1),
  institutionType: z.nativeEnum(InstitutionType),
  regulatoryLicense: z.string().optional(),
  swiftCode: z.string().optional(),
  institutionVerificationStatus: z.nativeEnum(VerificationStatus).default("pending" /* PENDING */),
  complianceOfficer: z.object({
    name: z.string(),
    email: z.string().email(),
    phone: z.string()
  }).optional()
});
var DeveloperUserSchema = BaseUserSchema.extend({
  accountType: z.literal("developer" /* DEVELOPER */),
  githubUsername: z.string().optional(),
  company: z.string().optional(),
  yearsExperience: z.number().min(0).max(50).optional(),
  preferredLanguages: z.array(z.string()).default([]),
  apiKeyTier: z.enum(["sandbox", "development", "production"]).default("sandbox")
});
var AdminUserSchema = BaseUserSchema.extend({
  accountType: z.literal("admin" /* ADMIN */),
  permissions: z.array(z.string()).default([]),
  department: z.string().optional(),
  level: z.enum(["admin", "super_admin", "system_admin"]).default("admin")
});
var SignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  accountType: z.nativeEnum(UserAccountType).optional(),
  // For routing
  rememberMe: z.boolean().optional().default(false),
  mfaCode: z.string().optional()
});
var SignUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
    "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character"
  ),
  confirmPassword: z.string(),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  phone: z.string().optional(),
  accountType: z.nativeEnum(UserAccountType),
  agreeToTerms: z.boolean().refine((val) => val === true, "You must agree to the terms and conditions"),
  agreeToPrivacy: z.boolean().refine((val) => val === true, "You must agree to the privacy policy"),
  marketingConsent: z.boolean().default(false),
  // Conditional fields based on account type
  businessName: z.string().optional(),
  businessType: z.nativeEnum(BusinessType).optional(),
  institutionName: z.string().optional(),
  institutionType: z.nativeEnum(InstitutionType).optional(),
  company: z.string().optional(),
  // For developers
  referralCode: z.string().optional()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});
var SocialAuthSchema = z.object({
  provider: z.nativeEnum(AuthProvider),
  providerUserId: z.string(),
  accessToken: z.string(),
  refreshToken: z.string().optional(),
  accountType: z.nativeEnum(UserAccountType).optional()
});
var PasswordResetSchema = z.object({
  email: z.string().email()
});
var PasswordResetConfirmSchema = z.object({
  token: z.string(),
  password: z.string().min(8),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});
var MFASetupSchema = z.object({
  method: z.nativeEnum(MFAType),
  phoneNumber: z.string().optional(),
  // For SMS
  backupCodes: z.array(z.string()).optional()
});
var SessionSchema = z.object({
  id: z.string(),
  userId: z.string().uuid(),
  user: BaseUserSchema,
  accessToken: z.string(),
  refreshToken: z.string(),
  expiresAt: z.date(),
  device: z.object({
    userAgent: z.string(),
    ip: z.string(),
    location: z.string().optional()
  })
});
var ACCOUNT_TYPE_DESTINATIONS = {
  ["individual" /* INDIVIDUAL */]: "https://app.sunnypayments.com",
  ["business" /* BUSINESS */]: "https://business.sunnypayments.com",
  ["institution" /* INSTITUTION */]: "https://institutions.sunnypayments.com",
  ["developer" /* DEVELOPER */]: "https://developers.sunnypayments.com",
  ["admin" /* ADMIN */]: "https://admin.sunnypayments.com"
};
export {
  ACCOUNT_TYPE_DESTINATIONS,
  AdminUserSchema,
  AuthProvider,
  BaseUserSchema,
  BusinessType,
  BusinessUserSchema,
  DeveloperUserSchema,
  IndividualUserSchema,
  InstitutionType,
  InstitutionUserSchema,
  MFASetupSchema,
  MFAType,
  PasswordResetConfirmSchema,
  PasswordResetSchema,
  SessionSchema,
  SignInSchema,
  SignUpSchema,
  SocialAuthSchema,
  UserAccountType,
  VerificationStatus
};
