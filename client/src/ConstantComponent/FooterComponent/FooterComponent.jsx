import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";

function FooterComponent() {
  return (
    <div>
       <footer>

<div className="foot min-h-[200px] w-full bg-MainBg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5">
    <div className=" flex flex-col place-items-center space-y-4 pt-[50px]">
        <h1 className=' text-[25px] font-bold'>Company</h1>
        <ol className=' text-[17px] space-y-4'>
            <li><Link to="/About">About</Link></li>
            <li><Link>Careers</Link></li>
            <li><Link>Terms</Link></li>
            <li><Link>Privacy Policy</Link></li>
        </ol>
    </div>


    <div className=" flex flex-col place-items-center space-y-4 pt-[50px]">
    <h1 className=' text-[25px] font-bold'>Quick Links</h1>
        <ol className=' text-[17px] space-y-4'>
            <li><Link>Create Account</Link></li>
            <li><Link>Login</Link></li>
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/service">Service</Link></li>
            <li><Link>Admin</Link></li>
        </ol>
    </div>


    <div className="  flex flex-col place-items-center space-y-4 pt-[50px]">
    <h1 className=' text-[25px] font-bold'>Supports</h1>
        <ol className=' text-[17px] space-y-4'>
            <li><Link>Contact Support</Link></li>
            <li><Link>Frequently Asked Questiond (FAQ)</Link></li>
        </ol>
    </div>


    <div className="  flex flex-col place-items-center space-y-4 pt-[50px]">
    <h1 className=' text-[25px] font-bold'>Contact Us</h1>
    <div className=" w-full flex gap-2 justify-center">
           <section className=' h-[40px] w-[40px] rounded-[50%] bg-slate-600 text-[28px] text-slate-400 flex justify-center items-center hover:bg-MainBg transition-all hover:scale-[1.2]'><FaFacebook /></section>
            <section className=' h-[40px] w-[40px] rounded-[50%] bg-slate-600 text-[28px] text-slate-400 flex justify-center items-center hover:bg-MainBg transition-all hover:scale-[1.2]'><AiFillTwitterCircle /></section>
            <section className=' h-[40px] w-[40px] rounded-[50%] bg-slate-600 text-[28px] text-slate-400 flex justify-center items-center hover:bg-MainBg transition-all hover:scale-[1.2]'><FaLinkedin /></section>
            <section className=' h-[40px] w-[40px] rounded-[50%] bg-slate-600 text-[28px] text-slate-400 flex justify-center items-center hover:bg-MainBg  transition-all hover:scale-[1.2]'><FaGooglePlus /></section>
           </div>
    </div>
</div>
</footer>
    </div>
  )
}

export default FooterComponent
