import React from 'react'

const EduCard = ({ edu }) => {
    return (
        <div className={`card1 w-[90%] md:w-[30%] min-h-[300px] flex flex-col gap-3 p-5 bg-[${edu.bg}] rounded-md shadow-xl`}>
            <img src={edu.ico} alt="" className='h-[90px] w-[90px]' />
            <h3 className='text-[25px] font-[900]'>{edu.head}</h3>
            <p>{edu.content}</p>
        </div>
    )
}

export default EduCard
