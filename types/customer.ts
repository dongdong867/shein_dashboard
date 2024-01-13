import { z } from "zod";

export const Customer = z.object({
  age: z.number(),
  createAt: z.coerce.date(),
  gender: z.string(),
  id: z.string(),
  isMember: z.boolean(),
  location: z.string(),
  mail: z.string(),
  name: z.string(),
  phone: z.string(),
  ageRange: z.string(),
});

export type Customer = z.infer<typeof Customer>;
