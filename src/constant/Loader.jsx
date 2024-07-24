import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'

const Loader = () => {

    return (
        <div className='loader'>
            <InfinitySpin
                visible={true}
                width="200"
                color="#95CBC8"
                ariaLabel="infinity-spin-loading"
            />
            <h2 className='text-[30px] font-[700]'>Loading....</h2>
        </div>
    )
}

export default Loader
