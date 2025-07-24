export const Hero = ({ imageString, text, title }: { imageString: string, text: string, title: string }) => {
    return (
    <div 
       className="relative flex items-center justify-center h-[70vh] bg-center bg-cover bg-scroll lg:bg-fixed mt-5"
       style={{ backgroundImage: `url(${imageString})` }}
      >
        <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center">
           <div className="relative flex flex-col items-center justify-center w-5xl p-5 max-w-5xl mx-auto">
              <h1 className="text-center font-extrabold text-2xl sm:text-3xl text-white font-playFair tracking-widest">{title}</h1>
              <div className="my-5 w-full p-5">
                <p className="sm:text-xl text-lg font-roboto font-medium text-white text-center">
                  {text}
                </p>
              </div>

           </div>
        </div>
    </div>
    )
}