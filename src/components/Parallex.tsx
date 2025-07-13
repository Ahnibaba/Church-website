
export const Parallax = () => {
  return (
    <div 
      className="relative flex items-center justify-center h-[70vh] bg-scroll lg:bg-fixed bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
      
    >
      <div className="absolute inset-0 bg-black/70"></div>
      
      {/* Optional content container */}
      <div className="relative z-10 px-4 text-center text-white max-w-5xl mx-auto p-5">
        <h1 className="text-center font-bold text-xl sm:text-2xl tracking-wider font-roboto text-white mb-4">HELP US TO SPREAD OUR LOVE AND FAITH</h1>
        <div className="max-w-[100%]">
           <p className="mb-8 font-roboto">
             In a world longing for hope, your kindness can be a spark. Join us in spreading love that heals and faith that uplifts. Through every act of compassion, every word of truth, we shine light in the darkness—together.
           </p>
        </div>
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
          Call to Action
        </button>
      </div>
    </div>
  )
}