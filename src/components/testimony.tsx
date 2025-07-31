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
            <div className="w-full max-w-3xl mb-12">
                <p className="text-center font-roboto text-gray-700">
                   Testimonies are pointers to our Heritage in christ
                </p>
            </div>

            <CardSlider data={data} />

        </div>
    )
}