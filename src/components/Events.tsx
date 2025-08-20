"use client"
import { useEffect, useState } from "react"
import { IoArrowForward } from "react-icons/io5"

type data = {
  name: string,
  time: string
}

export const Events = () => {
    const classes = [
        {
            name: "Sunday School",
            time: "8:30 AM"
        },
        {
            name: "Sunday School Review",
            time: "9:30 AM"
        },
    ]
    const events = [
        {
            name: "Sunday School Campaign",
            time: "Oct 21"
        },
        {
            name: "Sunday School Rally",
            time: "Oct 28"
        },
    ]
    const [option, setOption] = useState<string>("Classes")
    const [data, setData] = useState<data[]>(classes)

    useEffect(() => {
     if (option === "Classes") {
      setData(classes)
     } else {
        setData(events) 
     }
    }, [option])
    return (
        <div className="bg-[#D3CCBA]/20 p-5">
            <div className="max-w-xl min-[1024px]:max-w-6xl mx-auto">
                <div className="flex flex-col min-[1024px]:flex-row w-full p-8 gap-8">
                    <div className="w-80 sm:w-md flex flex-col gap-5 justify-center">
                        <h1 className="w-25 font-bold font-roboto text-3xl tracking-wider text-gray-900">What&apos;s Happening</h1>
                        <p className="w-70 text-sm text-gray-500">Let&apos;s walk with Jesus together! Check out our upcoming classes, events, and more</p>
                        <button className="px-[15px] py-[8px] self-start bg-[#d63037] rounded-lg text-white">
                            GET INVOLVED
                        </button>
                    </div>
                    <div className="w-full">
                        <div className="max-w-xl mx-auto">
                            <div className="flex gap-10 min-[1024px]:px-5 pt-5 border-b-1 border-gray-300">
                                <h1 className={`uppercase font-semibold tracking-wider text-gray-500 cursor-pointer
                                 ${option === "Classes" ? "border-b-2 border-[#d63037] text-gray-800" : ""}`}
                                 onClick={() => setOption("Classes")}
                                 >
                                    Classes
                                </h1>
                                <h1 className={`uppercase font-semibold tracking-wider text-gray-500 cursor-pointer
                                  ${option === "Events" ? "border-b-2 border-[#d63037] text-gray-800" : ""}`}
                                  onClick={() => setOption("Events")}
                                 >
                                    Events
                                </h1>
                            </div>
                            <div className="">
                              {data.map((item, index) => (
                                <div key={index} className="flex w-full py-8 pr-8 lg:pl-5 gap-10 items-center justify-center border-b-1 border-gray-300">
                                  <div className="">
                                    <h1 className="uppercase font-semibold tracking-wider text-gray-800 text-center">{item.time}</h1>
                                  </div>
                                  <div className="flex flex-col w-full gap-3 pl-7 lg:pl-5">
                                    <h3 className="uppercase font-semibold text-sm tracking-wider text-gray-600">{option}</h3>
                                    <h1 className="font-medium text-lg sm:text-2xl text-gray-800">{item.name}</h1>
                                  </div>
                                  <IoArrowForward size={45} className="hidden sm:flex" />
                                </div>
                              ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}