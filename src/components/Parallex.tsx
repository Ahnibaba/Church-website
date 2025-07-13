export const Parallax = () => {
  return (
    <div className="relative h-[70vh] w-full bg-[url('https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover bg-fixed">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900/50"></div>
      
      {/* Content container */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 text-center text-white">
        <div className="mx-auto max-w-5xl bg-[#d63037]/50 p-5">
          <h1 className="mb-4 text-center font-roboto text-xl font-bold tracking-wider text-white sm:text-2xl">
            HELP US TO SPREAD OUR LOVE AND FAITH
          </h1>
          <div className="max-w-[100%]">
            <p className="md:text-xl mb-8 font-roboto text-base">
            Help us to spread our love and faith, not just through words, but through actions that reflect kindness, compassion, and unwavering hope. In a world often clouded by division and doubt, even the smallest gesture of love can spark transformation. When we extend grace, serve others selflessly, and walk in faith, we become living testimonies of a greater light. Join us in creating ripples of positive change—one heart, one soul at a time.
         </p>
          </div>
          <button className="rounded-lg bg-blue-600 px-6 py-3 transition-colors hover:bg-blue-700">
            Call to Action
          </button>
        </div>
      </div>
    </div>
  )
}