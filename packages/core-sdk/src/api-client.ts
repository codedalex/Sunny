/**
 * Sunny API Client
 * HTTP client for communicating with Sunny Payment Gateway API
 */

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { PaymentData, PaymentResult } from '@sunny/shared/types';
import { EncryptionService } from './security/encryption';

export interface APIClientConfig {
  merchantId: string;
  apiKey: string;
  apiSecret: string;
  baseUrl?: string;
  timeout?: number;
  retryAttempts?: number;
  enableLogging?: boolean;
}

export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  requestId?: string;
}

export class SunnyAPIClient {
  private readonly client: AxiosInstance;
  private readonly config: Required<APIClientConfig>;
  private readonly encryption: EncryptionService;

  constructor(config: APIClientConfig) {
    this.config = {
      baseUrl: 'https://api.sunnypayments.com/v2',
      timeout: 30000,
      retryAttempts: 3,
      enableLogging: false,
      ...config
    };

    this.encryption = new EncryptionService(this.config.apiSecret);

    this.client = axios.create({
      baseURL: this.config.baseUrl,
      timeout: this.config.timeout,
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Sunny-SDK/1.0.0',
        'X-Merchant-ID': this.config.merchantId,
        'Authorization': `Bearer ${this.config.apiKey}`
      }
    });

