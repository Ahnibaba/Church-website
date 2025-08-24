import { Hero } from "@/components/Hero";
import { NextEvent } from "@/components/nextEvent/NextEvent";
import { OptionalView } from "@/components/OptionalView";

export const metadata = {
  title: "About Us",
  description: "Learn more about Redeemed International Calvary Mission",
};


export default function AboutUs() {
    const text = "We are delighted to have you here! Our church is a community of believers committed to loving God, serving people, and living by His Word."
    const title = "About us"
    return (
        <>
         <Hero imageString="./about-us.jpg" text={text} title={title} />
         <OptionalView />
         <NextEvent type="Upcoming Events" />
        </>
    )
}