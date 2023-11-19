import Image from 'next/image';
import CardAnimation from '../components/CardAnimation';
import Card from '../components/Card';
import Button from '../components/ฺButton';
import ArrowRight from '/public/assets/icon/arrowRight.svg';

const DetailSection = () => {
  return (
    <>
      <CardAnimation className="mb-28 flex gap-10" animation="slideRight">
        <div className="basis-1/2">
          <Image
            src="/assets/images/features/calendar.png"
            alt="Co working space - Calendar"
            layout="responsive"
            width={531.61}
            height={280}
          />
        </div>
        <div className="basis-1/2">
          <p className="body-2 text-gradient inline-block">
            EFFECTIVE COMMUNICATION
          </p>
          <h2 className="sub-header-1 mb-6 mt-4 font-plus text-black-80">
            Hold your effective
            <br />
            communication
          </h2>
          <h6 className="body-1 text-black-80">Various Channels</h6>
          <p className="body-2 mb-4 text-black-70">
            Preferably communicate among team via text or voice call.
          </p>
          <h6 className="body-1 text-black-80">Convenient tools</h6>
          <p className="body-2 text-black-70">
            Collectively inform all members via note and calendar.
          </p>
        </div>
      </CardAnimation>

      <CardAnimation
        className="mb-28 flex flex-col gap-10"
        animation="slideLeft"
      >
        <div>
          <p className="body-2 text-gradient inline-block">
            COLLABORATIVE TOOLS
          </p>
          <h2 className="sub-header-1 mt-3 font-plus text-black-80">
            Collaborate effortlessly with implemented tools
          </h2>
        </div>
        <div className="flex gap-10">
          <div className="basis-[60%]">
            <Image
              src="/assets/images/features/board.png"
              alt="Co working space - Board"
              layout="responsive"
              width={588.28}
              height={248}
            />
          </div>
          <div className="basis-[32%]">
            <h6 className="body-1 text-black-80">Team Board</h6>
            <p className="body-2 mb-4 text-black-70">
              Brainstorm and demonstrate your idea on team board spontaneously
              with your team.
            </p>
            <h6 className="body-1 text-black-80">Team Archive</h6>
            <p className="body-2 text-black-70">
              Space archive allow you to conveniently search and download every
              materials that have ever been sent to your space.
            </p>
          </div>
        </div>
      </CardAnimation>

      <CardAnimation className="mb-28 flex gap-10" animation="slideUp">
        <div className="basis-1/2">
          <p className="body-2 text-gradient inline-block">
            CUSTOMIZABLE WORKSPACE
          </p>
          <h2 className="sub-header-1 mb-6 mt-4 font-plus text-black-80">
            Customize your ideal
            <br />
            workspace
          </h2>
          <h6 className="body-1 text-black-80">Space Scene</h6>
          <p className="body-2 mb-4 text-black-70">
            Customize your ideal space scene to enrich your mood and work
            atmosphere.
          </p>
          <h6 className="body-1 text-black-80">Space Music</h6>
          <p className="body-2 text-black-70">
            Embed your playlist from Spotify or Apple music to create enjoyable
            space with your team.
          </p>
        </div>
        <div className="basis-1/2">
          <Image
            src="/assets/images/features/scene.png"
            alt="Co working space - Scene"
            layout="responsive"
            width={531.61}
            height={280}
          />
        </div>
      </CardAnimation>
    </>
  );
};

export default DetailSection;
