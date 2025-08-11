/**
 * Payment method utilities
 */

import { PaymentMethods } from '../types/payment';

/**
 * Get display name for payment method
 */
export function getPaymentMethodName(method: PaymentMethods | string): string {
  const names: Record<string, string> = {
    [PaymentMethods.CARD]: 'Credit or Debit Card',
    [PaymentMethods.BANK_TRANSFER]: 'Bank Transfer',
    [PaymentMethods.ACH]: 'ACH Transfer',
    [PaymentMethods.SEPA]: 'SEPA Transfer',
    [PaymentMethods.WIRE]: 'Wire Transfer',
    [PaymentMethods.MOBILE_MONEY]: 'Mobile Money',
    [PaymentMethods.MPESA]: 'M-Pesa',
    [PaymentMethods.MTN]: 'MTN Mobile Money',
    [PaymentMethods.AIRTEL]: 'Airtel Money',
    [PaymentMethods.ORANGE]: 'Orange Money',
    [PaymentMethods.APPLE_PAY]: 'Apple Pay',
    [PaymentMethods.GOOGLE_PAY]: 'Google Pay',
    [PaymentMethods.SAMSUNG_PAY]: 'Samsung Pay',
    [PaymentMethods.UPI]: 'UPI',
    [PaymentMethods.ALIPAY]: 'Alipay',
    [PaymentMethods.WECHAT]: 'WeChat Pay',
    [PaymentMethods.PAYTM]: 'Paytm',
    [PaymentMethods.PIX]: 'PIX',
    [PaymentMethods.BOLETO]: 'Boleto',
    [PaymentMethods.OXXO]: 'OXXO',
    [PaymentMethods.IDEAL]: 'iDEAL',
    [PaymentMethods.SOFORT]: 'Sofort',
    [PaymentMethods.GIROPAY]: 'Giropay',
    [PaymentMethods.BANCONTACT]: 'Bancontact',
    [PaymentMethods.CRYPTO]: 'Cryptocurrency',
    [PaymentMethods.KLARNA]: 'Klarna',
    [PaymentMethods.AFTERPAY]: 'Afterpay',
    [PaymentMethods.AFFIRM]: 'Affirm',
    [PaymentMethods.CASH]: 'Cash',
    [PaymentMethods.INVOICE]: 'Invoice',
  };

  return names[method] || method;
}

/**
 * Get payment method category
 */
export function getPaymentMethodCategory(method: PaymentMethods | string): string {
  const categories: Record<string, string> = {
    [PaymentMethods.CARD]: 'cards',
    [PaymentMethods.BANK_TRANSFER]: 'bank_transfers',
    [PaymentMethods.ACH]: 'bank_transfers',
    [PaymentMethods.SEPA]: 'bank_transfers',
    [PaymentMethods.WIRE]: 'bank_transfers',
    [PaymentMethods.MOBILE_MONEY]: 'mobile_payments',
    [PaymentMethods.MPESA]: 'mobile_payments',
    [PaymentMethods.MTN]: 'mobile_payments',
    [PaymentMethods.AIRTEL]: 'mobile_payments',
    [PaymentMethods.ORANGE]: 'mobile_payments',
    [PaymentMethods.APPLE_PAY]: 'digital_wallets',
    [PaymentMethods.GOOGLE_PAY]: 'digital_wallets',
    [PaymentMethods.SAMSUNG_PAY]: 'digital_wallets',
    [PaymentMethods.UPI]: 'digital_wallets',
    [PaymentMethods.ALIPAY]: 'digital_wallets',
    [PaymentMethods.WECHAT]: 'digital_wallets',
    [PaymentMethods.PAYTM]: 'digital_wallets',
    [PaymentMethods.PIX]: 'regional_methods',
    [PaymentMethods.BOLETO]: 'regional_methods',
    [PaymentMethods.OXXO]: 'regional_methods',
    [PaymentMethods.IDEAL]: 'regional_methods',
    [PaymentMethods.SOFORT]: 'regional_methods',
    [PaymentMethods.GIROPAY]: 'regional_methods',
    [PaymentMethods.BANCONTACT]: 'regional_methods',
    [PaymentMethods.CRYPTO]: 'cryptocurrency',
    [PaymentMethods.KLARNA]: 'buy_now_pay_later',
    [PaymentMethods.AFTERPAY]: 'buy_now_pay_later',
    [PaymentMethods.AFFIRM]: 'buy_now_pay_later',
    [PaymentMethods.CASH]: 'offline',
    [PaymentMethods.INVOICE]: 'offline',
  };

  return categories[method] || 'other';
}

