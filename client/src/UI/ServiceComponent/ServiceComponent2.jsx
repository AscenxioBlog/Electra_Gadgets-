import React from 'react'
import CustomButton from '../../ReusableComponent/BtnComponent/CustomBtnComponent'

function ServiceComponent2() {
  return (
    <div className=' h-[1200px]  md:grid grid-rows-2 lg:grid-cols-2 gap-[10px] md:h-[1000px] lg:h-[720px]'>
      <div className='service2 h-[400px] md:h-[450px] lg:h-[720px] flex items-center justify-center flex-col text-white'>
        <h2 className='lg:text-[30px] md:text-[18px]'>WE OFFER</h2>
        <h1 className='font-bold text-2xl md:text-[2rem] lg:text-[2.5rem]'>CHOOSE THE BEST</h1>
        <h1 className=' text-MainBg text-2xl font-extrabold'>_ ______ _</h1>
      </div>
      <div className='servicee h-[620px] md:h-[400px]  lg:h-[550px] w-[88%] md:translate-x-[50px] lg:translate-x-[60px] translate-x-[20px] lg:translate-y-[30px] grid grid-cols-1 md:grid-cols-2 gap-[20PX]'>
          <div className='text-center md:text-start'>
              <h1 className='font-medium text-MainBg'>DISCOUNT</h1>
              <h1 className='font-bold text-2xl'>LOYAL SYSTEM</h1>
              <p>
                  Mollis nec consequat at In feugiat molestie tortor a malesuada etiam a venenati
              </p>
          </div>
          <div className='text-center md:text-start'>
              <h1 className='font-medium text-MainBg'>24/7</h1>
              <h1 className='font-bold text-2xl'>CUSTOMER SUPPORT</h1>
              <p>
                    Mollis nec consequat at In feugiat molestie tortor a malesuada etiam a venenats           
              </p>
          </div>
          <div className='text-center md:text-start'>
            <h1 className='font-medium text-MainBg'>DELIVERY SYSTEM</h1>
            <h1 className='font-bold text-2xl'>WHOLE WORLD</h1>
            <p>
               Mollis nec consequat at In feugiat molestie tortor a malesuada etiam a venenatis
            </p>
          </div>
          <div className='text-center md:text-start'>
              <h1 className='font-medium text-MainBg'>SMART SUPPORT</h1>
              <h1 className='font-bold text-2xl'>FOR EVERY PROBLEM</h1>
              <p>
                   Mollis nec consequat at In feugiat molestie tortor a malesuada etiam a venenatis
              </p>
          </div>
          <div className='text-center md:text-start'>
            <h1 className='font-medium text-MainBg'>QUALITY</h1>
            <h1 className='font-bold text-2xl'>BEST MATERIALS</h1>
            <p>
               Mollis nec consequat at In feugiat molestie tortor a malesuada etiam a venenatis
            </p>
          </div>
          <div className='text-center md:text-start'>
            <h2 className=' font-medium text-MainBg'>PROFESSIONAL STAFFS</h2>
            <h1 className='font-bold text-2xl'>OVER 5,000 EMPLOYERS</h1>
            <p>
               Mollis nec consequat at In feugiat molestie tortor a malesuada etiam a venenatis
            </p>
          </div>
      </div>
        
    </div>
  )
}

export default ServiceComponent2
