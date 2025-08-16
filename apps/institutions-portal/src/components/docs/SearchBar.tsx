'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MagnifyingGlassIcon,
  XMarkIcon,
  ClockIcon,
  ArrowTrendingUpIcon,
  DocumentTextIcon,
  VideoCameraIcon,
  CodeBracketIcon,
  BookOpenIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { SearchResult, SearchSuggestion } from '../../types/docs';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  showSuggestions?: boolean;
  autoFocus?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function SearchBar({
  placeholder = 'Search documentation...',
  onSearch,
  showSuggestions = true,
  autoFocus = false,
  size = 'md',
  className = '',
}: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Mock suggestions data
  const popularSuggestions: SearchSuggestion[] = [
    {
      title: 'M-Pesa Integration Guide',
      href: '/docs/integrations/mpesa',
      category: 'Integrations',
      type: 'guide',
      popularity: 95,
    },
    {
      title: 'CBK Compliance Setup',
      href: '/docs/compliance/cbk',
      category: 'Compliance',
      type: 'guide',
      popularity: 87,
    },
    {
      title: 'API Authentication',
      href: '/docs/api/authentication',
      category: 'API',
      type: 'api',
      popularity: 92,
    },
    {
      title: 'SACCO Management Features',
      href: '/docs/institutions/sacco',
      category: 'Institution Setup',
      type: 'guide',
      popularity: 78,
    },
    {
      title: 'Payment Processing API',
      href: '/docs/api/payments',
      category: 'API',
      type: 'api',
      popularity: 89,
    },
    {
      title: 'Core Banking Integration',
      href: '/docs/integrations/core-banking',
      category: 'Integrations',
      type: 'tutorial',
      popularity: 84,
    },
  ];

  // Size configurations
  const sizeConfig = {
    sm: {
      input: 'px-10 py-2 text-sm',
      container: 'max-w-md',
      icon: 'w-4 h-4',
    },
    md: {
      input: 'px-12 py-3 text-base',
      container: 'max-w-lg',
      icon: 'w-5 h-5',
    },
    lg: {
      input: 'px-14 py-4 text-lg',
      container: 'max-w-2xl',
      icon: 'w-6 h-6',
    },
  };

  const config = sizeConfig[size];

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('sunny-docs-recent-searches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  // Auto-focus input
  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd/Ctrl + K to focus search
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
        setIsOpen(true);
      }

      // Escape to close
      if (e.key === 'Escape') {
        setIsOpen(false);
        inputRef.current?.blur();
      }

      // Arrow navigation
      if (isOpen && results.length > 0) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedIndex((prev) => 
            prev < results.length - 1 ? prev + 1 : prev
          );
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedIndex((prev) => prev > 0 ? prev - 1 : -1);
        } else if (e.key === 'Enter' && selectedIndex >= 0) {
          e.preventDefault();
                  // Navigate to selected result
        if (results[selectedIndex]?.href) {
          window.location.href = results[selectedIndex].href;
        }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        resultsRef.current && 
        !resultsRef.current.contains(event.target as Node) &&
        !inputRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Mock search function
  const performSearch = async (searchQuery: string): Promise<SearchResult[]> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 300));

    // Mock search results
    const mockResults: SearchResult[] = [
      {
        id: '1',
        title: 'M-Pesa STK Push Integration',
        description: 'Learn how to implement M-Pesa STK Push for your institution',
        href: '/docs/integrations/mpesa/stk-push',
        category: 'Integrations',
        type: 'guide' as const,
        difficulty: 'Intermediate',
        estimatedTime: '30 min',
      },
      {
        id: '2',
        title: 'Payment Processing API Reference',
        description: 'Complete API documentation for payment processing endpoints',
        href: '/docs/api/payments',
        category: 'API Reference',
        type: 'api' as const,
        difficulty: 'Advanced',
        estimatedTime: '1 hour',
      },
      {
        id: '3',
        title: 'CBK Compliance Automation',
        description: 'Automate your Central Bank of Kenya regulatory reporting',
        href: '/docs/compliance/cbk/automation',
        category: 'Compliance',
        type: 'tutorial' as const,
        difficulty: 'Intermediate',
        estimatedTime: '45 min',
      },
    ].filter(result => 
      result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return mockResults;
  };

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 2) {
      setIsLoading(true);
      try {
        const searchResults = await performSearch(value);
        setResults(searchResults);
        setSelectedIndex(-1);
      } catch (error) {
        console.error('Search error:', error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    } else {
      setResults([]);
      setSelectedIndex(-1);
    }

    onSearch?.(value);
  };

  const handleFocus = () => {
    setIsOpen(true);
    if (query.length === 0) {
      setSuggestions(popularSuggestions);
    }
  };

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    setQuery(suggestion.title);
    setIsOpen(false);
    
    // Add to recent searches
    const updated = [suggestion.title, ...recentSearches.filter(s => s !== suggestion.title)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem('sunny-docs-recent-searches', JSON.stringify(updated));
  };

  const handleClearSearch = () => {
    setQuery('');
    setResults([]);
    setSelectedIndex(-1);
    inputRef.current?.focus();
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'api':
        return <CodeBracketIcon className="w-4 h-4" />;
      case 'video':
        return <VideoCameraIcon className="w-4 h-4" />;
      case 'tutorial':
        return <BookOpenIcon className="w-4 h-4" />;
      default:
        return <DocumentTextIcon className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'api':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'video':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'tutorial':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'reference':
        return 'bg-gray-50 text-gray-700 border-gray-200';
      default:
        return 'bg-orange-50 text-orange-700 border-orange-200';
    }
  };

  return (
    <div className={`relative ${config.container} ${className}`}>
      <div className="relative">
        {/* Search Icon */}
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MagnifyingGlassIcon className={`${config.icon} text-gray-400`} />
        </div>

        {/* Input Field */}
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={handleFocus}
          placeholder={placeholder}
          className={`
            block w-full ${config.input} 
            bg-white border border-gray-300 rounded-xl
            placeholder-gray-500 text-gray-900
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            transition-all duration-200
          `}
          autoComplete="off"
          spellCheck="false"
        />

        {/* Clear Button */}
        {query && (
          <button
                      onClick={handleClearSearch}
          className="absolute inset-y-0 right-12 flex items-center pr-3 hover:text-gray-700 transition-colors"
          aria-label="Clear search"
        >
            <XMarkIcon className={`${config.icon} text-gray-400`} />
          </button>
        )}

        {/* Keyboard Shortcut */}
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
          <kbd className="hidden sm:inline-block px-2 py-1 bg-gray-100 border border-gray-200 rounded text-xs text-gray-500 font-mono">
            ⌘K
          </kbd>
        </div>
      </div>

      {/* Search Results Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={resultsRef}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-full mt-2 bg-white rounded-xl shadow-xl border border-gray-200 max-h-96 overflow-hidden"
          >
            {/* Loading State */}
            {isLoading && (
              <div className="p-4 text-center">
                <div className="animate-spin inline-block w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full"></div>
                <p className="text-sm text-gray-500 mt-2">Searching...</p>
              </div>
            )}

            {/* Search Results */}
            {!isLoading && query.length > 2 && results.length > 0 && (
              <div className="max-h-80 overflow-y-auto">
                <div className="p-3 border-b border-gray-100">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">
                    Search Results ({results.length})
                  </h3>
                </div>
                {results.map((result, index) => (
                  <Link
                    key={result.id}
                    href={result.href}
                    className={`block px-4 py-3 hover:bg-gray-50 border-b border-gray-50 last:border-b-0 transition-colors ${
                      selectedIndex === index ? 'bg-blue-50' : ''
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-start">
                      <div className={`flex-shrink-0 mr-3 p-2 rounded-lg border ${getTypeColor(result.type)}`}>
                        {getTypeIcon(result.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 truncate">
                          {result.title}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                          {result.description}
                        </p>
                        <div className="flex items-center mt-2 space-x-3 text-xs text-gray-500">
                          <span className="capitalize">{result.category}</span>
                          {result.difficulty && (
                            <>
                              <span>•</span>
                              <span>{result.difficulty}</span>
                            </>
                          )}
                          {result.estimatedTime && (
                            <>
                              <span>•</span>
                              <span className="flex items-center">
                                <ClockIcon className="w-3 h-3 mr-1" />
                                {result.estimatedTime}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* No Results */}
            {!isLoading && query.length > 2 && results.length === 0 && (
              <div className="p-6 text-center">
                <DocumentTextIcon className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-sm text-gray-500">
                  No results found for "{query}"
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Try adjusting your search terms
                </p>
              </div>
            )}

            {/* Suggestions and Recent Searches */}
            {!isLoading && query.length <= 2 && showSuggestions && (
              <div className="max-h-80 overflow-y-auto">
                {/* Popular Suggestions */}
                <div className="p-3 border-b border-gray-100">
                  <h3 className="text-sm font-medium text-gray-900 mb-3 flex items-center">
                                          <ArrowTrendingUpIcon className="w-4 h-4 mr-2" />
                    Popular Searches
                  </h3>
                  <div className="space-y-1">
                    {popularSuggestions.slice(0, 4).map((suggestion) => (
                      <button
                        key={suggestion.title}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <span>{suggestion.title}</span>
                          <span className="text-xs text-gray-400">{suggestion.category}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Recent Searches */}
                {recentSearches.length > 0 && (
                  <div className="p-3">
                    <h3 className="text-sm font-medium text-gray-900 mb-3 flex items-center">
                      <ClockIcon className="w-4 h-4 mr-2" />
                      Recent Searches
                    </h3>
                    <div className="space-y-1">
                      {recentSearches.slice(0, 3).map((search) => (
                        <button
                          key={search}
                          onClick={() => {
                            setQuery(search);
                            performSearch(search).then(setResults);
                          }}
                          className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          {search}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
