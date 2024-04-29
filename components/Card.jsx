import React from 'react'
import { IoEyeOutline } from "react-icons/io5";

const Card = ({ i }) => {
    return (
        <div className=' p-7 rounded-md shadow-md bg-white'>

            <div className='bg-[#eff2f7] rounded-full h-12 w-12 flex items-center justify-center text-[#3c50e0]'>
                {i.icon}
            </div>

            <div className='flex justify-between items-end mt-4'>
                <div>
                    <h1 className='text-2xl font-bold text-black'>{i.value}</h1>
                    <span className='text-sm font-medium'>{i.title}</span>
                </div>

                <span className='flex items-center text-sm font-medium text-[#aac081]'>
                    {i.percent}%
                    {i.pIcon}
                </span>
            </div>
        </div>
    )
}

export default Card