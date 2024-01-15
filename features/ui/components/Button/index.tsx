import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  size?: 'md' | 'lg';
  className?: string;
}

export default function ButtonLink({
  children,
  href = '',
  size = 'md',
  className = '',
}: ButtonProps) {
  const sizes = {
    md: 'px-5 py-3 text-button-2 text-white-10',
    lg: 'px-6 py-3 text-button-1 text-white-10',
  }[size];

  return (
    <>
      <Link href={href}>
        <button
          type="button"
          className={`rounded-lg bg-black-80 duration-200 hover:bg-black-80/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black-80 ${sizes} ${className}`}
        >
          {children}
        </button>
      </Link>
    </>
  );
}
