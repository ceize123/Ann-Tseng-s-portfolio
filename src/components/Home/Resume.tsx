import Image from 'next/image';
import avatar from 'assets/images/avatar.png';
import { PersonalInfo, IconType } from 'components/Personal-Info';

export const Resume: React.FC = () => {
  return (
    <section id='about-section'>
      <div className='flex justify-center mb-5'>
        <Image src={avatar} width={150} height={150} alt='avatar' />
      </div>
      <div className='bg-gray py-16 lg:px-20 md:px-6 px-0'>
        <div className='flex justify-center'>
          <div className='flex md:flex-row flex-col'>
            <PersonalInfo type={IconType.PHONE} />
            <PersonalInfo type={IconType.EMAIL} />
            <PersonalInfo type={IconType.LOCATION} />
          </div>
        </div>
        <div className='xl:mx-20 lg:mx-16 md:mx-10 ml-10 mr-5'>
          <div className='flex sm:justify-between sm:flex-row flex-col'>
            <div className='resume-title'>
              <h1 className='text-yellow'>EDU.</h1>
              <div className='resume-subtitle'>
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
            <div className='resume-title'>
              <h1 className='text-yellow'>SKILLS</h1>
              <ul className='list-disc resume-subtitle'>
                <li>Adobe Illustrator</li>
                <li>Adobe Photoshop</li>
                <li>Auto Cad</li>
                <li>Sketchup</li>
              </ul>
            </div>
            <div className='resume-title'>
              <h1 className='text-yellow'>LANG.</h1>
              <ul className='list-disc resume-subtitle'>
                <li>English</li>
                <li>Mandarin</li>
              </ul>
            </div>
          </div>
          <div className='resume-title'>
            <h1 className='text-yellow'>EXPERIENCE</h1>
            <div className='flex flex-col sm:flex-row'>
              <div className='mr-12'>
                <div className='resume-subtitle'>
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
                    Sourced many products such as lighting, furniture, and
                    fabrics for many different budgets and sciences
                  </li>
                </ul>
              </div>
              <div className='mr-12'>
                <div className='resume-subtitle'>
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
      </div>
    </section>
  );
};

export default Resume;
