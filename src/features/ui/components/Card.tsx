import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  animation?: 'none' | 'default';
}

const Card = ({
  children,
  size = 'md',
  className,
  animation = 'default',
}: CardProps) => {
  const sizeClass = {
    sm: 'p-4',
    md: 'px-6 py-9',
    lg: 'px-10 py-8',
    xl: 'px-[100px] py-12',
  }[size];

  const animationClass = {
    default:
      'hover:-translate-y-1 hover:p-[2px] hover:shadow-[0px_4px_32px_4px_rgba(128,128,128,0.12)]',
    none: '',
  }[animation];

  return (
    <div
      className={twMerge(
        'bg-gradient-1 rounded-lg duration-[400ms]',
        animationClass,
      )}
    >
      <div
        className={twMerge(
          'h-full rounded-lg border border-grey-40 bg-white-10',
          sizeClass,
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
