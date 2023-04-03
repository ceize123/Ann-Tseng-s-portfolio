import { MdPhoneIphone, MdEmail, MdLocationOn } from 'react-icons/md'

export const enum IconType {
  PHONE = 'phone',
  EMAIL = 'email',
  LOCATION = 'location',
}

interface props {
  type: IconType
}

export const PersonalInfo: React.FC<props> = ({ type }) => {
  const getType = (type: IconType) => {
    let returnVal
    switch (type) {
      case IconType.PHONE:
        returnVal = (
          <>
            <MdPhoneIphone />
            <p>(437) 97101353</p>
          </>
        )
        break
      case IconType.EMAIL:
        returnVal = (
          <>
            <MdEmail />
            <p>ann1212123@gmail.com</p>
          </>
        )
        break
      case IconType.LOCATION:
        returnVal = (
          <>
            <MdLocationOn />
            <p>Toronto, ON</p>
          </>
        )
        break
      default:
        break
    }
    return returnVal
  }

  return (
    <div className='mx-5 mb-1 sm:mb-0 flex items-center'>{getType(type)}</div>
  )
}