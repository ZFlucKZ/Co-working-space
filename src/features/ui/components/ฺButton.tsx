import { type ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  color?: 'default' | 'transparent';
  outline?: boolean;
  size?: 'lg' | 'md' | 'sm';
}

const Button = ({
  color = 'default',
  size = 'md',
  children,
  className,
  ...props
}: ButtonProps) => {
  const colorClass = {
    transparent: 'btn-transparent text-gradient-transition',
    default: 'btn-default',
  }[color];

  const sizeClass = {
    lg: 'py-5',
    md: 'py-4',
    sm: 'py-3',
  }[size];

  return (
    <button
      className={twMerge('btn', colorClass, sizeClass, className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
