"use client"

import {
	AccessoriesAgeAnalysis,
	FemaleClotheAgeAnalysis,
	MakeupAgeAnalysis,
	MaleClotheAgeAnalysis,
	OtherAgeAnalysis,
	ShoesAgeAnalysis
} from "./age_cluster_result"
import {
	AccessoriesLocationAnalysis,
	FemaleClotheLocationAnalysis,
	MakeupLocationAnalysis,
	MaleClotheLocationAnalysis,
	OtherLocationAnalysis,
	ShoesLocationAnalysis
} from "./location_cluster_result"
import { Rfm } from "./rfm"

export const RfmAnalysis = () => {
	return (
		<div className="w-full h-max bg-base/90 p-7 rounded-[32px]">
			<div className="text-2xl font-bold pb-4">RFM 分群分析</div>
			<div className="w-full h-max bg-background rounded-3xl">
				<div className="h-[400px]">
					<div className="h-[400px]">
						<Rfm />
					</div>
				</div>
			</div>
		</div>
	)
}

export const AgeAnalysis = () => {
	return (
		<div className="w-full h-max bg-base/90 p-7 rounded-[32px]">
			<div className="text-2xl font-bold pb-4">年齡分群分析</div>
			<div className="w-full grid grid-cols-2 xl:grid-cols-3 gap-4">
				<div className="h-max bg-background rounded-3xl p-7">
					<div className="text-xl font-bold pb-4">女裝</div>
					<div className="h-[300px]">
						<FemaleClotheAgeAnalysis />
					</div>
				</div>
				<div className="h-max bg-background rounded-3xl p-7">
					<div className="text-xl font-bold pb-4">男裝</div>
					<div className="h-[300px]">
						<MaleClotheAgeAnalysis />
					</div>
				</div>
				<div className="h-max bg-background rounded-3xl p-7">
					<div className="text-xl font-bold pb-4">鞋子</div>
					<div className="h-[300px]">
						<ShoesAgeAnalysis />
					</div>
				</div>
				<div className="h-max bg-background rounded-3xl p-7">
					<div className="text-xl font-bold pb-4">配飾</div>
					<div className="h-[300px]">
						<AccessoriesAgeAnalysis />
					</div>
				</div>
				<div className="h-max bg-background rounded-3xl p-7">
					<div className="text-xl font-bold pb-4">美妝</div>
					<div className="h-[300px]">
						<MakeupAgeAnalysis />
					</div>
				</div>
				<div className="h-max bg-background rounded-3xl p-7">
					<div className="text-xl font-bold pb-4">其他</div>
					<div className="h-[300px]">
						<OtherAgeAnalysis />
					</div>
				</div>
			</div>
		</div>
	)
}

export const LocationAnalysis = () => {
	return (
		<div className="w-full h-max bg-base/90 p-7 rounded-[32px]">
			<div className="text-2xl font-bold pb-4">區域分群分析</div>
			<div className="w-full grid grid-cols-2 xl:grid-cols-3 gap-4">
				<div className="h-max bg-background rounded-3xl p-7">
					<div className="text-xl font-bold pb-4">女裝</div>
					<div className="h-[300px]">
						<FemaleClotheLocationAnalysis />
					</div>
				</div>
				<div className="h-max bg-background rounded-3xl p-7">
					<div className="text-xl font-bold pb-4">男裝</div>
					<div className="h-[300px]">
						<MaleClotheLocationAnalysis />
					</div>
				</div>
				<div className="h-max bg-background rounded-3xl p-7">
					<div className="text-xl font-bold pb-4">鞋子</div>
					<div className="h-[300px]">
						<ShoesLocationAnalysis />
					</div>
				</div>
				<div className="h-max bg-background rounded-3xl p-7">
					<div className="text-xl font-bold pb-4">配飾</div>
					<div className="h-[300px]">
						<AccessoriesLocationAnalysis />
					</div>
				</div>
				<div className="h-max bg-background rounded-3xl p-7">
					<div className="text-xl font-bold pb-4">美妝</div>
					<div className="h-[300px]">
						<MakeupLocationAnalysis />
					</div>
				</div>
				<div className="h-max bg-background rounded-3xl p-7">
					<div className="text-xl font-bold pb-4">其他</div>
					<div className="h-[300px]">
						<OtherLocationAnalysis />
					</div>
				</div>
			</div>
		</div>
	)
}
