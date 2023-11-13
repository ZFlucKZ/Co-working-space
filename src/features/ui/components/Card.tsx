import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const Card = ({ children, size = 'md', className }: CardProps) => {
  const sizeClass = {
    sm: 'p-4',
    md: 'px-6 py-9',
    lg: 'px-10 py-8',
    xl: 'px-[100px] py-12',
  }[size];

  return (
    <div
      className={twMerge(
        'rounded-lg border border-grey-40',
        sizeClass,
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
