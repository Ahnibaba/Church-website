import { Navbar } from "@/components/Navbar"
import { Slider } from "@/components/slider/Slider"
import { Metadata } from "next"



export const metadata: Metadata = {
  title: {
    absolute: "Home | Redeemed International Calvary Mission"
  }
}

export default function Home() {

   return (
     <>
        <Navbar />
        <Slider />
     </>
   )
}