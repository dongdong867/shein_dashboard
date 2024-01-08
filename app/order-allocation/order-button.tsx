"use client"

import { Button } from "@/components/ui/button";


type Props = {
  onClick?: () => void;
};

const OrderButton = ({ onClick }: Props) => {
  return (
    <Button
      variant={"outline"}
      onClick={onClick}
      className="mt-1 px-2 py-1 rounded transition-all"
    >
      分配訂單
    </Button>
  );
};

export default OrderButton;
