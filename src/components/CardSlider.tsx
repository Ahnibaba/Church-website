"use client"
import { useCallback, useState, useEffect, useRef } from "react"
import { districtData } from "./districts/districtData"
import Link from "next/link"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

export const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsToShow, setCardsToShow] = useState(1)
  const [ready, setReady] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)
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
      // Reset current index when screen size changes
      setCurrentIndex(0)
    }

    updateCardsToShow()
    window.addEventListener("resize", updateCardsToShow)
    return () => window.removeEventListener("resize", updateCardsToShow)
  }, [])

  // Get visible cards plus one extra for smooth transition
  const getVisibleCards = () => {
    const cards = []
    // Show current cards plus one extra for the transition
    const end = Math.min(currentIndex + cardsToShow + 1, districtLength)
    
    for (let i = currentIndex; i < end; i++) {
      cards.push(districtData[i])
    }
    
    // If we're at the end, wrap around
    if (end === districtLength && cards.length < cardsToShow + 1) {
      const needed = cardsToShow + 1 - cards.length
      for (let i = 0; i < needed; i++) {
        cards.push(districtData[i])
      }
    }
    
    return cards
  }

  const animateSlide = (direction: 'next' | 'prev') => {
    if (isTransitioning) return
    setIsTransitioning(true)
    
    if (sliderRef.current) {
      const slideAmount = 100 / (cardsToShow + 1) // Slide by fraction of container
      sliderRef.current.style.transition = 'transform 0.4s ease-in'
      sliderRef.current.style.transform = `translateX(-${direction === 'next' ? slideAmount : -slideAmount}%)`
    }

    setTimeout(() => {
      if (sliderRef.current) {
        sliderRef.current.style.transition = 'none'
        sliderRef.current.style.transform = 'translateX(0)'
      }
      
      setCurrentIndex(prev => 
        direction === 'next' 
          ? (prev >= districtLength - 1 ? 0 : prev + 1)
          : (prev === 0 ? districtLength - 1 : prev - 1)
      )
      
      setIsTransitioning(false)
    }, 400)
  }

  const nextSlide = useCallback(() => animateSlide('next'), [animateSlide])
  const prevSlide = useCallback(() => animateSlide('prev'), [animateSlide])

  const visibleCards = getVisibleCards()

  if (!ready) return null

  return (
    <div className="w-full relative py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative overflow-hidden">
          <div 
            ref={sliderRef}
            className="flex gap-4"
            // style={{ width: `${(districtLength * 100) / cardsToShow}%` }}
          >
            {visibleCards.map((item, index) => (
              <div
                key={`${currentIndex}-${index}`}
                className={`flex-shrink-0 ${
                  cardsToShow === 3 ? 'lg:w-1/3 md:w-1/2 w-full' : 
                  cardsToShow === 2 ? 'md:w-1/2 w-full' : 
                  'w-full'
                } p-2 transition-all duration-300`}
              >
                <div className="flex flex-col items-center justify-center p-5 border border-gray-200 shadow-lg bg-white rounded-lg h-full">
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
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hover:scale-110 transition-transform"
          >
            <IoIosArrowBack size={15} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hover:scale-110 transition-transform"
          >
            <IoIosArrowForward size={15} />
          </button>
        </>
      )}
    </div>
  )
}