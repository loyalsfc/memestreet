import React from 'react'
import logo from '../assets/image3.png'

function Utilities({title, content, color}) {
  return (
        <div className='text-center rounded-[2.5rem] bg-[#262626] py-6 px-11 hover:ring z-10'>
            <img src={logo} alt="" height='297' className='mx-auto'/>
            <h4 className={'text-semibold text-2xl ' + color + ' my-3'}>{title}</h4>
            <p className='text-lg'>{content}</p>
        </div>
  )
}

export default Utilities
