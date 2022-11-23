import React from 'react'
import logo from '../assets/logo.svg'
import Navigation from './Navigation'

function Header() {
  function showMenu(){
    console.log('hi')
    document.querySelector('.menu').classList.toggle('hidden');
  }

  return (
    <header className='px-2 relative z-10'>
      <div className="container mx-auto flex justify-between items-center">
          <div className='menu h-screen w-full bg-primary-dark fixed z-10 top-0 left-0 md:hidden hidden'>
              <i className="fa-solid fa-xmark absolute top-4 right-4 text-2xl" onClick={showMenu}></i>
              <nav>
                  <Navigation />
              </nav>
          </div>
          <img src={logo} alt="logo" className='h-[68px] w-[184px] md:h-[88px] md:w-[98px]'/>
          <nav className='hidden md:block'>
              <Navigation dnone='md:inline-block' />
          </nav>
          <i className="fa-solid fa-bars text-2xl md:hidden" onClick={showMenu}></i>
      </div>
    </header>
  )
}

export default Header
