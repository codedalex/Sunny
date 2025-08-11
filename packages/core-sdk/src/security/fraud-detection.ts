/**
 * Fraud Detection Service
 * Advanced fraud detection and risk assessment
 */

import { PaymentData } from '@sunny/shared/types';

export interface FraudDetectionInput extends PaymentData {
  transactionId: string;
  merchantId: string;
  ipAddress?: string;
  userAgent?: string;
  deviceFingerprint?: string;
  customerId?: string;
}

export interface FraudDetectionResult {
  isFraudulent: boolean;
  riskScore: number;
  reason?: string;
  factors: FraudFactor[];
}

export interface FraudFactor {
  type: 'amount' | 'velocity' | 'location' | 'device' | 'behavioral';
  score: number;
  description: string;
  weight: number;
}

export class FraudDetectionService {
  private readonly riskThreshold: number = 75;
  private readonly factorWeights = {
    amount: 0.3,
    velocity: 0.25,
    location: 0.2,
    device: 0.15,
    behavioral: 0.1
  };

  async detectFraud(data: FraudDetectionInput): Promise<FraudDetectionResult> {
    const factors: FraudFactor[] = [];
    let weightedScore = 0;

    // Amount-based risk assessment
    const amountFactor = this.assessAmountRisk(data.amount, data.currency);
    factors.push(amountFactor);
    weightedScore += amountFactor.score * this.factorWeights.amount;

    // Velocity checking
    const velocityFactor = await this.assessVelocityRisk(data.customerId, data.merchantId);
    factors.push(velocityFactor);
    weightedScore += velocityFactor.score * this.factorWeights.velocity;

    // Geographic risk assessment
    const locationFactor = this.assessLocationRisk(data.ipAddress, data.customer.country);
    factors.push(locationFactor);
    weightedScore += locationFactor.score * this.factorWeights.location;

    // Device analysis
    const deviceFactor = this.assessDeviceRisk(data.deviceFingerprint, data.userAgent);
    factors.push(deviceFactor);
    weightedScore += deviceFactor.score * this.factorWeights.device;

    // Behavioral analysis
    const behavioralFactor = await this.assessBehavioralRisk(data);
    factors.push(behavioralFactor);
    weightedScore += behavioralFactor.score * this.factorWeights.behavioral;

    const finalRiskScore = Math.min(Math.round(weightedScore), 100);
    const isFraudulent = finalRiskScore > this.riskThreshold;

    return {
      isFraudulent,
      riskScore: finalRiskScore,
      reason: isFraudulent ? this.getHighestRiskFactor(factors).description : undefined,
      factors
    };
  }

  private assessAmountRisk(amount: number, currency: string): FraudFactor {
    let score = 0;
    let description = 'Normal transaction amount';

    // Convert to USD equivalent for consistent thresholds
    const usdAmount = this.convertToUSD(amount, currency);

    if (usdAmount > 10000) {
      score = 80;
      description = 'Very high transaction amount';
    } else if (usdAmount > 5000) {
      score = 60;
      description = 'High transaction amount';
    } else if (usdAmount > 1000) {
      score = 30;
      description = 'Elevated transaction amount';
    } else if (usdAmount > 500) {
      score = 10;
      description = 'Moderate transaction amount';
    }

    return {
      type: 'amount',
      score,
      description,
      weight: this.factorWeights.amount
    };
  }

  private async assessVelocityRisk(customerId?: string, merchantId?: string): Promise<FraudFactor> {
    if (!customerId) {
      return {
        type: 'velocity',
        score: 25,
        description: 'Unknown customer - moderate risk',
        weight: this.factorWeights.velocity
      };
    }

    // Simulate velocity check
    const recentTransactions = await this.getRecentTransactions(customerId, merchantId);
    const transactionCount = recentTransactions.length;

    let score = 0;
    let description = 'Normal transaction velocity';

    if (transactionCount > 20) {
      score = 90;
      description = 'Extremely high transaction velocity';
    } else if (transactionCount > 10) {
      score = 70;
      description = 'Very high transaction velocity';
    } else if (transactionCount > 5) {
      score = 40;
      description = 'High transaction velocity';
    } else if (transactionCount > 2) {
      score = 15;
      description = 'Moderate transaction velocity';
    }

    return {
      type: 'velocity',
      score,
      description,
      weight: this.factorWeights.velocity
    };
  }

