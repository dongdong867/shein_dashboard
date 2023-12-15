"use client"

// components
import { Button } from "@/components/ui/button"
// icons
import { IoReloadCircle } from "react-icons/io5";

const StockStatusReloadButton = () => {
	return (
		<div>
      <Button variant={"link"} size={"icon"}>
        <IoReloadCircle size={40} />
      </Button>
		</div>
	)
}

export default StockStatusReloadButton
