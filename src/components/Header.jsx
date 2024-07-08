import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import neoxlogo from "../assets/neox-logo.png"
import { IoIosMenu } from "react-icons/io";
import Menu from './Menu';




const Header = () => {
  const [menu, setMenu] = useState(false)
  return (
    <>
      {
        menu ? <Menu setMenu={setMenu} /> : <div className='header z-[999] bg-[#F0E9D8] min-h-[90px] px-8 flex md:hidden  items-center justify-between sticky top-0 py-6 shadow-lg'>
          <img src={neoxlogo} alt="" className='h-[40px] sm:h-[60px]' />
          <IoIosMenu className='text-[40px]' onClick={() => setMenu(!menu)} />
        </div>
      }

      <div className='header bg-[#F0E9D8] min-h-[90px] px-8 z-[999] hidden md:flex flex-col md:flex-row items-center justify-between sticky top-0 py-6 shadow-lg' >
        <img src={neoxlogo} alt="" className='h-[60px]' />
        <div className="flex  items-center gap-6">
          <Link to={"/"} className='px-4 py-2 hover:border-black border-[1px] border-solid rounded-md font-semibold'>Home</Link>
          <Link to={"/contact"} className='px-4 py-2 hover:border-black border-[1px] border-solid rounded-md font-semibold'>Contact</Link>
          <Link to={"/pricing"} className='px-4 py-2 hover:border-black border-[1px] border-solid rounded-md font-semibold'>Pricing</Link>
          <Link to={"/about"} className='px-4 py-2 hover:border-black border-[1px] border-solid rounded-md font-semibold'>About</Link>
        </div>
        <Link className='bg-[#353535] px-6 py-3 rounded-xl text-white font-[700]'>Get In Touch</Link>
      </div>
    </>
  )
}

export default Header
