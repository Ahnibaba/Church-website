import Image from "next/image"
import Link from "next/link"

export const About = () => {
    return (
        <div className="w-full p-10">
            <div className="max-w-7xl mx-auto">
               <div className="w-full flex flex-col min-[840px]:flex-row sm:p-10 gap-5">
                  <div className="flex-1 flex flex-col items-start justify-center">
                    <h3 className="font-bold font-roboto text-2 text-[#d63037]">Who we are</h3>
                    <h1 className="font-bold font-roboto text-3xl text-gray-700 mb-1">About Us</h1>
                    <hr className="w-25 my-5 h-2 border-0 rounded-full bg-[#d63037]" />
                    <div className="mt-4">
                       <p className="text-gray-600 text-lg max-[450px]:text-start">
                         Redeemed International Calvary Mission is a dynamic Pentecostal Christian Church founded by God&apos;s servant, Rev. A. U. Inyang. We are a united family, commissioned to raise and nurture God&apos;s people for the Kingdom of Heaven.
                         Our mission is grounded in the responsibility of delivering sound doctrine, revealing the light of the Scriptures, and preaching the undiluted Word of God. As Jesus declared, “I must work the works of Him who sent me”—we continue in that divine path, fulfilling the Great Commission entrusted to us — Rev. Jack S. Jack.
                       </p>
                    </div>
                    <button className="my-5 p-4 bg-[#d63037] rounded-lg text-white font-roboto font-bold">
                      <Link href="/about-us">
                         Read More
                      </Link>
                    </button>
                  </div>
                  <div className="flex max-[840px]:justify-end max-[450px]:justify-center">
                    <Image
                      src="/gs.jpg"
                      alt="about-img"
                      width={720}
                      height={1143}
                      className="max-w-[25rem]"
                      style={{borderRadius: "50% 0 50% 0"}}
                    
                    />
                  </div>
               </div>
            </div>
        </div>
    )
}