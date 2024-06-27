import React from 'react'
import { Link } from 'react-router-dom'
import neoxlogo from "../assets/neox-logo.jpg"

const Header = () => {
  return (
    <div className='header bg-[#F0E9D8] min-h-[80px] px-8 flex flex-col md:flex-row items-center justify-between' >
      {/* <img src={neoxlogo} alt="" className='h-[80px]'/> */}
      <h2 className='text-[28px] font-[900]'>Neox Infotech</h2>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <Link className='px-4 py-2 hover:border-black border-[1px] border-solid rounded-md font-semibold'>Home</Link>
        <Link className='px-4 py-2 hover:border-black border-[1px] border-solid rounded-md font-semibold'>Contact</Link>
        <Link className='px-4 py-2 hover:border-black border-[1px] border-solid rounded-md font-semibold'>Pricing</Link>
        <Link className='px-4 py-2 hover:border-black border-[1px] border-solid rounded-md font-semibold'>About</Link>
      </div>
      <Link className='bg-[#353535] px-6 py-3 rounded-xl text-white font-[700]'>Get In Touch</Link>
    </div>
  )
}

export default Header
