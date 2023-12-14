import { Progress } from "../ui/progress"


type OrderModalType = {
	orderId: string,
	orderDate: string,
	status: "inline" | "processing" | "shipping",
	percentage: number
}

type OrderStatusType = {
	status: "inline" | "processing" | "shipping",
	percentage: number
}

const OrderStatus = ({ status, percentage }: OrderStatusType) => {
	if (status == "inline") {
		return (
			<div className="w-full h-max flex flex-col place-items-center p-4 mt-4 space-y-4 bg-background rounded-2xl">
				<div className="flex w-full space-x-2">
					<div className="w-20 bg-primary rounded-full" />
					<Progress value={0} className="bg-base-100/20" />
					<div className="w-20 bg-base-100/20 rounded-full" />
				</div>
				<div className="text-4xl font-bold">訂單排隊中...</div>
			</div>
		)
	}

	if (status == "shipping") {
		return (
			<div className="w-full h-max flex flex-col place-items-center p-4 mt-4 space-y-4 bg-background rounded-2xl">
				<div className="flex w-full space-x-2">
					<div className="w-20 bg-primary rounded-full" />
					<Progress value={100} className="bg-base-100/20" />
					<div className="w-20 bg-primary rounded-full" />
				</div>
				<div className="text-4xl font-bold">訂單生產中...</div>
			</div>
		)
	}

	return (
		<div className="w-full h-max flex flex-col place-items-center p-4 mt-4 space-y-4 bg-background rounded-2xl">
			<div className="flex w-full space-x-2">
				<div className="w-20 bg-primary rounded-full" />
				<Progress value={percentage} className="bg-base-100/20" />
				<div className="w-20 bg-base-100/20 rounded-full" />
			</div>
			<div className="text-4xl font-bold">訂單運送中...</div>
		</div>
	)
}

export const FactoryOrderModal = ({orderId, orderDate, status, percentage}: OrderModalType) => {
	return (
		<div className="w-full min-w-[350px] h-max font-medium bg-base/90 p-6 rounded-3xl">
			<div className="-space-y-1">
				<div>訂單編號: {" "} {orderId}</div>
				<div>訂單產生日期: {" "} {orderDate}</div>
			</div>
			<OrderStatus status={status} percentage={percentage} />
		</div>
	)
}
