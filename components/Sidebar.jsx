"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Menu, Others, Support } from '@/constants/constants'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { HiMiniArrowLeft } from "react-icons/hi2";

export const Sidebar = () => {

    const [isOpen, setIsOpen] = useState({});
    const pathName = usePathname()

    const isActive = (link, title) => {
        const t = title.toLowerCase()
        return pathName === link || pathName.includes(t)
    }

    const toggleMenu = (index) => {
        setIsOpen(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    const toggleOthers = (oIndex) => {
        setIsOpen(prevState => ({
            ...prevState,
            [oIndex]: !prevState[oIndex]
        }));
    };

    return (
        <aside className='absolute left-0 top-0 z-[99] h-screen w-[18rem] flex flex-col bg-[#1d2534] lg:sticky translate-x-0 '>

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

                <HiMiniArrowLeft className='absolute right-6 top-1/2 -translate-y-1/2 lg:hidden' size={35} color='#64758a' />
            </div>

            <div className='flex flex-col mt-6 p-6 overflow-scroll no-scrollbar'>

                <div>
                    <h1 className='text-base font-semibold text-sHeaderText mb-4'>
                        Menu
                    </h1>

                    <ul className='flex flex-col gap-2 mb-6'>
                        {Menu.map((m, index) => (
                            <li key={index}>
                                {m.subItems
                                    ? (
                                        <div
                                            className={`relative flex items-center gap-2 px-4 py-2 font-normal text-sMainText hover:bg-sHeaderText/20 rounded-md duration-300 ease-in-out transition-all cursor-pointer ${isActive(m.link, m.title) ? 'bg-sHeaderText/20' : ''}`}
                                            onClick={() => toggleMenu(index)}
                                        >

                                            {m.icon}

                                            <h1>{m.title}</h1>

                                            {m.subItems &&

                                                <div>
                                                    <FaAngleDown className={`absolute right-4 top-1/2 -translate-y-1/2 ${isOpen[index] && 'rotate-180'} transition-all duration-300 ease-in-out`} />
                                                </div>
                                            }
                                        </div>
                                    )
                                    : (
                                        <Link href={m.link}>
                                            <div
                                                className={`relative flex items-center gap-2 px-4 py-2 font-medium text-sMainText hover:bg-sHeaderText/20 rounded-md duration-300 ease-in-out transition-all cursor-pointer ${isActive(m.link, m.title) ? 'bg-sHeaderText/20' : ''}`}
                                                onClick={() => toggleMenu(index)}
                                            >
                                                {m.icon}
                                                <h1>{m.title}</h1>
                                            </div>
                                        </Link>

                                    )
                                }

                                {isOpen[index] && m.subItems && (
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

                <div>
                    <h1 className='text-base font-semibold text-sHeaderText mb-4'>
                        Support
                    </h1>

                    <ul className='flex flex-col gap-2 mb-6'>
                        {Support.map((m, index) => (
                            <li key={index}>
                                <Link href={m.link}>
                                    <div
                                        className={`
                                            relative flex items-center gap-2 px-4 py-2  font-medium text-sMainText hover:bg-sHeaderText/20 rounded-md duration-300 ease-in-out transition-all cursor-pointer
                                            ${isActive(m.link, m.title) ? 'bg-sHeaderText/20' : ''}
                                        `}
                                        onClick={() => toggleMenu(index)}
                                    >
                                        {m.icon}
                                        <h1>{m.title}</h1>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h1 className='text-base font-semibold text-sHeaderText mb-4'>
                        Others
                    </h1>

                    <ul className='flex flex-col gap-2 mb-6'>
                        {Others.map((o, oIndex) => (
                            <li key={oIndex}>

                                <div
                                    className={`relative flex items-center gap-2 px-4 py-2 font-medium text-sMainText hover:bg-sHeaderText/20 rounded-md duration-300 ease-in-out transition-all cursor-pointer ${isActive(o.link, o.title) ? 'bg-sHeaderText/20' : ''}`}
                                    onClick={() => toggleOthers(oIndex)}
                                >

                                    {o.icon}

                                    <h1>{o.title}</h1>

                                    {o.subItems &&

                                        <div>
                                            <FaAngleUp className={`absolute right-4 top-1/2 -translate-y-1/2 ${isOpen[oIndex] && 'rotate-180'} transition-all duration-300 ease-in-out`} />
                                        </div>
                                    }
                                </div>


                                {isOpen[oIndex] && o.subItems && (
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
