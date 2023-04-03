import Image from 'next/image'
import { useState } from 'react'
const cn = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}

// https://stackoverflow.com/questions/43338763/typescript-property-does-not-exist-on-type-object
interface props {
  [key: string]: any
}

export const DataImage: React.FC<props> = ({ data }) => {
  const [isLoading, setLoading] = useState(true)
  const { file, title } = data.fields
  return (
    <Image
      src={`https:${file.url}`}
      width='0'
      height='0'
      sizes='100vw'
      alt={title}
      className={cn(
        'w-full h-auto duration-700 ease-in-out',
        isLoading
          ? 'grayscale blur-2xl scale-110'
          : 'grayscale-0 blur-0 scale-100'
      )}
      onLoadingComplete={() => setLoading(false)}
    />
  )
}

export default DataImage
