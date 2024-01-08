import { z } from "zod";

export const CustomerOrderT = z.object({
    orderId: z.string(),
    customerId: z.string(),
    createAt: z.string(),
    totalPrice: z.number(),
    products: z.array(
        z.object({
            amount: z.number(),
            id: z.string(),
            price: z.number(),
        })
    ),
})

export type CustomerOrderT = z.infer<typeof CustomerOrderT>