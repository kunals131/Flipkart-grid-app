import React, { useState } from 'react'
import FlipkartIcon from '../public/assets/icon.svg';
import WhiteLogo from '../public/assets/whitelogo.svg';
import Image from 'next/image'
import {FiUnlock} from 'react-icons/fi';
import InputField from '../components/InputField';
import SelectInput from '../components/SelectRole';
const Auth = () => {
    const [isLogin,setIsLogin] = useState(true);
    const [form,setForm] = useState({
        fullName : '',
        email : '',
        password : '',
        confirmPassword : '',
        businessName : '',
        role : 'customer',
        phoneNumber : '',
    })
    const handleChange = (e)=>{
        setForm(prev=>({...prev,[e.target.name] : e.target.value}));
    }
  return (
    <div className='w-full h-[100vh]  px-12 flex items-center'>
        <div>
        <div className='text-3xl flex items-center gap-4 font-[500] text-textPrimary'>
        <FiUnlock size={36} className='text-flipkartYellow' />
        <div>{isLogin?'Login':'Sign Up'}</div>
        </div>
        <div className='mt-3 text-gray-400'>Get your orders, Reccomendations & wishlist items</div>

        <form className={`${isLogin?'w-[380px]':'w-[450px]'} transition-all mt-6  space-y-4`}>
            {!isLogin&& <InputField value={form.fullName} onChange={handleChange} name='fullName' label={'Full Name'} placeholder='Enter your Full Name' />}
            <InputField value={form.email} onChange={handleChange} name='email' label={'Email'} placeholder='Enter your Email' />
            {!isLogin&& <InputField value={form.phoneNumber} onChange={handleChange} name='phoneNumber' label={'Phone Number'} placeholder='Enter your phone Number' />}
            <div className='flex items-center gap-2'>
            {!isLogin&& <SelectInput value={form.role} name='role' onChange={handleChange} label={'Role'} placeholder='Enter your phone Number' />}
            {!isLogin&&form.role==='seller'&& <InputField value={form.businessName} onChange={handleChange} name='businessName' label={'Business Name'} placeholder='Business Name'/>}
            </div>
           <div className='flex items-center gap-2'>
           <InputField onChange={handleChange} value={form.email} name='password' label={'Password'} placeholder='Enter your Password'/>
           {!isLogin&&<InputField onChange={handleChange} value={form.confirmPassword} name='confirmPassword' label={'Confirm Password'} placeholder='Enter your Password'/>}

            </div>


            <div className='pt-2 cursor-pointer'>
            <div  className='bg-white w-fit px-8 py-2 rounded-md'>{isLogin?'Login':'Sign Up'}</div>
            </div>
        </form>
        <div className='mt-7 text-textPrimary'>Don't have a account? <span className='ml-1 font-semibold cursor-pointer' onClick={()=>setIsLogin(prev=>!prev)}>{isLogin?'Sign Up':'Login'}</span></div>
        </div>
    </div>
  )
}

export default Auth