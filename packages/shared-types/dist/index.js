"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  ACCOUNT_TYPE_DESTINATIONS: () => ACCOUNT_TYPE_DESTINATIONS,
  AdminUserSchema: () => AdminUserSchema,
  AuthProvider: () => AuthProvider,
  BaseUserSchema: () => BaseUserSchema,
  BusinessType: () => BusinessType,
  BusinessUserSchema: () => BusinessUserSchema,
  DeveloperUserSchema: () => DeveloperUserSchema,
  IndividualUserSchema: () => IndividualUserSchema,
  InstitutionType: () => InstitutionType,
  InstitutionUserSchema: () => InstitutionUserSchema,
  MFASetupSchema: () => MFASetupSchema,
  MFAType: () => MFAType,
  PasswordResetConfirmSchema: () => PasswordResetConfirmSchema,
  PasswordResetSchema: () => PasswordResetSchema,
  SessionSchema: () => SessionSchema,
  SignInSchema: () => SignInSchema,
  SignUpSchema: () => SignUpSchema,
  SocialAuthSchema: () => SocialAuthSchema,
  UserAccountType: () => UserAccountType,
  VerificationStatus: () => VerificationStatus
});
module.exports = __toCommonJS(index_exports);

// src/auth.ts
var import_zod = require("zod");
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
var BaseUserSchema = import_zod.z.object({
  id: import_zod.z.string().uuid(),
  email: import_zod.z.string().email(),
  emailVerified: import_zod.z.boolean().default(false),
  phone: import_zod.z.string().optional(),
  phoneVerified: import_zod.z.boolean().default(false),
  accountType: import_zod.z.nativeEnum(UserAccountType),
  firstName: import_zod.z.string().min(1),
  lastName: import_zod.z.string().min(1),
  avatar: import_zod.z.string().url().optional(),
  timezone: import_zod.z.string().default("UTC"),
  locale: import_zod.z.string().default("en"),
  currency: import_zod.z.string().length(3).default("USD"),
  mfaEnabled: import_zod.z.boolean().default(false),
  mfaMethods: import_zod.z.array(import_zod.z.nativeEnum(MFAType)).default([]),
  lastLoginAt: import_zod.z.date().optional(),
  createdAt: import_zod.z.date(),
  updatedAt: import_zod.z.date()
});
var IndividualUserSchema = BaseUserSchema.extend({
  accountType: import_zod.z.literal("individual" /* INDIVIDUAL */),
  dateOfBirth: import_zod.z.date().optional(),
  nationality: import_zod.z.string().optional(),
  occupation: import_zod.z.string().optional(),
  kycStatus: import_zod.z.nativeEnum(VerificationStatus).default("pending" /* PENDING */)
});
var BusinessUserSchema = BaseUserSchema.extend({
  accountType: import_zod.z.literal("business" /* BUSINESS */),
  businessName: import_zod.z.string().min(1),
  businessType: import_zod.z.nativeEnum(BusinessType),
  businessRegistrationNumber: import_zod.z.string().optional(),
  taxId: import_zod.z.string().optional(),
  website: import_zod.z.string().url().optional(),
  businessVerificationStatus: import_zod.z.nativeEnum(VerificationStatus).default("pending" /* PENDING */),
  monthlyVolume: import_zod.z.number().optional(),
  industry: import_zod.z.string().optional()
});
var InstitutionUserSchema = BaseUserSchema.extend({
  accountType: import_zod.z.literal("institution" /* INSTITUTION */),
  institutionName: import_zod.z.string().min(1),
  institutionType: import_zod.z.nativeEnum(InstitutionType),
  regulatoryLicense: import_zod.z.string().optional(),
  swiftCode: import_zod.z.string().optional(),
  institutionVerificationStatus: import_zod.z.nativeEnum(VerificationStatus).default("pending" /* PENDING */),
  complianceOfficer: import_zod.z.object({
    name: import_zod.z.string(),
    email: import_zod.z.string().email(),
    phone: import_zod.z.string()
  }).optional()
});
var DeveloperUserSchema = BaseUserSchema.extend({
  accountType: import_zod.z.literal("developer" /* DEVELOPER */),
  githubUsername: import_zod.z.string().optional(),
  company: import_zod.z.string().optional(),
  yearsExperience: import_zod.z.number().min(0).max(50).optional(),
  preferredLanguages: import_zod.z.array(import_zod.z.string()).default([]),
  apiKeyTier: import_zod.z.enum(["sandbox", "development", "production"]).default("sandbox")
});
var AdminUserSchema = BaseUserSchema.extend({
  accountType: import_zod.z.literal("admin" /* ADMIN */),
  permissions: import_zod.z.array(import_zod.z.string()).default([]),
  department: import_zod.z.string().optional(),
  level: import_zod.z.enum(["admin", "super_admin", "system_admin"]).default("admin")
});
var SignInSchema = import_zod.z.object({
  email: import_zod.z.string().email(),
  password: import_zod.z.string().min(8),
  accountType: import_zod.z.nativeEnum(UserAccountType).optional(),
  // For routing
  rememberMe: import_zod.z.boolean().optional().default(false),
  mfaCode: import_zod.z.string().optional()
});
var SignUpSchema = import_zod.z.object({
  email: import_zod.z.string().email(),
  password: import_zod.z.string().min(8).regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
    "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character"
  ),
  confirmPassword: import_zod.z.string(),
  firstName: import_zod.z.string().min(1),
  lastName: import_zod.z.string().min(1),
  phone: import_zod.z.string().optional(),
  accountType: import_zod.z.nativeEnum(UserAccountType),
  agreeToTerms: import_zod.z.boolean().refine((val) => val === true, "You must agree to the terms and conditions"),
  agreeToPrivacy: import_zod.z.boolean().refine((val) => val === true, "You must agree to the privacy policy"),
  marketingConsent: import_zod.z.boolean().default(false),
  // Conditional fields based on account type
  businessName: import_zod.z.string().optional(),
  businessType: import_zod.z.nativeEnum(BusinessType).optional(),
  institutionName: import_zod.z.string().optional(),
  institutionType: import_zod.z.nativeEnum(InstitutionType).optional(),
  company: import_zod.z.string().optional(),
  // For developers
  referralCode: import_zod.z.string().optional()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});
