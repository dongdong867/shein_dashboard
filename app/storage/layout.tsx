import { FactoryOrders } from "@/components/factory-orders"

const StorageLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex w-full">
			<div className="w-full h-real grow">{children}</div>
			<div className="sticky top-4 h-[calc(100vh-32px)] ml-4 max-[1400px]:hidden">
				<FactoryOrders />
			</div>
		</div>
	)
}

export default StorageLayout
