import React from 'react';

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
  align = 'center',
  theme = 'light',
  className = '',
}: SectionHeadingProps) {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  const isDark = theme === 'dark';

  return (
    <div className={`flex flex-col max-w-3xl ${alignClasses[align]} ${className}`}>
      {label && (
        <div className="flex items-center gap-2 mb-3">
          <span className="h-px w-6 bg-gold"></span>
          <span className={`text-xs uppercase tracking-[0.25em] font-semibold ${isDark ? 'text-gold' : 'text-burgundy'}`}>
            {label}
          </span>
          <span className="h-px w-6 bg-gold"></span>
        </div>
      )}

      <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-[1.2] ${isDark ? 'text-ivory' : 'text-burgundy-deep'}`}>
        {title}
      </h2>

      {description && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${isDark ? 'text-ivory-cream/80' : 'text-charcoal/70'}`}>
          {description}
        </p>
      )}

      <div className={`h-1 w-12 bg-gold/40 mt-6 rounded-full ${align === 'center' ? 'mx-auto' : ''}`}></div>
    </div>
  );
}
