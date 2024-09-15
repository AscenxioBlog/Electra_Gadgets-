import React from 'react'
import { Link } from 'react-router-dom'

function Headerchild(props) {
  return (
   <div className=" lg:hidden">
     <div className=' w-full bg-[] grid absolute top-[80px] z-10' style={{opacity:props. setOpacity, height:props.setView, transition:'1s'}}>

<Link className=" subnav text-[20px] font-bold  flex items-center pl-3"  to='/'>Home</Link>
      <Link className=" subnav font-bold  flex items-center pl-3 " to='/about'>About</Link>
      <Link className=" subnav font-bold  flex items-center pl-3" to='/product'>Product</Link>
    <Link className=" subnav font-bold  flex items-center pl-3" to='/service'>Service</Link>
      <Link  className=" subnav font-bold  flex items-center pl-3" to='/contact'>Contact</Link>
      <Link className=" subnav font-bold  flex items-center pl-3"to=''>Login</Link>

</div>
   </div>
  )
}

export default Headerchild
