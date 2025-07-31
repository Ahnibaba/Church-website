import { Hero } from "@/components/Hero"
import { nextEventData } from "@/components/nextEvent/NextEventData"
import WriteupCard from "@/components/WriteupCard"
import Testimony from "@/components/testimony"

export default async function NextEventPage({ params }: { 
    params: Promise<{ id: string }>
 }) {
    const { id } = await params
    const event = nextEventData.find((item) => (item.id === Number(id)))
    
   

    console.log(event?.testimony);
    


    if (!event) return <h1>No Event</h1>
    return (
        <div className="">
            <Hero 
            imageString={event?.displayImage ?? ""} 
            title={event?.title ?? ""} 
            text={event?.desc ?? ""} 
        /> 
        <WriteupCard writeupText={event?.heroWriteUp || ""} writeupTitle={event?.title || ""} writeupImage={event?.heroImage || ""} />
        <Testimony data={event.testimony} />
        </div>
    )
}