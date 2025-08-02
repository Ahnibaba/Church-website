import { Hero } from "@/components/Hero"
import { nextEventData } from "@/components/nextEvent/NextEventData"
import WriteupCard from "@/components/WriteupCard"
import Testimony from "@/components/testimony"
import { Metadata } from "next"

type Props = { 
 params: Promise<{ id: string }>
}

export const generateMetadata = async ({ params }: Props ): Promise<Metadata> => {
  const id = (await params).id
   const event = nextEventData.find((item) => (item.id === Number(id)))
   return {
     title: `Next Events | ${event?.title}`
   }
}

export default async function NextEventPage({ params }: Props) {
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