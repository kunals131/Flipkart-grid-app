import React, { useState } from 'react'
import SellerPanelLayout from '../../../components/Seller/SellerPanelLayout'
import {FiSearch} from 'react-icons/fi'
import OrderDrawer from '../../../components/Seller/OrderDrawer'
const SearchBar = ()=>{
    return (
        <div className='flex items-center relative w-[50%]'>
            <div className='absolute left-2 text-gray-500'>
            <FiSearch/>
            </div>
            <input type='text' placeholder='Search Order' className='w-full pl-9 outline-none bg-bgPrimary-600 py-2 rounded-md'/>
        </div>
    )
}

const OrderItem = ()=>{
    const [isOpen,setIsOpen] = useState(false);
    const handleClose = ()=>setIsOpen(false);
    return (
        <>
        <OrderDrawer isOpen={isOpen} handleClose={handleClose}/>
        <div onClick={()=>setIsOpen(true)} className='px-8 grid grid-cols-[2fr_1fr_1fr_1fr_1fr] hover:bg-gray-100 transition-all items-center py-5 border-b-[1px] border-gray-300'>

            <div className='flex items-center gap-3'>
                <div className='w-[45px] h-[45px] bg-flipkartBlue rounded-md'></div>
                <div className='text-sm'>
                    <div className='font-[600]'>Iphone 11 and 13 others..</div>
                    <div className='text-gray-400 mt-[3px]'>Pratham Rasal</div>
                </div>
            </div>
            <div className=''>31 March 2022, 13:00 PM</div>
            <div className='text-white bg-flipkartBlue px-3 py-[3px] h-fit w-fit rounded-md text-sm cursor-pointer'>In Progress</div>
            <div className=''>Indore, India</div>
            <div className='text-green-600'>₹ 20</div>
        </div>
        </>
    )
}

const SellerPanel = () => {
  
  return (
    <SellerPanelLayout>
        <div className='w-full h-full'>
            <div className='py-5'>
                <div className='px-6 w-full'>
                <SearchBar/>
                </div>
                <div className='mt-7'>
                    <OrderItem/>
                    <OrderItem/>
                    <OrderItem/>
                </div>
            </div>
        </div>
    </SellerPanelLayout>
  )
}

export default SellerPanel