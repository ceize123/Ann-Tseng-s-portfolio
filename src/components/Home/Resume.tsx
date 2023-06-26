import Image from 'next/image';
import avatar from 'assets/images/avatar.png';
import { PersonalInfo, IconType } from 'components/Personal-Info';
import { experience } from './data';

const renderExperience = (title: string, info: string, list: string[]) => {
  return (
    <>
      <div className='resume-subtitle'>
        <h2>{title}</h2>
        <h3>{info}</h3>
      </div>
      <ul className='list-disc ml-4'>
        {list.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export const Resume: React.FC = () => {
  const { work1, work2, work3 } = experience;
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
                <li>Revit</li>
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
            <div>
              {[work1, work2, work3].map((item, idx) => (
                <div key={idx} className={idx !== 0 ? 'mt-20' : 'mt-12'}>
                  {renderExperience(item.title, item.info, item.list)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
