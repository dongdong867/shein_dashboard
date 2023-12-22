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
    ColumnFiltersState,
    SortingState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable
} from "@tanstack/react-table"
import { useState } from "react"
// util
import { Button } from "@/components/ui/button"
import { columns } from "./columns"

// TODO: REPLACE FAKE DATA
const data: CustomerOrder[] = [
	{
		orderId: "t1",
		customerId: "c1",
		createdAt: "2023/04/08 04:08",
		price: 520,
		products: [],
	},
	{
		orderId: "t2",
		customerId: "c1",
		createdAt: "2023/04/08 08:08",
		price: 520,
		products: [],
	},
	{
		orderId: "t3",
		customerId: "c1",
		createdAt: "2023/04/08 14:08",
		price: 520,
		products: [],
	}
]

export const CustomerOrderTable = () => {
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
		getPaginationRowModel: getPaginationRowModel(),
		state: {
			sorting,
			columnFilters
		}
	})

	const PaginationButton = () => {
		return (
			<div className="flex justify-end space-x-2">
				<Button
					variant={"outline"}
					onClick={() => table.previousPage()}
					disabled={!table.getCanPreviousPage()}
					className="hover:bg-primary-foreground hover:text-primary"
				>
					Previous
				</Button>
				<Button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
					Next
				</Button>
			</div>
		)
	}

	return (
		<div className="w-full h-full p-7 space-y-4 bg-white rounded-[32px]">
            <div className="flex justify-end place-items-center">
				{/* <div className="pl-1 font-bold">商品名稱: </div> */}
				<Input
					placeholder="搜尋倉庫編號..."
					value={(table.getColumn("orderId")?.getFilterValue() as string) ?? ""}
					onChange={(event) => table.getColumn("orderId")?.setFilterValue(event.target.value)}
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
			<PaginationButton />
		</div>
	)
}
