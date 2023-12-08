// components
import Image from "next/image"
import { FaBox, FaChartArea, FaClipboardList } from "react-icons/fa"
import { MdFactory } from "react-icons/md"
// images
import SheinLogo from "/public/shein-logo.png"
import { Button } from "./ui/button"
import Link from "next/link"

const Navbar = () => {
	return (
		<div className="sticky top-0 h-screen">
			<div className="min-w-[230px] h-full py-4">
				<div className="w-full h-full p-2.5 bg-neutral-500/90 rounded-[32px]">
					{/* Logo */}
					<div className="h-max flex justify-center mx-auto pt-6 space-x-4">
						<Image src={SheinLogo} alt="" className="w-10 h-10 aspect-square" />
						<div className="text-white text-4xl font-bold">SHEIN</div>
					</div>
					<div className="h-16" />

					{/* Link to Storage Management System */}
					<div className="flex flex-col space-y-2 text-white">
						<Link href={"/"}>
							<Button variant={"ghost"} asChild className="h-max flex justify-between rounded-2xl">
								<div>
									<FaBox size={20} />
									<div className="py-1 text-xl">庫存管理系統</div>
								</div>
							</Button>
						</Link>

						{/* Link to Output Management System */}
						<Link href={"/"}>
							<Button variant={"ghost"} asChild className="h-max flex justify-between rounded-2xl">
								<div>
									<FaChartArea size={20} />
									<div className="py-1 text-xl">生產量管理</div>
								</div>
							</Button>
						</Link>

						{/* Link to Order Management System */}
						<Link href={"/"}>
							<Button variant={"ghost"} asChild className="h-max flex justify-between rounded-2xl">
								<div>
									<FaClipboardList size={20} />
									<div className="py-1 text-xl">訂單管理系統</div>
								</div>
							</Button>
						</Link>

						{/* Link to Factor Processing System */}
						<Link href={"/"}>
							<Button variant={"ghost"} asChild className="h-max flex justify-between rounded-2xl">
								<div>
									<MdFactory size={20} />
									<div className="py-1 text-xl">工廠排程系統</div>
								</div>
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
