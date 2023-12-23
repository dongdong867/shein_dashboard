"use client"

import RFM from "./rfm"


export const CustomerCluster = () => {
	return (
		<div className="w-full h-max flex flex-col justify-start place-items-start rounded-[32px] bg-base/90 overflow-hidden">
			<div className="w-full flex justify-between place-items-center px-7 pt-7">
				<div className="w-full h-max -space-y-1 font-bold mb-4">
					<div className="text-2xl">顧客分群分析</div>
					<div className="text-sm">資料時間: {" "} 3204/2/30 25:61</div>
				</div>
			</div>
			<div className="w-full h-max flex justify-center font-bold text-xl">
				RFM分群分析
      			{/* <div className="text-xl">顧客分群分析</div> */}
			</div>
			<div className="w-full p-7" style={{height: "500px"}}>
				<RFM />
			</div>
		</div>
	)
}