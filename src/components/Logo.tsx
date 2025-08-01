"use client";

import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-32 relative aspect-[128/90]"> {/* Container with aspect ratio */}
        <Image
          src="/ricam-logo.png" 
          alt="Church Logo"
          fill // Fill the container while maintaining aspect ratio
          className="object-contain" // Ensures image fits within container
          sizes="(max-width: 32px) 25vw, 20vw"
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