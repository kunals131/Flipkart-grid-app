import React from 'react'
import Input from '../Input'

const Payment = () => {
  return (
    <div>
       <div className='text-2xl font-[500] '>Apply Coupon</div>
       <div className='mt-6 grid grid-cols-[2.7fr_1fr] gap-5'>
        <Input label='Coupon Code'/>
        <div className='border-[2px] text-flipkartBlue border-flipkartBlue cursor-pointer py-2 flex items-center justify-center font-[500] rounded-md w-full text-center'>Apply</div>
       </div>
       <div className='mt-12'>
        <div className='px-5 py-2 bg-flipkartBlue w-fit  text-white  cursor-pointer rounded-md'>Place Order</div>
       </div>
    </div>
  )
}

export default Payment