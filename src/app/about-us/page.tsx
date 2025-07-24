import { Hero } from "@/components/Hero";
import { NextEvent } from "@/components/nextEvent/NextEvent";
import { OptionalView } from "@/components/OptionalView";


export default function AboutUs() {
    const text = "We are a mission, Commissioned to raising and nurturing God&apos;s Children for Heaven, saddled with the task of propagating sound doctrines, far from heireses, making sure the government of Heaven gains expression in the sphere of all realms."
    const title = "About us"
    return (
        <>
         <Hero imageString="./about-us.jpg" text={text} title={title} />
         <OptionalView />
         <NextEvent type="Upcoming Events" />
        </>
    )
}