import { ReactNode } from 'react';
import { RxArrowLeft, RxArrowRight } from 'react-icons/rx';
import { useSwiper } from 'swiper/react';

export interface SwiperButtonProps {
  children: ReactNode;
}

export const SwiperButtonNext = ({ children }: SwiperButtonProps) => {
  const swiper = useSwiper();
  return (
    <button
      onClick={() => swiper.slideNext()}
      className="flex h-10 w-10 items-center justify-center rounded-md bg-black-80"
    >
      <RxArrowRight size={24} className="text-white-10" />
    </button>
  );
};

export const SwiperButtonPrev = ({ children }: SwiperButtonProps) => {
  const swiper = useSwiper();
  return (
    <button
      onClick={() => swiper.slidePrev()}
      className="flex h-10 w-10 items-center justify-center rounded-md bg-black-80"
    >
      <RxArrowLeft size={24} className="text-white-10" />
    </button>
  );
};
