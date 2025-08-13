import { Hero } from "@/components/Hero";

export const metadata = {
  title: "  Youth Ministry",
  description: "Youth of Excellence a ministry aimed at empowering the youth",
};

export default function Youth() {
    const text = `
     Youth ministry is more than just programs and events—it’s about discipleship, mentorship, and empowering young people to build a lasting relationship with Christ.
     In a world full of distractions and challenges, youth ministry provides a safe space for teens to explore their faith, ask tough questions, and grow spiritually.
    `
    const title = "Youth Ministry"
    return (
        <>
          <Hero imageString="/presido.jpg" text={text} title={title} />
        </>
    )
}