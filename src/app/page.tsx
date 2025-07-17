import { About } from "@/components/about"
import { NextEvent } from "@/components/nextEvent/NextEvent"
import { Parallax } from "@/components/Parallex"
import Services from "@/components/services/Services"
// import { Slider } from "@/components/slider/Slider"
import { Welcoming } from "@/components/Welcoming"
import { Metadata } from "next"
import { services } from "@/components/services/services.data"
import { sliderData } from "@/components/slider/sliderData"
import District from "@/components/districts/District"




export const metadata: Metadata = {
  title: {
    absolute: "Home | Redeemed International Calvary Mission"
  }
}

export default function Home() {

   return (
     <>
        
        {/* <Slider /> */}
        <Services services={sliderData} designation="hero-slider" />
        <About />
        <NextEvent />
        <Welcoming />
        <Services services={services} designation="services" />
        <District />
        <Parallax />
     </>
   )
}