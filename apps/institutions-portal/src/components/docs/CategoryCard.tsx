'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ChevronRightIcon,
  ClockIcon,
  UserGroupIcon,
  StarIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  SparklesIcon,
  FireIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { DocCategory, InstitutionType } from '../../types/docs';

interface CategoryCardProps {
  category: DocCategory;
  institutionType?: InstitutionType | null;
  customized?: boolean;
  className?: string;
  showProgress?: boolean;
  progress?: number;
  variant?: 'default' | 'compact' | 'featured';
  onClick?: () => void;
}

export default function CategoryCard({
  category,
  institutionType,
  customized = false,
  className = '',
  showProgress = false,
  progress = 0,
  variant = 'default',
  onClick,
}: CategoryCardProps) {
  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { 
      bg: string; 
      text: string; 
      border: string; 
      hover: string;
      accent: string;
    }> = {
      blue: { 
        bg: 'bg-blue-50', 
        text: 'text-blue-700', 
        border: 'border-blue-200', 
        hover: 'hover:border-blue-300',
        accent: 'bg-blue-600'
      },
      green: { 
        bg: 'bg-green-50', 
        text: 'text-green-700', 
        border: 'border-green-200', 
        hover: 'hover:border-green-300',
        accent: 'bg-green-600'
      },
      purple: { 
        bg: 'bg-purple-50', 
        text: 'text-purple-700', 
        border: 'border-purple-200', 
        hover: 'hover:border-purple-300',
        accent: 'bg-purple-600'
      },
      red: { 
        bg: 'bg-red-50', 
        text: 'text-red-700', 
        border: 'border-red-200', 
        hover: 'hover:border-red-300',
        accent: 'bg-red-600'
      },
      orange: { 
        bg: 'bg-orange-50', 
        text: 'text-orange-700', 
        border: 'border-orange-200', 
        hover: 'hover:border-orange-300',
        accent: 'bg-orange-600'
      },
      pink: { 
        bg: 'bg-pink-50', 
        text: 'text-pink-700', 
        border: 'border-pink-200', 
        hover: 'hover:border-pink-300',
        accent: 'bg-pink-600'
      },
      indigo: { 
        bg: 'bg-indigo-50', 
        text: 'text-indigo-700', 
        border: 'border-indigo-200', 
        hover: 'hover:border-indigo-300',
        accent: 'bg-indigo-600'
      },
      yellow: { 
        bg: 'bg-yellow-50', 
        text: 'text-yellow-700', 
        border: 'border-yellow-200', 
        hover: 'hover:border-yellow-300',
        accent: 'bg-yellow-600'
      },
      teal: { 
        bg: 'bg-teal-50', 
        text: 'text-teal-700', 
        border: 'border-teal-200', 
        hover: 'hover:border-teal-300',
        accent: 'bg-teal-600'
      },
      gray: { 
        bg: 'bg-gray-50', 
        text: 'text-gray-700', 
        border: 'border-gray-200', 
        hover: 'hover:border-gray-300',
        accent: 'bg-gray-600'
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': 
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Intermediate': 
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Advanced': 
        return 'bg-red-100 text-red-800 border-red-200';
      default: 
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const colors = getColorClasses(category.color);

  const cardContent = (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className={`
        relative group cursor-pointer
        bg-white rounded-xl border-2 border-gray-200 
        ${colors.hover} hover:shadow-lg 
        transition-all duration-200 
        ${variant === 'compact' ? 'p-4' : 'p-6'} 
        h-full
        ${className}
      `}
      onClick={onClick}
    >
      {/* Progress Bar */}
      {showProgress && progress > 0 && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200 rounded-t-xl overflow-hidden">
          <div 
            className={`h-full ${colors.accent} transition-all duration-500`}
            style={{ width: `${Math.min(Math.max(progress, 0), 100)}%` }}
          />
        </div>
      )}

      {/* Badges Container */}
      <div className={`absolute ${variant === 'compact' ? 'top-2 right-2' : 'top-4 right-4'} flex flex-col gap-1`}>
        {category.popular && (
          <div className="flex items-center px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
            <StarIcon className="w-3 h-3 mr-1" />
            Popular
          </div>
        )}
        {category.mandatory && (
          <div className="flex items-center px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full font-medium">
            <ExclamationTriangleIcon className="w-3 h-3 mr-1" />
            Required
          </div>
        )}
        {customized && (
          <div className="flex items-center px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
            <SparklesIcon className="w-3 h-3 mr-1" />
            Customized
          </div>
        )}
        {category.badge && (
          <div className={`px-2 py-1 ${colors.bg} ${colors.text} text-xs rounded-full font-medium border ${colors.border}`}>
            {category.badge}
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className={`${variant === 'compact' ? 'mb-3' : 'mb-4'}`}>
        {/* Icon and Title */}
        <div className="flex items-start mb-3">
          <div className={`
            ${colors.bg} p-3 rounded-xl 
            group-hover:scale-110 transition-transform duration-200 
            ${variant === 'compact' ? 'mr-3' : 'mr-4'}
          `}>
            {React.createElement(category.icon as any, {
              className: `${variant === 'compact' ? 'w-5 h-5' : 'w-6 h-6'} ${colors.text}`
            })}
          </div>
          <div className="flex-1">
            <h3 className={`
              ${variant === 'compact' ? 'text-base' : 'text-lg'} 
              font-semibold text-gray-900 
              group-hover:text-gray-700 transition-colors
              ${variant === 'compact' ? 'mb-1' : 'mb-2'}
            `}>
              {category.title}
            </h3>
            {variant !== 'compact' && (
              <p className="text-gray-600 text-sm leading-relaxed">
                {category.description}
              </p>
            )}
          </div>
        </div>

        {/* Metadata */}
        <div className={`flex items-center gap-3 text-xs text-gray-500 ${variant === 'compact' ? 'mb-2' : 'mb-4'}`}>
          {category.estimatedTime && (
            <div className="flex items-center">
              <ClockIcon className="w-3 h-3 mr-1" />
              {category.estimatedTime}
            </div>
          )}
          {category.difficulty && (
            <span className={`px-2 py-1 rounded-full font-medium border ${getDifficultyColor(category.difficulty)}`}>
              {category.difficulty}
            </span>
          )}
          {showProgress && (
            <div className="flex items-center">
              <UserGroupIcon className="w-3 h-3 mr-1" />
              {progress}% complete
            </div>
          )}
        </div>

        {/* Compact Description */}
        {variant === 'compact' && (
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {category.description}
          </p>
        )}

        {/* Items List */}
        {variant !== 'compact' && (
          <div className="space-y-2 mb-4">
            <h4 className="text-sm font-medium text-gray-900">Key Topics:</h4>
            {category.items.slice(0, variant === 'featured' ? 4 : 3).map((item) => (
              <div key={item} className="flex items-center text-sm text-gray-700">
                <div className={`w-1.5 h-1.5 rounded-full ${colors.accent} mr-2 flex-shrink-0`} />
                <span className="truncate">{item}</span>
              </div>
            ))}
            {category.items.length > (variant === 'featured' ? 4 : 3) && (
              <div className="text-sm text-gray-500">
                +{category.items.length - (variant === 'featured' ? 4 : 3)} more topics
              </div>
            )}
          </div>
        )}

        {/* Institution-Specific Content */}
        {institutionType && category.institutionSpecific?.[institutionType.id] && variant !== 'compact' && (
          <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-medium text-blue-900 mb-2 text-sm flex items-center">
              <SparklesIcon className="w-4 h-4 mr-1" />
              {institutionType.name} Specific
            </h4>
            <div className="space-y-1">
              {category.institutionSpecific[institutionType.id].slice(0, 2).map((item: string) => (
                <div key={item} className="flex items-center text-sm text-blue-700">
                  <CheckCircleIcon className="w-3 h-3 mr-2 text-blue-500 flex-shrink-0" />
                  <span className="truncate">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Prerequisites */}
        {category.prerequisites && category.prerequisites.length > 0 && variant === 'featured' && (
          <div className="mb-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
            <h4 className="font-medium text-yellow-900 mb-2 text-sm">Prerequisites:</h4>
            <div className="text-sm text-yellow-800">
              {category.prerequisites.join(', ')}
            </div>
          </div>
        )}

        {/* Outcomes */}
        {category.outcomes && category.outcomes.length > 0 && variant === 'featured' && (
          <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-200">
            <h4 className="font-medium text-green-900 mb-2 text-sm">What you'll learn:</h4>
            <div className="space-y-1">
              {category.outcomes.slice(0, 3).map((outcome) => (
                <div key={outcome} className="flex items-center text-sm text-green-700">
                  <CheckCircleIcon className="w-3 h-3 mr-2 text-green-500 flex-shrink-0" />
                  <span className="truncate">{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-gray-100">
        <div className={`
          inline-flex items-center text-sm font-medium ${colors.text} 
          group-hover:translate-x-1 transition-transform duration-200
        `}>
          {variant === 'compact' ? 'View' : `Explore ${category.title}`}
          <ChevronRightIcon className="w-4 h-4 ml-1" />
        </div>

        {/* Additional Footer Info for Featured Variant */}
        {variant === 'featured' && (
          <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
            <div className="flex items-center space-x-3">
              {category.estimatedTime && (
                <span className="flex items-center">
                  <ClockIcon className="w-3 h-3 mr-1" />
                  {category.estimatedTime}
                </span>
              )}
              <span className="flex items-center">
                <UserGroupIcon className="w-3 h-3 mr-1" />
                {category.items.length} topics
              </span>
            </div>
            {category.popular && (
              <div className="flex items-center text-orange-500">
                <FireIcon className="w-3 h-3 mr-1" />
                Trending
              </div>
            )}
          </div>
        )}
      </div>

      {/* Hover Overlay Effect */}
      <div className={`
        absolute inset-0 rounded-xl opacity-0 group-hover:opacity-5 
        transition-opacity duration-200 pointer-events-none
        ${colors.accent}
      `} />
    </motion.div>
  );

  // Wrap with Link if not using custom onClick
  if (!onClick && category.id) {
    return (
      <Link href={`/docs/${category.id}`} className="block h-full">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}

// Specialized variants
export const CompactCategoryCard = (props: Omit<CategoryCardProps, 'variant'>) => (
  <CategoryCard {...props} variant="compact" />
);

export const FeaturedCategoryCard = (props: Omit<CategoryCardProps, 'variant'>) => (
  <CategoryCard {...props} variant="featured" />
);
