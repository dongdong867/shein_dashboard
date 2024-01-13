// types
import { FactoryOrder } from "@/types/factory-order";
import { Factory } from "@/types/factory";
// utils
import { cn } from "@/lib/utils";
// icons
import {
  FaPhone,
  FaMapMarkerAlt,
  FaIdCard,
  FaClipboardList,
  FaCog,
  FaTruck,
} from "react-icons/fa";
// components
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";

type FactoryDetailProps = {
  factory: Factory;
  orders: FactoryOrder[];
};

const StatusIcons = ({
  status,
  percentage,
}: {
  status: "inline" | "processing" | "shipping";
  percentage: number;
}) => {
  return (
    <div className="w-full h-max flex justify-between place-items-center p-2">
      <FaClipboardList
        size={16}
        className={status == "inline" ? "text-blue-700/80" : "text-base-100/60"}
      />
      <Separator className="w-1/3 h-0.5" />
      <div
        className={cn(
          status == "processing" ? "text-blue-700/80" : "text-base-100/60",
          "flex place-items-center space-x-1"
        )}
      >
        <FaCog />
        {status == "processing" && <div>({percentage}%)</div>}
      </div>
      <Separator className="w-1/3 h-0.5" />
      <FaTruck
        className={
          status == "shipping" ? "text-blue-700/80" : "text-base-100/60"
        }
      />
    </div>
  );
};

export const FactoryDetail = ({ factory, orders }: FactoryDetailProps) => {
  const statusClassName =
    factory.status === "working" ? "bg-blue-400" : "bg-gray-400";

  const FactoryOrderStatus = () => {
    return (
      <>
        {factory.schedule.map((factoryOrder) => (
          <div key={factoryOrder.orderId}>
            {orders
              .filter((order) => order.orderId === factoryOrder.orderId)
              .map((order) => (
                <div key={order.orderId}>
                  <div>Order ID: {order.orderId}</div>
                  <StatusIcons
                    status={order.status}
                    percentage={order.schedulePercentage}
                  />
                  <Progress
                    value={order.schedulePercentage}
                    className="bg-base *:bg-background"
                  />
                </div>
              ))}
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="w-full min-w-[340px] h-full p-5 space-y-1 bg-white rounded-3xl">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">{factory.name}</div>
        <Badge
          variant={"outline"}
          className={`${statusClassName} text-white text-sm py-1`}
        >
          {factory.status}
        </Badge>
      </div>

      <div className="flex flex-col text-base-100/60 pt-2">
        <div className="flex place-items-center text-sm">
          <FaIdCard className="mr-1" />
          {factory.id}
        </div>
        <div className="flex place-items-center text-sm">
          <FaPhone className="mr-1" />
          {factory.phone}
        </div>
        <div className="flex place-items-center text-sm">
          <FaMapMarkerAlt className="mr-1" />
          {factory.address}
        </div>
      </div>

      <Separator className="h-0.5 mt-1" />

      {factory.status === "idle" ? (
        <div className="text-black text-center text-xl pt-2">目前無訂單</div>
      ) : (
        <div className="text-black">
          <FactoryOrderStatus />
        </div>
      )}
    </div>
  );
};
