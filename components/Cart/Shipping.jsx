import React, { useState } from 'react'

import {RiCheckboxCircleFill} from 'react-icons/ri';
import Input from '../Input';
const ShippingType = ({value,shippingMethod,setShippingMethod,type,duration,price})=>{
    const selected = value===shippingMethod;
    return (
        <div onClick={()=>setShippingMethod(value)} className={`${selected?'border-flipkartBlue border-[3px]':'border-gray-400 hover:border-flipkartBlue hover:border-[2px]'} transition-all px-6 py-3 flex w-full cursor-pointer items-center justify-between border-[1px] `}>
            <div className=''>
                <div className='text-lg font-[500]'>{type}</div>
                <div className='text-gray-500 text-sm'>{duration} delivery</div>
            </div>
            <div className=' flex gap-2 items-center'>
                <div className='text-gray-700'>{price}</div>
               {selected&&<div className='text-flipkartBlue'><RiCheckboxCircleFill size={24}/></div>}
            </div>

        </div>
    )
}


const Shipping = () => {
    const [shippingMethod,setShippingMethod] = useState('');
  return (
    <div className='w-full'>
    <div className='flex gap-5'></div>
    <div className='font-[500] text-xl'>Shipping Method</div>
    <div className='mt-5 grid grid-cols-2 w-full items-center'>
        <ShippingType duration='2-3 days' type="Standard" price="FREE" value='standard' setShippingMethod={setShippingMethod} shippingMethod={shippingMethod}/>
        <ShippingType type="Express" duration='1 day' price="₹50" value='express' setShippingMethod={setShippingMethod} shippingMethod={shippingMethod}/>
    </div>
    <div className='mt-10'>
    <div className='font-[500] text-xl'>Shipping Address</div>
    <div className='mt-5 w-full flex flex-col gap-5'>
        <Input label="Street Address"/>
        <Input label="Apt/Suit no."/>
        <div className='grid grid-cols-2 gap-5'>
            <Input label='Country'/>
            <Input label='City'/>
        </div>
        <div className='grid grid-cols-2 gap-5'>
            <Input label='Zip Code'/>
            <Input label='State'/>
        </div>
    </div>
    </div>
    <div className='mt-7 flex items-center justify-between'>
        <div className='text-gray-500 cursor-pointer hover:text-gray-800 transition-all'>Keep Shopping</div>
        <div className='w-fit cursor-pointer px-6 py-3 font-[500] rounded-sm hover:bg-[#1f70d3] bg-flipkartBlue text-white'>Continue to Payment</div>
    </div>
</div>
  )
}

export default Shipping