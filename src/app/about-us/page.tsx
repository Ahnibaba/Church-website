import { Hero } from "@/components/Hero";
import { NextEvent } from "@/components/nextEvent/NextEvent";
import { OptionalView } from "@/components/OptionalView";

export const metadata = {
  title: "About Us",
  description: "Learn more about Redeemed International Calvary Mission",
};


export default function AboutUs() {
    const text = "Jesus Christ the same yesterday, and to day, and for ever - Heb 13:8"
    const title = "Motto"
    return (
        <>
         <Hero imageString="./about-us.jpg" text={text} title={title} />
         <OptionalView />
         <NextEvent type="Upcoming Events" />
        </>
    )
}