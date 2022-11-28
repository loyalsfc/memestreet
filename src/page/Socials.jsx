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
              </div></a>
              {/* <div className='flex items-center'>
                <div className='bg-social p-4'>
                  <svg width="32" height="32" viewBox="0 0 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.993 1.99455C24.0473 1.06479 21.9408 0.389967 19.7464 6.89792e-05C19.7272 -0.00056176 19.708 0.00313939 19.6904 0.0109123C19.6727 0.0186852 19.6568 0.030341 19.644 0.0450575C19.3807 0.539928 19.0735 1.18476 18.8687 1.67963C16.5412 1.31972 14.1743 1.31972 11.8468 1.67963C11.642 1.16976 11.3348 0.539928 11.0568 0.0450575C11.0422 0.0150654 10.9983 6.89792e-05 10.9544 6.89792e-05C8.76007 0.389967 6.66813 1.06479 4.70784 1.99455C4.69321 1.99455 4.67859 2.00954 4.66396 2.02454C0.684876 8.12794 -0.412297 14.0664 0.128975 19.9448C0.128975 19.9748 0.143604 20.0048 0.172862 20.0198C2.80608 21.9993 5.33689 23.199 7.83844 23.9938C7.88233 24.0088 7.92622 23.9938 7.94085 23.9638C8.526 23.139 9.05265 22.2692 9.50615 21.3545C9.5354 21.2945 9.50615 21.2345 9.44763 21.2195C8.61378 20.8896 7.82381 20.4997 7.04848 20.0498C6.98996 20.0198 6.98996 19.9299 7.03385 19.8849C7.19477 19.7649 7.35569 19.6299 7.51661 19.51C7.54586 19.48 7.58975 19.48 7.61901 19.495C12.6514 21.8493 18.0787 21.8493 23.0526 19.495C23.0818 19.48 23.1257 19.48 23.155 19.51C23.3159 19.6449 23.4768 19.7649 23.6377 19.8999C23.6962 19.9448 23.6962 20.0348 23.6231 20.0648C22.8624 20.5297 22.0578 20.9046 21.224 21.2345C21.1654 21.2495 21.1508 21.3245 21.1654 21.3695C21.6336 22.2842 22.1602 23.154 22.7307 23.9788C22.7746 23.9938 22.8185 24.0088 22.8624 23.9938C25.3786 23.199 27.9094 21.9993 30.5426 20.0198C30.5719 20.0048 30.5865 19.9748 30.5865 19.9448C31.2302 13.1516 29.5186 7.25817 26.0515 2.02454C26.0369 2.00954 26.0223 1.99455 25.993 1.99455ZM10.2669 16.3608C8.76007 16.3608 7.50198 14.9362 7.50198 13.1816C7.50198 11.4271 8.73081 10.0024 10.2669 10.0024C11.8175 10.0024 13.0464 11.4421 13.0317 13.1816C13.0317 14.9362 11.8029 16.3608 10.2669 16.3608ZM20.4632 16.3608C18.9565 16.3608 17.6984 14.9362 17.6984 13.1816C17.6984 11.4271 18.9272 10.0024 20.4632 10.0024C22.0139 10.0024 23.2428 11.4421 23.2281 13.1816C23.2281 14.9362 22.0139 16.3608 20.4632 16.3608Z" fill="#309F2A"/>
                  </svg>
                </div>
                <p className={'mx-6 text-xl text-white/[0.8] ' + hidden}>Discord</p>
              </div> */}
              <a href="http://twitter.com/memestreeterc20"><div className='flex items-center'>
                <div className='bg-social p-4'>
                  <svg width="32" height="32" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.2648 22C20.3951 22 26.4837 12.7642 26.4837 4.76892C26.4837 4.51047 26.4837 4.24833 26.4727 3.98988C27.6581 3.13052 28.6812 2.06657 29.494 0.847897C28.3867 1.33683 27.2133 1.65906 26.0118 1.80415C27.2774 1.0466 28.2252 -0.145339 28.6792 -1.55013C27.4902 -0.844707 26.1888 -0.349504 24.8321 -0.0862072C23.92 -1.05903 22.7129 -1.7035 21.398 -1.91979C20.0831 -2.13607 18.7337 -1.9121 17.5588 -1.28257C16.3838 -0.653033 15.449 0.346931 14.899 1.56243C14.349 2.77793 14.2146 4.14114 14.5166 5.44088C12.1105 5.32006 9.75664 4.69409 7.60768 3.60358C5.45873 2.51307 3.56266 0.982371 2.04246 -0.889241C1.27071 0.44561 1.03519 2.02457 1.38372 3.52701C1.73225 5.02946 2.63871 6.34274 3.91901 7.20017C2.95961 7.16753 2.0213 6.90953 1.17976 6.44698V6.53006C1.18141 7.92841 1.66513 9.2833 2.54915 10.3657C3.43317 11.4481 4.66327 12.1917 6.03152 12.4707C5.51217 12.6139 4.97569 12.6854 4.437 12.683C4.05724 12.6841 3.67823 12.6489 3.30517 12.5777C3.69188 13.7815 4.44488 14.8339 5.45868 15.5877C6.47249 16.3414 7.69633 16.7588 8.9588 16.7812C6.81413 18.4681 4.16492 19.383 1.43783 19.3786C0.957302 19.3806 0.477108 19.3529 0 19.2955C2.76785 21.0627 5.9823 22.001 9.2648 22Z" fill="#309F2A"/>
                  </svg>
                </div>
                <p className={'mx-6 text-xl text-white/[0.8] ' + hidden}>Twitter</p>
              </div></a>
              {/* <div className='flex items-center'>
                <div className='bg-social p-4'>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM18.96 13.596C18.984 13.764 18.996 13.944 18.996 14.124C18.996 16.812 15.864 18.996 12 18.996C8.136 18.996 5.004 16.812 5.004 14.124C5.004 13.944 5.016 13.764 5.04 13.596C4.428 13.32 4.008 12.708 4.008 12C4.00622 11.6559 4.10616 11.3189 4.29527 11.0314C4.48438 10.744 4.75422 10.5188 5.07091 10.3841C5.38759 10.2495 5.737 10.2115 6.07523 10.2748C6.41347 10.3381 6.72545 10.4999 6.972 10.74C8.184 9.864 9.864 9.312 11.724 9.252L12.612 5.064C12.624 4.98 12.672 4.908 12.744 4.872C12.816 4.824 12.9 4.812 12.984 4.824L15.888 5.448C15.9865 5.2483 16.1366 5.07858 16.3228 4.95645C16.509 4.83433 16.7245 4.76424 16.9469 4.75347C17.1693 4.74269 17.3905 4.79162 17.5877 4.89517C17.7848 4.99873 17.9506 5.15314 18.068 5.34238C18.1853 5.53163 18.2499 5.74883 18.255 5.97144C18.2601 6.19405 18.2055 6.41398 18.0969 6.6084C17.9884 6.80282 17.8298 6.96465 17.6376 7.07712C17.4454 7.18959 17.2267 7.24859 17.004 7.248C16.332 7.248 15.792 6.72 15.756 6.06L13.152 5.508L12.36 9.252C14.196 9.312 15.84 9.876 17.04 10.74C17.224 10.5643 17.4441 10.431 17.685 10.3493C17.9258 10.2676 18.1817 10.2395 18.4345 10.267C18.6874 10.2945 18.9312 10.3769 19.1489 10.5084C19.3666 10.64 19.5529 10.8175 19.6948 11.0286C19.8367 11.2397 19.9308 11.4793 19.9705 11.7305C20.0101 11.9818 19.9944 12.2386 19.9244 12.4832C19.8544 12.7277 19.7318 12.954 19.5653 13.1462C19.3987 13.3385 19.1921 13.492 18.96 13.596V13.596Z" fill="#309F2A"/>
                  </svg>
                </div>
                <p className={'mx-6 text-xl text-white/[0.8] ' + hidden}>Reddit</p>
              </div>   */}
    </>
  )
}

export default Socials
