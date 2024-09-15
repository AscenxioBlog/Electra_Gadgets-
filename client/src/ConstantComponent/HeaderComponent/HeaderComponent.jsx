import React from 'react'
import { Link } from 'react-router-dom'
import { FaCartPlus } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";

function HeaderComponent() {
  return (
    <div>
        <div className='h-[70px] bg-white z-30 grid grid-cols-[60%,40%] md:grid-cols-[40%,60%] fixed top-0 w-[100%]  lg:h-[70px] lg:grid-cols-[40%,20%,40%] ' style={{boxShadow:'0 0 25px black'}}>
         <div className=" hidden lg:inline-block lg:mt-5">
         <div className=" bg-[] flex justify-end items-center ">
            <ol  className=' flex  gap-10 text-[20px] font-semibold mr-6'>
              <li><Link  to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/product'>Product</Link></li>
            </ol>
          </div>
         </div>
          <div className=" bg-[] flex justify-center items-center">
            <div className=" head h-[60px] w-[100%] bg-[] text-[30px] font-bold flex justify-center items-center" style={{boxShadow:'0 0 15px #FABC3F'}}>
              <h1 className=''>Electra_Gadget</h1>
            </div>
          </div>
          <div className=" bg-[] flex justify-end  lg:justify-between items-center">
           <div className=" hidden lg:inline-block">
           <ol className=' flex  gap-10 text-[20px] font-semibold ml-6'>
              <li><Link to='/service'>Service</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
              <li><Link to=''>Login</Link></li>
            </ol>
           </div>
            <section className=" flex text-[20px] gap-3 pr-5 ">
              <span><FaUserPlus /></span>
              <span><FaCartPlus /></span>
              <button className=' lg:hidden'><IoMdMenu /></button>
            </section>
          </div>
               {/* <div className='text-[30px] gap-2 p-[20px] text-[#FD282A] flex items-center md:text-[40px] md:ml-[30px] '>
                    <i class="fa-solid fa-cart-shopping"></i>
                    <span className='text-[black] text-[30px] font-bold md:text-[40px] lg:text-3xl'>Electra_Gadget</span>
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
                   <div className='bg-[#F1F1F1] h-[50px] w-[50px] rounded-[50%] flex justify-center items-center hover:bg-[#fd282ca4]'></div>
                   <div className='bg-[#F1F1F1] rounded-[50%] h-[50px] w-[50px] flex justify-center items-center'><i class="fa-regular fa-heart"></i></div>
                   <div className='bg-[#F1F1F1] rounded-[50%] h-[50px] w-[50px] flex justify-center items-center'></div>
               </div> */}
           </div>
    </div>
  )
}

export default HeaderComponent