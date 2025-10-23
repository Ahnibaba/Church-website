"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { teens_children_data } from "@/data/teens-children"
import Image from "next/image";


export type RecentPost = {
  imageString: string;
  title: string;
  text: string;
  date: string;

}

export const RecentPost = () => {
  const [searchWord, setSearchWord] = useState("")
  const [data, setData] = useState<RecentPost[]>(teens_children_data)
  const [searchData, setSearchData] = useState<RecentPost[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value)
  }

  useEffect(() => {
    setData(teens_children_data)
  }, [])
  useEffect(() => {
    const matchingSearches = data.filter((item) => {
      const format = (value: string) => {
        return value.toLowerCase().includes(searchWord.toLowerCase())
      }
      if (format(item.title)) {
        return item
      } else if (format(item.text)) {
        return item
      } else if (format(item.date)) {
        return item
      } else {
        return
      }
    })

    setSearchData(matchingSearches)
  }, [searchWord, data])

  return (
    <section className="">
      <h1 className="inline-block font-bold font-roboto text-md md:text-lg
             lg:text-xl text-gray-700 border-b-2 border-[#d63037]"
      >
        Recent Posts
      </h1>
      <input
        type="text"
        className="w-full mt-3 px-3 py-5 border-1 border-gray-500/50 outline-none
              h-8 text-gray-600"
        onChange={handleChange}
        value={searchWord}
        placeholder="search"
      />

      <div className="h-[70vh] overflow-y-scroll">
        <div className="flex flex-col items-center justify-center p-2 gap-2">
          {searchWord && searchData.length > 0 ? (
            searchData.map(item => {
              const cleanedTitle = item.title
               .replace(/[^\w\s]/g, '') // remove all symbols, keep letters, numbers, and spaces
               .replace(/\s+/g, '-')    // replace spaces with single "-"
               .toLowerCase()
               .trim();
              return (
                <Link

                key={item.date}
                href={`/teens-children/${cleanedTitle}`}
                className="block w-full shadow-sm hover:shadow-lg transition-shadow
                      ring-1 ring-black/5 cursor-pointer py-3 px-2 h-full rounded-lg"
              >
                <div className="flex items-center justify-center w-full gap-2">
                  <div className="w-fit h-fit rounded-full flex-shrink-0 overflow-hidden">
                    <Image
                     src={item.imageString}
                     alt=""
                     className="w-full"
                     width={100}
                     height={100}

                    />
            
                  </div>
                  <div className="">
                    <p className="text-sm text-gray-600">{item.text.substring(0, 100) + "..."}</p>
                    <p className="font-bold text-[12px] text-[#d63037]">{item.date}</p>
                  </div>
                </div>
              </Link>
              )
            })
          ): (
            searchWord && searchData.length < 1 ? (
              <div className="flex items-center w-80 p-4 sm:w-md justify-center">
                <p className="text-center text-gray-600">
                  Not Available
                </p>
              </div>
            ) : (
              data.map((item) => {
                const cleanedTitle = item.title
               .replace(/[^\w\s]/g, '') // remove all symbols, keep letters, numbers, and spaces
               .replace(/\s+/g, '-')    // replace spaces with single "-"
               .toLowerCase()
               .trim();
                return (
               <Link
                key={item.date}
                href={`/teens-children/${cleanedTitle}`}
                className="block w-full shadow-sm hover:shadow-lg transition-shadow
                ring-1 ring-black/5 cursor-pointer py-3 px-2 h-full rounded-lg"
               >
                <div className="flex items-center justify-center w-full gap-2">
                   <div className="w-fit h-fit rounded-full flex-shrink-0 overflow-hidden">
                     <Image
                      src={item.imageString}
                      alt=""
                      className="w-full"
                      width={100}
                      height={100}
                     />
                   </div>
                   <div className="">
                    <p className="text-sm text-gray-600">{item.text.substring(0, 100) + "..."}</p>
                    <p className="font-bold text-[12px] text-[#d63037]">{item.date}</p>
                   </div>
                </div>
               </Link> 
              )
              })
            )
          )}
        </div>
      </div>
    </section>
  )
}