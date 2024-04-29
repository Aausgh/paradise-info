
import Card from '@/components/Card'

import ChatCard from '@/components/ChatCard';
import Table from '@/components/Table';
import { Chats, Info } from '@/constants/constants'
import React from 'react'
import { FaAngleDown } from 'react-icons/fa6';

const Home = () => {
    return (
        <div className='w-screen lg:max-w-screen-2xl mx-auto p-4 md:p-6 xl:p-10'>

            <div className=' grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:gap-8'>

                {Info.map((i) => (
                    <Card key={i.id} i={i} />
                ))}

            </div>

            <div className='mt-8 grid grid-cols-12 gap-4 md:gap-6 xl:gap-8'>
                {/* Revenue & Sales */}
                <div className='col-span-12 xl:col-span-8 rounded-md bg-white px-5 py-7 shadow-md'>

                    <div className='flex flex-wrap items-start justify-between '>
                        <div className='flex flex-wrap gap-4'>
                            <div className='flex min-w-48'>
                                <span className="mr-2 mt-1 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-[#3c51e1]">
                                    <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-[#3c51e1]"></span>
                                </span>

                                <div className="w-full">
                                    <p className="font-semibold text-[#3c51e1]">
                                        Total Revenue
                                    </p>

                                    <p className="text-sm font-medium">
                                        12.04.2022 - 12.05.2022
                                    </p>
                                </div>
                            </div>
                            <div className='flex min-w-48'>
                                <span className="mr-2 mt-1 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-[#80caee]">
                                    <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-[#80caee]"></span>
                                </span>

                                <div className="w-full">
                                    <p className="font-semibold text-[#80caee]">
                                        Total Sales
                                    </p>

                                    <p className="text-sm font-medium">
                                        12.04.2022 - 12.05.2022
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-end'>
                            <div className='flex items-center rounded-md bg-[#f5f6fc] p-1 gap-2'>
                                <button className='rounded-md bg-white px-3 py-1 text-sm font-medium shadow-md'>Day</button>
                                <button className='rounded-md hover:bg-white px-3 py-1 text-sm font-medium hover:shadow-md'>Week</button>
                                <button className='rounded-md hover:bg-white px-3 py-1 text-sm font-medium hover:shadow-md'>Month</button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Profit This Week */}
                <div className='col-span-12 xl:col-span-4 rounded-md bg-white px-5 py-7 shadow-md'>
                    <div className='mb-4 flex justify-between gap-4'>
                        <h1 className='text-xl font-semibold text-black'>
                            Profit this week
                        </h1>

                        <div className="relative z-20 inline-block text-gray-600">
                            <select name="#" id="#" className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8  text-sm font-medium outline-none">
                                <option value="">
                                    This Week
                                </option>

                                <option value="">
                                    Last Week
                                </option>
                            </select>

                            <span className="absolute right-3 top-1/2 z-10 -translate-y-1/2">
                                <FaAngleDown />
                            </span>
                        </div>


                    </div>
                </div>


                {/* Visitors Analytics */}
                <div className='col-span-12 xl:col-span-5 rounded-md bg-white px-5 py-7 shadow-md'>
                    <div className="mb-3 justify-between gap-4 sm:flex">

                        <h1 className="text-xl font-semibold text-black">
                            Visitors Analytics
                        </h1>

                        <div>
                            <div className="relative z-20 inline-block text-gray-600">
                                <select
                                    name=""
                                    id=""
                                    className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none"
                                >
                                    <option value="" className="dark:bg-boxdark">
                                        Monthly
                                    </option>

                                    <option value="" className="dark:bg-boxdark">
                                        Yearly
                                    </option>
                                </select>

                                <span className="absolute right-3 top-1/2 z-10 -translate-y-1/2">
                                    <FaAngleDown />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Region Labels */}
                <div className='col-span-12 xl:col-span-7 rounded-md bg-white px-5 py-7 shadow-md'>
                    <h1 className='mb-2 text-xl font-semibold text-black'>
                        Region labels
                    </h1>

                    <div></div>
                </div>


                {/* Top Channels */}
                <div className='col-span-12 xl:col-span-8 rounded-md bg-white p-6 shadow-md'>

                    <h1 className='mb-6 text-xl font-semibold text-black'>
                        Top Channels
                    </h1>

                    <Table />
                </div>


                {/* Chats */}
                <div className='col-span-12 xl:col-span-4 rounded-md bg-white px-2 py-7 shadow-md'>
                    <h4 className="mb-6 px-5 text-xl font-semibold text-black ">
                        Chats
                    </h4>

                    <div className='flex flex-col gap-3'>
                        {Chats.map((c) => (
                            <ChatCard key={c.id} c={c} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home