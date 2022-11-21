import React from 'react'

function Taxes({title}) {
  return (
    <div className='mb-4'>
        <h5 className='font-semibold text-xl'>1% {title}</h5>
        <div className='bg-[#121212] h-3 rounded-[1.25rem] overflow-hidden'>
            <div className='bg-main-color w-[10%] rounded-[1.25rem] h-full'></div>
        </div>
    </div>
  )
}

export default Taxes
