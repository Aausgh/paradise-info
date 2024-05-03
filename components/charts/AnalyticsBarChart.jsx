"use client"

import React from 'react'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
    {
        date: 1,
        value: 168
    },
    {
        date: 2,
        value: 385
    },
    {
        date: 3,
        value: 201
    },
    {
        date: 4,
        value: 298
    },
    {
        date: 5,
        value: 187
    },
    {
        date: 6,
        value: 195
    },
    {
        date: 7,
        value: 291
    },
    {
        date: 8,
        value: 110
    },
    {
        date: 9,
        value: 215
    },
    {
        date: 10,
        value: 390
    },
    {
        date: 11,
        value: 280
    },
    {
        date: 12,
        value: 112
    },
    {
        date: 13,
        value: 123
    },
    {
        date: 14,
        value: 212
    },
    {
        date: 15,
        value: 270
    },
    {
        date: 16,
        value: 190
    },
    {
        date: 17,
        value: 310
    },
    {
        date: 18,
        value: 115
    },
    {
        date: 19,
        value: 90
    },
    {
        date: 20,
        value: 380
    },
    {
        date: 21,
        value: 112
    },
    {
        date: 22,
        value: 223
    },
    {
        date: 23,
        value: 292
    },
    {
        date: 24,
        value: 170
    },
    {
        date: 25,
        value: 290
    },
    {
        date: 26,
        value: 110
    },
    {
        date: 27,
        value: 115
    },
    {
        date: 28,
        value: 290
    },
    {
        date: 29,
        value: 380
    },
    {
        date: 30,
        value: 312
    }

]

const AnalyticsBarChart = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart width={900} height={400} data={data}>
                <YAxis
                    fontSize={12}
                    tickSize={0}
                    tickMargin={10}
                    ticks={[0, 100, 200, 300, 400]}
                    axisLine={false}
                    stroke='#a5aeb9'
                />
                <XAxis
                    dataKey="date"
                    fontSize={12}
                    tickSize={0}
                    tickMargin={10}
                    axisLine={false}
                    stroke='#a5aeb9'
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar
                    data={data}
                    dataKey="value"
                    fill="#3c51e1"
                    barSize={'1.5%'}
                    radius={4}
                />
            </BarChart>
        </ResponsiveContainer>
    )
}

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white dark:bg-[#25303e] rounded-lg w-28">
                <div className="flex gap-2 items-center py-3 px-2">

                    <span className="block h-2.5 w-2.5 rounded-full bg-[#3c51e1]"></span>

                    <p className="text-xs text-black dark:text-white font-light">
                        series-1 :
                        <span className=""> {payload[0].value}</span>
                    </p>
                </div>
            </div>
        )
    }
}

export default AnalyticsBarChart