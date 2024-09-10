import React from 'react'
import { TiGlobe } from "react-icons/ti";
import { RiCustomerService2Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { MdOutlineContactMail } from "react-icons/md";
import { GiCoffeeCup } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
function ContactComponent2() {
  return (
    <div className=' min-h-[500px] md:h-[200px] lg:h-[200px] w-full bg-[] flex flex-col justify-center'>
      <div className=" h-[150px] w-full bg-[] flex flex-col items-center">
        <h1 className=' text-[20px] md:text-[25px] font-medium'>OUR CONTACTS</h1>
        <h1 className=' text-[30px] md:text-[40px] lg:text-[50px] font-extrabold uppercase'>we ready for your <span className='hidden md:inline-block'>questions</span></h1>
        <span className=' md:hidden lg:hidden uppercase text-[30px] font-extrabold'>questions</span>
      </div>

      <div className=" min-h-[200px] w-full bg-[]  flex justify-center ">
        <div className="min-h-[200px] w-[80%] md:w-[95%] lg:w-[80%] bg-[] grid grid-cols-1 md:grid-cols-4 gap-3">
          <div className="h-[200px] bg-[] flex flex-col items-center">
            <section className=' h-[100px] w-full bg-[] text-[80px] text-MainBg flex  justify-center'><TiGlobe /></section>
            <span className=' text-[20px] font-medium text-center'>ADDRESS</span> 
            <span className=' text-[17px] text-slate-400'>1st, new york, usa</span>
          </div>


          <div className="h-[200px] bg-[] flex flex-col items-center">
          <section className=' h-[100px] w-full bg-[] text-[80px] text-MainBg flex  justify-center'><RiCustomerService2Fill /></section>
            <span className=' text-[20px] font-medium text-center'>PHONE</span> 
            <span className=' text-[17px] text-slate-400 hover:underline'><Link>+234 12345678</Link></span>
            <span className=' text-[17px] text-slate-400 hover:underline'><Link>+234 12345678</Link></span>
          </div>


          <div className="h-[200px] bg-[] flex flex-col items-center">
          <section className=' h-[100px] w-full bg-[] text-[80px] text-MainBg flex  justify-center'><MdOutlineContactMail /></section>
            <span className=' text-[20px] font-medium text-center'>EMAIL</span> 
            <span className=' text-[17px] text-slate-400 hover:underline'><Link>Electra_Gadgets.com</Link></span>
          </div>
          <div className="h-[200px] bg-[] flex flex-col items-center">
          <section className=' h-[100px] w-full bg-[] text-[80px] text-MainBg flex  justify-center'><GiCoffeeCup /></section>
            <span className=' text-[20px] font-medium text-center'>FOOLOW US</span> 
           <div className=" w-full flex gap-2 justify-center">
           <section className=' h-[40px] w-[40px] rounded-[50%] bg-slate-600 text-[28px] text-slate-400 flex justify-center items-center hover:bg-MainBg transition-all hover:scale-[1.2]'><FaFacebook /></section>
            <section className=' h-[40px] w-[40px] rounded-[50%] bg-slate-600 text-[28px] text-slate-400 flex justify-center items-center hover:bg-MainBg transition-all hover:scale-[1.2]'><AiFillTwitterCircle /></section>
            <section className=' h-[40px] w-[40px] rounded-[50%] bg-slate-600 text-[28px] text-slate-400 flex justify-center items-center hover:bg-MainBg transition-all hover:scale-[1.2]'><FaLinkedin /></section>
            <section className=' h-[40px] w-[40px] rounded-[50%] bg-slate-600 text-[28px] text-slate-400 flex justify-center items-center hover:bg-MainBg  transition-all hover:scale-[1.2]'><FaGooglePlus /></section>
           </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactComponent2
