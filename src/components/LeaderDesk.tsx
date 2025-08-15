import Image from "next/image"

type obj = {
  name: string,
  title: string,
  text: string,
  image: string,
  width: number,
  height: number
}

type LeaderDeskProp = {
  data: obj
}

export const LeaderDesk = ({ data }: LeaderDeskProp) => {
    return (
        <div className="w-full flex flex-col min-[1200px]:flex-row sm:p-10 gap-5">
        <div className=" flex-1 flex flex-col items-start justify-center">
            <h1 className="font-bold font-roboto uppercase text-3xl md:text-4xl lg:text-5xl text-gray-700 tracking-tighter">
              {data.name}
            </h1>
            <h1 className="font-bold font-roboto text-2xl md:text-3xl lg:text-4xl text-gray-500 tracking-tighter">
              {data.title} 
            </h1>
            <hr className="w-[85%] my-2 h-[2px] border-0 rounded-full bg-gray-100" />
            <div className="mt-4 flex  items-center justify-center">
                <p className=" text-gray-600 text-lg">
                  {data.text}
                </p>
            </div>
        </div>


        <div className="flex max-[1200px]:justify-center max-[450px]:justify-center">
            <Image
                src={data.image}
                alt="about-img"
                width={data.width}
                height={data.height}
                className="max-w-[25rem]"
                style={{ borderRadius: "50% 0 50% 0" }}
            />
        </div>

    </div>
    )
}