import React, { useState } from 'react'
import check from '../assets/icon-checkmark.svg'

function PickAddOns(props) {

    const [service , setService] = useState(true);
    const [larger , setLarger] = useState(true);
    const [profile , setProfile] = useState(false);

    const getServicePrice = () => {
        if(props.plan?.planType === 'monthly'){
            if(service){
                return 1
            }else {
                return 0
            }
        }else{
            if(service){
                return 10
            }else {
                return 0
            }
        }
    }

    const getLargerPrice = () => {
        if(props.plan?.planType === 'monthly'){
            if(larger){
                return 2
            }else {
                return 0
            }
        }else{
            if(larger){
                return 20
            }else {
                return 0
            }
        }
    }

    const getProfilePrice = () => {
        if(props.plan?.planType === 'monthly'){
            if(profile){
                return 2
            }else {
                return 0
            }
        }else{
            if(profile){
                return 20
            }else {
                return 0
            }
        }
    }

    const nextStep = () => {
        props.setAddOns({
            service : {status : service , price : getServicePrice()},
            larger : {status : larger , price : getLargerPrice()},
            profile : {status : profile , price : getProfilePrice()},
            
        });

        props.setStep(4);

    }
  return (
    <main className='bg-lightGray h-full relative md:bg-white md:w-full  flex justify-center min-h-[600px] md:min-h-[unset] md:flex-col md:items-center md:justify-between'>
        <div className='absolute bg-white top-[-10%] w-[90%] left-[5%] flex flex-col rounded-xl p-5 gap-2 md:static md:w-[70%] md:px-0 lg:w-[70%] min-h-[550px] md:min-h-[unset]'>
            <h1 className='text-[28px] font-bold text-marineBlue'>
                Pick add-ons
            </h1>
            <p className='text-coolGray font-normal text-[16px] md:mb-5'>
                Add-ons help you enhance your gaming experience
            </p>
            <ul className='flex flex-col gap-2'>
                <li className={`flex border border-lightGray p-3 justify-between rounded-lg items-center gap-3 ${service ? 'border-purplishBlue bg-magnolia' : ''} cursor-pointer hover:border-purplishBlue`}
                onClick={() => {
                    setService(prev => !prev)
                }}
                >
                    <div className='flex  gap-3 items-center'>
                        <div className={`w-[20px] h-[20px] border border-lightGray rounded-md flex justify-center items-center ${service ? 'bg-purplishBlue' : ''}`}>
                            {service && <img src={check} alt="check"  className='w-[70%] h-[70%]'/>}
                        </div>
                        <div>
                            <h2 className='text-sm text-marineBlue font-bold'>Online Service</h2>
                            <h3 className='text-sm text-coolGray'>Access to multiplayer games</h3>
                        </div>
                    </div>
                    <div className='text-purplishBlue text-sm font-semibold'>
                        {props.plan?.planType === 'monthly' ? '+$1/mo' : '+$10/mo'}
                    </div>
                </li>
                

                <li className={`flex border border-lightGray p-3 justify-between rounded-lg items-center gap-3 ${larger ? 'border-purplishBlue bg-magnolia' : ''} cursor-pointer hover:border-purplishBlue`}
                onClick={() => {
                    setLarger(prev => !prev)
                }}
                >
                    <div className='flex  gap-3 items-center'>
                        <div className={`w-[20px] h-[20px] border border-lightGray rounded-md flex justify-center items-center ${larger ? 'bg-purplishBlue' : ''}`}>
                            {larger && <img src={check} alt="check"  className='w-[70%] h-[70%]'/>}
                        </div>
                        <div>
                            <h2 className='text-sm text-marineBlue font-bold'>Larger storage</h2>
                            <h3 className='text-sm text-coolGray'>Extra 1TB of cloud save</h3>
                        </div>
                    </div>

                    <div className='text-purplishBlue text-sm font-semibold'>
                    {props.plan?.planType === 'monthly' ? '+$2/mo' : '+$20/mo'}
                    </div>
                </li>


                <li className={`flex border border-lightGray p-3 justify-between rounded-lg items-center gap-3 ${profile ? 'border-purplishBlue bg-magnolia' : ''} cursor-pointer hover:border-purplishBlue`}
                onClick={() => {
                    setProfile(prev => !prev)
                }}
                >
                    <div className='flex  gap-3 items-center'>
                        <div className={`w-[20px] h-[20px] border border-lightGray rounded-md flex justify-center items-center ${profile ? 'bg-purplishBlue' : ''}`}>
                            {profile && <img src={check} alt="check"  className='w-[70%] h-[70%]'/>}
                        </div>
                        <div>
                            <h2 className='text-sm text-marineBlue font-bold'>Customizable profile</h2>
                            <h3 className='text-sm text-coolGray'>Custom them on your profile</h3>
                        </div>
                    </div>

                    <div className='text-purplishBlue text-sm font-semibold'>
                    {props.plan?.planType === 'monthly' ? '+$2/mo' : '+$20/mo'}
                    </div>
                </li>
            </ul>

        </div>
        <div className='mt-[2rem] h-fit self-end w-full bg-white p-5 flex justify-between md:px-0 md:w-[80%] lg:w-[70%] md:self-center'>
            <button className='text-marineBlue hover:font-medium' onClick={() => {props.setStep(2)}}>
            Go Back
            </button>
            <button className='bg-marineBlue py-2 px-4 text-white rounded-lg hover:opacity-90' onClick={nextStep}> 
                Next Step
            </button>
        </div>
    </main>
  )
}

export default PickAddOns

