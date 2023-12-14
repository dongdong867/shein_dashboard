"use client"

// components
import { Input } from "@/components/ui/input"
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from "@/components/ui/table"
import {
	ColumnDef,
	ColumnFiltersState,
	SortingState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getSortedRowModel,
	useReactTable
} from "@tanstack/react-table"
import { useState } from "react"
// util
import { columns } from "./columns"

// TODO: REPLACE FAKE DATA
const data: ProductStock[] = [
	{
		storageId: "test1",
		storageName: "test1",
		averageShipping: 100,
		periodCount: 1,
		amount: 1000
	},
	{
		storageId: "test3",
		storageName: "test3",
		averageShipping: 300,
		periodCount: 3,
		amount: 3000
	},
	{
		storageId: "test2",
		storageName: "test2",
		averageShipping: 200,
		periodCount: 2,
		amount: 2000
	}
]

export const ProductStockTable = () => {
	const [sorting, setSorting] = useState<SortingState>([])
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

	const table = useReactTable({
		data,
		columns,
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		state: {
			sorting,
			columnFilters
		}
	})
	return (
		<div className="w-full h-full p-7 space-y-4 bg-white rounded-[32px]">
			<div className="flex justify-between place-items-center">
				<div className="pl-1 font-bold">商品名稱: </div>
				<Input
					placeholder="搜尋倉庫編號..."
					value={(table.getColumn("storageId")?.getFilterValue() as string) ?? ""}
					onChange={(event) => table.getColumn("storageId")?.setFilterValue(event.target.value)}
					className="w-1/3"
				/>
			</div>
			<div className="rounded-2xl border">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<TableHead key={header.id}>
											{header.isPlaceholder
												? null
												: flexRender(header.column.columnDef.header, header.getContext())}
										</TableHead>
									)
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>
											{flexRender(cell.column.columnDef.cell, cell.getContext())}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell colSpan={columns.length} className="h-24 text-center">
									No Results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
		</div>
	)
}
