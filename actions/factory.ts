// utils
import { adminFirestore } from "@/lib/firestore";
// type
import { Factory } from "@/types/factory";

export const revalidate = 60
export const getFactory = async (): Promise<Factory[]> => {
  const docs = await adminFirestore.collection("factory").get();

  if (docs.size < 0) throw new Error("error on fetching factory.");

  const factory = [] as Factory[];
  docs.forEach((doc) => {
    const data = doc.data();
    factory.push(
      Factory.parse({
        id: data.id,
        name: data.name,
        phone: data.phone,
        address: data.address,
        ability: data.ability,
        status: data.status,
        schedule: data.schedule,
      })
    );
  });

  return factory;
};
