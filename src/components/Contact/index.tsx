import { PersonalInfo, IconType } from 'components/Personal-Info';

export const Contact: React.FC = () => {
  return (
    <section
      id='contact-section'
      className='bg-yellow text-black flex justify-center lg:mt-40 mt-24'
    >
      <div className='w-full sm:py-10 py-6 px-10 flex justify-between items-center sm:flex-row flex-col max-w-7xl'>
        <h1 className='font-Bodoni mb-3 sm:mb-0'>Contact Me</h1>
        <div className='lg:mr-20 md:mr-12 sm:mr-5 mr-0'>
          <PersonalInfo type={IconType.PHONE} />
          <PersonalInfo type={IconType.EMAIL} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
