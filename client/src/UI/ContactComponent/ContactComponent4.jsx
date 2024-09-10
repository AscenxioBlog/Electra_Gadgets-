import React from 'react'
import CustomInput from '../../ReusableComponent/InputComponent/CustomInput'
import CustomButton from '../../ReusableComponent/BtnComponent/CustomBtnComponent'

function ContactComponent4() {
  return (
    <div className=' h-[100vh] w-full bg-[] flex justify-center items-center'>
        <div className=" h-[95vh] w-full md:w-[95%] lg:w-[80%] bg-[]">
            <div className=" h-[80px] w-full bg-[] text-[25px] md:text-[35px] font-bold uppercase flex justify-center items-center">
                <h1>have a questions?</h1>
            </div>


          <form action="">
          <div className=" min-h-[80px] w-full bg-[] grid grid-cols-1 md:grid-cols-2  gap-5">
            <CustomInput
                type="text"
                name="name"
                required  
               placeholder= 'Name'
                className='bb h-[60px]  bg-[transparent] rounded-[45px]'
            />

            <CustomInput
                type="text"
                name="email"
                required  
               placeholder= 'Email'
                className='bb h-[60px]  bg-[transparent] rounded-[45px]'
             />
            </div>

            <div className=" min-h-[80px] w-full bg-[] grid grid-cols-1 md:grid-cols-2  gap-5">
            <CustomInput
                type="text"
                name="phone"
                required  
               placeholder= 'Phone'
                className='bb h-[60px]  bg-[transparent] rounded-[45px]'
            />

            <CustomInput
                type="text"
                name="subject"
                required  
               placeholder= 'Subject'
                className='bb h-[60px]  bg-[transparent] rounded-[45px]'
             />
            </div>
            <br />
            
            <textarea 
                 name="message"
                 required
                 className='bb h-[200px] w-[100%] rounded-[10px]  bg-[transparent] pl-3 pt-2'
                 placeholder='Your Message'
            ></textarea>
            <div className=" h-[80px] w-full bg-[] flex justify-center items-center">
                <CustomInput
                
                   
                    type= 'submit'
                className='bb cc h-[60px]  w-[150px] bg-[#FABC3F] rounded-[50px] text-white '

                   
                />
            </div>
          </form>
        </div>
      
    </div>
  )
}

export default ContactComponent4
