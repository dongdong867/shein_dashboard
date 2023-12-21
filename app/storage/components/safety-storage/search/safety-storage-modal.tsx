export const SafetyStorageModal = ({
	safetyStoragePercentage
}: {
	safetyStoragePercentage: number
}) => {
	return (
		<div className="w-36 h-full py-4 flex flex-col justify-center place-items-center space-y-3">
			{safetyStoragePercentage > 1.1 ? (
				<>
					<div className="w-full h-full rounded-full bg-good" />
					<div className="w-full h-full rounded-full bg-good" />
					<div className="w-full h-full rounded-full bg-good" />
				</>
			) : safetyStoragePercentage < 0.9 ? (
				<>
					<div className="w-full h-full rounded-full bg-white" />
					<div className="w-full h-full rounded-full bg-white" />
					<div className="w-full h-full rounded-full bg-secondary" />
				</>
			) : (
				<>
					<div className="w-full h-full rounded-full bg-white" />
					<div className="w-full h-full rounded-full bg-warning" />
					<div className="w-full h-full rounded-full bg-warning" />
				</>
			)}
			<div className="font-bold">倉庫 1</div>
		</div>
	)
}
