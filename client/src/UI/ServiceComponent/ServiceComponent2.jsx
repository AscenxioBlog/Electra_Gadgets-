import React from 'react'
import CustomButton from '../../ReusableComponent/BtnComponent/CustomBtnComponent'

function ServiceComponent2() {
  return (
    <div className=' h-[600px] grid grid-rows-2 lg:grid-cols-2 gap-[30px]'>
      <div className='service2 lg:h-[600px] flex items-center justify-center flex-col text-white'>
        <h2 className='lg:text-[20px] md:text-[18px]'>WE OFFER</h2>
        <h1 className='font-bold text-2xl md:text-[2rem] lg:text-[2.5rem]'>CHOOSE THE BEST</h1>
        <h1 className=' text-MainBg text-2xl font-extrabold'>_ ______ _</h1>
      </div>
      <div className='servicee h-[600px] lg:h-[550px] bg-[blue] w-[88%] md:translate-x-[50px] lg:translate-x-[60px] translate-x-[20px] lg:translate-y-[30px] grid grid-cols-1 md:grid-cols-2 gap-[20PX]'>
          <div className='text-center md:text-start'>
              <h1>DISCOUNT</h1>
              <h1>LOYAL SYSTEM</h1>
              <p>
                  Mollis nec consequat at In feugiat molestie tortor a malesuada etiam a venenati
              </p>
          </div>
          <div>
              <h1>24/7</h1>
              <h1>CUSTOMER SUPPORT</h1>
              <p>
                    Mollis nec consequat at In feugiat molestie tortor a malesuada etiam a venenats
                    
              </p>
          </div>
          <div>
            <h1>DELIVERY SYSTEM</h1>
            <h1>WHOLE WORLD</h1>
            <p>
               Mollis nec consequat at In feugiat molestie tortor a malesuada etiam a venenatis
            </p>
          </div>
          <div>
              <h1>SMART SUPPORT</h1>
              <h1>FOR EVERY PROBLEM</h1>
              <p>
                   Mollis nec consequat at In feugiat molestie tortor a malesuada etiam a venenatis
              </p>
          </div>
          <div>
            <h1>QUALITY</h1>
            <h1>BEST MATERIALS</h1>
            <p>
               Mollis nec consequat at In feugiat molestie tortor a malesuada etiam a venenatis
            </p>
          </div>
          <div>
            <h1>PROFESSIONAL STAFFS</h1>
            <h1>OVER 5,000 EMPLOYERS</h1>
            <p>
               Mollis nec consequat at In feugiat molestie tortor a malesuada etiam a venenatis
            </p>
          </div>
      </div>
        
    </div>
  )
}

export default ServiceComponent2
