"use client"

import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from "./services.module.css"
import Image from "next/image";


type ServiceObj = {
    image: string,
    title: string,
    sch: string,
    desc: string
}


const services: ServiceObj[] = [
    {
        image: "/communion.jpg",
        title: "COMMUNION SERVICE",
        sch: "EVERY FIRST SUNDAY OF THE MONTH ",
        desc: "A sacred moment of remembrance and fellowship,the Communion Service is a time when believers gather to reflect on the..."
    },
    {
        image: "/worship.jpg",
        title: "WORSHIP SERVICE",
        sch: "EVERY SUNDAY",
        desc: "The Worship Service is a time set apart to honor, adore, and exalt the name of the Lord in spirit and in truth. It is a gathering of believers to give God the glory due His name through songs, prayers, the Word, and heartfelt praise."
    },
    {
        image: "/jesus-network.jpg",
        title: "JESUS NETWORK SERVICE",
        sch: "EVERY THIRD WEDNESDAY OF THE MONTH",
        desc: "The Worship Service is a time set apart to honor, adore, and exalt the name of the Lord in spirit and in truth. It is a gathering of believers to give God the glory due His name through songs, prayers, the Word, and heartfelt praise."
    },
    {
        image: "/thanks.jpg",
        title: "THANKS GIVING SERVICE",
        sch: "EVERY LAST SUNDAY OF THE MONTH",
        desc: " Come and express your heartfelt gratitude to God for His goodness, mercy, and faithfulness in our lives. It is a moment to honor the One who daily loads us with benefits and to publicly give thanks for all He has done."
    },
    {
        image: "/bible-study.jpg",
        title: "BIBLE STUDY",
        sch: "EVERY TUESDAY",
        desc: "Come, Learn at the feet of the father, gain wisdom for daily living, and strengthen their relationship with Christ. Regular Bible study equips Christians to discern God's will, transforms minds and hearts, and provides a firm foundation for spiritual growth"
    },
    {
        image: "/evang.jpg",
        title: "EVANGELISTIC SERVICE",
        sch: "EVERY FRIDAY",
        desc: "Come, lets carry on with the divine mandate of going into the world, preaching the gospel, baptising in the name of the Father, Son and the Holyspirit"
    },
    {
        image: "/thanks.jpg",
        title: "THANKS GIVIN SERVICE",
        sch: "EVERY LAST SUNDAY OF THE MONTH",
        desc: " Come and express your heartfelt gratitude to God for His goodness, mercy, and faithfulness in our lives. It is a moment to honor the One who daily loads us with benefits and to publicly give thanks for all He has done."
    },
    {
        image: "/bible-study.jpg",
        title: "BIBLE STUD",
        sch: "EVERY TUESDAY",
        desc: "Come, Learn at the feet of the father, gain wisdom for daily living, and strengthen their relationship with Christ. Regular Bible study equips Christians to discern God's will, transforms minds and hearts, and provides a firm foundation for spiritual growth"
    },
    {
        image: "/evang.jpg",
        title: "EVANGELIST SERVICE",
        sch: "EVERY FRIDAY",
        desc: "Come, lets carry on with the divine mandate of going into the world, preaching the gospel, baptising in the name of the Father, Son and the Holyspirit"
    },
]


