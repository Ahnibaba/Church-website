"use client"

import { UseWindowSize } from "@/utils/UseWindowSize"
import { Space_Mono } from "next/font/google"

export const Logo = () => {
 const { width } = UseWindowSize()   
 return (
    <>
      {/* <img className="hidden sm:block" src="logo.jpg" alt="" />
      <img className="block sm:hidden" src="small-logo.jpg" alt="" /> */}
      <div className="flex justify-center items-center">
        <div className="w-20">
          <img src="lg.png" alt="" />
        </div>
        <div className="w-px h-15 bg-gray-700 mr-2 hidden lg:block"></div>
        <h1 className="items-center font-roboto text-gray-700 hidden lg:block">Redeemed International<br/>Calvary Mission</h1>
      </div>
    </>
 )
}