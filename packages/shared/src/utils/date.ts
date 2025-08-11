/**
 * Date utilities
 */

import { format, parseISO, isValid, differenceInDays, addDays, startOfDay, endOfDay } from 'date-fns';

/**
 * Format date for display
 */
export function formatDate(
  date: string | Date,
  formatString: string = 'MMM dd, yyyy',
  locale?: string
): string {
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    if (!isValid(dateObj)) return '';
    return format(dateObj, formatString);
  } catch {
    return '';
  }
}

/**
 * Format date and time
 */
export function formatDateTime(
  date: string | Date,
  formatString: string = 'MMM dd, yyyy HH:mm',
  locale?: string
): string {
  return formatDate(date, formatString, locale);
}

/**
 * Get relative time (e.g., "2 days ago", "in 3 hours")
 */
export function getRelativeTime(date: string | Date): string {
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    if (!isValid(dateObj)) return '';
    
    const now = new Date();
    const diffInDays = differenceInDays(now, dateObj);
    
    if (diffInDays === 0) return 'Today';
    if (diffInDays === 1) return 'Yesterday';
    if (diffInDays === -1) return 'Tomorrow';
    if (diffInDays > 0) return `${diffInDays} days ago`;
    return `In ${Math.abs(diffInDays)} days`;
  } catch {
    return '';
  }
}

/**
 * Check if date is today
 */
export function isToday(date: string | Date): boolean {
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    if (!isValid(dateObj)) return false;
    
    const today = new Date();
    return (
      dateObj.getDate() === today.getDate() &&
      dateObj.getMonth() === today.getMonth() &&
      dateObj.getFullYear() === today.getFullYear()
    );
  } catch {
    return false;
  }
}

/**
 * Get date range presets
 */
export function getDateRangePresets() {
  const today = new Date();
  
  return {
    today: {
      start: startOfDay(today),
      end: endOfDay(today),
    },
    yesterday: {
      start: startOfDay(addDays(today, -1)),
      end: endOfDay(addDays(today, -1)),
    },
    last7Days: {
      start: startOfDay(addDays(today, -7)),
      end: endOfDay(today),
    },
    last30Days: {
      start: startOfDay(addDays(today, -30)),
      end: endOfDay(today),
    },
    last90Days: {
      start: startOfDay(addDays(today, -90)),
      end: endOfDay(today),
    },
    thisMonth: {
      start: startOfDay(new Date(today.getFullYear(), today.getMonth(), 1)),
      end: endOfDay(today),
    },
    lastMonth: {
      start: startOfDay(new Date(today.getFullYear(), today.getMonth() - 1, 1)),
      end: endOfDay(new Date(today.getFullYear(), today.getMonth(), 0)),
    },
    thisYear: {
      start: startOfDay(new Date(today.getFullYear(), 0, 1)),
      end: endOfDay(today),
    },
  };
}

/**
 * Parse date range string
 */
export function parseDateRange(range: string): { start: Date; end: Date } | null {
  const presets = getDateRangePresets();
  
  if (range in presets) {
    return presets[range as keyof typeof presets];
  }
  
  // Try to parse custom range (e.g., "2023-01-01,2023-12-31")
  const parts = range.split(',');
  if (parts.length === 2) {
    try {
      const start = parseISO(parts[0].trim());
      const end = parseISO(parts[1].trim());
      
      if (isValid(start) && isValid(end)) {
        return { start: startOfDay(start), end: endOfDay(end) };
      }
    } catch {
      // Invalid format
    }
  }
  
  return null;
}

/**
 * Format date range for display
 */
export function formatDateRange(start: Date, end: Date): string {
  if (isToday(start) && isToday(end)) {
    return 'Today';
  }
  
  const startStr = formatDate(start, 'MMM dd');
  const endStr = formatDate(end, 'MMM dd');
  
  if (start.getFullYear() !== end.getFullYear()) {
    return `${formatDate(start, 'MMM dd, yyyy')} - ${formatDate(end, 'MMM dd, yyyy')}`;
  }
  
  if (start.getMonth() !== end.getMonth()) {
    return `${startStr} - ${endStr}, ${end.getFullYear()}`;
  }
  
  if (start.getDate() !== end.getDate()) {
    return `${startStr} - ${endStr}, ${end.getFullYear()}`;
  }
  
  return formatDate(start, 'MMM dd, yyyy');
}
