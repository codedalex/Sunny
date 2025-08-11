/**
 * Sunny Payment Gateway - TypeScript Core SDK
 * 
 * A comprehensive payment processing system with global coverage
 * Migrated from JavaScript to TypeScript with enhanced features
 */

import { v4 as uuidv4 } from 'uuid';
import { 
  PaymentData, 
  PaymentResult, 
  PaymentMethods, 
  PaymentStatus, 
  ErrorCodes,
  FeeDetails,
  SettlementResult
} from '@sunny/shared/types';
import { validatePaymentData } from '@sunny/shared/utils';
import { FeeCalculator } from './services/fee-calculator';
import { InstantSettlement } from './services/instant-settlement';
import { FraudDetectionService } from './security/fraud-detection';
import { EncryptionService } from './security/encryption';
import { ValidationService } from './security/validation';
import { TransactionLogger } from './services/transaction-logger';

export interface PaymentGatewayConfig {
  merchantId: string;
  apiKey: string;
  apiSecret: string;
  environment: 'sandbox' | 'production';
  instantSettlement?: boolean;
  locale?: string;
  baseUrl?: string;
  merchantTier?: 'standard' | 'premium' | 'enterprise';
  enableLogging?: boolean;
  enableFraudDetection?: boolean;
}

export class SunnyPaymentGateway {
  private readonly config: Required<PaymentGatewayConfig>;
  private readonly baseUrl: string;
  private readonly feeCalculator: FeeCalculator;
  private readonly instantSettlement: InstantSettlement;
  private readonly fraudDetection: FraudDetectionService;
  private readonly encryption: EncryptionService;
  private readonly validation: ValidationService;
  private readonly transactionLogger: TransactionLogger;

  constructor(config: PaymentGatewayConfig) {
    // Validate required configuration
    this.validateConfig(config);
    
    // Set defaults
    this.config = {
      instantSettlement: false,
      locale: 'en-US',
      merchantTier: 'standard',
      enableLogging: true,
      enableFraudDetection: true,
      ...config,
      baseUrl: config.baseUrl || this.determineBaseUrl(config.environment),
    };

    this.baseUrl = this.config.baseUrl;

    // Initialize services
    this.feeCalculator = new FeeCalculator();
    this.instantSettlement = new InstantSettlement();
    this.fraudDetection = new FraudDetectionService();
    this.encryption = new EncryptionService(this.config.apiSecret);
    this.validation = new ValidationService();
    this.transactionLogger = new TransactionLogger({
      enabled: this.config.enableLogging,
      merchantId: this.config.merchantId
    });
  }

  /**
   * Process a payment transaction with comprehensive validation and fraud detection
   */
  async processPayment(paymentData: PaymentData): Promise<PaymentResult> {
    const transactionId = uuidv4();
    
    try {
      // Step 1: Validate payment data
      const validationResult = this.validation.validatePaymentData(paymentData);
      if (!validationResult.isValid) {
        return this.createErrorResult(
          ErrorCodes.VALIDATION_ERROR,
          validationResult.errors.join(', '),
          paymentData,
          transactionId
        );
      }

      // Step 2: Fraud detection
      if (this.config.enableFraudDetection) {
        const fraudCheck = await this.fraudDetection.detectFraud({
          ...paymentData,
          transactionId,
          merchantId: this.config.merchantId
        });

        if (fraudCheck.isFraudulent) {
          await this.logTransaction({
            transactionId,
            status: PaymentStatus.REJECTED,
            errorCode: ErrorCodes.FRAUD_DETECTED,
            metadata: {
              fraudReason: fraudCheck.reason,
              riskScore: fraudCheck.riskScore,
              factors: fraudCheck.factors
            },
            ...paymentData
          });

          return this.createErrorResult(
            ErrorCodes.FRAUD_DETECTED,
            'Transaction flagged as potentially fraudulent',
            paymentData,
            transactionId
          );
        }
      }

      // Step 3: Calculate fees
      const feeDetails = this.feeCalculator.calculateFees({
        amount: paymentData.amount,
        currency: paymentData.currency,
        paymentMethod: paymentData.paymentMethod,
        country: paymentData.customer?.country || 'US',
        merchantTier: this.config.merchantTier
      });

      // Step 4: Process payment based on method
      const paymentResult = await this.processPaymentByMethod(paymentData, transactionId);

      // Step 5: Process instant settlement if requested and successful
      if (paymentResult.success && (paymentData.instantSettlement || this.config.instantSettlement)) {
        const settlementResult = await this.instantSettlement.processInstantSettlement({
          transactionId,
          amount: paymentData.amount,
          currency: paymentData.currency,
          merchantId: this.config.merchantId,
          paymentMethod: paymentData.paymentMethod,
          destinationAccount: paymentData.metadata?.destinationAccount as any
        });

        paymentResult.settlement = settlementResult;
      }

      // Step 6: Log transaction
      await this.logTransaction({
        transactionId,
        status: paymentResult.success ? PaymentStatus.COMPLETED : PaymentStatus.FAILED,
        errorCode: paymentResult.error || null,
        fees: feeDetails,
        metadata: {
          ...paymentData.metadata,
          processorResponse: paymentResult.processorResponse
        },
        ...paymentData
      });

      return {
        ...paymentResult,
        transactionId,
        fees: feeDetails
      };

    } catch (error) {
      console.error('Payment processing error:', error);
      
      await this.logTransaction({
        transactionId,
        status: PaymentStatus.ERROR,
        errorCode: ErrorCodes.SYSTEM_ERROR,
        metadata: {
          errorMessage: error instanceof Error ? error.message : 'Unknown error'
        },
        ...paymentData
      });
      
      return this.createErrorResult(
        ErrorCodes.SYSTEM_ERROR,
        'An unexpected error occurred while processing payment',
        paymentData,
        transactionId
      );
    }
  }

