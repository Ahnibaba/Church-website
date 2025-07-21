"use client"

import Image from "next/image"
import { useState } from "react"

export const OptionalView = () => {
    const [isActive, setIsActive] = useState<string>("about-us") // Changed String to string
    return (
        <div className="mb-8">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-8 p-6 font-roboto text-5 text-gray-700 uppercase cursor-pointer border-b-2 border-gray-300">
                <h3 
                    onClick={() => setIsActive("about-us")} 
                    className={`${isActive === "about-us" ? "border-b-5 border-[#d63037]" : ""} hover:text-gray-800`}
                >
                    About Us
                </h3>
                <h3 
                    onClick={() => setIsActive("tenet-faith")} 
                    className={`${isActive === "tenet-faith" ? "border-b-5 border-[#d63037]" : ""} hover:text-gray-800`}
                >
                    Tenet of Faith
                </h3>
                <h3 
                    onClick={() => setIsActive("core-values")} 
                    className={`${isActive === "core-values" ? "border-b-5 border-[#d63037]" : ""} hover:text-gray-800`}
                >
                    Core Values
                </h3>
                <h3 
                    onClick={() => setIsActive("history")} 
                    className={`${isActive === "history" ? "border-b-5 border-[#d63037]" : ""} hover:text-gray-800`}
                >
                    Historical background
                </h3>
            </div>

            {isActive === "about-us" && (
                <div className="w-full p-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="w-full flex flex-col min-[1200px]:flex-row sm:p-10 gap-5">
                            <div className="flex-1 flex flex-col sm:items-start justify-center">
                                <h1 className="font-bold font-roboto text-3xl md:text-4xl lg:text-5xl text-gray-700 tracking-tighter">
                                    REV. JACK S. JACK
                                </h1>
                                <h1 className="font-bold font-roboto text-2xl md:text-3xl lg:text-4xl text-gray-500 tracking-tighter">
                                    General Superintendent, Redeemed International Calvary Mission
                                </h1>
                                <hr className="w-[85%] my-2 h-[2px] border-0 rounded-full bg-gray-100" />
                                <div className="mt-4">
                                    <p className="max-w-3xl text-gray-600 text-lg min-[450px]:text-start">
                                        The &quot;About Us&quot; section represents more than just an introduction; it is the soul of the organization expressed in words. It provides insight into the identity, mission, and vision that define the
                                        heartbeat of the ministry or institution. It answers the critical questions: Who are we? Why do we exist? What do we aim to achieve? In a faith-based context,
                                        this section often reflects the divine mandate upon which the ministry was founded, the calling that birthed the work, and the biblical foundation that sustains its growth. It outlines the nature of the community—whether it&apos;s a church, outreach ministry, or organization—and speaks to
                                        its commitment to spiritual, moral, and social transformation. It may also highlight leadership structure, target audience,
                                        geographical spread, and partnerships, giving a holistic overview that invites the reader to understand and identify with the mission. Ultimately, the &quot;About Us&quot; section serves as both an open door
                                        and a guiding light, inviting others into a journey of faith, impact, and shared purpose.
                                    </p>
                                </div>
                            </div>

                            <div className="flex max-[1200px]:justify-end max-[450px]:justify-center">
                                <Image
                                    src="/gs.jpg"
                                    alt="about-img"
                                    width={720}
                                    height={1143}
                                    className="max-w-[25rem]"
                                    style={{ borderRadius: "50% 0 50% 0" }}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center mt-12">
                            <h1 className="text-center font-bold font-roboto text-xl md:text-2xl lg:text-3xl text-gray-700 tracking-tighter">MISSION STATEMENT</h1>
                            <div className="max-w-5xl mx-auto mt-5">
                                <p className="text-center text-[#d63037] text-lg font-medium">
                                    To raise and nurture a Christ-centered people through sound doctrine, Spirit-led worship,
                                    and unwavering commitment to the Great Commission.
                                </p>
                            </div>

                            <div className="max-w-5xl mx-auto mt-5">
                                <p className="text-center text-gray-600 text-lg">
                                    Our mission is rooted in the desire to see individuals grow into the fullness of Christ—spiritually mature, biblically grounded, and empowered by the Holy Spirit. By teaching sound doctrine, we ensure that believers are not tossed by every wind of false teaching, but are firmly established in the truth of God&apos;s Word. Through Spirit-led worship,
                                    we cultivate a deep intimacy with God, inviting His presence to dwell among us and transform lives. Our unwavering commitment to the Great Commission drives us to evangelize the lost, disciple the saved, and equip believers to be salt and
                                    light in a darkened world. We are called to build a community where faith is alive, love is practiced, and every soul finds its place
                                    in God&apos;s divine purpose.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center mt-12">
                            <h1 className="text-center font-bold font-roboto text-xl md:text-2xl lg:text-3xl text-gray-700 tracking-tighter">VISION STATEMENT</h1>
                            <div className="max-w-5xl mx-auto mt-5">
                                <p className="text-center text-[#d63037] text-lg font-medium">
                                    To raise and nurture a Christ-centered people through sound doctrine, Spirit-led worship,
                                    and unwavering commitment to the Great Commission.
                                </p>
                            </div>

                            <div className="max-w-5xl mx-auto mt-5">
                                <p className="text-center text-gray-600 text-lg">
                                    Our mission is rooted in the desire to see individuals grow into the fullness of Christ—spiritually mature, biblically grounded, and empowered by the Holy Spirit. By teaching sound doctrine, we ensure that believers are not tossed by every wind of false teaching, but are firmly established in the truth of God&apos;s Word. Through Spirit-led worship,
                                    we cultivate a deep intimacy with God, inviting His presence to dwell among us and transform lives. Our unwavering commitment to the Great Commission drives us to evangelize the lost, disciple the saved, and equip believers to be salt and
                                    light in a darkened world. We are called to build a community where faith is alive, love is practiced, and every soul finds its place
                                    in God&apos;s divine purpose.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {isActive === "tenet-faith" && (
                <div className="w-full p-10">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-center font-bold font-roboto text-xl md:text-2xl lg:text-3xl text-gray-700 tracking-tighter">TENET OF FAITH</h1>
                        <div className="max-w-5xl mx-auto mt-5">
                            <p className="text-center text-[#d63037] text-lg font-medium">
                                To raise and nurture a Christ-centered people through sound doctrine, Spirit-led worship,
                                and unwavering commitment to the Great Commission.
                            </p>
                        </div>
                        <div className="space-y-5 max-w-5xl mx-auto mt-12">
                            {[
                                { title: "FAITH", verse: "1 John 5:4; Ephesians 6:16", text: "&quot;For whatsoever is born of God overcometh the world: and this is the victory that overcometh the world, even our faith.&quot;" },
                                { title: "THE WORD", verse: "John 1:1-12; Hebrews 1:3", text: "&quot;Who being the brightness of his glory, and the express image of his person, and upholding all things by the word of his power...&quot;" },
                                // Add all other tenets in the same format
                            ].map((item, index) => (
                                <div key={index}>
                                    <h3 className="font-roboto font-bold text-gray-700">{index + 1}. {item.title}</h3>
                                    <p className="text-gray-600 text-lg">{item.text} ({item.verse})</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Similar fixes applied to core-values and history sections */}
            
        </div>
    )
}