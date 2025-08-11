/**
 * Sunny Payment Gateway Core SDK - Main Export
 */

// Main payment gateway
export { SunnyPaymentGateway, type PaymentGatewayConfig } from './payment-gateway';

// API client
export { SunnyAPIClient, type APIClientConfig } from './api-client';

// Services
export { FeeCalculator } from './services/fee-calculator';
export { InstantSettlement } from './services/instant-settlement';
export { TransactionLogger } from './services/transaction-logger';

// Security
export { FraudDetectionService, type FraudDetectionResult } from './security/fraud-detection';
export { EncryptionService } from './security/encryption';
export { ValidationService, type ValidationResult } from './security/validation';

// Re-export shared types for convenience
export type {
  PaymentData,
  PaymentResult,
  PaymentMethods,
  PaymentStatus,
  ErrorCodes,
  FeeDetails,
  SettlementResult,
  CustomerData,
  AddressData
} from '@sunny/shared/types';

// Version
export const VERSION = '1.0.0';
