import { NextEvent } from "@/components/nextEvent/NextEvent"
import { Parallax } from "@/components/Parallex"
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
        <NextEvent />
        <Welcoming />
        <Parallax imageString='https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
     </>
   )
}