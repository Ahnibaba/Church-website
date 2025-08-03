import { services } from "../services.data"
import WriteupCard from "../WriteupCard"

export const ServiceDetail = ({ category }: { category: string }) => {
    const service = services.find((item) => (item.title?.toLocaleLowerCase() === category.toLocaleLowerCase()))
    console.log(services);
    
    console.log(category);
    
    console.log(service);
    
    return (
        <WriteupCard writeupText={service?.heroWriteUp || ""} writeupTitle={service?.title || ""} writeupImage={service?.heroImage || ""} />
    )
}