import { useState, useEffect } from "react";
import CardSlider from "../CardSlider-better";
import { services } from "../services.data";
import Testimony from "../testimony";
import WriteupCard from "../WriteupCard";

export const ServiceDetail = ({ category }: { category: string }) => {
  const [isLoading, setIsLoading] = useState(true);
  const service = services.find((item) => (item.title?.toLocaleLowerCase() === category.toLocaleLowerCase()));

  // Simulate loading delay when category changes
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [category]);

  if (isLoading || !service) {
    return (
      <div className="w-full p-5 sm:p-15 flex flex-col items-center">
        <div className="w-full max-w-4xl mx-auto my-5">
          <div className="h-10 bg-gray-200 rounded animate-pulse w-3/4 mx-auto"></div>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-center items-center bg-[#D3CCBA]/20 my-5 sm:my-15 border-2 border-gray-300 max-w-[100%]">
          <div className="flex items-center justify-center p-5 sm:p-10 order-2 lg:order-1">
            <div className="space-y-4 w-full">
              <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-4/6"></div>
            </div>
          </div>
          <div className="relative w-full h-64 sm:h-96 order-1 lg:order-2">
            <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <WriteupCard 
        writeupText={service.heroWriteUp ?? ""} 
        writeupTitle={service.title ?? ""} 
        writeupImage={service.heroImage ?? ""} 
      />
      <Testimony data={service.testimony} />
    </>
  );
}