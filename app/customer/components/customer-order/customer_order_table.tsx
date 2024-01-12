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
	Table as TanstackTable,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable
} from "@tanstack/react-table"
import { useEffect, useState } from "react"
// util
import { Button } from "@/components/ui/button"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select"
import { CustomerOrderT } from "@/types/customer-order"
import { columns } from "./columns"


const PaginationButton = ({ table }: { table: TanstackTable<CustomerOrderT> }) => {
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
			<Button
				onClick={() => {
					console.log("next page button clicked")
					table.nextPage()
				}}
				disabled={!table.getCanNextPage()}
			>
				Next
			</Button>
		</div>
	)
}

export const CustomerOrderTable = ({
	data
}: {
	data: CustomerOrderT[]
}) => {
	const [sorting, setSorting] = useState<SortingState>([])
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
	const [filterField, setFilterField] = useState("orderId")

	const table = useReactTable({
		// data: data.customerOrders,
		data: data,
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

	useEffect(() => {
		table.setPageSize(5)
	}, [])

	return (
		<div className="w-full h-full p-7 space-y-4 bg-white rounded-[32px]">
			<div className="flex justify-end place-items-center">
				{/* <div className="pl-1 font-bold">商品名稱: </div> */}
				<div className="w-32">
					<Select defaultValue="orderId" onValueChange={(value) => setFilterField(value)}>
						<SelectTrigger>
							<SelectValue placeholder={"Select search param key."} />
						</SelectTrigger>
						<SelectContent className="bg-background">
							<SelectItem value="orderId">訂單編號</SelectItem>
							<SelectItem value="customerId">顧客編號</SelectItem>
							<SelectItem value="createAt">下單時間</SelectItem>
							<SelectItem value="products">購買產品</SelectItem>
						</SelectContent>
					</Select>
				</div>

				<div style={{ width: "15px" }}></div>
				<Input
					placeholder={`search ${filterField}...`}
					value={(table.getColumn(filterField)?.getFilterValue() as string) ?? ""}
					onChange={(event) => table.getColumn(filterField)?.setFilterValue(event.target.value)}
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
											{cell.column.id === 'products' ? (
												// Iterate over products and render each one separately
												row.original.products.map((product, index) => (
													<div key={product.id} className="pb-2">
														<div>產品編號: {product.id},</div>
														<div className="flex space-x-2">
															<div>購買數量: {product.amount},</div>
															<div>產品單價: {product.price}</div>
														</div>
													</div>
												))
											) : (
												flexRender(cell.column.columnDef.cell, cell.getContext())
											)}
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
			<PaginationButton table={table} />
		</div>
	)
}
