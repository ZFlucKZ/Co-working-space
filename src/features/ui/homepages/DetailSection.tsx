import Image from 'next/image';
import CardAnimation from '../components/CardAnimation';

const DetailSection = () => {
  return (
    <>
      <CardAnimation className="flex gap-16" animation="slideRight">
        <div className="basis-1/2">
          <Image
            src="/assets/images/features.png"
            alt="Co working space - Features"
            layout="responsive"
            width={460}
            height={240}
          />
        </div>
        <div className="basis-1/2">
          <p className="body-2 text-gradient inline-block">
            ALL ROUNDED WORKSPACE
          </p>
          <h2 className="sub-header-1 mb-6 mt-4 font-plus text-black-80">
            Work efficiently on an all rounded platform
          </h2>
          <p className="body-2 text-black-70">
            Communicate, collaborate and feel connected in a customizable space
            that suit you or your team preferences.
          </p>
        </div>
      </CardAnimation>
    </>
  );
};

export default DetailSection;
