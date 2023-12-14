// types
import { ColumnDef } from "@tanstack/react-table"
// components
import { Button } from "@/components/ui/button"
// icons
import { LuArrowDown01, LuArrowDown10, LuArrowDownUp } from "react-icons/lu"

export const columns: ColumnDef<ProductStock>[] = [
	{
		accessorKey: "storageId",
		header: "倉庫編號",
		cell: ({ row }) => <div className="lowercase">{row.getValue("storageId")}</div>
	},
	{
		accessorKey: "storageName",
		header: "倉庫名稱",
		cell: ({ row }) => <div className="lowercase">{row.getValue("storageName")}</div>
	},
	{
		accessorKey: "averageShipping",
		header: ({ column }) => (
			<div className="flex justify-center">
				<Button
					variant={"ghost"}
					onClick={() => {
						if (!column.getIsSorted()) column.toggleSorting(false)
						else if (column.getIsSorted() == "asc") column.toggleSorting(true)
						else column.clearSorting()
					}}
					className="text-center hover:text-primary hover:bg-primary/10"
				>
					<span className="pr-2">平均出貨量</span>
					{column.getIsSorted() ? (
						column.getIsSorted() == "asc" ? (
							<LuArrowDown01 />
						) : (
							<LuArrowDown10 />
						)
					) : (
						<LuArrowDownUp />
					)}
				</Button>
			</div>
		),
		cell: ({ row }) => (
			<div className="lowercase text-center">{row.getValue("averageShipping")}</div>
		)
	},
	{
		accessorKey: "periodCount",
		header: ({ column }) => (
			<div className="flex justify-center">
				<Button
					variant={"ghost"}
					onClick={() => {
						if (!column.getIsSorted()) column.toggleSorting(false)
						else if (column.getIsSorted() == "asc") column.toggleSorting(true)
						else column.clearSorting()
					}}
					className="text-center hover:text-primary hover:bg-primary/10"
				>
					<span className="pr-2">累積期數</span>
					{column.getIsSorted() ? (
						column.getIsSorted() == "asc" ? (
							<LuArrowDown01 />
						) : (
							<LuArrowDown10 />
						)
					) : (
						<LuArrowDownUp />
					)}
				</Button>
			</div>
		),
		cell: ({ row }) => <div className="lowercase text-center">{row.getValue("periodCount")}</div>
	},
	{
		accessorKey: "amount",
		header: ({ column }) => (
			<div className="flex justify-end">
				<Button
					variant={"ghost"}
					onClick={() => {
						if (!column.getIsSorted()) column.toggleSorting(false)
						else if (column.getIsSorted() == "asc") column.toggleSorting(true)
						else column.clearSorting()
					}}
					className="text-right hover:text-primary hover:bg-primary/10"
				>
					<span className="pr-2">庫存數量</span>
					{column.getIsSorted() ? (
						column.getIsSorted() == "asc" ? (
							<LuArrowDown01 />
						) : (
							<LuArrowDown10 />
						)
					) : (
						<LuArrowDownUp />
					)}
				</Button>
			</div>
		),
		cell: ({ row }) => <div className="lowercase text-right pr-4">{row.getValue("amount")}</div>
	}
]
