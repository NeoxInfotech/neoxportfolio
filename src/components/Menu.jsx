import React from 'react'
import neoxlogo from "../assets/neox-full.png"
import { Link, useNavigate } from 'react-router-dom'
import { RxCross1 } from "react-icons/rx";



const Menu = ({ setMenu }) => {
    const navigateTo = useNavigate()
    return (
        <div className='header bg-[#F0E9D8] min-h-[90px] px-8 flex flex-col z-[999]  items-center justify-between sticky top-0 py-6 gap-12 shadow-lg' >
            <div className='text-right w-[100%]'>
                <RxCross1 className='text-[20px] font-[800]' onClick={() => setMenu(false)} />
            </div>

            <img src={neoxlogo} alt="" className='h-[90px]' onClick={() => navigateTo("/")} />
            <div className="flex flex-col  items-center gap-6">
                <Link to={"/"} className='px-4 py-2 hover:border-black border-[1px] border-solid rounded-md font-semibold' onClick={() => setMenu(false)}>Home</Link>
                <Link to={"/about"} className='px-4 py-2 hover:border-black border-[1px] border-solid rounded-md font-semibold' onClick={() => setMenu(false)}>About</Link>
                <Link to={"/pricing"} className='px-4 py-2 hover:border-black border-[1px] border-solid rounded-md font-semibold' onClick={() => setMenu(false)}>Pricing</Link>
                <Link to={"/contact"} className='px-4 py-2 hover:border-black border-[1px] border-solid rounded-md font-semibold' onClick={() => setMenu(false)}>Contact</Link>
                <Link to={"/neoxedu"} className='px-4 py-2 hover:border-black border-[1px] border-solid rounded-md font-semibold relative' onClick={() => setMenu(false)}>
                    Neox Edu
                    <span className='ml-2 bg-[red] text-white p-1 rounded-3xl '>new</span>
                </Link>

            </div>
            <Link className='bg-[#353535] px-6 py-3 rounded-xl text-white font-[700]'>Get In Touch</Link>
        </div>
    )
}

export default Menu
