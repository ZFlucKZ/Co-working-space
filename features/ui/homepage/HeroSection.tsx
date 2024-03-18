import ButtonLink from '@/features/ui/components/Button';
import Container from '@/features/ui/components/Container';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <>
      <div className="relative isolate">
        <Container className="relative py-[120px] lg:flex lg:items-center lg:gap-x-10">
          <div className="absolute right-0 top-10 -z-10 rotate-[5deg]">
            <div className="relative h-[300px] w-[300px]">
              <div className="absolute right-0 top-0 h-[200px] w-[200px] bg-pink-50 blur-[120px]"></div>
              <div className="absolute left-0 top-6 h-[200px] w-[200px] bg-blue-50 blur-[120px]"></div>
              <div className="absolute bottom-0 right-6 h-[200px] w-[200px] bg-orange-50 blur-[120px]"></div>
            </div>
          </div>
          <div className="mx-auto max-w-[450px] lg:mx-0 lg:flex-auto">
            <div className="max-w-[420px]">
              <h1 className="text-header-1 text-black-80">Enhance your</h1>
              <h1 className="bg-gradient-to-r from-blue-50 via-pink-50 to-orange-50 bg-clip-text text-header-1 text-black-80 text-transparent">
                Collaboration & Productivity
              </h1>
            </div>
            <p className="mb-8 mt-4 text-body-1 text-black-70">
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
            <div className="relative ms-auto w-full max-w-[750px] lg:ms-auto lg:min-w-[600px]">
              <Image
                src="/assets/images/space-example.png"
                alt="Co working example"
                className="aspect-[605/403]"
                priority
                layout="responsive"
                width={605}
                height={403}
              />
              <div className="absolute bottom-0 left-0 hidden w-[146px] lg:block">
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
              <div className="absolute right-0 top-0 hidden w-[183px] lg:block">
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
              <div className="absolute bottom-0 right-0 hidden w-[183px] lg:block">
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
        </Container>
      </div>
    </>
  );
}
