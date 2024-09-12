import React from 'react'
import { Link } from 'react-router-dom'

function ProductsSecondComponent() {

  const products = [     
    {
      id: 1,
      name: "SMARTPHONE VIBEX",
      category: "SMART PHONES",
      price: 630.00,
      Image: "http://unionagency.one/exzo/img/product-40.jpg",
      details: "Mollis nec consequat at in feugiat  mole stie tortor",
    },

    {
      id: 2,
      name: "SMARTPHONE VIBEX",
      category: "SMART PHONES",
      price: 630.00,
      Image: "http://unionagency.one/exzo/img/product-41.jpg",
       details: "Mollis nec consequat at in feugiat  mole stie tortor"
    },

    {
      id: 3,
      name: "SMARTPHONE VIBEX",
      category: "SMART PHONES",
      price: 704,
      Image: "http://unionagency.one/exzo/img/product-42.jpg",
       details: "Mollis nec consequat at in feugiat  mole stie tortor",
    },

    {
      id: 4,
      name: "SMARTPHONE VIBEX",
      category: "SMART PHONES",
      price: 122,
      Image: "http://unionagency.one/exzo/img/product-43.jpg",
       details: "Mollis nec consequat at in feugiat  mole stie tortor",
    },

    {
      id: 5,
      name: "SMARTPHONE VIBEX",
      category: "SMART PHONES",
      price: 122,
      Image: "http://unionagency.one/exzo/img/product-44.jpg",
       details: "Mollis nec consequat at in feugiat  mole stie tortor",
    },

    {
      id: 6,
      name: "SMARTPHONE VIBEX",
      category: "SMART PHONES",
      price: 321.00,
      Image: "http://unionagency.one/exzo/img/product-45.jpg",
       details: "Mollis nec consequat at in feugiat  mole stie tortor",
    },

    {
      id: 7,
      name: "SMARTPHONE VIBEX",
      category: "SMART PHONES",
      price: 321.00,
      Image: "http://unionagency.one/exzo/img/product-46.jpg",
       details: "Mollis nec consequat at in feugiat  mole stie tortor",
    },

    {
      id: 8,
      name: "SMARTPHONE VIBEX",
      category: "SMART PHONES",
      price: 321.00,
      Image: "http://unionagency.one/exzo/img/product-47.jpg",
       details: "Mollis nec consequat at in feugiat  mole stie tortor ",
    },

    {
      id: 9,
      name: "SMARTPHONE VIBEX",
      category: "SMART PHONES",
      price: 321.00,
      Image: "http://unionagency.one/exzo/img/product-48.jpg",
       details: "Mollis nec consequat at in feugiat  mole stie tortor",
    }
  ]


  return (
    <div>

        <div className='h-[100vh] grid grid-cols-[25%,75%]'>
                    
                 <div className='w-[250px] hidden md:block lg:block lg:ml-[86px]'>
                      <div className='mt-20'>
                         <b className='font-bold text-[23px]'>PRICE</b>
                      </div>

                      <div>
                         <input type="range" className='w-[220px] mt-5'/>

                         <h1 className='text-[gray]'>Price: <span className='font-medium text-[12px] text-black'>$36-$231</span></h1>
                      </div>
                
                      <div className='mt-9 leading-9'>
                         <b className='font-bold text-[23px]'>BRANDS</b> <br />

                         <h1 className='font-medium text-[gray] text-[13px]'> <input type="checkbox"/>&nbsp;LG</h1>

                         <h1 className='font-medium text-[gray] text-[13px]'> <input type="checkbox"/>&nbsp;SAMSUNG</h1>

                         <h1 className='font-medium text-[gray]  text-[13px]'> <input type="checkbox"/>&nbsp;APPLE</h1>

                         <h1 className='font-medium text-[gray] text-[13px]'> <input type="checkbox"/>&nbsp;HTC</h1>

                         <h1 className='font-medium text-[gray] text-[13px]'> <input type="checkbox"/>&nbsp;LENOVO</h1>
                      </div>

                      <div className='mt-8 leading-9'>
                         <b className='font-bold text-[23px]'>POPULAR TAGS</b> <br />

                        
                          <div className='font-medium text-[11px] text-[gray] mt-3 grid grid-cols-1 md:grid md:grid-cols-3 lg:grid lg:grid-cols-3'>
                               <Link className=' flex items-center hover:text-[#B4CE20]'>SMARTPHONES</Link>
                               <Link  className=' flex items-center hover:text-[#B4CE20]'>WIRELESS</Link>
                               <Link className=' flex items-center hover:text-[#B4CE20]'>CASES</Link>
                               <Link className=' flex items-center hover:text-[#B4CE20]'>PROFESSIONAL</Link>
                               <Link className='flex items-center hover:text-[#B4CE20]'>NEW</Link>
                               <Link className=' flex items-center hover:text-[#B4CE20]'>BRANDS</Link>
                               <Link className=' flex items-center hover:text-[#B4CE20]'>GADGETS</Link>
                               <Link className=' flex items-center hover:text-[#B4CE20]'>REPLACEMENT</Link>
                               <Link className=' flex items-center hover:text-[#B4CE20]'>HEADPHONES</Link>
                          </div>
                      </div>

                  </div> 

                 <div className='h-[80vh] w-[88%] gap-12 mt-5 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                  {products.map((product) => (
                    <div key={product.id} className='h-[430px] w-[250px] border-l-[.2px]  border-[#8080802f] relative cartView'>
                        <h1 className='ml-[27px] text-[12px] font-medium text-[#B4CE20] mt-6'>{product.category}</h1>

                        <h1 className='font-bold text-[14px] ml-[27px] '>{product.name}</h1>

                        <img
                          src={product.Image}
                          className='object-cover rounded-lg mt-10 ml-[50px]'
                      />

                    <h1 className='ml-[27px] font-medium text-[gray] mt-6'>${product.price}</h1>

                    <p className='ml-6 mt-3 text-[14px] text-[gray]'>
                         {product.details}
                    </p>

                      {/* <section className='h-[170px] w-[70px] flex flex-col justify-around absolute right-0 top-10 Popular-Product'>
                          <button className='h-[50px] w-[50px] bg-white rounded-[50%] flex justify-center items-center text-[25px]'><i class='bx bx-cart-alt'></i></button>
                          <button className='h-[50px] w-[50px] bg-white rounded-[50%] flex justify-center items-center text-[25px]'><i class='bx bx-heart'></i></button>
                          <button className='h-[50px] w-[50px] bg-[red] rounded-[50%] flex justify-center items-center text-[25px]'></button>
                      </section> */}
                  </div>
                  ))}

                  </div>
         </div>
                
    </div>
  )
}

export default ProductsSecondComponent