import { CustomerOrderTable } from "./customer_order_table"

export const CustomerOrder = ({ time }: { time: string }) => {
	return (
		<div className="w-full h-max flex flex-col justify-start place-items-start rounded-[32px] bg-base/90 overflow-hidden">
			<div className="w-full flex justify-between place-items-center px-7 pt-7">
				<div className="w-full h-max -space-y-1 font-bold mb-4">
					<div className="text-2xl">顧客訂單查詢</div>
					<div className="text-sm">資料時間: {time}</div>
				</div>
			</div>
			<div className="w-full h-full p-7">
				<CustomerOrderTable />
			</div>
		</div>
	)
}
