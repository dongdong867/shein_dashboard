"use client"

import React, { useState } from "react";
import { FactoryDetail } from "./factory-detail";
import { data } from "./factory-data";
import { order } from "./factory-order"
import { OrderSearch } from "./order-search";

export const FactoryOrderStatus = () => {      
  const [searchParams, setSearchParams] = useState({});
  const handleSearch = (params: any) => {
    setSearchParams(params);
  };
  
  return (
    <div className="w-full h-max space-y-4">
      <OrderSearch onSearch={handleSearch} />
      <div className="w-full h-max flex flex-col justify-start place-items-start rounded-[32px] bg-base/90 overflow-hidden">
      <div className="w-full flex justify-between place-items-center px-7 pt-7">
        <div className="w-full h-max -space-y-1 font-bold mb-4">
          <div className="text-2xl">工廠資訊及生產進度</div>
          <div className="w-full h-full p-7 flex flex-wrap gap-4">
            {data && data.map((factory) => {
              const orders = factory.schedule.map((schedule) => order.find((o) => o.orderId === schedule.orderId)).filter((o) => o !== undefined) as FactoryOrder[];
              return (
                <FactoryDetail 
                  key={factory.id} 
                  factory={factory} 
                  order={orders} 
                  searchParams={searchParams}
                />
              );
            })}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};