import React from "react"
import { services } from "../services.data"
import { ServiceDetail } from "./ServiceDetail"

type ExploreProps = {
  category: string,
  setCategory: React.Dispatch<React.SetStateAction<string>>
}

export const ExploreServiceMenu = ({ category, setCategory }: ExploreProps) => {
  return (
    <div className="container mx-auto my-15">
      <div className="flex flex-col items-center justify-center gap-[20px]">
        <h1 className="font-light uppercase font-playFair text-lg md:text-xl lg:text-2xl tracking-wider text-[#d63037]">
          Explore our Services
        </h1>
        <p className="md:max-w-[90%] lg:max-w-[60%]  text-gray-600 text-[15px] text-center">
          Explore our different services, power-packed, live-changing experiences at our services.
          Aimed at elevating your soul and ensuring God meets you at the point of your needs while you encounter
          him personally.
        </p>
        <div className="max-w-[400px] sm:max-w-xl lg:max-w-5xl flex justify-between items-center gap-[9px] text-center my-[20px] mx-0 overflow-x-auto scrollbar-hide">
          {services.map((item, index) => (
            <div
              key={index}
              onClick={() => setCategory(prev => (prev === item.title ? "" : item.title) as string)}
              className="flex flex-col items-center justify-center w-xl"
            >
              <div
                className={`w-15 h-15 cursor-pointer rounded-full transition-all duration-200 ${category.toLocaleLowerCase() === item.title?.toLocaleLowerCase() ? "border-5 border-[#d63037]" : ""}`}
                style={{
                  backgroundImage: `url(${item?.displayImage})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center"
                }}
              ></div> 
              <p className="hidden sm:block text-gray-600 my-2 text-sm">{item.title?.split(" ")[0]}</p>
            </div>
          ))}
        </div>

        <ServiceDetail category={category} />
      </div>
    </div>
  )
}