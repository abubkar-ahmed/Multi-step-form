import React from 'react'
import thanks from '../assets/icon-thank-you.svg'

function ThankYou() {
  return (
    <main className='bg-lightGray h-full relative md:bg-white md:w-full  flex justify-center  min-h-[600px] md:min-h-[unset] md:flex-col md:items-center  md:justify-center'>
    <div className='absolute bg-white top-[-10%] w-[90%] left-[5%] flex flex-col rounded-xl p-6 py-[4rem] gap-2 md:static md:w-[80%] md:px-0 lg:w-[70%] min-h-[300px] md:min-h-[unset] items-center justify-center'>
        <img src={thanks} alt="Thank You" className='w-[80px] h-[80px]'/>
        <h1 className='text-base font-bold text-marineBlue md:text-2xl'>
            Thank you!
        </h1>
        <p className='text-center text-coolGray md:text-lg'>
            Thanks for confirming your subscription! We hope you have fun 
            using our platform. If you ever need support, please feel free 
            to email us at support@loremgaming.com.
        </p>

    </div>

    </main>
  )
}

export default ThankYou