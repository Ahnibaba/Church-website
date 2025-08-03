
import { ServicesComponentPage } from "@/components/services/ServicesComponentPage"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Services",
    description: "Come join us and experience the glory of God in our different impactful services."
}


export default function ServicesPage() {

    return (
        <>
            <ServicesComponentPage />
        </>
    )
}