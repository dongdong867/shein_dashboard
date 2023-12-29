// ProductionPage.jsx
"use clinet"
import Chart from "./components/production/production-analysis";
import TrendChart from "./components/marketTrends/market-trends";
import GrowthChart from "./components/production/production-growth";

const ProductionPage = () => {
	return (
	  <div className="w-full h-full p-10 space-y-8 flex flex-col justify-start bg-neutral-500/90 rounded-[32px] overflow-auto  mt-100" >

<div className="text-primary-foreground font-bold space-y-2">
        <div className="text-sm">SHEIN 數位轉型計畫</div>
        <div className="text-4xl">生產量管理系統</div>
      </div>

		{/* TrendChart 的容器 */}
		<div className="relative bg-white/80 p-4 rounded-[16px] overflow-auto z-20">
		  {/* TrendChart 元件 */}
		  <TrendChart />
		</div>
  
		{/* Chart 的容器 */}
		<div className="relative bg-white/80 p-4 rounded-[16px] overflow-auto z-10">
		  {/* Chart 元件 */}
		  <Chart />
		</div>
  
		{/* GrowthChart 的容器 */}
		<div className="relative bg-white/80 p-4 rounded-[16px] overflow-auto z-10">
		  {/* GrowthChart 元件 */}
		  <GrowthChart />
		</div>
	  </div>
	);
  };
  
  export default ProductionPage;

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
