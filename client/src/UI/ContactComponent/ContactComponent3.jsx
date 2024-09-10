import React from 'react'

function ContactComponent3() {
  return (
    <div className=' h-[100vh] w-full bg-[] flex justify-center items-center'>
      <div className=" h-[90vh] w-full md:w-[95%] lg:w-[80%] bg-btncolo flex justify-center items-center rounded-[20px] overflow-hidden">
        {/* <h1 className='text-[40px] font-bold'>MAP</h1> */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth" style={{width:"100%", height:"100%"}} frameborder="0"></iframe>

      </div>
    </div>
  )
}

export default ContactComponent3
