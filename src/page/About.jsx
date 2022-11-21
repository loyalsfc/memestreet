import React from 'react'

function About({title, content, img, direction}) {
  return (
    <div className={'flex items-center ' + direction}>
        <div className='h-[488px] w-[488px] mr-[120px] border'>
            <img src={img} alt=""/>
        </div>
        <div>
            <h3 className='text-main-color font-bold text-[50px] mb-5'>{title}</h3>
            <p className='text-xl'>{content}</p>
        </div>
    </div>
  )
}

export default About    