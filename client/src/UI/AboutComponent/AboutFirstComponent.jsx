import React from 'react'
import CustomButton from '../../ReusableComponent/BtnComponent/CustomBtnComponent'

function AboutFirstComponent() {
  return (
        // my header component 
    <div className='bg-[yellow] h-[200px] w-full mt-[70px] aboutH flex items-center justify-center flex-col font-sans md:h-[320px]  md:mt-10 lg:h-[700px] box-border'>
      <div className='text-white flex items-center justify-center flex-col p-[20px]  box-border'>
            <h1 className='font-bold  mt-[10px] text-[1.5rem] md:text-[2rem] lg:text-[3rem]'> WE ARE ELECTRA GADGETS</h1>
      </div>
      <div className=' translate-y-[-8px] w-full h-[9px] flex items-center justify-center'>
          <div className=' before:contents-[""] before:absolute before:w-[20px] before:h-[3px] before:bg-[lime] before:left-[128px]  md:before:left-[297px] lg:before:left-[606px]'></div>      
          <div className=' before:contents-[""] before:absolute before:w-[70px] before:h-[3px] before:bg-MainBg before:left-[150px] md:before:left-[320px] md:before:w-[110px]
               lg:before:left-[630px] lg:before:w-[130px]  
              '></div>
          <div className='b3 after:contents-[""] after:absolute after:w-[20px] after:h-[3px] after:bg-MainBg after:right-[148px] md:after:right-[315px] lg:after:right-[642px]'></div>      

      </div>
      <div>
        <p className='text-[15px] text-center md:text-[1.5rem] lg:text-[2rem] text-white p-5 box-border'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nitatibus 
                  cumque alias repellat error, ducimus aliquam vitae numquam veniam saepe rem.
         </p>
      </div>
     
     

      {/* <CustomButton
        height= '100px'
      
      /> */}

    </div>
  )
}

export default AboutFirstComponent