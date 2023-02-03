import React from 'react'
import Tickets from './Tickets'

const Grid = ({data, effectType, title, effect, isTicket, subscribe, subheader}) => {
  return (
    <div className={`flex flex-col gap-4 bg-transparent ${isTicket ? "w-full" : `${subscribe ? "w-1/2" : "w-1/3"}`}`}>

        <h4 className={`text-[30px] font-semibold bg-transparent z-20 relative pb-2 ${effectType === 2 ? "text-balck" : "text-white"}`}>
          {title}
          <span className={`${effectType === 2 ? "fHeaderA" : "fHeader"}`}>{effect}</span>
        </h4>

        {
          subheader ?
          <p className='text-black text-[16px] -mt-3 w-[310px]'>
            {subheader}
          </p> :
          ""
        }

        {
          isTicket ?
          <div className='w-full flex gap-10 py-4'>
            {
              data.map((item, i) => (
                <Tickets key={i} data={item}/>
              ))
            }
          </div>
          :
          subscribe ? 
            <>
              <p className='text-[16px] text-white'>Stay updated with latest technology trends and topics with us.</p>
              <form className='border border-[#535353] overflow-hidden w-[550px] flex'>
                <input type={"email"} placeholder="Email@company.com" className='bg-transparent outline-none p-4 px-8 text-white flex-1'/>
                <button className='w-[150px] text-white bg-transparent'>Subscribe</button>
              </form>
            </>
          :
          data.map((item, i) => (
            <a key={i} href={item.url} className='text-white text-[16px]'>{item.placeholder}</a>
          ))
        }

    </div>
  )
}

export default Grid
