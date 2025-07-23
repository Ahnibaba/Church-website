"use client";

import Image from "next/image";


export const Logo = () => {
 
  
  return (
    <div className="flex justify-center items-center">
     <div className="w-40 sm:w-32"> {/* Adjust container width */}
  <Image
    src="/ricam-logo.png" 
    alt="Church Logo"
    width={128}  // Matches sm:w-32 (32 * 4 = 128px)
    height={90}  // 128 / 1.414 ≈ 90 (maintain aspect ratio)
    priority
  />
</div>
      <div className="w-px h-15 bg-gray-300 mr-2 hidden lg:block"></div>
      <h1 className="items-center text-[20px] text-gray-600 hidden lg:block font-bold">
        Redeemed International<br/>Calvary Mission
      </h1>
    </div>
  );
};