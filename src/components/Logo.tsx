"use client";

import Image from "next/image";


export const Logo = () => {
 
  
  return (
    <div className="flex justify-center items-center">
      <div className="w-40 aspect-[1.414]">
        <Image
          src="/ricam-logo.png" 
          alt="Church Logo"
          width={594}  // Match the container width
          height={420} // Adjust as needed
          priority
          className="object-contain"
        />
      </div>
      <div className="w-px h-15 bg-gray-300 mr-2 hidden lg:block"></div>
      <h1 className="items-center text-[20px] text-gray-600 hidden lg:block font-bold">
        Redeemed International<br/>Calvary Mission
      </h1>
    </div>
  );
};