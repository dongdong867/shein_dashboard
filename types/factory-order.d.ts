type FactoryOrder = {
  orderId: string,
  factoryId: string,
  productId: string
  amount: number
  percentage: number,
  status: "inline" | "processing" | "shipping",
  orderDate: string,
}