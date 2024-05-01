import React from 'react'

const Card = ({ i }) => {
    return (
        <div className=' p-7 rounded-md shadow-md bg-white dark:bg-[#25303e]'>

            <div className='bg-[#eff2f7] dark:bg-[#303c4a] rounded-full h-12 w-12 flex items-center justify-center text-[#3c50e0] dark:text-white'>
                {i.icon}
            </div>

            <div className='flex justify-between items-end mt-4'>
                <div>
                    <h1 className='text-2xl font-bold text-black dark:text-white'>{i.value}</h1>
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