/**
 * Get payment methods available for a country
 */
export function getPaymentMethodsForCountry(countryCode: string): PaymentMethods[] {
  const countryMethods: Record<string, PaymentMethods[]> = {
    US: [
      PaymentMethods.CARD,
      PaymentMethods.ACH,
      PaymentMethods.APPLE_PAY,
      PaymentMethods.GOOGLE_PAY,
      PaymentMethods.KLARNA,
      PaymentMethods.AFTERPAY,
      PaymentMethods.AFFIRM,
    ],
    CA: [
      PaymentMethods.CARD,
      PaymentMethods.BANK_TRANSFER,
      PaymentMethods.APPLE_PAY,
      PaymentMethods.GOOGLE_PAY,
    ],
    GB: [
      PaymentMethods.CARD,
      PaymentMethods.BANK_TRANSFER,
      PaymentMethods.APPLE_PAY,
      PaymentMethods.GOOGLE_PAY,
      PaymentMethods.KLARNA,
    ],
    DE: [
      PaymentMethods.CARD,
      PaymentMethods.SEPA,
      PaymentMethods.SOFORT,
      PaymentMethods.GIROPAY,
      PaymentMethods.KLARNA,
    ],
    NL: [
      PaymentMethods.CARD,
      PaymentMethods.SEPA,
      PaymentMethods.IDEAL,
      PaymentMethods.KLARNA,
    ],
    BE: [
      PaymentMethods.CARD,
      PaymentMethods.SEPA,
      PaymentMethods.BANCONTACT,
    ],
    BR: [
      PaymentMethods.CARD,
      PaymentMethods.PIX,
      PaymentMethods.BOLETO,
    ],
    MX: [
      PaymentMethods.CARD,
      PaymentMethods.OXXO,
      PaymentMethods.BANK_TRANSFER,
    ],
    IN: [
      PaymentMethods.CARD,
      PaymentMethods.UPI,
      PaymentMethods.PAYTM,
      PaymentMethods.BANK_TRANSFER,
    ],
    CN: [
      PaymentMethods.ALIPAY,
      PaymentMethods.WECHAT,
      PaymentMethods.CARD,
    ],
    KE: [
      PaymentMethods.CARD,
      PaymentMethods.MPESA,
      PaymentMethods.BANK_TRANSFER,
    ],
    NG: [
      PaymentMethods.CARD,
      PaymentMethods.BANK_TRANSFER,
      PaymentMethods.MOBILE_MONEY,
    ],
  };

  // Default methods available globally
  const defaultMethods = [
    PaymentMethods.CARD,
    PaymentMethods.BANK_TRANSFER,
    PaymentMethods.APPLE_PAY,
    PaymentMethods.GOOGLE_PAY,
  ];

  return countryMethods[countryCode] || defaultMethods;
}

/**
 * Check if payment method supports instant settlement
 */
export function supportsInstantSettlement(method: PaymentMethods | string): boolean {
  const instantMethods = [
    PaymentMethods.CARD,
    PaymentMethods.MOBILE_MONEY,
    PaymentMethods.MPESA,
    PaymentMethods.MTN,
    PaymentMethods.AIRTEL,
    PaymentMethods.CRYPTO,
    PaymentMethods.UPI,
    PaymentMethods.APPLE_PAY,
    PaymentMethods.GOOGLE_PAY,
  ];

  return instantMethods.includes(method as PaymentMethods);
}

/**
 * Get processing time estimate for payment method
 */
export function getProcessingTime(method: PaymentMethods | string): string {
  const times: Record<string, string> = {
    [PaymentMethods.CARD]: 'Instant',
    [PaymentMethods.APPLE_PAY]: 'Instant',
    [PaymentMethods.GOOGLE_PAY]: 'Instant',
    [PaymentMethods.CRYPTO]: '5-10 minutes',
    [PaymentMethods.UPI]: 'Instant',
    [PaymentMethods.MOBILE_MONEY]: 'Instant',
    [PaymentMethods.MPESA]: 'Instant',
    [PaymentMethods.BANK_TRANSFER]: '1-3 business days',
    [PaymentMethods.ACH]: '1-3 business days',
    [PaymentMethods.SEPA]: '1-2 business days',
    [PaymentMethods.WIRE]: 'Same day',
    [PaymentMethods.PIX]: 'Instant',
    [PaymentMethods.BOLETO]: '1-3 business days',
    [PaymentMethods.KLARNA]: 'Instant',
    [PaymentMethods.AFTERPAY]: 'Instant',
    [PaymentMethods.AFFIRM]: 'Instant',
  };

  return times[method] || '1-3 business days';
}
