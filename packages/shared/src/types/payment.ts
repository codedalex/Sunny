/**
 * Shared Payment Types for Sunny Platform
 */

export interface PaymentData {
  amount: number;
  currency: string;
  paymentMethod: PaymentMethods;
  customer: CustomerData;
  metadata?: Record<string, unknown>;
  instantSettlement?: boolean;
  description?: string;
  creditScore?: number;
  splits?: PaymentSplit[];
}

export interface PaymentResult {
  success: boolean;
  transactionId: string;
  status: PaymentStatus;
  amount: number;
  currency: string;
  paymentMethod: string;
  fees?: FeeDetails;
  error?: ErrorCodes;
  message?: string;
  processorResponse?: ProcessorResponse;
  settlement?: SettlementResult;
  metadata?: Record<string, unknown>;
}

export interface CustomerData {
  name: string;
  email: string;
  phone?: string;
  country?: string;
  address?: AddressData;
  id?: string;
}

export interface AddressData {
  line1: string;
  line2?: string;
  city: string;
  state?: string;
  postalCode: string;
  country: string;
}

export interface PaymentSplit {
  destination: string;
  amount: number;
  currency: string;
  description?: string;
}

export interface FeeDetails {
  currency: string;
  baseFee: {
    percentage: number;
    fixed: number;
    currency: string;
  };
  discounts: {
    percentage: number;
    fixed: number;
    reason: string;
  };
  regionalAdjustment: {
    percentage: number;
    fixed: number;
    region: string;
  };
  finalRate: {
    percentage: number;
    fixed: number;
  };
  breakdown: {
    percentageFee: number;
    fixedFee: number;
    totalFee: number;
  };
  grossAmount: number;
  netAmount: number;
  feePercentage: number;
}

export interface ProcessorResponse {
  authorizationCode?: string;
  processorTransactionId: string;
  processorName: string;
  mobileMoneyId?: string;
  providerReference?: string;
}

export interface SettlementResult {
  success: boolean;
  settlementId: string;
  originalTransactionId: string;
  amount: number;
  currency: string;
  fee: {
    fee: number;
    percentage: number;
    currency: string;
  };
  status: string;
  type: SettlementTypes;
  timestamp: string;
  destinationAccountType: string;
  destinationAccountLast4: string;
  estimatedArrivalTime: string;
}

// Enums
export enum PaymentMethods {
  CARD = 'card',
  BANK_TRANSFER = 'bank_transfer',
  ACH = 'ach',
  SEPA = 'sepa',
  WIRE = 'wire',
  MOBILE_MONEY = 'mobile_money',
  MPESA = 'mpesa',
  MTN = 'mtn',
  AIRTEL = 'airtel',
  ORANGE = 'orange',
  APPLE_PAY = 'apple_pay',
  GOOGLE_PAY = 'google_pay',
  SAMSUNG_PAY = 'samsung_pay',
  UPI = 'upi',
  ALIPAY = 'alipay',
  WECHAT = 'wechat',
  PAYTM = 'paytm',
  PIX = 'pix',
  BOLETO = 'boleto',
  OXXO = 'oxxo',
  IDEAL = 'ideal',
  SOFORT = 'sofort',
  GIROPAY = 'giropay',
  BANCONTACT = 'bancontact',
  CRYPTO = 'crypto',
  KLARNA = 'klarna',
  AFTERPAY = 'afterpay',
  AFFIRM = 'affirm',
  CASH = 'cash',
  INVOICE = 'invoice'
}

export enum PaymentStatus {
  PENDING = 'pending',
  PROCESSING = 'processing',
  COMPLETED = 'completed',
  FAILED = 'failed',
  REJECTED = 'rejected',
  REFUNDED = 'refunded',
  PARTIALLY_REFUNDED = 'partially_refunded',
  CANCELED = 'canceled',
  ERROR = 'error'
}

