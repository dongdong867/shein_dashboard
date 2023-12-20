import { SafetyStorageModal, SafetyStorageSearch } from "."

export const SafetyStorage = () => {
	return (
		<div className="w-full h-max flex flex-col justify-start place-items-start rounded-[32px] bg-base/90">
			<div className="w-full flex justify-between place-items-center px-7 pt-7">
				<div className="w-full h-max -space-y-1 font-bold mb-4">
					<div className="text-2xl">安全庫存查詢</div>
					<div className="text-sm">資料時間: 3204/2/30 25:61</div>
        </div>
        <SafetyStorageSearch />
      </div>
      <div className="w-full h-full flex justify-start place-items-center space-x-4 overflow-y-scroll pl-7">
        <SafetyStorageModal />
      </div>
		</div>
	)
}
