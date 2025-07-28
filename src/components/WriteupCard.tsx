import Image from "next/image"
export default function WriteupCard() {
  return (
    <div className="h-70vh p-5 sm:p-15">
      <div className="w-full mx-auto">
        <h3 className="text-center text-[#d63037] text-xl tracking-wider font-roboto">
          Welcome to Good is Good Event, this event is held annually, in the month of September, its a time of retreat
          with God, it's a time we search inward, its a time we think deep about the good things God has done for us, its
          a time we show God our heart-felt gratitude for all the things he has done for us
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center bg-[#D3CCBA]/20 my-25 rounded-lg border-2 border-gray-300">
        <div className="flex items-center justify-center">
          <p className="text-gray-600 text-lg text-center p-5 font-roboto">
            The Good is Good Event is a time to retreat from the noise of the world and intentionally draw near to God. In the stillness of these moments, we look inward, asking ourselves life’s deeper questions. We revisit the paths we've walked, the challenges we’ve overcome, and the blessings we often overlook. It is a space where we examine our hearts, our faith, and the ways in which God's goodness has been woven through every season of our lives.
            This is not just an event—it is a personal and communal journey. We gather as individuals, families, and communities to remember the countless acts of grace and mercy God has shown us. From answered prayers to silent comforts, from visible miracles to quiet provisions, this is a time to acknowledge them all.
            </p>
        </div>
        <div className="p-5">
          <Image
            src="/each-next7.jpg"
            alt="writeup img"
            width={2048}
            height={1365}
            
          />

        </div>
      </div>
    </div>
  )
}