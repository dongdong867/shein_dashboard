import { OrderStatusModel } from "./order-status-model";
import OrderStatusReloadButton from "../reload-button";
import { Factory } from "@/types/factory";
import { FactoryOrder } from "@/types/factory-order";
import React from "react";

type FactoryNameProps = {
  factories: Factory[];
  orders: FactoryOrder[];
};

export const OrderStatus = ({ factories, orders }: FactoryNameProps) => {
  const calculatePercentage = (factoryId: string) => {
    const correspondingOrder = orders.find(
      (order) => order.factoryId === factoryId
    );

    return correspondingOrder ? correspondingOrder.schedulePercentage : 0;
  };

  return (
    <div className="w-full h-max flex flex-col justify-start place-items-start rounded-[32px] bg-base/90 overflow-y-scroll p-7">
      <div className="w-full flex justify-between place-items-center mb-˝">
        <div className="-space-y-1 font-bold">
          <div className="text-2xl">即時工廠忙碌程度概況</div>
          <div className="text-sm">資料時間: {new Date().toLocaleString()}</div>
        </div>
        <OrderStatusReloadButton />
      </div>
      <div className="w-full h-full flex justify-start place-items-center space-x-10 overflow-y-scroll pl-7">
        {factories.map((factory, index) => (
          <OrderStatusModel
            key={index}
            percentage={calculatePercentage(factory.id)}
            name={factory.name}
          />
        ))}
      </div>
    </div>
  );
};
