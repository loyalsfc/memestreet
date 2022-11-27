import React from 'react'
import step from '../assets/step1.png'
import anim from '../assets/anim.gif'
import image from '../assets/pepe.svg'

function HowTo() {
  return (
        <div className='bg-white h-[550px] text-black px-8 pt-8 rounded-3xl flex items-center overflow-y-hidden'>
            <div className='w-1/2 mr-10 hidden md:block'>
                <img src={step} alt="img" className='   '/>
            </div>
            <div className='w-full md:w-1/2 shrink-0'>
                <h4 className='text-4xl font-semibold text-main-color mb-8'>Step 1</h4>
                <ul className='text-lg leading-7 md:leading-10'>
                    <ol className='my-4'>1. Buy Ethereum (ETH) from a centralized exchange such as Binance, Coinbase, Hotbit, Crypto.com, etc.</ol>
                    <ol>2. Transfer the ETH from the centralized exchange to a wallet like MetaMask or Trust Wallet.</ol>
                </ul>
                <p className='text-lg  leading-10 mb-10 my-4'>If you are unsure on how to create a MetaMask wallet, click below.</p>
                <a href="https://www.youtube.com/watch?v=Af_lQ1zUnoM" class="text-main-color flex items-center " savefrom_lm_index="2" savefrom_lm="1">
                    <div class="">Tutorial</div><i class="fa-solid fa-arrow-right ml-2"></i>
                </a>
            </div>
        </div>
  )
}

function HowToSecond() {
    return (
          <div className='bg-white text-black h-[550px] px-8 pt-8 rounded-3xl flex items-center overflow-y-hidden'>
              <div className='w-1/2 mr-10 hidden md:block'>
                  <img src={anim} alt="img" className=''/>
              </div>
              <div className='w-full md:w-1/2 shrink-0'>
                  <h4 className='text-4xl font-semibold text-main-color mb-8'>Step 2 - Connect to Uniswap</h4>
                  <ul className='text-lg '>
                      <ul className='my-4'>First click on the Swap Tokens button in the bottom right of your screen.</ul>
                      <ul>In the top right, press connect wallet.</ul>
                  </ul>
                  <p className='text-lg mb-10 my-4'>Ensure you are swapping from ETH to $MS, if it doesn't autofill, paste the contract:
                        <span className='block max-w-[250px] break-words'>0xb7f0f8fe4eddc86a1f650c024db58b3f8ccd3076</span>
                  </p>
              </div>
          </div>
    )
}

function HowToThird() {
    return (
          <div className='bg-white text-black h-[550px] px-8 pt-8 rounded-3xl flex items-center overflow-y-hidden'>
              <div className='w-1/2 mr-10 hidden md:block p-24 lg:p-32'>
                  <img src={image} alt="img" className=' '/>
              </div>
              <div className='w-full md:w-1/2 shrink-0'>
                  <h4 className='text-4xl font-semibold text-main-color mb-8'>Step 3 - SWAP to $MS</h4>
                  <ul className='text-lg '>
                      <ul className='my-4'>Click on the gear in the top right of the Swap box, and set the slippage.</ul>
                      <ul>Simply click swap, confirm on your wallet and you now have $MS</ul>
                  </ul>
                  <p className='text-lg mb-10 my-4'>Happy Holding!</p>
              </div>
          </div>
    )
}

export  {HowTo, HowToSecond, HowToThird}
