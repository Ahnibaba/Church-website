import ImageSlider from "./ImageSlider";

export default function NationalExcos() {
    const data = [
      {
        id:1,
        name: "John Doe",
        title: "Chairperson",
        image: "/image.jpg"
      },
      {
        id:2,
        name: "John Doe",
        title: "Chairperson",
        image: "/image.jpg"
      },
      {
        id:3,
        name: "John Doe",
        title: "Chairperson",
        image: "/image.jpg"
      },
      {
        id:4,
        name: "John Doe",
        title: "Chairperson",
        image: "/image.jpg"
      },
      {
        id:5,
        name: "John Doe",
        title: "Chairperson",
        image: "/image.jpg"
      },
      {
        id:6,
        name: "John Doe",
        title: "Chairperson",
        image: "/image.jpg"
      },
      {
        id:7,
        name: "John Doe",
        title: "Chairperson",
        image: "/image.jpg"
      },
    ]
    return (
        <div className="w-full bg-[#D3CCBA]/20 h-fit flex flex-col justify-center items-center px-4 py-10
        lg:px-20 lg:py-20 gap-6">
            <div className="text-center">
                <h1 className="font-light uppercase font-playFair text-4xl tracking-wider text-[#d63037]">
                  National Executives
                </h1>
            </div>

            <ImageSlider data={data} />

        </div>
    )
}