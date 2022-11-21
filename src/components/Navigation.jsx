import React from 'react'

function Navigation() {
  return (
            <ul className='font-medium text-white/[0.8] flex items-start justify-center mt-12 md:mt-0 flex-col md:block'>
                <li className='my-6 md:my-0 md:inline-block mx-9 md:mx-4 lg:mx-9 md:first:ml-0 hover:text-main-color  last:mr-0'>Home</li>
                <li className='my-6 md:my-0 md:inline-block mx-9 md:mx-4 lg:mx-9 md:first:ml-0 hover:text-main-color last:mr-0'>About us</li>
                <li className='my-6 md:my-0 md:inline-block mx-9 md:mx-4 lg:mx-9 md:first:ml-0 hover:text-main-color last:mr-0'>Why Gwolf</li>
                <li className='my-6 md:my-0 md:inline-block mx-9 md:mx-4 lg:mx-9 md:first:ml-0 hover:text-main-color last:mr-0'>Tokenomics</li>
                <li className='my-6 md:my-0 md:inline-block mx-9 md:mx-4 lg:mx-9 md:first:ml-0 hover:text-main-color last:mr-0'>Roadmap</li>
                <li className='my-6 md:my-0 md:inline-block mx-9 md:mx-4 lg:mx-9 md:first:ml-0 last:mr-0 rounded-full bg-main-color text-[#121212] px-8 md:px-6 lg:px-8 py-3 hover:opacity-75'>Buy now</li>
            </ul>
  )
}

export default Navigation
