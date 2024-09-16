import React, { useState } from 'react'
import image1 from './TheImages/headphone88.webp'
import image2 from './TheImages/image1.jpg'

import image3 from './TheImages/headphones8.webp'
import CustomButton from '../../ReusableComponent/BtnComponent/CustomBtnComponent'


function IndexComponent6() {
  const [hovery, setHovery] = useState(false)
  const [hovery2, setHovery2] = useState(false)
  return (
    <div>

        <div className='text-center mt-16'>
            <div className='text-[1.1rem]'>OUR SERIES</div>
            <div className='font-extrabold text-[2.4rem] '>CHOOSING IN OUR NEW STYLE</div>
            <div className='text-green-400 mt-3'>_ ________</div>
        </div>
<div className='grid md:grid-cols-2 lg:grid-cols-2 mt-16'>
         <div className='min-h-[60vh] w-[90vw] md:w-[45vw] ml-4 md:min-h-[35vh] text-white lg:h-[65vh]  lg:mr-14 lg:ml-14 relative top-4 bg-cover bg-blend-darken rounded-md bg-black bg-opacity-30' style={{ backgroundImage: `url(${image2})` }} >

            <div className='text-gray-200 text-[1.6rem] ml-5 mt-7'>STARTING FROM $199.000</div>
            <div className='font-extrabold text-white text-[2rem] ml-5 md:w-56'>SOUND <span className='text-green-400 pr-10'>MAX </span>SERIES</div>
            <p className='pl-5 pt-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, eum, expedita iure voluptatibus perferendis fuga assumenda commodi pariatur unde modi placeat laboriosam neque suscipit. Nam, consectetur unde. Porro, voluptates facilis!</p>
         
         <CustomButton
         
             // height='55px'
                        // width = '150px'
                       backgroundColor = '#FABC3F'
                        label = 'Learn More'
                        borderRadius = '50px'
                        // onClick={()=>alert('hiiii')}
                        marginTop = 'px'
                        className='h-[55px] w-[300px] md:w-[150px] lg:w-[150px]  mt-9 ml-5 hover:shadow-md hover:shadow-[#478CCF]'
         />
         </div>


         <div className='grid md:grid-cols-2 lg:grid-cols-2'>
            <div>
         <div><img src={hovery ? image3 : image1}  alt=""  onMouseEnter={() => setHovery(true)}   onMouseLeave={() => setHovery(false)}    className='h-[240px] lg:ml-24 w-[150px] ml-[120px] mt-16 md:mt-0  md:ml-4  transition-transform hover:scale-50'/></div>
                    <div className='pl-8'>
                    <div className='text-green-500 mt-5 font-bold  lg:text-[1.2rem] text-center md:ml-0'> SOUND MAX RELAX</div>
                      
                      <p className='text-[0.9rem] text-center mt-4'>Lorem, ipsum dolor sit amet consectetur</p>
                    </div>
                   
                      <p className='text-center mt-6'> $155.000</p>
                     
                                       
         <CustomButton
         
         // height='55px'
                    // width = '150px'
                    backgroundColor = '#FABC3F'
                    label = 'Learn More'
                    borderRadius = '50px'
                    color = 'black'
                    // onClick={()=>alert('hiiii')}
                    marginTop = 'px'
                    className='h-[55px] w-[300px] md:w-[150px] text-white font-bold mt-3 ml-7 lg:w-[150px] lg:ml-24 hover:shadow-md hover:shadow-[#478CCF]'
     />
             
                    </div>

                    
              
                    <div className='mt-7 md:mt-0 lg:mt-0 lg:ml-7'>
         <div><img src={hovery2 ? image1 : image3}  alt=""  onMouseEnter={() => setHovery2(true)}   onMouseLeave={() => setHovery2(false)}  className='h-[240px] lg:ml-20 w-[150px] ml-[120px]  md:ml-8  transition-transform hover:scale-50'/></div>
                    <div className='pl-8'>
                      <div className='text-green-500 text-center font-bold lg:text-[1.2rem] mt-5'> SOUND MAX RELAX</div>
                     
                      <p className='text-[0.9rem] text-center mt-4'>Lorem, ipsum dolor sit amet consectetur</p>
                    </div>
                   
                      <p className='text-center mt-6'> $155.000</p>
                     
                        
         <CustomButton
         
         // height='55px'
                    // width = '150px'
                    backgroundColor = '#FABC3F'
                    label = 'Learn More'
                    borderRadius = '50px'
                    color = 'black'
                    fontWeight = 'bold'
                    // onClick={()=>alert('hiiii')}
                    marginTop = ''
                    className='h-[55px] w-[300px] md:w-[150px]  font-bold lg:w-[150px] mt-3 ml-6 lg:ml-24 hover:shadow-md hover:shadow-[#478CCF]'
     />
                    
                    </div>

         </div>
         
    </div>


    <div className='flex gap-1 justify-center mt-4 '>
          <button className='h-2 w-2 rounded-full border-2 border-green-500  '></button>
          <button className='h-2 w-2 rounded-full border-2 border-green-500  '></button>
    </div>
    {/* <div className='h-80 w-full bg-yellow-300 bg-[url(./Theimages/image2.jpg)]'></div> */}
    </div>

    
  )
}

export default IndexComponent6