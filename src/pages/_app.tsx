import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import 'styles/globals.css'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import { HeroImage } from 'components/Background-Animation'
import { cn } from 'helpers'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <div
      className={cn(
        'layout w-full overflow-hidden',
        router.route === '/' ? 'bg-light-gray text-white' : ''
      )}
    >
      <Navbar />
      {router.route === '/' && <HeroImage />}
      <div className='container mx-auto mt-14'>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}
