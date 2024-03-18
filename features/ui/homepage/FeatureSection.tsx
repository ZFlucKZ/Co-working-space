import Container from '@/features/ui/components/Container';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';

const FeatureSection = () => {
  return (
    <Container className="py-28">
      <div className="flex flex-col gap-28">
        <div className="flex gap-16 rounded-[8px] bg-white-20 p-20">
          <div className="flex aspect-[460/240] w-full min-w-[300px] max-w-[460px]">
            <Image
              src="/assets/images/feature/features.png"
              alt="Collaboration Example"
              width={460}
              height={240}
              layout="responsive"
              // fill
              className="self-center"
            />
          </div>
          <div className="h-min self-center">
            <span className="mb-4 bg-gradient-to-r from-blue-50 via-pink-50 to-orange-50 bg-clip-text text-body-2 text-black-80 text-transparent">
              ALL ROUNDED WORKSPACE
            </span>
            <h2 className="mb-5 text-sub-header-1 text-black-80">
              Work efficiently on an all rounded platform
            </h2>
            <p className="text-body-2 text-black-70">
              Communicate, collaborate and feel connected in a customizable
              space that suit you or your team preferences.
            </p>
          </div>
        </div>
        <div className="flex gap-10 rounded-[8px] bg-white-20 p-20">
          <div className="h-min self-center">
            <span className="mb-4 bg-gradient-to-r from-blue-50 via-pink-50 to-orange-50 bg-clip-text text-body-2 text-black-80 text-transparent">
              PRODUCTIVE TOOLS
            </span>
            <h2 className="mb-5 text-sub-header-1 text-black-80">
              Everything you need to complete your tasks
            </h2>
            <p className="mb-7 text-body-2 text-black-70">
              Utilize implemented tools, enhancing your and your team
              efficiency, to accomplish your tasks.
            </p>
            <Link href="#">
              <button className="flex items-center gap-2 rounded-full bg-grey-30 px-4 py-3 text-button-2 text-black-80">
                <span>See how it works</span>
                <ArrowRightIcon className="h-5 w-5 text-black-70" />
              </button>
            </Link>
          </div>
          <div className="flex aspect-[518/180] w-full min-w-[360px] max-w-[518px]">
            <Image
              src="/assets/images/feature/tools.png"
              alt="Collaboration Example"
              width={518}
              height={180}
              layout="responsive"
              // fill
              className="self-center"
            />
          </div>
        </div>
        <div className="rounded-[8px] bg-white-20 p-20">
          <span className="mb-4 bg-gradient-to-r from-blue-50 via-pink-50 to-orange-50 bg-clip-text text-body-2 text-black-80 text-transparent">
            EVIDENT BENEFITS
          </span>
          <h2 className="mb-5 text-sub-header-1 text-black-80">
            Noticeable performance enhancement
          </h2>
          <p className="mb-9 text-body-2 text-black-70">
            According to survey, More than
            <span className="text-pink-60"> 60% </span>
            of teams who use Co. experience enhancement in collaboration,
            efficiency and productivity.
          </p>
          <div className="flex justify-between gap-16">
            <div className="flex flex-col justify-between gap-10 rounded-[8px] border border-grey-30 bg-white-10 px-6 pb-5">
              <h3 className="mt-9 text-button-1 text-black-80">
                Collaboration
              </h3>
              <Image
                src="/assets/images/feature/collaborate.png"
                alt="Collaboration"
                width={150}
                height={180}
                layout="responsive"
              />
            </div>
            <div className="flex flex-col justify-between gap-10 rounded-[8px] border border-grey-30 bg-white-10 px-6 pb-5">
              <h3 className="mt-9 text-button-1 text-black-80">Efficiency</h3>
              <Image
                src="/assets/images/feature/efficiency.png"
                alt="Collaboration"
                width={150}
                height={180}
                layout="responsive"
              />
            </div>
            <div className="flex flex-col justify-between gap-10 rounded-[8px] border border-grey-30 bg-white-10 px-6 pb-5">
              <h3 className="mt-9 text-button-1 text-black-80">Productivity</h3>
              <Image
                src="/assets/images/feature/productivity.png"
                alt="Collaboration"
                width={150}
                height={180}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FeatureSection;
