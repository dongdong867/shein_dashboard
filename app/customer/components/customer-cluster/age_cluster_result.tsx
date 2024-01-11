import { ResponsiveBar, type BarDatum } from "@nivo/bar";

export const BarChart = ({ data }: { data: BarDatum[] }) => {
	return (
		<ResponsiveBar
			data={data}
			keys={["20歲以下", "20-30歲", "31-45歲", "46-60歲", "60歲以上"]}
			indexBy={"name"}
			colors={({ id }) => {
				if (id === "20歲以下") return "#3e76a8";
				if (id === "20-30歲") return "#accbe1";
				if (id === "31-45歲") return "#3c6997";
				if (id === "46-60歲") return "#5a9fd4";
				if (id === "60歲以上") return "#d4e9f5";
				// 如果有其他 id 不在 keys 中
				return "#999999";
			}}
			margin={{ top: 10, right: 100, bottom: 30, left: 40 }}
			padding={0.3}
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
			]} />
	)
}
