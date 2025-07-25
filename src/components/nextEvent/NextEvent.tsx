"use client"
import Link from "next/link"
import { nextEventData } from "./NextEventData"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { useCallback, useState } from "react"
import { getDayName, getMonthName } from "@/utils/GetDate"
import { dataProps } from "../HeroAnimation/HeroAnimation"



type MonthObj = {
    name: string
    abbrev: string
}

type EventObj = dataProps

export const NextEvent = ({ type }: { type: string }) => {
    const [currentSlide, setCurrentSlide] = useState<number>(0)



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
    const nextSlide = useCallback(() => {
        setCurrentSlide(prev => (prev === arrayLength - 1 ? 0 : prev + 1))
    }, [arrayLength])

    const prevSlide = useCallback(() => {
        setCurrentSlide(prev => (prev === 0 ? arrayLength - 1 : prev - 1))
    }, [arrayLength])

    // Event card component
    const EventCard = ({ item, index }: { item: EventObj; index: number }) => (
        <div
            key={index}
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
                <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
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
                <div className="md:hidden relative">
                    <div className="relative h-96 overflow-hidden">
                        {type === "Next Events" && (
                            nextEventData.map((item, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                        }`}
                                >
                                    <EventCard item={item} index={index} />
                                </div>
                            ))
                        )}
                        {type === "Upcoming Events" && (
                            eventsArray.map((item, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                        }`}
                                >
                                    <EventCard item={item} index={index} />
                                </div>
                            ))
                        )}
                    </div>

                    {/* Navigation Arrows */}
                    {arrayLength > 1 && (
                        <>
                            <button
                                onClick={prevSlide}
                                className="absolute left-1 top-1/2 -translate-y-1/2 rounded-full border-2 border-gray-600 bg-white/80 text-gray-600 size-6 flex items-center justify-center cursor-pointer z-20 hover:bg-white transition-all"
                                aria-label="Previous event"
                            >
                                <IoIosArrowBack size={15} />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full border-2 border-gray-600 bg-white/80 text-gray-600 size-6 flex items-center justify-center cursor-pointer z-20 hover:bg-white transition-all"
                                aria-label="Next event"
                            >
                                <IoIosArrowForward size={15} />
                            </button>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}