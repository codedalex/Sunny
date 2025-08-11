/**
 * Currency Hook
 */

import { useState, useEffect } from 'react';
import { formatCurrency, getCurrencyInfo } from '../utils/currency';

export function useCurrency(defaultCurrency: string = 'USD') {
  const [currency, setCurrency] = useState(defaultCurrency);
  const [currencyInfo, setCurrencyInfo] = useState(() => getCurrencyInfo(defaultCurrency));

  useEffect(() => {
    setCurrencyInfo(getCurrencyInfo(currency));
  }, [currency]);

  const formatAmount = (amount: number, locale?: string) => {
    return formatCurrency(amount, currency, locale);
  };

  return {
    currency,
    setCurrency,
    currencyInfo,
    formatAmount,
  };
}
