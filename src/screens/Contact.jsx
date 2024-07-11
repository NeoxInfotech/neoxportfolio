import React from 'react'
import agency from "../assets/agency.jpg"
import neoxlogo from "../assets/neox-full.png"

const Contact = () => {
    return (
        <div className='min-h-[90vh] bg-[#F0E9D8] flex flex-col md:flex-row '>
            <div className="left min-h-[40vh] md:h-auto w-[100%] md:w-[50%] bg-[#F5C2A8] flex flex-col items-center justify-center gap-6 px-6">

                <img src={neoxlogo} alt="" className='h-[120px] md:h-[25%]' />

                <h2 className='spclfont text-center font-[800] text-[20px] md:text-[30px]'>Connect With Us for a better improvisation <br /> of your business</h2>
            </div>
            <div className="right w-[100%] md:w-[50%] flex flex-col items-center justify-center gap-6 px-6">
                <h1 className='text-center text-[40px] font-[700]'>Get in Touch with Us</h1>
                <form className='w-[100%] flex items-center justify-center flex-col gap-6 py-6 md:py-0'>
                    <input type="text" placeholder='Enter Your Name' className='w-[80%] md:w-[70%] px-4 py-2 rounded-md text-[13px]' />
                    <input type="text" placeholder='Enter Your Email' className='w-[80%] md:w-[70%] px-4 py-2 rounded-md text-[13px]' />
                    <input type="text" placeholder='Enter Your Address' className='w-[80%] md:w-[70%] px-4 py-2 rounded-md text-[13px]' />
                    <textarea type="text" placeholder='Write Your Message' className='w-[80%] md:w-[70%] px-4 py-2 rounded-md text-[13px]' />
                    <button className='px-6 py-2 bg-[#95CBC8] rounded-md shadow-3xl font-[600]'>Enquiry</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
