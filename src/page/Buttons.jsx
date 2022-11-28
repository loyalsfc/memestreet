import React from 'react'

function Buttons({text, link}) {
  return (
    <a href={link}><div data-aos="slide-up" className='btn inline-block overflow-hidden rounded-full p-[1px] mr-3'>
        <button className='px-8 py-3 rounded-full text-main-color bg-primary-dark'>{text}</button>
    </div></a>
  )
}

export default Buttons
