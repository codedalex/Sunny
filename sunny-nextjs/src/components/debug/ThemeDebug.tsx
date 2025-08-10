'use client';

import { useTheme } from '@/lib/contexts/theme-context';

export default function ThemeDebug() {
  const { theme, actualTheme, setTheme } = useTheme();

  const clearStorage = () => {
    localStorage.removeItem('sunny-theme');
    window.location.reload();
  };

  return (
    <div className="fixed bottom-4 left-4 bg-black/80 text-white p-4 rounded-lg text-sm z-50 max-w-xs">
      <div className="space-y-2">
        <div>Selected: <strong>{theme}</strong></div>
        <div>Active: <strong>{actualTheme}</strong></div>
        <div>HTML Class: <strong>{typeof window !== 'undefined' ? document.documentElement.className : 'N/A'}</strong></div>
        <div>Storage: <strong>{typeof window !== 'undefined' ? localStorage.getItem('sunny-theme') || 'none' : 'N/A'}</strong></div>
        <div className="flex gap-1 mt-2 flex-wrap">
          <button 
            onClick={() => setTheme('light')}
            className="px-2 py-1 bg-blue-600 rounded text-xs"
          >
            Light
          </button>
          <button 
            onClick={() => setTheme('dark')}
            className="px-2 py-1 bg-gray-600 rounded text-xs"
          >
            Dark
          </button>
          <button 
            onClick={() => setTheme('system')}
            className="px-2 py-1 bg-purple-600 rounded text-xs"
          >
            System
          </button>
        </div>
        <button 
          onClick={clearStorage}
          className="px-2 py-1 bg-red-600 rounded text-xs w-full mt-2"
        >
          Clear & Reload
        </button>
      </div>
    </div>
  );
}
