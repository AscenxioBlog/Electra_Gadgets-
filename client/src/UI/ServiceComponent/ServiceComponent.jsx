import React from 'react'
import ServiceComponent1 from './ServiceComponent1'
import ServiceComponent2 from './ServiceComponent2'
import ServiceThirdComponent from './ServiceThirdComponent'
import ServiceFourthComponent from './ServiceFourthComponent'

function ServiceComponent() {
  return (
    <div className=''>
      <ServiceComponent1/>
      <ServiceComponent2/>
      <ServiceThirdComponent/>
      <ServiceFourthComponent/>
      
    </div>
  )
}

export default ServiceComponent