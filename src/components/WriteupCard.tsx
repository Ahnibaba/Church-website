import Image from "next/image";

export default function WriteupCard() {
  return (
    <section className="min-h-[90vh] p-5 sm:p-15">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="font-light uppercase font-playFair text-2xl md:text-3xl lg:text-4xl tracking-wider text-[#d63037] text-center">GOD IS GOOD SERVICE</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center bg-[#D3CCBA]/20 my-5 sm:my-15 border-2 border-gray-300 overflow-hidden">
        <div className="flex items-center justify-center p-5 sm:p-10 order-2 lg:order-1">
          <p className="text-gray-600 text-base sm:text-lg text-center sm:text-left font-roboto leading-relaxed">
            The Good is Good Event is a time to retreat from the noise of the world and intentionally draw near to God. In the stillness of these moments, we look inward, asking ourselves life&apos;s deeper questions. We revisit the paths we&apos;ve walked, the challenges we&apos;ve overcome, and the blessings we often overlook. It is a space where we examine our hearts, our faith, and the ways in which God&apos;s goodness has been woven through every season of our lives.
          </p>
        </div>
        
        <div className="relative w-full h-64 sm:h-96 lg:h-full order-1 lg:order-2">
          <Image
            src="/each-next7.jpg"
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