import { useState, useEffect } from 'react';
import Link from 'next/link';
import { IoLogoLinkedin } from 'react-icons/io';
import { AiOutlineInstagram } from 'react-icons/ai';
import logo from 'assets/images/logo.png';
import Image from 'next/image';
import { cn } from 'helpers';

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(true);
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
        'fixed  z-30 bg-light-gray text-white flex justify-center h-14 w-screen transition-all',
        open ? '-top-0' : '-top-14'
      )}
    >
      <nav className='flex justify-between items-center mx-5 w-full max-w-7xl'>
        <div>
          <Link href='/'>
            <Image src={logo} width={100} height={100} alt='logo' />
          </Link>
        </div>
        <ul className='flex items-center'>
          <Link className='mr-5' href='/#about-section' scroll={false}>
            <li>
              <h3>ABOUT</h3>
            </li>
          </Link>
          <Link className='mr-5' href='/works'>
            <li>
              <h3>WORK</h3>
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
