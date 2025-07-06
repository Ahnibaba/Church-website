"use client"

import { UseWindowSize } from "@/utils/UseWindowSize"

export const Logo = () => {
 const { width } = UseWindowSize()   
 return (
    <>
      <img className="hidden min-[769px]:block" src="logo.jpg" alt="" />
      <img className="block min-[769px]:hidden" src="small-logo.jpg" alt="" />
    </>
 )
}