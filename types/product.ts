import { z } from 'zod';

export const Product = z.object({
    id: z.string(),
    name: z.string(),
    periodCount: z.number(),
    price: z.number(),
    type: z.array(z.string(),),
    updateAt: z.coerce.date(),
})

export type Product = z.infer<typeof Product>