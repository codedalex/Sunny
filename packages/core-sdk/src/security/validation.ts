/**
 * Validation Service
 * Enhanced validation for payment data and security
 */

import { PaymentData } from '@sunny/shared/types';
import { validatePaymentData as sharedValidation } from '@sunny/shared/utils';

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export class ValidationService {
  validatePaymentData(data: PaymentData): ValidationResult {
    // Use shared validation as base
    const baseValidation = sharedValidation(data);
    
    if (!baseValidation.isValid) {
      return baseValidation;
    }

    // Additional security validations
    const errors: string[] = [];

    // Validate amount limits
    if (data.amount > 100000000) { // $1M limit in cents
      errors.push('Transaction amount exceeds maximum limit');
    }

    // Validate customer data completeness
    if (!data.customer.name || data.customer.name.length < 2) {
      errors.push('Customer name must be at least 2 characters');
    }

    if (!data.customer.email || !this.isValidEmail(data.customer.email)) {
      errors.push('Valid customer email is required');
    }

    // Validate metadata size
    if (data.metadata && JSON.stringify(data.metadata).length > 10000) {
      errors.push('Metadata too large (max 10KB)');
    }

    // Validate description
    if (data.description && data.description.length > 500) {
      errors.push('Description too long (max 500 characters)');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  validateApiCredentials(merchantId: string, apiKey: string, apiSecret: string): ValidationResult {
    const errors: string[] = [];

    if (!merchantId || merchantId.length < 8) {
      errors.push('Invalid merchant ID format');
    }

    if (!apiKey || apiKey.length < 20) {
      errors.push('Invalid API key format');
    }

    if (!apiSecret || apiSecret.length < 32) {
      errors.push('Invalid API secret format');
    }

    // Check for test vs production keys
    if (merchantId.startsWith('test_') && apiKey.startsWith('pk_live_')) {
      errors.push('Test merchant ID cannot use live API key');
    }

    if (merchantId.startsWith('live_') && apiKey.startsWith('pk_test_')) {
      errors.push('Live merchant ID cannot use test API key');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  validateWebhookSignature(payload: string, signature: string, secret: string): boolean {
    try {
      // In a real implementation, this would verify webhook signatures
      // using HMAC-SHA256 or similar
      const expectedSignature = this.generateHmacSignature(payload, secret);
      return signature === expectedSignature;
    } catch (error) {
      console.error('Webhook signature validation error:', error);
      return false;
    }
  }

  sanitizeInput(input: any): any {
    if (typeof input === 'string') {
      return input
        .trim()
        .replace(/[<>]/g, '') // Remove potential XSS characters
        .slice(0, 1000); // Limit length
    }

    if (typeof input === 'object' && input !== null) {
      const sanitized: any = {};
      for (const [key, value] of Object.entries(input)) {
        if (this.isAllowedKey(key)) {
          sanitized[key] = this.sanitizeInput(value);
        }
      }
      return sanitized;
    }

    return input;
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private generateHmacSignature(payload: string, secret: string): string {
    // Simplified HMAC generation - in real implementation use crypto.createHmac
    return Buffer.from(payload + secret).toString('base64');
  }

  private isAllowedKey(key: string): boolean {
    const disallowedKeys = ['__proto__', 'constructor', 'prototype'];
    return !disallowedKeys.includes(key);
  }
}
