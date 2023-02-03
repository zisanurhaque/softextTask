import React from 'react'
import Grid from './Grid'

const Footer = () => {

  const data = [
    {
      placeholder: "Who we are",
      url: "/"
    },
    {
      placeholder: "Career",
      url: "/"
    },
    {
      placeholder: "Events",
      url: "/"
    },
    {
      placeholder: "Services",
      url: "/"
    },
    {
      placeholder: "Industries",
      url: "/"
    },
    {
      placeholder: "Case Study",
      url: "/"
    },
    {
      placeholder: "Portfolio",
      url: "/"
    },
    {
      placeholder: "Sitemap",
      url: "/"
    },
    {
      placeholder: "Contact Us",
      url: "/"
    }
  ]

  const ticketData = [
    {
      ticket: "./icons/india.svg",
      icon: "./icons/ind-flag.svg",
      office: "India (HQ)",
      address: "C-106/B, Ganesh Meridian, Opp. Gujarat High Court, S. G. Highway, Ahmedabad, Gujarat, 380061",
      phone: "+91 8000-161161"
    },
    {
      ticket: "./icons/mumbai.svg",
      icon: "./icons/ind-flag.svg",
      office: "Mumbai Office",
      address: "Level 8, Vibgyor Towers, G Block, C62 Bandra Kurla Complex, Mumbai 400 098",
      phone:  "+91 8000-161161 "
    },
    {
      ticket: "./icons/usa.svg",
      icon: "./icons/us-flag.svg",
      office: "USA OFFICE",
      address: "One World Trade Center, 285 Fulton Street suite 8500, New York, NY 10007, United States.",
      phone:  "+1 309 791 4105 "
    },
    {
      ticket: "./icons/uk.svg",
      icon: "./icons/uk-flag.svg",
      office: "UK OFFICE",
      address: "Level 30, The Leadenhall Building, 122 Leadenhall Street, London EC3V 4AB",
      phone:  "+44 20 8133 8639"
    },
  ]

  return (
    <div className='bg-[#212529] px-[280px] pt-40 relative mt-64'>

        <div className='flex justify-center absolute -top-52 w-full left-0'>
          <div className='w-[1130px] h-[290px] overflow-hidden rounded-3xl bg-primaryColor px-64 flex flex-col justify-center items-center gap-4 relative'>
            <img src='./icons/pattern-1.svg' alt='pattern1' className='absolute left-0 top-0'/>
            <h3 className='text-white text-[32px] font-semibold text-center'>Let’s Create Big Stories Together</h3>
            <h5 className='text-white text-[18px] text-center'>Mobile is in our nerves. We don’t just build apps, we create brand. Choosing us will be your best decision.</h5>
            <button className='text-white text-[15px] bg-[#DC2E3D] rounded-sm w-max p-5 py-3 flex gap-2 items-center my-2'>Get A Quote <img src="./icons/arrow.svg" alt='arrow'/> </button>
            <img src='./icons/pattern2.svg' alt='pattern1' className='absolute right-0 bottom-0'/>
          </div>
        </div>

        <div className='flex flex-wrap justify-between py-14 bg-transparent gap-y-20'>

          <Grid data={data} title={"About"} effect={"About"}/>
          <Grid data={data} title={"Mobile"} effect={"Mobile"}/>
          <Grid data={data} title={"Web"} effect={"Web"}/>
          <Grid data={data} title={"Ecommerce"} effect={"Ecommerce"}/>
          <Grid data={data} title={"AI & ML"} effect={"AL"}/>
          <Grid data={data} title={"IOT & Embedded"} effect={"IOT"}/>
          <Grid data={data} title={"Blockchain"} effect={"Blockchain"}/>
          <Grid data={data} title={"Game"} effect={"Game"}/>
          <Grid data={data} title={"Saleforce"} effect={"Saleforce"}/>

        </div>

        <div className='flex flex-wrap justify-between py-14 bg-transparent gap-y-20'>

          <Grid isTicket={true} data={ticketData} title={"Locate Us"} effect={"Locate Us"}/>

        </div>

        <div className='flex bg-transparent py-14'>

          <Grid data={data} title={"Help"} effect={"Help"}/>
          <Grid subscribe={true} data={""} title={"Subscribe To Our Newsletter"} effect={"Subscribe"}/>

        </div>

        <div className='flex justify-center py-10'>
          <p className='text-white text-[14px]'>© 2023 <a href='/' className='text-white font-semibold text-[14px] hover:text-primaryColor'>Hyperlink InfoSystem</a> | All Rights Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
