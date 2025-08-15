import ImageSlider from "./ImageSlider";

export default function NationalExcos() {
    const data = [
      {
        id:1,
        name: "Evang. Aniefiok Tommy",
        title: "Chairperson",
        image: "/image-c.jpg"
      },
      {
        id:2,
        name: "Evang. Inyang Ime",
        title: "Chairperson",
        image: "/e8.jpg"
      },
      {
        id:3,
        name: "John Doe",
        title: "Chairperson",
        image: "/image-c.jpg"
      },
      {
        id:4,
        name: "John Doe",
        title: "Chairperson",
        image: "/image-c.jpg"
      },
      {
        id:5,
        name: "John Doe",
        title: "Chairperson",
        image: "/image-c.jpg"
      },
      {
        id:6,
        name: "John Doe",
        title: "Chairperson",
        image: "/image-c.jpg"
      },
      {
        id:7,
        name: "John Doe",
        title: "Chairperson",
        image: "/image-c.jpg"
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