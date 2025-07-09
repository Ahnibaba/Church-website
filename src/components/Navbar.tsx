import Link from "next/link"
import { Logo } from "@/components/Logo"

export const Navbar = () => {
    return (
        <>
            <div className="md:mr-[15px] flex justify-between items-center">
                <div>
                    <Link href="/">
                        {/* <h1 className={`text-5xl ${playFair.className}`}>RICAM</h1> */}
                        <Logo />
                    </Link>
                </div>

                <div className={`font-roboto flex max-[900px]:hidden space-x-4 lg:space-x-6`}>
                    <Link href="/" className="text-gray-700 hover:text-black text-sm font-medium uppercase whitespace-nowrap">
                        Home
                    </Link>
                    <Link href="/about" className="text-gray-700 hover:text-black text-sm font-medium uppercase whitespace-nowrap">
                        About us
                    </Link>
                    <Link href="services" className="text-gray-700 hover:text-black text-sm font-medium uppercase whitespace-nowrap">
                        Services
                    </Link>
                    <Link href="services" className="text-gray-700 hover:text-black text-sm font-medium uppercase whitespace-nowrap">
                        Sunday School
                    </Link>
                    <Link href="services" className="text-gray-700 hover:text-black text-sm font-medium uppercase whitespace-nowrap">
                        Youth Ministry
                    </Link>
                    <Link href="/donations" className="text-gray-700 hover:text-black text-sm font-medium uppercase whitespace-nowrap">
                        Donations
                    </Link>
                </div>


            </div>
        </>
    )
}