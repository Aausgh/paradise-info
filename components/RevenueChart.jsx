"use client"

import {
    Line,
    LineChart,
    ResponsiveContainer,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts"

const Revenue = [
    {
        name: 'Sep',
        product1: 23,
        product2: 30,
    },
    {
        name: 'Oct',
        product1: 11,
        product2: 25,
    },
    {
        name: 'Nov',
        product1: 22,
        product2: 36,
    },
    {
        name: 'Dec',
        product1: 27,
        product2: 30,
    },
    {
        name: 'Jan',
        product1: 13,
        product2: 45,
    },
    {
        name: 'Feb',
        product1: 22,
        product2: 35,
    },
    {
        name: 'Mar',
        product1: 37,
        product2: 64,
    },
    {
        name: 'Apr',
        product1: 21,
        product2: 54,
    },
    {
        name: 'May',
        product1: 44,
        product2: 59,
    },
    {
        name: 'Jun',
        product1: 22,
        product2: 36,
    },
    {
        name: 'Jul',
        product1: 30,
        product2: 39,
    },
    {
        name: 'Aug',
        product1: 45,
        product2: 51,
    }
]

const RevenueChart = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart width={500} height={400} data={Revenue}>
                <YAxis
                    fontSize={10}
                    tickSize={0}
                    tickMargin={10}
                    ticks={[0, 20, 40, 60, 80, 100]}
                />

                <XAxis
                    dataKey="name"
                    fontSize={10}
                    tickSize={0}
                    tickMargin={20}
                />
                <CartesianGrid />
                <Tooltip content={CustomTooltip} />

                <Line
                    dataKey="product1"
                    stroke="#5e79e4"
                    strokeWidth={3}
                    fill="#cae9f9"
                    dot={{ r: 4 }}
                    activeDot={{ r: 10 }}
                />
                <Line
                    dataKey="product2"
                    stroke="#80caee"
                    strokeWidth={3}
                    fill="#cae9f9"
                    dot={{ r: 4 }}
                    activeDot={{ r: 10 }}
                />
            </LineChart>
        </ResponsiveContainer>
    )
}

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white rounded-lg">
                <div className="bg-gray-200 py-3 px-1">
                    <p className="text-xs font-medium">{label}</p>
                </div>

                <div className="flex gap-2 items-center py-3 px-2">

                    <span className="block h-2.5 w-2.5 rounded-full bg-[#3c51e1]"></span>

                    <p className="text-xs text-black font-light">
                        Product One :
                        <span className="">{payload[0].value}</span>
                    </p>
                </div>

                <div className="flex gap-2 items-center py-3 px-2">
                    <span className="block h-2.5 w-2.5 rounded-full bg-[#80caee]"></span>

                    <p className="text-xs text-black font-light">
                        Product Two :
                        <span className="">{payload[1].value}</span>
                    </p>
                </div>
            </div>
        )
    }
}

export default RevenueChart