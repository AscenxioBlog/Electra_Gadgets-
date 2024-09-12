import React from 'react'
 import image1 from './TheImages/headphone3.webp'
 import image2 from './TheImages/image3.jpg'
 import image3 from './TheImages/image4.jpg'
 import image4 from './TheImages/image5.jpg'
 import headphone1 from './TheImages/headphone88.webp'
//  import React from 'react';  
 import { IoCheckmark } from 'react-icons/io5'; 
 
function IndexComponent1() {
  return (
    <div className='h-[vh] bg-[#478CCF] '>

        <div className='h-[15vh] w-full fixed z-50  bg-blue-100 grid md:grid-cols-[20%_80%] lg:grid-cols-[2fr_7fr]'>
<div className=''> 
  <div className='text-[2rem] font-bold flex justify-center items-center pt-8' >ELECTRA_GADGETS</div>
</div>
        </div>


        <div className='flex'>

        
        <button class="h-16 w-16 bg-gray-500 z-50 absolute hover:bg-emerald-500 text-white hidden lg:block   py-2 mt-[470px] px-2 ml-5 rounded-full">Button 1</button> 

        <div className='h-[136vh] md:h-[80vh] lg:h-[90vh]  lg:mr-14 lg:ml-14 relative top-24 bg-cover bg-blend-darken bg-black bg-opacity-30' style={{ backgroundImage: `url(${image1})` }} >   
  
                
                <div className='grid md:grid-cols-2 lg:grid-cols-2 h-[80vh]'>

                <div className=' mt-5 lg:top-14 ml-5 lg:ml-14 '>

                 <div className='text-gray-200   w-full'>PROFESSIONAL EDITION</div>
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
                 


                 <div className='lg:flex lg:mt-8'>
                  <div className='pt-8 text-gray-100 text-[1.4rem]'>  BEST PRICE AT: $250.000</div>
                

                  <div className='mt-3 md:mt-3 lg:mt-3 grid grid-cols-1 md:flex lg:flex  lg:gap-4 lg:ml-10'>
                    <button className=' h-14 md:h-14 lg:h-14 w-80 w md:w-36 lg:w-36 bg-white rounded-full'>Learn More</button>
                    <button className='h-14 md:h-14 lg:h-14 w-80 w md:w-36 lg:w-36 mt-3 md:mt-0 lg:mt-0 bg-black text-white rounded-full'>Add to cart</button>
                    
                  </div> 

</div>
                

                 </div>
 <div className=' h-[80vh]'>
                  <img src={headphone1} alt="" className='relative top-12 left-8  md:top-32 lg:top-32 md:w-[25vw] md:ml-32 lg:w-[25vw] lg:ml-48 h-[35vh] md:h-[40vh] lg:h-[60vh] '/>
                  </div> 

               
          
        
        
        <button class="h-16 w-16 bg-gray-500 absolute hover:bg-emerald-500 text-white hidden lg:block   py-2 mt-96 px-2 ml-[89vw] rounded-full">Button 1</button> 


               
                </div>
                <div className='flex gap-3 justify-center md:relative bottom-0 mt-96 md:mt-0 lg:mt-0    md:bottom-20 lg:bottom-0 items-center'>
                  <button className='h-3 w-3 border-2 border-gray-100 rounded-full'></button>
                  <button className='h-3 w-3 border-2 border-gray-100 rounded-full'></button>
                  <button className='h-3 w-3 border-2 border-gray-100 rounded-full'></button>
                
                  
                 </div>
        </div>
        </div>













        <div className='md:h-[55vh] lg:h-[65vh] lg:mr-14 lg:ml-14 bg-slate-500 relative top-24 grid md:grid-cols-2 lg:grid-cols-2'>

          
               <div className=' h-[48vh]  md:h-[55vh] lg:h-[65vh]  bg-cover bg-blend-darken text-gray-200 bg-black bg-opacity-50' style={{ backgroundImage: `url(${image3})` }}>
                    <div className=' pt-14 md:pt-24 lg:pt-32 ml-5 lg:ml-14'>
                    <div>RELAX COLLECTION</div>
                    <div className='text-white  md:w-80 lg:w-96  text-[2rem] font-extrabold'>YOUR PERFECT SOUND</div>
                    <div className='text-green-500 pt-4'>_ _________</div>
                    <div>
                    <p className='text-[1.2rem] pt-5'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <span className='mt-4'>Praesentir pulvinar ante et nisl scelerisque.</span>
                    </div>
                    <button className='h-14 md:h-14 lg:h-14 w-80 w md:w-36 lg:w-36 mt-6 bg-white text-black rounded-full'>Learn More</button>
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



