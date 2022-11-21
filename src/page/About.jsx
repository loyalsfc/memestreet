import React from 'react'

function About({title, content, img, direction, margin}) {
  About.defaultProps = {
    
  }

  return (
    <div className={'flex items-center mb-16 ' + direction}>
        <div className={'w-full md:h-[368px] md:w-[409px] ' + margin}>
            <img src={img} alt="" className='block mx-auto mb-4 md:mb-0'/>
        </div>
        <div className='md:w-1/2'>
            <h3 className='text-main-color font-bold text-4xl md:text-[50px] mb-5'>{title}</h3>
            <p className='text-xl'>{content}</p>
        </div>
    </div>
  )
}

export default About    