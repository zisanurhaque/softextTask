import React from 'react'

const Tickets = ({data}) => {
  return (
    <div className='flex gap-4 w-[320px]'>
        <img src={data?.ticket} alt='uk' className='w-20'/>
        <div className='flex flex-col gap-1 flex-1'>
            <h6 className='flex gap-3 text-white font-semibold items-center uppercase'> <img src={data?.icon} alt='india' className='w-7 h-max'/> {data?.office}</h6>
            <span className='text-[13px] text-[#ccc]'>{data?.address}</span>
            <p className='text-white text-[13px]'>{data?.phone}</p>
        </div>
    </div>
  )
}

export default Tickets
