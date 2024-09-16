import React from 'react'
import CustomButton from '../../ReusableComponent/BtnComponent/CustomBtnComponent'
// import image5 from './TheImages/image5.jpg'
import image5 from './TheImages/headphone88.webp'
import {FaEye,FaHeart, FaArrowRight, FaArrowLeft, FaShoppingCart}  from 'react-icons/fa'; 

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
            <li className='hidden'>ALL</li>
            <li className='hidden'>SPORT</li>
            <li className='hidden'>PROFESSIONALS</li>
            <li className='hidden'>DJ</li>
            <li className='hidden'>RELAX</li>
            <li className='hidden'>CLUB</li>
          </ul>
        </div>

       

        <div className='min-h-[560px] mt-7  border-2 border-r-slate-400  lg:mr-14 lg:ml-14  bg-slate-50 grid md:grid-cols-2 lg:grid-cols-4'>
              <div className='h-[560px] relative  group border-r-2 border-r-slate-400 bg-slate-50'>
                <span className='absolute opacity-0 group-hover:opacity-100 top-[250px] transition-transform duration-300 transform translate-x-0 group-hover:translate-x-5'><FaArrowLeft className='text-gray-600'/></span>
                    <div className='h-8 w-28 mt-3 lg:mt-8 bg-green-400 rounded-full text-center text-white font-bold pl-3'>Best Price</div>
                    <div><img src={image5} alt="" className='h-[250px] w-[160px] mt-4 ml-20'/></div>
                    <span className='absolute opacity-0 group-hover:opacity-100 group-hover:bottom-[290px]   group-hover:left-[285px]  transition-transform duration-300 transform translate-x-5 group-hover:translate-x-0'><FaArrowRight className='text-gray-600'/></span>
                    <div className='pl-8 mt-7 lg:'>
                      <div className='text-green-500 text-[0.7rem] text-center transform transition-transform duration-300 group-hover:translate-y-[-10px]'>MODERN EDITION</div>
                      <div className='font-bold text-[0.9rem] text-center mt-2 group-hover:opacity-100 group-hover:text-green-600   transform transition-transform duration-300 group-hover:translate-y-[-10px]'> MODERN BEAT HT</div>
                      <div>
                      
                      <p className='text-[0.9rem] group-hover:opacity-0 group-hover:text-green-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, placeat!</p>
                       
                               <div className='opacity-0 group-hover:opacity-100 hover group-hover:relative  group-hover:bottom-6'>

                                <div className='flex gap-4 ml-24'>

                                <FaEye size={14} className='text-gray-400 transform transition-transform duration-300 group-hover:translate-y-[-10px]'/>  
                                    
                                    <FaHeart size={14} className='text-gray-400 transform transition-transform duration-300 group-hover:translate-y-[-10px]'/>  
                                    <FaShoppingCart size={14} className='text-gray-400 transform transition-transform duration-300 group-hover:translate-y-[-10px]'/>  
                                </div>
                                      
                               </div>
                               </div>
                               </div>
                    <div>
                   

                    <p className='text-center mt-7 lg:mt-2 group-hover:opacity-0'> $155.000</p>

                    <div className="absolute h-10 w-48 inset-0 mt-[480px] lg:right-3  opacity-0 group-hover:opacity-100">  
                                   
                   
                              <div className=' flex'>
                                       <CustomButton
                                          backgroundColor = 'limegreen'
                                          label = 'Learn More'
                                          color = 'white'
                                          // onClick={()=>alert('hiiii')}
                                           marginTop = '20px'
                                           className='h-[60px] w-[260px] md:w-[150px] lg:w-[160px] text-white  mt-10 transition-transform duration-300 transform translate-x-0 group-hover:translate-x-2'
           
                                            />
           <div>
           
                                         <CustomButton
                
                                        //  height='60px'
                                         width = '148px'
                                         backgroundColor = 'black'
                                         label = 'ADD TO CART'
                                      
                                         color = 'white'
                                         // onClick={()=>alert('hiiii')}
                                         marginTop = '20px'
                                         className='h-[60px] w-[260px] md:w-[150px] text-[0.9rem] lg:w-[165px] mt-2 text-white  transition-transform duration-300 transform translate-x-10  group-hover:translate-x-0'
                                       
                                          />

                           
                     
                                      </div>
                       </div>
                                              
                                              
                                         
                                           </div>  
                                          
                    </div>
                   
                      
                   
              </div>
              <div className='h-[560px] hidden relative group md:block lg:block border-r-0 none md:border-r-2 lg:border-r-2 border-r-slate-400 bg-slate-50'>
              <div className='h-8 w-28 lg:mt-8 bg-red-500 rounded-full text-center text-white font-bold text-[0.9rem] pt-1 pl-3'>20% Discount</div>
              <span className='absolute opacity-0 group-hover:opacity-100 top-[250px] transition-transform duration-300 transform translate-x-0 group-hover:translate-x-5'><FaArrowLeft className='text-gray-600'/></span>
              <div><img src={image5} alt="" className='h-[250px] w-[160px] mt-4 ml-20'/></div>
                    <span className='absolute opacity-0 group-hover:opacity-100 group-hover:bottom-[290px]   group-hover:left-[285px]  transition-transform duration-300 transform translate-x-5 group-hover:translate-x-0'><FaArrowRight className='text-gray-600'/></span>
                    <div className='pl-8 mt-7 lg:'>
                      <div className='text-green-500 text-[0.7rem] text-center transform transition-transform duration-300 group-hover:translate-y-[-10px]'>MODERN EDITION</div>
                      <div className='font-bold text-[0.9rem] text-center mt-2 group-hover:opacity-100 group-hover:text-green-600   transform transition-transform duration-300 group-hover:translate-y-[-10px]'> MODERN BEAT HT</div>
                      <div>
                      
                      <p className='text-[0.9rem] group-hover:opacity-0 group-hover:text-green-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, placeat!</p>
                       
                               <div className='opacity-0 group-hover:opacity-100 hover group-hover:relative  group-hover:bottom-6'>

                                <div className='flex gap-4 ml-24'>

                                <FaEye size={14} className='text-gray-400 transform transition-transform duration-300 group-hover:translate-y-[-10px]'/>  
                                    
                                    <FaHeart size={14} className='text-gray-400 transform transition-transform duration-300 group-hover:translate-y-[-10px]'/>  
                                    <FaShoppingCart size={14} className='text-gray-400 transform transition-transform duration-300 group-hover:translate-y-[-10px]'/>  
                                </div>
                                      
                               </div>
                               </div>
                               </div>
                    <div>
                   

                    <p className='text-center mt-7 lg:mt-2 group-hover:opacity-0'> $155.000</p>

                    <div className="absolute h-10 w-48 inset-0 mt-[480px] lg:right-3  opacity-0 group-hover:opacity-100">  
                                   
                   
                              <div className=' flex'>
                                       <CustomButton
                                          backgroundColor = 'limegreen'
                                          label = 'Learn More'
                                          color = 'white'
                                          // onClick={()=>alert('hiiii')}
                                           marginTop = '20px'
                                           className='h-[60px] w-[260px] md:w-[150px] lg:w-[160px] text-white  mt-10 transition-transform duration-300 transform translate-x-0 group-hover:translate-x-2'
           
                                            />
           <div>
           
                                         <CustomButton
                
                                        //  height='60px'
                                         width = '148px'
                                         backgroundColor = 'black'
                                         label = 'ADD TO CART'
                                      
                                         color = 'white'
                                         // onClick={()=>alert('hiiii')}
                                         marginTop = '20px'
                                         className='h-[60px] w-[260px] md:w-[150px] text-[0.9rem] lg:w-[165px] mt-2 text-white  transition-transform duration-300 transform translate-x-10  group-hover:translate-x-0'
                                       
                                          />

                     
                                      </div>
                       </div>
                                              
                                              
                                         
                                           </div>  
                                          
                    </div>
                   
                      
                   
              </div>

        <div className='h-[560px]  hidden lg:block bg-slate-50'>
        <div className='h-[560px] relative  group border-r-2 border-r-slate-400 bg-slate-50'>
                <span className='absolute opacity-0 group-hover:opacity-100 top-[250px] transition-transform duration-300 transform translate-x-0 group-hover:translate-x-5'><FaArrowLeft className='text-gray-600'/></span>
    
                    <div><img src={image5} alt="" className='h-[250px] relative top-16 w-[160px]  ml-20'/></div>
                    <span className='absolute opacity-0 group-hover:opacity-100 group-hover:bottom-[290px]   group-hover:left-[285px]  transition-transform duration-300 transform translate-x-5 group-hover:translate-x-0'><FaArrowRight className='text-gray-600'/></span>
                    <div className='pl-8 mt-7 lg:'>
                      <div className='text-green-500 text-[0.7rem] text-center transform transition-transform duration-300 lg:mt-28 group-hover:translate-y-[-10px]'>MODERN EDITION</div>
                      <div className='font-bold text-[0.9rem] text-center mt-2 group-hover:opacity-100 group-hover:text-green-600   transform transition-transform duration-300 group-hover:translate-y-[-10px]'> MODERN BEAT HT</div>
                      <div>
                      
                      <p className='text-[0.9rem] group-hover:opacity-0 group-hover:text-green-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, placeat!</p>
                       
                               <div className='opacity-0 group-hover:opacity-100 hover group-hover:relative  group-hover:bottom-6'>

                                <div className='flex gap-4 ml-24'>

                                <FaEye size={14} className='text-gray-400 transform transition-transform duration-300 group-hover:translate-y-[-10px]'/>  
                                    
                                    <FaHeart size={14} className='text-gray-400 transform transition-transform duration-300 group-hover:translate-y-[-10px]'/>  
                                    <FaShoppingCart size={14} className='text-gray-400 transform transition-transform duration-300 group-hover:translate-y-[-10px]'/>  
                                </div>
                                      
                               </div>
                               </div>
                               </div>
                    <div>
                   

                    <p className='text-center mt-7 lg:mt-2 group-hover:opacity-0'> $155.000</p>

                    <div className="absolute h-10 w-48 inset-0 mt-[480px] lg:right-3  opacity-0 group-hover:opacity-100">  
                                   
                   
                              <div className=' flex'>
                                       <CustomButton
                                          backgroundColor = 'limegreen'
                                          label = 'Learn More'
                                          color = 'white'
                                          // onClick={()=>alert('hiiii')}
                                           marginTop = '20px'
                                           className='h-[60px] w-[260px] md:w-[150px] lg:w-[160px] text-white  mt-10 transition-transform duration-300 transform translate-x-0 group-hover:translate-x-2'
           
                                            />
           <div>
           
                                         <CustomButton
                
                                        //  height='60px'
                                         width = '148px'
                                         backgroundColor = 'black'
                                         label = 'ADD TO CART'
                                      
                                         color = 'white'
                                         // onClick={()=>alert('hiiii')}
                                         marginTop = '20px'
                                         className='h-[60px] w-[260px] md:w-[150px] text-[0.9rem] lg:w-[165px] mt-2 text-white  transition-transform duration-300 transform translate-x-10  group-hover:translate-x-0'
                                       
                                          />

                                      
                     
                                      </div>
                       </div>
                                              
                                              
                                         
                                           </div>  
                                          
                    </div>
                   
                      
                   
              </div>
            
       </div>


       <div className='h-[560px]  hidden lg:block bg-slate-50'>
        <div className='h-[560px] relative  group border-r-2 border-r-slate-400 bg-slate-50'>
                <span className='absolute opacity-0 group-hover:opacity-100 top-[250px] transition-transform duration-300 transform translate-x-0 group-hover:translate-x-5'><FaArrowLeft className='text-gray-600'/></span>
    
                    <div><img src={image5} alt="" className='h-[250px] relative top-16 w-[160px]  ml-20'/></div>
                    <span className='absolute opacity-0 group-hover:opacity-100 group-hover:bottom-[290px]   group-hover:left-[285px]  transition-transform duration-300 transform translate-x-5 group-hover:translate-x-0'><FaArrowRight className='text-gray-600'/></span>
                    <div className='pl-8 mt-7 lg:'>
                      <div className='text-green-500 text-[0.7rem] text-center transform transition-transform duration-300 lg:mt-28 group-hover:translate-y-[-10px]'>MODERN EDITION</div>
                      <div className='font-bold text-[0.9rem] text-center mt-2 group-hover:opacity-100 group-hover:text-green-600   transform transition-transform duration-300 group-hover:translate-y-[-10px]'> MODERN BEAT HT</div>
                      <div>
                      
                      <p className='text-[0.9rem] group-hover:opacity-0 group-hover:text-green-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, placeat!</p>
                       
                               <div className='opacity-0 group-hover:opacity-100 hover group-hover:relative  group-hover:bottom-6'>

                                <div className='flex gap-4 ml-24'>

                                <FaEye size={14} className='text-gray-400 transform transition-transform duration-300 group-hover:translate-y-[-10px]'/>  
                                    
                                    <FaHeart size={14} className='text-gray-400 transform transition-transform duration-300 group-hover:translate-y-[-10px]'/>  
                                    <FaShoppingCart size={14} className='text-gray-400 transform transition-transform duration-300 group-hover:translate-y-[-10px]'/>  
                                </div>
                                      
                               </div>
                               </div>
                               </div>
                    <div>
                   

                    <p className='text-center mt-7 lg:mt-2 group-hover:opacity-0'> $155.000</p>

                    <div className="absolute h-10 w-48 inset-0 mt-[480px] lg:right-3  opacity-0 group-hover:opacity-100">  
                                   
                   
                              <div className=' flex'>
                                       <CustomButton
                                          backgroundColor = 'limegreen'
                                          label = 'Learn More'
                                          color = 'white'
                                          // onClick={()=>alert('hiiii')}
                                           marginTop = '20px'
                                           className='h-[60px] w-[260px] md:w-[150px] lg:w-[160px] text-white  mt-10 transition-transform duration-300 transform translate-x-0 group-hover:translate-x-2'
           
                                            />
           <div>
           
                                         <CustomButton
                
                                        //  height='60px'
                                         width = '148px'
                                         backgroundColor = 'black'
                                         label = 'ADD TO CART'
                                      
                                         color = 'white'
                                         // onClick={()=>alert('hiiii')}
                                         marginTop = '20px'
                                         className='h-[60px] w-[260px] md:w-[150px] text-[0.9rem] lg:w-[165px] mt-2 text-white  transition-transform duration-300 transform translate-x-10  group-hover:translate-x-0'
                                       
                                          />

                           
                     
                                      </div>
                       </div>
                                              
                                              
                                         
                                           </div>  
                                          
                    </div>
                   
                      
                   
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
    </div>
  )
}

export default IndexComponent5