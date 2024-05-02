"use client"

import Image from 'next/image';
import { useEffect, useState } from 'react'

import AnalyticsChart from '@/components/charts/AnalyticsPieChart';
import ProfitChart from '@/components/charts/ProfitChart';
import RevenueChart from '@/components/charts/RevenueChart';
import Card from '@/components/Card'
import ChatCard from '@/components/ChatCard';
import Table from '@/components/Table';
import Loader from '@/components/Loader';

import { Chats, Info } from '@/app/data'

import { FaAngleDown } from 'react-icons/fa6';
import map from '@/public/map.svg'
import { useTheme } from 'next-themes';


const Home = () => {

    const { theme } = useTheme();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <Loader />
            </div>
        );
    }

    return (
        <>

            {/* Info */}
            <div className=' grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:gap-8'>

                {Info.map((i) => (
                    <Card key={i.id} i={i} />
                ))}

            </div>

            <div className='mt-8 grid grid-cols-12 gap-4 md:gap-6 xl:gap-8'>

                {/* Revenue & Sales */}
                <div className='col-span-12 xl:col-span-8 rounded-md bg-white dark:bg-[#25303e] px-5 py-7 shadow-md'>

                    <div className='flex flex-wrap items-start justify-between gap-y-4'>
                        <div className='flex flex-col flex-wrap md:flex-row gap-4'>

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
                            <div className='flex items-center rounded-md bg-[#f5f6fc] dark:bg-[#303c4a] p-1 gap-2'>
                                <button className='rounded-md bg-white dark:bg-[#25303e] px-3 py-1 text-sm font-medium shadow-md'>
                                    Day
                                </button>

                                <button className='rounded-md hover:bg-white dark:hover:bg-[#25303e] px-3 py-1 text-sm font-medium hover:shadow-md'>
                                    Week
                                </button>

                                <button className='rounded-md hover:bg-white dark:hover:bg-[#25303e] px-3 py-1 text-sm font-medium hover:shadow-md'>
                                    Month
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className=' mt-8 w-[100%] h-64 lg:h-80'>
                        <RevenueChart theme={theme} />
                    </div>
                </div>


                {/* Profit This Week */}
                <div className='col-span-12 xl:col-span-4 rounded-md bg-white dark:bg-[#25303e] px-5 py-7 shadow-md'>
                    <div className='mb-4 flex justify-between gap-4'>
                        <h1 className='text-xl font-semibold text-black dark:text-white'>
                            Profit this week
                        </h1>

                        <div className="relative z-20 inline-block text-gray-600 dark:text-gray-300">
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

                    <div className='flex gap-4' >

                        <p className='flex items-center gap-2'>
                            <span className="block h-2.5 w-2.5 rounded-full bg-[#3c51e1]"></span>
                            Sales
                        </p>

                        <p className='flex items-center gap-2'>
                            <span className="block h-2.5 w-2.5 rounded-full bg-[#80caee]"></span>
                            Revenue
                        </p>

                    </div>

                    <div className=' mt-8 w-[100%] h-72 lg:h-80'>
                        <ProfitChart theme={theme} />
                    </div>
                </div>


                {/* Visitors Analytics */}
                <div className='col-span-12 xl:col-span-5 rounded-md bg-white dark:bg-[#25303e] px-5 py-7 shadow-md'>
                    <div className="mb-3 justify-between gap-4 sm:flex">

                        <h1 className="text-xl font-semibold text-black dark:text-white">
                            Visitors Analytics
                        </h1>

                        <div>
                            <div className="relative z-20 inline-block text-gray-600 dark:text-gray-300">
                                <select
                                    name=""
                                    id=""
                                    className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none"
                                >
                                    <option value="">
                                        Monthly
                                    </option>

                                    <option value="" >
                                        Yearly
                                    </option>
                                </select>

                                <span className="absolute right-3 top-1/2 z-10 -translate-y-1/2">
                                    <FaAngleDown />
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center justify-center mt-6 mb-2 w-[100%] h-72 lg:h-80'>
                        <AnalyticsChart />
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-x-12 gap-y-3'>

                        <div className='w-full flex items-center  gap-2'>
                            <span className="block h-3 w-3 rounded-full bg-[#3c51e1]"></span>

                            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                                <span> Desktop </span>
                                <span> 65% </span>
                            </p>
                        </div>

                        <div className='w-full  flex items-center gap-2'>
                            <span className="block h-3 w-3 rounded-full bg-[#6477f2]"></span>

                            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                                <span> Tablet </span>
                                <span> 34% </span>
                            </p>
                        </div>

                        <div className='w-full  flex items-center  gap-2'>
                            <span className="block h-3 w-3 rounded-full bg-[#8ed0ee]"></span>

                            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                                <span> Mobile </span>
                                <span> 12% </span>
                            </p>
                        </div>

                        <div className='w-full flex items-center  gap-2'>
                            <span className="block h-3 w-3 rounded-full bg-[#0fadcf]"></span>

                            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                                <span> Unknown </span>
                                <span> 56% </span>
                            </p>
                        </div>
                    </div>
                </div>


                {/* Region Labels */}
                <div className='col-span-12 xl:col-span-7 rounded-md bg-white dark:bg-[#25303e] px-5 py-7 shadow-md'>
                    <h1 className='mb-2 text-xl font-semibold text-black dark:text-white'>
                        Region labels
                    </h1>

                    <Image src={map} alt='map' className='mx-auto w-[70%] h-90' />
                </div>


                {/* Top Channels */}
                <div className='col-span-12 xl:col-span-8 rounded-md bg-white dark:bg-[#25303e] p-6 shadow-md'>

                    <h1 className='mb-6 text-xl font-semibold text-black dark:text-white'>
                        Top Channels
                    </h1>

                    <Table />
                </div>


                {/* Chats */}
                <div className='col-span-12 xl:col-span-4 rounded-md bg-white dark:bg-[#25303e] px-2 py-7 shadow-md'>
                    <h4 className="mb-6 px-5 text-xl font-semibold text-black dark:text-white">
                        Chats
                    </h4>

                    <div className='flex flex-col gap-3'>
                        {Chats.map((c) => (
                            <ChatCard key={c.id} c={c} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home