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
            <MdPhoneIphone />
            <h2 className='ml-1'>(437) 97101353</h2>
          </>
        );
        break;
      case IconType.EMAIL:
        returnVal = (
          <>
            <MdEmail />
            <h2 className='ml-1'>ann1212123@gmail.com</h2>
          </>
        );
        break;
      case IconType.LOCATION:
        returnVal = (
          <>
            <MdLocationOn />
            <h2 className='ml-1'>Toronto, ON</h2>
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
