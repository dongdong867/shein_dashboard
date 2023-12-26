"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FaPlus } from "react-icons/fa6";

export const SafetyStorageAnalysisInsert = () => {
	return (
		<div className="w-full flex justify-end place-items-center space-x-2">
			<Input placeholder="輸入商品編號..." className="w-full xl:w-3/5 px-4" />
			<Button variant={"default"} asChild className="w-[32.5px] h-[32.5px] p-1 cursor-pointer">
				<FaPlus size={40} />
			</Button>
		</div>
	)
}
