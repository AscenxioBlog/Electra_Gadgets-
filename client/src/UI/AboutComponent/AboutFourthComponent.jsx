import React from 'react'
import {Swiper , SwiperSlide} from 'swiper/react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import subnav1 from './Aboutpictures/subnav1.jpg'
import subnav2 from './Aboutpictures/subnav2.jpg'
import subnav3 from './Aboutpictures/subnav3.jpg'

            // Since the slider doesnt have a responsive component we craeted one......this component is for medium screen 

function    AboutFourthComponent() {
  return (
    <div className=' hidden md:block lg:hidden  w-full mt-[30px] '>
      <Swiper 
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      onSlideChange={()=> console.log('slide change')}
      onSwiper={()=> console.log(Swiper)}
      // navigation
      pagination={{clickable:true}}
      >

      
        <SwiperSlide>
              <div className=" h-[430px] w-full  box-border p-3">
                <div className=" h-[240px] w-full rounded-[15px] overflow-hidden ">
                  <img src={subnav1} height='100%'  width='100%' alt="" />
                </div>
                <div className='min-h-[10px] w-full text-center p-3 box-border'>
                <h2 className=' font-bold text-1xl'>PHASELLUS RHONCUS IN NUNC SIT</h2>
                <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis nihil blanditiis, hic similique facere eaque.
                  </p>
              </div>
              </div>
             
            </SwiperSlide>

            <SwiperSlide>
              <div className=" h-[430px] w-full box-border p-3">
                <div className=" h-[250px] w-full rounded-[15px] overflow-hidden ">
                <img src={subnav2} height='100%' width='100%' alt="" />
                </div>
                <div className='min-h-[10px] w-full text-center'>
                <h2 className=' font-bold text-1xl'>AMET MATTIS MOLESTIE NEC TORTOR QUIS </h2>
                <p>
                    Etiam mollis tristique mi ac ultrices. Morbi vel neque eget lacus sollicitudin facilisis. Lorem ipsum dolor sit amet semper ante vehicula

                  </p>
              </div>
              <div>
                  
              </div>
              </div>
             
            </SwiperSlide>

            <SwiperSlide>
              <div className=" h-[430px] w-full box-border p-3">
                <div className=" h-[250px] w-full  rounded-[15px] overflow-hidden">
                <img src={subnav3} height='100%' width='100%' alt="" />
                </div>
                <div className='min-h-[10px] w-full  text-center'>
                <h2 className='font-bold text-1xl'>MOLESTIE NEC TORTOR QUIS</h2>
                <p>
                    Etiam mollis tristique mi ac ultrices. Morbi vel neque eget lacus sollicitudin facilisis. Lorem ipsum dolor sit amet semper ante vehicula
                </p>
              </div>
              </div>
             
            </SwiperSlide>

            <SwiperSlide>
              <div className=" h-[430px] w-full box-border p-3">
                    <div className=" h-[250px] w-full rounded-[15px] overflow-hidden">
                        <img src={subnav1} height='100%' width='100%' alt="" />
                    </div>
                    <div className='min-h-[10px] w-full text-center'>
                            <h2 className=' font-bold text-1xl'>PHASELLUS RHONCUS IN NUNC SIT</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis nihil blanditiis, hic similique facere eaque.
                            </p>
                   </div>
              </div>
             
            </SwiperSlide>

            <SwiperSlide>
                <div className=" h-[430px] w-full box-border p-3">
                    <div className=" h-[250px] w-full  rounded-[15px] overflow-hidden">
                        <img src={subnav2} height='100%' width='100%' alt="" />
                    </div>
                    <div className='min-h-[10px] w-full text-center'>
                        <h2 className=' font-bold text-1xl'>AMET MATTIS MOLESTIE NEC TORTOR QUIS </h2>
                        <p>
                            Etiam mollis tristique mi ac ultrices. Morbi vel neque eget lacus sollicitudin facilisis. Lorem ipsum dolor sit amet semper ante vehicula
                        </p>
                   </div>
                </div>
             
            </SwiperSlide>

            <SwiperSlide>
              <div className=" h-[430px] w-full box-border p-3">
                <div className=" h-[250px] w-full  rounded-[15px] overflow-hidden">
                <img src={subnav3} height='100px' width='100%' alt="" />
                </div>
                <div className='min-h-[10px] w-full text-center'>
                <h2 className='font-bold text-1xl'>MOLESTIE NEC TORTOR QUIS</h2>
                <p>
                    Etiam mollis tristique mi ac ultrices. Morbi vel neque eget lacus sollicitudin facilisis. Lorem ipsum dolor sit amet semper ante vehicula
                </p>
              </div>
            </div>
             
            </SwiperSlide>



      </Swiper>
    </div>
  )
}
export default AboutFourthComponent