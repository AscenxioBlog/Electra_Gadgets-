import React from 'react'
import image3 from './TheImages/image4.jpg'
import image4 from './TheImages/headphone88.webp'

import CustomButton from '../../ReusableComponent/BtnComponent/CustomBtnComponent'
function IndexComponent4() {
  return (
    <div className='lg:ml-14 lg:mr-14'>
        <div className='text-center mt-20'>
            <div> SPECIAL OFFERS</div>
            <div className='font-bold text-[1.5rem] lg:text-[2.5rem]'>CHOOSE THE BEST</div>
            <div className='text-green-400'>_ ________ _</div>
        </div>
        

        <div className='grid md:grid-cols-2 lg:grid-cols-2'>
            <div className='flex'>
            <div><img src={image4} alt="" className='h-96 w-72  hidden lg:block justify-center lg:ml-[460px] absolute mt-5 '/></div>

            <div><img src={image3} alt="" className='mt-3 lg:mt-0 md:h-[30vh] md:w-[70vw] lg:h-[70vh] lg:w-full w-[90vw] ml-5 md:mt-5  rounded-lg'/></div>
            </div>
            <div className='mt-6 md:mt-0 ml-10 lg:ml-48 '>
                <h3 className=' font-extrabold text-[1.2rem] md:text-[1.3rem]'>HEADPHONES KLM <span className='font-extrabold text-[2rem] text-green-500 '>+</span> </h3>
                
                
                <h3 className=' font-extrabold text-[1.2rem] md:text-[1.3rem]'> LEATHER CASE <span className='font-extrabold text-[2rem] text-green-500 '>+  </span>FREE</h3>
                <h3 className=' font-extrabold text-[1.2rem] md:text-[1.3rem]'>  DELIVERY</h3>
                
               
                <div>
                    
                    
                    <div className='mt-7 flex gap-2'>BEST PRICE: <p className='text-green-400'>$195.00</p></div>

                
            <div className='flex gap-5 mt-5'>
                 <div className='h-16 w-16 flex justify-center text-center text-[0.8rem] border-2 border-green-300 rounded-full pt-5'>0 Days</div>
                 <div className='h-16 w-16 flex justify-center text-center text-[0.8rem] border-2 border-green-300 rounded-full pt-5'>0 Hours</div>
                 <div className='h-16 w-16 flex justify-center text-center text-[0.8rem] border-2 border-green-300 rounded-full pt-5'>0 Minutes</div>
                 <div className='h-16 w-16 flex justify-center text-center text-[0.8rem] border-2 border-green-300 rounded-full pt-5'>0 Seconds</div>

            </div>
            <div className='mt-7'>
                <p >Praesent nec finibus massa. Phasellus id auctor lacus, at iaculis lorem. Donec quis arcu elit. In vehicula purus sem, eu mattis est lacinia sit amet.</p>
            </div>
            </div>
            
            <div className='md:flex lg:flex gap-3'>
            <CustomButton
     
         height='60px'
         // width = '150px'
         backgroundColor = 'limegreen'
         label = 'Learn More'
         borderRadius = '50px'
         color = 'white'
         // onClick={()=>alert('hiiii')}
         marginTop = '20px'
         className='h-[60px] w-[300px] md:w-[150px] lg:w-[150px] text-white mt-10'

     />


<CustomButton
     
     height='60px'
     // width = '150px'
     backgroundColor = 'black'
     label = 'ADD TO CART'
     borderRadius = '50px'
     color = 'white'
     // onClick={()=>alert('hiiii')}
     marginTop = '20px'
     className='h-[60px] w-[300px] md:w-[150px] lg:w-[150px] mt-2 text-white'

 />
            </div>
            </div>

        </div>

        <div className='flex gap-1 mr-3 justify-center mt-6'>
        <button className='h-2 w-2 rounded-full border-2 border-green-500  '></button>
        <button className='h-2 w-2 rounded-full border-2 border-gray-500  '></button>
        <button className='h-2 w-2 rounded-full border-2 border-gray-500  '></button>
        </div>

    </div>
  )
}

export default IndexComponent4