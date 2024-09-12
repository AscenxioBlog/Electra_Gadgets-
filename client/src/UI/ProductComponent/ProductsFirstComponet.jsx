import React from 'react'
import { Link } from 'react-router-dom'

function ProductsFirstComponet() {
        
     const products = [     
      {
        id: 1,
        name: "USB WATCH CHARGER",
        category: "ACCESSORIES",
        price: 630.00,
        Image: "http://unionagency.one/exzo/img/product-112.jpg",
      },

      {
        id: 2,
        name: "USB WATCH CHARGER",
        category: "ACCESSORIES",
        price: 630.00,
        Image: "http://unionagency.one/exzo/img/product-111.jpg",
      },

      {
        id: 3,
        name: "USB WATCH CHARGER",
        category: "ACCESSORIES",
        price: 704,
        Image: "http://unionagency.one/exzo/img/product-113.jpg",
      },

      {
        id: 4,
        name: "USB WATCH CHARGER",
        category: "ACCESSORIES",
        price: 122,
        Image: "http://unionagency.one/exzo/img/product-114.jpg",
      },

      // {
      //   id: 5,
      //   accessories: "USB WATCH CHARGER",
      //   category: "ACCESSORIES",
      //   price: 630.00,
      //   Image: "",
      // },

      // {
      //   id: 6,
      //   accessories: "USB WATCH CHARGER",
      //   category: "ACCESSORIES",
      //   price: 630.00,
      //   Image: "",
      // },
     ]

  return (
    <div>
         <div className='min-h-[100vh] bg-[#FFFF] mt-16'>
            <div className='h-[30px] p-[70px] text-[gray] text-[13px] font-medium flex justify-start items-center'>
                <ul className='ml-20 flex gap-3'>
                    <li className='hover:text-[green]'><Link>HOME</Link></li>
                    <li  className='hover:text-[green]'><Link>ACCESORIES</Link></li>
                    <li  className='hover:text-[green]'><Link>GADGETS</Link></li>
                    <li  className='hover:text-[green]'><Link>SPORTS GADGETS</Link></li>

                </ul>
            </div>


            <div className='h-[480px] mt-5 ml-[150px]'>
                 
                   <div className=''>
                          <h1 className='font-bold text-[20px]'>POPULAR PRODUCTS</h1>

                    <div>
                         
                 <div className='h-[320px] w-[88%] mt-5 grid border-b-[.2px] border-t-[.2px] border-r-[.2px] border-[#8080802f] grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>

                       {products.map((product) => (
                          <div key={product.id} className='h-[318px] w-[200px] border-l-[.2px]  border-[#8080802f] relative parent'>
                             <h1 className='ml-[33px] text-[12px] font-medium text-[#B4CE20] mt-6'>{product.category}</h1>

                             <h1 className='font-bold text-[14px] ml-[33px] '>{product.name}</h1>

                             <img
                                src={product.Image}
                                className='object-cover rounded-lg mt-10 ml-[50px]'
                            />

                            <h1 className='ml-[33px] font-medium mt-6'>${product.price}</h1>

                              {/* <section className='h-[170px] w-[70px] flex flex-col justify-around absolute right-0 top-10 first-child'>
                                  <button className='h-[50px] w-[50px] bg-white rounded-[50%] flex justify-center items-center text-[25px]'><i class='bx bx-cart-alt'></i></button>
                                  <button className='h-[50px] w-[50px] bg-white rounded-[50%] flex justify-center items-center text-[25px]'><i class='bx bx-heart'></i></button>
                                  <button className='h-[50px] w-[50px] bg-[red] rounded-[50%] flex justify-center items-center text-[25px]'></button>
                              </section> */}
                          </div>
                        ))}

                        </div>

                      </div>
                   </div>
            </div>

            {/* <div className='h-[100px] bg-green-900  ml-[150px]'></div> */}
                
         </div>
    </div>
  )
}

export default ProductsFirstComponet 