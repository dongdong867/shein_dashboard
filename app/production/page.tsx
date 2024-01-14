// ProductionPage.jsx
import TrendChart from "./components/marketTrends/market-trends";
import {
  TotalIncomeChart,
  TotalSalesChart,
} from "./components/production/production-analysis";
import GrowthChart from "./components/production/production-growth";

const ProductionPage = () => {
  return (
    <div className="w-full h-full p-10 space-y-8 flex flex-col justify-start bg-neutral-500/90 rounded-[32px] overflow-auto  mt-100">
      <div className="text-primary-foreground font-bold space-y-2">
        <div className="text-sm">SHEIN 數位轉型計畫</div>
        <div className="text-4xl">銷售分析系統</div>
      </div>

      <div className="relative w-full h-max bg-base/90 p-7 rounded-[32px] z-20">
        <div className="text-3xl font-bold pb-4">市場趨勢分析</div>
        <div className="h-[500px] p-4 bg-background rounded-3xl">
          <TrendChart />
        </div>
      </div>

      <div className="w-full flex space-x-8">
        <div className="w-full h-max bg-base/90 rounded-[32px] p-7">
          <div className="text-2xl font-bold pb-4">總銷售數量</div>
          <div className="w-full h-[300px] p-4 bg-background rounded-3xl">
            <TotalSalesChart />
          </div>
        </div>

        <div className="w-full h-max bg-base/90 rounded-[32px] p-7">
          <div className="text-2xl font-bold pb-4">營業利益</div>
          <div className="w-full h-[300px] p-4 bg-background rounded-3xl">
            <TotalIncomeChart />
          </div>
        </div>
      </div>

      <div className="relative bg-base/90 p-7 rounded-[32px] z-10">
        <div className="text-2xl font-bold pb-4">銷售成長率</div>
        <div className="w-full h-[350px] p-4 bg-background rounded-3xl">
          <GrowthChart />
        </div>
      </div>
    </div>
  );
};

export default ProductionPage;
