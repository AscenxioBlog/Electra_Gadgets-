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

        


        <div className='min-h-[136vh] md:h-[80vh] lg:h-[90vh]  lg:mr-14 lg:ml-14 relative top-24 bg-cover bg-blend-darken bg-black bg-opacity-30' style={{ backgroundImage: `url(${image1})` }} >   
  
                
                <div className='grid md:grid-cols-2 lg:grid-cols-2 h-[80vh]'>

                <div className=' mt-5 lg:top-14 ml-5 lg:ml-14 '>

                 <div className='text-gray-200 mt-14 md:mt-24 lg:mt-36  w-full'>PROFESSIONAL EDITION</div>
                <h1 className=' text-[2rem] md:text-[3rem] lg:text-[4.8rem] font-extrabold text-gray-100'>ELECTRA_GADGETS</h1>
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
                 


                 <div className=' md:flex lg:flex lg:mt-8'>
                  <div className='pt-7 text-gray-100 text-[1.2rem]'>  BEST PRICE AT: $250.000</div>
                

                  <div className='mt-3 md:mt-3 lg:mt-3 grid grid-cols-1 md:flex lg:flex md:ml-10  lg:gap-4 md:ml- lg:ml-10'>
                    <button className=' h-14 md:h-14 lg:h-14 w-80 w md:w-36 lg:w-36 bg-white rounded-full'>Learn More</button>
                    <button className='h-14 md:h-14 lg:h-14 w-80 w md:w-36 lg:w-36 mt-3 md:mt-0 lg:mt-0 bg-black text-white rounded-full'>Add to cart</button>
                    
                  </div> 

</div>
                

                 </div>
 <div className=' h-[80vh]'>
                  <img src={headphone1} alt="" className='relative top-12 left-8  md:top-32 lg:top-32 md:w-[25vw] md:ml-32 lg:w-[25vw] lg:ml-48 h-[35vh] md:h-[40vh] lg:h-[60vh] '/>
                  </div> 

               
          
        
        
     


               
                </div>

                
                  
                
        </div>
        </div>













        <div className='md:h-[55vh] lg:h-[65vh] lg:mr-14 lg:ml-14 bg-slate-500 relative  grid md:grid-cols-2 lg:grid-cols-2'>

          
               <div className=' h-[48vh]  md:h-[55vh] lg:h-[65vh]  bg-cover bg-blend-darken text-gray-200 bg-black bg-opacity-50' style={{ backgroundImage: `url(${image3})` }}>
                    <div className=' pt-14 md:pt-24 lg:pt-32 ml-5 lg:ml-14'>
                    <div>RELAX COLLECTION</div>
                    <div className='text-white  md:w-80 lg:w-96  text-[2rem] font-extrabold'>YOUR PERFECT SOUND</div>
                    <div className='text-green-500 pt-4'>_ _________</div>
                    <div>
                    <p className='text-[1.2rem] pt-5'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <span className='mt-4'>Praesentir pulvinar ante et nisl scelerisque.</span>
                    </div>
                    <CustomButton
                    // className='h-14 md:h-14 lg:h-14 w-80 w md:w-36 lg:w-36 mt-6 bg-white text-black rounded-full'
                        height='60px'
                        // width = '150px'
                        backgroundColor = 'white'
                        label = 'Learn More'
                        borderRadius = '50px'
                        // onClick={()=>alert('hiiii')}
                        marginTop = '20px'
                        className='h-[60px] w-[300px] md:w-[150px] lg:w-[150px]'

                    />
                    

             </div>  
             </div>
             <div className=' h-[52vh]  md:h-[55vh] lg:h-[65vh] bg-cover bg-blend-darken text-gray-200 bg-black bg-opacity-50' style={{ backgroundImage: `url(${image4})` }}> 
              
          
                    <div className='lg:pt-32 pt-14 md:pt-24 ml-5 md:ml-12 lg:ml-14'>
                    <div>STREET COLLECTION</div>
                    <div className='text-white text-[2rem] font-extrabold'>NOISE IS NOT A PROBLEM</div>
                    <div className='text-green-500 pt-4'>_ _________</div>
                    <div>
                    <p className='text-[1.2rem] pt-5'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <span className='mt-4'>Praesentir pulvinar ante et nisl scelerisque.</span>
                    </div>
                    <button className='h-14 md:h-14 lg:h-14 w-80 w md:w-36 lg:w-36 mt-6 bg-white text-black rounded-full'>Learn More</button>
             </div>  
           
                </div> 


        </div>


    </div>
  )
}

export default IndexComponent1



