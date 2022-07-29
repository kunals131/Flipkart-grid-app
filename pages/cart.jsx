import React, { useState } from 'react'
import Header from '../components/Header'
import {RiCheckboxCircleFill} from 'react-icons/ri';
const ShippingType = ({value,shippingMethod,setShippingMethod,type,duration,price})=>{
    const selected = value===shippingMethod;
    return (
        <div onClick={()=>setShippingMethod(value)} className={`${selected?'border-flipkartBlue border-[2px]':'border-gray-400 hover:border-flipkartBlue hover:border-[2px]'} transition-all px-6 py-3 flex min-w-[350px] cursor-pointer items-center justify-between border-[1px] `}>
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

const Cart = () => {
    const [shippingMethod,setShippingMethod] = useState('');
  return (
    <>
    <Header/>
    <div className='grid grid-cols-[3fr_1fr] p-8 px-12'>
        <div>
            <div className='flex gap-5'></div>
            <div className='font-[500] text-xl'>Shipping Method</div>
            <div className='mt-5 flex items-center'>
                <ShippingType duration='2-3 days' type="Standard" price="FREE" value='standard' setShippingMethod={setShippingMethod} shippingMethod={shippingMethod}/>
                <ShippingType type="Express" duration='1 day' price="₹50" value='express' setShippingMethod={setShippingMethod} shippingMethod={shippingMethod}/>
            </div>
            <div className='mt-10'>
            <div className='font-[500] text-xl'>Shipping Address</div>

            </div>
        </div>
        <div>
            
        </div>
    </div>
    </>
  )
}

export default Cart