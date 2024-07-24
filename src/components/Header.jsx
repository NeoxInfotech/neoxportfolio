import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import neoxlogo from "../assets/neox-full.png"
import { IoIosMenu } from "react-icons/io";
import Menu from './Menu';




const Header = () => {
  const [menu, setMenu] = useState(false)
  const navigateTo = useNavigate()
  return (
    <>
      {
        menu ? <Menu setMenu={setMenu} /> : <div className='header z-[999] bg-[#F0E9D8] min-h-[90px] px-8 flex md:hidden  items-center justify-between sticky top-0 py-6 shadow-lg'>
          <img src={neoxlogo} alt="" className='h-[80px] sm:h-[60px]' onClick={() => navigateTo("/")} />
          <IoIosMenu className='text-[40px]' onClick={() => setMenu(!menu)} />
        </div>
      }

      <div className='header bg-[#F0E9D8] min-h-[90px] px-8 z-[999] hidden md:flex flex-col md:flex-row items-center justify-between sticky top-0 py-6 shadow-lg' >
        <img src={neoxlogo} alt="" className='h-[80px]' onClick={() => navigateTo("/")} />
        <div className="flex  items-center gap-4">
          <Link to={"/"} className='px-4 py-2 hover:border-black border-[1px] border-solid rounded-md font-semibold' onClick={() => setMenu(false)}>Home</Link>
          <Link to={"/about"} className='px-4 py-2 hover:border-black border-[1px] border-solid rounded-md font-semibold' onClick={() => setMenu(false)}>About</Link>
          <Link to={"/pricing"} className='px-4 py-2 hover:border-black border-[1px] border-solid rounded-md font-semibold' onClick={() => setMenu(false)}>Pricing</Link>
          <Link to={"/contact"} className='px-4 py-2 hover:border-black border-[1px] border-solid rounded-md font-semibold' onClick={() => setMenu(false)}>Contact</Link>
          <Link to={"/neoxedu"} className='px-4 py-2 hover:border-black border-[1px] border-solid rounded-md font-semibold relative' onClick={() => setMenu(false)}>
            Neox Edu
            <span className='ml-2 bg-[red] text-white p-1 rounded-3xl '>new</span>
          </Link>


        </div>
        <Link className='bg-[#353535] px-6 py-3 rounded-xl text-white font-[700]' to={"/contact"}>Get In Touch</Link>
      </div>
    </>
  )
}

export default Header
