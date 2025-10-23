import { CalendarPage } from "@/components/calendar";
import { Hero } from "@/components/Hero";
import { RecentPost } from "@/components/recent-post";
import Image from "next/image";


export const metadata = {
  title: "Teens/Children Ministry",
  description: "Teens/Children ministry aimed at catching them young"
}

export default function TeensChildren () {
  const title = "Watch Word"
  const text = `
    But Jesus said, Suffer little children, and forbid them not to come unto me: for of such is the kingdom of heaven
    - Matthew 19:14
  `
  return (
    <>
     <Hero imageString="/teens7.jpg" title={title} text={text} />
     <section className="p-5">
       <div className="flex mt-25 gap-8">
         <div className="w-[70%]">
         <div
          className="w-full relative flex items-center justify-center h-[80vh] bg-center bg-cover"
          style={{ backgroundImage: `url("/teens2.jpg")` }}
         >
          
         </div>
         <div className="mt-15">
          <Image
          src={"/Let.png"}
          alt=""
          className="float-left"
          width={100}
          height={100}
         />
           <p className="text-gray-600 text-md">
           et Little Children Come to Me reflects the deep love and acceptance that Jesus showed toward children, emphasizing their innocence, purity, and openness of heart. It serves as a powerful reminder that the kingdom of God values humility and faith like that of a child. In a world that often overlooks the young, Jesus’ invitation demonstrates that every child matters to Him — not because of what they can offer, but because of who they are. His call encourages us to create an environment where children are welcomed, nurtured, and guided in the path of love and faith.
           This message also challenges adults to embrace a childlike spirit in their relationship with God — one that is trusting, sincere, and free from pride. By saying, “Let the little children come to me,” Jesus not only affirmed the worth of children but also used them as examples of the right attitude toward faith. It teaches that spiritual growth begins with humility and dependence on God. Therefore, this call invites both the young and the old to draw near to Christ with open hearts, knowing that His love and grace are freely given to all who come to Him.
         </p>
         <div className="w-full text-lg font-medium text-gray-400 mt-5 bg-gray-50 p-5 border-l-4 border-gray-400">
          <p className="leading-[2]">
            Children and teenagers are arrows in the quiver of life, and parents are called to guide and release them toward the right path. The Bible reminds us to train up a child in the way he should go, so that when he is grown, he will not depart from it.
          </p>
          <p className="mt-5">Rev. Jack S. Jack</p>
         </div>
         </div>
         </div>
         <div className="w-[30%]">
          <RecentPost />
          <CalendarPage />
         </div>
       </div>
     </section>
    </>
  )
}