"use client"
import { BiSearch } from "react-icons/bi"
import { sundaySchoolAdult, sundaySchoolTeens } from "./sundaySchool-data"
import React, { useEffect, useState } from "react"
import { DisplayedLessonLoading, SundaySchoolLessonLoading } from "./SundaySchoolLoading"
import { IoArrowForward } from "react-icons/io5"


type Outline = {

  id: number,
  text: string

}
export type SundaySchoolProps = {
  lessonNo: string,
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
  const [loading, setLoading] = useState<boolean>(true)
  const [lessonLoading, setLessonLoading] = useState<boolean>(true)
  const [search, setSearch] = useState<boolean>(false)
  const [searchWord, setSearchWord] = useState<string>("")
  const [searchData, setSearchData] = useState<SundaySchoolProps[]>([])



  useEffect(() => {
    if (active === "Adult") {
      setData(sundaySchoolAdult)
      setLessonLoading(false)
    } else {
      setData(sundaySchoolTeens)
      setLessonLoading(false)
    }
    
  }, [active])

  useEffect(() => {
    // Function to get the most recent Sunday
    function getLastSunday(today = new Date()) {
      const date = new Date (today)
      date.setDate(date.getDate() - date.getDay())
      date.setHours(0, 0, 0, 0)
      console.log(date);
      
      return date
    }
    const lastSunday = getLastSunday()
    const currentWeekLesson = data.find((lesson) => {
      const lessonDate = new Date(lesson.date)
      lessonDate.setHours(0, 0, 0, 0)
      return lessonDate.getTime() === lastSunday.getTime()
    })
    setDisplayedLesson(currentWeekLesson)
    setLoading(false)
   

  }, [data])


  const displayLesson = (id: string) => {
    const foundLesson = data.find(item => (item.lessonNo === id))
    if (!foundLesson) return
    setDisplayedLesson(foundLesson)
  }

  console.log(displayedLesson);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value)
  }

  useEffect(() => {
    if (searchWord && data) {
      const matchingSearches = data.filter((item) => {
        if (item.date.toLowerCase().includes(searchWord.toLowerCase())) {
          return item
        } else if (item.topic.toLowerCase().includes(searchWord.toLowerCase())) {
          return item
        } else if (item.memoryVerse.toLowerCase().includes(searchWord.toLowerCase())) {
          return item
        } else if (item.text.toLowerCase().includes(searchWord.toLowerCase())) {
          return item
        } else if (item.lessonNo.toLowerCase().includes(searchWord.toLowerCase())){
          return item
        }else {
          return
        }

      })
      setSearchData(matchingSearches)
    } 
  }, [searchWord, data])

  console.log(searchData);
  
  

  

  return (
    <section className="p-4">
      <div className="flex flex-col min-[1200px]:flex-row items-center justify-center">
        <div
          className="w-full h-[1000px] sm:h-[750px]  flex items-center justify-center"
          style={{
            backgroundImage: `url("/s-3.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          {loading || !data ? (
            <DisplayedLessonLoading />
          ) : (
            <>
              <div className="flex flex-col max-w-3xl mx-auto py-8 sm:py-5">
                <div className="w-full flex items-start justify-center text-[#FFFDD0] p-5">
                  <div className="flex flex-col">
                    <div className="flex justify-between mb-5">
                      <h3 className="font-bold">{displayedLesson?.lessonNo}</h3>
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
            </>
          )}
        </div>
        <div
          className="max-w-lg flex flex-col gap-2 p-5 items-center justify-center"
        >
          <h1 className="font-bold font-roboto text-sm md:text-md lg:text-lg text-[#d63037] uppercase tracking-tighter">Sunday School Lessons</h1>
          <div className="w-full flex items-center justify-between py-3 relative">
            <ul className="flex gap-2 items-center justify-center">
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
            <BiSearch onClick={() => setSearch(prev => !prev)} />
            {search && (
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-600">
                <input
                 type="text"
                 className="w-full h-full rounded-lg border-none outline-none px-2"
                 onChange={handleChange}
                 value={searchWord}
                 placeholder="search"
                />
                <IoArrowForward className="" onClick={() => {
                  setSearch(prev => !prev)
                  setSearchWord("")
                }} />
              </div>
            )}
          </div>
          <div className="h-[70vh] overflow-y-scroll">
            {lessonLoading || !data ? (
              <SundaySchoolLessonLoading />
            ): (
              <div className="flex flex-col items-center justify-center p-2 gap-2">
              {searchWord && searchData.length > 0 ? (
                searchData.map(item => (
                  <div
                    key={item.lessonNo}
                    className="w-full rounded-lg p-5 shadow-sm hover:shadow-lg transition-shadow ring-1 ring-black/5 cursor-pointer"
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
                ))
              ) : searchWord && searchData.length < 1 ? (
                 <div className="flex items-center w-80 p-4 sm:w-md justify-center">
                   <p className="text-center text-gray-600 ">Not Available</p>
                 </div>
              ): (
                (
                  data.map(item => (
                    <div
                      key={item.lessonNo}
                      className="w-full rounded-lg p-5 shadow-sm hover:shadow-lg transition-shadow ring-1 ring-black/5 cursor-pointer"
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
                  ))
                )
              )}
            </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}