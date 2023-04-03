import { createClient } from 'contentful'
import Skeleton from 'components/Skeleton'
import Draws from 'components/Work/Draws'
import DataImage from 'components/Data-Image'
import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string, // id
  accessToken: process.env.CONTENTFUL_ACCESS_KEY as string,
})

// after nextjs runs this, it generates different paths and pages
export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'annWorks',
  })

  const paths = res.items.map((item: any) => {
    return {
      params: { slug: item.fields.slug },
    }
  })

  return {
    paths,
    fallback: true,
  }
}

// for each one of different paths, it runs getStaticProps
export async function getStaticProps({ params }: any) {
  const { items } = await client.getEntries({
    content_type: 'annWorks',
    'fields.slug': params.slug,
  })

  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false, // not a permanent redirect, because in the future, there might have this url
      },
    }
  }

  return {
    props: { work: items[0] },
    revalidate: 10,
  }
}

interface props {
  work: any
}

export const WorkDetails: React.FC<props> = ({ work }) => {
  const [drawArray, setDrawArray] = useState<any[]>([])
  const { title, banner, year, overview, sketches } = work.fields

  useEffect(() => {
    const timer = setTimeout(() => {
      AOS.init({
        offset: 150,
        duration: 1000,
      })
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  // if (!work) return <Skeleton />

  const getSections = (data: any) => {
    const ary = Object.keys(data)
    for (const item of ary) {
      if (/sec.*Drawing/i.test(item)) {
        setDrawArray([...drawArray, data[item]])
      }
    }
  }

  getSections(work.fields)

  const renderDrawings = () => {
    const returnVal = sketches.slice(1).map((item: any, idx: number) => {
      return (
        <div key={idx} className='md:w-full w-1/3'>
          <DataImage data={item} />
        </div>
      )
    })
    return (
      <div className='lg:col-span-2 md:col-span-3 md:self-center flex justify-center md:block'>
        {returnVal}
      </div>
    )
  }

  const renderSectionArray = () => {
    const returnVal = drawArray.map((item: any, idx: number) => {
      return (
        <div key={idx} className='mt-20 md:pb-20 pb-8' data-aos='fade-up'>
          <Draws ary={item} aryIdx={idx} />
        </div>
      )
    })
    return <section className='md:pb-20 pb-12'>{returnVal}</section>
  }

  return (
    <main className='px-14'>
      <section className='banner flex justify-center md:py-24 py-16 min-h-screen'>
        <div className='max-w-4xl w-full'>
          <div>
            <DataImage data={banner} />
          </div>
          <div className='ml-5 mb-6'>
            <h3 className='mt-5'>{title}</h3>
            <h4 className='mt-2 text-light-gray'>{year}</h4>
          </div>
          <p>{overview}</p>
        </div>
      </section>
      <section className='md:py-20 py-12 min-h-screen'>
        <div
          className='md:grid md:grid-cols-8 md:gap-2 flex flex-col'
          data-aos='fade-up'
        >
          <div className='md:col-span-5'>
            <div>
              <DataImage data={sketches[0]} />
            </div>
            <p className='md:w-2/3'>{sketches[0].fields.description}</p>
          </div>
          {renderDrawings()}
        </div>
      </section>
      {renderSectionArray()}
    </main>
  )
}

export default WorkDetails
