import React, { useState } from 'react'
import arcade from '../assets/icon-arcade.svg';
import advanced from '../assets/icon-advanced.svg';
import pro from '../assets/icon-pro.svg';

function SelectPlan(props) {

  const [selected , setSelected] = useState('arcade');
  const [planType , setPlanType] = useState('monthly');

  const togglePlan = () => {
    setPlanType(prev => {
      if(prev === 'monthly'){
        return 'yearly'
      }else{
        return 'monthly'
      }
    })
  }

  const nextStep = () => {
    props.setPlan({
      selected : selected,
      planType : planType,
      price : getPlanPrice()
    })

    props.setStep(3);
  }

  const getPlanPrice = () => {
    if(planType === 'monthly'){
      if(selected === 'arcade'){
        return 9
      }
      else if(selected === 'advanced'){
        return 12
      }
      else {
        return 15
      }
    }else {
      if(selected === 'arcade'){
        return 90
      }
      else if(selected === 'advanced'){
        return 120
      }
      else {
        return 150
      }
    }

  }

  

  return (
    <main className='bg-lightGray h-full relative md:bg-white md:w-full  flex justify-center  min-h-[600px] md:min-h-[unset] md:flex-col md:items-center md:justify-between'>
      <div className='absolute bg-white top-[-10%] w-[90%] left-[5%] flex flex-col rounded-xl p-5 gap-2 md:static md:w-[80%] md:px-0 lg:w-[70%] min-h-[550px] md:min-h-[unset]'>
          <h1 className='text-[28px] font-bold text-marineBlue'>Select Your Plane</h1>
          <p className='text-coolGray font-normal text-[16px] md:mb-5'>
              You Have The Option Of Monthly Or Yearly Billing.
          </p>
          <ul className='flex flex-col gap-3 md:flex-row  md:justify-center'>
            <li 
            className={`border px-5 py-3 flex gap-4 rounded-lg ${selected === 'arcade' ? 'border-marineBlue bg-magnolia' : 'border-lightGray bg-white'} cursor-pointer md:flex-col md:w-1/3 hover:border-marineBlue transition-all `}
            onClick={() => {
              setSelected('arcade');
            }}
            
            >
              <img src={arcade} alt="arcade" className='w-[40px] h-[76px]'/>
              <div >
                <h2 className={`text-lg font-medium text-marineBlue md:text-base `}>
                  Arcade
                </h2>
                <h3 className={`text-coolGray md:text-sm`}>
                  {planType === 'monthly' ? '$9/mo' : '$90/yr'}
                </h3>
                {planType === 'yearly' && <p className='text-marineBlue font-medium md:text-sm md:mt-1'>2 mothns Free</p>}
              </div>
            </li>

            <li 
            className={`border p-5 py-3 flex gap-4 rounded-lg  cursor-pointer ${selected === 'advanced' ? 'border-marineBlue bg-magnolia' : 'border-lightGray bg-white'} md:flex-col md:w-1/3 hover:border-marineBlue transition-all `}
            onClick={() => {
              setSelected('advanced');
            }}
            >
              <img src={advanced} alt="advanced" className='w-[40px] h-[76px]'/>
              <div>
                <h2 className={`text-lg font-medium text-marineBlue md:text-base`}>
                  Advanced
                </h2>
                <h3 className={`text-coolGray md:text-sm`}>
                  {planType === 'monthly' ? '$12/mo' : '$120/yr'}
                </h3>
                {planType === 'yearly' && <p className='text-marineBlue font-medium md:text-sm md:mt-1'>2 mothns Free</p>}
              </div>
            </li>

            <li 
            className={`border p-5 py-3 flex gap-4 rounded-lg border-marineBlue cursor-pointer ${selected === 'pro' ? 'border-marineBlue bg-magnolia' : 'border-lightGray bg-white '} md:flex-col md:w-1/3 hover:border-marineBlue transition-all `}
            onClick={() => {
              setSelected('pro');
            }}
            
            >
              <img src={pro} alt="pro" className='w-[40px] h-[76px]'/>
              <div>
                <h2 className={`text-lg font-medium text-marineBlue md:text-base`}>
                  Pro
                </h2>
                <h3 className={`text-coolGray md:text-sm`}>
                  {planType === 'monthly' ? '$15/mo' : '$150/yr'}
                </h3>
                {planType === 'yearly' && <p className='text-marineBlue font-medium md:text-sm md:mt-1'>2 mothns Free</p>}
              </div>
            </li>
          </ul>
          <div className='flex gap-5 justify-center mt-5 bg-magnolia p-3 rounded-lg'>
            <h4 onClick={() => setPlanType('monthly')} className={`${planType === 'monthly' ? 'text-marineBlue font-medium' : 'text-coolGray'} text-[16px] cursor-pointer hover:text-marineBlue` }>
              Monthly
            </h4>
            <div className='w-[50px] h-[25px] bg-marineBlue rounded-2xl relative cursor-pointer'
              onClick={togglePlan}
            >
            <span className={`w-[15px] h-[15px] absolute top-[5px] rounded-full bg-white animate-move ${planType === 'monthly' ? 'animate-move-left' : 'animate-move-right'}`}></span>
            </div>
            <h5 onClick={() => setPlanType('yearly')} className={`${planType === 'yearly' ? 'text-marineBlue font-medium' : 'text-coolGray'} text-[16px] cursor-pointer hover:text-marineBlue`}>
              Yearly
            </h5>
          </div>
      </div>
      <div className='mt-[2rem] h-fit self-end w-full bg-white p-5 flex justify-between md:px-0 md:w-[80%] lg:w-[70%] md:self-center'>
        <button className='text-marineBlue hover:font-medium' onClick={() => {props.setStep(1)}}>
          Go Back
        </button>
          <button className='bg-marineBlue py-2 px-4 text-white rounded-lg hover:opacity-90' onClick={nextStep}> 
              Next Step
          </button>
      </div>
</main>
  )
}

export default SelectPlan