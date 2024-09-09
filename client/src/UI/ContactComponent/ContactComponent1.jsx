import React from 'react'

function ContactComponent1() {
  return (
    <div className=' first h-[130vh] w-full flex justify-center items-center '>
      <div className=" h-[300px] w-[80%] bg-[] flex flex-col items-center justify-center">
        <div className=" text-[25px] md:text-[30px] lg:text-[40px] font-extrabold text-white">
          <h1>CONTACT US</h1>
        </div>
        <div className=" flex gap-3">
            <section className=' h-[3px] w-[20px] bg-MainBg' style={{borderTopLeftRadius:'10px', borderBottomLeftRadius: '10px'}}></section>
            <section className=' h-[3px] w-[70px] bg-MainBg'></section>
            <section className=' h-[3px] w-[20px] bg-MainBg' style={{borderBottomRightRadius: ' 10px', borderTopRightRadius: '10px'}}></section>
        </div>
        <div className=" w-full flex flex-col items-center space-y-4 mt-4 text-white text-[18px]">
          <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debiti magni facere.</span>
          <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span> 
          <span>Lorem ipsum dolor sit amet.</span>
        </div>
      </div>
        
        
      
    </div>
  )
}

export default ContactComponent1
