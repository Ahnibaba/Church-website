export const Hero = ({ imageString }: { imageString: string }) => {
    return (
    <div 
      className="relative flex items-center justify-center h-[70vh]"
      style={{
        backgroundImage: `url(${imageString})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed"
      }}
      >
        <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center">
           <div className="relative flex flex-col items-center justify-center w-5xl p-5 max-w-5xl mx-auto">
              <h1 className="text-center font-bold text-xl sm:text-2xl text-white font-playFair tracking-widest">ABOUT US</h1>
              <div className="my-5 w-full p-5">
                <p className="sm:text-xl text-lg font-roboto font-bold text-white text-center">
                   We are a mission, Commissioned to raising and nurturing God&apos;s Children for Heaven,
                   saddled with the task of propagating sound doctrines, far from heireses, making sure the government of
                   Heaven gains expression in the sphere of all realms.

                </p>
              </div>
              <p></p>

           </div>
        </div>
    </div>
    )
}