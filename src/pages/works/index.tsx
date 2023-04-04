import { createClient } from 'contentful';
import Card from 'components/Works/Card';
import Skeleton from 'components/Skeleton';
import { Entry } from 'types/assets';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string, // id
    accessToken: process.env.CONTENTFUL_ACCESS_KEY as string,
  });

  const res = await client.getEntries({ content_type: 'annWorks' });

  return {
    props: {
      works: res.items,
    },
    revalidate: 10,
  };
}

interface props {
  works: Entry[];
}

export const Works: React.FC<props> = ({ works }) => {
  if (!works) return <Skeleton />;
  const renderWorkCard = () => {
    return works.map((work: Entry, idx: number) => {
      return (
        <div key={work.sys.id}>
          <Card work={work.fields} num={idx} />
        </div>
      );
    });
  };

  return (
    <main>
      <section className='work-section py-10'>
        <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-10 sm:mx-12 mx-8'>
          {works !== undefined && renderWorkCard()}
        </div>
      </section>
    </main>
  );
};

export default Works;
