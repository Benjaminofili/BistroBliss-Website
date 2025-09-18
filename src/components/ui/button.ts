export interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  disableHover?: boolean;
  className?: string;
  fullWidth?: boolean;
}