import React from 'react'
import { Link } from 'react-router-dom'

function ProductsFirstComponet() {
        
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
         <div className='min-h-[100vh] bg-[#FFFF] mt-16'>
            <div className='h-[30px] p-[70px] text-[gray] text-[12px] font-medium flex justify-start items-center'>
                <ul className='ml-8 flex gap-3'>
                    <li className='hover:text-[green]'><Link>HOME</Link></li>
                    <li  className='hover:text-[green]'><Link>ACCESORIES</Link></li>
                    <li  className='hover:text-[green]'><Link>GADGETS</Link></li>
                    <li  className='hover:text-[green]'><Link>SPORTS GADGETS</Link></li>

                </ul>
            </div>


            <div className='min-h-[480px] grid grid-cols-[25%,75%]'>
                <div className='h-[450px] w-[250px] font-bold text-[11px] text-[gray] grid grid-rows-10 lg:ml-[86px]'>
                          <div>
                             <h1 className=' font-extrabold text-[18px]  text-black'>POPULAR CATEGORIES</h1>
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

                <div className='flex flex-col'>
                    <div className='h-[340px] w-[85%] ml-10 mt-2 rounded-xl bg-[pink]'></div>

                    <div className='h-[80px] w-[80%] flex items-center ml-10'>
                       <b className='font-bold text-2xl'>SPORT GADGETS</b>
            
                    </div>
                </div>

            </div>
         </div>
    </div>
  )
}

export default ProductsFirstComponet 