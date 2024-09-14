import React from 'react'
import CustomButton from '../../ReusableComponent/BtnComponent/CustomBtnComponent'
// import image5 from './TheImages/image5.jpg'
import image5 from './TheImages/headphone88.webp'

function IndexComponent5() {
  return (
    <div>

        <div className='text-center mt-24'>
            <div> NEW ARRIVALS</div>
            <div className='font-extrabold text-[2.4rem]  '>SOMETHING NEW FOR YOU</div>
            <div className='text-green-400 mt-3'>_ ________</div>
        </div>

        <div className='mt-10'>
            <ul className=' md:flex lg:flex justify-center gap-7 hidden '>
                <li className='border-r-2 border-gray-500 w-16'>ALL</li>
                <li className='border-r-2 border-gray-500 w-16'>SPORT</li>
                <li className='border-r-2 border-gray-500 w-36'>PROFESSIONALS</li>
                <li className='border-r-2 border-gray-500 w-16'>DJ</li>
                <li className='border-r-2 border-gray-500 w-16'>RELAX</li>
                <li className=''>CLUB</li>
            </ul>
        </div>


        <div className='md:hidden lg:hidden h-[60px] ml-5 w-[90vw] border-2 border-gray-500 rounded-full'>

          <ul >
            <div className='flex gap-72 pt-3 pl-2 cursor-pointer'>

            <li>ALL</li>
            <span></span>
            </div>
            
            <li className='hidden'>SPORT</li>
            <li className='hidden'>PROFESSIONALS</li>
            <li className='hidden'>DJ</li>
            <li className='hidden'>RELAX</li>
            <li className='hidden'>CLUB</li>
          </ul>
        </div>

       

        <div className='min-h-[560px] mt-7  border-2 border-r-slate-400  lg:mr-14 lg:ml-14  bg-slate-50 grid md:grid-cols-2 lg:grid-cols-4'>
              <div className='h-[560px]  border-r-2 border-r-slate-400 bg-slate-50'>
                    <div className='h-8 w-28 mt-3 lg:mt-8 bg-green-400 rounded-full text-center text-white font-bold pl-3'>Best Price</div>
                    <div><img src={image5} alt="" className='h-[300px] w-[250px] mt-4 ml-8'/></div>
                    <div className='pl-8 mt-7 lg:'>
                      <div className='text-green-500 text-[0.7rem] text-center '>MODERN EDITION</div>
                      <div className='font-bold text-[0.9rem] text-center mt-2'> MODERN BEAT HT</div>
                      <p className='text-[0.9rem] text-center mt-4 lg:mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, placeat!</p>
                    </div>

                    
                      <p className='text-center mt-7 lg:mt-2'> $155.000</p>
                      
                   
              </div>
              <div className='h-[560px] hidden md:block lg:block border-r-0 none md:border-r-2 lg:border-r-2 border-r-slate-400 bg-slate-50'>
              <div className='h-8 w-28 lg:mt-8 bg-red-500 rounded-full text-center text-white font-bold text-[0.9rem] pt-1 pl-3'>20% Discount</div>
              <div><img src={image5} alt="" className='h-[300px] w-[250px] ml-8'/></div>
              <div className='pl-8'>
                      <div className='text-green-500 text-[0.7rem] text-center mt-7'>MODERN EDITION</div>
                      <div className='font-bold text-[0.9rem] text-center mt-2'> MODERN BEAT HT</div>
                      <p className='text-[0.9rem] text-center mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, placeat!</p>
                    </div>

                    <div className='flex mt-5 ml-8  justify-center'>
                      <div className='flex gap-4 mt-7 lg:mt-0'>
                      <p className='text-green-400'> $155.000</p>
                      <p className=' line-through'> $199.000</p>
                      </div>
                      
                      
                    </div>
              </div>
              <div className='h-[560px]  border-r-2 border-r-slate-400 hidden lg:block bg-slate-50'>

              <div><img src={image5} alt="" className='h-[300px] lg:mt-14 w-[250px] ml-8'/></div>
              <div className='pl-8 mt-7'>
                      <div className='text-green-500 text-[0.7rem] text-center'>MODERN EDITION</div>
                      <div className='font-bold text-[0.9rem] text-center mt-2'> MODERN BEAT HT</div>
                      <p className='text-[0.9rem] text-center mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, placeat!</p>
                    </div>

                   
                      <p className='text-center mt-7'> $155.000</p>
                      
                 
              </div>
              <div className='h-[560px]  hidden lg:block bg-slate-50'>
       
              <div><img src={image5} alt="" className='h-[300px] w-[250px] lg:mt-14 ml-8'/></div>
              <div className='pl-8'>
                      <div className='text-green-500 text-[0.7rem] text-center mt-7'>MODERN EDITION</div>
                      <div className='font-bold text-[0.9rem] text-center mt-2'> MODERN BEAT HT</div>
                      <p className='text-[0.9rem] text-center mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, placeat!</p>
                    </div>

                    
                      <p className='text-center mt-7'> $155.000</p>
                    
                
              </div>
        </div>

        <div className='flex gap-1 lg:hidden justify-center items-center mt-7'>
          <button className='h-2 w-2 rounded-full border-2 border-green-500  '></button>
          <button className='h-2 w-2 rounded-full border-2 border-green-500  '></button>
          <button className='h-2 w-2 rounded-full border-2 border-green-500  '></button>
          <button className='h-2 w-2 rounded-full border-2 border-green-500  '></button>
          <button className='h-2 w-2 rounded-full border-2 border-green-500  '></button>
          <button className='h-2 w-2 rounded-full border-2 border-green-500  '></button>
          <button className='h-2 w-2 rounded-full border-2 border-green-500  '></button>
          <button className='h-2 w-2 rounded-full border-2 border-green-500  '></button>
          <button className='h-2 w-2 rounded-full border-2 border-green-500  '></button>
        </div>
    </div>
  )
}

export default IndexComponent5