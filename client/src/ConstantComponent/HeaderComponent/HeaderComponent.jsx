import React from 'react'
import { Link } from 'react-router-dom'

function HeaderComponent() {
  return (
    <div>
        <div className='h-[70px] bg-[white] z-30 grid grid-cols-2 fixed top-0 w-[100%] md:grid-cols-2 lg:h-[70px] lg:grid-cols-4 lg:flex lg:items-center justify-between'>
               <div className='text-[30px] gap-2 p-[20px] text-[#FD282A] flex items-center md:text-[40px] md:ml-[30px] '>
                    <i class="fa-solid fa-cart-shopping"></i>
                    <span className='text-[black] text-[30px] font-bold md:text-[40px] lg:text-3xl'>EleStore</span>
               </div>

               <div className='font-medium text-[17px] hidden lg:inline-block'>
                  <ol className='flex gap-8 justify-center items-center'>
                      <li><Link to='/'>Home</Link></li>
                      <li><Link to='/about'>About</Link></li>
                      <li><Link to='/product'>Product</Link></li>
                      <li><Link to='/service'>Services</Link></li>
                      <li><Link to='/contact'>Contact</Link></li>
                  </ol>
               </div>

               <div className='text-[40px] mt-5 ml-[140px] inline-block md:text-[40px] md:ml-80 lg:hidden'><i class="fa-solid fa-bars"></i></div>

               <div className='hidden gap-[40px] lg:flex lg:items-center lg:justify-center lg:pr-[70px]'>
                   <div className='bg-[#F1F1F1] h-[50px] w-[50px] rounded-[50%] flex justify-center items-center hover:bg-[#fd282ca4]'><i class="fa-solid fa-user"></i></div>
                   <div className='bg-[#F1F1F1] rounded-[50%] h-[50px] w-[50px] flex justify-center items-center'><i class="fa-regular fa-heart"></i></div>
                   <div className='bg-[#F1F1F1] rounded-[50%] h-[50px] w-[50px] flex justify-center items-center'><i class="fa-solid fa-cart-shopping"></i></div>
               </div>
           </div>
    </div>
  )
}

export default HeaderComponent