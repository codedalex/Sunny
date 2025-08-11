/**
 * Currency utilities
 */

import { CurrencyCode } from '../types/payment';

/**
 * Currency information
 */
export interface CurrencyInfo {
  code: CurrencyCode;
  name: string;
  symbol: string;
  decimals: number;
  isCrypto: boolean;
}

/**
 * Currency database
 */
export const CURRENCIES: Record<string, CurrencyInfo> = {
  USD: { code: 'USD', name: 'US Dollar', symbol: '$', decimals: 2, isCrypto: false },
  EUR: { code: 'EUR', name: 'Euro', symbol: '€', decimals: 2, isCrypto: false },
  GBP: { code: 'GBP', name: 'British Pound', symbol: '£', decimals: 2, isCrypto: false },
  CAD: { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$', decimals: 2, isCrypto: false },
  AUD: { code: 'AUD', name: 'Australian Dollar', symbol: 'A$', decimals: 2, isCrypto: false },
  JPY: { code: 'JPY', name: 'Japanese Yen', symbol: '¥', decimals: 0, isCrypto: false },
  CHF: { code: 'CHF', name: 'Swiss Franc', symbol: 'CHF', decimals: 2, isCrypto: false },
  CNY: { code: 'CNY', name: 'Chinese Yuan', symbol: '¥', decimals: 2, isCrypto: false },
  HKD: { code: 'HKD', name: 'Hong Kong Dollar', symbol: 'HK$', decimals: 2, isCrypto: false },
  SGD: { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$', decimals: 2, isCrypto: false },
  SEK: { code: 'SEK', name: 'Swedish Krona', symbol: 'kr', decimals: 2, isCrypto: false },
  NOK: { code: 'NOK', name: 'Norwegian Krone', symbol: 'kr', decimals: 2, isCrypto: false },
  DKK: { code: 'DKK', name: 'Danish Krone', symbol: 'kr', decimals: 2, isCrypto: false },
  PLN: { code: 'PLN', name: 'Polish Złoty', symbol: 'zł', decimals: 2, isCrypto: false },
  CZK: { code: 'CZK', name: 'Czech Koruna', symbol: 'Kč', decimals: 2, isCrypto: false },
  HUF: { code: 'HUF', name: 'Hungarian Forint', symbol: 'Ft', decimals: 0, isCrypto: false },
  RON: { code: 'RON', name: 'Romanian Leu', symbol: 'lei', decimals: 2, isCrypto: false },
  BGN: { code: 'BGN', name: 'Bulgarian Lev', symbol: 'лв', decimals: 2, isCrypto: false },
  ISK: { code: 'ISK', name: 'Icelandic Króna', symbol: 'kr', decimals: 0, isCrypto: false },
  INR: { code: 'INR', name: 'Indian Rupee', symbol: '₹', decimals: 2, isCrypto: false },
  IDR: { code: 'IDR', name: 'Indonesian Rupiah', symbol: 'Rp', decimals: 0, isCrypto: false },
  MYR: { code: 'MYR', name: 'Malaysian Ringgit', symbol: 'RM', decimals: 2, isCrypto: false },
  PHP: { code: 'PHP', name: 'Philippine Peso', symbol: '₱', decimals: 2, isCrypto: false },
  THB: { code: 'THB', name: 'Thai Baht', symbol: '฿', decimals: 2, isCrypto: false },
  VND: { code: 'VND', name: 'Vietnamese Đồng', symbol: '₫', decimals: 0, isCrypto: false },
  KRW: { code: 'KRW', name: 'South Korean Won', symbol: '₩', decimals: 0, isCrypto: false },
  TWD: { code: 'TWD', name: 'Taiwan Dollar', symbol: 'NT$', decimals: 2, isCrypto: false },
  ZAR: { code: 'ZAR', name: 'South African Rand', symbol: 'R', decimals: 2, isCrypto: false },
  NGN: { code: 'NGN', name: 'Nigerian Naira', symbol: '₦', decimals: 2, isCrypto: false },
  KES: { code: 'KES', name: 'Kenyan Shilling', symbol: 'KSh', decimals: 2, isCrypto: false },
  UGX: { code: 'UGX', name: 'Ugandan Shilling', symbol: 'USh', decimals: 0, isCrypto: false },
  TZS: { code: 'TZS', name: 'Tanzanian Shilling', symbol: 'TSh', decimals: 0, isCrypto: false },
  RWF: { code: 'RWF', name: 'Rwandan Franc', symbol: 'RF', decimals: 0, isCrypto: false },
  GHS: { code: 'GHS', name: 'Ghanaian Cedi', symbol: '₵', decimals: 2, isCrypto: false },
  EGP: { code: 'EGP', name: 'Egyptian Pound', symbol: 'E£', decimals: 2, isCrypto: false },
  MAD: { code: 'MAD', name: 'Moroccan Dirham', symbol: 'MAD', decimals: 2, isCrypto: false },
  BRL: { code: 'BRL', name: 'Brazilian Real', symbol: 'R$', decimals: 2, isCrypto: false },
  MXN: { code: 'MXN', name: 'Mexican Peso', symbol: '$', decimals: 2, isCrypto: false },
  ARS: { code: 'ARS', name: 'Argentine Peso', symbol: '$', decimals: 2, isCrypto: false },
  CLP: { code: 'CLP', name: 'Chilean Peso', symbol: '$', decimals: 0, isCrypto: false },
  COP: { code: 'COP', name: 'Colombian Peso', symbol: '$', decimals: 0, isCrypto: false },
  PEN: { code: 'PEN', name: 'Peruvian Sol', symbol: 'S/', decimals: 2, isCrypto: false },
  UYU: { code: 'UYU', name: 'Uruguayan Peso', symbol: '$U', decimals: 2, isCrypto: false },
  AED: { code: 'AED', name: 'UAE Dirham', symbol: 'AED', decimals: 2, isCrypto: false },
  SAR: { code: 'SAR', name: 'Saudi Riyal', symbol: 'SR', decimals: 2, isCrypto: false },
  QAR: { code: 'QAR', name: 'Qatari Riyal', symbol: 'QR', decimals: 2, isCrypto: false },
  KWD: { code: 'KWD', name: 'Kuwaiti Dinar', symbol: 'KD', decimals: 3, isCrypto: false },
  BHD: { code: 'BHD', name: 'Bahraini Dinar', symbol: 'BD', decimals: 3, isCrypto: false },
  OMR: { code: 'OMR', name: 'Omani Rial', symbol: 'OR', decimals: 3, isCrypto: false },
  
  // Cryptocurrencies
  BTC: { code: 'BTC', name: 'Bitcoin', symbol: '₿', decimals: 8, isCrypto: true },
  ETH: { code: 'ETH', name: 'Ethereum', symbol: 'Ξ', decimals: 8, isCrypto: true },
  XRP: { code: 'XRP', name: 'Ripple', symbol: 'XRP', decimals: 6, isCrypto: true },
  LTC: { code: 'LTC', name: 'Litecoin', symbol: 'Ł', decimals: 8, isCrypto: true },
  BCH: { code: 'BCH', name: 'Bitcoin Cash', symbol: 'BCH', decimals: 8, isCrypto: true },
  USDT: { code: 'USDT', name: 'Tether', symbol: '₮', decimals: 6, isCrypto: true },
  USDC: { code: 'USDC', name: 'USD Coin', symbol: 'USDC', decimals: 6, isCrypto: true },
  DAI: { code: 'DAI', name: 'Dai', symbol: 'DAI', decimals: 6, isCrypto: true },
};

/**
 * Get currency information
 */
export function getCurrencyInfo(code: string): CurrencyInfo | null {
  return CURRENCIES[code.toUpperCase()] || null;
}

/**
 * Get currency symbol
 */
export function getCurrencySymbol(code: string): string {
  const info = getCurrencyInfo(code);
  return info?.symbol || code;
}

/**
 * Get currency name
 */
export function getCurrencyName(code: string): string {
  const info = getCurrencyInfo(code);
  return info?.name || code;
}

/**
 * Check if currency is cryptocurrency
 */
export function isCryptoCurrency(code: string): boolean {
  const info = getCurrencyInfo(code);
  return info?.isCrypto || false;
}

/**
 * Get currency decimal places
 */
export function getCurrencyDecimals(code: string): number {
  const info = getCurrencyInfo(code);
  return info?.decimals ?? 2;
}

/**
 * Convert amount to minor units (cents, pence, etc.)
 */
export function toMinorUnits(amount: number, currency: string): number {
  const decimals = getCurrencyDecimals(currency);
  return Math.round(amount * Math.pow(10, decimals));
}

/**
 * Convert amount from minor units to major units
 */
export function fromMinorUnits(amount: number, currency: string): number {
  const decimals = getCurrencyDecimals(currency);
  return amount / Math.pow(10, decimals);
}

/**
 * Format currency amount
 */
export function formatCurrency(
  amount: number,
  currency: string,
  locale: string = 'en-US',
  options: Intl.NumberFormatOptions = {}
): string {
  const currencyInfo = getCurrencyInfo(currency);
  
  const formatOptions: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: currencyInfo?.decimals ?? 2,
    maximumFractionDigits: currencyInfo?.decimals ?? 2,
    ...options,
  };

  try {
    return new Intl.NumberFormat(locale, formatOptions).format(amount);
  } catch (error) {
    // Fallback for unsupported currencies
    const symbol = getCurrencySymbol(currency);
    const decimals = getCurrencyDecimals(currency);
    return `${symbol}${amount.toFixed(decimals)}`;
  }
}

/**
 * Get popular currencies by region
 */
export function getCurrenciesByRegion(region: string): CurrencyCode[] {
  const regions: Record<string, CurrencyCode[]> = {
    'north_america': ['USD', 'CAD', 'MXN'],
    'europe': ['EUR', 'GBP', 'CHF', 'SEK', 'NOK', 'DKK', 'PLN'],
    'asia_pacific': ['JPY', 'CNY', 'HKD', 'SGD', 'INR', 'KRW', 'AUD'],
    'middle_east': ['AED', 'SAR', 'QAR', 'KWD', 'BHD', 'OMR'],
    'africa': ['ZAR', 'NGN', 'KES', 'GHS', 'EGP', 'MAD'],
    'latin_america': ['BRL', 'ARS', 'CLP', 'COP', 'PEN', 'UYU'],
    'crypto': ['BTC', 'ETH', 'USDT', 'USDC', 'DAI'],
  };

  return regions[region] || [];
}

/**
 * Get all fiat currencies
 */
export function getFiatCurrencies(): CurrencyCode[] {
  return Object.values(CURRENCIES)
    .filter(currency => !currency.isCrypto)
    .map(currency => currency.code);
}

/**
 * Get all cryptocurrencies
 */
export function getCryptoCurrencies(): CurrencyCode[] {
  return Object.values(CURRENCIES)
    .filter(currency => currency.isCrypto)
    .map(currency => currency.code);
}
