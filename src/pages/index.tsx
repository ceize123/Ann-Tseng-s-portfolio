import Hero from 'components/Home/Hero';
import Quote from 'components/Home/Quote';
import Resume from 'components/Home/Resume';
import { useState, useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';
import bgUrl from 'assets/images/bg.png';
import { cn } from 'helpers';

export const Home: React.FC = () => {
  const [reached, setReached] = useState<boolean>(false);
  const [size, setSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });
  const [ary, setAry] = useState<number[]>(
    Array(80)
      .fill(null)
      .map((_, i) => i)
  );
  const [colors, setColors] = useState<{
    randomDark: number[];
    randomLight: number[];
  }>({
    randomDark: ary.slice(0, 15),
    randomLight: ary.slice(15, 25),
  });
  const [trigger, setTrigger] = useState<boolean>(false);
  const [rate, setRate] = useState<number>(0);
  const pixelRef = useRef<HTMLDivElement | null>(null);

  useMemo(() => {
    if (trigger) {
      const l = Math.ceil(ary.length) / 6;
      const r = Math.ceil(ary.length) / 3;

      setColors({
        randomDark: ary.slice(0, l),
        randomLight: ary.slice(l, r),
      });
      ary.sort(() => 0.5 - Math.random());
    }
    return colors;
  }, [trigger]);

  useEffect(() => {
    setSize({ width: window.innerWidth, height: window.innerHeight });
    const scroll = () => {
      const offset = window.pageYOffset;
      setRate(offset / 1500);

      if (offset !== 0) {
        setReached(true);
        if (offset % 15 === 0) {
          setTrigger(true);
        } else {
          setTrigger(false);
        }
      } else {
        setReached(false);
      }
    };
    window.addEventListener('scroll', scroll);
    return () => window.removeEventListener('scroll', scroll);
  }, []);

  useEffect(() => {
    if (size.width !== 0) {
      let length =
        Math.ceil(size.width / 20) > 80 ? 80 : Math.ceil(size.width / 20);
      length -= length % 10;
      setAry(
        Array(length)
          .fill(null)
          .map((_, i) => i)
          .sort(() => 0.5 - Math.random())
      );
    }
  }, [size]);

  const backgroundRender = () => {
    return (
      // <div className='fixed top-0 left-0 flex justify-center'>
      <Image
        src={bgUrl}
        width='0'
        height='0'
        sizes='100%'
        alt='background'
        className='min-w-[150vh] min-h-screen fixed top-0 left-0'
        style={{
          transform: `scale(${rate + 1})`,
          opacity: rate < 0.5 ? 1 - rate : 0.5,
        }}
      />
      // </div>
    );
  };

  const pixelRender = () => {
    return (
      <div
        className={cn(
          'pixel w-full h-screen fixed top-0 left-0 grid lg:grid-cols-10 md:grid-cols-8 grid-cols-5 transition-opacity duration-600',
          !reached ? 'opacity-0' : 'opacity-100'
        )}
      >
        {ary.map((i) => {
          return (
            <div
              key={i}
              className={cn(
                'transition-all duration-500 backdrop-blur-md',
                !reached ? 'opacity-0' : 'opacity-100',
                colors.randomDark.includes(i) ? 'bg-light-gray' : '',
                colors.randomLight.includes(i) ? 'bg-gray' : ''
              )}
            ></div>
          );
        })}
      </div>
    );
  };

  return (
    <main ref={pixelRef}>
      {backgroundRender()}
      {pixelRender()}
      <Hero />
      <Quote />
      <Resume />
    </main>
  );
};
export default Home;
