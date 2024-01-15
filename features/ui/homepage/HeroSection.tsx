import ButtonLink from '@/features/ui/components/Button';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div>
      <div className="relative isolate">
        <div className="mx-auto max-w-[1440px] px-6 py-[120px] lg:flex lg:items-center lg:gap-x-10 lg:px-8">
          <div className="mx-auto max-w-[450px] lg:mx-0 lg:flex-auto">
            <div className="max-w-[420px]">
              <h1 className="text-header-1 text-black-80">Enhance your</h1>
              <h1 className="text-header-1 bg-gradient-to-r from-blue-50 via-pink-50 to-orange-50 bg-clip-text text-black-80 text-transparent">
                Collaboration & Productivity
              </h1>
            </div>
            <p className="text-body-1 mb-8 mt-4 text-black-70">
              with our workspace, where collaboration meets effective
              innovation, empowering you to accomplish goal
            </p>
            <div className="flex items-center gap-x-5">
              <ButtonLink size="lg" href="/sign-up" className="shadow-heavy">
                Get Started
              </ButtonLink>
              <div className="max-w-[120px]">
                <div className="mb-1 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Image
                      key={i}
                      src="/assets/icon/star.png"
                      alt="Star"
                      width={16}
                      height={16}
                    />
                  ))}
                </div>
                <div className="text-body-3 text-black-60">
                  More than 5000+ five stars users reviews
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 sm:mt-12 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <div className="relative mx-auto w-[650px]">
              <Image
                src="/assets/images/space-example.png"
                alt="Co working example"
                className="aspect-[605/403]"
                priority
                layout="responsive"
                width={605}
                height={403}
              />
              <div className="absolute bottom-0 left-0 w-[146px]">
                <Image
                  src="/assets/images/user.png"
                  alt="Co working example"
                  className="aspect-[146/135]"
                  priority
                  layout="responsive"
                  width={146}
                  height={135}
                />
              </div>
              <div className="absolute right-0 top-0 w-[183px]">
                <Image
                  src="/assets/images/collaborate.png"
                  alt="Co working example"
                  className="aspect-[183/216]"
                  priority
                  layout="responsive"
                  width={183}
                  height={216}
                />
              </div>
              <div className="absolute bottom-2 right-0 w-[183px]">
                <Image
                  src="/assets/images/chat.png"
                  alt="Co working example"
                  className="aspect-[183/194]"
                  priority
                  layout="responsive"
                  width={183}
                  height={194}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
