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
}) => {
  type Size = 'sm' | 'md' | 'lg';
  type Variant = 'primary' | 'secondary' | 'ghost';

  const baseClasses = 'px-4 py-2 rounded-full font-medium focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';
  const sizeClasses = {
    sm: 'text-sm px-3 py-1',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  }[size as Size];
  const variantClasses = {
    primary: 'bg-[var(--neutral-02)] text-[var(--neutral-05)] ',
    secondary: 'bg-[var(--neutral-03)] text-[var(--neutral-05)] hover:bg-[var(--neutral-04)]',
    ghost: 'bg-transparent text-[var(--primary)] border border-[var(--primary)] ' +
    (disableHover ? '' : 'hover:bg-[var(--primary)] hover:text-[var(--neutral-01)]'),  }[variant as Variant];

  return (
    <button
      className={`${baseClasses} ${sizeClasses} ${variantClasses} outline outline-2 outline-[var(--neutral-07)] outline-offset-2`}
      disabled={disabled}
      onClick={onClick}
    >
      {iconLeft && <span className="mr-2">{iconLeft}</span>}
      {label}
      {iconRight && <span className="ml-2">{iconRight}</span>}
    </button>
  );
};

export default Button;