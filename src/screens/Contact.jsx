import React from 'react'
import agency from "../assets/agency.jpg"

const Contact = () => {
    return (
        <div className='min-h-[90vh] bg-[#F0E9D8] flex flex-col md:flex-row '>
            <div className="left w-[100%] md:w-[50%]">
                <img src={agency} alt="" className='h-[100%]' />
            </div>
            <div className="right w-[100%] md:w-[50%] flex flex-col items-center justify-center gap-6">
                <h1 className='text-[40px] font-[700]'>Get in Touch with Us</h1>
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
