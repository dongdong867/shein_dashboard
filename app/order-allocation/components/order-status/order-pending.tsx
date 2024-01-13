// components
import { OrderButton } from "../../order-button";
// types
import { FactoryOrder } from "@/types/factory-order";
import { Factory } from "@/types/factory";

export const OrderPending = ({
  orders,
  factories,
}: {
  orders: FactoryOrder[];
  factories: Factory[];
}) => {
  return (
    <div className="w-full h-max flex flex-col justify-start place-items-start rounded-[32px] bg-base/90 p-7">
      <div className="w-full flex justify-between place-items-center">
        <div className="-space-y-1 font-bold mb-7">
          <div className="text-2xl">等待分配的訂單</div>
          <div className="text-sm">資料時間: {new Date().toLocaleString()}</div>
        </div>
      </div>
      <div className="w-full h-max grid grid-cols-2 xl:grid-cols-3 gap-4">
        {orders.map((order) => {
          if (order.factoryId == "") {
            return (
              <div
                key={order.orderId}
                className="border p-7 rounded-3xl bg-background"
              >
                <div className="font-bold mb-2">訂單編號: {order.orderId}</div>
                <div>訂單日期: {new Date(order.createAt).toLocaleString()}</div>
                <div>商品名稱: {order.productName}</div>
                <div className="mb-4">商品數量(件): {order.amount}</div>
                <OrderButton orderId={order.orderId} factories={factories} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
