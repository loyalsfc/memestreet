import React from 'react'

function Tokenomics({title, content}) {
  return (
    <div className='bg-[#2E2E2E] rounded-[2.5rem] py-16 z-10 w-full'>
        <h5 className='font-bold text-3xl mb-2.5'>{title}</h5>
        <p className='font-semibold overflow-x-hidden px-2 w-full text-clip'>{content}</p>
    </div>
  )
}

export default Tokenomics   