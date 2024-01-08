import { ResponsiveBar, type BarDatum } from "@nivo/bar"

//fake data
const femaleClotheData: BarDatum[] = [
	{
		name: "上衣",
		"20歲以下": 286,
		"20-30歲": 176,
		"31-45歲": 132,
		"46-60歲": 220,
		"60歲以上": 62
	},
	{
		name: "褲子",
		"20歲以下": 228,
		"20-30歲": 182,
		"31-45歲": 146,
		"46-60歲": 53,
		"60歲以上": 74
	},
	{
		name: "裙子",
		"20歲以下": 110,
		"20-30歲": 376,
		"31-45歲": 290,
		"46-60歲": 114,
		"60歲以上": 70
	},
	{
		name: "外套",
		"20歲以下": 246,
		"20-30歲": 319,
		"31-45歲": 197,
		"46-60歲": 148,
		"60歲以上": 356
	},
	{
		name: "運動裝",
		"20歲以下": 132,
		"20-30歲": 106,
		"31-45歲": 80,
		"46-60歲": 54,
		"60歲以上": 35
	},
	{
		name: "毛衣",
		"20歲以下": 325,
		"20-30歲": 290,
		"31-45歲": 192,
		"46-60歲": 148,
		"60歲以上": 66
	}
]

const maleClotheData: BarDatum[] = [
	{
		name: "襯衫",
		"20歲以下": 325,
		"20-30歲": 290,
		"31-45歲": 192,
		"46-60歲": 148,
		"60歲以上": 66
	},
	{
		name: "長褲",
		"20歲以下": 150,
		"20-30歲": 302,
		"31-45歲": 139,
		"46-60歲": 221,
		"60歲以上": 105
	},
	{
		name: "短褲",
		"20歲以下": 339,
		"20-30歲": 232,
		"31-45歲": 198,
		"46-60歲": 90,
		"60歲以上": 77
	},
	{
		name: "外套",
		"20歲以下": 246,
		"20-30歲": 319,
		"31-45歲": 197,
		"46-60歲": 148,
		"60歲以上": 356
	},
	{
		name: "運動裝",
		"20歲以下": 110,
		"20-30歲": 376,
		"31-45歲": 290,
		"46-60歲": 114,
		"60歲以上": 70
	},
	{
		name: "毛衣",
		"20歲以下": 142,
		"20-30歲": 249,
		"31-45歲": 183,
		"46-60歲": 205,
		"60歲以上": 150
	}
]

const shoesData: BarDatum[] = [
	{
		name: "運動鞋",
		"20歲以下": 246,
		"20-30歲": 319,
		"31-45歲": 197,
		"46-60歲": 148,
		"60歲以上": 201
	},
	{
		name: "休閒鞋",
		"20歲以下": 325,
		"20-30歲": 290,
		"31-45歲": 192,
		"46-60歲": 148,
		"60歲以上": 66
	},
	{
		name: "高跟鞋",
		"20歲以下": 110,
		"20-30歲": 376,
		"31-45歲": 290,
		"46-60歲": 114,
		"60歲以上": 70
	},
	{
		name: "涼鞋",
		"20歲以下": 278,
		"20-30歲": 244,
		"31-45歲": 223,
		"46-60歲": 70,
		"60歲以上": 66
	},
	{
		name: "靴子",
		"20歲以下": 150,
		"20-30歲": 302,
		"31-45歲": 139,
		"46-60歲": 221,
		"60歲以上": 55
	}
]

const accessoriesData: BarDatum[] = [
	{
		name: "手袋",
		"20歲以下": 132,
		"20-30歲": 106,
		"31-45歲": 80,
		"46-60歲": 54,
		"60歲以上": 35
	},
	{
		name: "飾品",
		"20歲以下": 229,
		"20-30歲": 302,
		"31-45歲": 139,
		"46-60歲": 221,
		"60歲以上": 55
	},
	{
		name: "帽子",
		"20歲以下": 246,
		"20-30歲": 319,
		"31-45歲": 197,
		"46-60歲": 148,
		"60歲以上": 201
	},
	{
		name: "眼鏡",
		"20歲以下": 150,
		"20-30歲": 302,
		"31-45歲": 139,
		"46-60歲": 221,
		"60歲以上": 55
	},
	{
		name: "襪子",
		"20歲以下": 325,
		"20-30歲": 290,
		"31-45歲": 192,
		"46-60歲": 148,
		"60歲以上": 166
	}
]

const makeupData: BarDatum[] = [
	{
		name: "化妝品",
		"20歲以下": 150,
		"20-30歲": 302,
		"31-45歲": 139,
		"46-60歲": 221,
		"60歲以上": 55
	},
	{
		name: "臉部保養",
		"20歲以下": 246,
		"20-30歲": 319,
		"31-45歲": 197,
		"46-60歲": 148,
		"60歲以上": 201
	},
	{
		name: "身體保養",
		"20歲以下": 150,
		"20-30歲": 302,
		"31-45歲": 139,
		"46-60歲": 221,
		"60歲以上": 55
	}
]

const otherData: BarDatum[] = [
	{
		name: "睡衣",
		"20歲以下": 110,
		"20-30歲": 376,
		"31-45歲": 290,
		"46-60歲": 114,
		"60歲以上": 70
	},
	{
		name: "家居服",
		"20歲以下": 246,
		"20-30歲": 319,
		"31-45歲": 197,
		"46-60歲": 148,
		"60歲以上": 201
	},
	{
		name: "泳衣",
		"20歲以下": 132,
		"20-30歲": 106,
		"31-45歲": 80,
		"46-60歲": 54,
		"60歲以上": 35
	}
]

const BarChart = ({ data }: { data: BarDatum[] }) => {
	return (
		<ResponsiveBar
			data={data}
			keys={["20歲以下", "20-30歲", "31-45歲", "46-60歲", "60歲以上"]}
			indexBy={"name"}
			colors={{ scheme: "nivo" }}
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
			]}
		/>
	)
}

export const FemaleClotheAgeAnalysis = () => <BarChart data={femaleClotheData} />
export const MaleClotheAgeAnalysis = () => <BarChart data={maleClotheData} />
export const ShoesAgeAnalysis = () => <BarChart data={shoesData} />
export const AccessoriesAgeAnalysis = () => <BarChart data={accessoriesData} />
export const MakeupAgeAnalysis = () => <BarChart data={makeupData} />
export const OtherAgeAnalysis = () => <BarChart data={otherData} />
