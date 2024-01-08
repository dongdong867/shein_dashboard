"use client"

// components
import { Button } from "@/components/ui/button"
// hooks
import { useState } from "react"

type Props = {
	onSelect?: (factory: string) => void
}

const OrderButton = ({ onSelect }: Props) => {
	const [showDropdown, setShowDropdown] = useState(false)

	const handleFactorySelect = (factory: string) => {
		setShowDropdown(false)
		if (onSelect) {
			onSelect(factory)
		}
	}

	return (
		<div className="relative inline-block">
			<Button
				variant={"outline"}
				onClick={() => setShowDropdown(true)}
				className="mt-1 px-2 py-1 rounded transition-all"
			>
				分配訂單
			</Button>
			{showDropdown && (
				<div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md overflow-hidden">
					<ul>
						<li onClick={() => handleFactorySelect("工廠十")}>工廠十</li>
						<li onClick={() => handleFactorySelect("工廠三")}>工廠三</li>
						<li onClick={() => handleFactorySelect("工廠七")}>工廠七</li>
						<li onClick={() => handleFactorySelect("工廠四")}>工廠四</li>
						<li onClick={() => handleFactorySelect("工廠八")}>工廠八</li>
						<li onClick={() => handleFactorySelect("工廠二")}>工廠二</li>
						<li onClick={() => handleFactorySelect("工廠一")}>工廠一</li>
						<li onClick={() => handleFactorySelect("工廠六")}>工廠六</li>
						<li onClick={() => handleFactorySelect("工廠九")}>工廠九</li>
						<li onClick={() => handleFactorySelect("工廠五")}>工廠五</li>
					</ul>
				</div>
			)}
		</div>
	)
}

export default OrderButton
