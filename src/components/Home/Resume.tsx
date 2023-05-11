import Image from 'next/image';
import rabbit from 'assets/images/rabbit.png';
import { PersonalInfo, IconType } from 'components/Personal-Info';

export const Resume: React.FC = () => {
  return (
    <section className='bg-gray' id='about-section'>
      <div className='flex flex-col items-center'>
        <Image src={rabbit} width={100} height={100} alt='rabbit' />
        <div className='flex mt-12 md:flex-row flex-col'>
          <PersonalInfo type={IconType.PHONE} />
          <PersonalInfo type={IconType.EMAIL} />
          <PersonalInfo type={IconType.LOCATION} />
        </div>
      </div>
      <div className='mt-12'>
        <div className='flex sm:justify-between pb-12 sm:flex-row flex-col md:mx-16 mx-10'>
          <div className='mb-5 sm:mb-0'>
            <h1 className='text-yellow'>EDU.</h1>
            <div>
              <div className='my-5'>
                <h2>INTERIOR DECORATING</h2>
                <ul>
                  <li>HUMBER COLLEGE</li>
                  <li>EXPECTED 2023</li>
                </ul>
              </div>
              <div>
                <h2>GRAPHIC COMMUNICATIONS</h2>
                <ul>
                  <li>SHIH_HSUIN UNIVERSITY</li>
                  <li>2014-2018</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='mb-5 sm:mb-0'>
            <h1 className='text-yellow'>SKILLS</h1>
            <ul className='list-disc mt-5'>
              <li>Adobe Illustrator</li>
              <li>Adobe Photoshop</li>
              <li>Auto Cad</li>
              <li>Sketchup</li>
            </ul>
          </div>
          <div>
            <h1 className='text-yellow'>LANG.</h1>
            <ul className='list-disc mt-5'>
              <li>English</li>
              <li>Mandarin</li>
            </ul>
          </div>
        </div>
        <div className='md:pt-12 pt-5 md:mx-16 ml-10 mr-5'>
          <h1 className='text-yellow'>EXPERIENCE</h1>
          <div className='flex flex-col sm:flex-row'>
            <div className='mr-12'>
              <div className='my-5'>
                <h2>SET DECORATOR ASSISTANT</h2>
                <h3>Freelance, Taiwan 2015-2019</h3>
              </div>
              <ul className='list-disc'>
                <li>
                  Designed and decorated sets and set elements for
                  advertising,music video and film
                </li>
                <li>
                  Created Sketchup models and 3D realistic renderings for
                  clients to be able to visualize the space
                </li>
                <li>
                  Sourced many products such as lighting, furniture, and fabrics
                  for many different budgets and sciences
                </li>
              </ul>
            </div>
            <div className='mr-12'>
              <div className='my-5'>
                <h2>DISPLAY DESIGNER</h2>
                <h3>Penshugen, Taiwan 2019-2021</h3>
              </div>
              <ul className='list-disc'>
                <li>
                  Worked extensively with clients and vendors throughout the
                  design process
                </li>
                <li>Created display sets using minor carpentry skills</li>
                <li>
                  Contributed CAD drawings of each set and drafted detailed
                  dimensional drawings for a scene shop to build from
                </li>
                <li>
                  Created necessary design, documentation, and management of
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
