type Factory = {
    id: string,
    name: string,
    phone: string
    address: string
    ability: number,
    status: "working" | "idle",
    schedule: {
        orderId: string;
        index: number;
    }[];
}