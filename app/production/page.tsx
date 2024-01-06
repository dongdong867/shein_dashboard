// ProductionPage.jsx
import { TotalIncomeChart, TotalSalesChart } from "./components/production/production-analysis"
import TrendChart from "./components/marketTrends/market-trends"
import GrowthChart from "./components/production/production-growth"

const ProductionPage = () => {
	return (
		<div className="w-full h-full p-10 space-y-8 flex flex-col justify-start bg-neutral-500/90 rounded-[32px] overflow-auto  mt-100">
			<div className="text-primary-foreground font-bold space-y-2">
				<div className="text-sm">SHEIN 數位轉型計畫</div>
				<div className="text-4xl">生產量管理系統</div>
			</div>

			<div className="relative w-full h-max bg-white/80 p-7 rounded-[32px] z-20">
				<div className="text-3xl font-bold text-center">Market Trends</div>
				<div className="h-[500px]">
					<TrendChart />
				</div>
			</div>

			<div className="w-full flex space-x-8">
				<div className="w-full h-max bg-white/80 rounded-[32px] p-7">
					<div className="text-2xl font-bold">Total Sales</div>
					<div className="h-[300px]">
						<TotalSalesChart />
					</div>
				</div>

				<div className="w-full h-max bg-white/80 rounded-[32px] p-7">
					<div className="text-2xl font-bold">Total Income</div>
					<div className="w-full h-[300px]">
						<TotalIncomeChart />
					</div>
				</div>
			</div>

			{/* GrowthChart 的容器 */}
			<div className="relative bg-white/80 p-4 rounded-[16px] overflow-auto z-10">
				{/* GrowthChart 元件 */}
				<GrowthChart />
			</div>
		</div>
	)
}

export default ProductionPage

// const ProductionPage = () => {
// 	return (
// 		<div className="w-full h-full p-10 space-y-8 flex flex-col justify-start bg-neutral-500/90 rounded-[32px] overflow-auto"		>
// 			<div className="text-primary-foreground font-bold space-y-2">
// 				<div className="text-sm">SHEIN 數位轉型計畫</div>
// 				<div className="text-4xl">生產量管理系統</div>
// 				<div style={{height: "100px"}}>
// 				<TrendChart />
// 				<Chart/>
// 				<GrowthChart/>
// 				<div/>
// 			</div>
// 			</div>
// 		</div>
// 	)
// }

// export default ProductionPage
