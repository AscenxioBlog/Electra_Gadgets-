import React from 'react'

import { GiParachute } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { GrStatusGood } from "react-icons/gr";
import { TiGlobe } from "react-icons/ti";
import { FiCoffee } from "react-icons/fi";
import { BsPiggyBank } from "react-icons/bs";

function ServiceFourthComponent() {
  return (
    <div className='h-[1100px] md:h-[500px] w-full md:w-full lg:w-[80%] lg:translate-x-[140px] mt-[50px] grid grid-cols-1 md:grid-cols-3 md:gap-[1px]  p-[10px] leading-[20px]'>
        <div className=' text-center'>
            <div className=' text-MainBg flex items-center justify-center font-bold text-[90px]'>
                <GiParachute />
            </div>
               <div>
                    <h1 className='font-bold text-[20px] md:text-[16px]'>PHASELLUS RHONCUS IN NUNC</h1>
                        <p className='text-[15px]'>
                            Etiam mollis tristique mi ac ultrices. Morbi vel neque eget lacus sollicitudin facilisis. Lorem ipsum dolor sit amet semper ante vehicula
                        </p>
               </div>
        </div>
        <div className=' text-center'>
            <div className=' text-MainBg flex items-center justify-center font-bold text-[90px]'>
                 <RiCustomerService2Fill />
            </div>
            <div>
                <h1 className='font-bold text-[20px] md:text-[16px]'>AMET MATTIS MOLESTIE NEC TORTOR </h1>
                <p className='text-[15px]'>
                     Etiam mollis tristique mi ac ultrices. Morbi vel neque eget lacus sollicitudin facilisis. Lorem ipsum dolor sit amet semper ante vehicula
                </p>
             </div>
        </div>
        <div className='text-center'>
            <div className=' text-MainBg flex items-center justify-center font-bold text-[90px]'>
                    <GrStatusGood />
            </div>
                <div>
                    <h1 className='font-bold text-[20px] md:text-[16px]'>MOLESTIE NEC TORTOR QUIS </h1>
                    <p className='text-[16px] '>
                        Etiam mollis tristique mi ac ultrices. Morbi vel neque eget lacus sollicitudin facilisis. Lorem ipsum dolor sit amet semper ante vehicula
                    </p>
                </div>
        </div>
        <div className='text-center'>
            <div className=' text-MainBg flex items-center justify-center font-bold text-[90px]'>
                        <TiGlobe />
            </div>
            <div>
                 <h1 className='font-bold text-[20px] md:text-[16px]'>RHONCUS IN NUNC SIT </h1>
                 <p className='text-[15px] '>
                       Etiam mollis tristique mi ac ultrices. Morbi vel neque eget lacus sollicitudin facilisis. Lorem ipsum dolor sit amet semper ante vehicula
                 </p>
            </div>
        </div>
        <div className='text-center'>
            <div className=' text-MainBg flex items-center justify-center font-bold text-[90px]'>
                            <FiCoffee />
            </div>
            <div>
                <h1 className='font-bold text-[20px] md:text-[16px]'>MOLESTIE NEC TORTOR QUIS </h1>
                <p className='text-[15px] '>
                        Etiam mollis tristique mi ac ultrices. Morbi vel neque eget lacus sollicitudin facilisis. Lorem ipsum dolor sit amet semper ante vehicula
                </p>
            </div>
        </div>
        <div className='text-center'>
            <div className=' text-MainBg flex items-center justify-center font-bold text-[90px]'>
                <BsPiggyBank />
            </div>
            <div>
                <h1 className='font-bold text-[20px] md:text-[16px]'>MOLESTIE NEC TORTOR QUIS </h1>
                <p className='text-[15px] '>
                     Etiam mollis tristique mi ac ultrices. Morbi vel neque eget lacus sollicitudin facilisis. Lorem ipsum dolor sit amet semper ante vehicula
                </p>
            </div>
        </div>

    </div>
  )
}

export default ServiceFourthComponent