"use client"

import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from "./HeroAnimation.module.css"
import Image from "next/image";
import Link from "next/link";


interface TestimonyProps {
   id: number;
   title: string;
   desc: string;
   images: Array<
     {
        id: number;
        image: string;
     }
   >
}

export interface dataProps {
   id: number; 
   date?: string;
   title?: string;
   schedule?: string;
   scripture?: string;
   desc?: string;
   displayImage: string;
   heroImage?: string;
   heroWriteUp?: string;
   testimony?: Array<TestimonyProps>,
   excerptImages?: Array<
      {
        id: number;
        image: string;
      }
   >
    
}


interface HeroAnimationProps {
  data: dataProps[]; // This is correct
}


export default function HeroAnimation({ data }: HeroAnimationProps) {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
    const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
    const [nextSlideIndex, setNextSlideIndex] = useState<number>(0);
    const [displaySlide, setDisplaySlide] = useState<number>(0);

    // Auto-play functionality with animation
    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isAutoPlaying && data.length > 0) {
            interval = setInterval(() => {
                const nextIndex = currentSlide === data.length - 1 ? 0 : currentSlide + 1;
                setNextSlideIndex(nextIndex);
                setIsTransitioning(true);
                setTimeout(() => {
                    setCurrentSlide(nextIndex);
                    setDisplaySlide(nextIndex);
                    setIsTransitioning(false);
                }, 1000);
            }, 5000);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isAutoPlaying, currentSlide, data]);

    const changeSlide = (index: number) => {
        if (isTransitioning || index === currentSlide || data.length === 0) return;
        setIsAutoPlaying(false);
        setNextSlideIndex(index);
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentSlide(index);
            setDisplaySlide(index);
            setIsTransitioning(false);
            setTimeout(() => setIsAutoPlaying(true), 10000);
        }, 1000);
    };

    const nextSlide = () => {
        if (data.length === 0) return;
        changeSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        if (data.length === 0) return;
        changeSlide(currentSlide === 0 ? data.length - 1 : currentSlide - 1);
    };

    // Reorder thumbnails to show current slide first
    const orderedThumbnails = [
        data[currentSlide],
        ...data.filter((_, index: number) => index !== currentSlide)
    ];

    return (
        <section className="w-full h-[68vh] md:h-[100vh] font-roboto bg-black mt-35">
            <div className="h-full">
                <div className="relative h-full w-full -mt-[50px] overflow-hidden">
                    {/* Background Slide (always visible) */}
                    <div className="absolute inset-0 overflow-hidden z-0">
                        <Image
                            src={data[displaySlide]?.displayImage}
                            fill
                            alt="Background"
                            className="object-cover"
                            priority
                            quality={75}
                            sizes="100vw"
                        />
                    </div>

                    {/* Current Active Slide with Animation */}
                    <div className={`absolute inset-0 overflow-hidden z-10 ${isTransitioning ? 'animate-[slideOut_1s_ease-in-out]' : ''}`}>
                        <Image
                            src={data[currentSlide]?.displayImage}
                            fill
                            alt="Current Background"
                            className="object-cover"
                            quality={75}
                            sizes="100vw"
                        />
                        <div className={`max-w-[90vw] mx-auto my-auto h-full flex flex-col justify-center md:max-w-xl md:mx-5 md:my-30 md:sm:my-15 text-white`}>
                            <div className={`${styles.title} text-[28px] md:text-[45px] lg:text-[75px] uppercase font-bold leading-none [text-shadow:3px_4px_4px_rgba(255,255,255,0.8)] opacity-100 animate-[animate_1s_ease-in-out_0.3s_1_forwards]`}>
                                {data[currentSlide]?.title || ''}
                            </div>
                            <div className={`${styles.intro} text-[15px] md:text-[25px] lg:text-[35px] uppercase font-bold leading-none`}>
                                {data[currentSlide]?.schedule || ''}
                            </div>
                            <div className={`${styles.desc} mt-[2vh] mb-[4vh] text-[15px] md:text-[15px] lg:text-[20px]`}>
                                {data[currentSlide]?.desc && data[currentSlide]?.desc.length > 150 ? 
                                    `${data[currentSlide]?.desc.slice(0, 150)}...` : 
                                   data[currentSlide]?.desc || ''}
                            </div>
                            <div className={` ${styles.btn} ml-[5px]`}>
                                <button className="px-5 py-2.5 cursor-pointer text-base bg-[#d63037] text-white border-2 border-white transition-colors duration-300 focus focus:outline-none hover:bg-[#d63037] hover:text-white hover:border-red-900">
                                    {data[nextSlideIndex]?.scripture  ? data[nextSlideIndex]?.scripture : (
                                        <Link href="/services">See More</Link>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Next Slide (during transition) */}
                    {isTransitioning && (
                        <div className={`absolute inset-0 overflow-hidden z-20 animate-[slideIn_1s_ease-in-out]`}>
                            <Image
                                src={data[nextSlideIndex]?.displayImage}
                                fill
                                alt="Next Background"
                                className="object-cover"
                                quality={75}
                                sizes="100vw"
                            />
                            <div className={`max-w-[90vw] mx-auto my-auto h-full flex flex-col justify-center md:max-w-xl md:mx-5 md:my-30 md:sm:my-15 text-white`}>
                                <div className={`${styles.title} text-[8vw] md:text-[45px] lg:text-[100px] uppercase font-bold leading-none [text-shadow:3px_4px_4px_rgba(255,255,255,0.8)] opacity-100 animate-[animate_1s_ease-in-out_0.3s_1_forwards]`}>
                                    {data[nextSlideIndex]?.title || ''}
                                </div>
                                <div className={`${styles.intro} text-[4vw] md:text-[10px] lg:text-[20px] uppercase font-bold leading-none`}>
                                    {data[nextSlideIndex]?.schedule || ''}
                                </div>
                                <div className={`${styles.desc} mt-[2vh] mb-[4vh] text-[4vw] md:text-[18px]`}>
                                    {data[nextSlideIndex]?.desc && data[nextSlideIndex]?.desc.length > 150 ? 
                                        `${data[nextSlideIndex]?.desc.slice(0, 150)}...` : 
                                        data[nextSlideIndex]?.desc || ''}
                                </div>
                                <div className={`${styles.btn} ml-[5px]`}>
                                    <button className="px-5 py-2.5 cursor-pointer text-base bg-[#d63037] text-white border-2 border-white transition-colors duration-300 focus focus:outline-none hover:bg-[#d63037] hover:text-white hover:border-red-900">
                                        {data[nextSlideIndex]?.scripture  ? data[nextSlideIndex]?.scripture : (
                                            <Link href="/services">See More</Link>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Thumbnail Slides - Responsive Layout */}
                    {data.length > 1 && (
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-row gap-2 z-30 px-2 py-1 w-full max-w-[95vw] overflow-x-auto scrollbar-hide md:right-4 md:left-auto md:top-1/2 md:-translate-y-1/2 md:translate-x-0 md:w-auto md:max-h-[80vh] md:overflow-y-auto md:flex-col">
                            {orderedThumbnails.map((item, index) => (
                                <div
                                    key={index}
                                    style={{
                                        backgroundImage: `url(${item.displayImage})`,
                                    }}
                                    onClick={() => changeSlide(data.findIndex((data: dataProps) => data.displayImage === item.displayImage))}
                                    className={`flex-shrink-0 w-[12vw] h-[12vw] min-w-[50px] min-h-[50px] md:w-[70px] md:h-[70px] rounded-full shadow-[0_3px_10px_rgba(0,0,0,0.3)] bg-cover bg-center bg-no-repeat cursor-pointer transform transition-all duration-300 hover:scale-110 hover:opacity-100
                                        ${index === 0 ?
                                            'border-4 border-white scale-110 opacity-100' :
                                            'opacity-80 border-2 border-transparent'}`}
                                />
                            ))}
                        </div>
                    )}

                    {/* Navigation Arrows - Responsive Positioning */}
                    {data.length > 0 && (
                        <div className={`absolute bottom-[12vh] md:bottom-auto md:top-[80%] right-[5%] w-[200px] max-w-[40%] flex gap-[5%] justify-center items-center z-30`}>
                            <button onClick={prevSlide} className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full bg-[#d63037] flex items-center justify-center text-white border-none outline-none text-base font-roboto font-bold transition-all duration-500 cursor-pointer hover:bg-white hover:text-black">
                                <IoIosArrowBack />
                            </button>
                            <button onClick={nextSlide} className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full bg-[#d63037] flex items-center justify-center text-white border-none outline-none text-base font-roboto font-bold transition-all duration-500 cursor-pointer hover:bg-white hover:text-black">
                                <IoIosArrowForward />
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
                @keyframes slideIn {
                    0% { 
                        transform: translateX(100%);
                        opacity: 0.5;
                    }
                    100% { 
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                @keyframes slideOut {
                    0% { 
                        transform: translateX(0);
                        opacity: 1;
                    }
                    100% { 
                        transform: translateX(-100%);
                        opacity: 0.5;
                    }
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    )
}