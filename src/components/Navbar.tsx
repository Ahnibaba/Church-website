"use client"

import Link from "next/link"
import { Logo } from "@/components/Logo"
import React, { useState } from "react"
import { RxHamburgerMenu } from "react-icons/rx"
import { navs, NavSection } from "./NavSection"
import { MobileNavbar } from "./MobileNavbar"

export const Navbar = () => {

    const [show, setShow] = useState<boolean>(false)
    const [navs, setNavs] = useState<navs>({
        "Home": false,
        "About Us": false,
        "Services": false,
        "Sunday School": false,
        "Next Events": false,
        "Ministries": false

    })
    const [navDrawerOpen, setNavDrawerOpen] = useState<boolean>(false)

    const toggleNavDrawer = () => {
        setNavDrawerOpen((prev) => (!prev))
    }

    const toggleNav = (e: React.MouseEvent<HTMLAnchorElement>) => {
        setShow(true)
        const target = e.target as HTMLAnchorElement
        console.log(target.innerText);

        setNavs({
            "Home": "HOME" === target.innerText,
            "About Us": "ABOUT US" === target.innerText,
            "Services": "SERVICES" === target.innerText,
            "Next Events": "NEXT EVENTS" === target.innerText,
            "Sunday School": "SUNDAY SCHOOL" === target.innerText,
            "Ministries": "MINISTRIES" === target.innerText
        })
    }


    return (
        <>
            <nav className={`md:mr-[15px] flex justify-between items-center fixed w-full bg-white pr-2 z-50 `}>
                <div>
                    <Link href="/">
                        <Logo />
                    </Link>
                </div>

                <div className={`font-roboto flex max-[900px]:hidden space-x-4 lg:space-x-6 items-center justify-center`}>
                    <Link href="/" onMouseEnter={(e) => toggleNav(e)} className="text-gray-700 hover:text-gray-800 text-sm font-medium uppercase whitespace-nowrap">
                        Home
                    </Link>
                    <Link href="/about-us" onMouseEnter={(e) => toggleNav(e)} className="text-gray-700 hover:text-gray-800 text-sm font-medium uppercase whitespace-nowrap">
                        About Us
                    </Link>
                    <Link href="/services" onMouseEnter={(e) => toggleNav(e)} className="text-gray-700 hover:text-gray-800 text-sm font-medium uppercase whitespace-nowrap">
                        Services
                    </Link>
                    <Link href="/next-events" onMouseEnter={(e) => toggleNav(e)} className="text-gray-700 hover:text-gray-800 text-sm font-medium uppercase whitespace-nowrap">
                        Next Events
                    </Link>
                    <Link href="/sunday-school" onMouseEnter={(e) => toggleNav(e)} className="text-gray-700 hover:text-gray-800 text-sm font-medium uppercase whitespace-nowrap">
                        Sunday School
                    </Link>
                    <Link href="/ministries" onMouseEnter={(e) => toggleNav(e)} className="text-gray-700 hover:text-gray-800 text-sm font-medium uppercase whitespace-nowrap">
                        Ministries
                    </Link>
                    <Link href="/contact-us" className="bg-[#d63037] p-[10px] text-white text-sm font-medium uppercase whitespace-nowrap">
                        Contact-us
                    </Link>

                </div>


                <button onClick={toggleNavDrawer} className="hidden max-[900px]:block mr-5">
                    <RxHamburgerMenu className="size-6 text-gray-700" />
                </button>
            </nav>
            <NavSection navs={navs} show={show} setShow={setShow} />


            <MobileNavbar navDrawerOpen={navDrawerOpen} setNavDrawerOpen={setNavDrawerOpen} />


        </>
    )
}