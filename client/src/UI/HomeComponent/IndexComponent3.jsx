import React from 'react'
import image3 from './TheImages/image4.jpg'
import image4 from './TheImages/image5.jpg'
import image5 from './TheImages/headphone88.webp'
import CustomButton from '../../ReusableComponent/BtnComponent/CustomBtnComponent'
function IndexComponent3() {
  return (
    <div>

        <div className='min-h-[500px]  border-2 border-r-slate-600  lg:mr-14 lg:ml-14  bg-slate-100 grid md:grid-cols-2 lg:grid-cols-4'>
              <div className='h-[500px]  border-r-2 border-r-slate-700 bg-slate-100'>
                    <div className='h-8 w-28 lg:mt-8 text-white bg-green-400 rounded-full text-center'>Best Price</div>
                    <div><img src={image5} alt="" className='h-[300px] w-[250px] ml-8'/></div>
                    <div className='pl-8'>
                      <div className='text-green-500 text-[0.7rem]'>MODERN EDITION</div>
                      <div className='font-bold text-[0.9rem]'> MODERN BEAT HT</div>
                      <p className='text-[0.9rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, placeat!</p>
                    </div>

                    <div className='flex mt-5 ml-8'>
                      <p className=''> $155.000</p>
                      <div className='flex gap-1 ml-32 mt-2'>
                        <div className='h-3 w-3 bg-green-500'></div>
                        <div className='h-3 w-3 bg-blue-400'></div>
                        <div className='h-3 w-3 bg-gray-300'></div>
                      </div>
                    </div>
              </div>
              <div className='h-[500px] hidden md:block lg:block border-r-2 border-r-slate-700 bg-slate-100'>
              <div className='h-8 w-28 lg:mt-8 bg-red-500 rounded-full text-center text-white'>20% Discount</div>
              <div><img src={image5} alt="" className='h-[300px] w-[250px] ml-8'/></div>
              <div className='pl-8'>
                      <div className='text-green-500 text-[0.7rem]'>ERGO EDITION</div>
                      <div className='font-bold text-[0.9rem]'> SPORT BEAT ATX</div>
                      <p className='text-[0.9rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, placeat!</p>
                    </div>

                    <div className='flex mt-5 ml-8'>
                      <div className='flex gap-4'>
                      <p className='text-green-400'> $155.000</p>
                      <p className=' line-through'> $350.000</p>
                      </div>
                      
                      <div className='flex gap-1 ml-16 mt-2'>
                        <div className='h-3 w-3 bg-purple-500'></div>
                        <div className='h-3 w-3 bg-blue-400'></div>
                        <div className='h-3 w-3 bg-amber-500 bg'></div>
                      </div>
                    </div>
              </div>
              <div className='h-[500px]  border-r-2 border-r-slate-700 hidden lg:block bg-slate-100'>

              <div><img src={image5} alt="" className='h-[300px] lg:mt-14 w-[250px] ml-8'/></div>
              <div className='pl-8'>
                      <div className='text-green-500 text-[0.7rem]'>COLOREX EDITION</div>
                      <div className='font-bold text-[0.9rem]'> HIPSTER BEAT HR</div>
                      <p className='text-[0.9rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, placeat!</p>
                    </div>

                    <div className='flex mt-5 ml-8'>
                      <p className=''> $155.000</p>
                      <div className='flex gap-1 ml-32 mt-2'>
                        <div className='h-3 w-3 bg-blue-500'></div>
                        <div className='h-3 w-3 bg-orange-700'></div>
                        <div className='h-3 w-3 bg-yellow-300'></div>
                      </div>
                    </div>
              </div>
              <div className='h-[500px]  hidden lg:block bg-slate-100'>
       
              <div><img src={image5} alt="" className='h-[300px] w-[250px] lg:mt-14 ml-8'/></div>
              <div className='pl-8'>
                      <div className='text-green-500 text-[0.7rem]'>MODERN EDITION</div>
                      <div className='font-bold text-[0.9rem]'> HIPSTER BEAT HR</div>
                      <p className='text-[0.9rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, placeat!</p>
                    </div>

                    <div className='flex mt-5 ml-8'>
                      <p className=''> $155.000</p>
                      <div className='flex gap-1 ml-32 mt-2'>
                        <div className='h-3 w-3 bg-green-500'></div>
                        <div className='h-3 w-3 bg-blue-400'></div>
                        <div className='h-3 w-3 bg-gray-300'></div>
                      </div>
                    </div>
              </div>
        </div>

        <div className='flex justify-center mt-9 gap-1 lg:hidden'>
          <button className='h-2 w-2 rounded-full border-2 border-green-500  '></button>
          <button className='h-2 w-2 rounded-full border-2 border-green-500  '></button>
          <button className='h-2 w-2 rounded-full border-2 border-green-500  '></button>
          <button className='h-2 w-2 rounded-full border-2 border-green-500  '></button>
          <button className='h-2 w-2 rounded-full border-2 border-green-500  '></button>
          <button className='h-2 w-2 rounded-full border-2 border-green-500  '></button>
          <button className='h-2 w-2 rounded-full border-2 border-green-500  '></button>
          <button className='h-2 w-2 rounded-full border-2 border-green-500  '></button>
          <button className='h-2 w-2 rounded-full border-2 border-green-500  '></button>
        </div>
    </div>
  )
}

export default IndexComponent3