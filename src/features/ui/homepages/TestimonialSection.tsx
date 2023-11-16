import CarouselComponents from '../components/carousel';
import Button from '../components/ฺButton';

const TestimonialSection = () => {
  return (
    <div className="relative flex flex-col items-center">
      <h1 className="sub-header-1 mb-10">What people say about Co.</h1>
      <div className="w-11/12">
        <CarouselComponents itemWidth={562} />
      </div>

      <Button size="lg" className="mt-[60px] text-[24px] leading-none">
        Get your space now
      </Button>
    </div>
  );
};

export default TestimonialSection;
