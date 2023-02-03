import React from 'react'
import Grid from '../footer/Grid'

const Contact = () => {

    const social = [
        {
          icon: "/icons/fb-icon.svg",
          url: "https://www.facebook.com/zisanurhaque"
        },
        {
          icon: "/icons/tw-icon.svg",
          url: "https://twitter.com/zisanurhaque"
        },
        {
          icon: "/icons/insta-icon.svg",
          url: "/instagram"
        },
        {
          icon: "/icons/in-icon.svg",
          url: "https://www.linkedin.com/in/zisanurhaque/"
        },
        {
          icon: "/icons/yt-icon.svg",
          url: "/youtube"
        },
        {
          icon: "/icons/tp-icon.svg",
          url: "/topappdevelopmentcompanies"
        },
    ]

  return (
    <div className='px-[280px] py-20 pb-6'>

        <div className='flex w-full justify-center h-[600px]'>
          <h2 className='text-black text-[45px] font-semibold'>Schedule Call</h2>
        </div>

        <div className='border-t-[rgba(0,0,0,.1)] border-t w-full'></div>

        <div className='flex w-full justify-between pt-36'>
            <Grid effectType={2} data={[]} title={"Social Media"} effect={"Social"} subheader={"Don’t Miss To Follow Us On Our Social Networks Accounts."}/>
            <div className='flex items-center gap-2'>
                <div className='flex items-center gap-5 py-8'>
                    {
                        social.map((item, i) => (
                            <a href={item.url} key={i} className={"w-[85px] h-[85px] rounded-xl bg-white shadow-lg flex justify-center items-center hover:border-primaryColor hover:border"}>
                                <img src={item.icon} alt={item.url} className='w-10 h-10 rounded-full border-none'/>
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>

    </div>
  )
}

export default Contact
