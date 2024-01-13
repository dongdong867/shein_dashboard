// types
import { Column, ColumnDef, SortDirection } from "@tanstack/react-table";
// components
import { Button } from "@/components/ui/button";
// icons
import { CustomerOrderT } from "@/types/customer-order";
import { LuArrowDown01, LuArrowDown10, LuArrowDownUp } from "react-icons/lu";

const getSortingArrowIcon = (isSorted: false | SortDirection) => {
  return isSorted ? (
    isSorted == "asc" ? (
      <LuArrowDown01 />
    ) : (
      <LuArrowDown10 />
    )
  ) : (
    <LuArrowDownUp />
  );
};

const sortHandler = (
  isSorted: false | SortDirection,
  column: Column<CustomerOrderT, unknown>
) => {
  if (!isSorted) column.toggleSorting(false);
  else if (isSorted == "asc") column.toggleSorting(true);
  else column.clearSorting();
};

const SortButton = ({
  column,
  children,
}: {
  column: Column<CustomerOrderT, unknown>;
  children: React.ReactNode;
}) => {
  return (
    <Button
      variant={"ghost"}
      onClick={() => sortHandler(column.getIsSorted(), column)}
      className="text-center hover:text-primary hover:bg-primary/10"
    >
      {children}
      {getSortingArrowIcon(column.getIsSorted())}
    </Button>
  );
};

export const columns: ColumnDef<CustomerOrderT>[] = [
  {
    accessorKey: "orderId",
    header: "訂單編號",
    cell: ({ row }) => (
      <div className="lowercase pl-1">{row.getValue("orderId")}</div>
    ),
  },
  {
    accessorKey: "customerId",
    header: "顧客編號",
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("customerId")}</div>
    ),
  },
  {
    accessorKey: "createAt",
    header: ({ column }) => (
      <div className="flex justify-center">
        <SortButton column={column}>
          <span className="pr-2">下單時間</span>
        </SortButton>
      </div>
    ),
    cell: ({ row }) => (
      <div className="lowercase text-center">{row.getValue("createAt")}</div>
    ),
  },
  {
    accessorKey: "totalPrice",
    header: ({ column }) => (
      <div className="flex justify-center">
        <SortButton column={column}>
          <span className="pr-2">訂單金額</span>
        </SortButton>
      </div>
    ),
    cell: ({ row }) => (
      <div className="lowercase text-center">{row.getValue("totalPrice")}</div>
    ),
  },
  {
    accessorKey: "products",
    header: ({ column }) => (
      <div className="flex justify-end">
        <SortButton column={column}>
          <span className="pr-2">購買產品</span>
        </SortButton>
      </div>
    ),
    cell: ({ row }) => (
      <div className="lowercase text-right">{row.getValue("products")}</div>
    ),
  },
];
