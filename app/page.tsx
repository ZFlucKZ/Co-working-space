import FeatureSection from '@/features/ui/homepage/FeatureSection';
import HeroSection from '@/features/ui/homepage/HeroSection';
import MarqueeSection from '@/features/ui/homepage/MarqueeSection';
import TestimonialSection from '@/features/ui/homepage/TestimonialSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <FeatureSection />
      <TestimonialSection />
    </>
  );
}
