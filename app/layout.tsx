import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"

const outfit = Outfit({ subsets: ["latin"], variable: "--font-Outfit", display: "swap" })

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={`${outfit.variable}`}>
			<body className="flex w-full h-full">
				<div className="w-[15%] grow ml-4">
					<Navbar />
				</div>
				<div className="w-full h-real grow m-4">{children}</div>
			</body>
		</html>
	)
}
