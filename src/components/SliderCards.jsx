import React from 'react'

const SliderCards = ({e}) => {
  return (
    <div  className="card min-h-[400px]  flex flex-col gap-4 items-center justify-center ">
    <div style={{backgroundColor: e.bg}} className="h-[30%] p-5 w-[100%] flex items-center justify-center">
      <img src={e.img} alt="" className="h-[100px] w-[100px] rounded-full" />
    </div>
    <h2 className='font-[800] text-[30px]'>{e.name}</h2>
    <p className="text-center">
      {e.desc}
    </p>
  </div>
  )
}

export default SliderCards
