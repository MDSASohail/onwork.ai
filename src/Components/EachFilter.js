import React from 'react'

function EachFilter({criteria, value, operation}) {
  return (
    <div className='border-borderColor bg-violet-200 rounded-xl pl-5 pr-4 py-1 m-1 '>
        
        <span className='text-borderColor font-medium'>{criteria} {operation}</span> <span className='text-black font-medium'> {value}</span>
        <button className="font-medium text-xl ml-3 "
        >X</button>
    </div>
  )
}

export default EachFilter