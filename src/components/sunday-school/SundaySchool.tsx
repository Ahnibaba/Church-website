"use client"
import { BiSearch } from "react-icons/bi"
import { sundaySchoolAdult, sundaySchoolTeens } from "./sundaySchool-data"
import { useEffect, useState } from "react"


type Outline = {

  id: number,
  text: string

}
export type SundaySchoolProps = {
  lessonNo: number,
  date: string;
  topic: string;
  text: string;
  memoryVerse: string;
  aim: string;
  truth: string;
  intro: string;
  outlines: Outline[]
}

export const SundaySchoolLesson = () => {
  const [active, setActive] = useState("Adult")
  const [data, setData] = useState<SundaySchoolProps[]>([])
  const [displayedLesson, setDisplayedLesson] = useState<SundaySchoolProps>()

  useEffect(() => {
    if(active === "Adult") {
      setData(sundaySchoolAdult)
    } else {
      setData(sundaySchoolTeens)
    }
  }, [active])

  const displayLesson = (id: number) => {
    const findLesson = data.find(item => (item.lessonNo === id))
    setDisplayedLesson(findLesson)
  }

  console.log(displayedLesson);
  
  return (
    <section className="p-4">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div
          className="w-full h-[130vh]"
          style={{
            backgroundImage: `url("/s-3.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          <div className="flex flex-col max-w-3xl mx-auto p-5">
            <div className="w-full flex items-start justify-center text-[#FFFDD0] p-5">
              <div className="flex flex-col">
                 <div className="flex justify-end">
                   <h3 className="font-bold">{displayedLesson?.date}</h3>
                 </div> 
                <h1 className="font-bold flex flex-col gap-2 mb-2">
                  {displayedLesson && (
                    <>
                      <span className="whitespace-nowrap bg-[#d63037] flex items-center justify-center max-w-15 px-5">Topic</span>
                      {displayedLesson?.topic}
                    </>
                  )}
                  
                </h1>
                <p className="font-bold flex flex-col gap-2 mb-2">
                  {displayedLesson && (
                    <>
                      <span className="whitespace-nowrap bg-[#d63037] flex items-center justify-center max-w-15 px-5">Text</span>
                      {displayedLesson?.text}
                    </>
                  )}
                  
                </p>
                <p className="font-bold flex flex-col gap-2 mb-2">
                  {displayedLesson && (
                    <>
                      <span className="whitespace-nowrap bg-[#d63037] px-5 flex items-center justify-center max-w-30 px-5">Memory Verse</span>
                      {displayedLesson?.memoryVerse}
                    </>
                  )}
                  
                </p>
                <p className="font-bold flex flex-col gap-2 mb-2">
                  {displayedLesson && (
                    <>
                      <span className="whitespace-nowrap bg-[#d63037] px-5 flex items-center justify-center max-w-40 px-5">Aim of the Lesson</span>
                      {displayedLesson?.aim}
                    </>
                  )}
                  
                </p>
                <p className="font-bold font-bold flex flex-col gap-2 mb-2">
                  {displayedLesson && (
                    <>
                      <span className="whitespace-nowrap bg-[#d63037] flex items-center justify-center max-w-30 px-5">Central Truth</span>
                      {displayedLesson?.truth}
                    </>
                  )}
                  
                </p>
                <p className="font-bold font-bold flex flex-col gap-2 mb-2">
                  {displayedLesson && (
                    <>
                      <span className="whitespace-nowrap bg-[#d63037] flex items-center justify-center max-w-30 px-5">Introduction</span>
                      {displayedLesson?.intro}
                    </>
                  )}
                  
                </p>
                <div className="font-bold font-bold flex flex-col gap-2 mb-2">
                  {displayedLesson && (
                    <>
                      <span className="whitespace-nowrap bg-[#d63037] flex items-center justify-center max-w-30 px-5">Outlines</span>
                      {displayedLesson.outlines.map((item) => (
                        <p key={item.id}>{item.text}</p>
                      ))}
                    </>
                  )}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="max-w-lg flex flex-col gap-2 p-5 items-center justify-center"
        >
          <h1 className="font-bold font-roboto text-sm md:text-md lg:text-lg text-[#d63037] uppercase tracking-tighter">Sunday School Lessons</h1>
          <div className="w-full flex items-center justify-between pt-3 px-5">
            <ul className="flex gap-2">
              <li
               className={`text-gray-700 hover:text-gray-800 text-sm font-medium uppercase whitespace-nowrap cursor-pointer
               ${active === "Adult" ? "border-b-2 border-[#d63037]" : ""}`}
               onClick={() => setActive("Adult")}
               >
                Adult
              </li>
              <li
               className={`text-gray-700 hover:text-gray-800 text-sm font-medium uppercase whitespace-nowrap cursor-pointer
                ${active !== "Adult" ? "border-b-2 border-[#d63037]" : ""}`}
                onClick={() => setActive("teens/children")}
               >
                Teens/Children
              </li>
            </ul>
            <BiSearch />
          </div>
          <div className="h-[70vh] overflow-y-scroll">
            <div className="flex flex-col items-center justify-center p-2 gap-2">
              {data.map(item => (
                <div
                  key={item.lessonNo}
                  className="w-full rounded-lg p-5 shadow-sm hover:shadow-lg transition-shadow ring-1 ring-black/5"
                  onClick={() => displayLesson(item.lessonNo)}
                >
                  <p className="font-bold text-[12px] text-[#d63037]">{item.date}</p>
                  <h1 className="font-bold font-roboto text-lg text-gray-600">{item.topic}</h1>
                  <p className="text-sm text-gray-600 my-1">{item.memoryVerse}</p>
                  <button
                    className="bg-[#d63037] p-3 rounded-lg text-white"
                  >
                    {item.text}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}