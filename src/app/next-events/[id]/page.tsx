import { Hero } from "@/components/Hero"
import { nextEventData } from "@/components/nextEvent/NextEventData"

export default async function NextEventPage({ params }: { 
    params: Promise<{ id: string }>
 }) {
    const { id } = await params
    const event = nextEventData.find((item) => (item.id === Number(id)))

    if (!event) return <h1>No Event</h1>
    return (
        <Hero 
            imageString={event?.displayImage ?? ""} 
            title={event?.title ?? ""} 
            text={event?.desc ?? ""} 
        /> 
    )
}