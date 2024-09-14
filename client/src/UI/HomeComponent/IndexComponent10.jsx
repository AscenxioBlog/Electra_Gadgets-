import React from 'react'
import image3 from './TheImages/image4.jpg'
import image4 from './TheImages/image5.jpg'
import CustomButton from '../../ReusableComponent/BtnComponent/CustomBtnComponent'
import CustomInput from '../../ReusableComponent/InputComponent/CustomInput'
function IndexComponent10() {
  return (
    <div className='lg:ml-14 mr-5 ml-5 mt-10 lg:mr-14'>
      

        <div className='grid md:grid-cols-2 lg:grid-cols-2'>
            <div>
            <div><img src={image3} alt="" className='w-[90vw]'/></div>
           
            </div>
            <div className='mt-6 md:mt-0 lg:mt-14 ml-2  lg:ml-[100px]'>
                <div className='text-green-400 text-[1.2rem] lg:text-center lg:text-[1.5rem]'>SPECIAL OFFERS <span className='text-black'>FOR SUBCRIBERS </span> </div>
                <div className='lg:font-extrabold text-center text-[1.2rem] ml-10 w-[200px] lg:w-[400px] justify-center  md:text-balance'>NEW OFFERS EVERY WEEK + DISCOUNT SYSTEM + BEST PRICES</div>

                
        
            <div>
                <p className='w-[300px] lg:w-[540px] text-center mt-7 text-gray-600'>Praesent nec finibus massa. Phasellus id auctor lacus, at iaculis lorem. Donec quis arcu elit. In vehicula purus sem, eu mattis est lacinia sit amet.</p>
            </div>
            
            <div className='md:flex flex lg:flex md:gap-3 lg:gap- mt-7 justify-center md:ml-36 lg:ml-48'>
<div>
                <CustomInput
                type = {'email'}
                height= '70px'
                width = '180px'
                 borderRadius = '50px'
                 name={''}
                 placeholder={'Enter your email'}
                 
             className='h-[60px] w-[300px] md:w-[300px] lg:w-[500px] rounded-full border-2 border-gray-400 text-white'
                
                />
                </div>

                <div>
            <CustomButton

     
         height='60px'
         // width = '150px'
         backgroundColor = 'limegreen'
         label = 'Submit'
         borderRadius = '50px'
         color = 'white'
         // onClick={()=>alert('hiiii')}
         marginTop = '20px'
         className='h-[60px] w-[150px] md:w-[150px] lg:w-[150px] relative right-[150px] md:right-40 bottom-5 mr-10 text-white'

     />
</div>


            </div>
            </div>

        </div>

      
    </div>
  )
}

export default IndexComponent10