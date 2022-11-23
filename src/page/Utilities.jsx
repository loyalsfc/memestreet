import React from 'react'
import logo from '../assets/image3.png'

function Utilities({title, content, color}) {
  return (
        <div data-aos="zoom-in" data-aos-duration="600" className='text-center rounded-[2.5rem] bg-[#262626] py-6 px-11 hover:ring z-10'>
            <img src={logo} data-aos="slide-up" data-aos-delay="600" alt="" className='mx-auto h-[150px]'/>
            <h4 data-aos="slide-up" data-aos-delay="700" className={'text-semibold text-2xl ' + color + ' my-3'}>{title}</h4>
            <p data-aos="zoom-in" data-aos-delay="700" className='text-lg'>{content}</p>
        </div>
  )
}

export default Utilities
