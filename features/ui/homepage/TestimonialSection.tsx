import Marquee from 'react-fast-marquee';
import Image from 'next/image';

import Blossom from '/public/assets/logo/Blossom.png';
import DoctorPlus from '/public/assets/logo/DoctorPlus.png';
import Rise from '/public/assets/logo/Rise.png';
import Scale from '/public/assets/logo/Scale.png';
import SnowFlake from '/public/assets/logo/SnowFlake.png';

const TestimonialSection = () => {
  return (
    <div className="relative overflow-hidden py-[56px]">
      <div className="absolute left-0 top-0 -z-10 h-2/5 w-3/5 bg-blue-50 opacity-20 blur-[60px]"></div>
      <div className="absolute bottom-0 left-1/4 -z-10 h-2/5 w-3/5 bg-pink-50 opacity-20 blur-[60px]"></div>
      <div className="absolute right-0 top-0 -z-10 h-full w-1/5 bg-orange-50 opacity-20 blur-[60px]"></div>
      <h1 className="mb-9 text-center text-sub-header-1 text-black-80">
        What people say about Co.
      </h1>
      <Marquee pauseOnHover={true} speed={20}>
        <div className="me-14 flex gap-14">
          <div className="bg-white-10 px-10 py-8 shadow-medium">
            <Image
              src="https://img.freepik.com/free-photo/3d-illustration-cute-cartoon-boy-with-backpack-his-back_1142-40542.jpg?t=st=1707644999~exp=1707648599~hmac=f0c172a3cadbeae41780e6a109b0396c808b45793264f0b6ad93adc346d68b93&w=1060"
              alt="Avatar-1"
              width={56}
              height={56}
              className="rounded-full"
            />
          </div>
          <Image src={Blossom} alt="Blossom" />
          <Image src={DoctorPlus} alt="Doctor Plus" />
          <Image src={Rise} alt="Rise" />
          <Image src={Scale} alt="Scale" />
          <Image src={SnowFlake} alt="SnowFlake" />
        </div>
      </Marquee>

      <Marquee pauseOnHover={true} speed={20} direction="right">
        <div className="me-14 flex gap-14">
          <Image src={Blossom} alt="Blossom" />
          <Image src={DoctorPlus} alt="Doctor Plus" />
          <Image src={Rise} alt="Rise" />
          <Image src={Scale} alt="Scale" />
          <Image src={SnowFlake} alt="SnowFlake" />
        </div>
      </Marquee>
    </div>
  );
};

export default TestimonialSection;
