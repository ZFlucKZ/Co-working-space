import { type ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  color?: 'default' | 'transparent';
  outline?: boolean;
  size?: 'lg' | 'md' | 'sm';
  hover?: 'default' | 'none';
}

const Button = ({
  color = 'default',
  size = 'md',
  hover = 'default',
  children,
  className,
  ...props
}: ButtonProps) => {
  const colorClass = {
    transparent: 'btn-transparent text-gradient-transition',
    default: 'btn-default',
  }[color];

  const sizeClass = {
    lg: 'py-4',
    md: 'py-4',
    sm: 'py-3',
  }[size];

  const hoverClass = {
    none: '',
    default: 'duration-[400ms] hover:-translate-y-1 hover:opacity-[0.88]',
  }[hover];

  return (
    <button
      className={twMerge('btn', colorClass, sizeClass, hoverClass, className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