    this.setupInterceptors();
  }

  /**
   * Process a payment
   */
  async processPayment(paymentData: PaymentData): Promise<APIResponse<PaymentResult>> {
    try {
      const response = await this.post('/payments', paymentData);
      return this.handleResponse(response);
    } catch (error) {
      return this.handleError(error);
    }
  }

  /**
   * Get payment details
   */
  async getPayment(transactionId: string): Promise<APIResponse<PaymentResult>> {
    try {
      const response = await this.get(`/payments/${transactionId}`);
      return this.handleResponse(response);
    } catch (error) {
      return this.handleError(error);
    }
  }

  /**
   * Refund a payment
   */
  async refundPayment(
    transactionId: string, 
    amount?: number, 
    reason?: string
  ): Promise<APIResponse<any>> {
    try {
      const response = await this.post(`/payments/${transactionId}/refunds`, {
        amount,
        reason
      });
      return this.handleResponse(response);
    } catch (error) {
      return this.handleError(error);
    }
  }

  /**
   * Create a customer
   */
  async createCustomer(customerData: any): Promise<APIResponse<any>> {
    try {
      const response = await this.post('/customers', customerData);
      return this.handleResponse(response);
    } catch (error) {
      return this.handleError(error);
    }
  }

  /**
   * Get customer details
   */
  async getCustomer(customerId: string): Promise<APIResponse<any>> {
    try {
      const response = await this.get(`/customers/${customerId}`);
      return this.handleResponse(response);
    } catch (error) {
      return this.handleError(error);
    }
  }

  /**
   * Create a subscription
   */
  async createSubscription(subscriptionData: any): Promise<APIResponse<any>> {
    try {
      const response = await this.post('/subscriptions', subscriptionData);
      return this.handleResponse(response);
    } catch (error) {
      return this.handleError(error);
    }
  }

  /**
   * Get subscription details
   */
  async getSubscription(subscriptionId: string): Promise<APIResponse<any>> {
    try {
      const response = await this.get(`/subscriptions/${subscriptionId}`);
      return this.handleResponse(response);
    } catch (error) {
      return this.handleError(error);
    }
  }

  /**
   * Cancel a subscription
   */
  async cancelSubscription(subscriptionId: string): Promise<APIResponse<any>> {
    try {
      const response = await this.delete(`/subscriptions/${subscriptionId}`);
      return this.handleResponse(response);
    } catch (error) {
      return this.handleError(error);
    }
  }

  /**
   * Get merchant analytics
   */
  async getAnalytics(params?: {
    startDate?: string;
    endDate?: string;
    currency?: string;
    paymentMethod?: string;
  }): Promise<APIResponse<any>> {
    try {
      const response = await this.get('/analytics', { params });
      return this.handleResponse(response);
    } catch (error) {
      return this.handleError(error);
    }
  }

  /**
   * Get supported payment methods for a country
   */
  async getPaymentMethods(countryCode: string): Promise<APIResponse<any>> {
    try {
      const response = await this.get(`/payment-methods/${countryCode}`);
      return this.handleResponse(response);
    } catch (error) {
      return this.handleError(error);
    }
  }

  /**
   * Verify webhook signature
   */
  verifyWebhookSignature(payload: string, signature: string): boolean {
    try {
      // Use encryption service to verify webhook signature
      const expectedSignature = this.encryption.hashData(payload);
      return signature === expectedSignature;
    } catch (error) {
      console.error('Webhook verification error:', error);
      return false;
    }
  }

  // Private HTTP methods
  private async get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return await this.client.get(url, config);
  }

  private async post(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return await this.client.post(url, data, config);
  }

  private async put(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return await this.client.put(url, data, config);
  }

  private async delete(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return await this.client.delete(url, config);
  }

  private setupInterceptors(): void {
    // Request interceptor
    this.client.interceptors.request.use(
      (config) => {
        if (this.config.enableLogging) {
          console.log(`API Request: ${config.method?.toUpperCase()} ${config.url}`);
        }

        // Add timestamp and request ID
        config.headers['X-Request-Timestamp'] = new Date().toISOString();
        config.headers['X-Request-ID'] = this.generateRequestId();

        // Encrypt sensitive data if needed
        if (config.data && this.containsSensitiveData(config.data)) {
          config.data = this.encryption.maskSensitiveData(config.data);
        }

        return config;
      },
      (error) => {
        if (this.config.enableLogging) {
          console.error('API Request Error:', error);
        }
        return Promise.reject(error);
      }
    );

    // Response interceptor
    this.client.interceptors.response.use(
      (response) => {
        if (this.config.enableLogging) {
          console.log(`API Response: ${response.status} ${response.config.url}`);
        }
        return response;
      },
      async (error) => {
        if (this.config.enableLogging) {
          console.error('API Response Error:', error.response?.status, error.message);
        }

        // Implement retry logic
        const config = error.config;
        if (!config || !config.retry) {
          config.retry = 0;
        }

        if (config.retry < this.config.retryAttempts && this.shouldRetry(error)) {
          config.retry += 1;
          
          // Exponential backoff
          const delay = Math.pow(2, config.retry) * 1000;
          await new Promise(resolve => setTimeout(resolve, delay));
          
          return this.client(config);
        }

        return Promise.reject(error);
      }
    );
  }

  private handleResponse<T>(response: AxiosResponse): APIResponse<T> {
    return {
      success: true,
      data: response.data,
      requestId: response.headers['x-request-id']
    };
  }

  private handleError(error: any): APIResponse {
    if (error.response) {
      // Server responded with error status
      return {
        success: false,
        error: error.response.data?.error || 'API_ERROR',
        message: error.response.data?.message || error.message,
        requestId: error.response.headers?.['x-request-id']
      };
    } else if (error.request) {
      // Network error
      return {
        success: false,
        error: 'NETWORK_ERROR',
        message: 'Unable to reach the payment gateway'
      };
    } else {
      // Other error
      return {
        success: false,
        error: 'UNKNOWN_ERROR',
        message: error.message || 'An unexpected error occurred'
      };
    }
  }

  private shouldRetry(error: any): boolean {
    // Retry on network errors or 5xx server errors
    if (!error.response) return true;
    
    const status = error.response.status;
    return status >= 500 || status === 429; // Server errors or rate limiting
  }

  private containsSensitiveData(data: any): boolean {
    if (typeof data !== 'object' || data === null) {
      return false;
    }

    const sensitiveFields = [
      'cardNumber', 'cvv', 'pin', 'password', 'accountNumber'
    ];

    return sensitiveFields.some(field => data[field]);
  }

  private generateRequestId(): string {
    return `req_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
  }
}
