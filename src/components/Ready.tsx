export const Ready = () => {
    return (
        <section className="relative">
            {/* Background Image */}
            <div
                className="w-full h-[50vh] md:h-[95vh] lg:h-[100vh]"
                style={{
                    backgroundImage: `url("/ready.jpg")`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                }}
            />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="w-full max-w-8xl mx-auto">
                    <div className="grid grid-cols-2 gap-8">
                        {/* Text Section */}
                        <div className="flex items-center justify-center p-4">
                            <h1 className="text-center font-roboto font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-white">
                                ARE YOU READY FOR THIS YEAR&apos;S EDITION
                            </h1>
                        </div>

                        {/* Images Section */}
                        <div className="relative h-64 sm:h-80 md:h-96 lg:h-[30rem] xl:h-[35rem]">
                            {/* First Image */}
                            <div
                                className="absolute mt-5 left-0 h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64 xl:h-72 xl:w-72 2xl:h-80 2xl:w-80"
                                style={{
                                    backgroundImage: `url(/youth.jpg)`,
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                }}
                            />
                            
                            {/* Second Image */}
                            <div
                                className="absolute left-20 sm:left-24 md:left-28 lg:left-32 xl:left-36 2xl:left-40 top-16 sm:top-20 md:top-24 h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-56 lg:w-56 xl:h-64 xl:w-64"
                                style={{
                                    backgroundImage: `url(/youth2.jpg)`,
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                }}
                            />
                            
                            {/* Third Image */}
                            <div
                                className="absolute left-10 sm:left-12 md:left-16 lg:left-20 xl:left-24 2xl:left-28 top-32 sm:top-40 md:top-48 lg:top-56 xl:top-64 h-28 w-28 sm:h-36 sm:w-36 md:h-44 md:w-44 lg:h-52 lg:w-52 xl:h-60 xl:w-60"
                                style={{
                                    backgroundImage: `url(/youth3.jpg)`,
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}