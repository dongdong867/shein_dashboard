import { Serie } from "@nivo/line"
import { SafetyStorageAnalysisChart } from "./safety-storage-analysis-chart"
import { SafetyStorageAnalysisInsert } from "./safety-storage-analysis-insert"

const data = [] as Serie[]

export const SafetyStorageAnalysis = () => {
	return (
		<div className="w-full h-max min-h-[500px] flex flex-col justify-start place-items-start rounded-[32px] bg-base/90">
			<div className="w-full h-max flex justify-between place-items-center px-7 pt-7">
				<div className="w-full font-bold text-2xl">安全庫存分析</div>
				<SafetyStorageAnalysisInsert />
			</div>
			<div className="w-full h-full p-7">
				<div className="w-full h-full bg-background rounded-3xl">
					{data.length == 0 ? (
						<div className="w-full h-full flex justify-center place-items-center text-sm">
							No Selected Product.
						</div>
					) : (
						<SafetyStorageAnalysisChart data={data} />
					)}
				</div>
			</div>
		</div>
	)
}
