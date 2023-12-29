"use client"
import React, { PureComponent } from 'react';
import { ReferenceArea } from 'recharts';
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



const TotalSalesChart = () => {
return (
  <ResponsiveContainer width="90%" height={300}>
    <LineChart
      data={data}
      margin={{
        top: 40,
        right: 10,
        left: 10,
        bottom: 40,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="period" tick={{ fontSize: 12 }}/>
      <YAxis domain={['auto', 'auto']} />
      <Tooltip />
      <Legend />

      <Line
        type="monotone"
        dataKey="totalSales"
        name="Total Sales"
        stroke=" #0066FF"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  </ResponsiveContainer>
);
};

const TotalIncomeChart = () => {
return (
  <ResponsiveContainer width="90%" height={300}>
    <LineChart
      data={data}
      margin={{
        top: 40,
        right: 10,
        left: 50,
        bottom: 40,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="period" tick={{ fontSize: 12 }}/>
      <YAxis domain={['auto', 'auto']} />
      <Tooltip />
      <Legend />

      <Line
        type="monotone"
        dataKey="totalIncome"
        name="Total Income"
        stroke= "#0066FF"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  </ResponsiveContainer>
);
};

const Chart = () => {
const titleStyle = { fontSize: '24px', fontWeight: 'bold', color: 'black' }; 

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <h2 style={titleStyle}>Total Sales</h2>
        <TotalSalesChart />
      </div>
      <div style={{ flex: 1 }}>
        <h2 style={titleStyle}>Total Income</h2>
        <TotalIncomeChart />
      </div>
    </div>
  );
};

export default Chart;