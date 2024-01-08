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
import { SetStateAction, useState } from "react"
// util
import { Button } from "@/components/ui/button"
import { CustomerOrderT } from "@/types/customer-order"
import { columns } from "./columns"

// TODO: REPLACE FAKE DATA
const product: ProductInCustomerOrder[] = [
    {
        productId: "p1",
        price: 300,
        amount: 2,
    },
    {
        productId: "p2",
        price: 600,
        amount: 1,
    },
    {
        productId: "p3",
        price: 550,
        amount: 1,
    },
]
const dataT: CustomerOrder[] = [
	{
		orderId: "t1",
		customerId: "Tintin",
		createdAt: "2023/04/08 04:08",
		price: 524,
		// products: [product[0],product[2]],
        products: "毛衣x2 運動褲x1 項鍊x5",
	},
	{
		orderId: "t2",
		customerId: "Ann",
		createdAt: "2023/04/08 08:08",
		price: 628,
		// products: [product[0]],
        products: "上衣x2 褲子x1 鞋子x1",
	},
	{
		orderId: "t3",
		customerId: "Tintin",
		createdAt: "2023/04/08 14:08",
		price: 552,
		// products: product,
        products: "外套x1 項鍊x3",
	},
	{
		orderId: "t4",
		customerId: "John",
		createdAt: "2023/04/09 09:09",
		price: 650,
		products: "毛衣x2 運動褲x1"
	},
	{
		orderId: "t5",
		customerId: "Alice",
		createdAt: "2023/04/09 12:30",
		price: 720,
		products: "上衣x3 裙子x2 鞋子x2"
	},
	{
		orderId: "t6",
		customerId: "Bob",
		createdAt: "2023/04/09 16:45",
		price: 480,
		products: "運動裝x1"
	},
	{
		"orderId": "t7",
		"customerId": "Eva",
		"createdAt": "2023/04/09 20:15",
		"price": 550,
		"products": "外套x2 毛衣x1 裙子x1"
	},
	{
		"orderId": "t8",
		"customerId": "Alice",
		"createdAt": "2023/04/09 23:55",
		"price": 1410,
		"products": "休閒鞋x2"
	},
	{
		"orderId": "t9",
		"customerId": "Carson",
		"createdAt": "2023/04/10 11:20",
		"price": 620,
		"products": "睡衣x2"
	}
]

export const CustomerOrderTable = ({
	data
}: {
	data: CustomerOrderT[]
}) => {
	const [sorting, setSorting] = useState<SortingState>([])
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const [filterField, setFilterField] = useState("orderId")

    const handleFilterFieldChange = (event: { target: { value: SetStateAction<string> } }) => {
        setFilterField(event.target.value);
    };

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
				<Button onClick={() => {console.log("clickkkkk"); table.nextPage();}} disabled={!table.getCanNextPage()}>
					Next
				</Button>
			</div>
		)
	}

	return (
		<div className="w-full h-full p-7 space-y-4 bg-white rounded-[32px]">
            <div className="flex justify-end place-items-center">
				{/* <div className="pl-1 font-bold">商品名稱: </div> */}
                <select
                    value={filterField}
                    onChange={handleFilterFieldChange}
                    className="p-2 border rounded"
                    // className="p-2 rounded-2xl border"
                >
                    <option value="orderId">訂單編號</option>
                    <option value="customerId">顧客編號</option>
                    <option value="createAt">下單時間</option>
                    <option value="products">購買產品</option>
                </select>
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
													<div key={index}>
														{`產品編號: ${product.id}, 購買數量: ${product.amount}, 產品單價: ${product.price}`}
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
			<PaginationButton />
		</div>
	)
}
