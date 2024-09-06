import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexComponent from './UI/HomeComponent/IndexComponent';
import ProductComponent from './UI/ProductComponent/ProductComponent';
import AboutComponent from './UI/AboutComponent/AboutComponent';
import ServiceComponent from './UI/ServiceComponent/ServiceComponent';
import HeaderComponent from './ConstantComponent/HeaderComponent/HeaderComponent';
import ContactComponent from './UI/ContactComponent/ContactComponent';

function Container() {
  return (
    <div>
      <BrowserRouter>
<<<<<<< HEAD
        <Routes>
          <Route path='/' element={<IndexComponent />} />
          <Route path='/product' element={<ProductComponent />} />
          <Route path='/about' element={<AboutComponent />} />
          <Route path='/service' element={<ServiceComponent />} />
        </Routes>
=======
          <HeaderComponent/>
      <Routes>
        {/* <AboutComponent/>ient */}
        {/* <Route path='/' element={}/> */}
        <Route path='/' element={<IndexComponent/>}/>
        <Route path='/product' element={<ProductComponent/>}/>
        <Route path='/about' element={<AboutComponent/>}/>
        <Route path='/service' element={<ServiceComponent/>}/>
        <Route path='/contact' element={<ContactComponent/>}/>

      </Routes>
      
>>>>>>> bed29155d1a4961d0a4035c8d142df485a6e6447
      </BrowserRouter>
    </div>
  );
}

export default Container;