  private assessLocationRisk(ipAddress?: string, customerCountry?: string): FraudFactor {
    let score = 0;
    let description = 'Normal geographic location';

    if (!ipAddress) {
      return {
        type: 'location',
        score: 20,
        description: 'Unknown IP address',
        weight: this.factorWeights.location
      };
    }

    // Simulate IP geolocation and risk assessment
    const ipLocation = this.getIpLocation(ipAddress);
    
    // Check for high-risk countries
    const highRiskCountries = ['XX', 'YY']; // Placeholder country codes
    const mediumRiskCountries = ['ZZ']; // Placeholder

    if (highRiskCountries.includes(ipLocation.country)) {
      score = 85;
      description = 'Transaction from high-risk country';
    } else if (mediumRiskCountries.includes(ipLocation.country)) {
      score = 50;
      description = 'Transaction from medium-risk country';
    } else if (customerCountry && ipLocation.country !== customerCountry) {
      score = 35;
      description = 'IP location differs from customer country';
    } else if (ipLocation.isProxy || ipLocation.isVPN) {
      score = 60;
      description = 'Transaction through proxy or VPN';
    }

    return {
      type: 'location',
      score,
      description,
      weight: this.factorWeights.location
    };
  }

  private assessDeviceRisk(deviceFingerprint?: string, userAgent?: string): FraudFactor {
    let score = 0;
    let description = 'Normal device profile';

    if (!deviceFingerprint && !userAgent) {
      return {
        type: 'device',
        score: 30,
        description: 'Missing device information',
        weight: this.factorWeights.device
      };
    }

    // Simulate device analysis
    if (deviceFingerprint) {
      const deviceRisk = this.analyzeDeviceFingerprint(deviceFingerprint);
      score += deviceRisk.score;
      if (deviceRisk.score > 0) {
        description = deviceRisk.description;
      }
    }

    if (userAgent) {
      const uaRisk = this.analyzeUserAgent(userAgent);
      score = Math.max(score, uaRisk.score);
      if (uaRisk.score > score / 2) {
        description = uaRisk.description;
      }
    }

    return {
      type: 'device',
      score: Math.min(score, 100),
      description,
      weight: this.factorWeights.device
    };
  }

  private async assessBehavioralRisk(data: FraudDetectionInput): Promise<FraudFactor> {
    let score = 0;
    let description = 'Normal behavioral pattern';

    // Analyze payment pattern
    if (data.customerId) {
      const customerHistory = await this.getCustomerPaymentHistory(data.customerId);
      
      // Check for unusual payment method
      const usualMethods = this.getUsualPaymentMethods(customerHistory);
      if (!usualMethods.includes(data.paymentMethod)) {
        score += 20;
        description = 'Unusual payment method for customer';
      }

      // Check for unusual amount
      const usualAmountRange = this.getUsualAmountRange(customerHistory);
      if (data.amount < usualAmountRange.min * 0.1 || data.amount > usualAmountRange.max * 5) {
        score += 25;
        description = 'Unusual transaction amount for customer';
      }

      // Check for time pattern
      const usualTimePattern = this.getUsualTimePattern(customerHistory);
      const currentHour = new Date().getHours();
      if (!this.isWithinUsualTimePattern(currentHour, usualTimePattern)) {
        score += 15;
        description = 'Transaction outside usual time pattern';
      }
    } else {
      score = 10;
      description = 'New customer - limited behavioral data';
    }

    return {
      type: 'behavioral',
      score: Math.min(score, 100),
      description,
      weight: this.factorWeights.behavioral
    };
  }

