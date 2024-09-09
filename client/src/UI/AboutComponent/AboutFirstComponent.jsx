import React from 'react'
import CustomButton from '../../ReusableComponent/BtnComponent/CustomBtnComponent'

function AboutFirstComponent() {
  return (
        // my header component 
    <div className='bg-[yellow] h-[200px] w-full mt-[70px] aboutH flex items-center justify-center flex-col font-sans md:h-[320px]  md:mt-10 lg:h-[700px] box-border'>
      <div className='text-white flex items-center justify-center flex-col p-[20px]  box-border'>
            <h1 className='font-bold  mt-[10px] text-[1.5rem] md:text-[2rem] lg:text-[3rem]'> WE ARE ELECTRA GADGETS</h1>

            <div className=' before:contents-[""] before:w-[60px] before:h-[30px] before:bg-[red]'></div>

            <p className='text-[15px] text-center md:text-[1.5rem] lg:text-[2rem]'>
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