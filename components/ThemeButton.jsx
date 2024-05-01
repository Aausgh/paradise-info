"use client"

import React from 'react'
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { useTheme } from 'next-themes';


const ThemeButton = () => {
    const { theme, setTheme } = useTheme();

    return (
        <label className="relative inline-flex items-center cursor-pointer" >
            <input type="checkbox" className="sr-only peer" onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
            <div className="group peer ring-0 bg-[#3c50e0] rounded-full outline-none duration-300 after:duration-300 w-16 h-[30px]  shadow-md peer-checked:bg-[#e3e9f0]  peer-focus:outline-none  after:content-[''] after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-5 after:w-5 after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-9" >

                <span className='absolute top-1 left-1 bg-white rounded-full p-1 shadow-md cursor-pointer'>
                    <IoSunny size={14} />
                </span>

                <span className='absolute top-1 right-1 bg-white text-black rounded-full p-1 shadow-md cursor-pointer'>
                    <FaMoon size={14} />
                </span>
            </div>
        </label>
    )
};


export default ThemeButton