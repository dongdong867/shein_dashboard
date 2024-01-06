import { getStockStatus } from "@/actions/stock-status"
import { AgeAnalysis, LocationAnalysis, RfmAnalysis } from "./components/customer-cluster/customer_cluster"
import { CustomerOrder } from "./components/customer-order/customer_order"

const CustomerPage = async () => {
	const time = new Date().toLocaleString()

	return (
		<div className="w-full h-full p-10 space-y-8 flex flex-col justify-start bg-neutral-500/90 rounded-[32px] overflow-hidden">
			<div className="text-primary-foreground font-bold space-y-2">
				<div className="text-sm">SHEIN 數位轉型計畫</div>
				<div className="text-4xl">顧客管理系統</div>
			</div>
			<RfmAnalysis />
			<AgeAnalysis />
			<LocationAnalysis />
			<CustomerOrder time={time} />
		</div>
	)
}

export default CustomerPage
