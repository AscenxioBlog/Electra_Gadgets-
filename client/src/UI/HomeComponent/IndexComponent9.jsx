import React from 'react'
import CustomButton from '../../ReusableComponent/BtnComponent/CustomBtnComponent'
import image3 from './TheImages/image3.jpg'
function IndexComponent9() {
  return (
    <div>

        <div className='grid lg:grid-cols-3 ml-5 mr-5 lg:ml-14  mt-16 lg:mr-14'>
        <div className=' h-[48vh]  md:h-[45vh] lg:min-h-[68vh] rounded-md bg-cover bg-blend-darken text-gray-200 lg:mt-0 bg-black bg-opacity-50' style={{ backgroundImage: `url(${image3})` }}>
<div className='text-center mt-11 md:mt-14'>RELIABILITY</div>
<div className='text-center mt-5'>RELIABILITy perfect soundfor everyone</div>
<div className='mt-7 text-center text-green-500'>_ ________</div>
<p className='pt-7 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium libero iusto voluptatem eum voluptates fugiat quia odio, culpa et officia.</p>

<div className='flex justify-center'>
<CustomButton
     // className='h-14 md:h-14 lg:h-14 w-80 w md:w-36 lg:w-36 mt-6 bg-white text-black rounded-full'
         height='60px'
         // width = '150px'
         backgroundColor = 'black'
         color = ' white'
         label = 'Learn More'
         borderRadius = '50px'
         // onClick={()=>alert('hiiii')}
         marginTop = '20px'
         className='h-[60px] w-[300px] md:w-[250px] mt-9 lg:w-[150px]'

     />
     </div>

        </div>


        <div className=' h-[48vh]  md:h-[45vh] lg:min-h-[68vh] mt-4 lg:mt-0 rounded-md bg-cover bg-blend-darken text-gray-200 bg-black bg-opacity-50 lg:ml-5 ' style={{ backgroundImage: `url(${image3})` }}>
<div className='text-center mt-11 md:mt-14'>RELIABILITY</div>
<div className='text-center mt-5'>RELIABILITy perfect soundfor everyone</div>
<div className='mt-7 text-center text-green-500'>_ ________</div>
<p className='pt-7 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium libero iusto voluptatem eum voluptates fugiat quia odio, culpa et officia.</p>

<div className='flex justify-center'>
<CustomButton
     // className='h-14 md:h-14 lg:h-14 w-80 w md:w-36 lg:w-36 mt-6 bg-white text-black rounded-full'
         height='60px'
         // width = '150px'
         backgroundColor = 'black'
         color = ' white'
         label = 'Learn More'
         borderRadius = '50px'
         // onClick={()=>alert('hiiii')}
         marginTop = '20px'
         className='h-[60px] w-[300px] md:w-[250px] mt-9 lg:w-[150px]'

     />
     </div>

        </div>


        <div className=' h-[48vh]  md:h-[45vh] lg:min-h-[68vh] mt-4 lg:mt-0 lg:ml-4 rounded-md bg-cover bg-blend-darken text-gray-200 bg-black bg-opacity-50' style={{ backgroundImage: `url(${image3})` }}>
<div className='text-center mt-11 md:mt-14'>RELIABILITY</div>
<div className='text-center mt-5'>RELIABILITy perfect soundfor everyone</div>
<div className='mt-7 text-center text-green-500'>_ ________</div>
<p className='pt-7 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium libero iusto voluptatem eum voluptates fugiat quia odio, culpa et officia.</p>

<div className='flex justify-center'>
<CustomButton
     // className='h-14 md:h-14 lg:h-14 w-80 w md:w-36 lg:w-36 mt-6 bg-white text-black rounded-full'
         height='60px'
         // width = '150px'
         backgroundColor = 'black'
         label = 'Learn More'
         borderRadius = '50px'
         // onClick={()=>alert('hiiii')}
         marginTop = '20px'
         color = 'white'
         className='h-[60px] w-[300px] md:w-[250px] mt-9 lg:w-[150px]'

     />
     </div>

        </div>


        
        </div>
    </div>
  )
}

export default IndexComponent9