  // Helper methods
  private convertToUSD(amount: number, currency: string): number {
    // Simplified currency conversion - in real implementation, use live rates
    const exchangeRates: Record<string, number> = {
      USD: 1,
      EUR: 1.1,
      GBP: 1.25,
      JPY: 0.007,
      INR: 0.012,
      BRL: 0.2,
      NGN: 0.0024,
      KES: 0.0096
    };

    return amount * (exchangeRates[currency] || 1);
  }

  private async getRecentTransactions(customerId: string, merchantId?: string): Promise<any[]> {
    // Simulate database query - return mock data based on customer ID hash
    const hash = this.simpleHash(customerId);
    const baseCount = hash % 15; // 0-14 transactions
    
    return Array(baseCount).fill(null).map((_, i) => ({
      id: `txn_${customerId}_${i}`,
      timestamp: new Date(Date.now() - i * 3600000).toISOString()
    }));
  }

  private getIpLocation(ipAddress: string): { country: string; isProxy: boolean; isVPN: boolean } {
    // Simulate IP geolocation
    const hash = this.simpleHash(ipAddress);
    const countries = ['US', 'GB', 'DE', 'FR', 'IN', 'BR', 'NG', 'KE', 'JP', 'CN'];
    
    return {
      country: countries[hash % countries.length],
      isProxy: hash % 20 === 0, // 5% chance
      isVPN: hash % 25 === 0 // 4% chance
    };
  }

  private analyzeDeviceFingerprint(fingerprint: string): { score: number; description: string } {
    const hash = this.simpleHash(fingerprint);
    
    if (hash % 50 === 0) {
      return { score: 70, description: 'Suspicious device fingerprint' };
    }
    
    if (hash % 20 === 0) {
      return { score: 30, description: 'Unusual device configuration' };
    }
    
    return { score: 0, description: 'Normal device profile' };
  }

  private analyzeUserAgent(userAgent: string): { score: number; description: string } {
    // Check for suspicious patterns
    if (userAgent.includes('bot') || userAgent.includes('crawler')) {
      return { score: 90, description: 'Automated browser detected' };
    }
    
    if (userAgent.length < 20) {
      return { score: 60, description: 'Suspicious user agent string' };
    }
    
    // Check for very old browsers
    if (userAgent.includes('MSIE 6') || userAgent.includes('Chrome/1')) {
      return { score: 50, description: 'Outdated browser version' };
    }
    
    return { score: 0, description: 'Normal user agent' };
  }

  private async getCustomerPaymentHistory(customerId: string): Promise<any[]> {
    // Simulate customer history retrieval
    const hash = this.simpleHash(customerId);
    const historySize = (hash % 10) + 1; // 1-10 historical transactions
    
    return Array(historySize).fill(null).map((_, i) => ({
      amount: 1000 + (hash % 5000),
      paymentMethod: ['card', 'bank_transfer', 'mobile_money'][hash % 3],
      timestamp: new Date(Date.now() - i * 24 * 3600000).toISOString()
    }));
  }

  private getUsualPaymentMethods(history: any[]): string[] {
    const methods = history.map(h => h.paymentMethod);
    const uniqueMethods = [...new Set(methods)];
    return uniqueMethods;
  }

  private getUsualAmountRange(history: any[]): { min: number; max: number } {
    if (history.length === 0) return { min: 0, max: 1000000 };
    
    const amounts = history.map(h => h.amount);
    return {
      min: Math.min(...amounts),
      max: Math.max(...amounts)
    };
  }

  private getUsualTimePattern(history: any[]): number[] {
    // Return usual hours of day for transactions
    const hours = history.map(h => new Date(h.timestamp).getHours());
    return [...new Set(hours)];
  }

  private isWithinUsualTimePattern(currentHour: number, usualPattern: number[]): boolean {
    if (usualPattern.length === 0) return true;
    
    // Allow +/- 2 hours from usual pattern
    return usualPattern.some(hour => Math.abs(hour - currentHour) <= 2);
  }

  private getHighestRiskFactor(factors: FraudFactor[]): FraudFactor {
    return factors.reduce((highest, current) => 
      current.score > highest.score ? current : highest
    );
  }

  private simpleHash(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash);
  }
}
