import Hero from 'components/Home/Hero';
import Quote from 'components/Home/Quote';
import Resume from 'components/Home/Resume';
import { useState, useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';
import bgUrl from 'assets/images/bg.png';
import { cn } from 'helpers';

export const Home: React.FC = () => {
  const [reached, setReached] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(0);
  const [ary, setAry] = useState<number[]>(
    Array(80)
      .fill(null)
      .map((_, i) => i)
  );
  const [colors, setColors] = useState<{
    randomDark: number[];
    randomLight: number[];
  }>({
    randomDark: ary.slice(0, 20),
    randomLight: ary.slice(20, 35),
  });
  const [trigger, setTrigger] = useState<boolean>(false);
  const [rate, setRate] = useState<number>(0);
  const pixelRef = useRef<HTMLDivElement | null>(null);

  useMemo(() => {
    if (trigger) {
      const l = Math.ceil(ary.length) / 5;
      const r = Math.ceil(ary.length) / 2;

      setColors({
        randomDark: ary.slice(0, l),
        randomLight: ary.slice(l, r),
      });
      ary.sort(() => 0.5 - Math.random());
    }
    return colors;
  }, [trigger]);

  useEffect(() => {
    setWidth(window.innerWidth);
    const scroll = () => {
      const aboutSecTop = pixelRef?.current?.getBoundingClientRect()['top'];
      if (aboutSecTop !== undefined && aboutSecTop < 0) {
        setReached(true);
        if (aboutSecTop % 15 === 0) {
          setTrigger(true);
        } else {
          setTrigger(false);
        }
      } else {
        setReached(false);
        setRate(window.scrollY / 1500);
      }
    };
    window.addEventListener('scroll', scroll);
    return () => window.removeEventListener('scroll', scroll);
  }, []);

  useEffect(() => {
    if (width !== 0) {
      let length = Math.ceil(width / 20) > 80 ? 80 : Math.ceil(width / 20);
      length -= length % 10;
      setAry(
        Array(length)
          .fill(null)
          .map((_, i) => i)
          .sort(() => 0.5 - Math.random())
      );
    }
  }, [width]);

  const backgroundRender = () => {
    return (
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
        <div
          className='w-screen h-screen absolute top-0 bg-black'
          style={{
            opacity: !reached ? rate : 0,
          }}
        ></div>
      </div>
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
    <>
      {backgroundRender()}
      {pixelRender()}
      <Hero />
      <div ref={pixelRef}>
        <Quote />
      </div>
      <Resume />
    </>
  );
};
export default Home;
