"use client"

import {
    Bar,
    BarChart,
    ResponsiveContainer,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts"

const Revenue = [
    {
        name: 'M',
        revenue: 13,
        sales: 44,
    },
    {
        name: 'T',
        revenue: 23,
        sales: 55,
    },
    {
        name: 'W',
        revenue: 20,
        sales: 41,
    },
    {
        name: 'T',
        revenue: 8,
        sales: 67,
    },
    {
        name: 'F',
        revenue: 13,
        sales: 22,
    },
    {
        name: 'S',
        revenue: 27,
        sales: 43,
    },
    {
        name: 'S',
        revenue: 15,
        sales: 65,
    },

]

const ProfitChart = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart width={500} height={400} data={Revenue}>
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
                    tickMargin={10}

                />
                <CartesianGrid vertical={false} />
                <Tooltip content={CustomTooltip} />

                <Bar
                    dataKey="sales"
                    fill="#3c51e1"
                    stackId={'1'}
                    barSize={"3%"}
                />
                <Bar
                    dataKey="revenue"
                    fill="#81cbee"
                    stackId='1'
                />

            </BarChart>
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

                <div className="flex gap-2 items-center py-3 px-3">

                    <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-[#80caee]"></span>

                    <p className="text-xs text-black font-light">
                        Revenue :
                        <span className="">{payload[1].value}</span>
                    </p>
                </div>

                <div className="flex gap-2 items-center py-3 px-2">

                    <span className="block h-2.5 w-2.5 rounded-full bg-[#3c51e1]"></span>

                    <p className="text-xs text-black font-light">
                        Sales :
                        <span className="">{payload[0].value}</span>
                    </p>
                </div>
            </div>
        )
    }
}

export default ProfitChart