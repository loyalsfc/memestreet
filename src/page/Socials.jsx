import React from 'react'

function Socials({hidden}) {
  return (
    <>
            <a href="https://t.me/MemeStreetERC20"><div className='flex items-center'>
                <div className='bg-social p-4'>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.9202 6.18489L25.6948 26.5513C25.3761 27.9887 24.5447 28.3464 23.3634 27.6692L16.9253 22.8204L13.8188 25.8741C13.475 26.2254 13.1875 26.5193 12.5249 26.5193L12.9875 19.8178L24.9198 8.79776C25.4386 8.32502 24.8073 8.06309 24.1134 8.53583L9.36214 18.0291L3.01157 15.9975C1.6302 15.5567 1.60519 14.5857 3.29909 13.9085L28.1388 4.12781C29.2889 3.687 30.2952 4.38973 29.9202 6.18489Z" fill="#309F2A"/>
                  </svg>
                </div>
                <p className={'mx-6 text-xl text-white/[0.8] ' + hidden}>Telegram</p>
              </div>
            </a>
            <a href='https://github.com/Meme-Street'>
              <div className='flex items-center'>
                <div className='bg-social p-4 h-16 w-16 text-center text-main-color'>
                  <i className="fa-brands fa-github text-2xl"></i>
                </div>
                <p className={'mx-6 text-xl text-white/[0.8] ' + hidden}>Github</p>
              </div>
            </a>
              <a href="http://twitter.com/memestreeterc20"><div className='flex items-center'>
                <div className='bg-social p-4'>
                  <svg width="32" height="32" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.2648 22C20.3951 22 26.4837 12.7642 26.4837 4.76892C26.4837 4.51047 26.4837 4.24833 26.4727 3.98988C27.6581 3.13052 28.6812 2.06657 29.494 0.847897C28.3867 1.33683 27.2133 1.65906 26.0118 1.80415C27.2774 1.0466 28.2252 -0.145339 28.6792 -1.55013C27.4902 -0.844707 26.1888 -0.349504 24.8321 -0.0862072C23.92 -1.05903 22.7129 -1.7035 21.398 -1.91979C20.0831 -2.13607 18.7337 -1.9121 17.5588 -1.28257C16.3838 -0.653033 15.449 0.346931 14.899 1.56243C14.349 2.77793 14.2146 4.14114 14.5166 5.44088C12.1105 5.32006 9.75664 4.69409 7.60768 3.60358C5.45873 2.51307 3.56266 0.982371 2.04246 -0.889241C1.27071 0.44561 1.03519 2.02457 1.38372 3.52701C1.73225 5.02946 2.63871 6.34274 3.91901 7.20017C2.95961 7.16753 2.0213 6.90953 1.17976 6.44698V6.53006C1.18141 7.92841 1.66513 9.2833 2.54915 10.3657C3.43317 11.4481 4.66327 12.1917 6.03152 12.4707C5.51217 12.6139 4.97569 12.6854 4.437 12.683C4.05724 12.6841 3.67823 12.6489 3.30517 12.5777C3.69188 13.7815 4.44488 14.8339 5.45868 15.5877C6.47249 16.3414 7.69633 16.7588 8.9588 16.7812C6.81413 18.4681 4.16492 19.383 1.43783 19.3786C0.957302 19.3806 0.477108 19.3529 0 19.2955C2.76785 21.0627 5.9823 22.001 9.2648 22Z" fill="#309F2A"/>
                  </svg>
                </div>
                <p className={'mx-6 text-xl text-white/[0.8] ' + hidden}>Twitter</p>
              </div>
            </a>
            <a href='https://medium.com/@memestreeterc20'>
              <div className='flex items-center'>
                <div className='bg-social p-4'>
                  <i class="fa-brands fa-medium text-2xl text-main-color"></i>
                </div>
                <p className={'mx-6 text-xl text-white/[0.8] ' + hidden}>Medium</p>
              </div>  
            </a>
    </>
  )
}

export default Socials
