import React from 'react'
import edulogo from "../assets/neoxedulogo.png"
import EduCard from '../components/EduCard'
import { eduCards } from '../data/cards'
import { Link } from 'react-router-dom'
import wp from "../assets/neox-edu/neox_wp.png"

const NeoxEdu = () => {
    return (
        <div className='min-h-[90vh] bg-[#F0E9D8] py-8 px-8  '>
            <div className="content-intro flex flex-col items-center justify-center gap-8 h-[50%] w-[100%]">
                <h2 className='font-bold  text-[25px]'>Neox Infotech presents</h2>
                <img src={edulogo} alt="" className='h-[200px] md:h-[400px]' />
                <div className="w-[100%] flex flex-col items-center gap-6">
                    <h2 className='text-center font-[600]'>Neox Infotech brings you exciting course on full stack development with guaranteed internship and placement assistance</h2>
                    <h2 className='mt-6 font-[800] text-center text-[20px] md:text-[30px]'>Learn Web Development and Designing using following technology</h2>
                    <div className="cards w-[100%] flex flex-col md:flex-row gap-6 flex-wrap items-center justify-center">
                        {
                            eduCards.map((edu) => (
                                <EduCard key={edu.id} edu={edu} />
                            ))
                        }

                    </div>
                </div>

                <div className="coming min-h-[50vh]  flex flex-col gap-4 items-center justify-center">
                    <h2 className='text-[30px] md:text-[45px] font-[800]'>Coming Soon .... </h2>
                    <span className='text-[15px] md:text-[20px] font-[600]'>For Advance enquiry Contact Us</span>
                    <a href='https://wa.me/7001735441' className=' py-3 px-9 bg-[#353535] text-white font-[500] rounded-3xl flex items-center gap-3'>
                        <img src={wp} alt="" className='h-[20px] filter invert' />
                        7001735441
                    </a>
                    <a href='https://wa.me/7980944720' className=' py-3 px-9 bg-[#353535] text-white font-[500] rounded-3xl flex items-center gap-3'>
                        <img src={wp} alt="" className='h-[20px] filter invert' />
                        7980944720
                    </a>
                </div>
            </div>

        </div>
    )
}

export default NeoxEdu
