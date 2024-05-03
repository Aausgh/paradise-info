import { topProducts } from '@/app/dashboard/analytics/data'
import Image from 'next/image'
import React from 'react'

const TopProductTable = () => {
    return (
        <>
            <div className="grid grid-cols-6 text-gray-500 dark:text-gray-400 border-t border-gray-300 px-4 py-4 dark:border-gray-700 md:grid-cols-8 md:px-6 2xl:px-7">
                <div className="col-span-3 flex items-center">
                    <p className="font-medium">Product Name</p>
                </div>

                <div className="col-span-2 hidden items-center sm:flex">
                    <p className="font-medium">Category</p>
                </div>

                <div className="col-span-1 flex items-center">
                    <p className="font-medium">Price</p>
                </div>

                <div className="col-span-1 flex items-center">
                    <p className="font-medium">Sold</p>
                </div>

                <div className="col-span-1 flex items-center">
                    <p className="font-medium">Profit</p>
                </div>
            </div>

            {topProducts.map((t) => (
                <div key={t.id} className="grid grid-cols-6 border-t border-gray-300 px-4 py-5 dark:border-gray-700 md:grid-cols-8 md:px-6 2xl:px-7">

                    <div className="col-span-3 flex flex-col items-center gap-4 md:flex-row">
                        <Image src={t.img} alt={t.name} width={60} height={50} loading='lazy' />
                        <p className="text-sm">{t.name}</p>
                    </div>

                    <div className="col-span-2 hidden items-center sm:flex">
                        <p className="text-sm">{t.category}</p>
                    </div>

                    <div className="col-span-1 flex items-center">
                        <p className="text-sm">${t.price}</p>
                    </div>

                    <div className="col-span-1 flex items-center">
                        <p className="text-sm">{t.sold}</p>
                    </div>

                    <div className="col-span-1 flex items-center">
                        <p className="text-sm">${t.profit}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default TopProductTable