
export const Parallax = ({ imageString }: { imageString: string }) => {

  return (
    <div 
      className="relative flex items-center justify-center h-[70vh]"
      style={{backgroundImage: `url(${imageString})`, backgroundPosition: "center", backgroundSize: "cover", backgroundAttachment: "fixed"}}
      
    >
      <div className="absolute inset-0 bg-gray-900/50"></div>
      
      {/* Optional content container */}
      <div className="relative z-10 px-4 text-center text-white max-w-5xl mx-auto bg-black/50 p-5">
        <h1 className="text-center font-bold text-xl sm:text-2xl tracking-wider font-roboto text-white mb-4">HELP US TO SPREAD OUR LOVE AND FAITH</h1>
        <div className="max-w-[100%]">
           <p className="md:text-xl mb-8 font-roboto text-base">
            Help us to spread our love and faith, not just through words, but through actions that reflect kindness, compassion, and unwavering hope. In a world often clouded by division and doubt, even the smallest gesture of love can spark transformation. When we extend grace, serve others selflessly, and walk in faith, we become living testimonies of a greater light. Join us in creating ripples of positive change—one heart, one soul at a time.
         </p>
        </div>
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
          Call to Action
        </button>
      </div>
    </div>
  )
}