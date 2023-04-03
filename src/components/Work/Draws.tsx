import DataImage from 'components/Data-Image'

interface props {
  ary: any
  aryIdx: number
}

export const Draw: React.FC<props> = ({ ary, aryIdx }) => {
  console.log(ary)
  return ary.map((item: any, idx: number) => {
    return (
      <div
        key={item.sys.id}
        className='md:grid md:grid-cols-8 items-center md:gap-4 flex flex-col mb-12'
      >
        {idx % 2 === 0 ? (
          <div
            className={`col-span-4 ${
              aryIdx % 2 !== 0 ? 'md:order-last md:ml-3' : ''
            }`}
          >
            <h2>{item.fields.description}</h2>
          </div>
        ) : (
          <div
            className={`col-span-3 ${aryIdx % 2 === 0 ? 'md:order-last' : ''}`}
          >
            <p>{item.fields.description}</p>
          </div>
        )}
        <div className={`${idx % 2 === 0 ? 'col-span-4' : 'col-span-5'}`}>
          <DataImage data={item} />
        </div>
      </div>
    )
  })
}

export default Draw
