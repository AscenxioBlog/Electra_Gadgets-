import React from 'react'
import background25 from './Aboutpictures/background-25.jpg'
import thumbnail38 from './Aboutpictures/thumbnail-38.jpg'
import thumbnail39 from './Aboutpictures/thumbnail-39.jpg'

function AboutTenthComponent() {
  return (
    <div className='h-[520px] w-full lg:h-[860px] lg:w-[80%] lg:translate-x-[140px] mt-[30px] p-[10px] box-border lg:grid lg:grid-cols-2 lg:gap-4'>
        <div className='md:hidden lg:block hidden'>
            <img src={background25} alt="" width='100%' height='100%'/>
        </div>
        <div className=' grid grid-rows-3 h-[500px] lg:h-[690px] lg:translate-y-[60px] '>
            <div className=' h-[150px] md:h-[130px]'>
                <h2>REAL SOUND</h2>
                <h1 className='font-bold text-2xl'>FEEL PERFECT BEAT</h1>
                <h1 className='text-1xl font-bold text-MainBg'>_ _____ _</h1>

                <p className='text-[16px]'>
                    In feugiat molestie tortor a malesuada. Etiam a venenatis ipsum. Proin pharetra elit at feugiat commodo vel placerat tincidunt sapien ne                   
                </p>

            </div>
            <div className='h-[150px] grid grid-cols-2 md:grid md:grid-cols-[30%,70%] lg:gap-6'>
                <div className='rounded-[10px]  overflow-hidden'>
                    <img src={thumbnail38} alt="" />

                </div>
                <div>
                    <h1 className='font-bold'>PHASELLUS RHONCUS IN NUNC SIT</h1>
                    <p className='text-[13px] md:text-[16px]'>
                            Etiam mollis tristique mi ac ultrices. Morbi vel neque eget lacus sollicitudin facilisis. Lorem ipsum dolor sit amet semper ante vehicula
                     </p>

                </div>
              
            </div>
            <div className='h-[150px] grid grid-cols-2 md:grid md:grid-cols-[30%,70%] lg:gap-6'>
                <div className='rounded-[10px] overflow-hidden'>
                    <img src={thumbnail39} alt="" />

                </div>
                <div>
                    <h1 className='font-bold'>PHASELLUS RHONCUS IN NUNC SIT</h1>
                    <p className='text-[13px] md:text-[16px]'>
                            Etiam mollis tristique mi ac ultrices. Morbi vel neque eget lacus sollicitudin facilisis. Lorem ipsum dolor sit amet semper ante vehicula
                     </p>

                </div>
              
            </div>
    
            
        </div>

    </div>
  )
}

export default AboutTenthComponent