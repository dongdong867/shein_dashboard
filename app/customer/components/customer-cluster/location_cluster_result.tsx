import LocationClusterModel from "./location_cluster_model"

//fake data
const femaleClothe = [
	{
	  name: '上衣',
      "北部": 240,
	  "中部": 210,
	  "南部": 203,
	  "東部": 187,
	},
	{
	  name: '褲子',
      "北部": 321,
	  "中部": 283,
	  "南部": 274,
	  "東部": 245,
	},
	{
	  name: '裙子',
      "北部": 453,
	  "中部": 357,
	  "南部": 316,
	  "東部": 332,
	},
	{
	  name: '外套',
      "北部": 173,
	  "中部": 278,
	  "南部": 150,
	  "東部": 132,
	},
	{
	  name: '運動裝',
      "北部": 303,
	  "中部": 257,
	  "南部": 286,
	  "東部": 218,
	},
	{
	  name: '毛衣',
      "北部": 154,
	  "中部": 239,
	  "南部": 181,
	  "東部": 222,
	},
]

const maleClothe = [
	{
	  name: '襯衫',
	  "北部": 303,
	  "中部": 257,
	  "南部": 286,
	  "東部": 218,
	},
	{
	  name: '長褲',
      "北部": 432,
	  "中部": 138,
	  "南部": 229,
	  "東部": 192,
	},
	{
	  name: '短褲',
      "北部": 150,
	  "中部": 201,
	  "南部": 438,
	  "東部": 192,
	},
	{
	  name: '外套',
      "北部": 408,
	  "中部": 258,
	  "南部": 120,
	  "東部": 278,
	},
	{
	  name: '運動裝',
      "北部": 157,
	  "中部": 199,
	  "南部": 135,
	  "東部": 92,
	},
	{
	  name: '毛衣',
      "北部": 425,
	  "中部": 239,
	  "南部": 124,
	  "東部": 387,
	},
]

const shoes = [
	{
	  name: '運動鞋',
      "北部": 154,
	  "中部": 239,
	  "南部": 181,
	  "東部": 222,
	},
	{
	  name: '休閒鞋',
      "北部": 408,
	  "中部": 258,
	  "南部": 120,
	  "東部": 278,
	},
	{
	  name: '高跟鞋',
	  "北部": 150,
	  "中部": 201,
	  "南部": 438,
	  "東部": 192,
	},
	{
	  name: '涼鞋',
	  "北部": 157,
	  "中部": 199,
	  "南部": 335,
	  "東部": 92,
	},
	{
	  name: '靴子',
	  "北部": 454,
	  "中部": 239,
	  "南部": 181,
	  "東部": 222,
	},
]

const accessories = [
	{
	  name: '手袋',
      "北部": 173,
	  "中部": 278,
	  "南部": 150,
	  "東部": 132,
	},
	{
	  name: '飾品',
      "北部": 408,
	  "中部": 258,
	  "南部": 120,
	  "東部": 278,
	},
	{
	  name: '帽子',
      "北部": 157,
	  "中部": 199,
	  "南部": 135,
	  "東部": 142,
	},
	{
	  name: '眼鏡',
	  "北部": 173,
	  "中部": 278,
	  "南部": 150,
	  "東部": 132,
	},
	{
	  name: '襪子',
      "北部": 373,
	  "中部": 278,
	  "南部": 102,
	  "東部": 157,
	},
]

const makeup = [
	{
	  name: '化妝品',
      "北部": 454,
	  "中部": 239,
	  "南部": 181,
	  "東部": 222,
	},
	{
	  name: '臉部保養',
      "北部": 157,
	  "中部": 199,
	  "南部": 335,
	  "東部": 92,
	},
	{
	  name: '身體保養',
      "北部": 454,
	  "中部": 239,
	  "南部": 181,
	  "東部": 222,
	},
]

const other = [
	{
	  name: '睡衣',
      "北部": 150,
	  "中部": 201,
	  "南部": 438,
	  "東部": 192,
	},
	{
	  name: '家居服',
	  "北部": 454,
	  "中部": 239,
	  "南部": 181,
	  "東部": 222,
	},
	{
	  name: '泳衣',
      "北部": 240,
	  "中部": 210,
	  "南部": 203,
	  "東部": 187,
	},
]

export const LocationClusterResult = () => {
    return (
    <>
        <div className="w-full flex justify-between place-items-center">
			<LocationClusterModel data={femaleClothe} title={"女裝分析"} />
			<LocationClusterModel data={maleClothe} title={"男裝"} />
            <LocationClusterModel data={shoes} title={"鞋子"} />
		</div>
        <div className="w-full flex justify-between place-items-center">
            <LocationClusterModel data={accessories} title={"配飾"} />
            <LocationClusterModel data={makeup} title={"美妝"} />
            <LocationClusterModel data={other} title={"其他"} />
        </div>
    </>
    )
}