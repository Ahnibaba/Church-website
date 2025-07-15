import { About } from "@/components/about"
import { NextEvent } from "@/components/nextEvent/NextEvent"
import { Parallax } from "@/components/Parallex"
import Services from "@/components/services/Services"
import { Slider } from "@/components/slider/Slider"
import { Welcoming } from "@/components/Welcoming"
import { Metadata } from "next"



export const metadata: Metadata = {
  title: {
    absolute: "Home | Redeemed International Calvary Mission"
  }
}

export default function Home() {

   return (
     <>
        
        <Slider />
        <About />
        <NextEvent />
        <Welcoming />
        <Services />
        <Parallax />
     </>
   )
}