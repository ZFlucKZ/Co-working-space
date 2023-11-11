import { type ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  color?: 'default' | 'transparent';
  outline?: boolean;
}

const Button = ({
  color = 'default',
  children,
  className,
  ...props
}: ButtonProps) => {
  const colorClass = {
    transparent: 'btn-transparent text-gradient',
    default: 'btn-default',
  }[color];

  return (
    <button className={twMerge('btn', colorClass, className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
