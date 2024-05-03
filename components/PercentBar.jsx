import Image from 'next/image'
import React from 'react'

const PercentBar = ({ c }) => {
    return (
        <div className='items-center md:flex'>
            <div className='w-full max-w-44 flex items-center gap-3'>
                <Image src={c.flag} width={20} height={13} alt='usa' loading='lazy' />
                <p className='font-medium'>{c.name}</p>
            </div>

            <div className='relative block h-5 w-full rounded-2xl bg-gray-200 dark:bg-gray-700'>
                <div
                    className='absolute left-0 top-0 flex h-full items-center justify-center rounded-2xl bg-blue-600 text-xs font-medium text-white '
                    style={{ width: `${c.percent}%` }}
                >
                    {c.percent}%
                </div>
            </div>
        </div>
    )
}

export default PercentBar