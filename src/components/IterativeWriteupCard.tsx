import Image from "next/image";

type ImageObject = {
  id: number,
  image: string
}

type dataDetails = {
  id: number;
  title: string;
  desc: string;
  images?: ImageObject[]
}
type IterativeWriteupProps = {
  data?: dataDetails[]
}

export default function IterativeWriteupCard({ data }: IterativeWriteupProps) {
  console.log(data);

  return (
    <section className="p-5 sm:p-15 flex flex-col items-center">
      <div className="w-full max-w-4xl mx-auto my-5">
        <h1 className="font-light uppercase font-playFair text-2xl md:text-3xl lg:text-4xl tracking-wider text-[#d63037] text-center">
          TESTIMONIES
        </h1>
      </div>

      <div className="gap-5 mt-8 flex flex-col min-[961px]:flex-row max-w-[1920px]">
        {data?.map((item) => (
          <div key={item.id}className="border-2 border-gray-300">
            <div className="flex-1 flex flex-col p-5 order-2 min-[961px]:order-1">
              <h1 className=" mb-2 uppercase font-roboto text-base md:text-lg lg:text-xl tracking-wider text-[#d63037]">
                {item.title}
              </h1>
              <p className="text-gray-600 text-base max-[961px]:text-start">
                {item.desc}
              </p>
            </div>
            <div className="min-[961px]:flex-1 relative w-full h-64 sm:h-96 order-1 min-[961px]:order-2">
               {item.images?.map(image => (
                 <Image
                key={image.id}
                src={image.image}
                alt="Good is Good Event image"
                fill
                className="object-cover object-center w-full"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
               ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}