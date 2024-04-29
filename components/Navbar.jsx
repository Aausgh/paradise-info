"use client"

import Image from 'next/image';
import React, { useState } from 'react'
import { LuMenu } from "react-icons/lu";
import { LuSearch } from "react-icons/lu";
import { TfiBell } from "react-icons/tfi";
import { AiOutlineMessage } from "react-icons/ai";
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa6";
import { useSidebar } from '@/context/SidebarContext';

const Navbar = () => {

    const { toggleSidebar } = useSidebar();
    const [darkMode, setDarkMode] = useState(false)


    const toggleDarkMode = () => {
        setDarkMode(prevState => !prevState)
    }

    return (

        <nav className='sticky top-0 z-50 flex shadow-md bg-white '>
            <div className='flex flex-grow items-center justify-between p-4 shadow-sm md:px-8'>
                <div className='flex items-center gap-4 lg:hidden'>
                    <button className='border p-1 rounded-md shadow-sm' onClick={toggleSidebar}>
                        <LuMenu size={25} />
                    </button>

                    <Image src="https://nextjs-demo.tailadmin.com/images/logo/logo-icon.svg" width={35} height={50} alt="logo" loading='lazy' />
                </div>

                <form className='hidden md:flex items-center gap-4'>
                    <LuSearch size={20} />
                    <input type="text" placeholder='Type to search...' className='focus:outline-none' />
                </form>

                <div className="flex items-center gap-7">

                    <div className='flex items-center gap-4'>
                        <label className='relative '>
                            <div
                                className={`${!darkMode ? 'bg-[#e3e8f1]' : 'bg-[#3c51e1]'} h-7 w-[58px] p-1 rounded-full cursor-pointer`}
                                onClick={toggleDarkMode}
                            />
                            {!darkMode
                                ? (
                                    <span className='absolute top-1 left-1 bg-white rounded-full p-1 shadow-md cursor-pointer'>
                                        <IoSunny size={12} onClick={toggleDarkMode} />
                                    </span>
                                )
                                : (
                                    <span className='absolute top-1 right-1 bg-white rounded-full p-1 shadow-md cursor-pointer'>
                                        <FaMoon size={12} onClick={toggleDarkMode} />
                                    </span>
                                )
                            }
                        </label>

                        <button className='border p-2 rounded-full bg-[#eff4fb]'>
                            <TfiBell size={18} />
                        </button>

                        <button className='border p-2 rounded-full bg-[#eff4fb]'>
                            <AiOutlineMessage size={18} />
                        </button>
                    </div>

                    <button className='flex items-center gap-4'>

                        <div className='hidden flex-col items-end lg:flex'>
                            <h1 className='text-sm '>Thomas Anree</h1>
                            <h4 className='text-xs text-gray-400'>UX Designer</h4>
                        </div>

                        <Image
                            src='https://nextjs-demo.tailadmin.com/_next/image?url=%2Fimages%2Fuser%2Fuser-01.png&w=128&q=75'
                            width={50}
                            height={50}
                            alt="profile"
                            loading='lazy'
                        />

                        <FaAngleUp className='rotate-180' />
                    </button>

                </div>

            </div>
        </nav >



    )
}

export default Navbar