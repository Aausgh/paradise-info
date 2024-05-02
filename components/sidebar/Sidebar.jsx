"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'


import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { useSidebar } from '@/context/SidebarContext'
import { Menu, Support, Others } from './data'


export const Sidebar = () => {

    const { toggleSidebar, isSidebarOpen } = useSidebar();
    const [isOpen, setIsOpen] = useState({});
    const pathName = usePathname()

    const isActive = (link, title) => {
        const t = title.toLowerCase()
        return pathName === link || pathName.includes(t)
    }

    const toggleMenu = (id) => {
        setIsOpen(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };


    return (

        <aside
            className={`fixed left-0 top-0 z-[99] h-screen w-[18rem] flex flex-col bg-[#1d2534] dark:bg-darkBox lg:sticky transition-all duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
        >

            <div className='relative'>
                <Link
                    href={'/'}
                    className=' flex items-center gap-2 p-6'
                >
                    <Image
                        src='https://nextjs-demo.tailadmin.com/images/logo/logo.svg'
                        width={170}
                        height={170}
                        alt='logo'
                    />
                </Link>

                <button
                    className='absolute right-6 top-1/2 -translate-y-1/2 lg:hidden  cursor-pointer'
                    onClick={toggleSidebar}
                >
                    <FaArrowLeft size={25} color='#64758a' />
                </button>
            </div>

            <div className='flex flex-col mt-6 p-6 overflow-scroll no-scrollbar'>


                {/* Menu */}
                <div>
                    <h1 className='text-base font-semibold text-sHeaderText mb-4'>
                        Menu
                    </h1>

                    <ul className='flex flex-col gap-2 mb-6'>
                        {Menu.map((m) => (
                            <li key={m.id}>
                                {m.subItems
                                    ? (
                                        <div
                                            className={`relative flex items-center gap-2 px-4 py-2 font-normal text-sMainText hover:bg-sHeaderText/20 rounded-md duration-300 ease-in-out transition-all cursor-pointer ${isActive(m.link, m.title) ? 'bg-sHeaderText/20' : ''}`}
                                            onClick={() => toggleMenu(m.id)}
                                        >

                                            {m.icon}

                                            <h1>{m.title}</h1>

                                            {m.subItems &&

                                                <div>
                                                    <FaAngleDown className={`absolute right-4 top-1/2 -translate-y-1/2 ${isOpen[m.id] && 'rotate-180'} transition-all duration-300 ease-in-out`} />
                                                </div>
                                            }
                                        </div>
                                    )
                                    : (
                                        <Link href={m.link}>
                                            <div
                                                className={`relative flex items-center gap-2 px-4 py-2 font-medium text-sMainText hover:bg-sHeaderText/20 rounded-md duration-300 ease-in-out transition-all cursor-pointer ${isActive(m.link, m.title) ? 'bg-sHeaderText/20' : ''}`}
                                                onClick={() => toggleMenu(m.id)}
                                            >
                                                {m.icon}
                                                <h1>{m.title}</h1>
                                            </div>
                                        </Link>

                                    )
                                }

                                {isOpen[m.id] && m.subItems && (
                                    <ul className='mb-5 mt-4 flex flex-col gap-3 pl-10 '>
                                        {m.subItems.map((item, subIndex) => (
                                            <li
                                                key={subIndex}
                                                className={`font-medium text-sHeaderText hover:text-white  ${pathName === item.link ? 'text-white' : 'text-sHeaderText'} transition-all duration-300 ease-in-out`}
                                            >
                                                <Link href={item.link}>
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>


                {/* Support */}
                <div>
                    <h1 className='text-base font-semibold text-sHeaderText mb-4'>
                        Support
                    </h1>

                    <ul className='flex flex-col gap-2 mb-6'>
                        {Support.map((m, index) => (
                            <li key={index}>
                                <Link href={m.link} className='flex justify-between items-center'>
                                    <div
                                        className={`
                                                    relative flex items-center gap-2 px-4 py-2 font-medium text-sMainText hover:bg-sHeaderText/20 rounded-md duration-300 ease-in-out transition-all cursor-pointer
                                                    ${isActive(m.link, m.title) ? 'bg-sHeaderText/20' : ''}
                                                    `}
                                        onClick={() => toggleMenu(index)}
                                    >
                                        {m.icon}
                                        <h1>{m.title}</h1>
                                    </div>

                                    {m.title === 'Messages' && (
                                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-700">
                                            <span className="text-sm font-medium text-white">5</span>
                                        </div>
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>


                {/* Others */}
                <div>
                    <h1 className='text-base font-semibold text-sHeaderText mb-4'>
                        Others
                    </h1>

                    <ul className='flex flex-col gap-2 mb-6'>
                        {Others.map((o) => (
                            <li key={o.id}>

                                <div
                                    className={`relative flex items-center gap-2 px-4 py-2 font-medium text-sMainText hover:bg-sHeaderText/20 rounded-md duration-300 ease-in-out transition-all cursor-pointer ${isActive(o.link, o.title) ? 'bg-sHeaderText/20' : ''}`}
                                    onClick={() => toggleMenu(o.id)}
                                >

                                    {o.icon}

                                    <h1>{o.title}</h1>

                                    {o.subItems &&

                                        <div>
                                            <FaAngleUp className={`absolute right-4 top-1/2 -translate-y-1/2 ${isOpen[o.id] && 'rotate-180'} transition-all duration-300 ease-in-out`} />
                                        </div>
                                    }
                                </div>


                                {isOpen[o.id] && o.subItems && (
                                    <ul className='mb-5 mt-4 flex flex-col gap-3 pl-10 '>
                                        {o.subItems.map((item, subIndex) => (
                                            <li
                                                key={subIndex}
                                                className={`font-medium text-sHeaderText hover:text-white  ${pathName === item.link ? 'text-white' : 'text-sHeaderText'} transition-all duration-300 ease-in-out`}
                                            >
                                                <Link href={item.link}>
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </aside>
    )
}
