import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function ProductsFirstComponet() {

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsperPage, setPostsperPage] = useState(10);

  useEffect(()=>{

  });
        
     const products = [     
      {
        id: 1,
        name: "USB WATCH CHARGER",
        category: "ACCESSORIES",
        price: 630.00,
        Image: "http://unionagency.one/exzo/img/product-112.jpg",
      },

      {
        id: 2,
        name: "USB WATCH CHARGER",
        category: "ACCESSORIES",
        price: 630.00,
        Image: "http://unionagency.one/exzo/img/product-111.jpg",
      },

      {
        id: 3,
        name: "USB WATCH CHARGER",
        category: "ACCESSORIES",
        price: 704,
        Image: "http://unionagency.one/exzo/img/product-113.jpg",
      },

      {
        id: 4,
        name: "USB WATCH CHARGER",
        category: "ACCESSORIES",
        price: 122,
        Image: "http://unionagency.one/exzo/img/product-114.jpg",
      },

      // {
      //   id: 5,
      //   accessories: "USB WATCH CHARGER",
      //   category: "ACCESSORIES",
      //   price: 630.00,
      //   Image: "",
      // },

      // {
      //   id: 6,
      //   accessories: "USB WATCH CHARGER",
      //   category: "ACCESSORIES",
      //   price: 630.00,
      //   Image: "",
      // },
     ]

  return (
    <div>
         <div className='min-h-[70vh] mt-16 md:min-h-[60vh] lg:min-h-[100vh]'>
            <div className='h-[40px] text-[gray] text-[12px] flex justify-start items-center font-medium lg:flex lg:justify-start lg:items-center lg:p-[50px]'>
                <ul className='flex gap-3 ml-9 lg:ml-8'>
                    <li className='hover:text-MainBg'><Link>HOME</Link></li>
                    <li  className='hover:text-MainBg'><Link>ACCESORIES</Link></li>
                    <li  className='hover:text-MainBg'><Link>GADGETS</Link></li>
                    <li  className='hover:text-MainBg'><Link>SPORTS GADGETS</Link></li>
                </ul>
            </div>

            
            <div className='min-h-[480px] grid grid-cols-[25%,75%]'>
                  <div className='h-[450px] w-[250px] hidden font-bold text-[11px] text-[gray] lg:grid grid-rows-10 lg:ml-[86px]'>
                          <div>
                              <h1 className=' font-extrabold text-[18px] text-black'>POPULAR CATEGORIES</h1>
                          </div>

                          <Link className='border-b-[1px] border-[#8080802f]  text-center flex items-center'>LAPTOPS & COMPUTER</Link>

                          <Link className='border-b-[1px] border-[#8080802f] flex items-center'>VIDEO & PHOTOS CAMERAS</Link>

                          <Link className='border-b-[1px] border-[#8080802f] flex items-center'>SMARTPHONES</Link>

                          <Link  className='border-b-[1px] border-[#8080802f] flex items-center'>TV & AUDIO</Link>

                          <Link className='border-b-[1px] border-[#8080802f] flex items-center'>GADGETS</Link>

                          <Link className='border-b-[1px] border-[#8080802f] flex items-center'>CAR ELECTRONICS</Link>

                          <Link className='border-b-[1px] border-[#8080802f] flex items-center'>VIDEO & PHOTOS CAMERAS</Link>

                          <Link className='border-b-[1px] border-[#8080802f] flex items-center'>VIDEO GAMES & CONSOLE</Link>

                          <Link className='border-b-[1px] border-[#8080802f] flex items-center'>SOFTWARE</Link>

                          {/* <Link className='border-b-[1px] border-[gray]'>ACCESORIES</Link> */}
                </div>

                <div className='flex flex-col w-[100%]'>
                <div className='h-[380px] w-[380%] mt-5 mb-4 rounded-xl ml-3 md:ml-5 md:mt-12 lg:w-[85%] lg:ml-10 lg:mt-0'>
                <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        slidesPerView={1}
                        onSlideChange={()=> console.log('slide change')}
                        onSwiper={()=> console.log(Swiper)}
                        pagination={{clickable:true}}
                >
                <SwiperSlide>
                    <div className='h-[380px] w-[380%] mt-5 rounded-xl bg-[#29cf7c] md:mt-12 lg:w-[100%] lg:mt-0'></div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='h-[380px] w-[380%] mt-5 rounded-xl bg-[#1f5355] md:mt-12 lg:w-[100%] lg:mt-0'></div>
                </SwiperSlide>

                </Swiper>
                </div>
               
                    {/* <div className='h-[380px] w-[380%] mt-5 rounded-xl bg-[pink] ml-3 md:ml-5 md:mt-12 lg:w-[85%] lg:ml-10 lg:mt-0'></div> */}

                    <div className='h-[80px] w-[380%] flex items-center ml-3 bg-[green] md:ml-5 lg:ml-10 lg:w-[85%]'>
                       <b className='font-bold text-[15px] lg:text-2xl'>SPORT GADGETS</b>
                    </div>
                </div>

            </div>
         </div>
    </div>
  )
}

export default ProductsFirstComponet 