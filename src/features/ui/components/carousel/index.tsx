'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import CarouselItemCard from '../CarouselItemCard';
import { SwiperButtonNext, SwiperButtonPrev } from './SwiperButtonNext';

interface CarouselProps {
  itemWidth?: number | 'auto';
}

const data = [
  {
    name: 'Jane Ruthford',
    star: 5,
    content:
      "The platform provides a variety of tools to help me get work done, and collaborate with others. The space is also easy to use.  I'm very impressed with the quality of this platform.",
  },
  {
    name: 'Tommy Brone',
    star: 5,
    content:
      "The platform provides a variety of tools to help me get work done, and collaborate with others. The space is also easy to use.  I'm very impressed with the quality of this platform.",
  },
  {
    name: 'Simone Liu',
    star: 5,
    content:
      "The platform provides a variety of tools to help me get work done, and collaborate with others. The space is also easy to use.  I'm very impressed with the quality of this platform.",
  },
  {
    name: 'Warren Dough',
    star: 4,
    content:
      "The platform provides a variety of tools to help me get work done, and collaborate with others. The space is also easy to use.  I'm very impressed with the quality of this platform.",
  },
];

const CarouselComponents = ({ itemWidth = 'auto' }: CarouselProps) => {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={40}
        rewind={true}
        pagination={{
          clickable: true,
          bulletActiveClass: 'swiper-custom-bullet-active',
          bulletClass: 'swiper-custom-bullet',
        }}
        modules={[Pagination]}
        style={{
          overflow: 'visible',
          position: 'static',
        }}
      >
        {data.map(({ name, star, content }) => {
          return (
            <SwiperSlide
              style={{
                width: itemWidth,
              }}
            >
              <CarouselItemCard name={name} star={star} content={content} />
            </SwiperSlide>
          );
        })}
        <div className="absolute right-40 top-0 flex gap-2">
          <SwiperButtonPrev>Prev</SwiperButtonPrev>
          <SwiperButtonNext>Next</SwiperButtonNext>
        </div>
      </Swiper>
    </>
  );
};

export default CarouselComponents;
