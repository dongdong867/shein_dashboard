// import { z } from "zod";

// export type CustomerOrder = z.object({
//     orderId: z.string(),
//     customerId: z.string(),
//     createdAt: z.coerce.date(),
//     price: z.number,
//     products: z.string[](),
// })

// export type CustomerOrderOrder = z.infer<typeof CustomerOrder>

type CustomerOrder = {
    orderId: string,
    customerId: string,
    createdAt: string,
    price: number,
    products: string,
}