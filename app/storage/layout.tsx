import Orders from "./components/orders"

const StorageLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex w-full h-full">
			<div className="w-full h-real grow">{children}</div>
			<div className="bg-black grow ml-4">
				<Orders />
			</div>
		</div>
	)
}

export default StorageLayout