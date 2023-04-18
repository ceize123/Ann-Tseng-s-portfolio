import Hero from 'components/Home/Hero';
import Quote from 'components/Home/Quote';
import Resume from 'components/Home/Resume';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import bgUrl from 'assets/images/bg.png';
import { cn } from 'helpers';

const ary = Array(100)
  .fill(null)
  .map((_, i) => i);
const colors = { randomDark: ary.slice(0, 20), randomLight: ary.slice(20, 35) };
ary.sort(() => 0.5 - Math.random());

export const Home: React.FC = () => {
  const [reached, setReached] = useState<boolean>(false);
  const [triggerAry, setTriggerAry] = useState<{
    start: number;
    end: number;
  }>({ start: 0, end: 100 });
  const [rate, setRate] = useState<number>(0);
  const pixelRef = useRef<HTMLDivElement | null>(null);

  // const generatePixels = useMemo(() => {
  //   const randomDark = ary.sort(() => 0.5 - Math.random()).slice(0, 20);
  //   const randomLight = ary.sort(() => 0.5 - Math.random()).slice(0, 10);
  //   return { ary, randomDark, randomLight };
  // }, [trigger]);

  useEffect(() => {
    const scroll = () => {
      const aboutSecTop = pixelRef?.current?.getBoundingClientRect()['top'];
      if (aboutSecTop !== undefined && aboutSecTop < 0) {
        setReached(true);
        if (aboutSecTop % 8 === 0) {
          const start = Math.floor(Math.random() * 20);
          const end = Math.floor(Math.random() * 59) + 40;
          setTriggerAry({ start: start, end: end });
        }
      } else {
        setReached(false);
        setRate(window.scrollY / 1500);
      }
    };
    window.addEventListener('scroll', scroll);
    return () => window.removeEventListener('scroll', scroll);
  }, []);

  return (
    <>
      <div className='w-screen fixed top-0 left-0'>
        <Image
          src={bgUrl}
          width='0'
          height='0'
          sizes='100vw'
          alt='background'
          className='w-full h-auto'
          style={{
            transform: `scale(${rate + 1})`,
            opacity: 1 - rate,
          }}
        />
      </div>
      <div
        className={cn(
          'pixel w-full h-screen fixed top-0 left-0 flex flex-wrap transition-opacity duration-200',
          !reached ? 'opacity-0' : 'opacity-100'
        )}
      >
        {ary.map((i) => {
          return (
            <div
              key={i}
              className={cn(
                'w-[10%] transition-all duration-500 backdrop-blur-md',
                !reached || triggerAry.start > i || triggerAry.end < i
                  ? 'opacity-0'
                  : 'opacity-100'
              )}
              style={{
                backgroundColor: `${
                  colors.randomDark.includes(i)
                    ? 'rgba(0, 0, 0, 0.5)'
                    : colors.randomLight.includes(i)
                    ? 'rgba(85, 85, 85, 0.5)'
                    : 'rgba(34, 34, 34, 0.5)'
                }`,
              }}
            ></div>
          );
        })}
      </div>
      <Hero />
      <div ref={pixelRef}>
        <Quote />
      </div>
      <Resume />
    </>
  );
};
export default Home;
