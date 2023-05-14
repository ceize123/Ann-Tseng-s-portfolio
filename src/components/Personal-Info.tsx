import { MdPhoneIphone, MdEmail, MdLocationOn } from 'react-icons/md';

export const enum IconType {
  PHONE = 'phone',
  EMAIL = 'email',
  LOCATION = 'location',
}

interface props {
  type: IconType;
}

export const PersonalInfo: React.FC<props> = ({ type }) => {
  const getType = (type: IconType) => {
    let returnVal;
    switch (type) {
      case IconType.PHONE:
        returnVal = (
          <>
            <MdPhoneIphone className='text-2xl' />
            <h2 className='ml-1.5'>(437) 97101353</h2>
          </>
        );
        break;
      case IconType.EMAIL:
        returnVal = (
          <>
            <MdEmail className='text-2xl' />
            <h2 className='ml-1.5'>ann1212123@gmail.com</h2>
          </>
        );
        break;
      case IconType.LOCATION:
        returnVal = (
          <>
            <MdLocationOn className='text-2xl' />
            <h2 className='ml-1.5'>Toronto, ON</h2>
          </>
        );
        break;
      default:
        break;
    }
    return returnVal;
  };

  return (
    <div className='mx-5 mb-1 sm:mb-0 flex items-center'>{getType(type)}</div>
  );
};
