import { StockStatus } from "./components/stock-status"

const StoragePage = () => {
	return (
		<div className="w-full h-full p-10 flex flex-col justify-start bg-neutral-500/90 rounded-[32px] overflow-hidden">
			<div className="text-primary-foreground font-bold mb-8 space-y-2">
				<div className="text-sm">SHEIN 數位轉型計畫</div>
				<div className="text-5xl">倉儲管理系統</div>
			</div>
			<StockStatus />
		</div>
	)
}

export default StoragePage