  /**
   * Create a subscription for recurring billing
   */
  async createSubscription(subscriptionData: any): Promise<any> {
    try {
      const { customerId, planId, paymentMethod, startDate, metadata } = subscriptionData;
      
      if (!customerId || !planId || !paymentMethod) {
        return {
          success: false,
          error: ErrorCodes.VALIDATION_ERROR,
          message: 'Customer ID, plan ID, and payment method are required'
        };
      }
      
      const subscriptionId = uuidv4();
      
      // In a real implementation, this would integrate with subscription management
      return {
        success: true,
        subscriptionId,
        customerId,
        planId,
        status: 'active',
        startDate: startDate || new Date().toISOString(),
        nextBillingDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
      };
    } catch (error) {
      console.error('Subscription creation error:', error);
      return {
        success: false,
        error: ErrorCodes.SUBSCRIPTION_ERROR,
        message: 'Failed to create subscription'
      };
    }
  }

  /**
   * Process marketplace payments with split functionality
   */
  async processMarketplacePayment(paymentData: PaymentData): Promise<PaymentResult> {
    try {
      if (!paymentData.splits || !Array.isArray(paymentData.splits) || paymentData.splits.length === 0) {
        return this.createErrorResult(
          ErrorCodes.VALIDATION_ERROR,
          'Valid splits array is required for marketplace payments',
          paymentData
        );
      }
      
      // Process the main payment first
      const paymentResult = await this.processPayment({
        ...paymentData,
        metadata: {
          ...paymentData.metadata,
          isMarketplace: true
        }
      });
      
      if (!paymentResult.success) {
        return paymentResult;
      }
      
      // Process the splits
      const splitResults = await Promise.all(paymentData.splits.map(async (split) => {
        // In a real implementation, this would transfer funds to each recipient
        return {
          destination: split.destination,
          amount: split.amount,
          currency: split.currency,
          status: 'transferred'
        };
      }));
      
      return {
        ...paymentResult,
        splits: splitResults
      };
    } catch (error) {
      console.error('Marketplace payment error:', error);
      return this.createErrorResult(
        ErrorCodes.MARKETPLACE_ERROR,
        'Failed to process marketplace payment',
        paymentData
      );
    }
  }

  /**
   * Process payment based on specific payment method
   */
  private async processPaymentByMethod(paymentData: PaymentData, transactionId: string): Promise<Omit<PaymentResult, 'transactionId' | 'fees'>> {
    switch (paymentData.paymentMethod) {
      case PaymentMethods.CARD:
        return this.processCardPayment(paymentData, transactionId);
      case PaymentMethods.BANK_TRANSFER:
        return this.processBankTransfer(paymentData, transactionId);
      case PaymentMethods.MOBILE_MONEY:
        return this.processMobileMoney(paymentData, transactionId);
      case PaymentMethods.CRYPTO:
        return this.processCryptoPayment(paymentData, transactionId);
      case PaymentMethods.UPI:
        return this.processUPIPayment(paymentData, transactionId);
      case PaymentMethods.ALIPAY:
        return this.processAlipayPayment(paymentData, transactionId);
      case PaymentMethods.WECHAT:
        return this.processWeChatPayment(paymentData, transactionId);
      case PaymentMethods.APPLE_PAY:
        return this.processApplePayment(paymentData, transactionId);
      case PaymentMethods.GOOGLE_PAY:
        return this.processGooglePayment(paymentData, transactionId);
      default:
        return {
          success: false,
          status: PaymentStatus.FAILED,
          amount: paymentData.amount,
          currency: paymentData.currency,
          paymentMethod: paymentData.paymentMethod,
          error: ErrorCodes.UNSUPPORTED_PAYMENT_METHOD,
          message: 'Unsupported payment method'
        };
    }
  }

