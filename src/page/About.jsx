import React from 'react'

function About({title, content, img, direction, margin}) {
  About.defaultProps = {
    
  }

  return (
    <div className={'items-center mb-16 bg-[#262626]/[0.8] border border-[#262626] p-8  lg:p-16 backdrop-blur rounded-[3rem] z-10'}>
        <div className=''>
            <h3 data-aos="slide-up" className='text-main-color font-bold text-4xl  mb-5'>{title}</h3>
            <p data-aos="slide-down" className='text-lg'>{content}</p>
        </div>
    </div>
  )
}

export default About    