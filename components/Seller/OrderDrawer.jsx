import { Drawer } from '@mui/material'
import React from 'react'

const OrderDrawer = ({isOpen,handleClose}) => {
  return (
    <div>
        <Drawer open={isOpen} onClose={handleClose} anchor={'right'}>
            <div className='w-[500px]'>
                
            </div>
        </Drawer>
    </div>
  )
}

export default OrderDrawer