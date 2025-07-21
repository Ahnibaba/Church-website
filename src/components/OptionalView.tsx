"use client"

import Image from "next/image"
import { useState } from "react"

export const OptionalView = () => {
    const [isActive, setIsActive] = useState<string>("about-us")
    return (
        // we may have fewer tabs, but for now lets sample it out
        <div className="mb-8">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-8 p-6 font-roboto text-5 text-gray-700 uppercase cursor-pointer border-b-2 border-gray-300">
                <h3 onClick={() => setIsActive("about-us")} className={`${isActive === "about-us" ? "border-b-5 border-[#d63037]" : ""} hover:text-gray-800`}>About Us</h3>
                <h3 onClick={() => setIsActive("tenet-faith")} className={`${isActive === "tenet-faith" ? "border-b-5 border-[#d63037]" : ""} hover:text-gray-800`}>Tenet of Faith</h3>
                <h3 onClick={() => setIsActive("core-values")} className={`${isActive === "core-values" ? "border-b-5 border-[#d63037]" : ""} hover:text-gray-800`}>Core Values</h3>
                <h3 onClick={() => setIsActive("history")} className={`${isActive === "history" ? "border-b-5 border-[#d63037]" : ""} hover:text-gray-800`}>Historical background</h3>
            </div>


            {isActive === "about-us" && (
                <div className="w-full p-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="w-full flex flex-col min-[1200px]:flex-row sm:p-10 gap-5">
                            <div className=" flex-1 flex flex-col sm:items-start justify-center">
                                <h1 className="font-bold font-roboto text-3xl md:text-4xl lg:text-5xl text-gray-700 tracking-tighter">
                                    REV. JACK S. JACK
                                </h1>
                                <h1 className="font-bold font-roboto text-2xl md:text-3xl lg:text-4xl text-gray-500 tracking-tighter">
                                    General Supritendent, Redeemed International Calvary Mission
                                </h1>
                                <hr className="w-[85%] my-2 h-[2px] border-0 rounded-full bg-gray-100" />
                                <div className="mt-4 flex items-center justify-center">
                                    <p className="text-center max-w-3xl text-gray-600 text-lg min-[450px]:text-start">
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

                            <div className="max-w-5xl mx-auto flex items-center justify-center mt-5">
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

                            <div className="max-w-5xl mx-auto flex items-center justify-center mt-5">
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
                            <div className="">
                                <h3 className="font-roboto font-bold text-gray-700">1. FAITH</h3>
                                <p className="text-gray-600 text-lg">&quot;For whatsoever is born of God overcometh the world: and this is the victory that overcometh the world, even our faith.&quot; (1 John 5:4; Ephesians 6:16)</p>
                            </div>
                            <div className="">
                                <h3 className="font-roboto font-bold text-gray-700">2. THE WORD</h3>
                                <p className="text-gray-600 text-lg">&quot;Who being the brightness of his glory, and the express image of his person, and upholding all things by the word of his power...&quot; (John 1:1-12; Hebrews 1:3)</p>
                            </div>
                            <div className="">
                                <h3 className="font-roboto font-bold text-gray-700">3. THE SUPERNATURAL</h3>
                                <p className="text-gray-600 text-lg">&quot;The wind bloweth where it listeth, and thou hearest the sound thereof, but canst not tell whence it cometh, and whither it goeth: so is every one that is born of the Spirit.&quot; (Psalm 82:5-7; John 3:8)</p>
                            </div>
                            <div className="">
                                <h3 className="font-roboto font-bold text-gray-700">4. PRAISE</h3>
                                <p className="text-gray-600 text-lg">&quot;And when they began to sing and to praise, the Lord set ambushments against the children of Ammon, Moab, and mount Seir, which were come against Judah: and they were smitten.&quot; (2 Chro. 20:20-22; Psalm 67:1-7; 149:1-9)</p>
                            </div>
                            <div className="">
                                <h3 className="font-roboto font-bold text-gray-700">5. THE HOLYSPIRIT</h3>
                                <p className="text-gray-600 text-lg">&quot;And it shall come to pass in that day, that his burden shall be taken away from off thy shoulder, and his yoke from off thy neck, and the yoke shall be destroyed because of the anointing.&quot; (Acts 1:1-8; Isaiah 10:27)</p>
                            </div>
                            <div className="">
                                <h3 className="font-roboto font-bold text-gray-700">6. PROSPERITY</h3>
                                <p className="text-gray-600 text-lg">&quot;Beloved, I wish above all things that thou mayest prosper and be in health, even as thy soul prospereth.&quot; 3 John 2. &quot;Cry yet, saying, Thus saith the Lord of hosts; My cities through prosperity shall yet be spread abroad...&quot; (3 John 2; Psalm 35:27; Zech. 1:17)</p>
                            </div>
                            <div className="">
                                <h3 className="font-roboto font-bold text-gray-700">7. VISION</h3>
                                <p className="text-gray-600 text-lg">&quot;Where there is no vision, the people perish: but he that keepeth the law, happy is he.&quot; (Proverbs 29:18, Jer. 29:11),</p>
                            </div>
                            <div className="">
                                <h3 className="font-roboto font-bold text-gray-700">8. PRAYER</h3>
                                <p className="text-gray-600 text-lg">&quot;And this is the confidence that we have in him, that, if we ask anything according to his will, he heareth us.&quot; (1 John 5:14)</p>
                            </div>
                            <div className="">
                                <h3 className="font-roboto font-bold text-gray-700">9. HEALING</h3>
                                <p className="text-gray-600 text-lg">&quot;That it might be fulfilled which was spoken by Esaias the prophet, saying, Himself took our infirmities, and bare our sicknesses.&quot; (Isaiah 53:3-4; Jer. 8:22; Matt. 8:17)</p>
                            </div>
                            <div className="">
                                <h3 className="font-roboto font-bold text-gray-700">10. WISDOM</h3>
                                <p className="text-gray-600 text-lg">&quot;And wisdom and knowledge shall be the stability of thy times, and strength of salvation: the fear of the Lord is his treasure.&quot; (Prov. 24:3-4, Isaiah 33:6)</p>
                            </div>
                            <div className="">
                                <h3 className="font-roboto font-bold text-gray-700">11. CONSECRETION</h3>
                                <p className="text-gray-600 text-lg">&quot;Nevertheless the foundation of God standeth sure, having this seal, the Lord knoweth them that are his. And let every one that nameth the name of Christ depart from iniquity.&quot; (Hebrews 12:14; 2 Tim. 2:19)</p>
                            </div>
                            <div className="">
                                <h3 className="font-roboto font-bold text-gray-700">12. SUCCESS</h3>
                                <p className="text-gray-600 text-lg">&quot;This book of the law shall not depart out of thy mouth; but thou shalt meditate therein day and night, that thou mayest observe to do according to all that is written therein: for then thou shalt make thy way prosperous, and then thou shalt have good success.&quot; (Joshua 1:8-10)</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {isActive === "core-values" && (
                <div className="w-full p-10">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-center font-bold font-roboto text-xl md:text-2xl lg:text-3xl text-gray-700 tracking-tighter">CORE VALUE</h1>
                        <div className="max-w-5xl mx-auto mt-5">
                            <p className="text-center text-[#d63037] text-lg font-medium">
                                To raise and nurture a Christ-centered people through sound doctrine, Spirit-led worship,
                                and unwavering commitment to the Great Commission.
                            </p>
                        </div>
                        <div className="space-y-5 max-w-5xl mx-auto mt-12">
                            <div className="">
                                <h3 className="font-roboto font-bold text-gray-700">1. SPIRITUALITY</h3>
                                <p className="text-gray-600 text-lg">&quot;For whatsoever is born of God overcometh the world: and this is the victory that overcometh the world, even our faith.&quot; (1 John 5:4; Ephesians 6:16)</p>
                            </div>
                            <div className="">
                                <h3 className="font-roboto font-bold text-gray-700">2. INTEGRITY</h3>
                                <p className="text-gray-600 text-lg">&quot;Who being the brightness of his glory, and the express image of his person, and upholding all things by the word of his power...&quot; (John 1:1-12; Hebrews 1:3)</p>
                            </div>
                            <div className="">
                                <h3 className="font-roboto font-bold text-gray-700">3. POSSIBILITY MENTALITY</h3>
                                <p className="text-gray-600 text-lg">&quot;The wind bloweth where it listeth, and thou hearest the sound thereof, but canst not tell whence it cometh, and whither it goeth: so is every one that is born of the Spirit.&quot; (Psalm 82:5-7; John 3:8)</p>
                            </div>
                            <div className="">
                                <h3 className="font-roboto font-bold text-gray-700">4. HOLINESS</h3>
                                <p className="text-gray-600 text-lg">&quot;And when they began to sing and to praise, the Lord set ambushments against the children of Ammon, Moab, and mount Seir, which were come against Judah: and they were smitten.&quot; (2 Chro. 20:20-22; Psalm 67:1-7; 149:1-9)</p>
                            </div>
                            <div className="">
                                <h3 className="font-roboto font-bold text-gray-700">5. RESPONSIBILITY</h3>
                                <p className="text-gray-600 text-lg">&quot;And it shall come to pass in that day, that his burden shall be taken away from off thy shoulder, and his yoke from off thy neck, and the yoke shall be destroyed because of the anointing.&quot; (Acts 1:1-8; Isaiah 10:27)</p>
                            </div>
                            <div className="">
                                <h3 className="font-roboto font-bold text-gray-700">6. PERSEVERANCE</h3>
                                <p className="text-gray-600 text-lg">&quot;Beloved, I wish above all things that thou mayest prosper and be in health, even as thy soul prospereth.&quot; 3 John 2. &quot;Cry yet, saying, Thus saith the Lord of hosts; My cities through prosperity shall yet be spread abroad...&quot; (3 John 2; Psalm 35:27; Zech. 1:17)</p>
                            </div>
                            <div className="">
                                <h3 className="font-roboto font-bold text-gray-700">7. BORN OF WATER</h3>
                                <p className="text-gray-600 text-lg">&quot;Where there is no vision, the people perish: but he that keepeth the law, happy is he.&quot; (Proverbs 29:18, Jer. 29:11),</p>
                            </div>
                            <div className="">
                                <h3 className="font-roboto font-bold text-gray-700">8. BORN OF THE SPIRIT</h3>
                                <p className="text-gray-600 text-lg">&quot;And this is the confidence that we have in him, that, if we ask anything according to his will, he heareth us.&quot; (1 John 5:14)</p>
                            </div>
                            <div className="">
                                <h3 className="font-roboto font-bold text-gray-700">9. COMMUNION</h3>
                                <p className="text-gray-600 text-lg">&quot;That it might be fulfilled which was spoken by Esaias the prophet, saying, Himself took our infirmities, and bare our sicknesses.&quot; (Isaiah 53:3-4; Jer. 8:22; Matt. 8:17)</p>
                            </div>
                            <div className="">
                                <h3 className="font-roboto font-bold text-gray-700">10. WISDOM</h3>
                                <p className="text-gray-600 text-lg">&quot;And wisdom and knowledge shall be the stability of thy times, and strength of salvation: the fear of the Lord is his treasure.&quot; (Prov. 24:3-4, Isaiah 33:6)</p>
                            </div>
                            <div className="">
                                <h3 className="font-roboto font-bold text-gray-700">11. CONSECRETION</h3>
                                <p className="text-gray-600 text-lg">&quot;Nevertheless the foundation of God standeth sure, having this seal, the Lord knoweth them that are his. And let every one that nameth the name of Christ depart from iniquity.&quot; (Hebrews 12:14; 2 Tim. 2:19)</p>
                            </div>
                            <div className="">
                                <h3 className="font-roboto font-bold text-gray-700">12. SUCCESS</h3>
                                <p className="text-gray-600 text-lg">&quot;This book of the law shall not depart out of thy mouth; but thou shalt meditate therein day and night, that thou mayest observe to do according to all that is written therein: for then thou shalt make thy way prosperous, and then thou shalt have good success.&quot; (Joshua 1:8-10)</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {isActive === "history" && (
                <div className="w-full p-10">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-center font-bold font-roboto text-xl md:text-2xl lg:text-3xl text-gray-700 tracking-tighter">HISTORICAL BACKGROUND</h1>
                        <div className="space-y-5 max-w-5xl mx-auto mt-12">
                            <p className="text-gray-600 text-lg">
                                RICAM was founded by the late Rev. A. U. Inyang (1938–1992). It began in 1973, initially under the name A. U. Inyang Evangelistical Association, and was later known as Calvary Evangelistic Association. After proper incorporation, the present name—Redeemed International Calvary Mission (RICAM)—was officially adopted in 1979.

                                Although the mission started in Ikot Abasi, located in Mkpat Enin Local Government Area, the headquarters was later relocated to No. 10 Obong Street, off IBB Avenue, opposite the E-Library, Uyo, Akwa Ibom State, Nigeria.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}