var SocialAuthSchema = import_zod.z.object({
  provider: import_zod.z.nativeEnum(AuthProvider),
  providerUserId: import_zod.z.string(),
  accessToken: import_zod.z.string(),
  refreshToken: import_zod.z.string().optional(),
  accountType: import_zod.z.nativeEnum(UserAccountType).optional()
});
var PasswordResetSchema = import_zod.z.object({
  email: import_zod.z.string().email()
});
var PasswordResetConfirmSchema = import_zod.z.object({
  token: import_zod.z.string(),
  password: import_zod.z.string().min(8),
  confirmPassword: import_zod.z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});
var MFASetupSchema = import_zod.z.object({
  method: import_zod.z.nativeEnum(MFAType),
  phoneNumber: import_zod.z.string().optional(),
  // For SMS
  backupCodes: import_zod.z.array(import_zod.z.string()).optional()
});
var SessionSchema = import_zod.z.object({
  id: import_zod.z.string(),
  userId: import_zod.z.string().uuid(),
  user: BaseUserSchema,
  accessToken: import_zod.z.string(),
  refreshToken: import_zod.z.string(),
  expiresAt: import_zod.z.date(),
  device: import_zod.z.object({
    userAgent: import_zod.z.string(),
    ip: import_zod.z.string(),
    location: import_zod.z.string().optional()
  })
});
var ACCOUNT_TYPE_DESTINATIONS = {
  ["individual" /* INDIVIDUAL */]: "https://app.sunnypayments.com",
  ["business" /* BUSINESS */]: "https://business.sunnypayments.com",
  ["institution" /* INSTITUTION */]: "https://institutions.sunnypayments.com",
  ["developer" /* DEVELOPER */]: "https://developers.sunnypayments.com",
  ["admin" /* ADMIN */]: "https://admin.sunnypayments.com"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
});
