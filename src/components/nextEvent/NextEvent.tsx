"use client"
import Link from "next/link"
import { nextEventData } from "./NextEventData";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useCallback, useState } from "react";

export const NextEvent = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0)

    const nextEventLength = nextEventData.length
    const nextSlide = useCallback(() => {
        setCurrentSlide(prev => (prev === nextEventLength - 1 ? 0 : prev + 1))
    }, [nextEventLength])

    const prevSlide = useCallback(() => {
        setCurrentSlide(prev => (prev === 0 ? nextEventLength - 1 : prev - 1))
    }, [nextEventLength])

    console.log(new Date("Mon Jul 07 2025 19:40:16").getTime());

    return (
        <section className="w-full h-[50vh] sm:h-[70vh] bg-[#D3CCBA]/20 flex items-start sm:items-center justify-center">
            <div className="py-[2rem] sm:px-[1rem] px-[5rem] flex items-center justify-center">

                <div className="flex flex-col items-center justify-center">
                    <div className="w-[500px] flex items-center justify-center mb-5">
                        <h1 className="font-light uppercase font-playFair text-4xl tracking-wider text-[#EE4B2B]">Next Events</h1>
                    </div>

                    <div className="hidden sm:grid w-full lg:grid-cols-3 sm:grid-cols-2 mt-5 md:gap-9 lg:gap-0 xl:gap-0
                    ">

                        {nextEventData.map((item, index) => (
                            <div key={index} className="flex flex-col justify-center items-center ">
                                <div className="flex flex-col justify-center items-center px-5 lg:px-10 py-0 border-r-1 border-gray-400 mb-[5rem] md:w-full">
                                    <h1 className="font-light uppercase font-playFair text-4xl lg:tracking-wider text-gray-700">25/FEB</h1>
                                    <div className="mt-[5rem] flex flex-col items-center justify-center font-roboto text-gray-800 w-full">
                                        <p className="font-bold">Debate: God in the Modern World</p>
                                        <p className="text-sm">Wednesday, February 25 at 15:00</p>
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
                            className="absolute right-15 rounded-full border-2 border-gray-600 bg-transparent text-gray-600 size-8 cursor-pointer z-10 hover:bg-white hover:text-gray-500 transition-colors"
                            onClick={nextSlide}
                        />
                        <IoIosArrowBack
                            className="absolute left-15 rounded-full border-2 border-gray-600 bg-transparent text-gray-600 size-8 cursor-pointer z-10 hover:bg-white hover:text-gray-500 transition-color"
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
                                        <div className="flex flex-col justify-center items-center px-5 lg:px-10 py-0 border-r-1 border-gray-400 mb-[5rem] md:w-full">
                                            <h1 className="font-light uppercase font-playFair text-4xl lg:tracking-wider text-gray-700">{item.date}</h1>
                                            <div className="mt-[5rem] flex flex-col items-center justify-center font-roboto text-gray-800 w-full">
                                                <p className="font-bold">{item.title}: {item.description}</p>
                                                <p className="text-sm">Wednesday, February 25 at 15:00</p>
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