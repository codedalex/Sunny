/**
 * Fee Calculator Service
 * Transparent fee calculation for all payment methods and regions
 */

import { PaymentMethods, FeeDetails } from '@sunny/shared/types';

interface FeeCalculationOptions {
  amount: number;
  currency: string;
  paymentMethod: PaymentMethods;
  country: string;
  merchantTier: 'standard' | 'premium' | 'enterprise';
}

interface BaseFeeStructure {
  percentage: number;
  fixed: number; // in cents
}

export class FeeCalculator {
  private readonly baseFeeStructure: Record<string, BaseFeeStructure> = {
    [PaymentMethods.CARD]: { percentage: 2.9, fixed: 30 },
    [PaymentMethods.BANK_TRANSFER]: { percentage: 0.8, fixed: 25 },
    [PaymentMethods.MOBILE_MONEY]: { percentage: 2.5, fixed: 15 },
    [PaymentMethods.CRYPTO]: { percentage: 1.0, fixed: 0 },
    [PaymentMethods.UPI]: { percentage: 1.8, fixed: 10 },
    [PaymentMethods.ALIPAY]: { percentage: 2.5, fixed: 20 },
    [PaymentMethods.WECHAT]: { percentage: 2.5, fixed: 20 },
    [PaymentMethods.APPLE_PAY]: { percentage: 2.9, fixed: 30 },
    [PaymentMethods.GOOGLE_PAY]: { percentage: 2.9, fixed: 30 },
    default: { percentage: 3.0, fixed: 30 }
  };

  private readonly merchantTierDiscounts = {
    standard: { percentage: 0, fixed: 0 },
    premium: { percentage: 0.3, fixed: 5 },
    enterprise: { percentage: 0.5, fixed: 10 }
  };

  private readonly regionalAdjustments: Record<string, { percentage: number; fixed: number }> = {
    US: { percentage: 0, fixed: 0 },
    CA: { percentage: 0.1, fixed: 0 },
    GB: { percentage: 0.1, fixed: 0 },
    EU: { percentage: 0.2, fixed: 0 },
    IN: { percentage: -0.5, fixed: -5 },
    NG: { percentage: -0.3, fixed: -5 },
    KE: { percentage: -0.3, fixed: -5 },
    BR: { percentage: 0.3, fixed: 5 },
    JP: { percentage: 0.2, fixed: 5 }
  };

  private readonly euCountries = [
    'DE', 'FR', 'IT', 'ES', 'NL', 'BE', 'PT', 'IE', 'AT', 
    'FI', 'SE', 'DK', 'PL', 'CZ', 'HU', 'RO', 'BG', 'GR', 'HR'
  ];

  calculateFees(options: FeeCalculationOptions): FeeDetails {
    const { amount, currency, paymentMethod, country, merchantTier } = options;

    // Get base fee structure
    const baseFee = this.baseFeeStructure[paymentMethod] || this.baseFeeStructure.default;
    
    // Get merchant tier discount
    const tierDiscount = this.merchantTierDiscounts[merchantTier] || this.merchantTierDiscounts.standard;
    
    // Get regional adjustment
    const regionalAdjustment = this.getRegionalAdjustment(country);
    
    // Calculate final fee rates
    const finalPercentage = Math.max(0, baseFee.percentage - tierDiscount.percentage + regionalAdjustment.percentage);
    const finalFixed = Math.max(0, baseFee.fixed - tierDiscount.fixed + regionalAdjustment.fixed);
    
    // Calculate fee amounts
    const percentageFee = Math.round((amount * finalPercentage) / 100);
    const fixedFee = finalFixed;
    const totalFee = percentageFee + fixedFee;
    
    // Calculate net amount
    const netAmount = amount - totalFee;
    
    return {
      currency,
      baseFee: {
        percentage: baseFee.percentage,
        fixed: baseFee.fixed,
        currency
      },
      discounts: {
        percentage: tierDiscount.percentage,
        fixed: tierDiscount.fixed,
        reason: `${merchantTier} tier discount`
      },
      regionalAdjustment: {
        percentage: regionalAdjustment.percentage,
        fixed: regionalAdjustment.fixed,
        region: this.euCountries.includes(country) ? 'EU' : country
      },
      finalRate: {
        percentage: finalPercentage,
        fixed: finalFixed
      },
      breakdown: {
        percentageFee,
        fixedFee,
        totalFee
      },
      grossAmount: amount,
      netAmount,
      feePercentage: (totalFee / amount) * 100
    };
  }

  calculateConversionFee(options: {
    amount: number;
    fromCurrency: string;
    toCurrency: string;
    merchantTier: string;
  }) {
    const { amount, fromCurrency, toCurrency, merchantTier } = options;
    
    let conversionPercentage = 2.0;
    
    if (merchantTier === 'premium') {
      conversionPercentage = 1.5;
    } else if (merchantTier === 'enterprise') {
      conversionPercentage = 1.0;
    }
    
    const conversionFee = Math.round((amount * conversionPercentage) / 100);
    
    return {
      fromCurrency,
      toCurrency,
      amount,
      conversionPercentage,
      conversionFee,
      netAmount: amount - conversionFee,
      feeType: 'currency_conversion' as const
    };
  }

  calculateRefundFee(options: {
    amount: number;
    currency: string;
    paymentMethod: PaymentMethods;
    merchantTier: string;
  }) {
    const { amount, currency, paymentMethod, merchantTier } = options;
    
    let fixedFee = 0;
    
    if (paymentMethod === PaymentMethods.CARD) {
      fixedFee = 30; // 30 cents
      
      if (merchantTier === 'premium') {
        fixedFee = 20;
      } else if (merchantTier === 'enterprise') {
        fixedFee = 0;
      }
    }
    
    return {
      currency,
      refundAmount: amount,
      fixedFee,
      netRefund: amount - fixedFee,
      feeType: 'refund' as const
    };
  }

  private getRegionalAdjustment(country: string): { percentage: number; fixed: number } {
    if (this.euCountries.includes(country)) {
      return this.regionalAdjustments.EU || { percentage: 0, fixed: 0 };
    }
    
    return this.regionalAdjustments[country] || { percentage: 0, fixed: 0 };
  }
}
