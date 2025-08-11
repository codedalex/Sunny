/**
 * Instant Settlement Service
 * Handles immediate fund settlement to merchant accounts
 */

import { v4 as uuidv4 } from 'uuid';
import { PaymentMethods, SettlementTypes, ErrorCodes, SettlementResult } from '@sunny/shared/types';

interface SettlementOptions {
  transactionId: string;
  amount: number;
  currency: string;
  merchantId: string;
  paymentMethod: PaymentMethods;
  destinationAccount?: any;
}

export class InstantSettlement {
  private readonly settlementSpeeds: Record<string, number> = {
    [PaymentMethods.CARD]: 60,
    [PaymentMethods.BANK_TRANSFER]: 30,
    [PaymentMethods.MOBILE_MONEY]: 15,
    [PaymentMethods.CRYPTO]: 5,
    [PaymentMethods.UPI]: 10,
    [PaymentMethods.ALIPAY]: 30,
    [PaymentMethods.WECHAT]: 30,
    default: 60
  };

  private readonly settlementAvailability: Record<string, string> = {
    US: '24/7',
    CA: '24/7',
    GB: '24/7',
    EU: '24/7',
    IN: '24/7',
    NG: '24/7',
    KE: '24/7',
    JP: 'business_hours',
    CN: 'business_hours',
    BR: '24/7',
    MX: '24/7',
    default: '24/7'
  };

  async processInstantSettlement(options: SettlementOptions): Promise<SettlementResult> {
    try {
      const {
        transactionId,
        amount,
        currency,
        merchantId,
        paymentMethod,
        destinationAccount
      } = options;

      // Validate required parameters
      if (!transactionId || !amount || !currency || !merchantId) {
        throw new Error('Missing required parameters for instant settlement');
      }

      // Generate settlement ID
      const settlementId = uuidv4();

      // Get settlement speed for this payment method
      const settlementSpeed = this.settlementSpeeds[paymentMethod] || this.settlementSpeeds.default;

      // Simulate processing delay based on payment method
      await new Promise(resolve => setTimeout(resolve, settlementSpeed * 10)); // Scaled down for simulation

      // Calculate settlement fee
      const settlementFee = this.calculateSettlementFee({
        amount,
        currency,
        paymentMethod,
        merchantId
      });

      // Calculate net settlement amount
      const netSettlementAmount = amount - settlementFee.fee;

      // Record settlement timestamp
      const settlementTimestamp = new Date().toISOString();

      return {
        success: true,
        settlementId,
        originalTransactionId: transactionId,
        amount: netSettlementAmount,
        currency,
        fee: settlementFee,
        status: 'completed',
        type: SettlementTypes.INSTANT,
        timestamp: settlementTimestamp,
        destinationAccountType: destinationAccount?.type || 'bank_account',
        destinationAccountLast4: destinationAccount?.last4 || 'xxxx',
        estimatedArrivalTime: settlementTimestamp // For instant settlement, arrival time is now
      };
    } catch (error) {
      console.error('Instant settlement error:', error);
      return {
        success: false,
        settlementId: '',
        originalTransactionId: options.transactionId,
        amount: 0,
        currency: options.currency,
        fee: { fee: 0, percentage: 0, currency: options.currency },
        status: 'failed',
        type: SettlementTypes.INSTANT,
        timestamp: new Date().toISOString(),
        destinationAccountType: 'unknown',
        destinationAccountLast4: 'xxxx',
        estimatedArrivalTime: new Date().toISOString()
      };
    }
  }

  private calculateSettlementFee(options: {
    amount: number;
    currency: string;
    paymentMethod: PaymentMethods;
    merchantId: string;
  }): { fee: number; percentage: number; currency: string } {
    const { amount, currency, paymentMethod } = options;
    
    // Base fee is 1% for instant settlement
    let feePercentage = 1.0;

    // Adjust based on payment method
    switch (paymentMethod) {
      case PaymentMethods.BANK_TRANSFER:
        feePercentage = 0.5;
        break;
      case PaymentMethods.MOBILE_MONEY:
        feePercentage = 0.8;
        break;
      case PaymentMethods.CRYPTO:
        feePercentage = 0.2;
        break;
      default:
        feePercentage = 1.0;
    }

    const feeAmount = Math.round((amount * feePercentage) / 100);

    return {
      fee: feeAmount,
      percentage: feePercentage,
      currency
    };
  }

  isInstantSettlementAvailable(countryCode: string, settlementTime: Date = new Date()): boolean {
    const availability = this.settlementAvailability[countryCode] || this.settlementAvailability.default;

    if (availability === '24/7') {
      return true;
    }

    // For business hours, check if current time is within business hours
    const day = settlementTime.getDay();
    const hour = settlementTime.getHours();

    // Check if weekend
    if (day === 0 || day === 6) {
      return false;
    }

    // Check if within business hours (9 AM to 5 PM)
    return hour >= 9 && hour < 17;
  }
}
