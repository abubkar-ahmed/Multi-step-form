import React, { useState } from 'react'

function Nav(props) {
  const step = props.step ;

  return (
    <nav className="md:w-[274px] md:h-full md:bg-[url('./assets/bg-sidebar-desktop.svg')]  bg-[url('./assets/bg-sidebar-mobile.svg')] bg-cover md:bg-bottom bg-center bg-no-repeat  md:rounded-2xl md:py-5 py-10 px-5 min-h-[175px]" >
    <ul className="flex md:flex-col w-full md:h-full gap-5 h-fit  justify-center md:justify-start">
      <li className="flex items-center  gap-2" >
        <div className={`rounded-full text-black  w-[30px] grid  h-[30px] place-content-center  border border-pastelBlue text-sm font-normal ${step === 1 ? 'bg-pastelBlue text-black' :'text-white'}`}>1</div>
        <div className='hidden md:block'>
          <h3 className="text-xs font-medium text-coolGray">STEP 1</h3>
          <h4 className="text-sm font-medium text-white">YOUR INFO</h4>
        </div>
      </li>
      <li className="flex items-center  gap-2" >
        <div className={`rounded-full  w-[30px] grid  h-[30px] place-content-center  border border-pastelBlue text-sm font-normal ${step === 2 ? 'bg-pastelBlue text-black' :'text-white'}`}>2</div>
        <div className='hidden md:block'>
          <h3 className="text-xs font-medium text-coolGray">STEP 2</h3>
          <h4 className="text-sm font-medium text-white">SELECT PLAN</h4>
        </div>
      </li>
      <li className="flex items-center  gap-2" >
        <div className={`rounded-full   w-[30px] grid  h-[30px] place-content-center  border border-pastelBlue text-sm font-normal ${step === 3 ? 'bg-pastelBlue text-black' :'text-white'}`}>3</div>
        <div className='hidden md:block'>
          <h3 className="text-xs font-medium text-coolGray">STEP 3</h3>
          <h4 className="text-sm font-medium text-white">ADD-ONS</h4>
        </div>
      </li>
      <li className="flex items-center  gap-2 " >
        <div className={`rounded-full w-[30px] grid  h-[30px] place-content-center  border border-pastelBlue text-sm font-normal ${step === 4 ? 'bg-pastelBlue text-black' :'text-white'}`}>4</div>
        <div className='hidden md:block'>
          <h3 className="text-xs font-medium text-coolGray">STEP 4</h3>
          <h4 className="text-sm font-medium text-white">SUMMARY</h4>
        </div>
      </li>
    </ul>
  </nav>
  )
}

export default Nav