"use client"

import { useEffect, useState, useCallback, useRef } from "react"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { sliderData } from "./sliderData"

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const slideLength = sliderData.length
  const slideInterval = useRef<NodeJS.Timeout | null>(null)
  
  const autoScroll = true
  const intervalTime = 5000

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev === slideLength - 1 ? 0 : prev + 1))
  }, [slideLength])

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev === 0 ? slideLength - 1 : prev - 1))
  }, [slideLength])

  const startAutoScroll = useCallback(() => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current)
    }
    slideInterval.current = setInterval(nextSlide, intervalTime)
  }, [nextSlide])

  const stopAutoScroll = useCallback(() => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current)
      slideInterval.current = null
    }
  }, [])

  useEffect(() => {
    if (autoScroll) {
      startAutoScroll()
    }
    return () => {
      stopAutoScroll()
    }
  }, [autoScroll, startAutoScroll, stopAutoScroll])

  const handleMouseEnter = () => {
    stopAutoScroll()
  }

  const handleMouseLeave = () => {
    startAutoScroll()
  }

  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* Navigation Arrows */}
      <IoIosArrowBack 
        onClick={prevSlide} 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="absolute top-[40%] left-5 rounded-full border-2 border-white bg-transparent text-white size-8 sm:size-10 cursor-pointer z-10 hover:bg-white hover:text-gray-500 transition-colors hidden sm:block" 
      />
      <IoIosArrowForward 
        onClick={nextSlide} 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="absolute top-[40%] right-5 rounded-full border-2 border-white bg-transparent text-white size-8 sm:size-10 cursor-pointer z-10 hover:bg-white hover:text-gray-500 transition-colors hidden sm:block" 
      />

      {/* Slides */}
      <div className="relative w-full h-full">
        {sliderData.map((item, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-[5]' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={item.image}
              alt={`slide ${index}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center">
              <div className={`max-w-[350px] sm:max-w-lg md:max-w-xl ml-4 sm:ml-20 text-white bg-black/30 p-5 transition-all duration-2000 ease-in-out ${
                index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <h2 className="font-bold text-xl sm:text-2xl md:text-3xl">
                  {item.heading}
                </h2>
                <p className="text-sm sm:text-base md:text-lg mt-2">
                  {item.desc}
                </p>
                <hr className="my-3 h-0.5 bg-white w-1/2" />
                <button className="bg-blue-500 px-4 py-2 text-sm sm:text-base rounded hover:bg-blue-600 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}