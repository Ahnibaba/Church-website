"use client";

import Image from "next/image";


export const Logo = () => {
 
  
  return (
    <div className="flex justify-center items-center">
      <div className="w-20">
        <Image 
          src="/lg.png" 
          alt="Church Logo"
          width={80}  // Match the container width
          height={80} // Adjust as needed
          className="object-contain"
        />
      </div>
      <div className="w-px h-15 bg-gray-300 mr-2 max-[900px]:hidden"></div>
      <h1 className="items-center text-gray-700 max-[900px]:hidden">
        Redeemed International<br/>Calvary Mission
      </h1>
    </div>
  );
};