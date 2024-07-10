import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='min-h-[30vh] bg-[#363534] flex items-center justify-between py-6 px-8 text-white flex-col md:flex-row gap-8 md:gap-0'>
        <div className='w-[100%] md:w-[25%] flex flex-col gap-5'>
          <h1 className='text-[30px] font-[900]'>NEOX INFOTECH</h1>
          <p>At Neox Infotech, we are a passionate team of designers, developers, and strategists dedicated to bringing your digital vision to life. With a focus on creativity and functionality, we craft websites that not only look stunning but also deliver exceptional user experiences..</p>
        </div>
        <div className='w-[100%] md:w-[25%] flex flex-col gap-5'>
          <h2 className='text-[30px] font-[900]'>Social Media Handles</h2>
          <span>Instagram</span>
          <span>LinkDin</span>
          <span>Twitter</span>
          <span>Facebook</span>
        </div>
        <div className='w-[100%] md:w-[25%] flex flex-col gap-5'>
          <h2 className='text-[30px] font-[900]'>Contact</h2>

          <span>Address - 1 No. Thermal Gate, Shantipur, Mecheda, Purba Medinipur</span>
          <span>Mobile - 70017735441 / 91534227783</span>
          <span>Email - neoxinfotech@gmail.com</span>

        </div>
      </div>
      <div className='p-4 bg-[#363534] text-center text-white font-semibold'>
        <span>Designed and developed by neoxinfotech @ all copright reserved</span>
      </div>
    </>
  )
}

export default Footer
Footer