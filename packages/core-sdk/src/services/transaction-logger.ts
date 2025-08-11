/**
 * Transaction Logger Service
 * Comprehensive logging for all payment transactions
 */

interface LogConfig {
  enabled: boolean;
  merchantId: string;
  logLevel?: 'debug' | 'info' | 'warn' | 'error';
}

interface TransactionLog {
  transactionId: string;
  merchantId: string;
  timestamp: string;
  status: string;
  amount: number;
  currency: string;
  paymentMethod: string;
  customerEmail?: string;
  errorCode?: string;
  metadata?: Record<string, any>;
  processingTime?: number;
}

export class TransactionLogger {
  private readonly config: Required<LogConfig>;
  private readonly logs: TransactionLog[] = [];

  constructor(config: LogConfig) {
    this.config = {
      logLevel: 'info',
      ...config
    };
  }

  async logTransaction(data: any): Promise<void> {
    if (!this.config.enabled) {
      return;
    }

    const logEntry: TransactionLog = {
      transactionId: data.transactionId,
      merchantId: this.config.merchantId,
      timestamp: new Date().toISOString(),
      status: data.status,
      amount: data.amount,
      currency: data.currency,
      paymentMethod: data.paymentMethod,
      customerEmail: data.customer?.email,
      errorCode: data.errorCode,
      metadata: this.sanitizeMetadata(data.metadata),
      processingTime: data.processingTime
    };

    // Store log entry
    this.logs.push(logEntry);

    // In a real implementation, this would send to logging service
    this.sendToLoggingService(logEntry);
  }

  async logError(error: Error, context?: Record<string, any>): Promise<void> {
    if (!this.config.enabled) {
      return;
    }

    const errorLog = {
      timestamp: new Date().toISOString(),
      level: 'error',
      message: error.message,
      stack: error.stack,
      context: this.sanitizeMetadata(context),
      merchantId: this.config.merchantId
    };

    console.error('Payment Gateway Error:', errorLog);
  }

  async logInfo(message: string, context?: Record<string, any>): Promise<void> {
    if (!this.config.enabled || this.config.logLevel === 'error') {
      return;
    }

    const infoLog = {
      timestamp: new Date().toISOString(),
      level: 'info',
      message,
      context: this.sanitizeMetadata(context),
      merchantId: this.config.merchantId
    };

    console.log('Payment Gateway Info:', infoLog);
  }

  getTransactionLogs(filters?: {
    startDate?: string;
    endDate?: string;
    status?: string;
    limit?: number;
  }): TransactionLog[] {
    let filteredLogs = [...this.logs];

    if (filters?.startDate) {
      const startDate = new Date(filters.startDate);
      filteredLogs = filteredLogs.filter(log => new Date(log.timestamp) >= startDate);
    }

    if (filters?.endDate) {
      const endDate = new Date(filters.endDate);
      filteredLogs = filteredLogs.filter(log => new Date(log.timestamp) <= endDate);
    }

    if (filters?.status) {
      filteredLogs = filteredLogs.filter(log => log.status === filters.status);
    }

    if (filters?.limit) {
      filteredLogs = filteredLogs.slice(0, filters.limit);
    }

    return filteredLogs.sort((a, b) => 
      new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );
  }

  private sanitizeMetadata(metadata?: Record<string, any>): Record<string, any> | undefined {
    if (!metadata) return undefined;

    const sensitiveKeys = [
      'cardNumber', 'cvv', 'pin', 'password', 'apiSecret', 'privateKey'
    ];

    const sanitized = { ...metadata };
    
    for (const key of sensitiveKeys) {
      if (sanitized[key]) {
        sanitized[key] = '[REDACTED]';
      }
    }

    return sanitized;
  }

  private async sendToLoggingService(logEntry: TransactionLog): Promise<void> {
    // In a real implementation, this would send to external logging service
    // like CloudWatch, Datadog, or custom logging infrastructure
    console.log(`[${logEntry.timestamp}] Transaction ${logEntry.transactionId}: ${logEntry.status}`);
  }
}
