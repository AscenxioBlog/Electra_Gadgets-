import React from 'react'
//  import image1 from './TheImages/headphone3.webp'
 import image2 from './TheImages/image3.jpg'
 import image3 from './TheImages/image4.jpg'
 import image4 from './TheImages/image5.jpg'
 import headphone1 from './TheImages/headphone88.webp'
//  import React from 'react';  
 import { IoCheckmark } from 'react-icons/io5'; 
import CustomButton from '../../ReusableComponent/BtnComponent/CustomBtnComponent'
 
function IndexComponent7() {
  return (
    <div className='mt-10 '>



        <div className='flex'>

        


        <div className='min-h-[136vh] md:h-[80vh] lg:h-[90vh]  lg:mr-14 lg:ml-14  bg-cover bg-blend-darken bg-black bg-opacity-30 lg:w-full' style={{ backgroundImage: `url(${image4})` }} >   
  
                
                <div className='grid md:grid-cols-[30%_70%] lg:grid-cols-[40%_60%] h-[80vh]'>


                <div className=' h-[55vh]'>
                  <img src={headphone1} alt="" className='relative grid left-4 top-12  md:top-32 lg:top-32 md:w-[25vw] md:ml-6 lg:w-[25vw] lg:ml-24 h-[35vh] md:h-[40vh] lg:h-[60vh] '/>
                  </div>

                <div className='  lg:top-14  ml-5 lg:ml-0 grid'>

                 <div className='text-gray-200  md:mt-24 lg:mt-24  w-full'>PROFESSIONAL EDITION</div>
                <h1 className=' text-[2rem] md:text-[3rem] lg:text-[4.4rem] font-extrabold text-gray-100'>ELECTRA_GADGETS</h1>
                <div className='text-gray-100'>_ _________</div>


                 <div className='mt-4'>
                  <p className='text-[1.1rem] text-gray-100'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque consequatur nihil cumque placeat quos a ea obcaecati repellat iure maxime?</p>
                 </div>
                 <div className='mt-6 grid grid-cols-2'>

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
                 


                 <div className=' md:flex lg:flex lg:mt-8'>
                  <div className='pt-7 text-gray-100 lg:text-[1.1rem]'>  BEST PRICE AT: $250.000</div>
                

                  <div className='mt-3 md:mt-3 lg:mt-3 grid grid-cols-1 md:flex lg:flex md:ml-10  lg:gap-4 md:ml- lg:ml-10'>
                    {/* <button className=' h-14 md:h-14 lg:h-14 w-80 w md:w-36 lg:w-36 bg-white rounded-full'>Learn More</button> */}
                       <CustomButton
                        // height='55px'
                        // width = '150px'
                         backgroundColor = '#FABC3F'
                        label = 'Learn More'
                        borderRadius = '50px'
                        // onClick={()=>alert('hiiii')}
                        marginTop = 'px'
                        className='h-[55px] w-[300px] md:w-[150px] lg:w-[150px] hover:shadow-md hover:shadow-[#478CCF]'

                    />
                    
                    {/* <button className='h-14 md:h-14 lg:h-14 w-80 w md:w-36 lg:w-36 mt-3 md:mt-0 lg:mt-0 bg-black text-white rounded-full'>Add to cart</button> */}
                    <CustomButton
                        // height='55px'
                        // width = '150px'
                          backgroundColor = '#FABC3F'
                        label = 'Learn More'
                        color= 'black'
                        borderRadius = '50px'
                        // onClick={()=>alert('hiiii')}
                        marginTop = 'px'
                        className='h-[55px] w-[300px] mt-4 md:mt-0 lg:mt-0 md:w-[150px] lg:w-[150px] hover:shadow-md hover:shadow-[#478CCF]'

                    />
                    
                  </div> 

</div>
                

                 </div>
 
               
                </div>

                
                  
                
        </div>
        </div>













        
    </div>
  )
}

export default IndexComponent7



