import React from 'react'
import clientlogo from './Aboutpictures/client-logo-1.jpg'
import clientlogo2 from './Aboutpictures/client-logo-2.jpg'

function AboutNinthComponent() {
  return (
    <div className='h-[350px] w-full bg-[red] grid  grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-1 p-[10px]'>
            <div className='border-[2px] border-black md:border-[2px] md:border-black md:h-[120px] h-[120px] overflow-hidden hover:'>
                <div className='h-[120px]'>
                  <img src={clientlogo} alt=""  width='100%' height='100%' />

                </div>
                <div className='h-[0px]'>
                  <img src={clientlogo} alt=""   />

                </div>
            </div>
            <div>
                  <div>
                    <img src={clientlogo2} alt="" />
                  </div>
                  <div></div>
            </div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
        
    </div>
  )
}

export default AboutNinthComponent