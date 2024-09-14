import React from 'react'
import clientlogo from './Aboutpictures/client-logo-1.jpg'
import clientlogo2 from './Aboutpictures/client-logo-2.jpg'
import clientlogo3 from './Aboutpictures/client-logo-3.jpg'
import clientlogo4 from './Aboutpictures/client-logo-4.jpg'
import clientlogo5 from './Aboutpictures/client-logo-5.jpg'
import clientlogo6 from './Aboutpictures/client-logo-6.jpg'
import clientlogo7 from './Aboutpictures/client-logo-7.jpg'
import clientlogo8 from './Aboutpictures/client-logo-8.jpg'
import clientlogo9 from './Aboutpictures/client-logo-9.jpg'
import clientlogo10 from './Aboutpictures/client-logo-10.jpg'

function AboutNinthComponent() {
  return (
    <div className='h-[620px] md:h-[370px] lg:h-[320px] w-full grid  grid-cols-2 md:grid-cols-4 lg:grid-cols-5  p-[10px] cursor-pointer lg:w-[80%] lg:translate-x-[140px]'>
            <div className='border-[1px] border-black md:border-[1px] md:border-black md:h-[120px] h-[120px] overflow-hidden lg:h-[150px] logowrap'>
                <div className='h-[120px] logo'>
                  <img src={clientlogo} alt=""  width='100%' height='100%' />

                </div>
                <div className='h-[0px] altlogo'>
                  <img src={clientlogo} alt="" width='100%' height='100%'   />

                </div>
            </div>
            <div className='border-[1px] border-black md:border-[1px] md:border-black md:h-[120px] h-[120px] overflow-hidden lg:h-[150px] logowrap'>
                  <div className='logo h-[120px]'>
                     <img src={clientlogo2} alt="" width='100%' height='100%' />
                  </div>
                  <div className='h-[0px] altlogo'>
                      <img src={clientlogo2} alt="" width='100%' height='100%' />

                  </div>
            </div>
            <div className='border-[1px] border-black md:border-[1px] md:border-black md:h-[120px] h-[120px] overflow-hidden lg:h-[150px] logowrap'>
                <div className='logo h-[120px]'>
                     <img src={clientlogo3} alt="" width='100%' height='100%' />
                </div>
                 <div className='h-[0px] altlogo'>
                     <img src={clientlogo3} alt="" width='100%' height='100%' />
                </div>
            </div>
            <div className='border-[1px] border-black md:border-[1px] md:border-black md:h-[120px] h-[120px] overflow-hidden lg:h-[150px] logowrap'>
                  <div className='logo h-[120px]'>
                     <img src={clientlogo4} alt="" width='100%' height='100%' />
                  </div>
                  <div className='h-[0px] altlogo'>
                     <img src={clientlogo4} alt="" width='100%' height='100%' />
                 </div>
            </div>
            <div className='border-[1px] border-black md:border-[1px] md:border-black md:h-[120px] h-[120px] overflow-hidden lg:h-[150px] logowrap'>
                <div className='logo h-[120px]'>
                        <img src={clientlogo5} alt="" width='100%' height='100%' />
                </div>
                <div className='h-[0px] altlogo'>
                        <img src={clientlogo5} alt="" width='100%' height='100%' />
                </div>
            </div>
            <div className='border-[1px] border-black md:border-[1px] md:border-black md:h-[120px] h-[120px] overflow-hidden lg:h-[150px] logowrap'>
                <div className='logo h-[120px]'>
                  <img src={clientlogo6} alt="" width='100%' height='100%' />
                </div>
                <div className='h-[0px] altlogo'>
                    <img src={clientlogo6} alt="" width='100%' height='100%' />
                </div>
            </div>
            <div className='border-[1px] border-black md:border-[1px] md:border-black md:h-[120px] h-[120px] overflow-hidden lg:h-[150px] logowrap'>
                <div className='logo h-[120px]'>
                    <img src={clientlogo7} alt="" width='100%' height='100%' />
                 </div>
                   <div className='h-[0px] altlogo'>
                       <img src={clientlogo7} alt="" width='100%' height='100%' />
                   </div>
            </div>
            <div className='border-[1px] border-black md:border-[1px] md:border-black md:h-[120px] h-[120px] overflow-hidden lg:h-[150px] logowrap'>
                <div className='logo h-[120px]'>
                    <img src={clientlogo8} alt="" width='100%' height='100%' />
                 </div>
                   <div className='h-[0px] altlogo'>
                       <img src={clientlogo8} alt="" width='100%' height='100%' />
                   </div>
            </div>  <div className='border-[1px] border-black md:border-[1px] md:border-black md:h-[120px] h-[120px] overflow-hidden lg:h-[150px] logowrap'>
                <div className='logo h-[120px]'>
                    <img src={clientlogo9} alt="" width='100%' height='100%' />
                 </div>
                   <div className='h-[0px] altlogo'>
                       <img src={clientlogo9} alt="" width='100%' height='100%' />
                   </div>
            </div>  <div className='border-[1px] border-black md:border-[1px] md:border-black md:h-[120px] h-[120px] overflow-hidden lg:h-[150px] logowrap'>
                <div className='logo h-[120px]'>
                    <img src={clientlogo10} alt="" width='100%' height='100%' />
                 </div>
                   <div className='h-[0px] altlogo'>
                       <img src={clientlogo10} alt="" width='100%' height='100%' />
                   </div>
            </div>
          
        
    </div>
  )
}

export default AboutNinthComponent