import React from 'react'

function ProductsSecondComponent() {

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
  ]


  return (
    <div>

             <div className='h-[500px]  mt-5 ml-[150px]'>

                   <div className='bg-red-800'>
      
                    <div>
                         
                 <div className='h-[320px] w-[88%] mt-5 grid border-[1px] border-[gray] grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>

                       {products.map((product) => (
                          <div key={product.id} className='h-[320px] w-[200px] border-l-[1px]  border-[black] relative popular-productHover'>
                             <h1 className='ml-[27px] text-[12px] font-medium text-[#B4CE20] mt-6'>{product.category}</h1>

                             <h1 className='font-bold text-[14px] ml-[27px] '>{product.name}</h1>

                             <img
                                src={product.Image}
                                className='object-cover rounded-lg mt-10 ml-[20px]'
                            />

                            <h1 className='ml-[27px] font-medium mt-6'>${product.price}</h1>

                              {/* <section className='h-[170px] w-[70px] flex flex-col justify-around absolute right-0 top-10 HoverPopular-Product'>
                                  <button className='h-[50px] w-[50px] bg-white rounded-[50%] flex justify-center items-center text-[25px]'><i class='bx bx-cart-alt'></i></button>
                                  <button className='h-[50px] w-[50px] bg-white rounded-[50%] flex justify-center items-center text-[25px]'><i class='bx bx-heart'></i></button>
                                  <button className='h-[50px] w-[50px] bg-[red] rounded-[50%] flex justify-center items-center text-[25px]'></button>
                              </section> */}
                          </div>
                        ))}

                        </div>
                    </div>
                   </div>

                   {/* <div></div> */}
            </div>
    </div>
  )
}

export default ProductsSecondComponent