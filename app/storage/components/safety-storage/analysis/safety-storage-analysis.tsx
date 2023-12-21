import { SafetyStorageAnalysisChart } from "./safety-storage-analysis-chart"

export const SafetyStorageAnalysis = () => {
	return (
		<div className="w-full h-max min-h-[600px] flex flex-col justify-start place-items-start rounded-[32px] bg-base/90">
			<div className="w-full px-7 pt-7 font-bold mb-4 text-2xl">安全庫存分析</div>
			<div className="w-full h-full p-7">
				<div className="w-full h-full bg-background rounded-3xl">
					<SafetyStorageAnalysisChart data={[]} />
				</div>
			</div>
		</div>
	)
}
