import Link from 'next/link';

export const Hero: React.FC = () => {
  return (
    <section
      id='hero-section'
      className='hero-section h-screen flex flex-col justify-center -mt-14'
    >
      <div>
        <h1 className='inline sm:ml-20 ml-4 tracking-wider'>
          INTERIOR.FURNITURE
        </h1>
      </div>
      <div className='mt-14'>
        <div className='text-center'>
          <button className='relative after:bg-yellow'>
            <Link href='/works'>My WORK</Link>
          </button>
          <div className='absolute bottom-8 left-0 right-0 mx-auto w-4 bg-yellow'>
            <Link
              href='/#intro-section'
              className='flex flex-col items-center'
              scroll={false}
            >
              <span>•</span>
              <span>•</span>
              <span>•</span>
            </Link>
          </div>
        </div>
        <div className='absolute right-2 bottom-14 md:w-1/3 sm:w-1/2 w-2/3'>
          <span className='block'>
            Effectively bring artistically and business professional solutions
            to clients.
          </span>
          <span className='block relative z-20'>
            Worked on individual projects and as well as collaborated with
            others as a team
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
