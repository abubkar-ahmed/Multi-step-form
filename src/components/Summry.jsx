import React from 'react'

function Summry(props) {
    const plan = props.plan;
    const addOns = props.addOns;

    const finalStep = () => {
        props.setStep(5)
    }
  return (
    <main className='bg-lightGray h-full relative md:bg-white md:w-full  flex justify-center min-h-[600px] md:min-h-[unset] md:flex-col md:items-center md:justify-between'>
        <div className='absolute bg-white top-[-10%] w-[90%] left-[5%] flex flex-col rounded-xl p-5 gap-2 md:static md:w-[70%] md:px-0 lg:w-[70%] min-h-[550px] md:min-h-[unset]'>
            <h1 className='text-[28px] font-bold text-marineBlue'>
                Finishing up
            </h1>
            <p className='text-coolGray font-normal text-[16px] md:mb-5'>
                Double-check everything looks OK before confirming.
            </p>

            <ul className='bg-magnolia p-4 rounded-lg'>
                <li className='flex justify-between items-center py-2 border-b border-lightGray mb-2'>
                    <div className='capitalize'>
                        <h2 className='text-base font-bold text-marineBlue'>
                            {`${plan?.selected}(${plan?.planType})`}
                        </h2>
                        <button className='underline decoration-coolGray text-coolGray hover:text-purplishBlue hover:decoration-purplishBlue'
                        onClick={() => props.setStep(2)}
                        >
                            Change
                        </button>
                    </div>
                    <div className='text-marineBlue font-bold'>
                        {`$${plan.price}/${plan.planType === 'monthly' ? 'mo' : 'yr'}`}
                    </div>
                </li>
                {addOns.service?.status && 
                    <li className='flex justify-between items-center  '>
                        <div className='text-coolGray'>
                            Online service
                        </div>
                        <div className='text-marineBlue font-semibold'>
                            {`+$${addOns.service?.price}/${plan.planType === 'monthly' ? 'mo' : 'yr'}`}
                        </div>
                    </li>   
                }
                {addOns.larger?.status && 
                    <li className='flex justify-between items-center  '>
                        <div className='text-coolGray'>
                            Larger Storage
                        </div>
                        <div className='text-marineBlue font-semibold' >
                            {`+$${addOns.larger?.price}/${plan.planType === 'monthly' ? 'mo' : 'yr'}`}
                        </div>
                    </li>   
                }
                {addOns.profile?.status && 
                    <li className='flex justify-between items-center  '>
                        <div className='text-coolGray'>
                            Customizable profile
                        </div>
                        <div className='text-marineBlue font-semibold'>
                            {`+$${addOns.profile?.price}/${plan.planType === 'monthly' ? 'mo' : 'yr'}`}
                        </div>
                    </li>   
                }

            </ul>

            <div className='p-4 flex justify-between'>
                <div className='text-coolGray' >
                    Total(per {plan.planType === 'monthly' ? 'month' : 'year'})
                </div>
                <div className='text-purplishBlue font-bold '>
                    +${plan.price + addOns.service.price + addOns.larger.price + addOns.profile.price}/{plan.planType === 'monthly' ? 'mo' : 'yr'}
                </div>
            </div>

        </div>

        <div className='mt-[2rem] h-fit self-end w-full bg-white p-5 flex justify-between md:px-0 md:w-[80%] lg:w-[70%] md:self-center'>
            <button className='text-marineBlue hover:font-medium' onClick={() => props.setStep(3)}>
            Go Back
            </button>
            <button className='bg-purplishBlue py-2 px-4 text-white rounded-lg hover:opacity-70' onClick={finalStep}> 
                Confirm
            </button>
        </div>
    </main>
  )
}

export default Summry