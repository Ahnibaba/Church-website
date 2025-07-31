import Image from "next/image";

type WriteupProps = { 
  writeupText: string,
  writeupTitle: string,
  writeupImage: string
}

export default function WriteupCard({ writeupText, writeupTitle, writeupImage }: WriteupProps) {
  return (
    <section className="p-5 sm:p-15 flex flex-col items-center">
      <div className="w-full max-w-4xl mx-auto my-5">
        <h1 className="font-light uppercase font-playFair text-2xl md:text-3xl lg:text-4xl tracking-wider text-[#d63037] text-center">
          {writeupTitle}
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center bg-[#D3CCBA]/20 my-5 sm:my-15 border-2 border-gray-300 max-w-[1920px]">
        <div className="flex items-center justify-center p-5 sm:p-10 order-2 lg:order-1">
          <p className="text-gray-600 text-base sm:text-lg text-center sm:text-left font-roboto leading-relaxed">
            {writeupText}
          </p>  
        </div>
        
        <div className="relative w-full h-64 sm:h-96 lg:h-full order-1 lg:order-2">
          <Image
            src={writeupImage}
            alt="Good is Good Event image"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}