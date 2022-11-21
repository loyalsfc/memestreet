import React from 'react'
import Header from '../components/Header'
import About from './About.jsx'

import hero from '../assets/image.png'
import image from '../assets/image4.png'
import wolf from '../assets/image3.png'
import Buttons from './Buttons'
import Utilities from './Utilities'
import Tokenomics from './Tokenomics'
import Taxes from './Taxes'
import Footer from '../components/Footer'
import Socials from './Socials'

function Home() {
  return (
    <div>
          <Header />
          <section className='hero bg-white/[0.05] relative px-2 md:px-0'>
          <div className='absolute bg-[#EBBC15]/[0.49] h-[154px] w-[330px] rounded-full blur-[100px] -right-[215px] -top-[77px]'></div>
            <div className="container mx-auto flex items-center flex-col-reverse md:flex-row pt-11">
              <div>
                <h5 className='text-lg font-semibold'>The Meme</h5>
                <h1 className='font-bold text-3xl sm:text-[4rem]  text-main-color leading-[120%]'>Meme Street</h1>
                <p>Meme Street is a 'Privacy Blockchain' born to implement one utmost needed feature to the Blockchain Technologies i.e. Privacy.</p>
                <p className='mb-4'>Meme Street has a token of same name launching on Ethereum Smart Chain.</p>
                <Buttons text='Buy Now'/>
                <Buttons text='Poocoin'/>
                <Buttons text='Audit'/>
                <Buttons text='KYC'/>
              </div>
              <img src={hero} className="md:w-1/2"/>
              <div className='absolute bg-[#5C4A07] h-[154px] w-[330px] rounded-full blur-[100px] -left-[215px] -bottom-[77px]'></div>
            </div>
          </section>
          <section>
            <div className="container mx-auto flex py-[56px] px-2 md:justify-center overflow-x-scroll scrollhide">
              <Socials />
            </div>
          </section>
          <main className='relative px-2 md:px-0'>
            <div className='bg-main-color h-[682px] w-[682px] rounded-full absolute blur-[400px] -right-[341px] -top-[100px]'></div>
            <div className="container mx-auto pb-[200px]">
              <About 
                title="ABOUT" 
                content="Meme Street is a 'Privacy Blockchain' born to implement one utmost needed feature to the Blockchain Technologies i.e. Privacy. Meme Street has a token of same name launching on Ethereum Smart Chain. Let's create a community driven meme token that aim to build a strong, caring, and cooperative community of holders. Let’s become higher, faster, and stronger together." 
                img={image} 
                direction = "flex-col md:flex-row"
                margin = 'md:mr-auto'
              />
              <About 
                title="VISION" 
                content="Meme Street offers a blockchain with all the same features AND with customizable privacy at your fingertips. It provides a unique and very safe way to protect data. We will combine the MEME trend with realistic token economics, which is something more than you can ever imagine. For us, community is extremely significant." 
                img={wolf} 
                direction = 'flex-col md:flex-row-reverse'
                margin='ml-auto'
              />
              <About 
                title="MISSION" 
                content="Blockchains expose data to everyone with an internet, Meme Street is on a mission to fix this by giving everyone the freedom to choose what they share. It’s built on the Binance smart chain and will give you the best experience that you can ever have in the crypto world. Simply join the pack, enjoy the ride, watch your Street Meme value grow, and earn money." 
                img={image} 
                direction = "flex-col md:flex-row"
                margin = 'md:mr-auto'
              />
            </div>
            <div className='bg-main-color h-[682px] w-[682px] rounded-full absolute blur-[400px] -left-[341px] -bottom-[100px]'></div>
          </main>
          <section className='bg-linear px-2 md:px-0'>
            <div className="container mx-auto pt-16">
              <h2 className='text-center font-bold text-4xl md:text-[50px] mt-12 mb-9'>WHY MEME STREET</h2>
              <div className='grid md:grid-cols-3 gap-4'>
                <Utilities 
                  title="A better internet starts with better privacy." 
                  content='Our mission is to fix this by giving everyone the freedom to choose what they share. Imagine a blockchain with all the same features AND with customizable privacy at your fingertips.'
                  color='text-[#F30303]'
                />
                <Utilities 
                  title="Own the web3 truly." 
                  content='Web3 is about owning and exploring your creativity ; Selectively reveal content and ownership with Secret NFTs to control access, create hidden features, and make art and entertainment not possible elsewhere.'
                  color='text-[#FAFA01]'
                />
                <Utilities 
                  title="Limitless possiblities to your Groundbreaking Ideas" 
                  content='Enter and Own the new space with customizable privacy, and build revolutionary apps in areas ranging from Gaming to Social Interaction to Art and Most importantly Finance.'
                  color='text-[#2AAAE1]'
                />
              </div>
            </div>
          </section>
          <section className='relative'>
            <div className="container text-main-color mx-auto py-[100px] md:py-[200px] px-2">
            <div className='bg-main-color h-[682px] w-[682px] rounded-full absolute blur-[400px] -right-[341px] -top-1/2'></div>
              <h2 className='text-center font-bold text-4xl mb-[56px] md:text-[50px]'>Tokenomics</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-center z-10'>
                <Tokenomics 
                  title="TOTAL SUPPLY" 
                  content="1,000,000,000" 
                />
                <Tokenomics 
                  title="CONTRACT ADDRESS" 
                  content="0xa3c5566eb6524384b3d24dae8640e59b99515d5d" 
                />
              </div>
            </div>
          </section>
          <section className='relative mb-[100px] md:mb-[200px] relative'>
            <div className="container mx-auto px-2">
              <h2 className='text-center font-bold text-3xl mb-[56px] md:text-[50px]'>TOTAL BUY/SELL TAX:3%</h2>
              <div className='flex z-10'>
                <div className='bg-[#2E2E2E] rounded-[2.5rem] w-full md:w-1/2 py-9 px-8'>
                  <Taxes 
                    title="Marketing"
                  />
                  <Taxes 
                    title="Buyback and Burn"
                  />
                  <Taxes 
                    title="Development"
                  />
                </div>
                <div className='w-1/2 hidden md:block'>
                  <img src={image} alt="" className='h-[226px] mx-auto'/>
                </div>
              </div>
            </div>
            <div className='absolute bg-[#EBBC15]/[0.49] h-[682px] w-[682px] rounded-full blur-[400px] -right-[215px] -bottom-[77px]'></div>
          </section>
          <Footer/>
    </div>
  )
}

export default Home
