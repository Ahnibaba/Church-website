"use client"

import Link from "next/link"
import { Logo } from "@/components/Logo"
import { useState } from "react"
import { RxHamburgerMenu } from "react-icons/rx"
import { IoMdClose } from "react-icons/io"
import { usePathname } from "next/navigation"

export const Navbar = () => {
    const [navDrawerOpen, setNavDrawerOpen] = useState<boolean>(false)

    const pathname = usePathname()
    console.log(pathname);
    

    const toggleNavDrawer = () => {
        setNavDrawerOpen((prev) => (!prev))
    }
    return (
        <>
            <nav className={`md:mr-[15px] flex justify-between items-center fixed z-99 w-full bg-white pr-2 ${pathname === "/" && "mb-12"}`}>
                <div>
                    <Link href="/">
                        <Logo />
                    </Link>
                </div>

                <div className={`font-roboto flex max-[900px]:hidden space-x-4 lg:space-x-6`}>
                    <Link href="/" className="text-gray-700 hover:text-black text-sm font-medium uppercase whitespace-nowrap">
                        Home
                    </Link>
                    <Link href="/about-us" className="text-gray-700 hover:text-black text-sm font-medium uppercase whitespace-nowrap">
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
                    <Link href="/next-events" className="text-gray-700 hover:text-black text-sm font-medium uppercase whitespace-nowrap">
                        Next Events
                    </Link>
                    
                </div>


                <button onClick={toggleNavDrawer} className="hidden max-[900px]:block mr-5">
                    <RxHamburgerMenu className="size-6 text-gray-700" />
                </button>
            </nav>

            {/* Mobile Navigation */}
            <div className={`fixed min-[900px]:hidden top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform
            transition-transform duration-300 z-50 ${navDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}>

                <div className="flex justify-between mb-5">
                      <Logo />
                    <button onClick={toggleNavDrawer} className="m-3">
                        <IoMdClose className="size-6 text-gray-600" />
                    </button>
                </div>
                <div className="p-4">
                    <nav className="flex flex-col space-y-4 ml-7" onClick={toggleNavDrawer}>
                        <Link href="/" className="text-gray-700 hover:text-black text-sm font-medium uppercase whitespace-nowrap">
                            Home
                        </Link>
                        <hr className="w-full text-gray-400" />
                        <Link href="/about-us" className="text-gray-700 hover:text-black text-sm font-medium uppercase whitespace-nowrap">
                            About us
                        </Link>
                        <hr className="w-full text-gray-400" />
                        <Link href="services" className="text-gray-700 hover:text-black text-sm font-medium uppercase whitespace-nowrap">
                            Services
                        </Link>
                        <hr className="w-full text-gray-400" />
                        <Link href="services" className="text-gray-700 hover:text-black text-sm font-medium uppercase whitespace-nowrap">
                            Sunday School
                        </Link>
                        <hr className="w-full text-gray-400" />
                        <Link href="services" className="text-gray-700 hover:text-black text-sm font-medium uppercase whitespace-nowrap">
                            Youth Ministry
                        </Link>
                        <hr className="w-full text-gray-400" />
                        <Link href="/donations" className="text-gray-700 hover:text-black text-sm font-medium uppercase whitespace-nowrap">
                            Branch
                        </Link>
                        <hr className="w-full text-gray-400" />
                        <Link href="/next-events" className="text-gray-700 hover:text-black text-sm font-medium uppercase whitespace-nowrap">
                            Next Events
                        </Link>
                        <hr className="w-full text-gray-400" />
                        <Link href="/donations" className="text-gray-700 hover:text-black text-sm font-medium uppercase whitespace-nowrap">
                            Contact-us
                        </Link>
                        <hr className="w-full text-gray-400" />
                    </nav>
                </div>
            </div>
        </>
    )
}