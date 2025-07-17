import { CardSlider } from "../CardSlider";




export default function District() {
    return (
        <div className="w-full bg-[#D3CCBA]/20 h-fit flex flex-col justify-center items-center px-4 py-10
        lg:px-20 lg:py-20 gap-6">
            <div className="text-center">
                <h1 className="font-light uppercase font-playFair text-4xl tracking-wider text-[#d63037]">
                    DISTRICTS
                </h1>
            </div>
            <div className="w-full max-w-3xl mb-12">
                <p className="text-center font-roboto text-gray-700">
                    We are closer than you think—come worship with us at a district near you. Experience heartfelt fellowship, uplifting praise, and the undiluted Word of God. Wherever you are, there&apos;s a place for you in His presence.
                </p>
            </div>

            <CardSlider />

        </div>
    )
}