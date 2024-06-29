import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='min-h-[30vh] bg-[#363534] flex items-center justify-between px-8 text-white'>
      <div className='w-[100%] md:w-[25%] flex flex-col gap-5'>
        <h1 className='text-[30px] font-[900]'>NEOX INFOTECH</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, similique optio! Hic totam tempora, voluptatem ipsam dolores earum expedita obcaecati eos minima in voluptas reprehenderit.</p>
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

          <span>Address - Mechea, Shantipur</span>
          <span>Mobile - 93839484948</span>
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