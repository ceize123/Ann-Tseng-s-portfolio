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
  useEffect(() => {
    const timer = setTimeout(() => {
      AOS.init({
        offset: 150,
        duration: 1000,
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!work) return <Skeleton />;
  const { title, banner, year, skill, software, overview, rendering3D } =
    work.fields;

  const renderTextArray = (textAry: string[]) => {
    return textAry.map((item: string, idx: number) => (
      <span key={idx}>
        {item}
        {idx < textAry.length - 1 ? ', ' : ''}
      </span>
    ));
  };

  const getArray = (data: any, image: string, description: string) => {
    const images = Object.keys(data).filter((item) => item.includes(image));
    const descriptions = Object.keys(data).filter((item) =>
      item.includes(description)
    );
    const ary = images.map((item, idx) => {
      return {
        image: data[item],
        description:
          descriptions[idx] !== undefined ? data[descriptions[idx]] : '',
      };
    });

    return ary;
  };

  const renderProcess = () => {
    const processDesign = getArray(
      work.fields,
      'processImage',
      'processDescription'
    );
    return processDesign?.map((item, idx) => {
      const descriptions = item.description.split('\n');
      return (
        <div key={idx} className='mt-48' data-aos='fade-up'>
          <DataImage data={item.image} />
          <div className='mt-20 max-w-4xl mx-auto' data-aos='fade-up'>
            {descriptions &&
              descriptions.map((description: string, idx: number) => (
                <h2 key={idx}>{description}</h2>
              ))}
          </div>
        </div>
      );
    });
  };

  const renderSpacePlanning = () => {
    const spacePlanning = getArray(
      work.fields,
      'spacePlanningImage',
      'spacePlanningDescription'
    );
    return (
      <div className='mt-48 grid grid-cols-2 gap-8'>
        {spacePlanning?.map((item, index) => {
          const descriptions = item.description.split('\n');
          return (
            <>
              {item.image.map((img: Asset, idx: number) => (
                <div
                  key={idx}
                  className={`col-span-1 ${index !== 0 ? 'mt-32' : ''}`}
                  data-aos='fade-up'
                >
                  <DataImage data={img} />
                </div>
              ))}
              <div className='col-span-2 max-w-4xl mx-auto' data-aos='fade-up'>
                {descriptions &&
                  descriptions.map((description: string, idx: number) => (
                    <h2 key={idx}>{description}</h2>
                  ))}
              </div>
            </>
          );
        })}
      </div>
    );
  };

  const render3Ds = () => {
    return rendering3D?.map((item) => (
      <div key={item.sys.id} className='mt-48' data-aos='fade-up'>
        <DataImage data={item} />
      </div>
    ));
  };

  return (
    <main className='px-2 md:px-0 project-page'>
      <section className='banner min-h-screen md:py-24 py-16'>
        <div className='max-w-7xl md:mb-16 mb-8 mx-auto'>
          <DataImage data={banner} />
        </div>
        <div className='max-w-4xl mx-auto'>
          <div className='ml-4' data-aos='fade-up'>
            <h1 className='mb-4'>{title}</h1>
            {skill && <h3 className='mb-1'>{renderTextArray(skill)}</h3>}
            {software && <h3 className='mb-1'>{renderTextArray(software)}</h3>}
            <h3>{year}</h3>
          </div>
          <div className='large-margin' data-aos='fade-up'>
            <h2>{overview}</h2>
          </div>
        </div>
      </section>
      <section>{renderProcess()}</section>
      <section>{renderSpacePlanning()}</section>
      <section>{rendering3D && render3Ds()}</section>
    </main>
  );
};

export default WorkDetails;
