"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { sliderData } from "./sliderData";

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slideLength = sliderData.length;
  const slideInterval = useRef<NodeJS.Timeout | null>(null);
  
  const autoScroll = true;
  const intervalTime = 5000;

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev === slideLength - 1 ? 0 : prev + 1));
  }, [slideLength]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev === 0 ? slideLength - 1 : prev - 1));
  }, [slideLength]);

  const startAutoScroll = useCallback(() => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
    slideInterval.current = setInterval(nextSlide, intervalTime);
  }, [nextSlide]);

  const stopAutoScroll = useCallback(() => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
      slideInterval.current = null;
    }
  }, []);

  useEffect(() => {
    if (autoScroll) {
      startAutoScroll();
    }
    return () => {
      stopAutoScroll();
    };
  }, [autoScroll, startAutoScroll, stopAutoScroll]);

  const handleMouseEnter = () => {
    stopAutoScroll();
  };

  const handleMouseLeave = () => {
    startAutoScroll();
  };

  return (
    <div 
      className="w-full h-[50vh] md:h-[70vh] lg:h-[90vh] relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Navigation Arrows */}
      <IoIosArrowBack 
        onClick={prevSlide} 
        className="absolute top-[40%] left-5 rounded-full border-2 border-white bg-transparent text-white size-8 sm:size-10 cursor-pointer z-10 hover:bg-white hover:text-gray-500 transition-colors hidden sm:block" 
      />
      <IoIosArrowForward 
        onClick={nextSlide} 
        className="absolute top-[40%] right-5 rounded-full border-2 border-white bg-transparent text-white size-8 sm:size-10 cursor-pointer z-10 hover:bg-white hover:text-gray-500 transition-colors hidden sm:block" 
      />

      {/* Slides */}
      <div className="relative w-full h-full">
        {sliderData.map((item, index) => (
          <div 
            key={index}
            className={`absolute w-full h-full transition-opacity ${
              index === currentSlide ? 'opacity-100 z-[5]' : 'opacity-0 z-0'
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={item.image}
                alt={`slide ${index}`}
                fill
                priority={index === currentSlide}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              />
            </div>
            <div className="absolute inset-0 flex items-start">
              <div className={`max-w-[300px] sm:max-w-lg md:max-w-xl ml-4 sm:ml-20 text-white bg-black/50 p-5 transition-all duration-1000 ease-in-out ${
                index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              } ${index === 4 ? "hidden" : ""}`}>
                <h2 className="font-bold text-xl sm:text-2xl md:text-3xl">
                  {item.heading}
                </h2>
                <p className="text-xs sm:text-sm md:text-lg mt-2">
                  {item.desc}
                </p>
                <hr className="my-3 h-0.5 bg-white w-1/2" />
                <button className="bg-[#d63037] px-4 py-2 text-sm sm:text-base rounded transition-colors hover:bg-[#d44327]">
                  {item.verse}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};