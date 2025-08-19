

export const DisplayedLessonLoading = () => {
    return (
        <div className="flex flex-col w-full sm:w-3xl mx-auto py-8 sm:py-5">
            <div className="w-full flex items-start justify-center text-[#FFFDD0] p-5">
                <div className="w-full flex flex-col">
                    <div className="flex justify-end">
                        <h3 className="w-25 h-5 bg-[#FFFDD0]/50 animate-pulse"></h3>
                    </div>
                    <div className="h-15 flex flex-col gap-2 mb-2">
                        <span className="bg-[#FFFDD0]/50 animate-pulse flex items-center justify-center w-25 h-5 px-5"></span>
                        <div className="bg-[#FFFDD0]/50 animate-pulse flex items-center justify-center w-75 h-5 px-5"></div>
                    </div>
                    <div className="h-15 flex flex-col gap-2 mb-2">
                        <span className="bg-[#FFFDD0]/50 animate-pulse flex items-center justify-center w-25 h-5 px-5"></span>
                        <div className="bg-[#FFFDD0]/50 animate-pulse flex items-center justify-center w-50 h-5 px-5"></div>
                    </div>
                    <div className="h-25 flex flex-col gap-2 mb-2">
                        <span className="bg-[#FFFDD0]/50 animate-pulse flex items-center justify-center w-25 h-5 px-5"></span>
                        <div className="bg-[#FFFDD0]/50 animate-pulse flex items-center justify-center w-75 sm:w-[30rem] h-5 px-5"></div>
                        <div className="bg-[#FFFDD0]/50 animate-pulse flex items-center justify-center w-35 h-5 px-5"></div>
                    </div>
                    <div className="h-25 flex flex-col gap-2 mb-2">
                        <span className="bg-[#FFFDD0]/50 animate-pulse flex items-center justify-center w-25 h-5 px-5"></span>
                        <div className="bg-[#FFFDD0]/50 animate-pulse flex items-center justify-center w-75 sm:w-[30rem]h-5 px-5"></div>
                        <div className="bg-[#FFFDD0]/50 animate-pulse flex items-center justify-center w-35 h-5 px-5"></div>
                    </div>
                    <div className="h-25 flex flex-col gap-2 mb-2">
                        <span className="bg-[#FFFDD0]/50 animate-pulse flex items-center justify-center w-25 h-5 px-5"></span>
                        <div className="bg-[#FFFDD0]/50 animate-pulse flex items-center justify-center w-75 sm:w-[30rem] h-5 px-5"></div>
                        <div className="bg-[#FFFDD0]/50 animate-pulse flex items-center justify-center w-35 h-5 px-5"></div>
                    </div>
                    <div className="h-25 flex flex-col gap-2 mb-2">
                        <span className="bg-[#FFFDD0]/50 animate-pulse flex items-center justify-center w-25 h-5 px-5"></span>
                        <div className="bg-[#FFFDD0]/50 animate-pulse flex items-center justify-center w-75 sm:w-[30rem] h-5 px-5"></div>
                        <div className="bg-[#FFFDD0]/50 animate-pulse flex items-center justify-center w-75 sm:w-[30rem] h-5 px-5"></div>
                        <div className="bg-[#FFFDD0]/50 animate-pulse flex items-center justify-center w-75 sm:w-[30rem] h-5 px-5"></div>
                    </div>
                    <div className="h-25 flex flex-col gap-2 mb-2">
                        <span className="bg-[#FFFDD0]/50 animate-pulse flex items-center justify-center w-25 h-5 px-5"></span>
                        <div className="bg-[#FFFDD0]/50 animate-pulse flex items-center justify-center w-75 sm:w-[30rem] h-5 px-5"></div>
                        <div className="bg-[#FFFDD0]/50 animate-pulse flex items-center justify-center w-75 sm:w-[30rem] h-5 px-5"></div>
                        <div className="bg-[#FFFDD0]/50 animate-pulse flex items-center justify-center w-75 sm:w-[30rem] h-5 px-5"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export const SundaySchoolLessonLoading = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center p-2 gap-2">
            {([...Array(14)]).map((_, index) => (
                <div key={index} className=" w-full min-w-[320px] sm:min-w-md flex flex-col gap-4 rounded-lg p-5 shadow-sm hover:shadow-lg transition-shadow ring-1 ring-black/5 cursor-pointer">
                    <div className="h-2 w-full bg-gray-100 animate-pulse">
                    </div>
                    <div className="h-5 w-full bg-gray-100 animate-pulse">
                    </div>
                    <div className="h-12 w-full bg-gray-100 animate-pulse">
                    </div>
                    <button
                        className="w-[10rem] h-10 bg-gray-100 animate-pulse p-5 rounded-lg text-white"
                    >

                    </button>
                </div>
            ))}
        </div>
    )
}