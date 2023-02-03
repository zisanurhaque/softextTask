import React from 'react'
import Dropdown from './Dropdown'

const MainHeader = () => {

    const menu = [
        {
            placeholder: "Company",
            isDropdown: true,
            url: ""
        },
        {
            placeholder: "Services",
            isDropdown: true,
            url: ""
        },
        {
            placeholder: "Hire Developers",
            isDropdown: true,
            url: ""
        },
        {
            placeholder: "Case Study",
            isDropdown: false,
            url: "/resources"
        },
        {
            placeholder: "Resources",
            isDropdown: true,
            url: ""
        },

        {
            placeholder: "Contact Us",
            isDropdown: false,
            url: "/contact-us"
        }
    ]

  return (
    <div className='h-[80px] bg-[#fff] flex items-center justify-between custom-shadow px-[280px] relative' style={{boxShadow: "0 0 30px 0 rgba(0,0,0,.1)"}}>

        <div className='w-[150px]'>
            <img src='/icons/logo.svg' alt='brand name' className='w-full'/>
        </div>

        <div className='flex items-center gap-6 h-full'>
            {
                menu.map((item, i) => (
                    item.isDropdown ? 
                    <div className='group flex gap-1 items-center h-full cursor-pointer group' key={i}>
                        <p className='text-[14px] group-hover:text-primaryColor'>{item.placeholder}</p>
                        <i className="fa-solid fa-caret-down text-xs mb-[2px] group-hover:text-primaryColor"></i>
                        <Dropdown/>
                    </div> :
                    <a href={item.url} className='group flex gap-1 items-center' key={i}>
                        <p className='text-[14px] group-hover:text-primaryColor'>{item.placeholder}</p>
                    </a>
                ))
            }
            <a href={"/"} className='group flex gap-1 items-center shadow-lg p-4 rounded-full'>
                <p className='text-[14px] group-hover:text-primaryColor font-medium'>Get A Free Quote</p>
            </a>
        </div>
      
    </div>
  )
}

export default MainHeader