export enum ErrorCodes {
  VALIDATION_ERROR = 'validation_error',
  INVALID_AMOUNT = 'invalid_amount',
  INVALID_CURRENCY = 'invalid_currency',
  INVALID_PAYMENT_METHOD = 'invalid_payment_method',
  INVALID_CARD = 'invalid_card',
  INVALID_BANK_ACCOUNT = 'invalid_bank_account',
  INVALID_MOBILE_NUMBER = 'invalid_mobile_number',
  INVALID_CRYPTO_ADDRESS = 'invalid_crypto_address',
  INVALID_REFUND_AMOUNT = 'invalid_refund_amount',
  PROCESSING_ERROR = 'processing_error',
  INSUFFICIENT_FUNDS = 'insufficient_funds',
  CARD_DECLINED = 'card_declined',
  EXPIRED_CARD = 'expired_card',
  INCORRECT_CVV = 'incorrect_cvv',
  BANK_ACCOUNT_ERROR = 'bank_account_error',
  MOBILE_MONEY_ERROR = 'mobile_money_error',
  CRYPTO_ERROR = 'crypto_error',
  SYSTEM_ERROR = 'system_error',
  NETWORK_ERROR = 'network_error',
  TIMEOUT_ERROR = 'timeout_error',
  FRAUD_DETECTED = 'fraud_detected',
  SECURITY_VIOLATION = 'security_violation',
  INVALID_SIGNATURE = 'invalid_signature',
  TRANSACTION_NOT_FOUND = 'transaction_not_found',
  DUPLICATE_TRANSACTION = 'duplicate_transaction',
  INVALID_TRANSACTION_STATE = 'invalid_transaction_state',
  AUTHENTICATION_ERROR = 'authentication_error',
  AUTHORIZATION_ERROR = 'authorization_error',
  RATE_LIMIT_EXCEEDED = 'rate_limit_exceeded',
  UNSUPPORTED_PAYMENT_METHOD = 'unsupported_payment_method',
  UNSUPPORTED_CURRENCY = 'unsupported_currency',
  UNSUPPORTED_COUNTRY = 'unsupported_country',
  VERIFICATION_ERROR = 'verification_error',
  REFUND_ERROR = 'refund_error',
  TOKENIZATION_ERROR = 'tokenization_error',
  PAYMENT_LINK_ERROR = 'payment_link_error',
  BALANCE_CHECK_ERROR = 'balance_check_error',
  SUBSCRIPTION_ERROR = 'subscription_error',
  MARKETPLACE_ERROR = 'marketplace_error',
  SETTLEMENT_ERROR = 'settlement_error',
  LOCALIZATION_ERROR = 'localization_error',
  ANALYTICS_ERROR = 'analytics_error'
}

export enum SettlementTypes {
  STANDARD = 'standard',
  INSTANT = 'instant',
  NEXT_DAY = 'next_day',
  WEEKLY = 'weekly'
}

export enum FeeTypes {
  TRANSACTION = 'transaction',
  REFUND = 'refund',
  CHARGEBACK = 'chargeback',
  PAYOUT = 'payout',
  CURRENCY_CONVERSION = 'currency_conversion',
  SUBSCRIPTION = 'subscription',
  MARKETPLACE = 'marketplace'
}

export enum TransactionTypes {
  PAYMENT = 'payment',
  REFUND = 'refund',
  PAYOUT = 'payout',
  TRANSFER = 'transfer',
  FEE = 'fee',
  ADJUSTMENT = 'adjustment',
  SUBSCRIPTION = 'subscription',
  INSTALLMENT = 'installment',
  MARKETPLACE_SPLIT = 'marketplace_split',
  DONATION = 'donation'
}

// Constants
export const CURRENCY_CODES = [
  'USD', 'EUR', 'GBP', 'CAD', 'AUD', 'JPY', 'CHF', 'CNY', 'HKD', 'SGD',
  'SEK', 'NOK', 'DKK', 'PLN', 'CZK', 'HUF', 'RON', 'BGN', 'ISK',
  'INR', 'IDR', 'MYR', 'PHP', 'THB', 'VND', 'KRW', 'TWD',
  'ZAR', 'NGN', 'KES', 'UGX', 'TZS', 'RWF', 'GHS', 'EGP', 'MAD',
  'BRL', 'MXN', 'ARS', 'CLP', 'COP', 'PEN', 'UYU',
  'AED', 'SAR', 'QAR', 'KWD', 'BHD', 'OMR',
  'BTC', 'ETH', 'XRP', 'LTC', 'BCH', 'USDT', 'USDC', 'DAI'
] as const;

export const COUNTRY_CODES = [
  'US', 'CA', 'MX',
  'GB', 'DE', 'FR', 'IT', 'ES', 'NL', 'BE', 'PT', 'IE', 'AT', 'CH', 'SE', 
  'NO', 'DK', 'FI', 'PL', 'CZ', 'HU', 'RO', 'BG', 'GR', 'HR',
  'AU', 'NZ', 'JP', 'CN', 'HK', 'SG', 'IN', 'ID', 'MY', 'PH', 'TH', 'VN', 'KR', 'TW',
  'AE', 'SA', 'QA', 'KW', 'BH', 'OM', 'IL',
  'ZA', 'NG', 'KE', 'UG', 'TZ', 'RW', 'GH', 'EG', 'MA',
  'BR', 'AR', 'CL', 'CO', 'PE', 'UY'
] as const;

export type CurrencyCode = typeof CURRENCY_CODES[number];
export type CountryCode = typeof COUNTRY_CODES[number];
