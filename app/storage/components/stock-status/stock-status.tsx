import { getStockStatus } from "@/actions/stock-status"
import { StockStatusModal } from "."
import StockStatusReloadButton from "./reload-button"

export const StockStatus = async () => {
	const stockStatus = await getStockStatus()

	return (
		<div className="w-full h-max min-h-[320px] flex flex-col justify-start place-items-start rounded-[32px] bg-base/90">
			<div className="w-full flex justify-between place-items-center px-7 pt-7 mb-2">
				<div className="-space-y-1 font-bold">
					<div className="text-2xl">實時倉庫容量概況</div>
					<div className="text-sm">資料時間: 3204/02/30 25:61</div>
				</div>
				<StockStatusReloadButton />
			</div>
			<div className="w-full h-full flex justify-start place-items-center space-x-4 overflow-y-scroll pl-7">
				{stockStatus.length > 0 ? (
					stockStatus.map((status) => (
						<StockStatusModal
							key={status.id}
							percentage={status.stock / status.capacity * 100}
							name={status.name}
						/>
					))
				) : (
					<div className="pt-6 text-center text-base font-medium">No factory order found.</div>
				)}
			</div>
		</div>
	)
}
