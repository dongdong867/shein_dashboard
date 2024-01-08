"use client"

// hooks
import React, { useState } from "react"
// icons
import { IoSearch } from "react-icons/io5"
// components
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select"

type OrderSearchProps = {
	setSearchQuery: React.Dispatch<React.SetStateAction<string>>
	setQueryType: React.Dispatch<React.SetStateAction<string>>
}

export const OrderSearch = ({ setSearchQuery, setQueryType }: OrderSearchProps) => {
	const [input, setInput] = useState("")

	return (
		<div className="flex justify-between place-items-center border-gray-300">
			<div className="w-full h-max flex place-items-center space-x-2">
				<Select defaultValue="orderId" onValueChange={value => {
					setQueryType(value)
					setInput("")
					setSearchQuery("")
				}}>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Theme" />
					</SelectTrigger>
					<SelectContent className="bg-background">
						<SelectItem value="orderId">訂單編號</SelectItem>
						<SelectItem value="factoryName">工廠名稱</SelectItem>
					</SelectContent>
				</Select>

				<Input
					placeholder={"Input search query..."}
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<Button
					variant={"default"}
					className="w-auto h-10 aspect-square p-2 cursor-pointer"
					onClick={() => {
						setSearchQuery(input)
						setInput("")
					}}
				>
					<IoSearch size={40} />
				</Button>
			</div>
		</div>
	)
}
