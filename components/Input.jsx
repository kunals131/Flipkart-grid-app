import { TextField } from '@mui/material'
import React from 'react'

const Input = ({label, ...props}) => {
  return (
    <div>
        <TextField label={label} {...props} sx={{width : '100%'}}/>
    </div>
  )
}

export default Input