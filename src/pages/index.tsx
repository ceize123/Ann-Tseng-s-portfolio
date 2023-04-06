import Hero from 'components/Home/Hero';
import Quote from 'components/Home/Quote';
import Resume from 'components/Home/Resume';
import { useState, useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';
import bgUrl from 'assets/images/bg.png';
import { cn } from 'helpers';

export const Home: React.FC = () => {
  const [reached, setReached] = useState<boolean>(false);
  const [trigger, setTrigger] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);
  const pixelRef = useRef<HTMLDivElement | null>(null);

  // const [randomDark, setRandomDark] = useState<number[]>(ary);
  // const [randomLight, setRandomLight] = useState<number[]>(ary);
  const generateAry = useMemo(() => {
    const ary = Array(100)
      .fill(null)
      .map((_, i) => i);
    const randomDark = ary.sort(() => 0.5 - Math.random()).slice(0, 20);
    const randomLight = ary.sort(() => 0.5 - Math.random()).slice(0, 10);
    return { ary, randomDark, randomLight };
  }, [trigger]);

  useEffect(() => {
    const scroll = () => {
      setRate(window.scrollY / 1500);
      const aboutSecTop = pixelRef?.current?.getBoundingClientRect()['top'];
      if (aboutSecTop !== undefined && aboutSecTop < 0) {
        setReached(true);
        if (aboutSecTop % 15 === 0) {
          setTrigger(aboutSecTop);
        }
      } else setReached(false);
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
            opacity: rate < 0.5 ? 1 - rate : 0.5,
          }}
        />
      </div>
      <div
        className={cn(
          'pixel w-full h-screen fixed top-0 left-0 flex flex-wrap transition-opacity duration-200',
          !reached ? 'opacity-0' : 'opacity-100'
        )}
      >
        {generateAry.ary.map((i) => {
          return (
            <div
              key={i}
              className={cn(
                'w-[10%] transition-all duration-500 backdrop-blur-md',
                !reached ? 'opacity-0' : 'opacity-100'
              )}
              style={{
                backgroundColor: `${
                  generateAry.randomDark.includes(i)
                    ? 'rgba(0, 0, 0, 0.5)'
                    : generateAry.randomLight.includes(i)
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
