type FactoryOrder = {
  orderId: string,
  orderDate: string,
  status: "inline" | "processing" | "shipping",
  percentage: number
}