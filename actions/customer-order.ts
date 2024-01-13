"use server";

// utils
import { adminFirestore } from "@/lib/firestore";
import { format } from "date-fns";

// type
import { CustomerOrderT } from "@/types/customer-order";

export const revalidate = 60
export const getCustomerOrders = async (): Promise<CustomerOrderT[]> => {
  const docs = await adminFirestore.collection("customerOrder").get();

  if (docs.size < 0) throw new Error("error on fetching factory orders.");

  const customerOrders = [] as CustomerOrderT[];
  docs.forEach((doc) => {
    const data = doc.data();
    customerOrders.push(
      CustomerOrderT.parse({
        orderId: data.id,
        customerId: data.customerId,
        createAt: format(data.createAt?.toDate(), "yyyy/M/d a h:mm:ss"),
        totalPrice: data.totalPrice,
        products: data.products,
      })
    );
  });

  return customerOrders;
};
