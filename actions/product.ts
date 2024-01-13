"use server";

// utils
import { adminFirestore } from "@/lib/firestore";
import { cache } from "react";

// type
import { Product } from "@/types/product";

export const revalidate = 60
export const getProducts = cache(async (): Promise<Product[]> => {
  const docs = await adminFirestore.collection("product").get();

  if (docs.size < 0) throw new Error("error on fetching factory orders.");

  const products = [] as Product[];
  docs.forEach((doc) => {
    const data = doc.data();
    products.push(
      Product.parse({
        id: data.id,
        name: data.name,
        periodCount: data.periodCount,
        price: data.price,
        type: data.type,
        updateAt: new Date(data.updateAt * 1000),
      })
    );
  });

  return products;
});
