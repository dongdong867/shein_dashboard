"use client"

import { Customer } from "@/types/customer";
import { CustomerOrderT } from "@/types/customer-order";
import { Product } from "@/types/product";
import { BarDatum } from "@nivo/bar";
import { BarChart } from "./age_cluster_result";
import { BarChartLocation } from "./location_cluster_result";
import { Rfm } from "./rfm";

const computeAge = ({ data, p, customers, type }: { data: CustomerOrderT[]; p: Product[]; customers: Customer[]; type: string[] }) => {
    const productCountMap: Record<string, Record<string, number>> = {};

    p.forEach((pp) => {
		if(pp.type[0] == type[0]){
			productCountMap[pp.id] = {};
        	customers.forEach((customer) => {
            	productCountMap[pp.id][customer.ageRange] = 0;
        	});
		}
    });

    // 算購買數量
    data.forEach((order) => {
		order.products.forEach((product) => {
	
			if (product.id in productCountMap && p.find((pp) => pp.id === product.id)?.type[0] === type[0]) {
				const customer = customers.find((c) => c.id === order.customerId);
	
				if (customer) {
					productCountMap[product.id][customer.ageRange] += product.amount;
				}
			}
		});
	});

    // 把資料換成 BarDatum[]
	// {
    //     name: "上衣",
    //     "20歲以下": 286,
    //     "20-30歲": 176,
    //     "31-45歲": 132,
    //     "46-60歲": 220,
    //     "60歲以上": 62
    // },
    const result: BarDatum[] = p
    .filter((pp) => pp.type[0] === type[0])
    .map((pp) => {
        const item: Record<string, any> = {
            name: pp.name,
        };

        customers.forEach((customer) => {
            const ageRange = customer.ageRange;
            item[ageRange] = productCountMap[pp.id][ageRange];
        });

        return item as BarDatum;
    });

	return result;
	
};

const computeLocation = ({ data, p, customers, type }: { data: CustomerOrderT[]; p: Product[]; customers: Customer[]; type: string[] }) => {
    const productCountMap: Record<string, Record<string, number>> = {};

    p.forEach((pp) => {
		if(pp.type[0] == type[0]){
			productCountMap[pp.id] = {};
        	customers.forEach((customer) => {
            	productCountMap[pp.id][customer.location] = 0;
        	});
		}
    });

    // 算購買數量
    data.forEach((order) => {
		order.products.forEach((product) => {
	
			if (product.id in productCountMap && p.find((pp) => pp.id === product.id)?.type[0] === type[0]) {
				const customer = customers.find((c) => c.id === order.customerId);
	
				if (customer) {
					productCountMap[product.id][customer.location] += product.amount;
				}
			}
		});
	});

    // 把資料換成 BarDatum[]
	// {
    //     name: "外套",
    //     北部: 408,
    //     中部: 258,
    //     南部: 120,
    //     東部: 278
    // },
    const result: BarDatum[] = p
    .filter((pp) => pp.type[0] === type[0])
    .map((pp) => {
        const item: Record<string, any> = {
            name: pp.name,
        };

        customers.forEach((customer) => {
            const location = customer.location;
            item[location] = productCountMap[pp.id][location];
        });

        return item as BarDatum;
    });

	return result;
	
};

export const RfmAnalysis = () => {
	return (
		<div className="w-full h-max bg-base/90 p-7 rounded-[32px]">
			<div className="text-2xl font-bold pb-4">RFM 分群分析</div>
			<div className="w-full h-max bg-background rounded-3xl">
				<div className="h-[400px]">
					<div className="h-[400px]">
						<Rfm />
					</div>
				</div>
			</div>
		</div>
	)
}

export const AgeAnalysis = ({ data, p, customers }: { data: CustomerOrderT[]; p: Product[]; customers: Customer[] }) => {
	return (
		<div className="w-full h-max bg-base/90 p-7 rounded-[32px]">
			<div className="text-2xl font-bold pb-4">年齡分群分析</div>
			<div className="w-full grid grid-cols-2 xl:grid-cols-2 gap-4">
				<div className="h-max bg-background rounded-3xl p-7">
					<div className="text-xl font-bold pb-4">服裝</div>
					<div className="h-[300px]">
						<BarChart data={computeAge({data: data, p: p, customers: customers, type: ['服裝']})} />
					</div>
				</div>
				<div className="h-max bg-background rounded-3xl p-7">
					<div className="text-xl font-bold pb-4">鞋子</div>
					<div className="h-[300px]">
						<BarChart data={computeAge({data: data, p: p, customers: customers, type: ['鞋子']})} />
					</div>
				</div>
				<div className="h-max bg-background rounded-3xl p-7">
					<div className="text-xl font-bold pb-4">配飾</div>
					<div className="h-[300px]">
						<BarChart data={computeAge({data: data, p: p, customers: customers, type: ['配飾']})} />
					</div>
				</div>
				<div className="h-max bg-background rounded-3xl p-7">
					<div className="text-xl font-bold pb-4">其他</div>
					<div className="h-[300px]">
						<BarChart data={computeAge({data: data, p: p, customers: customers, type: ['其他']})} />
					</div>
				</div>
			</div>
		</div>
	)
}

export const LocationAnalysis = ({ data, p, customers }: { data: CustomerOrderT[]; p: Product[]; customers: Customer[] }) => {
	return (
		<div className="w-full h-max bg-base/90 p-7 rounded-[32px]">
			<div className="text-2xl font-bold pb-4">區域分群分析</div>
			<div className="w-full grid grid-cols-2 xl:grid-cols-2 gap-4">
				<div className="h-max bg-background rounded-3xl p-7">
					<div className="text-xl font-bold pb-4">服裝</div>
					<div className="h-[300px]">
						<BarChartLocation data={computeLocation({data: data, p: p, customers: customers, type: ['服裝']})} />
					</div>
				</div>
				<div className="h-max bg-background rounded-3xl p-7">
					<div className="text-xl font-bold pb-4">鞋子</div>
					<div className="h-[300px]">
						<BarChartLocation data={computeLocation({data: data, p: p, customers: customers, type: ['鞋子']})} />
					</div>
				</div>
				<div className="h-max bg-background rounded-3xl p-7">
					<div className="text-xl font-bold pb-4">配飾</div>
					<div className="h-[300px]">
						<BarChartLocation data={computeLocation({data: data, p: p, customers: customers, type: ['配飾']})} />
					</div>
				</div>
				<div className="h-max bg-background rounded-3xl p-7">
					<div className="text-xl font-bold pb-4">其他</div>
					<div className="h-[300px]">
						<BarChartLocation data={computeLocation({data: data, p: p, customers: customers, type: ['其他']})} />
					</div>
				</div>
			</div>
		</div>
	)
}
