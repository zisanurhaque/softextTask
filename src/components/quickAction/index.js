import React, { useState } from 'react'

const QuickAction = () => {

    const [open, setOpen] = useState(false)

  return (
    <div className='w-full h-[100vh] bg-transparent top-0 left-0 fixed'>

        <a href='/' className='absolute w-[60px] h-[60px] rounded-full overflow-hidden bottom-16 left-10 bg-[#4dc247] p-3'>
            <img src='./icons/whatsapp.svg' alt='whatsapp' className='w-full'/>
        </a>

        <div className={`bg-primaryColor w-[300px] ${ !open ? "-right-[300px]" : "right-0"} bottom-[40vh] absolute transition-all duration-500`}>
            <div className='relative flex items-center'>
                <button onClick={() => setOpen(!open)} className='w-[48px] h-[48px] bg-primaryColor text-white flex justify-center items-center absolute right-full'>
                    <img src='./icons/telephone.svg' alt='' className='w-[20px] h-[20px]'/>
                </button>
                <div className='p-8 w-full'>
                    <p className='text-white text-[1.25rem] mb-4'>Call Us Now</p>
                    <div className='flex items-center gap-3 text-white mb-3'>
                        <img src='./icons/ind-flag.svg' alt=''/>
                        +91 8000 161161
                    </div>
                    <div className='flex items-center gap-3 text-white'>
                        <img src='./icons/us-flag.svg' alt=''/>
                        +1 309 791 4105
                    </div>
                    <a href='/' className='flex items-center gap-3 mt-5 pt-5 border-t text-white'>
                        <img src='./icons/calender.svg' alt=''/>
                        Schedule Call
                    </a>
                </div>
            </div>
        </div>

        <a href='/' className='absolute w-[60px] h-[60px] rounded-full overflow-hidden right-4 bottom-4 bg-[#007aff] p-3 flex justify-center items-center'>
            <i className="fa-regular fa-comment-dots text-white text-3xl"></i>
        </a>

    </div>
  )
}

export default QuickAction
