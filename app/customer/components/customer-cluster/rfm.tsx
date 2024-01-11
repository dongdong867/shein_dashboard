import { BarDatum, ResponsiveBar } from "@nivo/bar";

const data: BarDatum[] = [
	{
		label: "重要價值客戶",
		顧客數: 209,
		平均消費金額: 3500
	},
	{
		label: "重要發展客戶",
		顧客數: 121,
		平均消費金額: 2977
	},
	{
		label: "重要保持客戶",
		顧客數: 103,
		平均消費金額: 2457
	},
	{
		label: "重要挽留客戶",
		顧客數: 63,
		平均消費金額: 5043
	},
	{
		label: "一般價值客戶",
		顧客數: 321,
		平均消費金額: 577
	},
	{
		label: "一般發展客戶",
		顧客數: 239,
		平均消費金額: 380
	},
	{
		label: "一般保持客戶",
		顧客數: 349,
		平均消費金額: 430
	},
	{
		label: "一般挽留客戶",
		顧客數: 278,
		平均消費金額: 1403
	}
]

export const Rfm = () => {
	return (
		<ResponsiveBar
			data={data}
			keys={["顧客數", "平均消費金額"]}
			indexBy={"label"}
			// colors={{ scheme: "nivo" }}
      colors={({ id }) => {
				if (id === "顧客數") return "#3e76a8";
				if (id === "平均消費金額") return "#accbe1";
				// 如果有其他 id 不在 keys 中
				return "#999999";
			}}
			margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
			padding={0.3}
			groupMode={"grouped"}
			valueScale={{ type: "symlog" }}
			legends={[
				{
					dataFrom: "keys",
					anchor: "bottom-right",
					direction: "column",
					justify: false,
					translateX: 120,
					translateY: 0,
					itemsSpacing: 2,
					itemWidth: 100,
					itemHeight: 20,
					itemDirection: "left-to-right",
					itemOpacity: 0.85,
					symbolSize: 20
				}
			]}
		/>
	)
}
