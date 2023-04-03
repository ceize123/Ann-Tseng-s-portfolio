import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import bgUrl from 'assets/images/bg.png'

export const BgPixel: React.FC = () => {
  const [reached, setReached] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement | null>(null)

  const ary = Array(100)
    .fill(null)
    .map((_, i) => i)
  const [randomDark, setRandomDark] = useState(ary)
  const [randomLight, setRandomLight] = useState(ary)

  useEffect(() => {
    const scroll = () => {
      const aboutSecTop = ref?.current?.getBoundingClientRect()['top']
      if (aboutSecTop !== undefined && aboutSecTop < 0) {
        setReached(true)
        if (aboutSecTop % 10 === 0) {
          setRandomDark(ary.sort(() => 0.5 - Math.random()).slice(0, 20))
          setRandomLight(ary.sort(() => 0.5 - Math.random()).slice(0, 10))
        }
      } else setReached(false)
    }
    window.addEventListener('scroll', scroll)
    return () => {
      window.removeEventListener('scroll', scroll)
    }
  }, [ary])
  return (
    <>
      <div
        className={`pixel w-full h-screen fixed top-0 left-0 flex flex-wrap z-10 ${
          !reached && 'hidden'
        }`}
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
          )
        })}
      </div>

      <div ref={ref} className='ref-div'></div>
    </>
  )
}

export const HeroImage: React.FC = () => {
  const [scaleRate, setScaleRate] = useState<number>(1)
  useEffect(() => {
    const scroll = () => setScaleRate(window.scrollY / 1500 + 1)
    window.addEventListener('scroll', scroll)
    return () => {
      window.removeEventListener('scroll', scroll)
    }
  }, [])
  return (
    <div className='w-full fixed'>
      <Image
        src={bgUrl}
        width='0'
        height='0'
        sizes='100vw'
        alt='background'
        className='w-full h-auto'
        style={{
          transform: `scale(${scaleRate})`,
        }}
      />
    </div>
  )
}
