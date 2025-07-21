import { Hero } from "@/components/Hero";
import { NextEvent } from "@/components/nextEvent/NextEvent";
import { OptionalView } from "@/components/OptionalView";


export default function AboutUs() {
    return (
        <>
         <Hero imageString="./about-us.jpg" />
         <OptionalView />
         <NextEvent />
        </>
    )
}