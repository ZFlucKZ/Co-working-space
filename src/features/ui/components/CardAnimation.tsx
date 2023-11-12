import { type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { Variants, motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  animation: 'slideRight' | 'slideLeft' | 'slideUp' | 'slideDown';
}

export const cardVariants: Variants = {
  offscreenSlideRight: {
    x: -100,
    opacity: 0,
  },
  onscreenSlideRight: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      duration: 1,
    },
  },
  offscreenSlideLeft: {
    x: 100,
    opacity: 0,
  },
  onscreenSlideLeft: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      duration: 1,
    },
  },
  offscreenSlideUp: {
    y: 50,
    opacity: 0,
  },
  onscreenSlideUp: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      duration: 1,
    },
  },
  offscreenSlideDown: {
    y: -50,
    opacity: 0,
  },
  onscreenSlideDown: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      duration: 1,
    },
  },
};

const CardAnimation = ({ children, className, animation }: CardProps) => {
  let animationOffScreenClass = {
    slideLeft: 'offscreenSlideLeft',
    slideRight: 'offscreenSlideRight',
    slideUp: 'offscreenSlideUp',
    slideDown: 'offscreenSlideDown',
  }[animation];

  let animationOnScreenClass = {
    slideLeft: 'onscreenSlideLeft',
    slideRight: 'onscreenSlideRight',
    slideUp: 'onscreenSlideUp',
    slideDown: 'onscreenSlideDown',
  }[animation];

  return (
    <motion.div
      initial={animationOffScreenClass}
      whileInView={animationOnScreenClass}
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div
        className={twMerge('rounded-lg bg-white-20 p-20', className)}
        variants={cardVariants}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default CardAnimation;
