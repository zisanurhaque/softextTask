import React from 'react'

const Top = () => {

    const credentials = [
        {
            icon: "icons/ind-flag.svg",
            data: "+91 8000 161161"
        },
        {
            icon: "icons/us-flag.svg",
            data: "+1 309 791 4105"
        },
        {
            icon: "icons/uk-flag.svg",
            data: "+44 20 8133 8639"
        }
    ]

  return (
    <div className='h-[50px] flex justify-between items-center px-[280px]'>

        <div className='flex gap-5 items-center'>
            {
                credentials.map((item, i) => (
                    <a href={`tel:${item.data.split(" ").join("")}`} className='flex items-center gap-2' key={i}>
                        <img src={item.icon} alt={item.data} className={"relative w-7"}/>
                        <p className='text-[13px] hover:text-primaryColor'>{item.data}</p>
                    </a>
                ))
            }
        </div>

        <div className='flex gap-2 items-center'>
            <a href='/press-release' className='rounded-full p-2 custom-shadow text-[13px] px-5 font-medium'>Press Releas</a>
            <a href='/fresh-work' className='rounded-full p-2 custom-shadow text-[13px] px-5 font-medium'>Our Fresh Work</a>
            <a href='/schedule-call' className='rounded-full p-2 custom-shadow text-[13px] px-5 bg-primaryColor text-white font-medium'>Schedule Call</a>
        </div>

    </div>
  )
}

export default Top
