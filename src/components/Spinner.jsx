import React from 'react'
import './Spinner.css';
const Spinner = () => {
  return (
    <div className='flex items-center flex-col space-y-2'>
        <div className="custom-loader"></div>
        <p className='text-[20px] text-bgDark font-semibold'>Loading...</p>
    </div>
  )
}

export default Spinner;