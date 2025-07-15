"use client"

import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from "./services.module.css"


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
]


export default function Services() {
    const [currentSlide, setCurrentSlide] = useState<number>(0)


    const nextSlide = () => {
        setCurrentSlide(prev => (prev === services.length - 1 ? 0 : prev + 1))
    }
    const prevSlide = () => {
        setCurrentSlide(prev => (prev === 0 ? 3 : prev - 1))
    }

    return (
        <section className={`h-[100vh] font-roboto`}>

            <div className="h-full">
                <div className="relative flex items-end justify-end h-full w-[100vw] -mt-[50px] overflow-hidden">
                    {services.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                backgroundImage: `url(${item.image})`,

                            }}
                            onClick={() => setCurrentSlide(index)}
                            className={`${currentSlide !== index ? "w-[100px] h-[150px] top-[80%] transform transition-all duration-1000  -translate-y-[70%] left-[70%] rounded-[20px] shadow-[0_25px_30px_rgba(0,0,0,0.3)] bg-cover bg-center bg-no-repeat" : "absolute top-0 left-0 w-full h-full bg-[position:50%_50%] bg-cover"}}`}
                        >
                            {currentSlide === index && (
                                <div className={`max-w-full sm:max-w-[50%] mx-5 my-30 sm:my-15  text-white`}>
                                    <div className={`${styles.title} text-[50px] sm:text-[100px] uppercase font-bold leading-none [text-shadow:3px_4px_4px_rgba(255,255,255,0.8)] opacity-100 animate-[animate_1s_ease-in-out_0.3s_1_forwards]`}>{item.title}</div>
                                    <div className={`${styles.intro} text-[20px] uppercase font-bold leading-none`}>{item.sch}</div>
                                    <div className={`${styles.desc} mt-[10px] mb-[20px] text-[18px]`}>{item.desc}</div>
                                    <div className={`${styles.btn} ml-[5px]`}>
                                        <button className="px-5 py-2.5 cursor-pointer text-base bg-[#d63037] text-white border-2 border-white transition-colors duration-300 focus focus:outline-none hover:bg-[#d63037] hover:text-white hover:border-red-900">
                                            See More
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}


                    {/* next prev arrow */}
                    <div className={`absolute top-[90%] min-[800px]:top-[80%] right-[45%] w-[300px] max-w-[30%] flex gap-[10%] items-center`}>
                        <button onClick={prevSlide} className="w-[50px] h-[50px] rounded-full bg-[#d63037] flex items-center justify-center text-white border-none outline-none text-base font-roboto font-bold transition-all duration-500 cursor-pointer hover:bg-white hover:text-black">
                            <IoIosArrowBack />
                        </button>
                        <button onClick={nextSlide} className="w-[50px] h-[50px] rounded-full bg-[#d63037] flex items-center justify-center text-white border-none outline-none text-base font-roboto font-bold transition-all duration-500 cursor-pointer  hover:bg-white hover:text-black">
                            <IoIosArrowForward />
                        </button>
                    </div>


                </div>




            </div>
        </section>
    )
}