"use client"

// types
import { FactoryOrder } from "@/types/factory-order";
import { Factory } from "@/types/factory";

import React, { useEffect, useState } from "react";
import { FactoryDetail } from "./factory-detail";
import { OrderSearch } from "./order-search";
import { getFactory } from "@/actions/factory";
import { getFactoryOrders } from "@/actions/factory-order";


export const FactoryOrderStatus = () => {      
  const [factory, setData] = useState<Factory[]>([]);
  const [orders, setOrders] = useState<FactoryOrder[]>([]);
  const [searchParams, setSearchParams] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const factoryData = await getFactory();
        setData(factoryData);

        const factoryOrderData = await getFactoryOrders(); 
        setOrders(factoryOrderData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  
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
          <div className="w-full h-full p-7 flex flex-wrap gap-6">
            {factory.map((factory) => {
              const factoryOrders = orders.filter((o) =>
                  factory.schedule.some((schedule) => schedule.orderId === o.orderId)
              );
              return (
                <FactoryDetail 
                  key={factory.id} 
                  factory={factory} 
                  order={factoryOrders} 
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