import React from 'react';
import Button from '../components/ฺButton';
import Star from '/public/assets/icon/star.svg';
import Image from 'next/image';
import { motion } from 'framer-motion';

const motionContainer = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.3,
      duration: 0.8,
    },
  },
};

const itemUp = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};

const itemDown = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};

const HeroSection = () => {
  return (
    <div className="relative flex justify-between">
      <div>
        <h1 className="header-1 font-plus text-black-80">Enhance your</h1>
        <h1 className="header-1 text-gradient font-plus">Collaboration</h1>
        <h1 className="header-1 text-gradient font-plus">& Productivity</h1>
        <p className="body-1 my-6 text-black-70">
          with our workspace, where collaboration
          <br />
          meets effective innovation, empowering
          <br />
          you to accomplish goal
        </p>
        <div className="flex gap-4">
          <Button className="text-[24px]">Get started</Button>
          <div>
            <div className="mb-1 flex gap-1 p-[2px]">
              <Image priority src={Star} alt="Star" />
              <Image priority src={Star} alt="Star" />
              <Image priority src={Star} alt="Star" />
              <Image priority src={Star} alt="Star" />
              <Image priority src={Star} alt="Star" />
            </div>
            <p className="body-3 text-black-60">
              More than 5000+ five
              <br />
              stars users reviews
            </p>
          </div>
        </div>
      </div>
      <motion.div
        className="relative z-10 translate-x-4"
        variants={motionContainer}
        initial="hidden"
        animate="visible"
      >
        <Image
          priority
          src="/assets/images/home/board.png"
          alt="Working board"
          width={680}
          height={416}
          className="scale-95"
          // layout="responsive"
        />
        <motion.div className="absolute -bottom-0 left-0" variants={itemDown}>
          <Image
            priority
            src="/assets/images/home/myself.png"
            alt="Myself"
            width={209}
            height={192}

            // layout="responsive"
          />
        </motion.div>
        <motion.div className="absolute -top-3 right-0" variants={itemUp}>
          <Image
            priority
            src="/assets/images/home/team-member.png"
            alt="Team member"
            width={208}
            height={301}
            // layout="responsive"
          />
        </motion.div>
        <motion.div className="absolute -bottom-2 right-0" variants={itemDown}>
          <Image
            priority
            src="/assets/images/home/chat.png"
            alt="Chat"
            width={208}
            height={272}
            // layout="responsive"
          />
        </motion.div>
      </motion.div>
      <div className="absolute -top-[100px] right-0 h-[300px] w-[300px] rotate-6 opacity-[0.48] blur-[70px]">
        <div className="absolute left-0 top-5 h-[200px] w-[200px] bg-blue-30"></div>
        <div className="absolute right-0 top-0 h-[200px] w-[200px] bg-pink-30"></div>
        <div className="absolute bottom-0 right-5 h-[200px] w-[200px] bg-orange-30"></div>
      </div>
    </div>
  );
};

export default HeroSection;