  /**
   * Process card payment
   */
  private async processCardPayment(paymentData: PaymentData, transactionId: string): Promise<Omit<PaymentResult, 'transactionId' | 'fees'>> {
    // Encrypt sensitive card data
    const cardData = paymentData.metadata?.card as any;
    if (cardData) {
      this.encryption.encryptData({
        cardNumber: cardData.number,
        cvv: cardData.cvv
      });
    }

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Simulate successful payment (in real implementation, call payment processor)
    return {
      success: true,
      status: PaymentStatus.COMPLETED,
      amount: paymentData.amount,
      currency: paymentData.currency,
      paymentMethod: paymentData.paymentMethod,
      processorResponse: {
        authorizationCode: Math.random().toString(36).substring(2, 8).toUpperCase(),
        processorTransactionId: `CARD_${Math.random().toString(36).substring(2, 10)}`,
        processorName: 'SunnyCardProcessor'
      }
    };
  }

  /**
   * Process mobile money payment
   */
  private async processMobileMoney(paymentData: PaymentData, transactionId: string): Promise<Omit<PaymentResult, 'transactionId' | 'fees'>> {
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return {
      success: true,
      status: PaymentStatus.COMPLETED,
      amount: paymentData.amount,
      currency: paymentData.currency,
      paymentMethod: paymentData.paymentMethod,
      processorResponse: {
        processorTransactionId: `MM_${Math.random().toString(36).substring(2, 10)}`,
        processorName: 'SunnyMobileProcessor'
      }
    };
  }

  /**
   * Process bank transfer payment
   */
  private async processBankTransfer(paymentData: PaymentData, transactionId: string): Promise<Omit<PaymentResult, 'transactionId' | 'fees'>> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      success: true,
      status: PaymentStatus.PROCESSING, // Bank transfers usually go to processing first
      amount: paymentData.amount,
      currency: paymentData.currency,
      paymentMethod: paymentData.paymentMethod,
      processorResponse: {
        processorTransactionId: `BANK_${Math.random().toString(36).substring(2, 10)}`,
        processorName: 'SunnyBankProcessor'
      }
    };
  }

  /**
   * Placeholder methods for other payment types
   */
  private async processCryptoPayment(paymentData: PaymentData, transactionId: string): Promise<Omit<PaymentResult, 'transactionId' | 'fees'>> {
    // Implementation would integrate with crypto payment processors
    return this.createGenericPaymentResult(paymentData, 'CRYPTO');
  }

  private async processUPIPayment(paymentData: PaymentData, transactionId: string): Promise<Omit<PaymentResult, 'transactionId' | 'fees'>> {
    return this.createGenericPaymentResult(paymentData, 'UPI');
  }

  private async processAlipayPayment(paymentData: PaymentData, transactionId: string): Promise<Omit<PaymentResult, 'transactionId' | 'fees'>> {
    return this.createGenericPaymentResult(paymentData, 'ALIPAY');
  }

  private async processWeChatPayment(paymentData: PaymentData, transactionId: string): Promise<Omit<PaymentResult, 'transactionId' | 'fees'>> {
    return this.createGenericPaymentResult(paymentData, 'WECHAT');
  }

  private async processApplePayment(paymentData: PaymentData, transactionId: string): Promise<Omit<PaymentResult, 'transactionId' | 'fees'>> {
    return this.createGenericPaymentResult(paymentData, 'APPLE');
  }

  private async processGooglePayment(paymentData: PaymentData, transactionId: string): Promise<Omit<PaymentResult, 'transactionId' | 'fees'>> {
    return this.createGenericPaymentResult(paymentData, 'GOOGLE');
  }

  /**
   * Helper methods
   */
  private validateConfig(config: PaymentGatewayConfig): void {
    if (!config.merchantId || !config.apiKey || !config.apiSecret) {
      throw new Error('Missing required configuration parameters: merchantId, apiKey, and apiSecret are required');
    }

    if (!['sandbox', 'production'].includes(config.environment)) {
      throw new Error('Environment must be either "sandbox" or "production"');
    }
  }

  private determineBaseUrl(environment: string): string {
    return environment === 'production'
      ? 'https://api.sunnypayments.com/v2'
      : 'https://sandbox.sunnypayments.com/v2';
  }

  private createErrorResult(
    errorCode: ErrorCodes,
    message: string,
    paymentData: PaymentData,
    transactionId?: string
  ): PaymentResult {
    return {
      success: false,
      transactionId: transactionId || '',
      status: PaymentStatus.FAILED,
      amount: paymentData.amount,
      currency: paymentData.currency,
      paymentMethod: paymentData.paymentMethod,
      error: errorCode,
      message
    };
  }

  private createGenericPaymentResult(paymentData: PaymentData, processor: string): Omit<PaymentResult, 'transactionId' | 'fees'> {
    return {
      success: true,
      status: PaymentStatus.COMPLETED,
      amount: paymentData.amount,
      currency: paymentData.currency,
      paymentMethod: paymentData.paymentMethod,
      processorResponse: {
        processorTransactionId: `${processor}_${Math.random().toString(36).substring(2, 10)}`,
        processorName: `Sunny${processor}Processor`
      }
    };
  }

  private async logTransaction(data: any): Promise<void> {
    if (this.config.enableLogging) {
      await this.transactionLogger.logTransaction(data);
    }
  }
}
