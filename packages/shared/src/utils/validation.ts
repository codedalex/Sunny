/**
 * Validation utilities
 */

import { z } from 'zod';
import { PaymentMethods, CURRENCY_CODES, COUNTRY_CODES } from '../types/payment';

/**
 * Email validation
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Phone number validation
 */
export function isValidPhoneNumber(phone: string): boolean {
  const phoneRegex = /^\+?[\d\s-()]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

/**
 * Credit card validation using Luhn algorithm
 */
export function isValidCardNumber(cardNumber: string): boolean {
  const cleaned = cardNumber.replace(/\D/g, '');
  
  if (cleaned.length < 13 || cleaned.length > 19) {
    return false;
  }

  // Luhn algorithm
  let sum = 0;
  let shouldDouble = false;

  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned.charAt(i));

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
}

/**
 * Card expiry validation
 */
export function isValidCardExpiry(expiry: string): boolean {
  const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
  if (!expiryRegex.test(expiry)) {
    return false;
  }

  const [month, year] = expiry.split('/');
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear() % 100;
  const currentMonth = currentDate.getMonth() + 1;

  const expiryYear = parseInt(year);
  const expiryMonth = parseInt(month);

  if (expiryYear < currentYear) {
    return false;
  }

  if (expiryYear === currentYear && expiryMonth < currentMonth) {
    return false;
  }

  return true;
}

/**
 * CVC validation
 */
export function isValidCVC(cvc: string, cardNumber?: string): boolean {
  const cleaned = cvc.replace(/\D/g, '');
  
  // American Express cards have 4-digit CVC
  if (cardNumber && getCardBrand(cardNumber) === 'amex') {
    return cleaned.length === 4;
  }
  
  return cleaned.length === 3;
}

/**
 * Get card brand from card number
 */
export function getCardBrand(cardNumber: string): string {
  const cleaned = cardNumber.replace(/\D/g, '');
  
  if (/^4/.test(cleaned)) return 'visa';
  if (/^5[1-5]/.test(cleaned)) return 'mastercard';
  if (/^3[47]/.test(cleaned)) return 'amex';
  if (/^6/.test(cleaned)) return 'discover';
  if (/^35/.test(cleaned)) return 'jcb';
  
  return 'unknown';
}

/**
 * Currency validation
 */
export function isValidCurrency(currency: string): boolean {
  return CURRENCY_CODES.includes(currency as any);
}

/**
 * Country code validation
 */
export function isValidCountryCode(country: string): boolean {
  return COUNTRY_CODES.includes(country as any);
}

/**
 * Amount validation
 */
export function isValidAmount(amount: number, currency: string): boolean {
  if (amount <= 0) return false;
  
  // Different currencies have different minimum amounts
  const minimums: Record<string, number> = {
    USD: 50, // 50 cents
    EUR: 50,
    GBP: 30,
    JPY: 50, // 50 yen
    KRW: 100, // 100 won
  };
  
  const minimum = minimums[currency] || 50;
  return amount >= minimum;
}

/**
 * Zod schemas for validation
 */
export const PaymentDataSchema = z.object({
  amount: z.number().positive('Amount must be positive'),
  currency: z.enum(CURRENCY_CODES as any, { message: 'Invalid currency code' }),
  paymentMethod: z.nativeEnum(PaymentMethods, { message: 'Invalid payment method' }),
  customer: z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email format'),
    phone: z.string().optional(),
    country: z.enum(COUNTRY_CODES as any).optional(),
  }),
  metadata: z.record(z.unknown()).optional(),
  instantSettlement: z.boolean().optional(),
  description: z.string().optional(),
  creditScore: z.number().min(300).max(850).optional(),
});

export const CardDataSchema = z.object({
  number: z.string()
    .min(13, 'Card number must be at least 13 digits')
    .max(19, 'Card number cannot exceed 19 digits')
    .regex(/^\d+$/, 'Card number must contain only digits')
    .refine(isValidCardNumber, 'Invalid card number'),
  expiry: z.string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Invalid expiry date format (MM/YY)')
    .refine(isValidCardExpiry, 'Card has expired'),
  cvc: z.string()
    .min(3, 'CVC must be at least 3 digits')
    .max(4, 'CVC cannot exceed 4 digits')
    .regex(/^\d+$/, 'CVC must contain only digits'),
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name cannot exceed 100 characters'),
});

export const BankAccountSchema = z.object({
  bankName: z.string().min(2, 'Bank name is required'),
  accountNumber: z.string().min(8, 'Account number must be at least 8 digits'),
  routingNumber: z.string()
    .length(9, 'Routing number must be exactly 9 digits')
    .regex(/^\d{9}$/, 'Routing number must contain only digits'),
});

export const MobileMoneySchema = z.object({
  provider: z.enum(['mpesa', 'mtn', 'airtel', 'orange'], { message: 'Invalid provider' }),
  phoneNumber: z.string()
    .min(10, 'Phone number must be at least 10 digits')
    .refine(isValidPhoneNumber, 'Invalid phone number format'),
});

/**
 * Validation result type
 */
export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

/**
 * Validate payment data
 */
export function validatePaymentData(data: unknown): ValidationResult {
  try {
    PaymentDataSchema.parse(data);
    return { isValid: true, errors: [] };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        isValid: false,
        errors: error.errors.map(err => `${err.path.join('.')}: ${err.message}`)
      };
    }
    return { isValid: false, errors: ['Invalid data format'] };
  }
}
