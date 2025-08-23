"use client"

import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


type ImageObject = {
    id: number,
    image: string
}

type dataDetails = {
    id: number;
    title: string;
    desc: string;
    images: ImageObject[]
}
export type DataProps = {
    data?: dataDetails[]
}

export default function CardSlider({ data }: DataProps) {
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
        const scrollAmount = direction === "left" ? -370 : 370
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

    useEffect(() => {
        const container = scrollRef.current
        if (container) {
            container.addEventListener("scroll", updateScrollButtons)
            updateScrollButtons()

            return () => container.removeEventListener("scroll", updateScrollButtons)
        }
    }, [data])

    return (
        <section className="py-5 px-4 lg:px-0">
            <div className="container mx-auto text-center mb-10 relative">

                {/* Scroll Button */}
                <div className="absolute right-0 sm:bottom-[-30px] bottom-[-37px] flex space-x-2">
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
                className={`container w-[23rem] sm:w-full mx-auto overflow-x-scroll flex space-x-6 relative
            ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUpOrLeave}
                onMouseLeave={handleMouseUpOrLeave}
            >
                {data?.map((item) => (
                    <div
                        key={item?.id}
                        className="flex-shrink-0 w-[calc(100%-24px)] sm:w-[calc(50%-24px)] xl:w-[calc(33.333%-24px)] relative"
                    >
                        <div className="flex flex-col h-full bg-white shadow-md rounded-lg overflow-hidden">
                            {/* Text Content */}
                            <div className="p-4 flex-1 flex flex-col items-center justify-center">
                                <h1 className="m-3 font-medium uppercase font-roboto text-xs md:text-sm lg:text-lg tracking-wider text-[#d63037] text-center">{item?.title}</h1>
                                <p className="text-gray-700 text-center">{item?.desc}</p>
                            </div>

                            {/* Image as Background */}
                            <div
                                className="w-full h-50 bg-cover bg-center"
                                style={{
                                    backgroundImage: `url(${item?.images[0]?.image})`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center'
                                }}
                            />
                        </div>
                    </div>
                ))}

            </div>
        </section>
    )
}