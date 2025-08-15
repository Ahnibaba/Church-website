import { Hero } from "@/components/Hero";
import { LeaderDesk } from "@/components/LeaderDesk";
import NationalExcos from "@/components/NationalExcos";
import { Ready } from "@/components/Ready";
import "@/app/globals.css";

export const metadata = {
  title: "  Youth Ministry",
  description: "Youth of Excellence a ministry aimed at empowering the youth",
};

export default function Youth() {
    const text = `
     Youth ministry is more than just programs and events—it’s about discipleship, mentorship, and empowering young people to build a lasting relationship with Christ.
     In a world full of distractions and challenges.
    `
    const title = "Youth Ministry"

    const data = {
      name: "Evang. Aniefiok Tommy",
      title: `National Youth President, Redeemed International Calvary Mission`,
      text: `The &quot;About Us&quot; section represents more than just an introduction; it is the soul of the organization expressed in words. It provides insight into the identity, mission, and vision that define the
             heartbeat of the ministry or institution. It answers the critical questions: Who are we? Why do we exist? What do we aim to achieve? In a faith-based context,
             this section often reflects the divine mandate upon which the ministry was founded, the calling that birthed the work, and the biblical foundation that sustains its growth. It outlines the nature of the community—whether it&apos;s a church, outreach ministry, or organization—and speaks to
             its commitment to spiritual, moral, and social transformation. It may also highlight leadership structure, target audience,
             geographical spread, and partnerships, giving a holistic overview that invites the reader to understand and identify with the mission. Ultimately, the &quot;About Us&quot; section serves as both an open door
             and a guiding light, inviting others into a journey of faith, impact, and shared purpose.
           `,
      image: "/image.jpg",
      width: 720,
      height: 1080

  }
    return (
        <>
          <Hero imageString="/presido.jpg" text={text} title={title} />
          <div className="w-full p-5 sm:p-10">
            <div className="max-w-7xl mx-auto">
               <LeaderDesk data={data} />
            </div>
          </div>
          <NationalExcos />
          <Ready />
        </>
    )
}