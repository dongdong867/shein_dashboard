import { adminFirestore } from "@/lib/firestore"
import { FactoryOrder } from "@/types/factory-order"

export const getFactoryOrders = async (): Promise<FactoryOrder[]> => {
	const docs = await adminFirestore.collection("factoryOrder").get()

	if (docs.size < 0) throw new Error("error on fetching factory orders.")

	const factoryOrders = [] as FactoryOrder[]
	docs.forEach((doc) => {
		const data = doc.data()
		console.log(data)
		factoryOrders.push(
			FactoryOrder.parse({
				orderId: data.id,
				factoryId: data.factoryId,
				productId: data.productId,
				amount: data.amount,
				schedulePercentage: data.schedulePercentage,
				status: data.status,
				createAt: new Date(data.createAt * 1000)
			})
		)
	})

	return factoryOrders
}