import React from 'react'
import Product from './Product'

const ProductsContainer = () => {
  return (
    <div className='bg-bgPrimary-700 px-6 py-3 text-textPrimary'>
        <div className='font-[500] text-textPrimary text-2xl py-3 pb-4'>All Products <span className='ml-2 text-sm text-gray-500 font-normal'>(Showing 64 products out of 500)</span></div>
        <hr  className='border-gray-500'/>
        <div className='mt-4 space-y-5'>
            {/* Products */}
            <Product/>
            <Product/>
            <Product/>
        </div>
    </div>
  )
}

export default ProductsContainer