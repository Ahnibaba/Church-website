export const Ready = () => {
    return (
        <section className="w-full">
            <div
                className="w-full h-[50vh] md:h-[70vh] lg:h-[100vh] relative"
                style={{
                    backgroundImage: `url("/ready.jpg")`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                }}
            >
                <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center">
                    <div className="flex max-w-7xl h-full">
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 p-5">
                            <div className="flex items-center justify-center">
                             <h1 className="text-center font-roboto font-black text-8xl text-white">
                                ARE YOU READY FOR THIS YEAR&apos;S EDITION
                             </h1>
                            </div>
                            <div className="flex items-center justify-center relative">
                              <div
                               className="absolute left-5 h-78 w-78"
                               style={{
                                 backgroundImage: `url(/youth.jpg)`,
                                 backgroundSize: "cover",
                                 backgroundRepeat: "no-repeat",
                                 backgroundPosition: "center",

                               }}
                              >

                              </div>
                              <div
                               className="absolute left-60 top-5 h-50 w-100"
                               style={{
                                 backgroundImage: `url(/youth2.jpg)`,
                                 backgroundSize: "cover",
                                 backgroundRepeat: "no-repeat",
                                 backgroundPosition: "center",

                               }}
                              >

                              </div>
                              <div
                               className="absolute left-60 bottom-0 h-50 w-100"
                               style={{
                                 backgroundImage: `url(/youth3.jpg)`,
                                 backgroundSize: "cover",
                                 backgroundRepeat: "no-repeat",
                                 backgroundPosition: "center",

                               }}
                              >

                              </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}