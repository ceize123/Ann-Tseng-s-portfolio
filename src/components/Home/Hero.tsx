import Link from 'next/link';
import Image from 'next/image';
import logo from 'assets/images/logo-big.png';
import { BsThreeDotsVertical } from 'react-icons/bs';

export const Hero: React.FC = () => {
  return (
    <section
      id='hero-section'
      className='hero-section h-screen flex flex-col justify-center'
    >
      <div className='flex justify-center'>
        <Image
          src={logo}
          width='0'
          height='0'
          alt='Logo'
          className='w-[25%] h-auto'
        />
      </div>
      <div className='mt-14'>
        <div className='text-center'>
          <button className='relative after:bg-yellow'>
            <Link href='/works'>
              <h2>My WORK</h2>
            </Link>
          </button>
          <div className='absolute bottom-8 left-0 right-0 mx-auto w-5 bg-yellow rounded p-2'>
            <Link
              href='/#intro-section'
              className='flex flex-col items-center'
              scroll={false}
            >
              <BsThreeDotsVertical className='text-3xl' />
            </Link>
          </div>
        </div>
        <div className='absolute right-2 bottom-14 md:w-1/3 sm:w-1/2 w-2/3'>
          <h5 className='block'>
            Effectively bring artistically and business professional solutions
            to clients.
          </h5>
          <h5 className='block relative z-20'>
            Worked on individual projects and as well as collaborated with
            others as a team
          </h5>
        </div>
      </div>
    </section>
  );
};

export default Hero;
