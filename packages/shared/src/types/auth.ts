/**
 * Authentication and Authorization Types
 */

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: UserRole;
  permissions: Permission[];
  status: UserStatus;
  lastLogin?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthSession {
  user: User;
  accessToken: string;
  refreshToken: string;
  expiresAt: string;
}

export enum UserRole {
  INDIVIDUAL = 'individual',
  BUSINESS = 'business',
  INSTITUTION = 'institution',
  DEVELOPER = 'developer',
  ADMIN = 'admin',
  SUPER_ADMIN = 'super_admin'
}

export enum UserStatus {
  ACTIVE = 'active',
  PENDING = 'pending',
  SUSPENDED = 'suspended',
  CLOSED = 'closed'
}

export enum Permission {
  // Payment permissions
  PROCESS_PAYMENTS = 'process_payments',
  VIEW_PAYMENTS = 'view_payments',
  REFUND_PAYMENTS = 'refund_payments',
  
  // Customer permissions
  MANAGE_CUSTOMERS = 'manage_customers',
  VIEW_CUSTOMERS = 'view_customers',
  
  // Subscription permissions
  MANAGE_SUBSCRIPTIONS = 'manage_subscriptions',
  VIEW_SUBSCRIPTIONS = 'view_subscriptions',
  
  // Analytics permissions
  VIEW_ANALYTICS = 'view_analytics',
  EXPORT_DATA = 'export_data',
  
  // Settings permissions
  MANAGE_SETTINGS = 'manage_settings',
  MANAGE_API_KEYS = 'manage_api_keys',
  
  // Admin permissions
  MANAGE_USERS = 'manage_users',
  MANAGE_INSTITUTIONS = 'manage_institutions',
  VIEW_SYSTEM_HEALTH = 'view_system_health',
  MANAGE_COMPLIANCE = 'manage_compliance',
  
  // Super admin permissions
  PLATFORM_ADMIN = 'platform_admin',
  SYSTEM_CONFIG = 'system_config'
}

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterData {
  email: string;
  password: string;
  name: string;
  accountType: UserRole;
  agreeToTerms: boolean;
}

export interface AuthError {
  code: string;
  message: string;
  field?: string;
}
