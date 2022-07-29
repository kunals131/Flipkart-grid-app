import React from 'react'
import { MdClear } from "react-icons/md";

import { Drawer } from "@mui/material";
import InputField from './ProductField';
import ProductTextArea from './ProductTextArea';
const ProductDrawer = ({isOpen,handleClose,data,isEdit}) => {
  return (
    <Drawer open={isOpen} onClose={handleClose} anchor={"right"}>
    <div className='w-[500px] p-7 h-[100vh] overflow-y-auto'>
        <div className='flex items-center justify-between w-full'>
        <div className="text-xl font-[600]">{isEdit?'Edit #55666':'Add Product'}</div>
            <div className="">
              <MdClear size={24} />
            </div>
        </div>
        <div className='mt-6'>
            <div className='flex items-center gap-5'>
                <div className='w-[140px] flex items-center justify-center h-[140px] bg-flipkartBlue'>
                    <input type='file' className='opacity-0'/>
                </div>
                <div className='w-[270px] space-y-4'>
                    <InputField label='Product Title'/>
                </div>
            </div>
            <div className='mt-5 space-y-6 w-full'>
                
            <InputField label='Price'/>
                <InputField label='Category'/>
           
                <InputField label='Warranty'/>
                <ProductTextArea label='Description'/>
            </div>
            <div className='mt-8 flex justify-end'>
                <div className='w-fit bg-flipkartBlue px-6 py-1 text-white font-semibold'>Save</div>
            </div>
        </div>
    </div>
    </Drawer>
  )
}

export default ProductDrawer