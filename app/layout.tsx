import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import { Separator } from "@/components/ui/separator"

const outfit = Outfit({ subsets: ["latin"], variable: "--font-Outfit", display: "swap" })

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={`${outfit.variable}`}>
			<body className="w-full h-full">
				<div className="flex w-full h-full max-sm:hidden">
					<div className="w-[15%] grow ml-4">
						<Navbar />
					</div>
					<div className="w-full h-real grow m-4">{children}</div>
				</div>
				<div className="h-screen flex flex-col justify-center place-items-center space-y-4">
					<div className="flex place-items-center space-x-4 sm:hidden">
						<div className="text-2xl font-medium tracking-wide">418</div>
						<Separator orientation="vertical" className="h-10 bg-neutral-500" />
						<div className="tracking-wide">I'm a teapot.</div>
					</div>
					<div className="text-xs">Please use a tablet or laptop to view this page.</div>
				</div>
			</body>
		</html>
	)
}
