"use client"
import { ResponsiveLine, Serie } from "@nivo/line"

const data = [
	{
		period: "2022/Q1",
		totalSales: 102684,
		totalIncome: 169241450
	},
	{
		period: "2022/Q2",
		totalSales: 87991,
		totalIncome: 149187290
	},
	{
		period: "2022/Q3",
		totalSales: 93796,
		totalIncome: 162826160
	},
	{
		period: "2022/Q4",
		totalSales: 102004,
		totalIncome: 187625000
	},
	{
		period: "2023/Q1",
		totalSales: 98306,
		totalIncome: 171989590
	},
	{
		period: "2023/Q2",
		totalSales: 87728,
		totalIncome: 141332240
	},
	{
		period: "2023/Q3",
		totalSales: 90595,
		totalIncome: 147389820
	},
	{
		period: "2023/Q4",
		totalSales: 110527,
		totalIncome: 213870125
	}
]

const getGrowthRates = (
	data: { period: string; totalSales: number; totalIncome: number }[]
): Serie[] => {
	const growthRates: { x: string; y: number }[] = []
	data.forEach((item, index) => {
		if (index == 0) {
			growthRates.push({ x: item.period, y: 0 })
		} else {
			growthRates.push({
				x: item.period,
				y: +(
					((item.totalSales - data[index - 1].totalSales) / data[index - 1].totalSales) *
					100
				).toFixed(2)
			})
		}
	})

	return [{ id: "Growth Rate", data: growthRates }]
}

const GrowthChart = () => {
	return (
		<ResponsiveLine
			data={getGrowthRates(data)}
			yScale={{type: "linear", min: -20}}
			colors={{ scheme: "category10" }}
			margin={{ top: 20, right: 40, bottom: 30, left: 50 }}
			useMesh={true}
			motionConfig={"gentle"}
			pointSize={8}
		/>
	)
}

export default GrowthChart
