import React from 'react'
import PriceComponent from '../components/PriceComponent'
import { pricingcards } from '../data/cards'
import neox from "../assets/neox-full.png"
import { Link } from 'react-router-dom'

const Pricing = () => {
    return (
        <div className='h-auto bg-[#F0E9D8]'>
            <div className="banner bg-[#95CBC8] min-h-[50vh] px-8 flex items-start jus flex-col justify-center py-8 gap-8 sm:gap-0">
                <img src={neox} alt="" className='h-[80px]' />
                <h1 className='text-[30px] md:text-[50px]  font-[800]'>Neox Infotech brings you all kinds of <br /> softwares services at a very affordable price</h1>
                <span className='text-[13px] md:text-[20px] font-[500]'>Explore our plans below</span>
            </div>
            <div className='py-12 flex items-center justify-center gap-12 flex-wrap w-[100%]'>
                {
                    pricingcards.map((price) => (
                        <PriceComponent key={price.id} price={price} />
                    ))
                }

            </div>
            <div className="py-8 text-center">
                <Link to={"/contact"} className='px-8 py-2 bg-[#555555] rounded-md font-bold text-white'>Buy Plan</Link>
            </div>
        </div>
    )
}

export default Pricing
