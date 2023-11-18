import Marquee from 'react-fast-marquee';
import Blossom from '/public/assets/logo/Blossom.png';
import DoctorPlus from '/public/assets/logo/DoctorPlus.png';
import Rise from '/public/assets/logo/Rise.png';
import Scale from '/public/assets/logo/Scale.png';
import SnowFlake from '/public/assets/logo/SnowFlake.png';
import Image from 'next/image';

const MarqueeHero = () => {
  return (
    <>
      <p className="body-2 mb-4 text-center text-black-60">
        Join 7000+ Highly Productive Teams
      </p>
      <Marquee gradient={true} pauseOnHover={true} speed={100}>
        <div className="flex gap-14">
          <Image src={Blossom} alt="Blossom" />
          <Image src={DoctorPlus} alt="Doctor Plus" />
          <Image src={Rise} alt="Rise" />
          <Image src={Scale} alt="Scale" />
          <Image src={SnowFlake} alt="SnowFlake" />
          {/* <Image src={Blossom} alt="Blossom" /> */}
        </div>
      </Marquee>
    </>
  );
};

export default MarqueeHero;
