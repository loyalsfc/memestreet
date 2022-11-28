import React from 'react'
import logo from '../assets/logo.svg'
import Socials from '../page/Socials'
import Navigation from './Navigation'

function Footer() {
  return (
    <footer className='bg-black py-7 z-20 border-t border-t-white/[0.04]'>
        <div className="container mx-auto flex justify-center flex-col">
            <img src={logo} alt="" className='h-[114px] w-[127px] mx-auto' /> 
            <nav className='mx-auto my-8 md:my-[54px] text-center -mt-10'><Navigation dnone='hidden' /></nav>   
            <div className='mx-auto flex flex-col md:flex-row justify-center'>
                <a href='https://app.uniswap.org/#/swap?outputCurrency=0xb7f0f8fe4eddc86a1f650c024db58b3f8ccd3076'><button className='btn-primary mr-4'>Buy Now</button></a>
                <a href='https://www.dextools.io/app/ether/pair-explorer/0x1B8EE77772212f6c9D6eDb2e04B26C942ea36f12'><button className='btn-primary'>Chart</button></a>
            </div>
            <div className='flex justify-evenly mx-auto my-8 md:my-[52px] w-3/4 md:w-1/3'><Socials hidden='hidden mx-4' /></div>
            <p className='text-center'>© COPYRIGHT - MEME STREET 2022</p>
        </div>
    </footer>
  )
}

export default Footer   