export default function Services() {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
    const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

    // Auto-play functionality with animation
    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isAutoPlaying && services.length > 0) {
            interval = setInterval(() => {
                setIsTransitioning(true);
                setCurrentSlide(prev => (prev === services.length - 1 ? 0 : prev + 1));
                setTimeout(() => setIsTransitioning(false), 1000);
            }, 5000);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isAutoPlaying, services.length]);

    const changeSlide = (index: number) => {
        if (isTransitioning || index === currentSlide || services.length === 0) return;
        setIsAutoPlaying(false); // Pause auto-play on manual interaction
        setIsTransitioning(true);
        setCurrentSlide(index);
        setTimeout(() => {
            setIsTransitioning(false);
            // Resume auto-play after 10 seconds of inactivity
            setTimeout(() => setIsAutoPlaying(true), 10000);
        }, 1000);
    };

    const nextSlide = () => {
        if (services.length === 0) return;
        changeSlide(currentSlide === services.length - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        if (services.length === 0) return;
        changeSlide(currentSlide === 0 ? services.length - 1 : currentSlide - 1);
    };

    // Reorder thumbnails to show current slide first
    const orderedThumbnails = [
        services[currentSlide],
        ...services.filter((_, index) => index !== currentSlide)
    ];

    return (
        <section className="w-full h-[50vh] md:h-[100vh] font-roboto bg-black"> {/* Changed to dvh for dynamic viewport */}
            <div className="h-full">
                <div className="relative h-full w-full -mt-[50px] overflow-hidden bg-black">
                    {/* Current Active Slide with Animation */}
                    <div

                        className={`absolute inset-0 overflow-hidden z-20 
                            ${isTransitioning ? 'animate-[slideIn_1s_ease-in-out]' : ''}`}
                    >
                        <Image
                            src={services[currentSlide]?.image}
                            fill
                            alt="Background"
                            className="object-cover"
                            priority // ← Ensures pre-loading (critical for above-the-fold images)
                            quality={75} // ← Balances quality and performance
                            sizes="100vw" // ← Responsive sizing hint
                        />
                        {/* Responsive Content Container */}
                        <div className={`max-w-[90vw] mx-auto my-auto h-full flex flex-col justify-center lg:max-w-[50%] md:mx-5 md:my-30 md:sm:my-15 text-white`}>
                            <div className={`${styles.title} text-[8vw] md:text-[45px] lg:text-[100px] uppercase font-bold leading-none [text-shadow:3px_4px_4px_rgba(255,255,255,0.8)] opacity-100 animate-[animate_1s_ease-in-out_0.3s_1_forwards]`}>
                                {services[currentSlide]?.title || ''}
                            </div>
                            <div className={`${styles.intro} text-[4vw] md:text-[10px] lg:text-[20px] uppercase font-bold leading-none`}>
                                {services[currentSlide]?.sch || ''}
                            </div>
                            <div className={`${styles.desc} mt-[2vh] mb-[4vh] text-[4vw] md:text-[18px]`}>
                                {services[currentSlide]?.desc.length > 150 ? services[currentSlide]?.desc.slice(0, 150) + "..." : services[currentSlide]?.desc || ''}
                            </div>
                            <div className={`${styles.btn} ml-[5px]`}>
                                <button className="px-5 py-2.5 cursor-pointer text-base bg-[#d63037] text-white border-2 border-white transition-colors duration-300 focus focus:outline-none hover:bg-[#d63037] hover:text-white hover:border-red-900">
                                    See More
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Thumbnail Slides - Responsive Layout */}
                    {services.length > 1 && (
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-row gap-2 z-30 px-2 py-1 w-full max-w-[95vw] overflow-x-auto scrollbar-hide md:right-4 md:left-auto md:top-1/2 md:-translate-y-1/2 md:translate-x-0 md:w-auto md:max-h-[80vh] md:overflow-y-auto md:flex-col">
                            {orderedThumbnails.map((item, index) => (
                                <div
                                    key={index}
                                    style={{
                                        backgroundImage: `url(${item.image})`,
                                    }}
                                    onClick={() => changeSlide(services.findIndex(service => service.image === item.image))}
                                    className={`flex-shrink-0 w-[12vw] h-[12vw] min-w-[50px] min-h-[50px] md:w-[70px] md:h-[70px] rounded-full shadow-[0_3px_10px_rgba(0,0,0,0.3)] bg-cover bg-center bg-no-repeat cursor-pointer transform transition-all duration-300 hover:scale-110 hover:opacity-100
                                        ${index === 0 ?
                                            'border-4 border-white scale-110 opacity-100' :
                                            'opacity-80 border-2 border-transparent'}`}
                                />
                            ))}
                        </div>
                    )}

                    {/* Navigation Arrows - Responsive Positioning */}
                    {services.length > 0 && (
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

            {/* Animation Styles */}
            <style>{`
                @keyframes slideIn {
                    0% { opacity: 0.8; transform: translateX(20px); }
                    100% { opacity: 1; transform: translateX(0); }
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                @media (orientation: landscape) and (max-height: 500px) {
                    .text-[8vw] { font-size: 6vw !important; }
                    .text-[4vw] { font-size: 3vw !important; }
                    .mt-[2vh] { margin-top: 1vh !important; }
                    .mb-[4vh] { margin-bottom: 2vh !important; }
                }
            `}</style>
        </section>
    )
}