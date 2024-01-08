import React from "react";
import OrderStatusReloadButton from "../../reload-button";
import OrderButton from "../../order-button";

interface OrderPendingProps {
  // You can pass the actual order data as props or generate it here
}

export const OrderPending: React.FC<OrderPendingProps> = () => {
  // Mock data for orders awaiting to be given to the factory
  const mockOrders = [
    {
      訂單編號: "Cy9f8NJFqN1SA5V7lrVS",
      orderDate: "2023-12-19 18:59PM",
      orderItem: "白色上衣",
      amount: 2000,
    },
    {
      訂單編號: "Cy9f8NJFqN1SA5V7lrVS",
      orderDate: "2023-01-02 03:26AM",
      orderItem: "黑色西裝外套",
      amount: 15000,
    },
    {
      訂單編號: "R9OodolERL5itWO6mHpv",
      orderDate: "2023-01-03 23:54PM",
      orderItem: "紅色短褲",
      amount: 2500,
    },
  ];

  return (
    <div className="w-full h-max min-h-[500px] flex flex-col justify-start place-items-start rounded-[32px] bg-base/90 overflow-y-scroll">
      <div className="w-full flex justify-between place-items-center px-7 pt-7">
        <div className="-space-y-1 font-bold mb-4">
          <div className="text-2xl">等待分配的訂單</div>
          <div className="text-sm">資料時間: {new Date().toLocaleString()}</div>
        </div>
        <OrderStatusReloadButton />
      </div>
      <div className="w-full h-full min-h-[200px] flex justify-start place-items-center space-x-10 overflow-y-scroll pl-7">
        {mockOrders.map((order, index) => (
          <div key={index} className="border p-4 rounded-md mb-4 bg-gray-200">
            <div className="font-bold mb-2">訂單編號: {order.訂單編號}</div>
            <div>訂單日期: {order.orderDate}</div>
            <div>商品名稱: {order.orderItem}</div>
            <div>商品數量(件): {order.amount}</div>
            <OrderButton></OrderButton>
          </div>
        ))}
      </div>
    </div>
  );
};
