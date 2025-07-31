"use client"
import Link from "next/link"
import { nextEventData } from "./NextEventData"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { useEffect, useRef, useState } from "react"
import { getDayName, getMonthName } from "@/utils/GetDate"
import { dataProps } from "../HeroAnimation/HeroAnimation"




type MonthObj = {
    name: string
    abbrev: string
}

type EventObj = dataProps

export const NextEvent = ({ type }: { type: string }) => {

    const scrollRef = useRef<HTMLDivElement>(null)
    const [isDragging, setIsDragging] = useState<boolean>(false)
    const [startX, setStartX] = useState<number>(0)
    const [scrollLeft, setScrollLeft] = useState<number>(0)
    const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false)
    const [canScrollRight, setCanScrollRight] = useState<boolean>(true)



    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true)
        if (scrollRef.current) {
            setStartX(e.pageX - scrollRef.current.offsetLeft)
            setScrollLeft(scrollRef.current.scrollLeft ?? 0)
        }
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return
        if (scrollRef.current) {
            const x = e.pageX - scrollRef.current.offsetLeft
            const walk = x - startX
            scrollRef.current.scrollLeft = scrollLeft - walk
        }

    }

    const handleMouseUpOrLeave = () => {
        setIsDragging(false)
    }

    const scroll = (direction: string) => {
        const scrollAmount = direction === "left" ? -250 : 250
        scrollRef.current?.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }

    //Update Scroll Buttons
    const updateScrollButtons = () => {
        const container = scrollRef.current
        if (container) {
            const leftScroll = container.scrollLeft
            const rightScrollable = container.scrollWidth > (leftScroll + container.clientWidth) || leftScroll === 0 && container.scrollWidth === (leftScroll | + container.clientWidth)
            setCanScrollLeft(leftScroll > 0)
            setCanScrollRight(rightScrollable)
        }
    }





    // Date formatting helpers
    const getDate = (date: string): number => new Date(date).getDate()

    const getDay = (date: string): string => {
        const dayIndex = new Date(date).getDay()
        return getDayName(dayIndex)
    }

    const getMonth = (date: string): MonthObj => {
        const monthIndex = new Date(date).getMonth()
        return getMonthName(monthIndex)
    }

    const getTime = (dateString: string): string => {
        const date = new Date(dateString)
        const hours = date.getHours().toString().padStart(2, '0')
        const minutes = date.getMinutes().toString().padStart(2, '0')
        return `${hours}:${minutes}`
    }

    // Filter upcoming events (max 3)
    const eventsArray: dataProps[] = []
    let limit = 0

    for (let i = 0; i < nextEventData.length; i++) {
        const eventDate = nextEventData[i].date;
        const eventDateObj = eventDate ? new Date(eventDate) : null;

        if (!eventDateObj) continue;

        const currentDate = new Date();

        if ((eventDateObj > currentDate || eventDateObj.toDateString() === currentDate.toDateString()) && limit < 3) {
            eventsArray.push(nextEventData[i]);
            limit += 1;
        }
    }

    // Slide navigation
    const arrayLength = type === "Upcoming Events" ? eventsArray.length : nextEventData.length

    useEffect(() => {
        const container = scrollRef.current
        if (container) {
            container.addEventListener("scroll", updateScrollButtons)
            updateScrollButtons()

            return () => container.removeEventListener("scroll", updateScrollButtons)
        }
    }, [arrayLength])

    // Event card component
    const EventCard = ({ item, index }: { item: EventObj; index: number }) => {

        const handleCardClick = (e: React.MouseEvent) => {
            // Prevent navigation if we're dragging
            if (isDragging) {
                e.preventDefault();
                e.stopPropagation();
            }
            
        };

        return (
            <div
            key={index}
            onClick={(e) => handleCardClick(e)}
            className={`
        flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 cursor-pointer
        p-5 border border-gray-200 rounded-lg 
        ${type === "Upcoming Events" ? "bg-white" : "bg-[#D3CCBA]/20"} shadow-sm hover:shadow-md transition-shadow w-full
        ${index === eventsArray.length - 1 && eventsArray.length % 2 !== 0 && type === "Upcoming Events"
                    ? "sm:col-span-2 lg:col-span-1"
                    : ""
                }
      `}
        >
            {item.date && (
                <Link href={`/next-events/${item.id}`}>
                    <div className="flex flex-col items-center justify-center px-5 lg:px-10 py-0 mb-8 lg:mb-12">
                        <h1 className="font-light uppercase font-playFair text-4xl tracking-wider text-gray-700">
                            {getDate(item.date)}/{getMonth(item.date).abbrev}
                        </h1>
                        <div className="mt-6 lg:mt-12 flex flex-col items-center justify-center font-roboto text-gray-800 w-full">
                            <div className="flex flex-col items-center justify-center">
                                <p className="font-bold text-center line-clamp-2">
                                    {item.title}: {item.desc && item.desc.slice(0, 30)}...
                                </p>
                                <p className="text-sm mt-2 text-gray-600 whitespace-nowrap">
                                    {getDay(item.date)}, {getMonth(item.date).name} {getDate(item.date)} at {getTime(item.date)}
                                </p>
                            </div>

                        </div>
                    </div>
                </Link>
            )}
            <Link
                href={`/next-events/${item.id}`}
                className="flex items-center gap-1 uppercase tracking-tight text-xs text-[#d63037] hover:text-[#d63038b6] transition-colors"
            >
                More info
                <span>{">>"}</span>
            </Link>
        </div>
        )
    }

    return (
        <section className={`w-full ${type === "Upcoming Events" ? "bg-[#D3CCBA]/20" : "bg-white"} py-12`}>
            <div className="container mx-auto px-4">
                {/* Title */}
                <div className="text-center mb-10">
                    <h1 className="font-light uppercase font-playFair text-2xl md:text-3xl lg:text-4xl tracking-wider text-[#d63037]">
                        {type}
                    </h1>
                </div>

                {/* Desktop Grid View */}
                <div className="hidden min-[769px]:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {type === "Next Events" && (
                        nextEventData.map((item, index) => (
                            <EventCard key={index} item={item} index={index} />
                        ))
                    )}

                    {type === "Upcoming Events" && (
                        eventsArray.map((item, index) => (
                            <EventCard key={index} item={item} index={index} />
                        ))
                    )}
                </div>

                {/* Mobile Carousel */}
                <div className="container mx-auto text-center mb-10 relative">

                    {/* Scroll Button */}
                    <div className="min-[769px]:hidden absolute right-0 sm:bottom-[-28px] bottom-[-30px] z-46 flex space-x-2">
                        <button
                            onClick={() => scroll("left")}
                            disabled={!canScrollLeft}
                            className={`p-[2px] sm:p-[5px] rounded-full border-2 border-white ${canScrollLeft ? "bg-[#d63037] text-white " : "bg-red-100 text-white cursor-not-allowed"}`}
                        >
                            <IoIosArrowBack className="text-2xl" />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            disabled={!canScrollRight}
                            className={`p-[2px] sm:p-[5px] rounded-full border-2 border-white ${canScrollRight ? "bg-[#d63037] text-white" : "bg-red-100 text-white cursor-not-allowed"}`}
                        >
                            <IoIosArrowForward className="text-2xl" />
                        </button>
                    </div>
                </div>

                {/* Scrollable Content */}
                <div
                    ref={scrollRef}
                    className={`min-[769px]:hidden container mx-auto overflow-x-scroll flex space-x-6 relative py-7 my-12
                    ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
                    onPointerDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUpOrLeave}
                    onMouseLeave={handleMouseUpOrLeave}
                >
                    {type === "Next Events" && (
                        nextEventData.map((item, index) => (
                            <EventCard key={index} item={item} index={index} />
                        ))
                    )}

                    {type === "Upcoming Events" && (
                        eventsArray.map((item, index) => (
                            <EventCard key={index} item={item} index={index} />
                        ))
                    )}

                </div>
            </div>
        </section>
    )
}