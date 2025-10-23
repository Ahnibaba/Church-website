"use client"
import { Ref, useEffect } from "react";
import Link from "next/link";

export interface navs {
  "Home": boolean;
  "About Us": boolean;
  "Services": boolean;
  "Sunday School": boolean;
  "Next Events": boolean;
  "Ministries": boolean;
}

type navSectionProps = {
  navs: navs;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>
  navSectionMenu?: Ref<HTMLDivElement>
}

const hoverData = [
  {
    title: "HOME",
    content: []
  },
  {
    title: "ABOUT US",
    content: []
  },
  {
    title: "SERVICES",
    content: []
  },
  {
    title: "NEXT EVENTS",
    content: []
  },
  {
    title: "SUNDAY SCHOOL",
    content: []
  },
  {
    title: "MINISTRIES",
    content: ["Men Ministry", "Women Ministry", "Youth Ministry", "Teens-Children Ministry"]
  },
]

export const NavSection = ({ navs, show, setShow, navSectionMenu }: navSectionProps) => {
    const activeIndex = Object.keys(navs).findIndex(key => navs[key as keyof typeof navs] === true)
    const isActive = activeIndex !== -1
    const hasContent = isActive && hoverData[activeIndex]?.content?.length > 0

    useEffect(() => {
      console.log(navs);
    }, [navs])
    
    const handleMouseEnter = () => {
      if (hasContent) {
        setShow(true)
      }
    }

    const handleMouseLeave = () => {
      setShow(false)
    }

    if (!hasContent) {
      return null
    }

    return (
      <section
        className={`fixed top-22 bg-white border-solid border-gray-500
        items-center justify-center z-99 gap-4 cursor-pointer ${show ? "min-[900px]:flex": "min-[900px]-hidden"}
        ${activeIndex == 1 ? "right-105" : activeIndex == 2 ? "right-95" : activeIndex == 3 ? "right-65" :  activeIndex == 4 ? "right-25" : activeIndex == 5 ? "right-5" : "right-120"} hidden`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          
          ref={navSectionMenu}
        >
          {hoverData[activeIndex].content.map((item, index) => (
            <div key={index} className="flex items-center justify-center hover:bg-[#F8F8F9] py-1 px-2">
              <div className="flex flex-row max-w-[300px] items-center justify-between gap-[10px] py-[20px]">
                <Link className="text-gray-700 hover:text-gray-800 text-sm font-medium uppercase whitespace-nowrap" href={`/ministries/${item.toLocaleLowerCase().replace(" ", "-")}`}>
                   {item}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
}