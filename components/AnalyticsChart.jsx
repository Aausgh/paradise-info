"use client"

import {
    Cell,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
} from "recharts"

const data = [

    { name: 'Unknown', value: 56 },
    { name: 'Mobile', value: 12 },
    { name: 'Tablet', value: 34 },
    { name: 'Desktop', value: 65 },
];

const COLORS = ['#0fadcf', '#8ed0ee', '#6477f2', '#3c51e1',];

const AnalyticsChart = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart width={800} height={400}>
                <Tooltip content={CustomTooltip} />
                <Pie
                    data={data}
                    innerRadius={'70%'}
                    outerRadius={'100%'}
                    dataKey="value"
                    startAngle={90}
                    endAngle={450}
                    paddingAngle={1}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white rounded-lg px-2 py-4">

                <p className="text-sm text-black font-light">
                    {payload[0].name} :
                    <span className="">{payload[0].value}</span>
                </p>

            </div>
        )
    }
}

export default AnalyticsChart