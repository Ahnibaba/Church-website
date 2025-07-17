"use client"
import { useCallback, useState, useEffect } from "react"
import { districtData } from "./districts/districtData"
import Link from "next/link"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

export const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsToShow, setCardsToShow] = useState(1)
  const [ready, setReady] = useState(false)
  const districtLength = districtData.length

  // Update cards to show based on screen size
  useEffect(() => {
    const updateCardsToShow = () => {
      setReady(true)
      if (window.innerWidth >= 1024) {
        setCardsToShow(3)
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2)
      } else {
        setCardsToShow(1)
      }
    }

    updateCardsToShow()
    window.addEventListener("resize", updateCardsToShow)
    return () => window.removeEventListener("resize", updateCardsToShow)
  }, [])

  // Calculate visible cards with padding for smooth transitions
  const getVisibleCards = () => {
    const start = currentIndex
    const end = start + cardsToShow
    
    // If we're near the end, include some from the beginning
    if (end > districtLength) {
      const overflow = end - districtLength
      return [
        ...districtData.slice(start),
        ...districtData.slice(0, overflow)
      ]
    }
    
    return districtData.slice(start, end)
  }

  const nextSlide = useCallback(() => {
    setCurrentIndex(prev => 
      prev >= districtLength - 1 ? 0 : prev + 1
    )
  }, [districtLength])

  const prevSlide = useCallback(() => {
    setCurrentIndex(prev => 
      prev === 0 ? districtLength - 1 : prev - 1
    )
  }, [districtLength])

  const visibleCards = getVisibleCards()

  if(!ready) return 

  return (
    <div className="w-full relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative overflow-hidden">
          <div className="flex gap-4 transition-transform duration-300 ease-in-out">
            {visibleCards.map((item, index) => (
              <div
                key={`${currentIndex}-${index}`}
                className={`flex-shrink-0 ${
                  cardsToShow === 3 ? 'w-1/3' : 
                  cardsToShow === 2 ? 'w-1/2' : 
                  'w-full'
                } p-2`}
              >
                <div className="flex flex-col items-center justify-center p-5 border border-gray-200 bg-white rounded-lg h-full">
                  <div className="flex flex-col items-center justify-center px-5 lg:px-10 py-0 mb-8 lg:mb-12">
                    <h1 className="font-light uppercase font-playFair text-2xl tracking-wider text-gray-700">
                      {item.name || "Heading"}
                    </h1>
                    <div className="mt-6 lg:mt-12 flex flex-col items-center justify-center font-roboto text-gray-800 w-full">
                      <div className="flex flex-col items-center justify-center">
                        <p className="font-bold text-center line-clamp-2">
                          {item.description || "Lorem ipsum dolor sit, amet consectetur adipisicing elit."}
                        </p>
                      </div>
                    </div>
                  </div>
                  <Link
                    href={"/services"}
                    className="flex items-center gap-1 uppercase tracking-tight text-xs text-[#d63037] hover:text-[#d63038b6] transition-colors"
                  >
                    More info
                    <span>{">>"}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      {districtLength > cardsToShow && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
          >
            <IoIosArrowBack size={15} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
          >
            <IoIosArrowForward size={15} />
          </button>
        </>
      )}
    </div>
  )
}