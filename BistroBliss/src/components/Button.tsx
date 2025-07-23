import React from 'react';
import type { ButtonProps } from './ui';

const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  iconLeft,
  iconRight,
  disableHover = false,
  className = '',
  fullWidth = false,
}) => {
  const baseClasses = `rounded-full font-medium focus:outline-none transition-colors duration-200 ${
    fullWidth ? 'w-full' : ''
  } ${className}`;
  
  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  }[size];

  const variantClasses = {
    primary: `bg-[var(--neutral-02)] text-[var(--neutral-07)] font-semibold ${
      disableHover ? '' : 'hover:bg-[var(--neutral-03)]'
    }`,
    secondary: `bg-[var(--neutral-03)] text-[var(--neutral-07)] ${
      disableHover ? '' : 'hover:bg-[var(--neutral-04)]'
    }`,
    ghost: `bg-transparent text-[var(--primary)] border border-[var(--primary)] ${
      disableHover ? '' : 'hover:bg-[var(--primary)] hover:text-[var(--neutral-01)]'
    }`,
  }[variant];

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${disabledClasses} outline focus-visible:outline-2 focus-visible:outline-[var(--neutral-07)] focus-visible:outline-offset-2`}
      disabled={disabled}
      onClick={onClick}
    >
      <div className="flex items-center justify-center gap-2">
        {iconLeft && <span>{iconLeft}</span>}
        {label}
        {iconRight && <span>{iconRight}</span>}
      </div>
    </button>
  );
};

export default Button;