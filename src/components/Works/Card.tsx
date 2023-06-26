import Link from 'next/link';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { cn } from 'helpers';

interface props {
  work: any;
  num: number;
}

export const Card: React.FC<props> = ({ work, num }) => {
  const [active, setActive] = useState(false);
  const { slug, thumbnail, title } = work;
  const strings = title.split('');

  const renderString = () => {
    const returnVal = strings.map((char: string, index: number) => {
      return (
        <span
          key={index}
          className={`${
            active && 'active effect'
          } xl:text-5xl lg:text-4xl sm:text-3xl text-5xl`}
        >
          {char}
        </span>
      );
    });
    return (
      <div
        className={`text-yellow absolute pl-5 lg:bottom-7 sm:bottom-3 bottom-7`}
      >
        <h2>{returnVal}</h2>
      </div>
    );
  };

  useEffect(() => {
    setActive(true);
    setTimeout(() => {
      AOS.init({
        offset: 150,
        duration: 1000,
      });
    }, 1000);
  }, [work]);

  return (
    <Link href={`/works/${slug}`}>
      <div
        className='work-card relative cursor-pointer overflow-hidden bg-light-gray h-0 pb-[100%]'
        onMouseEnter={() => setActive(false)}
        onMouseLeave={() => setActive(true)}
        data-aos='fade-up'
        data-aos-delay={50 * num}
      >
        <div
          className={cn(
            'work-card-bg w-full h-0 pb-[100%] ease-in duration-500 grayscale',
            !active ? 'scale-110 grayscale-0' : ''
          )}
          style={{
            background: `url(https:${thumbnail.fields.file.url}) 
							no-repeat center center / cover `,
          }}
        ></div>
        <h3>{renderString()}</h3>
      </div>
    </Link>
  );
};

export default Card;
