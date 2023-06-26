import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { IoLogoLinkedin } from 'react-icons/io';
import { AiOutlineInstagram } from 'react-icons/ai';
import logo from 'assets/images/logo-big.png';
import Image from 'next/image';
import { cn } from 'helpers';

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(true);
  const router = useRouter();
  const isHomePage = (): boolean => {
    return router.route === '/';
  };

  let oldScrollY = 0;

  const handleNavigationDir = () => {
    if (window.scrollY > oldScrollY) {
      setOpen(false);
    } else {
      setOpen(true);
    }
    oldScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleNavigationDir);
    return () => {
      window.removeEventListener('scroll', handleNavigationDir);
    };
  }, []);
  return (
    <header
      className={cn(
        'fixed z-30 text-white flex justify-center h-20 w-screen transition-all bg-[#414042] opacity-80',
        open ? '-top-0' : '-top-20'
      )}
    >
      <nav
        className={`flex ${
          isHomePage() ? 'justify-end' : 'justify-between'
        } items-center mx-5 w-full max-w-7xl`}
      >
        {!isHomePage() && (
          <div>
            <Link href='/'>
              <Image src={logo} width={80} height={80} alt='logo' />
            </Link>
          </div>
        )}
        <ul className='flex items-center'>
          <Link className='mr-5' href='/#about-section' scroll={false}>
            <li>
              <h2>ABOUT</h2>
            </li>
          </Link>
          <Link className='mr-5' href='/works'>
            <li>
              <h2>WORK</h2>
            </li>
          </Link>
          <Link className='mr-2' href='/'>
            <li>
              <IoLogoLinkedin className='icon' />
            </li>
          </Link>
          <Link href='/'>
            <li>
              <AiOutlineInstagram className='icon' />
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
