/**
 * Payment Hook
 */

import { useState, useCallback } from 'react';
import { PaymentData, PaymentResult, PaymentStatus } from '../types/payment';

export interface UsePaymentOptions {
  onSuccess?: (result: PaymentResult) => void;
  onError?: (error: string) => void;
}

export function usePayment(options: UsePaymentOptions = {}) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<PaymentResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const processPayment = useCallback(async (paymentData: PaymentData) => {
    setIsProcessing(true);
    setError(null);
    setResult(null);

    try {
      // This would integrate with your payment gateway
      // For now, simulate the payment process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockResult: PaymentResult = {
        success: true,
        transactionId: `txn_${Date.now()}`,
        status: PaymentStatus.COMPLETED,
        amount: paymentData.amount,
        currency: paymentData.currency,
        paymentMethod: paymentData.paymentMethod,
      };

      setResult(mockResult);
      options.onSuccess?.(mockResult);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Payment failed';
      setError(errorMessage);
      options.onError?.(errorMessage);
    } finally {
      setIsProcessing(false);
    }
  }, [options]);

  const reset = useCallback(() => {
    setResult(null);
    setError(null);
    setIsProcessing(false);
  }, []);

  return {
    processPayment,
    isProcessing,
    result,
    error,
    reset,
  };
}
