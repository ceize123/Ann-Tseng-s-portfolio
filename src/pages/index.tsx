import { BgPixel } from 'components/Background-Animation'
import Hero from 'components/Home/Hero'
import Quote from 'components/Home/Quote'
import Resume from 'components/Home/Resume'

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <BgPixel />
        <Quote />
        <Resume />
      </main>
    </>
  )
}
