import { FactoryOrder } from "@/types/factory-order";


export const order: FactoryOrder[] = [
	{
		orderId: "laboris",
		factoryId: "incididunt",
		productId: "est",
		amount: 20000,
		schedulePercentage: 0,
		status: "inline",
		createAt: new Date()
	},
	{
		orderId: "fugiat",
		factoryId: "nisi",
		productId: "enim",
		amount: 10000,
		schedulePercentage: 20,
		status: "processing",
		createAt: new Date()
	},
	{
		orderId: "nulla",
		factoryId: "ex",
		productId: "veniam",
		amount: 50000,
		schedulePercentage: 70,
		status: "processing",
		createAt: new Date()
	},
	{
		orderId: "esse",
		factoryId: "ex",
		productId: "sint",
		amount: 80000,
		schedulePercentage: 100,
		status: "shipping",
		createAt: new Date()
	},
	{
		orderId: "minim",
		factoryId: "quis",
		productId: "laborum",
		amount: 70000,
		schedulePercentage: 40,
		status: "processing",
		createAt: new Date()
	}
]