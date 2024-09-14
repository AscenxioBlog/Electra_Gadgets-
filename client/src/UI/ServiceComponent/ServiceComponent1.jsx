import React from 'react'

function ServiceComponent1() {
  return (
    <div className='service bg-[yellow] h-[200px] w-full mt-[70px] aboutH flex items-center justify-center flex-col font-sans md:h-[400px] md:mt-10 lg:h-[700px] box-border '>
       <div className=" h-[200px] w-[80%] bg-[] flex flex-col items-center justify-center">
        <div className="  text-[1.5rem] md:text-[2rem] lg:text-[3rem] font-bold text-white">
          <h1>CONTACT US</h1>
        </div>
        <div className=" flex gap-3">
            <section className=' h-[2px] w-[20px] bg-MainBg' style={{borderTopLeftRadius:'10px', borderBottomLeftRadius: '10px'}}></section>
            <section className=' h-[2px] w-[70px] bg-MainBg'></section>
            <section className=' h-[2px] w-[20px] bg-MainBg' style={{borderBottomRightRadius: ' 10px', borderTopRightRadius: '10px'}}></section>
        </div>
        <div className=" w-full text-center mt-4 text-white text-[12px] md:text-[20px] lg:text-[24px]">
          <p>
              In feugiat molestie tortor a malesuada. Etiam a venenatis ipsum. Proin pharetra elit at feugiat commodo vel placerat tincidunt sapien nec
          </p>


        </div>
      </div>
        
    </div>
  )
}

export default ServiceComponent1
