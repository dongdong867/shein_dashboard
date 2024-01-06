"use client"
import { ResponsiveLine, Serie } from '@nivo/line';

const data: Serie[] = [
  {
    id: "上衣",
    data: [
      { x: "2022/Q1", y: 20516 },
      { x: "2022/Q2", y: 18972 },
      { x: "2022/Q3", y: 18919 },
      { x: "2022/Q4", y: 19004 },
      { x: "2023/Q1", y: 18898 },
      { x: "2023/Q2", y: 20857 },
      { x: "2023/Q3", y: 19616 },
      { x: "2023/Q4", y: 17064 },
    ]
  },
  {
    id: "褲子",
    data: [
      { x: "2022/Q1", y: 11829 },
      { x: "2022/Q2", y: 22006 },
      { x: "2022/Q3", y: 24772 },
      { x: "2022/Q4", y: 18000 },
      { x: "2023/Q1", y: 19387 },
      { x: "2023/Q2", y: 14268 },
      { x: "2023/Q3", y: 20408 },
      { x: "2023/Q4", y: 20189 },
    ]
  },
  {
    id: "裙子",
    data: [
      { x: "2022/Q1", y: 24479 },
      { x: "2022/Q2", y: 17436 },
      { x: "2022/Q3", y: 20564 },
      { x: "2022/Q4", y: 25000 },
      { x: "2023/Q1", y: 16553 },
      { x: "2023/Q2", y: 15426 },
      { x: "2023/Q3", y: 16760 },
      { x: "2023/Q4", y: 18538 },
    ]
  },
  {
    id: "外套",
    data: [
      { x: "2022/Q1", y: 10709 },
      { x: "2022/Q2", y: 8098 },
      { x: "2022/Q3", y: 10689 },
      { x: "2022/Q4", y: 12000 },
      { x: "2023/Q1", y: 12068 },
      { x: "2023/Q2", y: 10210 },
      { x: "2023/Q3", y: 10663 },
      { x: "2023/Q4", y: 18766 },
    ]
  },
  {
    id: "運動裝",
    data: [
      { x: "2022/Q1", y: 10075 },
      { x: "2022/Q2", y: 11276 },
      { x: "2022/Q3", y: 19868 },
      { x: "2022/Q4", y: 28000 },
      { x: "2023/Q1", y: 24800 },
      { x: "2023/Q2", y: 22668 },
      { x: "2023/Q3", y: 23345 },
      { x: "2023/Q4", y: 20305 },
    ]
  },
  {
    id: "毛衣",
    data: [
      { x: "2022/Q1", y: 25000 },
      { x: "2022/Q2", y: 12003 },
      { x: "2022/Q3", y: 12003 },
      { x: "2022/Q4", y: 25000 },
      { x: "2023/Q1", y: 25000 },
      { x: "2023/Q2", y: 12003 },
      { x: "2023/Q3", y: 12003 },
      { x: "2023/Q4", y: 25000 },
    ]
  }
]

const TrendChart = () => {
  return (
    <ResponsiveLine
      data={data}
      colors={{ scheme: "category10" }}
      margin={{ top: 40, right: 110, bottom: 50, left: 60 }}
      useMesh
      motionConfig={"gentle"}
      pointSize={8}
      legends={[
				{
					anchor: "bottom-right",
					direction: "column",
					justify: false,
					translateX: 100,
					translateY: 0,
					itemsSpacing: 0,
					itemDirection: "left-to-right",
					itemWidth: 80,
					itemHeight: 20,
					itemOpacity: 0.75,
					symbolSize: 12,
					symbolShape: "circle",
				}
			]}
    />
  )
}

export default TrendChart