import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import 'styles/globals.css';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import { cn } from 'helpers';
import Contact from 'components/Contact';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isHomePage = (): boolean => {
    return router.route === '/';
  };
  // useEffect(() => {
  //   if (router.route === '/') document.body.classList.add('overflow-hidden');
  //   else document.body.classList.remove('overflow-hidden');
  // }, [router]);
  return (
    <div
      className={cn(
        'layout w-full overflow-hidden',
        isHomePage() ? 'bg-light-gray text-white' : ''
      )}
    >
      <Navbar />
      <div className={cn('container mx-auto', !isHomePage() ? ' mt-14' : '')}>
        <Component {...pageProps} />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
