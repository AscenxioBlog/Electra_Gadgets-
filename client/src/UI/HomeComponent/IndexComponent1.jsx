import React from 'react'
 import image1 from './TheImages/headphone3.webp'
 import image2 from './TheImages/image3.jpg'
 import image3 from './TheImages/image4.jpg'
 import image4 from './TheImages/image5.jpg'
 import headphone1 from './TheImages/headphone88.webp'
//  import React from 'react';  
 import { IoCheckmark } from 'react-icons/io5'; 
import CustomButton from '../../ReusableComponent/BtnComponent/CustomBtnComponent'
 
function IndexComponent1() {
  return (
    <div className=' '>



        <div className='flex'>

        


        <div className='min-h-[136vh] md:h-[80vh] lg:h-[90vh] lg:w-full   lg:mr-14 lg:ml-14  bg-cover bg-blend-darken bg-[#478CCF] ' style={{ backgroundImage: `url(${image4})` }} >   
  
                
                <div className='grid md:grid-cols-[10fr_4fr] lg:grid-cols-2 h-[80vh]'>

                <div className=' mt-5 lg:mt-14 ml-5 lg:ml-14 grid  '>

                 <div className='text-gray-200 mt-24 md:mt-28 lg:mt-36  w-full'>PROFESSIONAL EDITION</div>
                <h1 className=' text-[2rem] md:text-[2.7rem] lg:text-[4.4rem] font-extrabold text-gray-100'>ELECTRA_GADGETS</h1>
                <div className='text-gray-100'>_ _________</div>


                 <div className='mt-4'>
                  <p className='text-[1.1rem] text-gray-100'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque consequatur nihil cumque placeat quos a ea obcaecati repellat iure maxime?</p>
                 </div>
                 <div className='mt-6'>

                  <ul className='text-gray-100 text-[1.1rem]'>
                    <div className='flex gap-3'>
                      
                      <div className='pt-3'><IoCheckmark /></div>
                    <li className='pt-2'>20.000h of high quality music</li>
                    </div>
                    <div className='flex gap-3'>
                    <div className='pt-3'><IoCheckmark /></div>
                    <li className='pt-2'>Perfect Insulation</li>
                    </div>
                    <div className='flex gap-3'>
                    <div className='pt-3'><IoCheckmark /></div>
                    <li className='pt-2'>5 Years guaranteed work</li>
                    </div>
                  </ul>
                 </div>
                 


                 <div className=' md:flex lg:flex lg:mt-4'>
                  <div className='pt-7 text-gray-100 md:text-[0.9rem] lg:text-[1.1rem]'>  BEST PRICE AT: $250.000</div>
                

                  <div className='mt-3 md:mt-3 lg:mt-3 grid grid-cols-1 gap-3 md:flex lg:flex md:ml-10  lg:gap-4 md:ml- lg:ml-10'>
 
                       <CustomButton
                        backgroundColor = '#FABC3F'
                        label = 'Learn More'
                        borderRadius = '50px'
                        // onClick={()=>alert('hiiii')}
                        fontWeight = 'bold'
                        marginTop = 'px'
                        className='h-[55px] w-[300px] md:w-[150px] lg:w-[150px] hover:shadow-md hover:shadow-[#478CCF]'

                    />
                    
                   
                    <CustomButton
                        backgroundColor = '#FABC3F'
                        label = 'Add to cart'
                        borderRadius = '50px'
                        // onClick={()=>alert('hiiii')}
                        marginTop = 'px'
                        className='h-[55px] w-[300px] md:w-[150px] lg:w-[150px] hover:shadow-md hover:shadow-[#478CCF]'

                    />
                    
                  </div> 

</div>
                

                 </div>
 <div className=' h-[80vh]  grid'>
                  <img src={headphone1} alt="" className='relative top-12 left-8  md:top-32 lg:top-32 md:w-[25vw] md:ml-32 lg:w-[25vw] lg:ml-48 h-[35vh] md:h-[40vh] lg:h-[60vh] '/>
                  </div>
               
                </div>

                
                  
                
        </div>
        </div>













        
    </div>
  )
}

export default IndexComponent1



