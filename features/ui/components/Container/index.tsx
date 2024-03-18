import { twMerge } from 'tailwind-merge';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={twMerge(
        'mx-auto max-w-[1440px] px-6 md:px-[148px]',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
