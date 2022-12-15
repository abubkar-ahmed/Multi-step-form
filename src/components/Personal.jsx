import React, { useEffect } from 'react'
import { useState } from 'react';

function Personal(props) {

    const [fullName , setfullName] = useState('');
    const [email , setEmail] = useState('');
    const [phone , setPhone] = useState('');

    const [errName , setErrName] = useState('');
    const [errEmail , setErrEmail] = useState('');
    const [errPhone , setErrPhone] = useState('');

    const validateName = () => {
        if(fullName) {
            const rgxName= /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/;
            if(!rgxName.test(fullName)){
                setErrName("Please Enter Valied Name");
                return false;
            } else{
                return true ;
            }
        }else{
            setErrName('This Field Is Requred');
            return false ;
        }
    }

    const validateEmail = () => {
        if(email){
            const rgxEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            if(!rgxEmail.test(email)){
                setErrEmail('Please Enter Valied Email');
                return false ;
            }else{
                return true ;
            }
        }else{
            setErrEmail('This Field Is Requred');
            return false ;
        }
    }
    const validatePhone = () => {
        if(phone){
            const rgxPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/ ;
            if(!rgxPhone.test(phone)){
                setErrPhone('Please Enter Valied Phone Number');
                return false;
            }else{
                return true ;
            }
        }else{
            setErrPhone('This Field Is Requred');
            return false ;
        }
    }
    
    useEffect(() => {
        setErrName('');
    },[fullName]);

    useEffect(() => {
        setErrEmail('');
    },[email]);

    useEffect(() => {
        setErrPhone('');
    },[phone]);

    const nextStep = () => {
        if(validateName() && validateEmail() && validatePhone()){
            props.setStep(2)
        }
    }


  return (
    <main className='bg-lightGray h-full relative md:bg-white md:w-full  flex justify-center min-h-[600px] md:min-h-[unset] md:flex-col md:items-center md:justify-between'>
        <div className='absolute bg-white top-[-10%] w-[90%] left-[5%] flex flex-col rounded-xl p-5 gap-2 md:static md:w-[70%] md:px-0 lg:w-[70%] min-h-[550px] md:min-h-[unset]'>
            <h1 className='text-[28px] font-bold text-marineBlue'>Personal info</h1>
            <p className='text-coolGray font-normal text-[16px] md:mb-5'>
                Please Provide Your Name, Email Adress, And Phone Number.
            </p>
            <form className='flex flex-col '>
                <div className='flex  justify-between mb-2'>
                    <label htmlFor='name' className='text-marineBlue '>Name</label>
                    {errName && 
                    <p className='text-strawberryRed font-normal'>{errName}</p>
                    }
                </div>
                <input type='text'  placeholder='e.g Stephan King' id='name' className={`border border-coolGray py-[5px] px-[7px] rounded-md mb-[5px] focus:outline-none md:mb-5 ${errName ? 'border-strawberryRed' : null}`}
                onChange={(e) => {
                    setfullName(e.target.value);
                }}
                name='fullName'
                value={fullName}
                />

                <div className='flex  justify-between mb-2'>
                    <label htmlFor="email" className='text-marineBlue '>Email</label>
                    {errEmail && 
                    <p className='text-strawberryRed font-normal'>{errEmail}</p>
                    }
                </div>
                <input type='email' id='email' placeholder='e.g.stephanking@lorem.com' className={`border border-coolGray py-[5px] px-[7px] rounded-md mb-[5px] focus:outline-none md:mb-5 ${errEmail ? 'border-strawberryRed' : null}`}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
                name='email'
                value={email}
                />

                <div className='flex  justify-between mb-2'>
                    <label htmlFor='phone' className='text-marineBlue '>Phone Number</label>
                    {errPhone && 
                    <p className='text-strawberryRed font-normal'>{errPhone}</p>
                    }
                </div>
                <input type='text' max='10' placeholder='e.g.+1234567890' id='phone' className={`border border-coolGray py-[5px] px-[7px] rounded-md mb-[5px] focus:outline-none md:mb-5 ${errPhone ? 'border-strawberryRed' : null} `}
                onChange={(e) => {
                    setPhone(e.target.value)
                }}
                name='phone'
                value={phone}
                />
            </form>
        </div>
            <div className='mt-[2rem] h-fit self-end w-full bg-white p-5 flex justify-end md:px-0 md:w-[80%] lg:w-[70%] md:self-center'>
            <button className='bg-marineBlue py-2 px-4 text-white rounded-lg hover:opacity-90' onClick={nextStep}> 
                Next Step
            </button>
        </div>
    </main>
  )
}

export default Personal