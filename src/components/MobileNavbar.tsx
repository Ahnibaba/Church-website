"use client"

import Link from "next/link"
import { Logo } from "./Logo"
import React, { useState } from "react"
import { IoMdClose } from "react-icons/io"
import { useRouter } from "next/navigation"

type MobileNavProps = {
    navDrawerOpen: boolean;
    setNavDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>
}

type AccordionState = {
    [key: number]: boolean
}


const sidebarData = [
    {
        title: "Home",
        content: []
    },
    {
        title: "About Us",
        content: []
    },
    {
        title: "Services",
        content: []
    },
    {
        title: "Next Events",
        content: []
    },
    {
        title: "Sunday School",
        content: []
    },
    {
        title: "Ministries",
        content: ["Men Ministry", "Women Ministry", "Youth Ministry", "Teens Ministry", "Children Ministry"]
    },

]

export const MobileNavbar = ({ navDrawerOpen, setNavDrawerOpen }: MobileNavProps) => {
    const [accordionOpen, setAccordionOpen] = useState<AccordionState>({
        0: false,
        1: false,
        2: false,
        3: false,
        4: false
    })

    const toggleAccordion = (index: number) => {
        setAccordionOpen((prev) => ({
            ...prev, [index]: !prev[index]
        }))
    }
    const toggleNavDrawer = () => {
        setNavDrawerOpen((prev) => (!prev))
    }

    const router = useRouter()

    type HandleRouteProps = {
      content: { title: string };
      item: string
    }

    const handleRoute = ({content, item}: HandleRouteProps) => {
       router.push(`/${content.title.toLocaleLowerCase()}/${item.toLocaleLowerCase().replace(" ", "-")}`)
    }

    return (

        <div className={`fixed overflow-y-auto min-[900px]:hidden top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform
            transition-transform duration-300 z-57 ${navDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}>

            <div className="flex justify-between mb-5">
                <Logo />
                <button onClick={toggleNavDrawer} className="m-3">
                    <IoMdClose className="size-6 text-gray-600" />
                </button>
            </div>
            <div className="p-4">
                <nav className="flex flex-col gap-1 ml-7 items-center justify-center">
                    {sidebarData.map((content, index) => (
                        <div
                            key={index}
                            className="justify-between items-center p-5 hover:bg-[#D3CCBA]/20 w-full"
                            onClick={() => toggleAccordion(index)}
                        >
                            <button className="flex items-center justify-between w-full cursor-pointer">
                                <span className="flex items-center justify-end text-gray-700 text-sm font-medium uppercase whitespace-nowrap">
                                    {content.title === "Ministries" ? content.title : content.title === "Home" ? <Link onClick={toggleNavDrawer} href="/">{content.title}</Link> :  <Link onClick={toggleNavDrawer} href={`/${content.title.toLocaleLowerCase().replace(" ", "-")}`}>{content.title}</Link> }
                                </span>

                                {content.title === "Ministries" && (
                                    <>
                                        {accordionOpen[index] ? (
                                            <span className="text-3xl text-[#002444] font-light">
                                                -
                                            </span>

                                        ) : (
                                            <span className="text-3xl text-[#002444] font-light">
                                                +
                                            </span>
                                        )}
                                    </>
                                )}
                            </button>

                            <div
                              className={`grid overflow-hidden transition-all duration-500 ease-in-out text-slate-600 text-sm
                                ${accordionOpen[index] ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                            >
                              <div className="overflow-hidden flex flex-col gap-[5px]">
                                {content.content.map((item, index) => (
                                  <div key={index} className="space-y-4 p-2 hover:bg-[#D3CCBA]/40">
                                     <div key={index} onClick={() => handleRoute({ content, item })} className="cursor-pointer">
                                        {item}
                                     </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                        </div>
                    ))}



                </nav>
                <Link href="/contact-us" className="p-5 my-2 flex items-center justify-center bg-[#d63037] hover:bg-red-500 w-full  text-white text-sm font-medium uppercase whitespace-nowrap">
                    Contact-us
                </Link>
            </div>
        </div>
    )
}