import Card from '../components/Card';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '../components/ฺButton';

interface InputProps {
  email: string;
}

const inputValidators = z.object({
  email: z.string().email(),
});

const SubscribeSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputProps>({
    resolver: zodResolver(inputValidators),
  });

  const onSubmit = (e: InputProps) => {
    {
      console.log(e);
    }
  };

  return (
    <>
      <Card
        size="xl"
        animation="none"
        className="relative z-10 shadow-[0px_4px_32px_4px_rgba(60,57,57,0.16)]"
      >
        <h1 className="sub-header-2 font-plus text-black-80">
          Subscribe to our news letters
        </h1>
        <p className="body-2 mt-1 text-black-60">
          Get the latest promotion, news, update and more !
        </p>
        <div className="mt-6">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex items-center gap-5"
          >
            <div className="relative basis-1/3">
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
                <svg
                  className="h-4 w-4 text-black-80"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="text"
                className="block w-full rounded-[4px] border border-grey-50 bg-white-20  px-6 py-4 ps-10 text-[16px] leading-none text-black-80  focus:border-black-60 focus:ring-grey-50"
                placeholder="Enter your E-mail"
                {...register('email')}
              />
            </div>
            <Button hover="none" className="h-min rounded-[4px] leading-[1.44]">
              Subscribe
            </Button>
          </form>
          {errors?.email && (
            <span className="text-red-500">{errors.email?.message}</span>
          )}
        </div>
      </Card>

      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rotate-6 opacity-[0.48] blur-[70px] ">
        <div className="absolute left-0 top-5 h-[200px] w-[200px] bg-blue-30"></div>
        <div className="absolute right-0 top-0 h-[200px] w-[200px] bg-pink-30"></div>
        <div className="absolute bottom-0 right-5 h-[200px] w-[200px] bg-orange-30"></div>
      </div>
    </>
  );
};

export default SubscribeSection;
