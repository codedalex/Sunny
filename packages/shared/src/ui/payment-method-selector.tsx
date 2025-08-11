/**
 * Payment Method Selector Component
 */

import * as React from 'react';
import { PaymentMethods } from '../types/payment';
import { getPaymentMethodName, getPaymentMethodsForCountry } from '../utils/payment-methods';
import { cn } from '../utils/cn';

export interface PaymentMethodOption {
  method: PaymentMethods;
  name: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface PaymentMethodSelectorProps {
  value?: PaymentMethods;
  onValueChange?: (value: PaymentMethods) => void;
  options?: PaymentMethodOption[];
  countryCode?: string;
  className?: string;
  disabled?: boolean;
  layout?: 'grid' | 'list';
  size?: 'sm' | 'md' | 'lg';
}

const PaymentMethodSelector = React.forwardRef<
  HTMLDivElement,
  PaymentMethodSelectorProps
>(({ 
  value, 
  onValueChange, 
  options,
  countryCode,
  className,
  disabled = false,
  layout = 'grid',
  size = 'md',
  ...props 
}, ref) => {
  // Generate options from country if not provided
  const methodOptions = React.useMemo(() => {
    if (options) return options;
    
    const availableMethods = countryCode 
      ? getPaymentMethodsForCountry(countryCode)
      : Object.values(PaymentMethods);
    
    return availableMethods.map(method => ({
      method,
      name: getPaymentMethodName(method),
      icon: getPaymentMethodIcon(method),
    }));
  }, [options, countryCode]);

  const handleMethodSelect = (method: PaymentMethods) => {
    if (disabled) return;
    onValueChange?.(method);
  };

  const sizeClasses = {
    sm: 'p-2 text-sm',
    md: 'p-3 text-sm',
    lg: 'p-4 text-base',
  };

  const layoutClasses = {
    grid: 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2',
    list: 'flex flex-col gap-2',
  };

  return (
    <div
      ref={ref}
      className={cn(
        'w-full',
        layoutClasses[layout],
        className
      )}
      {...props}
    >
      {methodOptions.map(({ method, name, icon, disabled: optionDisabled }) => {
        const isSelected = value === method;
        const isDisabled = disabled || optionDisabled;
        
        return (
          <button
            key={method}
            type="button"
            onClick={() => handleMethodSelect(method)}
            disabled={isDisabled}
            className={cn(
              'flex items-center justify-center gap-2 rounded-lg border-2 transition-all',
              'hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
              sizeClasses[size],
              isSelected
                ? 'border-primary bg-primary/5 text-primary'
                : 'border-gray-200 bg-white text-gray-700',
              isDisabled && 'opacity-50 cursor-not-allowed',
              layout === 'list' && 'justify-start'
            )}
          >
            {icon && (
              <span className="flex-shrink-0">
                {icon}
              </span>
            )}
            <span className="font-medium">{name}</span>
          </button>
        );
      })}
    </div>
  );
});

PaymentMethodSelector.displayName = 'PaymentMethodSelector';

/**
 * Get payment method icon
 */
function getPaymentMethodIcon(method: PaymentMethods): React.ReactNode {
  const iconMap: Record<PaymentMethods, string> = {
    [PaymentMethods.CARD]: '💳',
    [PaymentMethods.BANK_TRANSFER]: '🏦',
    [PaymentMethods.ACH]: '🏦',
    [PaymentMethods.SEPA]: '🇪🇺',
    [PaymentMethods.WIRE]: '📄',
    [PaymentMethods.MOBILE_MONEY]: '📱',
    [PaymentMethods.MPESA]: '📱',
    [PaymentMethods.MTN]: '📱',
    [PaymentMethods.AIRTEL]: '📱',
    [PaymentMethods.ORANGE]: '📱',
    [PaymentMethods.APPLE_PAY]: '🍎',
    [PaymentMethods.GOOGLE_PAY]: '🎨',
    [PaymentMethods.SAMSUNG_PAY]: '📱',
    [PaymentMethods.UPI]: '🇮🇳',
    [PaymentMethods.ALIPAY]: '🇨🇳',
    [PaymentMethods.WECHAT]: '💬',
    [PaymentMethods.PAYTM]: '🇮🇳',
    [PaymentMethods.PIX]: '🇧🇷',
    [PaymentMethods.BOLETO]: '🧾',
    [PaymentMethods.OXXO]: '🏪',
    [PaymentMethods.IDEAL]: '🇳🇱',
    [PaymentMethods.SOFORT]: '🇩🇪',
    [PaymentMethods.GIROPAY]: '🇩🇪',
    [PaymentMethods.BANCONTACT]: '🇧🇪',
    [PaymentMethods.CRYPTO]: '₿',
    [PaymentMethods.KLARNA]: '🛍️',
    [PaymentMethods.AFTERPAY]: '🛒',
    [PaymentMethods.AFFIRM]: '💰',
    [PaymentMethods.CASH]: '💵',
    [PaymentMethods.INVOICE]: '📄',
  };

  return <span>{iconMap[method] || '💳'}</span>;
}

export { PaymentMethodSelector };
