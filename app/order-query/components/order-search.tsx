"use client"

import React, { useState } from "react";
import { IoSearch } from "react-icons/io5"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

type OrderSearchProps = {
	onSearch: (searchParams: { factoryName?: string; orderId?: string }) => void;
};
  
export const OrderSearch: React.FC<OrderSearchProps> = ({ onSearch }) => {
	const [searchParams, setSearchParams] = useState({
		factoryName: "",
		orderId: "",
	});
	
	const handleSearch = () => {
		onSearch(searchParams);
	};

	return (
		<div className="flex flex-row justify-between place-items-center border-gray-300">
      		<div className="w-full flex place-items-center space-x-2">
				<Input 
					placeholder="輸入工廠名稱..." 
					className="w-full xl:w-1/2" 
					value={searchParams.factoryName}
          			onChange={(e) => setSearchParams({ ...searchParams, factoryName: e.target.value })}
				/>
				<Button 
					variant={"default"} 
					asChild 
					className="w-[32.5px] h-[32.5px] p-1 cursor-pointer"
				  	onClick={handleSearch}>
					<IoSearch size={40} />
				</Button>
			</div>
			<div className="w-full flex place-items-center space-x-2">
				<Input 
					placeholder="輸入訂單編號..." 
					className="w-full xl:w-1/2"
					value={searchParams.orderId}
          			onChange={(e) => setSearchParams({ ...searchParams, orderId: e.target.value })}
					/>
				<Button 
					variant={"default"} 
					asChild 
					className="w-[32.5px] h-[32.5px] p-1 cursor-pointer"
					onClick={handleSearch}
					>
					<IoSearch size={40} />
				</Button>
			</div>
    	</div>
	)
}