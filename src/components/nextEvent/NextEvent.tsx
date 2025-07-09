"use client"
import Link from "next/link"
import { nextEventData } from "./NextEventData";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useCallback, useState } from "react";
import { getDayName, getMonthName } from "@/utils/GetDate";

type monthObj = {
    "name": string,
    "abbrev": string
}

export const NextEvent = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0)

    const nextEventLength = nextEventData.length
    const nextSlide = useCallback(() => {
        setCurrentSlide(prev => (prev === nextEventLength - 1 ? 0 : prev + 1))
    }, [nextEventLength])

    const prevSlide = useCallback(() => {
        setCurrentSlide(prev => (prev === 0 ? nextEventLength - 1 : prev - 1))
    }, [nextEventLength])

   
    
    const getDate = (date: string): number => {
      return new Date(date).getDate()
    }
    const getDay = (date: string): string => {
      const dayIndex = new Date(date).getDay()
      const day = getDayName(dayIndex)
      return day
    }

    const getMonth = (date: string): monthObj => {
        const monthIndex = new Date(date).getMonth()
        const monthObj = getMonthName(monthIndex)
        return monthObj
    }

    const getTime = (dateString: string): string => {
        const date = new Date(dateString);
        const hours = date.getHours().toString().padStart(2, '0'); // Ensures 2 digits (e.g., "09")
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`; // e.g., "14:30"
    };

    

    return (
        <section className="w-full bg-[#D3CCBA]/20 flex items-center justify-center">
            <div className="w-full flex items-center justify-center">

                <div className="w-full flex flex-col items-center p-25 justify-center">
                    <div className="w-[500px] flex items-center justify-center mb-5">
                        <h1 className="font-light uppercase font-playFair text-4xl tracking-wider text-[#EE4B2B]">Next Events</h1>
                    </div>

                    <div className="hidden sm:grid md:grid-cols-2 lg:grid-cols-3 mt-5 sm:gap-10 lg:gap-0 justify-items-center
                    ">

                        {nextEventData.map((item, index) => (
                            <div key={index} className={`flex flex-col justify-center items-center border-gray-400 p-5 ${index === nextEventLength - 1 ? "sm:col-span-2 sm:max-w-sm lg:col-span-1" : ""}`}>
                                <div className={`flex flex-col justify-center items-center px-5 lg:px-10 py-0 mb-[2rem] lg:mb-[5rem]`}>
                                    <h1 className="font-light uppercase font-playFair text-4xl lg:tracking-wider text-gray-700">25/FEB</h1>
                                    <div className="mt-[1.5rem] lg:mt-[5rem] flex flex-col items-center justify-center font-roboto text-gray-800 w-full">
                                        <p className="font-bold whitespace-nowrap">Debate: God in the Modern World</p>
                                        <p className="text-sm whitespace-nowrap">Wednesday, February 25 at 15:00</p>
                                    </div>
                                </div>
                                <Link href="/services" className="flex gap-0.5 justify-center items-center uppercase tracking-tight text-xs text-[#EE4B2B]">
                                    <p>more info</p>
                                    <p>{">>"}</p>
                                </Link>
                            </div>


                        ))}
                    </div>

                    <div className="relative sm:hidden flex items-center justify-center w-full h-[25rem] overflow-hidden">
                        <IoIosArrowForward
                            className="absolute right-5 rounded-full border-2 border-gray-600 bg-transparent text-gray-600 size-5 cursor-pointer z-10 hover:bg-white hover:text-gray-500 transition-colors"
                            onClick={nextSlide}
                        />
                        <IoIosArrowBack
                            className="absolute left-5 rounded-full border-2 border-gray-600 bg-transparent text-gray-600 size-5 cursor-pointer z-10 hover:bg-white hover:text-gray-500 transition-color"
                            onClick={prevSlide}
                        />
                        <div className="relative w-full h-full">
                            {nextEventData.map((item, index) => (
                                <div
                                    key={index}
                                    className={`absolute w-full h-full flex items-center justify-center transition-opacity ${index === currentSlide ? 'opacity-100 z-[5]' : 'opacity-0 z-0'
                                        }`}
                                >
                                    <div key={index} className="flex flex-col justify-center items-center ">
                                        <div className="flex flex-col justify-center items-center px-5 lg:px-10 py-0 mb-[5rem] md:w-full">
                                            <h1 className="font-light uppercase font-playFair text-4xl lg:tracking-wider text-gray-700">{getDate(item.date)}/{getMonth(item.date).abbrev}</h1>
                                            <div className="mt-[5rem] flex flex-col items-center justify-center font-roboto text-gray-800 w-full">
                                                <p className="font-bold">{item.title}: {item.description}</p>
                                                <p className="text-sm">{getDay(item.date)}, {getMonth(item.date).name} {getDate(item.date)} at {getTime(item.date)}</p>
                                            </div>
                                        </div>
                                        <Link href="/services" className="flex gap-0.5 justify-center items-center uppercase tracking-tight text-xs text-[#EE4B2B]">
                                            <p>more info</p>
                                            <p>{">>"}</p>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}