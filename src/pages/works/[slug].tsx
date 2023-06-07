import { createClient } from 'contentful';
import Skeleton from 'components/Skeleton';
import Draws from 'components/Work/Draws';
import DataImage from 'components/Data-Image';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Entry, EntryFields, Asset } from 'types/assets';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string, // id
  accessToken: process.env.CONTENTFUL_ACCESS_KEY as string,
});

// after nextjs runs this, it generates different paths and pages
export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'annWorks',
  });

  const paths = res.items.map((item: any) => {
    return {
      params: { slug: item.fields.slug as string },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

interface Props {
  params: { slug: string };
}

// for each one of different paths, it runs getStaticProps
export const getStaticProps = async ({ params }: Props) => {
  const { items } = await client.getEntries({
    content_type: 'annWorks',
    'fields.slug': params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false, // not a permanent redirect, because in the future, there might have this url
      },
    };
  }

  return {
    props: { work: items[0] },
    revalidate: 10,
  };
};

interface props {
  work: Entry;
}

export const WorkDetails: React.FC<props> = ({ work }) => {
  console.log(work);
  const [drawArray, setDrawArray] = useState<Asset[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      AOS.init({
        offset: 150,
        duration: 1000,
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // const getSections = (data: EntryFields) => {
  //   Object.keys(data).forEach((key) => {
  //     const value = data[key];
  //     if (value) {
  //       setDrawArray([...drawArray, value as Asset]);
  //     }
  //   });
  // };
  // useEffect(() => {
  //   getSections(work.fields);
  // }, [work]);

  if (!work) return <Skeleton />;
  const { title, banner, year, skill, software, overview } = work.fields;

  // const renderDrawings = () => {
  //   const returnVal = sketches.slice(1).map((item: Asset, idx: number) => {
  //     return (
  //       <div key={idx} className='md:w-full w-1/3'>
  //         <DataImage data={item} />
  //       </div>
  //     );
  //   });
  //   return (
  //     <div className='lg:col-span-2 md:col-span-3 md:self-center flex justify-center md:block'>
  //       {returnVal}
  //     </div>
  //   );
  // };

  // const renderSectionArray = () => {
  //   const returnVal = drawArray.map((item: Asset, idx: number) => {
  //     return (
  //       <div key={idx} className='mt-20 md:pb-20 pb-8' data-aos='fade-up'>
  //         <Draws ary={item} aryIdx={idx} />
  //       </div>
  //     );
  //   });
  //   return <section>{returnVal}</section>;
  // };

  const renderTextArray = (textAry: string[]) => {
    return textAry.map((item: string, idx: number) => (
      <span key={idx}>
        {item}
        {idx < textAry.length - 1 ? ', ' : ''}
      </span>
    ));
  };

  return (
    <main className='px-2 md:px-0'>
      <section className='banner min-h-screen md:py-24 py-16'>
        <div className='max-w-7xl md:mb-16 mb-8 mx-auto'>
          <DataImage data={banner} />
        </div>
        <div className='max-w-4xl mx-auto'>
          <div className='ml-4'>
            <h1 className='mb-4'>{title}</h1>
            {skill && <h3 className='mb-1'>{renderTextArray(skill)}</h3>}
            {software && <h3 className='mb-1'>{renderTextArray(software)}</h3>}
            <h3>{year}</h3>
          </div>
          <div className='mt-28'>
            <h2>{overview}</h2>
          </div>
        </div>
      </section>

      {/* <section className='min-h-screen'>
        <div
          className='md:grid md:grid-cols-8 md:gap-2 flex flex-col'
          data-aos='fade-up'
        >
          <div className='md:col-span-5'>
            <div>
              <DataImage data={sketches[0]} />
            </div>
            <h2 className='md:w-2/3'>{sketches[0].fields.description}</h2>
          </div>
          {renderDrawings()}
        </div>
      </section> */}
      {/* {renderSectionArray()} */}
    </main>
  );
};

export default WorkDetails;
