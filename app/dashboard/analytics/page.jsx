
import AnalyticsBarChart from '@/components/charts/AnalyticsBarChart'
import PercentBar from '@/components/PercentBar'
import { BiDownArrowAlt, BiUpArrowAlt } from 'react-icons/bi'
import { FaAngleDown } from 'react-icons/fa'
import { country, topChannels, topContent } from './data'
import DotButton from '@/components/DotButton'
import TopTable from '@/components/TopTable'
import AnalyticsChart from '@/components/charts/AnalyticsPieChart'
import TopProductTable from '@/components/TopProductTable'

const Analytics = () => {
    return (
        <div className='grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7'>

            {/*Date Picker*/}
            <div className='col-span-12 flex flex-wrap items-center justify-between gap-3'>
                <div className='relative'>
                    <div>
                        <input type="date" className='w-full rounded-md shadow-md bg-white dark:bg-darkBox py-2 pl-10 pr-4 text-sm font-medium focus-visible:outline-none' />
                    </div>
                </div>

                { }
                <div className='relative z-20 inline-block rounded-md bg-white dark:bg-darkBox shadow-md'>
                    <select name="" id="" className='relative z-20 inline-flex appearance-none rounded-md bg-transparent py-2 pl-4 pr-9 text-sm font-medium outline-none'>
                        <option value="" className='dark:bg-darkBox'>Yearly</option>
                        <option value="" className='dark:bg-darkBox'>Monthly</option>
                    </select>

                    <span className='absolute right-3 top-1/2 z-10 -translate-y-1/2'>
                        <FaAngleDown />
                    </span>
                </div>
            </div>


            {/*Visitors Analytics*/}
            <div className='col-span-12 rounded-md bg-white px-5 pb-5 pt-7 shadow-md dark:bg-darkBox'>
                <h3 className="text-xl font-semibold">Visitors Analytics</h3>

                <div className='mt-8 w-[100%] h-[350px]'>
                    <AnalyticsBarChart />
                </div>
            </div>


            {/*Revenue Analytics*/}
            <div className='col-span-12 rounded-md bg-white p-7 shadow-md dark:bg-darkBox'>
                <div className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4 xl:gap-0'>

                    <div className='flex items-center justify-center gap-2 border-b dark:border-gray-700 border-gray-200 pb-5 xl:border-b-0 xl:border-r xl:pb-0'>
                        <div>
                            <h4 className='text-xl font-semibold md:text-3xl'>
                                $4,350
                            </h4>
                            <p className='text-sm font-medium text-gray-400'>Unique Visitors</p>
                        </div>

                        <div className='flex items-center gap-1 text-[#12a864]'>
                            <BiUpArrowAlt size={24} />
                            <span>18%</span>
                        </div>
                    </div>

                    <div className='flex items-center justify-center gap-2 border-b dark:border-gray-700 border-gray-200 pb-5 xl:border-b-0 xl:border-r xl:pb-0'>
                        <div>
                            <h4 className='text-xl font-semibold md:text-3xl'>
                                55.9K
                            </h4>
                            <p className='text-sm font-medium text-gray-400'>Total Pageviews</p>
                        </div>

                        <div className='flex items-center gap-1 text-[#12a864]'>
                            <BiUpArrowAlt size={24} />
                            <span>25%</span>
                        </div>
                    </div>

                    <div className='flex items-center justify-center gap-2 border-b dark:border-gray-700 border-gray-200 pb-5 md:border-b-0 xl:border-r md:pb-0'>
                        <div>
                            <h4 className='text-xl font-semibold md:text-3xl'>
                                54%
                            </h4>
                            <p className='text-sm font-medium text-gray-400'>Bounce Rate</p>
                        </div>

                        <div className='flex items-center gap-1 text-[#c8911a]'>
                            <BiDownArrowAlt size={24} />
                            <span>7%</span>
                        </div>
                    </div>

                    <div className='flex items-center justify-center gap-2'>
                        <div>
                            <h4 className='text-xl font-semibold md:text-3xl'>
                                2m 56s
                            </h4>
                            <p className='text-sm font-medium text-gray-400'>Visit Duration</p>
                        </div>

                        <div className='flex items-center gap-1 text-[#12a864]'>
                            <BiUpArrowAlt size={24} />
                            <span>12%</span>
                        </div>
                    </div>
                </div>
            </div>


            {/*Sessions by country*/}
            <div className='col-span-12 rounded-md shadow-md bg-white dark:bg-darkBox xl:col-span-6'>

                {/*Map*/}
                <div className='p-4 md:p-6'>
                    <div className='mb-7 justify-between md:flex'>
                        <h3 className='text-xl font-semibold mb-2'>Sessions by country</h3>

                        <div className='relative z-20 inline-block rounded-md bg-transparent mb-2'>
                            <select name="" id="" className='relative z-20 inline-flex appearance-none rounded-md bg-transparent py-1 pl-3 pr-8 text-sm outline-none border dark:border-gray-700 border-gray-200'>
                                <option value="" className='dark:bg-darkBox'>Last 7 days</option>
                                <option value="" className='dark:bg-darkBox'>Last 15 days</option>
                            </select>

                            <span className='absolute right-3 top-1/2 z-10 -translate-y-1/2'>
                                <FaAngleDown />
                            </span>
                        </div>
                    </div>

                    <div className='flex h-64 items-center justify-center md:h-96'></div>
                </div>

                {/*Bar Chart*/}
                <div className='space-y-3 border-t dark:border-gray-700 border-gray-200 p-4 md:p-6'>
                    {country.map((c) => (
                        <PercentBar key={c.id} c={c} />
                    ))}
                </div>
            </div>


            {/*Top Content and Top Channels*/}
            <div className='col-span-12 xl:col-span-6'>

                {/*Top Content*/}
                <div className='mg-4 rounded-md bg-white dark:bg-darkBox p-4 shadpw-md md:mb-6 md:p-6 xl:p-7 2xl:mb-7'>

                    <div className='mb-7 flex items-center justify-between'>
                        <h3 className='text-xl font-semibold'>Top Content</h3>

                        <DotButton />
                    </div>

                    <div className='flex flex-col gap-2 text-gray-600 dark:text-gray-400'>
                        <div className='grid grid-cols-10 py-2'>
                            <span className='col-span-6 text-sm pl-3'>URL</span>
                            <span className='col-span-2 text-sm text-center'>Views</span>
                            <span className='col-span-2 text-sm text-right'>Uniques</span>
                        </div>

                        {topContent.map((t) => (
                            <TopTable key={t.id} t={t} />
                        ))}
                    </div>
                </div>


                {/*Top Channels*/}
                <div className='rounded-md bg-white dark:bg-darkBox p-4 shadow-md md:p-6 xl:p-7'>
                    <div className='mb-7 flex items-center justify-between'>
                        <h3 className='text-xl font-semibold'>Top Channels</h3>

                        <DotButton />
                    </div>

                    <div className='flex flex-col gap-2 text-gray-600 dark:text-gray-400'>
                        <div className='grid grid-cols-10 py-2'>
                            <span className='col-span-6 text-sm pl-3'>URL</span>
                            <span className='col-span-2 text-sm text-center'>Views</span>
                            <span className='col-span-2 text-sm text-right'>Uniques</span>
                        </div>

                        {topChannels.map((t) => {
                            const percentageWidth = (t.views / 5000) * 100
                            return (
                                <TopTable key={t.id} t={t} percentageWidth={percentageWidth} />
                            )
                        })}
                    </div>
                </div>
            </div>


            {/*Visitors Analytics*/}
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


            {/*Top Products*/}
            <div className='col-span-12 xl:col-span-7'>
                <div className='rounded-md bg-white dark:bg-darkBox shadow-md'>
                    <div className="px-4 py-6 md:px-6 xl:px-7">
                        <h4 class="text-xl font-semibold">
                            Top Products
                        </h4>
                    </div>

                    <TopProductTable />
                </div>
            </div>
        </div>
    )
}

export default Analytics