import React from 'react'

const Grid = ({data, isSocial, social, image}) => {
  return (
    <>
        {
            image ?
            <div className='w-1/4 p-6 flex flex-col gap-3 border-r border-borderColor'>
                <a href={data?.url} className='rounded-2xl overflow-hidden relative'>
                    <h3 className='font-semibold text-white absolute bottom-5 left-5 z-20 text-2xl bg-transparent'>{data?.placeholder}</h3>
                    <div className='z-10 bg-black opacity-40 absolute top-0 left-0 w-full h-full'></div>
                    <img src={data?.image} alt={data?.placeholder} className={"w-full"}/>
                </a>
            </div>
            :
            <div className='w-1/4 p-6 flex flex-col gap-3 border-r border-borderColor'>
                {
                    !data ? [] : data.map((item, i) => (
                        <a key={i} href={item.url} alt={item.placeholder} className='hover:text-primaryColor w-max flex items-center gap-4'>
                            {
                                item.icon === "" ? "" : <img src={item.icon} alt={item.placeholder} className='w-6'/>
                            }
                            <span>{item.placeholder}</span>
                        </a>
                    ))
                }
                {
                    isSocial ?
                    <div className='flex items-center gap-5 py-8'>
                        {
                            social.map((item, i) => (
                                <img key={i} src={item.icon} alt={item.url} className='w-8 h-8 rounded-full border-none'/>
                            ))
                        }
                    </div> :
                    ""
                }
            </div>
        }
    </>
  )
}

export default Grid
