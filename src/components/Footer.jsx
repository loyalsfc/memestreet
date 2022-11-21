import React from 'react'
import logo from '../assets/logo.png'
import Socials from '../page/Socials'
import Navigation from './Navigation'

function Footer() {
  return (
    <footer className='bg-black py-7 z-20 border-t border-t-white/[0.04]'>
        <div className="container mx-auto flex justify-center flex-col">
            <img src={logo} alt="" className='h-[114px] w-[127px] mx-auto' /> 
            <nav className='mx-auto my-8 md:my-[54px] text-center -mt-10'><Navigation dnone='hidden' /></nav>   
            <div className='mx-auto flex flex-col md:flex-row justify-center'>
                <button className='btn-primary'>Buy Now</button>
                <button className='btn-primary'>Poo Coin</button>
                <button className='btn-primary'>Contact Us</button>
            </div>
            <div className='flex justify-between mx-auto my-8 md:my-[52px] w-3/4 md:w-1/3'><Socials hidden='hidden mx-4' /></div>
            <p className='text-center'>© COPYRIGHT - MEME STREET 2022</p>
        </div>
    </footer>
  )
}

export default Footer   