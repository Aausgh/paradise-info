"use client"

import {
    Cell,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
} from "recharts"

const data = [
    { name: 'Desktop', value: 65, color: '#3c51e1' },
    { name: 'Tablet', value: 34, color: '#6477f2' },
    { name: 'Mobile', value: 12, color: '#8ed0ee' },
    { name: 'Unknown', value: 56, color: '#0fadcf' },
];


const AnalyticsChart = () => {
    return (
        <ResponsiveContainer width="90%" height="100%">
            <PieChart width={900} height={400}>
                <Tooltip content={<CustomTooltip />} />
                <Pie
                    data={data}
                    innerRadius={'70%'}
                    outerRadius={'100%'}
                    dataKey="value"
                    startAngle={450}
                    endAngle={90}
                    stroke="none"
                >
                    {data.map((d, index) => (
                        <Cell key={index} fill={d.color} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const bgColor = payload[0].color;
        return (
            <div className={`bg-white rounded-lg px-2 py-4`}>

                <p className={`text-sm text-[${bgColor}] font-light`}>
                    {payload[0].name} :
                    <span className="">{payload[0].value}</span>
                </p>

            </div>
        )
    }
}

export default AnalyticsChart