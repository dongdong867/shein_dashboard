// types
import { Column, ColumnDef, SortDirection } from "@tanstack/react-table"
// components
import { Button } from "@/components/ui/button"
// icons
import { LuArrowDown01, LuArrowDown10, LuArrowDownUp } from "react-icons/lu"

const getSortingArrowIcon = (isSorted: false | SortDirection) => {
	return isSorted ? isSorted == "asc" ? <LuArrowDown01 /> : <LuArrowDown10 /> : <LuArrowDownUp />
}

const sortHandler = (isSorted: false | SortDirection, column: Column<ProductStock, unknown>) => {
	if (!isSorted) column.toggleSorting(false)
	else if (isSorted == "asc") column.toggleSorting(true)
	else column.clearSorting()
}

const SortButton = ({
	column,
	children
}: {
	column: Column<ProductStock, unknown>
	children: React.ReactNode
}) => {
	return (
		<div className="flex justify-center">
			<Button
				variant={"ghost"}
				onClick={() => sortHandler(column.getIsSorted(), column)}
				className="text-center hover:text-primary hover:bg-primary/10"
			>
				{children}
				{getSortingArrowIcon(column.getIsSorted())}
			</Button>
		</div>
	)
}

export const columns: ColumnDef<ProductStock>[] = [
	{
		accessorKey: "storageId",
		header: "倉庫編號",
		cell: ({ row }) => <div className="lowercase pl-1">{row.getValue("storageId")}</div>
	},
	{
		accessorKey: "storageName",
		header: "倉庫名稱",
		cell: ({ row }) => <div className="lowercase">{row.getValue("storageName")}</div>
	},
	{
		accessorKey: "averageShipping",
		header: ({ column }) => (
			<SortButton column={column}>
				<span className="pr-2">平均出貨量</span>
			</SortButton>
		),
		cell: ({ row }) => (
			<div className="lowercase text-center">{row.getValue("averageShipping")}</div>
		)
	},
	{
		accessorKey: "periodCount",
		header: ({ column }) => (
			<SortButton column={column}>
				<span className="pr-2">累積期數</span>
			</SortButton>
		),
		cell: ({ row }) => <div className="lowercase text-center">{row.getValue("periodCount")}</div>
	},
	{
		accessorKey: "amount",
		header: ({ column }) => (
			<SortButton column={column}>
				<span className="pr-2">庫存數量</span>
			</SortButton>
		),
		cell: ({ row }) => <div className="lowercase text-center">{row.getValue("amount")}</div>
	}
]
