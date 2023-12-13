// components
import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
import { MdFactory } from "react-icons/md"
import { FaBox, FaChartArea, FaClipboardList } from "react-icons/fa"
// images
import SheinLogo from "/public/shein-logo.png"

const Navbar = () => {
	return (
		<div className="sticky top-0 h-screen">
			<div className="h-full pb-8">
				<div className="w-full h-full p-2.5 flex flex-col place-items-center bg-neutral-500/90 rounded-[32px]">
					{/* Logo */}
					<div className="h-max flex justify-center place-items-center mx-auto pt-6 space-x-2">
						<Image src={SheinLogo} alt="" className="w-10 h-10 aspect-square" />
						<div className="text-white text-3xl xl:text-4xl font-bold max-lg:hidden">SHEIN</div>
					</div>
					<div className="h-16" />

					{/* Link to Storage Management System */}
					<div className="flex flex-col space-y-3 text-white">
						<Link href={"/storage"}>
							<Button variant={"ghost"} asChild className="h-max flex justify-between rounded-2xl">
								<div>
									<div className="flex place-items-center space-x-3 max-lg:hidden">
										<FaBox size={20} />
										<div className="text-lg xl:text-xl">庫存管理系統</div>
									</div>
									<div className="lg:hidden">
										<FaBox size={30} />
									</div>
								</div>
							</Button>
						</Link>

						{/* Link to Output Management System */}
						<Link href={"/"}>
							<Button variant={"ghost"} asChild className="h-max flex justify-between rounded-2xl">
								<div>
									<div className="w-full flex justify-between place-items-center space-x-3 max-lg:hidden">
										<FaChartArea size={20} />
										<div className="text-lg xl:text-xl">生產量管理</div>
									</div>
									<div className="lg:hidden">
										<FaChartArea size={30} />
									</div>
								</div>
							</Button>
						</Link>

						{/* Link to Order Management System */}
						<Link href={"/"}>
							<Button variant={"ghost"} asChild className="h-max flex justify-between rounded-2xl">
								<div>
									<div className="flex place-items-center space-x-3 max-lg:hidden">
										<FaClipboardList size={20} />
										<div className="text-lg xl:text-xl">訂單管理系統</div>
									</div>
									<div className="lg:hidden">
										<FaClipboardList size={30} />
									</div>
								</div>
							</Button>
						</Link>

						{/* Link to Factor Processing System */}
						<Link href={"/"}>
							<Button variant={"ghost"} asChild className="h-max flex justify-between rounded-2xl">
								<div>
									<div className="flex place-items-center space-x-3 max-lg:hidden">
										<MdFactory size={20} />
										<div className="text-lg xl:text-xl">工廠排程系統</div>
									</div>
									<div className="lg:hidden">
										<MdFactory size={30} />
									</div>
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
