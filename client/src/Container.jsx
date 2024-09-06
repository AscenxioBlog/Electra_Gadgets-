import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexComponent from './UI/HomeComponent/IndexComponent';
import ProductComponent from './UI/ProductComponent/ProductComponent';
import AboutComponent from './UI/AboutComponent/AboutComponent';
import ServiceComponent from './UI/ServiceComponent/ServiceComponent';


function Container() {
  return (
    <div>
      <BrowserRouter>
      
      <Routes>
        {/* <AboutComponent/>ient */}
        {/* <Route path='/' element={}/> */}
        <Route path='/' element={<IndexComponent/>}/>
        <Route path='/product' element={<ProductComponent/>}/>
        <Route path='/about' element={<AboutComponent/>}/>
        <Route path='/service' element={<ServiceComponent/>}/>

      </Routes>
      
      </BrowserRouter>
        
    </div>
  )
}

export default Container