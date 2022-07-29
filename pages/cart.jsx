import React, { useState } from 'react'
import Header from '../components/Header'
import {RiCheckboxCircleFill} from 'react-icons/ri';
import Input from '../components/Input';
import Shipping from '../components/Cart/Shipping';
import Payment from '../components/Cart/Payment';
import OrderPlaced from '../components/Cart/OrderPlaced';

const OrderItem = () => {
    return (
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-5">
          <div className="w-[44px] bg-flipkartYellow rounded-md h-[44px]"></div>
          <div className="">
            <div className="font-[500] text-sm">Iphone 11 (4GB/64GB)</div>
            <div className="text-sm text-gray-400">4GB - 64GB</div>
          </div>
        </div>
        <div className="text-sm">₹350</div>
      </div>
    );
  };

const Cart = () => {

  const [step,setStep] = useState(0);
    
  return (
    <>
    <Header/>
    {step===2?<OrderPlaced/>:<div className='grid grid-cols-[3fr_1.6fr] gap-16 p-8 px-28'>
      <div>
        {step==0&&<Shipping step={step} setStep={setStep}/>}
        {step==1&&<Payment step={step} setStep={setStep}/>}
      </div>
        <div>
            <div className='flex justify-between items-center'>
                <div className='text-2xl font-[500] '>Summary</div>
                <div className='w-[40px] h-[40px] rounded-xl bg-gray-300 flex items-center justify-center font-[500] text-gray-700'>2</div>
            </div>
            <div className='mt-7 space-y-7 pb-8 border-b-[1px] border-gray-300'>
                <OrderItem/>
                <OrderItem/>
            </div>
            <div className='mt-6 space-y-2'>
            <div className="flex justify-between items-center">
                <div className="font-[500]">Sub Total</div>
                <div>₹1250</div>
              </div>
            <div className="flex justify-between items-center pb-5 border-b-[1px] border-gray-300">
                <div className="font-[500]">Discount</div>
                <div>₹0</div>
              </div>
            <div className="flex justify-between items-center pt-5">
                <div className="font-[600] text-lg">Total</div>
                <div className='font-[600] text-lg'>₹1250</div>
              </div>
            </div>
        </div>
    </div>}
    </>
  )
}

export default Cart