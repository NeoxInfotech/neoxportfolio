import React from 'react'

const PriceComponent = ({ price }) => {
    return (
        <div style={{ backgroundColor: price.bg }} className='w-[95%] md:w-[45%] lg:w-[25%] min-h-[700px] rounded-lg shadow-3xl py-4 px-3 flex items-center flex-col gap-6'>
            <h1 className='text-[30px] font-bold'>{price?.head}</h1>
            <div className='w-[95%] h-[1px] bg-black'></div>
            <div className='min-h-[400px] flex justify-center items-center'>
                <ul className='flex flex-col gap-4 list-decimal font-bold items-start'>
                    {
                        price?.contents?.map((c) => (
                            <li>{c}</li>
                        ))
                    }

                </ul>

            </div>
            {/* <h1 className='text-left font-bold text-[22px]'>{price?.price}</h1> */}
        </div>
    )
}

export default PriceComponent
