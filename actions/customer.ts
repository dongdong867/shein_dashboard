"use server"

// utils
import { adminFirestore } from "@/lib/firestore";
import { cache } from "react";

// type
import { Customer } from "@/types/customer";

export const getCustomers = cache(async (): Promise<Customer[]> => {
	const docs = await adminFirestore.collection("customer").get()

	if (docs.size < 0) throw new Error("error on fetching factory orders.")

	const customers = [] as Customer[]
	docs.forEach((doc) => {
		const data = doc.data();
        const ageRange = calculateAgeRange(data.age);
		customers.push(
			Customer.parse({
                age: data.age,
                createAt: new Date(data.createAt * 1000),
                gender: data.gender,
                id: data.id,
                isMember: data.isMember,
                location: data.location,
                mail: data.mail,
                name: data.name,
                phone: data.phone,
                ageRange: ageRange,
			})
		)
	})

	return customers
})

const calculateAgeRange = (age: number): string => {
    if (age < 20) {
        return "20歲以下";
    } else if (age >= 20 && age <= 30) {
        return "20-30歲";
    } else if (age >= 31 && age <= 45) {
        return "31-45歲";
    } else if (age >= 46 && age <= 60) {
        return "46-60歲";
    } else {
        return "60歲以上";
    }
};