import React from 'react'
import {Swiper , SwiperSlide} from 'swiper/react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



function    AboutThirdComponent() {
  return (
    <div className=' md:hidden  h-[300px] w-full mt-[30px]  bg-[red] '>
      <Swiper 
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={100}
      slidesPerView={1}
      onSlideChange={()=> console.log('slide change')}
      onSwiper={()=> console.log(Swiper)}
      // height={'400px'}
      // navigation
      pagination={{clickable:true}}
      // scrollbar={{draggable: false}}
      >

        <div className=" h-[300px] w-[100%] bg-[yellow] p-[20px]">
            <SwiperSlide>
              <div className=" h-[140px] w-full bg-MainBg slidee">
              </div>
              <div className='min-h-[10px] w-full mt-[2] text-center'>
                <h2>PHASELLUS RHONCUS IN NUNC SIT</h2>
              </div>
              <div className=''>
                  <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis nihil blanditiis, hic similique facere eaque.
                  </p>
              </div>
              
              
            </SwiperSlide>

            <SwiperSlide>
              <div className=" h-[140px] w-full bg-MainBg slidee2">
              </div>
              <div className='min-h-[10px] w-full mt-[2] text-center'>
                <h2>PHASELLUS RHONCUS IN NUNC SIT</h2>
              </div>
              <div>
                  <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis nihil blanditiis, hic similique facere eaque.
                  </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className=" h-[140px] w-full bg-MainBg slidee3">
              </div>

              <div className='min-h-[10px] w-full mt-[2] text-center'>
                <h2>PHASELLUS RHONCUS IN NUNC SIT</h2>
              </div>
              <div>
                  <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis nihil blanditiis, hic similique facere eaque.
                  </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className=" h-[140px] w-full bg-MainBg slidee">
              </div>
              <div className='min-h-[10px] w-full mt-[2] text-center'>
                <h2>PHASELLUS RHONCUS IN NUNC SIT</h2>
              </div>
              <div>
                  <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis nihil blanditiis, hic similique facere eaque.
                  </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className=" h-[140px] w-full bg-MainBg slidee2">
              </div>

              <div className='min-h-[10px] w-full mt-[2] text-center'>
                <h2>PHASELLUS RHONCUS IN NUNC SIT</h2>
              </div>
              <div>
                  <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis nihil blanditiis, hic similique facere eaque.
                  </p>
              </div>
            </SwiperSlide>
                
            <SwiperSlide>
              <div className=" h-[140px] w-full bg-MainBg slidee3">
              </div>

              <div className='h-[10px] w-full  text-center'>
                <h2>PHASELLUS RHONCUS IN NUNC SIT</h2>
                <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis nihil blanditiis, hic similique facere eaque.
                </p>
              </div>
              
            </SwiperSlide>

                      

        </div>


      </Swiper>
    </div>
  )
}

export default AboutThirdComponent