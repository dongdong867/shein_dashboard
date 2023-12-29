
import { PureComponent } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  {
    name: '重要價值客戶',
    顧客數: 209,
    平均消費金額: 3500,
  },
  {
    name: '重要發展客戶',
    顧客數: 121,
    平均消費金額: 2977,
  },
  {
    name: '重要保持客戶',
    顧客數: 103,
    平均消費金額: 2457,
  },
  {
    name: '重要挽留客戶',
    顧客數: 63,
    平均消費金額: 5043,
  },
  {
    name: '一般價值客戶',
    顧客數: 321,
    平均消費金額: 577,
  },
  {
    name: '一般發展客戶',
    顧客數: 239,
    平均消費金額: 380,
  },
  {
    name: '一般保持客戶',
    顧客數: 349,
    平均消費金額: 430,
  },
  {
    name: '一般挽留客戶',
    顧客數: 278,
    平均消費金額: 1403,
  },
];

export default class RFM extends PureComponent {

  render() {
    console.log('RFM component is rendering!');
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="顧客數" fill="#094074" activeBar={<Rectangle fill="#f4d35e" />} />
          <Bar dataKey="平均消費金額" fill="#accbe1" activeBar={<Rectangle fill="#faf0ca" />} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

