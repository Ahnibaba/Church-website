import CardSlider from "../CardSlider-better";
import { services } from "../services.data"
import Testimony from "../testimony";
import WriteupCard from "../WriteupCard"

export const ServiceDetail = ({ category }: { category: string }) => {
    const service = services.find((item) => (item.title?.toLocaleLowerCase() === category.toLocaleLowerCase()))
    console.log(services);
    
    console.log(category);
    
    console.log(service);
    
    return (
       <>
          <WriteupCard writeupText={service?.heroWriteUp || ""} writeupTitle={service?.title || ""} writeupImage={service?.heroImage || ""} />
          <Testimony data={service?.testimony} />
       </>
    )
}