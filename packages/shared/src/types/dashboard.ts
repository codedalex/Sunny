/**
 * Dashboard and Analytics Types
 */

export interface DashboardMetrics {
  transactions: TransactionMetrics;
  revenue: RevenueMetrics;
  customers: CustomerMetrics;
  paymentMethods: PaymentMethodMetrics[];
}

export interface TransactionMetrics {
  count: number;
  volume: number;
  currency: string;
  average: number;
  successful: number;
  failed: number;
  successRate: number;
  growthRate?: number;
}

export interface RevenueMetrics {
  total: number;
  fees: number;
  currency: string;
  period: string;
  growthRate?: number;
}

export interface CustomerMetrics {
  total: number;
  new: number;
  returning: number;
  averageTransactionsPerCustomer: number;
  period: string;
}

export interface PaymentMethodMetrics {
  method: string;
  count: number;
  volume: number;
  percentage: number;
  currency: string;
}

export interface TimeSeriesData {
  date: string;
  transactions: number;
  volume: number;
  successRate: number;
  fees?: number;
}

export interface DashboardFilters {
  dateRange: DateRange;
  paymentMethods?: string[];
  currencies?: string[];
  countries?: string[];
}

export interface DateRange {
  start: string;
  end: string;
  preset?: 'today' | '7d' | '30d' | '90d' | 'ytd' | 'custom';
}

export interface ChartConfig {
  type: 'line' | 'bar' | 'pie' | 'donut' | 'area';
  title: string;
  data: any[];
  xAxis?: string;
  yAxis?: string;
  color?: string;
}

// Table types
export interface TableColumn {
  key: string;
  title: string;
  width?: string;
  sortable?: boolean;
  filterable?: boolean;
  render?: (value: any, record: any) => React.ReactNode;
}

export interface TableData {
  columns: TableColumn[];
  data: any[];
  pagination?: {
    current: number;
    pageSize: number;
    total: number;
  };
  loading?: boolean;
}
