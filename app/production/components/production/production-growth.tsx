"use client"
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      period: '2022Q1',
      totalSales: 102684,
      totalIncome: 169241450,
    },
    {
      period: '2022Q2',
      totalSales: 87991,
      totalIncome: 149187290,
    },
    {
      period: '2022Q3',
      totalSales: 93796,
      totalIncome: 162826160,
    },
    {
      period: '2022Q4',
      totalSales: 102004,
      totalIncome: 187625000,
    },
    {
      period: '2023Q1',
      totalSales: 98306,
      totalIncome: 171989590,
    },
    {
      period: '2023Q2',
      totalSales: 87728,
      totalIncome: 141332240,
    },
    {
      period: '2023Q3',
      totalSales: 90595,
      totalIncome: 147389820,
    },
    {
      period: '2023Q4',
      totalSales: 110527,
      totalIncome: 213870125,
    },
  ];

const calculateGrowth = (initial: number, final: number) => {
const growthAmount = final - initial;
const growthRate = ((growthAmount / initial) * 100).toFixed(2);
return { growthAmount, growthRate };
};
  
const addGrowthData = (dat:{ period: string; totalSales: number; totalIncome: number }[]) => {
const newData = data.map((item, index) => {
    if (index === 0) {
    return { ...item, growthAmount: 0, growthRate: 0 };
    }
  
    const prevItem = data[index - 1];
    const { growthAmount, growthRate } = calculateGrowth(prevItem.totalSales, item.totalSales);
  
    return { ...item, growthAmount, growthRate };
    });
  
    return newData;
  };
  
const EnhancedTotalSalesChart = () => {
const enhancedData = addGrowthData(data);

  
return (
    <ResponsiveContainer width="100%" height={500}>
    <LineChart
        data={enhancedData}
        margin={{
        top: 30,
        right: 30,
        left: 20,
        bottom: 50,
        }}
    >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="period" />
        {/* <YAxis domain={['auto', 'auto']} /> */}
        <YAxis domain={[-15, 'dataMax']}/>
        <Tooltip />
        <Legend />

        {/* <Line
        type="monotone"
        dataKey="totalSales"
        name="Total Sales"
        stroke="#FF9900"
        activeDot={{ r: 8 }}
        /> */}
        {/* <Line
        type="monotone"
        dataKey="growthAmount"
        name="Growth Amount"
        stroke=" #0066FF"
        activeDot={{ r: 8 }}
        /> */}
        <Line
        type="monotone"
        dataKey="growthRate"
        name="Growth Rate (%)"
        stroke="#080808"
        activeDot={{ r: 8 }}
        />
    </LineChart>
    </ResponsiveContainer>
);
};

const GrowthChart = () => {
const titleStyle = { fontSize: '24px', fontWeight: 'bold', color: 'black' }; // 調整字體大小和樣式

return (
    <div style={{ display: 'flex' }}>
    <div style={{ flex: 1 }}>
        <h2 style={titleStyle}>Total Sales & Growth</h2>
        <EnhancedTotalSalesChart />
    </div>
    {/* ... （同你提供的 TotalIncomeChart 和其他設定） */}
    </div>
);
};
  
  export default GrowthChart;