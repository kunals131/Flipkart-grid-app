import React, { useEffect, useState } from 'react'
import { fetchAllSellerProductsAPI } from '../../../APIs/products';
import SearchBar from '../../../components/SearchBar'
import ProductDrawer from '../../../components/Seller/ProductDrawer';
import SellerPanelLayout from '../../../components/Seller/SellerPanelLayout'
import { verifyAuthentication } from '../../../utils/verifyAuth';

export const getServerSideProps = async(ctx) => {
  const auth = verifyAuthentication(ctx.req);
  if (auth.state && auth.decodedData.user.role==='seller') {
    try {
      const fetchProducts = await fetchAllSellerProductsAPI(ctx.query.id, auth.token);
    return {props : {products : fetchProducts.data.products, user : auth.decodedData.user}};
    }catch(err) {
      return {
        notFound : true
      }
    }
  }
  return {
    redirect : {
      destination : '/auth'
    }
  }
};


const ProductItem = ()=>{
  const [isOpen,setIsOpen] = useState(false);
  const handleClose = ()=>setIsOpen(false);
  return (
      <>
      <ProductDrawer isOpen={isOpen} isEdit={true} handleClose={handleClose}/>
      <div onClick={()=>setIsOpen(true)} className='px-8 grid grid-cols-[1.4fr_2fr_1fr_1fr_1fr] hover:bg-gray-100 transition-all items-center py-5 border-b-[1px] border-gray-300'>
          <div className='flex items-center gap-3'>
              <div className='w-[45px] h-[45px] bg-flipkartBlue rounded-md'></div>
                  <div className='font-[600] text-sm'>Iphone 11 4GB/6GB</div>       
          </div>
          <div className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit.....</div>
          <div className=' flex justify-end w-full px-3 py-[3px] h-fit rounded-md text-sm cursor-pointer'>1 year</div>
          <div className='flex justify-end'>Category</div>
          <div className='text-green-600 flex justify-end'>₹ 200000</div>
      </div>
      </>
  )
}
const Inventory = ({products,user}) => {
  const [isOpen,setIsOpen] = useState(false);
  const handleClose = ()=>setIsOpen(false);
  // useEffect(()=>{
  // }, [])
  return (
    <SellerPanelLayout>
       <ProductDrawer isOpen={isOpen} isEdit={false} handleClose={handleClose}/>
         <div className='w-full h-full'>
            <div className='py-5'>
                <div className='px-6 w-full'>
                    <div className='mb-5 text-xl font-[500]'>Inventory</div>
                    <div className='flex gap-5'>
                <SearchBar/>
                <button className='px-5 bg-flipkartYellow rounded-md' onClick={()=>setIsOpen(true)}>Add</button>
                </div>
                </div>
                <div className='mt-2 border-b-[1px] border-b-flipkartBlue'>
                  <div className='px-8 grid grid-cols-[1.4fr_2fr_1fr_1fr_1fr]  transition-all items-center py-5'>
                    <div>Product</div>
                    <div className=''>Description</div>
                    <div className='justify-end w-full flex'>Warranty</div>
                    <div className='justify-end w-full flex'>Category</div>
                    <div className='justify-end w-full flex'>Price</div>
                  </div>
                </div>
                <div className='mt-0'>
                  <ProductItem/>
                  <ProductItem/>
                  <ProductItem/>
                </div>
            </div>
        </div>
    </SellerPanelLayout>
  )
}

export default Inventory