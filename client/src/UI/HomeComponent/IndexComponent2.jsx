import React from 'react'
import image3 from './TheImages/image4.jpg'
import image4 from './TheImages/image5.jpg'
import CustomButton from '../../ReusableComponent/BtnComponent/CustomBtnComponent'
function IndexComponent2() {
  return (
    <div>

<div className='md:h-[55vh] lg:min-h-[78vh] lg:mr-14 lg:ml-14 bg-slate-500 relative  grid md:grid-cols-2 lg:grid-cols-2'>

          
<div className=' h-[48vh]  md:h-[55vh] lg:min-h-[78vh]  bg-cover bg-blend-darken text-gray-200 bg-[#478CCF] bg-opacity-50' style={{ backgroundImage: `url(${image3})`  }}>
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
  
     backgroundColor = '#FABC3F'
     label = 'Learn More'
     borderRadius = '50px'
     // onClick={()=>alert('hiiii')}
     fontWeight = 'bold'
     marginTop = '14px'
     className='h-[55px] w-[300px] md:w-[150px] lg:w-[150px] hover:shadow-md hover:shadow-[#478CCF]'

 />
 
     

</div>  
</div>
<div className=' h-[52vh]  md:h-[55vh] lg:min-h-[78vh] bg-cover bg-blend-darken text-gray-200 bg-[#478CCF] bg-opacity-60' style={{ backgroundImage: `url(${image4})` }}> 


     <div className='lg:pt-32 pt-14 md:pt-24 ml-5 md:ml-12 lg:ml-14'>
     <div>STREET COLLECTION</div>
     <div className='text-white text-[2rem] font-extrabold'>NOISE IS NOT A PROBLEM</div>
     <div className='text-green-500 pt-4'>_ _________</div>
     <div>
     <p className='text-[1.2rem] pt-5'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
     <span className='mt-4'>Praesentir pulvinar ante et nisl scelerisque.</span>
     </div>
     <CustomButton
                        backgroundColor = '#FABC3F'
                        label = 'Learn More'
                        borderRadius = '50px'
                        // onClick={()=>alert('hiiii')}
                        fontWeight = 'bold'
                        marginTop = '14px'
                        className='h-[55px] w-[300px] md:w-[150px] lg:w-[150px] hover:shadow-md hover:shadow-[#478CCF]'

                    />
                    
</div>  

 </div> 


</div>


    </div>
  )
}

export default IndexComponent2