/**
 * Encryption Service
 * Handles encryption and decryption of sensitive payment data
 */

import CryptoJS from 'crypto-js';

export class EncryptionService {
  private readonly secretKey: string;
  private readonly algorithm = CryptoJS.AES;

  constructor(secretKey: string) {
    this.secretKey = secretKey;
  }

  /**
   * Encrypt sensitive data
   */
  encryptData(data: Record<string, any>): string {
    try {
      const jsonString = JSON.stringify(data);
      const encrypted = this.algorithm.encrypt(jsonString, this.secretKey).toString();
      return encrypted;
    } catch (error) {
      console.error('Encryption error:', error);
      throw new Error('Failed to encrypt data');
    }
  }

  /**
   * Decrypt sensitive data
   */
  decryptData(encryptedData: string): Record<string, any> {
    try {
      const decrypted = this.algorithm.decrypt(encryptedData, this.secretKey);
      const jsonString = decrypted.toString(CryptoJS.enc.Utf8);
      return JSON.parse(jsonString);
    } catch (error) {
      console.error('Decryption error:', error);
      throw new Error('Failed to decrypt data');
    }
  }

  /**
   * Hash sensitive data (one-way)
   */
  hashData(data: string): string {
    return CryptoJS.SHA256(data + this.secretKey).toString();
  }

  /**
   * Generate secure random token
   */
  generateToken(length: number = 32): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      token += characters[randomIndex];
    }
    
    return token;
  }

  /**
   * Mask sensitive data for logging
   */
  maskSensitiveData(data: any): any {
    if (typeof data !== 'object' || data === null) {
      return data;
    }

    const masked = { ...data };
    const sensitiveFields = [
      'cardNumber', 'card_number', 'number',
      'cvv', 'cvc', 'security_code',
      'password', 'pin',
      'accountNumber', 'account_number',
      'routingNumber', 'routing_number',
      'ssn', 'social_security_number'
    ];

    for (const field of sensitiveFields) {
      if (masked[field]) {
        masked[field] = this.maskValue(masked[field].toString());
      }
    }

    return masked;
  }

  private maskValue(value: string): string {
    if (value.length <= 4) {
      return '*'.repeat(value.length);
    }
    
    const visibleChars = Math.min(4, Math.floor(value.length * 0.2));
    const maskedLength = value.length - visibleChars;
    
    return '*'.repeat(maskedLength) + value.slice(-visibleChars);
  }
}
