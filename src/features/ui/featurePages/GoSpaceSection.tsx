import CarouselComponents from '../components/carousel';
import Button from '../components/ฺButton';

const GoSpaceSection = () => {
  return (
    <div className="bg-gradient-2 relative flex items-center justify-center gap-[60px] px-32 py-20">
      <div>
        <h1 className="sub-header-1 mb-1">
          Join a space to elevate your performance
        </h1>
        <p className="body-2 text-black-80">
          Create or join workspace for free, no credit card required.
        </p>
      </div>

      <Button size="lg" className="text-[24px] leading-none">
        Go to space
      </Button>
    </div>
  );
};

export default GoSpaceSection;
