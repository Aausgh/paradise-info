"use client"

import React, { useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'
import { FaRegEdit } from 'react-icons/fa'

const DotButton = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className='relative flex'>
            <button className='text-gray-400 dark:text-gray-500' onClick={() => setOpen(!open)}>
                <BsThreeDots size={26} />
            </button>

            {open === true && <div className='absolute right-0 top-full z-40 w-36 rounded-md bg-white p-1 shadow-md dark:bg-darkBox'>

                <button className='w-full flex items-center gap-2 rounded-md px-4 py-2 text-gray-500 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-400' >
                    <FaRegEdit size={16} />
                    Edit
                </button>

                <button className=' w-full flex items-center gap-2 rounded-md px-4 py-2 text-gray-500 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-400'>
                    <AiOutlineDelete size={18} />
                    Delete
                </button>
            </div>}
        </div>
    )
}

export default DotButton