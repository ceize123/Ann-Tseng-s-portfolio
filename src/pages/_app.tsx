import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import 'styles/globals.css';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import { cn } from 'helpers';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    if (router.route === '/') document.body.classList.add('overflow-hidden');
    else document.body.classList.remove('overflow-hidden');
  }, [router]);
  return (
    <div
      className={cn(
        'layout w-full overflow-hidden',
        router.route === '/' ? 'bg-light-gray text-white' : ''
      )}
    >
      <Navbar />
      <div className='container mx-auto mt-14'>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}
