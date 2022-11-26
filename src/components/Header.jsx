import React from 'react'
import logo from '../assets/logo.svg'
import Navigation from './Navigation'

function Header() {
  function showMenu(){
    document.querySelector('.menu').classList.toggle('hidden');
  }

  return (
    <header className='px-2 relative z-10'>
      <div className="container mx-auto flex justify-between items-center">
          <div data-aos="slide-left" data-aos-once="false" className='menu h-screen w-full bg-primary-dark fixed z-10 top-0 left-0 lg:hidden hidden'>
              <i className="fa-solid fa-xmark absolute top-4 right-4 text-2xl" onClick={showMenu}></i>
              <nav>
                  <Navigation />
              </nav>
          </div>
          <img src={logo} alt="logo" className='h-[68px] w-[184px] md:h-[88px] md:w-[98px]'/>
          <nav className='hidden lg:block'>
              <Navigation dnone='lg:inline-block' />
          </nav>
          <i className="fa-solid fa-bars text-2xl lg:hidden" onClick={showMenu}></i>
      </div>
    </header>
  )
}

export default Header
