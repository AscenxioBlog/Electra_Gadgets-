import React from 'react'
import AboutFirstComponent from './AboutFirstComponent'
import AboutSecondComponent from './AboutSecondComponent'

function AboutComponent() {
  return (
    <div className=' h-[100vh] w-full  bg-red-800'>

      <AboutFirstComponent/>
      <AboutSecondComponent/>

    </div>
  )
} 

export default AboutComponent