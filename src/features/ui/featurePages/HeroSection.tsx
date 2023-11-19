import React from 'react';
import Button from '../components/ฺButton';

const HeroSection = () => {
  return (
    <div className="relative flex justify-center">
      <div className="flex flex-col items-center">
        <h1 className="header-1 font-plus text-black-80">
          Features specialized for
        </h1>
        <h1 className="header-1 text-gradient w-max font-plus">
          performance enhancement
        </h1>
        <p className="body-1 my-6 text-black-70">
          Implemented features immensely empower your process of work and
          efficiency.
        </p>
        <div>
          <Button className="text-[24px]">Explore in space</Button>
        </div>
      </div>
      <div className="absolute -top-[100px] right-0 h-[300px] w-[300px] rotate-6 opacity-[0.48] blur-[70px]">
        <div className="absolute left-0 top-5 h-[200px] w-[200px] bg-blue-30"></div>
        <div className="absolute right-0 top-0 h-[200px] w-[200px] bg-pink-30"></div>
        <div className="absolute bottom-0 right-5 h-[200px] w-[200px] bg-orange-30"></div>
      </div>
    </div>
  );
};

export default HeroSection;
