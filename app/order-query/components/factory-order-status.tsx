"use client";

// types
import { FactoryOrder } from "@/types/factory-order";
import { Factory } from "@/types/factory";

import React, { useState } from "react";
import { FactoryDetail } from "./factory-detail";
import { OrderSearch } from "./order-search";

export const FactoryOrderStatus = ({
  factory,
  orders,
}: {
  factory: Factory[];
  orders: FactoryOrder[];
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [queryType, setQueryType] = useState("orderId");

  return (
    <div className="w-full h-max space-y-4">
      <div className="w-full h-max flex flex-col justify-start place-items-start rounded-[32px] bg-base/90 overflow-hidden">
        <div className="w-full flex justify-between place-items-center p-7">
          <div className="w-full h-max -space-y-1 font-bold mb-4">
            <div className="w-full h-max flex max-md:flex-col max-md:space-y-2 justify-between pb-7">
              <div className="text-2xl">工廠資訊及生產進度</div>
              <OrderSearch
                setSearchQuery={setSearchQuery}
                setQueryType={setQueryType}
              />
            </div>
            <div className="w-full h-full grid grid-cols-1 xl:grid-cols-2 place-items-center gap-7">
              {factory.map((factory) => {
                const factoryOrders = orders.filter((o) =>
                  factory.schedule.some(
                    (schedule) => schedule.orderId === o.orderId
                  )
                );
                if (searchQuery == "")
                  return (
                    <FactoryDetail
                      key={factory.id}
                      factory={factory}
                      orders={factoryOrders}
                    />
                  );

                if (
                  (queryType == "orderId" &&
                    factory.schedule.filter(
                      (order) => order.orderId == searchQuery
                    ).length > 0) ||
                  (queryType == "factoryName" && factory.name == searchQuery)
                ) {
                  return (
                    <FactoryDetail
                      key={factory.id}
                      factory={factory}
                      orders={factoryOrders}
                    />
                  );
                }

                return <></>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
