"use client"

import Image from 'next/image';
import { LuMenu } from "react-icons/lu";
import { LuSearch } from "react-icons/lu";
import { TfiBell } from "react-icons/tfi";
import { AiOutlineMessage } from "react-icons/ai";
import { FaAngleUp } from "react-icons/fa6";
import { useSidebar } from '@/context/SidebarContext';
import ThemeButton from './ThemeButton';


const Navbar = () => {

    const { toggleSidebar } = useSidebar();

    return (

        <nav className='sticky top-0 z-50 flex shadow-md bg-white dark:bg-[#25303e]'>
            <div className='flex flex-grow items-center justify-between p-4 shadow-sm md:px-8'>
                <div className='flex items-center gap-4 lg:hidden'>
                    <button className='border p-1 rounded-md shadow-sm dark:border-white/20' onClick={toggleSidebar}>
                        <LuMenu size={25} />
                    </button>

                    <Image src="https://nextjs-demo.tailadmin.com/images/logo/logo-icon.svg" width={35} height={50} alt="logo" loading='lazy' className='hidden md:block' />
                </div>

                {/* Search */}
                <form className='hidden md:flex items-center gap-4'>
                    <LuSearch size={20} />
                    <input type="text" placeholder='Type to search...' className='focus:outline-none bg-transparent w-96' />
                </form>

                <div className="flex items-center gap-7">

                    <div className='flex items-center gap-4'>

                        {/* Dark Mode */}
                        <ThemeButton />

                        <button className=' p-2 rounded-full bg-[#eff4fb] dark:bg-[#303c4a]'>
                            <TfiBell size={18} />
                        </button>

                        <button className=' p-2 rounded-full bg-[#eff4fb] dark:bg-[#303c4a]'>
                            <AiOutlineMessage size={18} />
                        </button>
                    </div>

                    {/* Profile */}
                    <button className='flex items-center gap-4'>

                        <div className='hidden flex-col items-end xl:flex'>
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