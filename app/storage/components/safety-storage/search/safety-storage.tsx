"use client"

// hooks
import { useState } from "react"
// components
import { SafetyStorageModal } from "./safety-storage-modal"
import { SafetyStorageFilter } from "./safety-storage-filter"


export const SafetyStorage = ({ initialData }: { initialData: any[] }) => {
	const [data, setData] = useState(initialData)

	return (
		<div className="w-full h-max min-h-[400px] py-7 flex flex-col justify-start place-items-start rounded-[32px] bg-base/90">
			<div className="w-full flex justify-between place-items-center px-7 mb-4">
				<div className="w-full h-max -space-y-1 font-bold">
					<div className="text-2xl">安全庫存查詢</div>
					<div className="text-sm">資料時間: 3204/2/30 25:61</div>
				</div>
				<SafetyStorageFilter />
			</div>
			<div className="w-full h-full flex justify-start place-items-center space-x-4 overflow-y-scroll pl-7">
				<SafetyStorageModal
					safetyStoragePercentage={1}
					productName="商品 3"
					productId="As1frG0NfHsiK9X7kyTx"
				/>
			</div>
		</div>
	)
}
