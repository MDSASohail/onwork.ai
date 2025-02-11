import { Cancel, Close } from '@mui/icons-material'
import React from 'react'

function EachFilter({criteria, value, operation}) {
  return (
    <div className='border-borderColor border-2 bg-violet-200 rounded-2xl pl-5 pr-4 py-1 m-1 '>
        
        <span className='text-textLightColor font-medium'>{criteria} {operation}</span> <span className='text-black font-medium'> {value}</span>
        <button className="font-medium text-xl ml-3 "
        ><Close/></button>
    </div>
  )
}

export default EachFilter