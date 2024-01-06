"use client"
import { ResponsiveLine, Serie } from "@nivo/line"

const salesData: Serie[] = [
	{
		id: "Total Sales",
		data: [
			{ x: "2022/Q1", y: 102684 },
			{ x: "2022/Q2", y: 87991 },
			{ x: "2022/Q3", y: 93796 },
			{ x: "2022/Q4", y: 102004 },
			{ x: "2023/Q1", y: 98306 },
			{ x: "2023/Q2", y: 87728 },
			{ x: "2023/Q3", y: 90595 },
			{ x: "2023/Q4", y: 110527 }
		]
	}
]

const incomeData: Serie[] = [
  {
    id: " Total Income",
    data: [
      { x: "2022/Q1", y: 169241450 },
			{ x: "2022/Q2", y: 149187290 },
			{ x: "2022/Q3", y: 162826160 },
			{ x: "2022/Q4", y: 187625000 },
			{ x: "2023/Q1", y: 171989590 },
			{ x: "2023/Q2", y: 141332240 },
			{ x: "2023/Q3", y: 147389820 },
			{ x: "2023/Q4", y: 213870125 }
    ]
  }
]

export const TotalSalesChart = () => {
	return (
    <ResponsiveLine
      data={salesData}
      yScale={{type: "linear", min: 85000}}
      colors={{ scheme: "category10" }}
			margin={{ top: 40, right: 30, bottom: 30, left: 50 }}
			useMesh={true}
			motionConfig={"gentle"}
      pointSize={8}
    />
	)
}

export const TotalIncomeChart = () => {
	return (
		<ResponsiveLine
      data={incomeData}
      yScale={{type: "linear", min: 130000000}}
      colors={{ scheme: "category10" }}
			margin={{ top: 40, right: 30, bottom: 30, left: 80 }}
			useMesh={true}
			motionConfig={"gentle"}
      pointSize={8}
    />
	)
}