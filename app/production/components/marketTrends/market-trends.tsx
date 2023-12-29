"use client"
// import React, { PureComponent, useState } from 'react';
// import {  LineChart,  Line,  XAxis,  YAxis,  CartesianGrid,  Tooltip,  Legend,  ResponsiveContainer,  } from 'recharts';
// import Select from 'react-select';
// import { ActionMeta } from 'react-select';

import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    quarter: 'Q1',
    year: 2022,
    femaleClothe: {
      上衣: 20516,
      褲子: 11829,
      裙子: 24479,
      外套: 10709,
      運動裝: 10075,
      毛衣: 25000, 
    },
  },
  {
    quarter: 'Q2',
    year: 2022,
    femaleClothe: {
      上衣: 18972,
      褲子: 22006,
      裙子: 17436,
      外套: 8098,
      運動裝: 11276,
      毛衣: 12003,
    },
  },
  {
    quarter: 'Q3',
    year: 2022,
    femaleClothe: {
      上衣: 18919,
      褲子: 24772,
      裙子: 20564,
      外套: 10689,
      運動裝: 19868,
      毛衣: 12003, // Q3 毛衣數量下調
    },
  },
  {
    quarter: 'Q4',
    year: 2022,
    femaleClothe: {
      上衣: 19004,
      褲子: 18000,
      裙子: 25000,
      外套: 12000,
      運動裝: 28000,
      毛衣: 25000, // Q4 毛衣數量上調
    },
  },
  {
    quarter: 'Q1',
    year: 2023,
    femaleClothe: {
      上衣: 18898,
      褲子: 19387,
      裙子: 16553,
      外套: 12068,
      運動裝: 24800,
      毛衣: 25000, // Q1 毛衣數量上調
    },
  },
  {
    quarter: 'Q2',
    year: 2023,
    femaleClothe: {
      上衣: 20857,
      褲子: 14268,
      裙子: 15426,
      外套: 10210,
      運動裝: 22668,
      毛衣: 12003, // Q2 毛衣數量下調
    },
  },
  {
    quarter: 'Q3',
    year: 2023,
    femaleClothe: {
      上衣: 19616,
      褲子: 20408,
      裙子: 16760,
      外套: 10663,
      運動裝: 23345,
      毛衣: 12003, // Q3 毛衣數量下調
    },
  },
  {
    quarter: 'Q4',
    year: 2023,
    femaleClothe: {
      上衣: 17064,
      褲子: 20189,
      裙子: 18538,
      外套: 18766,
      運動裝: 20305,
      毛衣: 25000, // Q4 毛衣數量上調
    },
  },
];


export default class TrendChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    const femaleClotheItems = Object.keys(data[0].femaleClothe);

    return (
      // <ResponsiveContainer width="100%" height="500%">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          width={500}
          height={500}
          data={data}
          margin={{
            top: 80,
            right: 30,
            left: 20,
            bottom: 40,
          }}          
        >

          {/* Add title */}
          <text x="50%" y="20" textAnchor="middle" fontSize="30" fontWeight="bold">
            Market Trends
          </text>


          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={({ year, quarter }) => `${year}-${quarter}`} />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip />
          <Legend />

          {femaleClotheItems.map((item, index) => (
            <Line
              key={index}
              type="monotone"
              dataKey={`femaleClothe.${item}`}
              name={item}
              stroke={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
              activeDot={{ r: 8 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

