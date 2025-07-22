import { Hero } from "@/components/Hero";
import { NextEvent } from "@/components/nextEvent/NextEvent";

export default function NextEventsPage() {
    const text = "We hope to see you in our Next Event, Our events are designed to uplift your spirit and deepen your walk with God. Each event carries a unique encounter, and we do not want you to miss out. Kindly take note of the dates, invite others, and come expectant. There is a blessing waiting for you!"
    return (
        <>
            <Hero imageString="/next-event.jpg" title="Next Events" text={text} />
            <NextEvent type="Upcoming Events" />
            <NextEvent type="Next Events" />
        </>
    )
}