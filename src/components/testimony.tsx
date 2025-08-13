import CardSlider, { DataProps } from "./CardSlider-better";






export default function Testimony({ data }: DataProps) {
    return (
        <div className="w-full bg-[#D3CCBA]/20 h-fit flex flex-col justify-center items-center px-4 py-10
        lg:px-20 lg:py-20 gap-6">
            <div className="text-center">
                <h1 className="font-light uppercase font-playFair text-4xl tracking-wider text-[#d63037]">
                    TESTIMONIES
                </h1>
            </div>
            <div className="w-full max-w-3xl mb-5">
                <p className="text-center font-roboto text-gray-700">
                  {`Testimonies are sacred markers that point us back to our rich heritage in Christ. They serve as living memorials of God's faithfulness,
                  tangible evidence of His grace at work in our lives. Each testimony is a divine signpost,
                  reminding us of where we've come from and illuminating the path of where we're going in our spiritual journey.`}
                </p>
            </div>

            <CardSlider data={data} />

        </div>
    )
}