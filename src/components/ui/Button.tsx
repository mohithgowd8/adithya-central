import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'gold' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  showArrow = false,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none group';

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs uppercase tracking-wider',
    md: 'px-6 py-3 text-sm uppercase tracking-widest',
    lg: 'px-8 py-4 text-base uppercase tracking-widest',
  };

  const variantStyles = {
    primary: 'bg-burgundy text-ivory hover:bg-burgundy-deep border border-burgundy hover:border-gold shadow-md',
    secondary: 'bg-ivory text-burgundy border border-burgundy/20 hover:border-gold hover:bg-ivory-cream shadow-sm',
    gold: 'bg-gold text-burgundy-deep hover:bg-gold-light border border-gold font-semibold shadow-md',
    outline: 'bg-transparent text-burgundy border border-burgundy hover:bg-burgundy hover:text-ivory',
    ghost: 'bg-transparent text-burgundy hover:bg-burgundy/5',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 transform group-hover:translate-x-1" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combinedClasses}>
      {content}
    </button>
  );
}
