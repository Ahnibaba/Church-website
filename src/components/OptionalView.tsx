"use client"

import { useState } from "react"
import { LeaderDesk } from "./LeaderDesk"
import { FaAngleDown, FaAngleUp } from "react-icons/fa"

type AccordionState = {
    [key: number]: boolean
}
type Dis = {
    title: string;
    statement: string;
    exp: string
}

export const OptionalView = () => {
    const [isActive, setIsActive] = useState<string>("about-us")

    const data = {
        name: "REV. JACK S. JACK",
        title: `General Supritendent, Redeemed International Calvary Mission`,
        text: `The &quot;About Us&quot; section represents more than just an introduction; it is the soul of the organization expressed in words. It provides insight into the identity, mission, and vision that define the
               heartbeat of the ministry or institution. It answers the critical questions: Who are we? Why do we exist? What do we aim to achieve? In a faith-based context,
               this section often reflects the divine mandate upon which the ministry was founded, the calling that birthed the work, and the biblical foundation that sustains its growth. It outlines the nature of the community—whether it&apos;s a church, outreach ministry, or organization—and speaks to
               its commitment to spiritual, moral, and social transformation. It may also highlight leadership structure, target audience,
               geographical spread, and partnerships, giving a holistic overview that invites the reader to understand and identify with the mission. Ultimately, the &quot;About Us&quot; section serves as both an open door
               and a guiding light, inviting others into a journey of faith, impact, and shared purpose.
             `,
        image: "/gs.jpg",
        width: 720,
        height: 1143

    }

    const aboutData = [
        {
            title: "Mission",
            statement: `Commissioned to Raising and Nurturing God's people for Heaven`,
            exp: `
          Our mission is rooted in the desire to see individuals grow into the fullness of Christ—spiritually mature, biblically grounded,
          and empowered by the Holy Spirit. By teaching sound doctrine, we ensure that believers are not tossed by every wind of false teaching,
          but are firmly established in the truth of God's Word. Through Spirit-led worship, we cultivate a deep intimacy with God, inviting His presence to dwell among us and transform lives
        `
        },
        {
            title: "Vision",
            statement: `Evangelism, Teaching the Word of God, Prayer, Missionary/Social welfare and Training of Christian Workers`,
            exp: `
          Our vision is rooted in the desire to see individuals grow into the fullness of Christ—spiritually mature, biblically grounded, and empowered by the Holy Spirit. By teaching sound doctrine, 
          we ensure that believers are not tossed by every wind of false teaching, but are firmly established in the truth of God's Word
        `
        },
        {
            title: "Motto",
            statement: `Jesus Christ the same yesterday, and to day, and for ever - Heb 13:8`,
            exp: `
          Just as He was faithful, loving, and mighty in the past, He remains the same today and will continue to be so forever
        `
        },
    ]


    const [accordionOpen, setAccordionOpen] = useState<AccordionState>({
        0: false,
        1: false,
        2: false
    })
    const [display, setDisplay] = useState<Dis>({
        title: "Mission",
        statement: `Commissioned to Raising and Nurturing God's people for Heaven`,
        exp: `
      Our mission is rooted in the desire to see individuals grow into the fullness of Christ—spiritually mature, biblically grounded,
      and empowered by the Holy Spirit. By teaching sound doctrine, we ensure that believers are not tossed by every wind of false teaching,
      but are firmly established in the truth of God's Word. Through Spirit-led worship, we cultivate a deep intimacy with God, inviting His presence to dwell among us and transform lives
    `
    })

    const toggleAccordion = (index: number) => {
        setDisplay(aboutData[index])
        setAccordionOpen((prev) => ({
            ...prev, [index]: !prev[index]
        }))
    }
    return (
        // we may have fewer tabs, but for now lets sample it out
        <div className="mb-8">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-8 pt-6 font-roboto text-md font-bold text-gray-600 uppercase cursor-pointer border-b-2 border-gray-300">
                <h3 onClick={() => setIsActive("about-us")} className={`${isActive === "about-us" ? "border-b-3 border-[#d63037]" : ""} hover:text-gray-700`}>About Us</h3>
                <h3 onClick={() => setIsActive("tenet-faith")} className={`${isActive === "tenet-faith" ? "border-b-3 border-[#d63037]" : ""} hover:text-gray-700`}>Tenet of Faith</h3>
                <h3 onClick={() => setIsActive("core-values")} className={`${isActive === "core-values" ? "border-b-3 border-[#d63037]" : ""} hover:text-gray-700`}>Core Values</h3>
                <h3 onClick={() => setIsActive("history")} className={`${isActive === "history" ? "border-b-3 border-[#d63037]" : ""} hover:text-gray-700`}>Historical background</h3>
            </div>


            {isActive === "about-us" && (
                <div className="w-full p-10">
                    <div className="max-w-7xl mx-auto">
                        <LeaderDesk data={data} />
                        <div className="flex flex-col-reverse md:flex-row items-center justify-center my-4">
                            <div className="flex-1 flex flex-col items-center justify-center p-4 gap-2">
                                {aboutData.map((item, index) => (
                                    <div key={index}>
                                        <div
                                            onClick={() => toggleAccordion(index)}
                                            className="flex items-center justify-between p-5 w-full shadow-sm hover:shadow-lg
                                            hover:ring hover:ring-1 hover:ring-black/20 cursor-pointer">
                                            <h3 className="uppercase text-center font-bold font-roboto text-xl text-gray-500 tracking-tighter">{item.title}</h3>
                                            {accordionOpen[index] ? (
                                                <FaAngleUp className="text-gray-500 cursor-pointer" />
                                            ) : (
                                                <FaAngleDown className="text-gray-500 cursor-pointer" />
                                            )}
                                        </div>
                                        <div
                                            className={`grid overflow-hidden transition-all duration-500 ease-in-out text-slate-600 text-sm
                                            ${accordionOpen[index] ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"} `}
                                        >
                                            <div className="overflow-hidden p-4">
                                              <p className="text-[#d63037] text-center text-lg text-bold">{item.statement}</p>
                                              <p className="text-gray-600 text-sm">{item.exp}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div
                                className="flex-1 relative h-[500px] min-h-[300px] flex items-center justify-center"
                                style={{
                                    backgroundImage: `url("/s-3.jpg")`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat"
                                }}
                            >
                                <h3 className="absolute top-0 left-0 text-white text-lg px-3 font-bold bg-[#d63037]">{display.title}</h3>
                                <div className="flex items-center justify-center">
                                    <h1 className="text-center text-[#FFFDD0] font-bold font-platFair text-xl md:text-2xl lg:text-3xl max-w-xl">{display.statement}</h1>
                                </div>
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