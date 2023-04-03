import Link from 'next/link'
import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { cn } from 'helpers'

interface props {
  work: any
  num: number
}

export const Card: React.FC<props> = ({ work, num }) => {
  const [active, setActive] = useState(false)
  const { slug, thumbnail, title } = work
  const strings = title.split('')

  const renderString = () => {
    const returnVal = strings.map((char: string, index: number) => {
      return (
        <span key={index} className={`${active && 'active effect'}`}>
          {char}
        </span>
      )
    })
    return (
      <div className={`text-yellow absolute pl-5 w-1/2 sm:bottom-7 bottom-3`}>
        <h2>{returnVal}</h2>
      </div>
    )
  }

  useEffect(() => {
    setActive(true)
    setTimeout(() => {
      AOS.init({
        offset: 150,
        duration: 1000,
      })
    }, 1000)
  }, [work])

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
            'work-card-bg w-full h-0 pb-[100%] transition-all',
            !active ? 'scale-110' : ''
          )}
          style={{
            background: `url(https:${thumbnail[0].fields.file.url}) 
							no-repeat center center / cover `,
          }}
        ></div>
        {renderString()}
      </div>
    </Link>
  )
}

export default Card
