import Hero from 'components/Home/Hero';
import Quote from 'components/Home/Quote';
import Resume from 'components/Home/Resume';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import bgUrl from 'assets/images/bg.png';
import { cn } from 'helpers';

export const Home: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [marginRate, setMarginRate] = useState<string>(0);
  const [reached, setReached] = useState<boolean>(false);
  const [rate, setRate] = useState<number>(0);
  const pixelRef = useRef<HTMLDivElement | null>(null);

  const ary = Array(100)
    .fill(null)
    .map((_, i) => i);
  const [randomDark, setRandomDark] = useState<number[]>(ary);
  const [randomLight, setRandomLight] = useState<number[]>(ary);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (scrolled) setScrolled(false);
    }, 1500);

    const wheel = (e: any) => {
      console.log(page, scrolled);
      const delta = e.deltaY;
      if (!scrolled) {
        console.log(delta);
        if (delta > 0 && page < 4) setPage((prev) => prev + 1);
        else if (delta < 0 && page > 1) setPage((prev) => prev - 1);
        setScrolled(true);
      }
    };
    window.addEventListener('mousewheel', wheel);
    return () => {
      window.removeEventListener('mousewheel', wheel);
      clearTimeout(timer);
    };
    // const scroll = () => {
    //   setRate(window.scrollY / 1500);
    //   const aboutSecTop = ref?.current?.getBoundingClientRect()['top'];
    //   if (aboutSecTop !== undefined && aboutSecTop < 0) {
    //     setReached(true);
    //     if (aboutSecTop % 10 === 0) {
    //       setRandomDark(ary.sort(() => 0.5 - Math.random()).slice(0, 20));
    //       setRandomLight(ary.sort(() => 0.5 - Math.random()).slice(0, 10));
    //     }
    //   } else setReached(false);
    // };
    // window.addEventListener('scroll', scroll);
    // return () => window.removeEventListener('scroll', scroll);
  }, [scrolled, page]);

  useEffect(() => {
    console.log(page);
    if (page === 1) {
      setRate(0);
      setReached(false);
      setMarginRate('mt-0');
    } else if (page === 2) {
      setRate(0.7);
      setReached(false);
      setMarginRate('mt-0');
    } else if (page === 3) {
      setReached(true);
      setRandomDark(ary.sort(() => 0.5 - Math.random()).slice(0, 20));
      setRandomLight(ary.sort(() => 0.5 - Math.random()).slice(0, 10));
      setMarginRate('-mt-[100vh]');
    } else if (page === 4) {
      setMarginRate('-mt-[200vh]');
    }
  }, [page]);

  return (
    <div className={`transition-all duration-700 ${marginRate}`}>
      <div className='w-screen fixed top-0 left-0'>
        <Image
          src={bgUrl}
          width='0'
          height='0'
          sizes='100vw'
          alt='background'
          className='w-full h-auto transition-all duration-700'
          style={{
            transform: `scale(${rate + 1})`,
            opacity: 1 - rate,
          }}
        />
      </div>
      <div
        className={cn(
          'pixel w-full h-screen fixed top-0 left-0 flex flex-wrap z-10 transition-opacity',
          `${!reached ? 'opacity-0' : 'opacity-100'}`
        )}
      >
        {ary.map((i) => {
          return (
            <div
              key={i}
              className='w-[10%] transition backdrop-blur-md'
              style={{
                backgroundColor: `${
                  randomDark.includes(i)
                    ? 'rgba(0, 0, 0, 0.5)'
                    : randomLight.includes(i)
                    ? 'rgba(85, 85, 85, 0.5)'
                    : 'rgba(34, 34, 34, 0.5)'
                }`,
              }}
            ></div>
          );
        })}
      </div>
      <Hero />
      <main ref={pixelRef}>
        <Quote />
        <Resume />
      </main>
    </div>
  );
};
export default Home;
