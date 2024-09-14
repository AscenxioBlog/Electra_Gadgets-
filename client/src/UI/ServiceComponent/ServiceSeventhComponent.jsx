import React from 'react'
import footerr from '../../ServicePictures/footerpics.jpg'

function ServiceSeventhComponent() {
  return (
    <div className='h-[800px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-[80px] md:h-[410px] md:gap-[10px] '>
        <div className='h-[410px] lg:flex lg:justify-end'>
            <img src={footerr} alt=""  />

        </div>
        <div className='lg:h-[350px] h-[400px] p-[10px] text-start md:h-[410px] box-border lg:w-[80%]'>
            <h1 className='font-bold text-[18px] lg:text-2xl'>QUISQUE SCELERISQUE LEO NISL</h1>
            <p className='md:text-[13px] lg:text-[15px] mt-3'>
                Aenean facilisis, purus ut tristique pulvinar, odio neque commodo ligula, non vestibulum lacus justo vel diam. Aenean ac aliquet tortor, nec gravida urna. Ut nec urna elit. Etiam id scelerisque ante. Cras velit nunc, luctus a volutpat nec, blandit id dolor. Quisque commodo elit nulla, eu semper quam feugiat et. Integer quam velit, suscipit eget consectetur ac, molestie eu diam.
            </p>
            <p className='mt-3 md:text-[13px] lg:text-[15px]'>     
                Fusce semper rhoncus dignissim. Curabitur dapibus convallis varius. Suspendisse sem urna, ullamcorper eget porttitor ut, sagittis in justo. Vestibulum egestas nulla nec purus porttitor fermentum. Integer mauris mi, viverra eget nibh at, efficitur consectetur erat. Curabitur et imperdiet enim
            </p>
        </div>

    </div>
  )
}

export default ServiceSeventhComponent