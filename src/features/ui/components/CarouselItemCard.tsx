import { RxAvatar } from 'react-icons/rx';
import Card from './Card';
import Star from '/public/assets/icon/star.svg';
import Image from 'next/image';

interface CarouselItemCardProps {
  avatar?: string;
  name: string;
  star: number;
  content: string;
}

const CarouselItemCard = ({
  avatar = 'default',
  name,
  star,
  content,
}: CarouselItemCardProps) => {
  const arrayLength = [...Array(star).keys()];

  return (
    <Card
      size="lg"
      animation="none"
      className="shadow-[0px_4px_32px_4px_rgba(60,57,57,0.16)]"
    >
      <div className="flex w-max items-center">
        {avatar === 'default' ? <RxAvatar size={56} /> : <div>x</div>}
        <span className="me-4 ms-2">{name}</span>
        <div className="flex items-center gap-1">
          {arrayLength.map((e) => {
            return (
              <Image key={e} src={Star} alt="Star" width={16} height={16} />
            );
          })}
        </div>
      </div>
      <p className="mt-4 inline-block">{`"${content}"`}</p>
    </Card>
  );
};

export default CarouselItemCard;
